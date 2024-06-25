export default class Validator {
	validatorUsername(username) {
		return /^(?!\d{4,})[a-zA-Z][\da-zA-Z-_]*[a-zA-Z]$/
	}
}
