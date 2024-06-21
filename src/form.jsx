import React, { useState } from "react";
import "./form.css";
import Users from "./users";

function Form() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [users, setUsers] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const addUser = () => {
    if (name.trim() !== '' && mail.trim() !== '') {
      setUsers([...users, { name: name, mail: mail }]);
      setName('');
      setMail('');
    } else {
      alert("Please enter both name and email.");
    }
  };

  const deleteUser = (index) => {
    // Create a copy of users array
    const updatedUsers = [...users];
    // Remove the user at index
    updatedUsers.splice(index, 1);
    // Update state with the modified array
    setUsers(updatedUsers);
  };

  return (
    <div className="form">
      <div>
        <h1>Add Contact</h1>
        <label htmlFor="name">Name</label>
        <div>
          <input className="input"
            type="text"
            placeholder="Enter name"
            name="Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <label htmlFor="email">E-Mail</label>
        <div>
          <input className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter E-Mail"
            value={mail}
            onChange={handleMailChange}
          />
        </div>
        <div>
          <button className="Add" onClick={addUser}>ADD</button>
        </div>
        <Users users={users} deleteUser={deleteUser} />
      </div>
    </div>

  );
}

export default Form;
