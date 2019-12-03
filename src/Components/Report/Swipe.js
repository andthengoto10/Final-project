import React,{useState} from "react"

const Swipe = ({swipe, handelChange, index}) => {
    const [canEdit, setCanEdit] = useState(false)

    return(     
        <div className={"bar " + (index%2? "odd":"even")} >
            <h3 className="date">{swipe.date}</h3>

            <form onChange={(e)=>{if(canEdit){handelChange(e, swipe)}}} >

                <label>
                <input 
                    type="radio" 
                    name="was"
                    value="true"
                    disabled={!canEdit} 
                    defaultChecked={swipe.was}
                /> Ja
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="was"
                        value=""
                        disabled={!canEdit} 
                        defaultChecked={!swipe.was}
                    /> Nein
                </label>
        
                <input className="med-check" 
                    type="text"
                    disabled={!canEdit} 
                    name="reason"
                    placeholder="Grund" 
                    defaultValue={swipe.reason}
                />
                
            </form>
            <button  
                onClick={()=> {setCanEdit(!canEdit)}}>{canEdit? "save":"edit"}
            </button>
        </div>
        
    )
}

export default Swipe