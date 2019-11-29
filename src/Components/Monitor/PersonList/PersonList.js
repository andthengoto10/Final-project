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

// person icons to load person icon dynamically
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
    {icon: 'penguin', name: 'Anton', medCheck: (new Date('2019-11-21')), id: 2},
    {icon: 'horse', name: 'Sam', medCheck: (new Date('2019-10-24')), id: 3},
    {icon: 'monkey', name: 'Polite', medCheck: (moment().format('LT')), id: 4},
    {icon: 'bull', name: 'Christian', medCheck: (new Date('2019-09-21')), id: 5},
    {icon: 'rabbit', name: 'Rehab', medCheck: (new Date('2019-11-20')), id: 6},
]);

// parsing persons
let Persons = JSON.parse(initialPersons)
// .sort((a, b) => {
//     return a.medCheck.substring(0,10) < b.medCheck.substring(0,10)? -1:1;
// })


const PersonList = () => {

    // persons state
    const [personsState, setPersons] = useState(Persons)
    // time state
    const [theTime, setTheTime] = useState(moment().format('LTS'))

    // update time every second = clock functionality
    setInterval(() => {
        setTheTime(moment().format('LTS'))
    }, 1000);

    // simulating person coming
    const addPerson = ()=> {
            var newPerson =  JSON.parse(JSON.stringify({icon: 'horse', name: 'Rezan', medCheck: '08:55', id: Math.random()}))
            var Persons = [newPerson, ...personsState]
            setPersons(Persons)
    }

    // mapping person list
    const persons = personsState.map((person, index) => {

        // change syring icon to red when not medicaly checked this month
        var smili = 
            person.medCheck.substring(0,8) > '09:00'?
            icons.mad : icons.happy;

        return(
            <div className={"bar " + (index%2? "even": "odd")} key={person.id} >
                <img src={require(`${icons[person.icon]}`)} alt="Avatar"  />
                <h4 className="name">{person.name}</h4>
                <h4 className="med">{ person.medCheck.substring(0, 10) }</h4>
                <img className="med-check" 
                    src={require(`${smili}`)} 
                    alt="medical check"
                />
                
            </div> 
        )
    })

    return(
        <div className="person-list">
            <div className="bar main-bar">
                <h4 onClick={()=>addPerson()}>Image</h4>
                <h4>Name</h4>
                <h4>[{theTime}]</h4>
                <h4>Treatment</h4>
            </div>

            <div className="persons">
                {persons}
            </div>

        </div>  
    )  
}

export default PersonList