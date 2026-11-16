import React from "react";
import {UserCard} from "./UserCard";

const usersData = [
    {
        id: 1,
        name: 'Elena',
        age: 18,
        city: 'Mystic Falls',
        disable: false,
        img: 'elenna.jpg'
    },
    {
        id: 2,
        name: 'Stefan Salvatore',
        age: 162,
        city: 'Mystic Falls',
        disable: false,
        img: 'stefan.jpg'
    },
    {
        id: 3,
        name: 'Damon Salvatore',
        age: 170,
        city: 'Mystic Falls',
        disable: false,
        img: 'damon.jpg'
    },
    {
        id: 4,
        name: 'Katherine Pierce',
        age: 530,
        city: 'Bulgaria',
        disable: false,
        img: 'kath.jpg'
    },
    {
        id: 5,
        name: 'Bonnie Bennett',
        age: 18,
        city: 'Mystic Falls',
        disable: false,
        img: 'bonnie.webp'
    },
    {
        id: 6,
        name: 'Caroline Forbes',
        age: 18,
        city: 'Mystic Falls',
        disable: false,
        img: 'caroline.webp'
    },
    {
        id: 7,
        name: 'Klaus Mikaelson',
        age: 1000,
        city: 'New Orleans',
        disable: false,
        img: 'klaus.jpg'
    },
    {
        id: 8,
        name: 'Matt Donovan',
        age: 19,
        city: 'Mystic Falls',
        disable: true,
        img: 'matt.webp',
    },
];

export function UserList() {
    return (
        <div className="userList">
            {usersData.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

