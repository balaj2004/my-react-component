import React from "react";
import { useParams } from "react-router-dom";
import './profile.css';
const UserProfilePage = () => {
const { username } = useParams(); 
const userData = {
username: username,
name: "abdul rafay ",
age: 20,
bio: "Software Developer with a passion for building web applications. Always eager to learn new technologies and explore new ideas.",
location: "karachi ",
};
return (
<div className="profile-container">
<h1>User Profile</h1>
<div className="profile-info">
<p><strong>Username:</strong> {userData.username}</p>
<p><strong>Name:</strong> {userData.name}</p>
<p><strong>Age:</strong> {userData.age}</p>
<p><strong>Bio:</strong> {userData.bio}</p>
<p><strong>Location:</strong> {userData.location}</p>
</div>
</div>
  );
};

export default UserProfilePage;

