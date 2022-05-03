import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3200/");
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


{data.categories.map(item =>(
<div className="main3">
              <div className="main2">
       <div className="top">{item.name}</div>
              {item.meals.map(item =>(
          <div className="fiche">
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
            </div><div className="side">test</div>
          </div>
))}



</main>

</div>      
)
}    

export default App;