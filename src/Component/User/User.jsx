

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
        </div>
    );
};

export default User;