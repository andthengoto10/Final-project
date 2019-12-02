import React, { useState } from "react";
import moment from "moment";
import "./PersonList.css";

// importing images
import anton from "./personImages/anton.png";
import waeel from "./personImages/waeel.png";
import rezan from "./personImages/rezan.png";
import mustafa from "./personImages/mustafa.png";
import penguin from "./personImages/penguin.png";
import horse from "./personImages/horse.png";
import monkey from "./personImages/monkey.png";
import rabbit from "./personImages/rabbit.png";
import bull from "./personImages/bull.png";
import mad from "./personImages/mad.png";
import sad from "./personImages/sad.png";
import happy from "./personImages/happy.png";
import disappointment from "./personImages/disappointment.jpg";
// popup image should be same size, in this case w600/h450
// import disaster from './personImages/disaster.jpg'
// import drama from './personImages/drama.jpg'
import disaster from "./personImages/ontime.jpg";
import drama from "./personImages/tolate.jpg";

// person icons to be loaded dynamically
let icons = {
  anton,
  mustafa,
  rezan,
  waeel,
  penguin,
  horse,
  monkey,
  rabbit,
  bull,
  mad,
  sad,
  happy,
  disappointment,
  drama,
  disaster
};

// initial json object
let initialPersons = JSON.stringify([
  { icon: "mustafa", name: "Mustafa", arrive: "08:40 AM", id: Math.random() },
  { icon: "waeel", name: "Waeel", arrive: "08:44 AM", id: Math.random() }
]);

// parsing initialPersons
let Persons = JSON.parse(initialPersons).sort((a, b) => {
  return a.arrive < b.arrive ? 1 : -1;
});

// new persons to add when arrived
let newPersons = [
  { icon: "rezan", name: "Rezan", arrive: "08:43 AM", id: Math.random() },
  // {icon: 'penguin', name: 'Maistro', arrive: '08:49 AM', id: Math.random()},
  // {icon: 'anton', name: 'Anton', arrive: (moment().subtract(1, 'hours').format('LT')), id: Math.random()},
  {
    icon: "anton",
    name: "Anton",
    arrive: moment().format("LT"),
    id: Math.random()
  }
];

const PersonList = () => {
  // state for persons list
  const [personsState, setPersons] = useState(Persons);
  // clock state
  const [clock, setClock] = useState(moment().format("LT"));
  // index state to add new person
  const [index, setIndex] = useState(0);
  // state for popup image when person is late
  const [showPopup, setShowPopup] = useState(false);
  const [popImg, setPopImg] = useState(icons.disaster);
  const [setArrivedName] = useState("");

  // some time constants
  //course start time
  const ON_TIME = "09:00";
  const SECOND = 1000;
  //duration of pupup image
  const POPUP_DURATION = 5 * SECOND;

  // update time every 10 secons = clock functionality
  setInterval(() => {
    setClock(moment().format("LT"));
  }, 10 * SECOND);

  // simulating person coming and add them to person state
  const addPerson = () => {
    if (index < newPersons.length) {
      var arrivedPerson = JSON.parse(JSON.stringify(newPersons[index]));
      var Persons = [arrivedPerson, ...personsState];
      setPersons(Persons);
      setIndex(index + 1);
      // setArrivedName(arrivedPerson.name);
      // showing popup if person arrived late
      if (arrivedPerson.arrive > ON_TIME) {
        setPopImg(icons.drama);
      } else {
        setPopImg(icons.disaster);
      }
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, POPUP_DURATION);
    }
  };
  const smiliStyle = {
    height: "50px",
    marginTop: "23px"
  };

  const userPic = {
    height: "100px"
  };
  // mapping persons list
  const persons = personsState.map((person, index) => {
    // change smili icon based on time
    var smili = person.arrive > ON_TIME ? icons.sad : icons.happy;

    return (
      <div className={"bar " + (index % 2 ? "odd" : "even")} key={person.id}>
        <img src={icons[person.icon]} style={userPic} alt="Avatar" />
        <h4 className="name">{person.name}</h4>
        {/* <h4 className="med">{person.arrive}</h4> */}
        <img className="smili" style={smiliStyle} src={smili} alt="smili" />
      </div>
    );
  });

  return (
    <div className="person-list">
      <div className="bar main-bar" onClick={() => addPerson()}>
        <h3>[{clock}]</h3>

        {/* <h4 >Image</h4>
                <h4>Name</h4>
                <h4><strong>{theTime}</strong></h4>
                <h4>Treatment</h4> */}
      </div>

      <div className="persons">
        {persons}
        {/* display different popup whether person is late or not */}
        {showPopup && (
          <div className="popup">
            <div
              className="popup-img"
              style={{ backgroundImage: `url(${popImg})` }}
            >
              {/* <h2>{{ arrivedName }}</h2> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonList;
