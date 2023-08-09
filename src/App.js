import "./index.css";
import React from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
};

const FriendsList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  const { name, image, balance } = friend;
  return (
    <li>
      <img alt="friend" src={image}></img>
      <p>{name}</p>
      <p>{balance}</p>
    </li>
  );
};

export default App;
