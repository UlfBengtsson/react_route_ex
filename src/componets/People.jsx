import React, { Component } from "react";

class People extends Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ulf</td>
              <td>Bengtsson</td>
            </tr>
            <tr>
              <td>Kent</td>
              <td>Gudmundsen</td>
            </tr>
            <tr>
              <td>Edvin</td>
              <td>Svärd</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default People;
