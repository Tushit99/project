import React from 'react' 
import { useState} from "react";              
import { useEffect } from "react";           
import axios from 'axios';        
import { Link } from 'react-router-dom';


const WomenSwimwear = () => {
    const [todo, setTodos] = useState([]);           
    const [limit, setlimit] = useState(6);           
    const [totalcount, settotalcount] = useState(0);           
    const [page, setpage] = useState(1);           
  
    useEffect(() => {
      axios  
        .get(`http://localhost:8080/WomenSwimwear?_page=${page}&_limit=${limit}`)
        .then((r) => {
          setTodos(r.data);
          settotalcount(Number(r.headers["x-total-count"]));
        });
    }, [page, limit]);
  
    return (
      <div className="pick">
        <div className="limit" >
        <select onChange={(e) => setlimit(Number(e.target.value))}>
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={15}>15</option>
        </select>
      </div>
        <div className="items">
          {todo.map((todo) => (
            <Link to={`/womenswimwear/WomenSwimwear/${todo.id}`} className="item1">  
              <img src={todo.img} alt="" />    
              <h3> {todo.name} </h3>      
              <h3> Brand : {todo.brand} </h3>      
              <h3> Price : {todo.pricein} </h3>       
            </Link>
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
    )  
}

export default WomenSwimwear