import React, {useEffect, useState} from "react";

function App(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUsers = async () =>{
    const res = await fetch("http://localhost:8080/api/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(()=>{
    fetchUsers();
  },[]);

  const submitUser = async () => {
    await fetch("http://localhost:8080/api/users",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,email})
    });
    setName("");
    setEmail("");
    fetchUsers();
  };

  return (
    <div style={{padding:"20px"}}>
      <h2>Add User</h2>
      <input placeholder = "Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <br /><br />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br /><br />
      <button onClick={submitUser}>Save</button>

      <h2>User List</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}-{u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;