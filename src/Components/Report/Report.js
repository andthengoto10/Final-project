import React, { useState } from "react";
import Swipe from "./Swipe";
import "./Report.css";
import { Link } from "react-router-dom";

import Data from "../Data.json";
import exp from "./export.png";

// initial json object
let initialSwipes = JSON.stringify([
  { date: "01.01.19", was: true, in: "", out: "", reason: "" },
  { date: "02.01.19", was: true, in: "", out: "", reason: "" },
  { date: "03.01.19", was: true, in: "", out: "", reason: "" },
  { date: "04.01.19", was: true, in: "", out: "", reason: "" },
  { date: "05.01.19", was: true, in: "", out: "", reason: "" },
  { date: "06.01.19", was: true, in: "", out: "", reason: "" },
  { date: "07.01.19", was: true, in: "", out: "", reason: "" },
  { date: "08.01.19", was: true, in: "", out: "", reason: "" },
  { date: "09.01.19", was: true, in: "", out: "", reason: "" },
  { date: "10.01.19", was: true, in: "", out: "", reason: "" },
  { date: "11.01.19", was: true, in: "", out: "", reason: "" },
  { date: "12.01.19", was: true, in: "", out: "", reason: "" },
  { date: "13.01.19", was: true, in: "", out: "", reason: "" },
  { date: "14.01.19", was: true, in: "", out: "", reason: "" },
  { date: "15.01.19", was: true, in: "", out: "", reason: "" },
  { date: "16.01.19", was: true, in: "", out: "", reason: "" },
  { date: "17.01.19", was: true, in: "", out: "", reason: "" },
  { date: "18.01.19", was: true, in: "", out: "", reason: "" },
  { date: "19.01.19", was: true, in: "", out: "", reason: "" },
  { date: "20.01.19", was: true, in: "", out: "", reason: "" },
  { date: "21.01.19", was: true, in: "", out: "", reason: "" },
  { date: "22.01.19", was: true, in: "", out: "", reason: "" },
  { date: "23.01.19", was: true, in: "", out: "", reason: "" },
  { date: "24.01.19", was: true, in: "", out: "", reason: "" },
  { date: "25.01.19", was: true, in: "", out: "", reason: "" },
  { date: "26.01.19", was: true, in: "", out: "", reason: "" },
  { date: "27.01.19", was: true, in: "", out: "", reason: "" },
  { date: "28.01.19", was: true, in: "", out: "", reason: "" },
  { date: "29.01.19", was: true, in: "", out: "", reason: "" },
  { date: "30.01.19", was: true, in: "", out: "", reason: "" }
]);

// parsing json object
let Swipes = JSON.parse(initialSwipes);

const Report = props => {
  // const [personState, setPersonState] = useState(props.person)
  const [swipeState, setSwipeState] = useState(Swipes);

  // handel every change
  const handelChange = (e, swipe) => {
    console.log(e.target, swipe);
    const { name, value, type } = e.target;
    var newValue = type === "radio" ? !!value : value;
    const newSwipe = swipe;
    newSwipe[name] = newValue;
    const Swipes = [...swipeState];
    Swipes.splice(swipeState.indexOf(swipe), 1, newSwipe);
    setSwipeState(Swipes);
    initialSwipes = JSON.stringify(Swipes);
  };

  // mapping swipe list
  const swipes = swipeState.map((swipe, index) => {
    return (
      <Swipe
        key={index}
        swipe={swipe}
        handelChange={handelChange}
        index={index}
      />
    );
  });

  return (
    <div className="swipes">
      <div className="select">
        <select name="Kurs" id>
          <option>Kurs 1</option>
          <option>Kurs 2</option>
          <option>Kurs 3</option>
          <option>Kurs 4</option>
        </select>
        <select name="Name" id="">
          <option>Waeel Alsydo</option>
          <option>Ricardo Granella</option>
          <option>Mustafa Keser</option>
          <option>Rezan Mohammad</option>
          <option value="">Eric Noack</option>
          <option value="">Georg Trietz</option>
          <option value="">Anton Rybakov</option>
          <option value="">Rihab Al Yasiri</option>
          <option value="">Klaus Knippertz</option>
          <option value=""> Ali Sulehria</option>
          <option value="">Sallah Al Haj Ahmad Alkriz</option>
          <option value=""> Michael Reissdorf</option>
          <option value="">Navid Musavi</option>
          <option value="">Abdulrahman Khadouj</option>
        </select>
        <select name="Monat" id="">
          <option value="">Januar</option>
          <option value="">Februar</option>
          <option value="">März</option>
          <option value="">April</option>
          <option value="">May</option>
          <option value="">Juni</option>
          <option value="">Juli</option>
          <option value="">August</option>
          <option value="">September</option>
          <option value="">Oktober</option>
          <option value="">November</option>
          <option value="">December</option>
        </select>
        <Link to="/export">
          <img className="export" src={exp} alt="" />
        </Link>
      </div>

      <div className="bar main-bar">
        <h4>Date</h4>
        <h4>Anwesend</h4>
        <h4>Grund</h4>
        <h4>Ändern</h4>
      </div>
      {swipes}
    </div>
  );
};

export default Report;
