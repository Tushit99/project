import React from 'react' 
import { useState} from "react";      
import { useEffect } from "react";  
import axios from 'axios';


const MensTop = () => {
    const [todo, setTodos] = useState([]);
    const [limit, setlimit] = useState(5);
    const [totalcount, settotalcount] = useState(0);
    const [page, setpage] = useState(1);
  
    useEffect(() => {
      axios  
        .get(`http://localhost:8080/menshirt?_page=${page}&_limit=${limit}`)
        .then((r) => {
          setTodos(r.data);
          settotalcount(Number(r.headers["x-total-count"]));
        });
    }, [page, limit]);
  
    return (
        <div className="pick">
        <div className="items">
          {todo.map((todo) => (
            <div key={todo.id} className="item1">  
              <img src={todo.img} alt="" />    
              <h3> {todo.name} </h3>      
              <h3> {todo.brand} </h3>      
              <h3> {todo.pricein} </h3>       
            </div>
          ))}
        </div>
        {/* ======== */}   
        <div className="main">
          <button
            disabled={page <= 1}
            onClick={() => {
              setpage(page - 1);
            }}
          >
            {"<"}
          </button>
          <select onChange={(e) => setlimit(Number(e.target.value))}>
            <option value={4}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <button
            disabled={totalcount < page * 5}
            onClick={() => {
              setpage(page + 1);
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    );
}

export default MensTop