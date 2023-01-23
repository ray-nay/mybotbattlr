import React from "react";
import BotCard from "./BotCard"

function BotCollection({collection}) {
  // Your code here
  //const {collection} = props
  console.log(collection)
  return (
    <div className="ui four column grid">
      <div className="row">
        {collection.map((bot)=>(
          <BotCard key={bot.id} bot={bot}/>
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
