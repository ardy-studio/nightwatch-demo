/**
 * Created by Ardy Chen on 9/29/2017.
 */
import React from 'react'

class IdentifierInputer extends React.Component {

  outInput = (e) => {
    document.getElementById("showInput").innerText = e.target.value;
  }

  render() {
    return (
      <div>
        <label>
          Username:
        </label>
        <div>
          <input id="identifier" type="text" onChange={this.outInput}/>
        </div>
        <div id="showInput">

        </div>
      </div>
    )
  }
}

export default IdentifierInputer