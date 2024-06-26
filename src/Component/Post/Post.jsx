import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {

    const {id,title}=post;

    const navigate = useNavigate();

    const postStyle ={
        border:'2px solid yellow',
        padding:'1rem',
        borderRadius:'1rem',
        gap:'0.5rem'
    }

    const handleShowDetail =()=>{
 navigate(`/posts/${id}`);
    }
    return (
        <div style={postStyle}>
            <h2>post of id:{id}</h2>
            <p>{title}</p>

            <Link to={`/posts/${id}`}>Post Details</Link>


            <button onClick={handleShowDetail}> Click to see details</button>
        </div>
    );
};

export default Post;