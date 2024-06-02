import React, { useState } from "react";
import './App.css';
import Products from "./Products";

function App() {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "4068836c";
  const YOUR_APP_KEY = "b8562254b6dea30326985dd3341f2df7";
  const submitHandler = (e) =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )

  }
  
  return (
    <div className="App">
      <h1>Food Recipe App</h1>
      <form onSubmit={submitHandler}>
        <input className="item" size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/><br/>
        <input type="submit" className="btn btn-primary mb-2" value="search"/>
      </form>
      
      {data.length>=1 ? <Products data={data}/> :null}
      
      
      
    </div>
  );
}

export default App;
