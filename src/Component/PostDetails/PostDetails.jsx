import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const postDetail = useLoaderData();

  const {postId} = useParams()

  const navigate = useNavigate();

  const { id, title, body } = postDetail;

  const handleGoBack = () => {
    navigate(-1); //back one step from url
  };

  {
    console.log(postId)
  }

  const postDetailsStyle = {
    border: "2px solid salmon",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "2rem",
  };
  return (
    <div style={postDetailsStyle}>
      <h2>Post details id:{id}</h2>
      <p>{title}</p>
      <p>{body}</p>

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
