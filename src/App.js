import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
let newTab=[];


const handleClickPlus = (index) => {
  const newCounter = [...counter];
  newCounter[index]++;
  setCounter(newCounter);
}




  const fetchData = async () => {
    const response = await axios.get("https://delivroo-backend-reac.herokuapp.com/");
     console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (



<div className="App1">


<div className="logo">
{/* <h1>logo</h1> */}
<img src="P10-Deliveroo/Delivroo-Frontend/delivroofront/src/img/deliveroologo.jpg" alt="fdvf" />
</div>


<header>
       <div className="header1">
       <h2>{data.restaurant.name}</h2>
       <p>
       {data.restaurant.description}
       </p>       
       </div>
       <div className="header2">
       <img src={data.restaurant.picture} alt="" />
       </div> 
</header>


<main className="App">


{data.categories.map((item,index) =>(
<div className="main3">
              <div className="main2">
       <div key={index} className="top">{item.name}</div>
              {item.meals.map((item, index) =>(
          <div key={index} className="fiche"
          onClick={()=> {handleClickPlus({index})}}>
                     <div className="text">
                <p className="p1">{item.title}</p>
                <p className="p2">{item.description}</p>
                <p className="p3">{item.price} €</p>
                      </div>
                     <div className="picture">
                 <img src={item.picture} alt="" />
                    </div>
          </div>   
            ))}
            </div>
            <div className="side">

            <div key={index} className="top">{item.name}</div>
              {item.meals.map((item, index1,index2) =>(
                <div>
          <div key={index1}>{item.title}</div>
          <div key={index2}>{counter}</div>
          </div>
          ))}
                    </div>
          </div>   
))}  
</main>
</div>   
  )}  
export default App;


  {/* {item.meals.map((item, index) =>(<div key={index}>{counter}</div>))} */}