import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {

    const postDetail = useLoaderData();

    const{id,title,body}=postDetail;

    const postDetailsStyle={
        border:'2px solid salmon',
        padding:'1rem',
        margin:'1rem',
        borderRadius:'2rem'
    }
    return (
        <div style={postDetailsStyle}>
            <h2>Post details id:{id}</h2>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;