import React from "react";
import Data from "../Data.json";
import "./Members.css";
import MembersList from "./MembersList";
import uuid from "react-uuid";

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      personData: Data,
      query: ""
    };
  }
  render() {
    const AllMembers = this.state.personData
    .filter(item =>(item.firstName+item.lastName).toLowerCase().search(this.state.query)!==-1)
    .map(MyData => (
      <MembersList key={uuid()} personData={MyData} />
    ));
    return (
<<<<<<< HEAD
      <section className="membersContainer">
        <table className="membersTable">
          <tr>
            <th>Matrikel Nummer</th>
            <th>Name</th>
            <th>Telefonnummer</th>
            <th>E-Mail</th>
            <th>Addresse</th>
          </tr>
          {AllMembers}
        </table>
      </section>
=======

      <section className="membersContainer">
      
        {/* search */}
        <div className="search-members" >
          <label htmlFor="search">search</label>
          <input id="search" type="text" 
            value={this.state.query} 
            onChange={(e) => this.setState({query: e.target.value})}
          />
        </div>
        {/* search */}
        
        <table className="membersTable">

        <tr>
          <th>Matrikel Nummer</th>
          <th>Name</th>
          <th>Telefonnummer</th>
          <th>E-Mail</th>
          <th>Addresse</th>
        </tr>
        {AllMembers}
      </table>
      </section>



>>>>>>> bf937db4785472020af237160ad52d172a62485c
    );
  }
}

export default Members;
