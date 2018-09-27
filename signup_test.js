Feature('Signup')

Scenario.only('Signup with Valid Credentials', async(I, authPage) => {
	I.seeElement(authPage.field.landingpageField)
	I.click(authPage.button.signupButton)
	I.click(authPage.button.emailInsteadButton)
	I.fillField(authPage.field.nameField, authPage.value.nameValue)
	I.fillField(authPage.field.emailField, authPage.value.emailValue)
	I.fillField(authPage.field.passwordRegField, authPage.value.passwordValue)
	I.click(authPage.button.nextSignupButton)
	I.click(authPage.button.submitSignupButton)
	I.wait(5)
});