import React from "react";

const Profile = props => (
    <div>
      {
        props.avatar && <img src={props.avatar} alt="github avatar" height="120" width="120"/>
      }
      {
        props.name && <p>Name: {props.name}</p>
      }
      {
        props.company &&<p>Company: {props.company}</p>
      }
      {
        props.bio && <p>Bio: {props.bio}</p>
      }
      {
        props.location && <p>Location: {props.location}</p>
      }
      {
        props.repos && <p>Repos: {props.repos}</p>
      }
      {
        props.url && <p>Github URL: <a href={props.url}>{props.url}</a></p>
      }
    </div>
);

export default Profile;