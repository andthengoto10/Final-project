import React, {useState} from 'react'
import Swipe from './Swipe'
import './Report.css'

// initial json object
let initialSwipes = JSON.stringify([
    {"date": "01.11.19", "was": true, "in": "", "out": "", reason: "" },
    {"date": "02.11.19", "was": true, "in": "", "out": "", reason: "" },
    {"date": "03.11.19", "was": true, "in": "", "out": "", reason: "" },
    {"date": "04.11.19", "was": true, "in": "", "out": "", reason: "" },
    {"date": "05.11.19", "was": true, "in": "", "out": "", reason: "" },
]);

// parsing json object
let Swipes = JSON.parse(initialSwipes)


const Report = (props) => {
    // const [personState, setPersonState] = useState(props.person)
    const [swipeState, setSwipeState] = useState(Swipes)

    // handel every change
    const handelChange = (e, swipe) =>{
      console.log(e.target, swipe)
            const {name, value, type} = e.target
            var newValue = type==='radio'? !!value : value;
            const newSwipe = swipe ;
            newSwipe[name] = newValue
            const Swipes = [...swipeState];
            Swipes.splice(swipeState.indexOf(swipe), 1, newSwipe);
            setSwipeState(Swipes)
            initialSwipes = JSON.stringify(Swipes)
    }

    // mapping swipe list
    const swipes = swipeState.map((swipe, index) => {
        return(     
              <Swipe 
                key={index}
                swipe={swipe} 
                handelChange={handelChange} 
                index={index}
              /> 
        )
    })

    return(
        <div className="swipes">
        <h2>Rezan Mohammad</h2>
          <div className="bar main-bar">
              <h4>Date</h4>
              <h4>Anwesend</h4>
              <h4>Grund</h4>
              <h4>Ändern</h4>
          </div>
            {swipes}
        </div>
    )

    
}


export default Report