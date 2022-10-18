import React, { useState } from "react";
import Route from "./components/Route";
import Tickets from "./components/Tickets";
import Time from "./components/Time";
import Context from "./Context";
import "./index.css"

function App() {

  const [route, setRoute] = useState('')
  const [timeA, setTimeA] = useState('')
  const [timeB, setTimeB] = useState('')
  const [arrival, setArrival] = useState(0)
  const [tickets, setTickets] = useState(0)
  const [answer, setAnswer] = useState('')

  const cleanAnswer = () => {

    setAnswer('')

  }

  return (

    <Context.Provider
    value={{
      route, setRoute,
      timeA, setTimeA,
      timeB, setTimeB,
      arrival, setArrival,
      tickets, setTickets,
      answer, setAnswer
    }}>

      <div className="App" class="w-screen h-screen flex flex-col justify-start items-center">

            <Route /> 

            {route && <Time />}

            {(timeA || timeB) && <Tickets />}

            {answer && 
            <div className=" w-56 text-lg text-justify bg-slate-200 m-1 p-3 rounded-lg flex flex-col justify-start items-center"> 

              {answer}
              
              <button className=" w-32 h-14 bg-yellow-300 m-2 rounded-lg shadow-md hover:shadow-lg text-lg font-bold"
              onClick={() => cleanAnswer()}> Очистить </button>

            </div>}

      </div>

    </Context.Provider>


  )

}

export default App;
