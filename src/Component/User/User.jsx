import { Link } from "react-router-dom";


const User = ({user}) => {
    const{name,id,email,phone}=user;

    const userStyle={
        border:'2px solid salmon',
        padding:'1rem',
        borderRadius:'1rem',
        margin:'1rem'
    }
    return (
        <div style={userStyle}>
            <h5>Name: {name}</h5>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
            <button>Click here </button>
            </Link>


        </div>
    );
};

export default User;