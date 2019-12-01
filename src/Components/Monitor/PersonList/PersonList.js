import React, {useState} from 'react'
import moment from 'moment'
import './PersonList.css'

// importing images
import anton from './personImages/anton.png'
import waeel from './personImages/waeel.png'
import rezan from './personImages/rezan.png'
import mustafa from './personImages/mustafa.png'
import penguin from './personImages/penguin.png'
import horse from './personImages/horse.png'
import monkey from './personImages/monkey.png'
import rabbit from './personImages/rabbit.png'
import bull from './personImages/bull.png'
import mad from './personImages/mad.png'
import happy from './personImages/happy.png'
import disappointment from './personImages/disappointment.jpg'
import coolForSchool from './personImages/cool-for-school.jpg'
import welcomeWithoutMeme from './personImages/welcome-without-a-meme.jpg'

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
    happy,
    disappointment,
    coolForSchool,
    welcomeWithoutMeme
}

// initial json object
let initialPersons = JSON.stringify([
    {icon: 'mustafa', name: 'Mustafa', arrive: '08:40', id: 5},
    {icon: 'rezan', name: 'Rezan', arrive: '08:34', id: 6},
]);

// parsing initialPersons
let Persons = JSON.parse(initialPersons).sort((a, b) => {
    return a.arrive < b.arrive? 1 : -1;
    })

// new persons to add when arrived
let newPersons = [
        {icon: 'monkey', name: 'monkey', arrive: '08:43', id: Math.random()},
        {icon: 'waeel', name: 'Waeel', arrive: '08:44', id: Math.random()},
        {icon: 'anton', name: 'Anton', arrive: (moment().subtract(1, 'hours').format('LT')), id: Math.random()},
        {icon: 'rezan', name: 'Rezan',arrive: (moment().format('LT')), id: Math.random()}
    ]


const PersonList = () => {

    // state for persons list
    const [personsState, setPersons] = useState(Persons)
    // clock state
    const [clock, setClock] = useState(moment().format('LT'))
    // index state to add new person
    const [index, setIndex] = useState(0)
    // state for popup image when person is late
    const [showPopup, setShowPopup] = useState(false)
    const [popImg, setPopImg] = useState(icons.welcomeWithoutMeme)
    const [arrivedName, setArrivedName] = useState('')

    // some time constants
    //course start time
    const ON_TIME = '09:00'
    const SECOND = 1000
    //duration of pupup image
    const POPUP_DURATION = 5*SECOND

    // update time every 10 secons = clock functionality
    setInterval(() => {
        setClock(moment().format('LT'))
    }, 10*SECOND);

    // simulating person coming and add them to person state
    const addPerson = ()=> {
        if(index<newPersons.length){
            var arrivedPerson =  JSON.parse(JSON.stringify(newPersons[index]))
            var Persons = [arrivedPerson, ...personsState]
            setPersons(Persons)
            setIndex(index+1)
            setArrivedName(arrivedPerson.name)
            // showing popup if person arrived late
            if (arrivedPerson.arrive > ON_TIME) {
                setPopImg(icons.coolForSchool)
            }else{
                setPopImg(icons.welcomeWithoutMeme)
            }
            setShowPopup(true)
            setTimeout(() => {
                setShowPopup(false)
            }, POPUP_DURATION);
        }
    }

    // mapping persons list
    const persons = personsState.map((person, index) => {

        // change smili icon based on time
        var smili = person.arrive > ON_TIME? 
                    icons.mad : icons.happy;

        return(
            <div className={"bar " + (index%2 ? "odd": "even")} key={person.id} >
                <img src={icons[person.icon]} alt="Avatar"  />
                <h4 className="name">{person.name}</h4>
                <h4 className="med">{ person.arrive }</h4>
                <img className="smili" src={smili}  alt="smili"/>
                
            </div> 
        )
    })

    return(
        <div className="person-list">
            <div className="bar main-bar" onClick={()=>addPerson()}>
                    <h3>[{clock}]</h3>

                {/* <h4 >Image</h4>
                <h4>Name</h4>
                <h4><strong>{theTime}</strong></h4>
                <h4>Treatment</h4> */}
            </div>

            <div className="persons">
                {persons}

                {/* display popup if person is late */}
                {showPopup&&
                    <div className='popup'>
                        <div className='popup-img' style={{backgroundImage: `url(${popImg})`}}>
                            <h2>{arrivedName}</h2>
                        </div>
                    </div>
                }
            </div>

        </div>  
    )  
}

export default PersonList