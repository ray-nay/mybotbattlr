import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
const [bots, setBots]= useState([]);
const [army, setArmy]= useState([]);
  useEffect(()=> {
    fetch(" http://localhost:3000/bots")
    .then((res)=>res.json())
    .then((data)=>setBots(data))
  }, [])
  return (
    <div>
      <YourBotArmy />
      <BotCollection collection={bots}/>
    </div>
  )
}

export default BotsPage;
