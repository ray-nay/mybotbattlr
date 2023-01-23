import React, { useEffect, useState} from "react";
// import YourBotArmy from "./YourBotArmy";
// import BotCollection from "./BotCollection";
// import BotCard from "./BotCard";
// import BotSpecs from "./BotSpecs";


function BotsPage(){
    const [bots, setBots] = useState([]);
    const [botsInArmy, setBotsInArmy] = useState([]);
    const [selectedBots, setSelectedBots] = useState([]);
    const [botSpecs, setBotSpecs] = useState(null);
    
    useEffect(()=>{
            fetch("http://localhost:3000/bots")
            .then((res)=>res.json())
            .then((data)=> setBotsInArmy)

    }, [])
    return (
        <div>

        </div>
    )

}


export default BotsPage