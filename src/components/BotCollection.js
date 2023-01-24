import React, {useEffect} from "react";
import BotCard from "./BotCard";

function BotCollection({bots, setBots, botsArmy, setBotsArmy}) {


 
  useEffect(()=>{
    fetch('http://localhost:3000/bots')
    .then(res=>res.json())
    .then(data=>{
      setBots(data);
    })
  }, []);

  const newBots = bots.map(bot=>{
    return <BotCard key={bot.id} bot={bot} botsArmy={botsArmy} setBotsArmy={setBotsArmy} bots={bots} setBots={setBots}/>
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {newBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;