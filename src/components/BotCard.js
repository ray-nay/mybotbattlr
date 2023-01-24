import React from "react";
import { useNavigate, Link } from "react-router-dom";
import BotSpecs from "./BotSpecs";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, botsArmy, setBotsArmy, bots, setBots}) {

  const navigate = useNavigate()

  const botObj = {
    id: bot.id,
    name: bot.name,
    health: bot.name,
    damage: bot.damage,
    armor: bot.armor,
    bot_class: bot.bot_class,
    catchphrase: bot.catchphrase,
    avatar_url: bot.avatar_url,
    created_at: bot.created_at,
    updated_at: bot.updated_at
  };
 
  function handleBotClick(){

    
    let presentBots = botsArmy.some(botArmy=>{
      return botArmy.id === botObj.id
    })
    //Making sure an already existing bot does not render to the favorites section.
    if (!presentBots){
      setBotsArmy([...botsArmy, botObj])
    }else{
      alert ('Bot already exists')
    }
  }
  //Function to permanently delete the bot.
  function handleDelete (){

    if(window.confirm('Are you sure you want to delete the bot')){
      fetch(`http://localhost:3000/bots/${bot.id}`, {method: 'DELETE'})
      .then(res=>res.json())
      .then(()=>{
        const undeleteBots = bots.filter(botItem=>botItem.id !== bot.id)
        const undeleteBotsArmy = botsArmy.filter(botItem=> botItem.id !== bot.id)
        setBotsArmy(undeleteBotsArmy)
        setBots(undeleteBots)
      })
    }
    
  }

  function handleDivClick(){
    <Link exact to= {`/${bot.id}`} />
    console.log(bot)
    return <BotSpecs bot={botObj}/>
    
  }

  
  return (
    <div className="ui column" onClick={handleDivClick}>
      <div
        className="ui card"
        key={bot.id}
      >
        <div className="image" onClick={handleBotClick}>
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={handleDelete}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;