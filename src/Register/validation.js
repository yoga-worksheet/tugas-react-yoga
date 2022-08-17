const validate = (data) => {
	let message = [];
	//eslint-disable-next-line
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (data.name === "") {
		message.push("Name can't be empty");
	}

	if (data.email === "") {
		message.push("Email can't be empty");
	}

    if(!data.email.match(emailRegex)){
        message.push("Email is not valid");
    }

	if (data.password === "") {
		message.push("Password can't be empty");
	}

    if (data.password.length < 8) {
		message.push("Minimum password 8 character");
	}

	if (data.confirmPassword === "") {
		message.push("Password Confirmation can't be empty");
	}

	if (data.password !== data.confirmPassword) {
		message.push("Password Confirmation doesn't match");
	}

    return message;
};

export default validate;
