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
      query: "Re"
    };
  }
  render() {
    // general search function
    const searchThem = (arr, query, callback) => {
        return  arr.filter(item =>(callback(item)).toLowerCase().search(query.toLowerCase())!==-1)
    }
    // applying function to search by first and last name
    const searchedMembers = searchThem(this.state.personData, this.state.query, (item) => (item.firstName+item.lastName))

     const AllMembers = searchedMembers.map(MyData => (
      <MembersList key={uuid()} personData={MyData} />
    ));
    return (

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



    );
  }
}

export default Members;
