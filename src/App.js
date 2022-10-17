import React, { useState } from "react";
import Route from "./components/Route";
import Tickets from "./components/Tickets";
import Time from "./components/Time";
import Context from "./Context";

function App() {

  const [route, setRoute] = useState('')
  const [timeA, setTimeA] = useState('')
  const [timeB, setTimeB] = useState('')
  const [arrival, setArrival] = useState(0)
  const [tickets, setTickets] = useState(0)
  const [answer, setAnswer] = useState('')


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

      <div className="App">

          <Route /> 

          {route && <Time />}

          {(timeA || timeB) && <Tickets />}

          {answer}

      </div>

    </Context.Provider>


  )

}

export default App;
