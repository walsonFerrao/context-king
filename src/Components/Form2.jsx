
import { Logincontext } from "../Contextapis/Registrationcontext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"


export const Formtwo=()=>{

    const [name,age,dob,states,address,pincode,dispatch,postdata]=useContext(Logincontext)


if(!name || !age || !dob)
{
    return <Navigate to="/registration/one"/>
}
else

return(

<div>

<input type="text" placeholder="state of residence" onChange={(e)=>{dispatch({type:"addstate",payload:e.target.value})}}/>
<br />
<input type="text" placeholder="address"  onChange={(e)=>{dispatch({type:"address",payload:e.target.value})}}/>
<br />
<input type="text" placeholder="pincode" onChange={(e)=>{dispatch({type:"addpincode",payload:e.target.value})}}/>
<br />

<button onClick={()=>{postdata()}}>Submit</button>
</div>

)

}