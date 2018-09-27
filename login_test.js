Feature('Login')

Scenario('Login with Valid Credentials', async (I, authPage) => {
  I.seeElement(authPage.field.landingpageField)
  I.click(authPage.button.loginButton)
  I.seeElement(authPage.field.usernameField)
  I.fillField(authPage.field.usernameField, authPage.value.usernameValue)
  I.seeElement(authPage.field.passwordField)
  I.fillField(authPage.field.passwordField, authPage.value.passwordValue)
  I.click(authPage.button.submitLoginButton)
  I.seeElement(authPage.field.homeField)
})

Scenario('Login with Invalid Credentials', async (I, authPage) => {
  I.seeElement(authPage.field.landingpageField)
  I.click(authPage.button.loginButton)
  I.seeElement(authPage.field.usernameField)
  I.fillField(authPage.field.usernameField, authPage.value.usernameValueInvalid)
  I.seeElement(authPage.field.passwordField)
  I.fillField(authPage.field.passwordField, authPage.value.passwordValueInvalid)
  I.click(authPage.button.submitLoginButton)
  I.seeElement(authPage.field.loginFailedField)
})
