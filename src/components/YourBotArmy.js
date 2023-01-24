import React,  {useEffect} from "react";

import BotCard2 from "./BotCard2";

function YourBotArmy({botsArmy, setBotsArmy}) {
  
const botsArmyList = botsArmy.map(bot=>{
  return <BotCard2 key={bot.id} bot={bot} botsArmy={botsArmy} setBotsArmy={setBotsArmy}/>
})

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
      <h4>Your Bot Army</h4>
        <div className="row bot-army-row">
          {botsArmyList}
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;