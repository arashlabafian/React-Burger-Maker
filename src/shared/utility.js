import validator from 'validator';

export const updateObject = (oldObject, newProperties) => {
	return {
		...oldObject,
		...newProperties
	};
};

export const checkValidity = (value, rules) => {
	let isValid = true;
	if (rules) {
		if (rules.required) {
			isValid = validator.trim(value) !== '' && isValid;
		}
		if (rules.email) {
			isValid = validator.isEmail(validator.trim(value)) && isValid;
		}
		if (rules.password) {
			isValid = validator.isLength(validator.trim(value), {min: 6}) && isValid;
		}
	}
	return isValid;
};