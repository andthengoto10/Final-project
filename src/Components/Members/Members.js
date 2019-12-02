import React from "react";
import Data from "../Data.json";
import "./Members.css";
import MembersList from "./MembersList";
import uuid from "react-uuid";

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personData: Data };
  }
  render() {
    const AllMembers = this.state.personData.map(MyData => (
      <MembersList key={uuid()} personData={MyData} />
    ));
    return (

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



    );
  }
}

export default Members;
