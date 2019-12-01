import React, {useState} from "react";
import moment from 'moment';
import DbApi from "./Dbapi/Dbapi";
import Weather from "./Weather/Weather";
import PersonList from "./PersonList/PersonList";

import "./Monitor.css";

const Monitor = () => {

  // state to show section
  const [showSection, setShowSection] = useState(false);
  const MINUT = 60000;
  
  // checking time every 10 minutes and hide api section between 7 pm and 8 am
  setInterval(() => {
        setShowSection(moment().format('HH') > 8 && moment().format('HH') < 19)
    }, 10*MINUT);

  
    return (
      <div className="monitor">

        <PersonList />

        <div className="api">
          <Weather
            apiKey="5b8aac88f05d77df8cf00012dad30f43" 
            city="Düsseldorf"
            country="Germany"
          />

          {/* show api on time */}
          {showSection &&  
            <DbApi />
          }

        </div>

      </div>
    );
}

export default Monitor;
