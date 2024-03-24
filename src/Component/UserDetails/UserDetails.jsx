
import { useLoaderData } from "react-router-dom";
export default function UserDetails(){

    const user = useLoaderData();
    const {name,email}=user;
    return(
        <div>
           <h1>Name: {name}</h1> 
           <p>Email: {email}</p>
        </div>
    )
}