/**
 * Created by Ardy Chen on 9/29/2017.
 */
import React from 'react'

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {identifier: ""}
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    let identifier = document.getElementById("identifier");

    this.setState({
      identifier: identifier.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <button id="submitBtn" onClick={this.clickHandler}>Submit</button>
        </div>
        <div id="clickOutput">
          {this.state.identifier}
        </div>
      </div>

    );
  }
}

export default SubmitButton