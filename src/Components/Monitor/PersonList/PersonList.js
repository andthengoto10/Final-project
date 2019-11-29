import React, {useState} from 'react'
import moment from 'moment'
import './PersonList.css'

// importing images
import './personImages/penguin.png'
import './personImages/horse.png'
import './personImages/monkey.png'
import './personImages/rabbit.png'
import './personImages/bull.png'
import './personImages/mad.png'
import './personImages/happy.png'

// person icons to be loaded  dynamically
let icons = {
    penguin: './personImages/penguin.png',
    horse: './personImages/horse.png',
    monkey: './personImages/monkey.png',
    rabbit: './personImages/rabbit.png',
    bull: './personImages/bull.png',
    mad: './personImages/mad.png',
    happy: './personImages/happy.png'
}

// initial json object
let initialPersons = JSON.stringify([
    {icon: 'bull', name: 'Christian', arrive: '08:40', id: 5},
    {icon: 'rabbit', name: 'Rehab', arrive: '08:34', id: 6},
]);

// parsing persons
let Persons = JSON.parse(initialPersons).sort((a, b) => {
    return a.arrive < b.arrive? 1 : -1;
    })

// new persons to add when arrived
let newPersons = [
        {icon: 'monkey', name: 'Polite', arrive: '08:43', id: Math.random()},
        {icon: 'horse', name: 'Sam', arrive: '08:44', id: Math.random()},
        {icon: 'penguin', name: 'Anton', arrive: (moment().subtract(1, 'hours').format('LT')), id: Math.random()},
        {icon: 'horse', name: 'Rezan',arrive: (moment().format('LT')), id: Math.random()}
    ]


const PersonList = () => {

    // persons state
    const [personsState, setPersons] = useState(Persons)
    // time state
    const [theTime, setTheTime] = useState(moment().format('LT'))
    // index state to add new person
    const [index, setIndex] = useState(0)

    // update time every minut = clock functionality
    setInterval(() => {
        setTheTime(moment().format('LT'))
    }, 60000);

    // simulating person coming
    const addPerson = ()=> {
        if(index<newPersons.length){
            var arrivedPerson =  JSON.parse(JSON.stringify(newPersons[index]))
            var Persons = [arrivedPerson, ...personsState]
            setPersons(Persons)
            var next = index+1
            setIndex(next)
        }
    }

    // mapping person list
    const persons = personsState.map((person, index) => {

        // change syring icon to red when not medicaly checked this month
        var smili = 
            person.arrive.substring(0,8) > '09:00'?
            icons.mad : icons.happy;

        return(
            <div className={"bar " + (index%2? "even": "odd")} key={person.id} >
                <img src={require(`${icons[person.icon]}`)} alt="Avatar"  />
                <h4 className="name">{person.name}</h4>
                <h4 className="med">{ person.arrive }</h4>
                <img className="smili" 
                    src={require(`${smili}`)} 
                    alt="smili"
                />
                
            </div> 
        )
    })

    return(
        <div className="person-list">
            <div className="bar main-bar">
                <h4 onClick={()=>addPerson()}>Image</h4>
                <h4>Name</h4>
                <h4><strong>{theTime}</strong></h4>
                <h4>Treatment</h4>
            </div>

            <div className="persons">
                {persons}
            </div>

        </div>  
    )  
}

export default PersonList