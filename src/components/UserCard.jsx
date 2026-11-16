import React from "react";

export function UserCard({user}) {
    if (user.disable){
        return (
            <div className="card">
                <h2>Disable</h2>
            </div>
        )
    }
    return (
        <div className="userCard">
            <img src={user.img} alt={user.name} className="userAvatar"/>
            <div className="userInfo">
                <h3 className="userName">{user.name}</h3>
                <p className="userDetail">Возраст: {user.age}</p>
                <p className="userDetail">Город: {user.city}</p>
                {user.active && <span className="status-bedge"> Активен </span>}
            </div>
        </div>
    )
}