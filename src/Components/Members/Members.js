import React from "react";
import Data from "../Data.json";
import "./Members.css";
import MembersList from "./MembersList";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

class Members extends React.Component {
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
        <div className="select-members">
          <select name="Kurs" id>
            <option>Kurs 1</option>
            <option>Kurs 2</option>
            <option>Kurs 3</option>
            <option>Kurs 4</option>
          </select>
        </div>
        {/* search */}
        <div className="search-members">
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            type="text"
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />
        </div>
        {/* search */}

        <Link to="/profile">
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
        </Link>
      </section>
    );
  }
}

export default Members;
