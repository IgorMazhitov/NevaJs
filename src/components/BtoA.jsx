import React, { useContext } from "react";
import Context from "../Context";
import AtoB from "./AtoB";

    const BtoA = (props) => {

        let bTOa = [
            {
                value: "18:30(из B в A)",
                key: 1
            }, 
            {
                value: "18:45(из B в A)",
                key: 2
            }, 
            {
                value: "19:00(из B в A)",
                key: 3
            }, 
            {
                value: "19:15(из B в A)",
                key:  4
            }, 
            {
                value: "19:35(из B в A)",
                key: 5
            }, 
            {
                value: "21:50(из B в A)", 
                key: 6
            }, 
            {
                value: "21:55(из B в A)",
                key: 7
            }]

        const {timeA, setTimeA, timeB, setTimeB, route, arrival, setArrival} = useContext(Context)

        if (route === "из A в B и обратно в А") {

            return (
            
                <div>

                    <AtoB />


                    {timeA && 
                    
                    <div> 
                        <label for="time">Выберите время</label>
                        <select name="time" id="time" value={timeB} onChange={e => setTimeB(e.target.value)}>
                            {bTOa.map(el => {

                                let aH, aM, total, dif, bH, bM, bTotal, timeArr

                                bH = 3600000 * parseInt(el.value.split('').splice(0, 2).join(''))
                                bM = 60000 * parseInt(el.value.split(':')[1].split('').splice(0, 2).join(''))
                                bTotal = bH + bM

                                aH = 3600000 * parseInt(timeA.split('').splice(0, 2).join(''))
                                aM = 60000 * parseInt(timeA.split(':')[1].split('').splice(0, 2).join(''))

                                total = aH + aM
                                dif = 50 * 60000
                                total += dif

                                setArrival(`${Math.floor(total / 3600000)}:${Math.round((total - (Math.floor(total / 3600000) * 3600000)) / 60000)}`)

                                if (bTotal > total) {

                                    return <option value={el.value}>{el.value}</option>

                                }

                        })}

                        </select> 
                    </div>}

                </div>

            )

        } else {

            return (

                <div>
    
                    <label for="time">Выберите время</label>
                    <select name="time" id="time" value={timeB} onChange={e => setTimeB(e.target.value)}>
                        {bTOa.map(el => <option value={el.value}>{el.value}</option>)}
                    </select>
    
                </div>
    
            )

        }


        

    }

export default BtoA