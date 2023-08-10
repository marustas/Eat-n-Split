import "./index.css";
import React, { useState } from "react";

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
  const [showAddFriend, setShowAddFriend] = useState(false);
  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onSetShowAddFriend={handleShowAddFriend}>
          {!showAddFriend ? "Add friend" : "Close"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

const FriendsList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  const { name, image, balance } = friend;
  return (
    <li>
      <img alt={name} src={image}></img>
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} {Math.abs(balance)}$
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you {Math.abs(balance)}$
        </p>
      )}
      {balance === 0 && <p className="grey">You are even</p>}
      <Button>Select</Button>
    </li>
  );
};

const FormAddFriend = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFriend = {
      name: name,
      balance: 0,
      image: image,
      id: crypto.randomUUID,
    };
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add </Button>
    </form>
  );
};

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with </h2>
      <label>💸 Bill balue</label>
      <input type="text" />
      <label>Your expense</label>
      <input type="text" />
      <label>Your friend's expense</label>
      <input type="text" disabled />
      <label>🤑 Who's paying the bill?</label>
      <select>
        <option value="you">You</option>
        <option value="friend">Your friend</option>
      </select>
      <Button>Split the bill </Button>
    </form>
  );
};
const Button = ({ children, onSetShowAddFriend }) => {
  return (
    <button onClick={onSetShowAddFriend} className="button">
      {children}
    </button>
  );
};
export default App;
