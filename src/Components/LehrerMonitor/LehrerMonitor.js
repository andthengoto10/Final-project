import React from "react";
import Data from "../Data.json";
import "./Members.css";
import MembersList from "./MembersList";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

class LehrerMonitor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personData: Data,
      query: ""
    };
  }
  render() {
    // general search function
    const searchThem = (arr, query, callback) => {
      return arr.filter(
        item =>
          callback(item)
            .toLowerCase()
            .search(query.toLowerCase()) !== -1
      );
    };
    // applying function to search by first and last name
    const searchedMembers = searchThem(
      this.state.personData,
      this.state.query,
      item => item.firstName + item.lastName
    );

    const AllMembers = searchedMembers.map(MyData => (
      <MembersList key={uuid()} personData={MyData} />
    ));

    return (
      <section className="membersContainer">
        {/* search */}
        {/* <div className="search-members">
          <label htmlFor="search">search</label>
          <input
            id="search"
            type="text"
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />
        </div> */}
        {/* search */}{" "}
        <Link to="/reportUser">
          <h3 className="tableTitel">01.09.2019</h3>
        </Link>
        <table className="membersTable">
          <tr>
            <th>Name</th>
            <th>Anwesenheit</th>
            {/* <th>E-Mail</th>
            <th>Addresse</th> */}
          </tr>
          {AllMembers}
        </table>
      </section>
    );
  }
}

export default LehrerMonitor;
