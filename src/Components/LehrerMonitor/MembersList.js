import React from "react";
// import uuid from "react-uuid";

const MembersList = props => {
  console.log(props);
  console.log(props.personData);
  return (
    <tr>
      {/* <td>{props.personData.matrikelNummer}</td> */}
      <td>{props.personData.firstName + " " + props.personData.lastName}</td>
      {/* <td>{props.personData.telefon}</td> */}
      <td>{props.personData.anwesenheit}</td>
      {/* <td>
        {props.personData.adresse.street +
          ", " +
          props.personData.adresse.stadt}
      </td> */}
    </tr>
  );
};

export default MembersList;
