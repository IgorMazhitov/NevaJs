import React, { useContext } from "react";
import Context from "../Context";

    const Tickets = (props) => {

        const {timeA, setTimeA, timeB, setTimeB, route, setRoute, arrival, setArrival, tickets, setTickets, answer, setAnswer} = useContext(Context)


        if (route === "из A в B") {

            let aH = 3600000 * parseInt(timeA.split('').splice(0, 2).join(''))
            let aM = 60000 * parseInt(timeA.split(':')[1].split('').splice(0, 2).join(''))

            let total = aH + aM
            let dif = 50 * 60000
            total += dif

            setArrival(`${Math.floor(total / 3600000)}:${Math.round((total - (Math.floor(total / 3600000) * 3600000)) / 60000)}`)

        } else if (route === "из B в A") {

            let aH = 3600000 * parseInt(timeB.split('').splice(0, 2).join(''))
            let aM = 60000 * parseInt(timeB.split(':')[1].split('').splice(0, 2).join(''))

            let total = aH + aM
            let dif = 50 * 60000
            total += dif

            setArrival(`${Math.floor(total / 3600000)}:${Math.round((total - (Math.floor(total / 3600000) * 3600000)) / 60000)}`)

        }
        

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

            <div className="flex flex-col justify-start items-center h-48 w-56 m-5">

                <label className="text-lg" for="num">Количество билетов</label>
                <input className="w-56 p-2 bg-slate-300 rounded-lg" id="num" type="number" value={tickets} onChange={e => setTickets(e.target.value)}/>
                <button className=" w-48 h-16 rounded-lg bg-yellow-400 my-3 text-lg font-bold hover:bg-yellow-600" onClick={() => clickHandler()}>Посчитать</button>

            </div>

        )

    }

export default Tickets