import axios from 'axios'



import React from "react";

import { useReducer } from "react";


const initialState = {

name:"",
age:"",
dob:"",
states:"",
address:"",
pincode:""
};






function reducer(state,action)
{

switch (action.type) {
    case "addname":
        return {...state,name:action.payload};
        case "addage":
            return {...state,age:action.payload}
            case "adddob":
                return {...state,dob:action.payload};
                case "addstate":
                    return {...state,states:action.payload}
                    case "address":
                        return {...state,address:action.payload}
                        case "addpincode":
                            return {...state,pincode:action.payload}
                            
    
    default:
        throw new Error();
}



}









export const Logincontext=React.createContext()



export function Logincontextprovider({children}){


    const [state, dispatch] = useReducer(reducer, initialState);


    function postdata()
    {
    
    axios.post("http://localhost:8080/users",state)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
    
    
    
    }




let {name,age,dob,states,address,pincode}=state


return (
<Logincontext.Provider value={[name,age,dob,states,address,pincode,dispatch,postdata]}>
    {children}
</Logincontext.Provider>
)
}
