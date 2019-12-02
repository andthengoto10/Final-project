import React from "react";
import "./UserProfile.css";
import Data from "../Data.json";
// import uuid from "react-uuid";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { MyData: Data[0], AllData: Data, value: "" };
  }
  handleChange = e => {
    console.log(this.state.AllData);
    let newData = this.state.AllData.filter(el => {
      return el.id === e.target.value;
    });

    this.setState({
      value: e.target.value,
      MyData: newData[0]
    });
    console.log(this.state.MyData);
  };

  render() {
    // const PersonName = this.state.AllData.map(infoPerson => {
    //   return (
    //     <option key={uuid()} value={infoPerson.id}>
    //       {infoPerson.firstName}
    //     </option>
    //   );
    // });
    return (
      <section className="profileContainer">
        <header />
        <section className="profileContent">
          <img className="imgProfile" src={this.state.MyData.photo} alt="" />
          <form>
            <h1>Waeel Alsydo</h1>

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
            <div className="button">
              <input type="submit" value="Save" />
              <input type="button" value="Start" />
              <input type="button" value="Stop" />
            </div>
          </form>
        </section>
      </section>
    );
  }
}

export default Profile;
