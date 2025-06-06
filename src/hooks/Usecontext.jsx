import React from 'react'
import { useContext } from "react";
import { Data } from "../contextAPI/Provider";

const UserProfile = () => {
    const {user} = useContext(Data);
  return (
    <div>
        <h1>User Profile</h1>
        <p>Name: {user.name}</p>
    </div>
  )
}

export default UserProfile