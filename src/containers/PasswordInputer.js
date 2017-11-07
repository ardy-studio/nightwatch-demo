/**
 * Created by Ardy Chen on 9/29/2017.
 */
import React from 'react'

class PasswordInputer extends React.Component {


  render() {
    return (
      <div>
        <label>Password:</label>
        <div>
          <input id="password" type="password" />
        </div>
      </div>
    );
  }
}

export default PasswordInputer