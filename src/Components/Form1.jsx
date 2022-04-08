
import { useContext } from "react"
import { Logincontext } from "../Contextapis/Registrationcontext"
import {useNavigate} from "react-router-dom"




export const  Firstform=()=>{
    const navigate=useNavigate()

    const [name,age,dob,states,address,pincode,dispatch]=useContext(Logincontext)

   
console.log(name,age,dob,states,address,pincode)
    return(

<div>

<input type="text" placeholder="name" value={name}  onChange={(e)=>{dispatch({type:"addname",payload:e.target.value})}}  />
<br />
<input type="text" placeholder="age"    onChange={(e)=>{dispatch({type:"addage",payload:e.target.value})}}/>
<br />
<input type="text" placeholder="date of birth" onChange={(e)=>{dispatch({type:"adddob",payload:e.target.value})}}/>
<br />
<button disabled={!name || !age || !dob }  onClick={()=>{navigate("/registration/two")}}>Next</button>




</div>



    )







}