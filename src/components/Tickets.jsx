import React, { useContext } from "react";
import Context from "../Context";

    const Tickets = (props) => {

        const {timeA, setTimeA, timeB, setTimeB, route, setRoute, arrival, setArrival, tickets, setTickets, answer, setAnswer} = useContext(Context)

        const clickHandler = () => {

            let tickPrice = 0

            if (route === 'из A в B' || route === 'из B в A') {

                tickPrice = 700

            } else {

                tickPrice = 1200

            }

            console.log(timeA, timeB, route, tickets)

            let boom = tickPrice * tickets

            setAnswer(`Вы выбрали ${tickets} билета по маршруту ${route} стоимостью ${boom}p.
            Это путешествие займет у вас 50 минут. 
            Теплоход отправляется в ${timeA.split('(').splice(0, 1).join('')}, а прибудет в ${arrival}.`)
            

            setTimeA('')
            setTimeB('')
            setRoute('')
            setTickets(0)

        }


        return (

            <div>

                <label for="num">Количество билетов</label>
                <input id="num" type="number" value={tickets} onChange={e => setTickets(e.target.value)}/>
                <button onClick={() => clickHandler()}>Посчитать</button>

            </div>

        )

    }

export default Tickets