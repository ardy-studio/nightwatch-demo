/**
 * Created by Ardy Chen on 11/7/2017.
 */
import React from 'react'
import IdentifierInputer from '../containers/IdentifierInputer'
import PasswordInputer from '../containers/PasswordInputer'
import SubmitButton from '../containers/SubmitButton'


class LoginForm extends React.Component {

  render() {
    return (
      <div id="loginForm">
        <IdentifierInputer/>
        <PasswordInputer/>
        <SubmitButton/>
      </div>
    )
  }
}

export default LoginForm