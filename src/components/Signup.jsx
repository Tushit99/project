import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "./footer/Footer";
import Footer2 from "./footer/Footer2";
import Navbar from "./Navbar";
import "./signin.css"


const Signup = () => {
  const [newTodo, setNewTodo] = useState("");
  const [pass, setPass] = useState("");
  const [myemail, setemail ] = useState("");     
  const [todos, setTodos] = useState([]);


  const saveInfo = () => {
    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: newTodo,       
        email: myemail ,
        password: pass ,      
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodos([...todos, d]);
        setNewTodo("");
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((r) => r.json())
      .then((d) => {
        setTodos(d);
      });
  }, []);

  return (
    <div className="todo">
      <Navbar /> 
        <input
          type="text"
          value={newTodo} 
          placeholder="Enter Name....."
          onChange={({ target }) => setNewTodo(target.value)}
        />
      <input
        type="email"
        placeholder="Enter Email....."
        value={myemail}
        onChange={({ target }) => setemail(target.value)}
      />
      <input
        type="password"
        value={pass}
        placeholder="Enter Password....."
        onChange={({ target }) => setPass(target.value)}
      />
      <div>
        <button className="infosave" onClick={saveInfo}>Sign up</button>
      </div>
      <div>
        {/* {todos.map((d) => (
          <div key={d.id}> {d.name} </div>
        ))}   */}
      </div>
      <Footer2 />
      <Footer /> 
    </div>
  );
};

export default Signup;
