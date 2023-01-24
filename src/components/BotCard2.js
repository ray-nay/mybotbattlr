import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard2({bot, botsArmy, setBotsArmy}){
    
    function handleBotClick(){

        const remainingBotsArmy = botsArmy.filter(botArmy => botArmy.id !== bot.id);
    }
}