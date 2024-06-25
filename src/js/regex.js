export default class Validator {
	validateUsername(username) {
		return /^(?!.*\d{4,})[a-zA-Z][\da-zA-Z-_]*[a-zA-Z]$/.test(username)
	}
}
