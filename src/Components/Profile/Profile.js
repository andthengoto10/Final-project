import React from "react";
import "./Profile.css";
import Data from "../Data.json";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { MyData: Data[0], SmartL: Data, i: "" };
  }
  handleChange = e => {
    let Smart = this.state.SmartL;
    let i = this.state.i;
    for (i = 0; i < Smart.length; i++) {
      this.setState({
        MyData: Smart[i]
      });
      console.log(Smart[i]);
    }
  };

  render() {
    return (
      <section className="profileContainer">
        <header />
        <section className="profileContent">
          <img className="imgProfile" src={this.state.MyData.photo} alt="" />
          <form>
            <select onChange={this.handleChange}>
              <option>{this.state.SmartL[0].firstName}</option>
              <option>{this.state.SmartL[1].firstName}</option>
              <option>{this.state.SmartL[2].firstName}</option>
            </select>
            <table className="profileTable">
              <tr>
                <th>
                  <label htmlFor="id">ID:</label>
                </th>
                <td>
                  <input type="text" value={this.state.MyData.id} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="chipNumber">Chip Number:</label>
                </th>
                <td>
                  <input
                    type="text"
                    placeholder={this.state.MyData.chipNumber}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="Firstname">First Name:</label>
                </th>
                <td>
                  <input
                    type="text"
                    placeholder={this.state.MyData.firstName}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="Lastname">Last Name:</label>
                </th>
                <td>
                  <input type="text" placeholder={this.state.MyData.lastName} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="telefon">Tel:</label>
                </th>
                <td>
                  <input type="text" placeholder={this.state.MyData.telefon} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="email">E-mail:</label>
                </th>
                <td>
                  <input type="text" placeholder={this.state.MyData.email} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="adresse">Addresse:</label>
                </th>
                <td>
                  <input
                    type="text"
                    placeholder={this.state.MyData.adresse.stadt}
                  />
                  <input
                    type="text"
                    placeholder={this.state.MyData.adresse.street + "Str"}
                  />
                  <input
                    type="text"
                    placeholder={this.state.MyData.adresse.hausNummer}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="roles">Roles:</label>
                </th>
                <td>
                  <input type="text" value={this.state.MyData.roles} />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="matdikelNummer">Matdikel Nummer:</label>
                </th>
                <td>
                  <input
                    type="text"
                    placeholder={this.state.MyData.matrikelNummer}
                  />
                </td>
              </tr>
            </table>
            <input type="submit" value="Save" />
          </form>
        </section>
      </section>
    );
  }
}

export default Profile;
