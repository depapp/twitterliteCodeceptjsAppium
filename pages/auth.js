var Chance = require("chance")
var chance = new Chance()

const I = actor()

module.exports = {
  field: {
    landingpageField: "//android.view.View[@index=1]",
    usernameField: "//android.widget.EditText[@index=0]",
    passwordField: "//android.widget.EditText[@index=1]",
    nameField: "//android.widget.EditText[@text='Name']",
    emailField: "//android.widget.EditText[@text='Email']",
    passwordRegField: "//android.widget.EditText[@text='••••••••']",
    homeField: "//android.view.View[@index=1]",
    loginFailedField: "//android.view.View[@index=2]"
  },

  button: {
    loginButton: "//android.view.View[@index=4]",
    signupButton: "//android.view.View[@index=3]",
    emailInsteadButton: "//android.widget.Button[@index=6]",
    submitLoginButton: "//android.widget.Button[@index=2]",
    nextSignupButton: "//android.widget.Button[@index=1]",
    submitSignupButton: "//android.widget.Button[@index=1]"
  },

  value: {
    usernameValue: "educlopedia",
    usernameValueInvalid: chance.first(),
    nameValue: chance.first(),
    emailValue: chance.email({
      domain: "mailinator.com"
    }),
    passwordValue: chance.string(),
    passwordValueInvalid: chance.last()
  }
}