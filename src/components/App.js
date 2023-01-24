import React from "react";
import BotsPage from "./BotsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import BotSpecs from "./BotSpecs";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<BotsPage />} />
          <Route path="/:id" element={<BotSpecs />}/>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}
export default App;