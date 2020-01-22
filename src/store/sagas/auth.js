import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as actions from '../actions';
import axios from "axios/index";

export function* logoutSaga() {
	yield call([localStorage, 'removeItem'], 'token');
	yield call([localStorage, 'removeItem'], 'userId');
	yield call([localStorage, 'removeItem'], 'expirationTime');
	yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
	yield delay(action.expirationTime * 1000);
	yield put(actions.logout());
}

export function* authUserSaga(action) {
	yield put(actions.authStart());
	const API_KEY = 'AIzaSyBJ1Q9ItNpSH693NNGDb1VOFmeCLDS0998';
	let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
	if (!action.isSignup) {
		url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
	}
	const authData = {
		email: action.email,
		password: action.password,
		returnSecureToken: true
	};
	try {
		const response = yield axios.post(url, authData);
		const expirationTime = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
		yield localStorage.setItem('token', response.data.idToken);
		yield localStorage.setItem('expirationTime', expirationTime);
		yield localStorage.setItem('userId', response.data.localId);
		yield put(actions.authSuccess(response.data.idToken, response.data.localId));
		yield put(actions.checkAuthTimeout(response.data.expiresIn));
	} catch (error) {
		yield put(actions.authFail(error.response.data.error));
	}
}

export function* authCheckStateSaga() {
	const token = yield localStorage.getItem('token');
	if (!token) {
		yield put(actions.logout());
	} else {
		const expirationTime = yield new Date(localStorage.getItem('expirationTime'));
		if (expirationTime <= new Date()) {
			yield put(actions.logout());
		} else {
			const userId = yield localStorage.getItem('userId');
			yield put(actions.authSuccess(token, userId));
			yield put(actions.checkAuthTimeout(
				(expirationTime.getTime() - new Date().getTime()) / 1000
			));
		}
	}
}

