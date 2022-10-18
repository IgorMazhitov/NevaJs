import React, { useContext } from "react"; 
import Context from "../Context";

    const AtoB = (props) => {

        const {timeA, setTimeA, route} = useContext(Context)

        return (
            
            <div className="flex flex-col justify-center items-center h-24 w-56 m-5">

                <label className="text-lg underline" for="time">Выберите время</label>
                <select className="w-56 p-2 bg-slate-300 rounded-lg" name="time" id="time" value={timeA} onChange={e => setTimeA(e.target.value)}>
                    <option value="">Choose time...</option>
                    <option value="18:00(из A в B)">18:00(из A в B)</option>
                    <option value="18:30(из A в B)">18:30(из A в B)</option>
                    <option value="18:45(из A в B)">18:45(из A в B)</option>
                    <option value="19:00(из A в B)">19:00(из A в B)</option>
                    <option value="19:15(из A в B)">19:15(из A в B)</option>
                    <option value="21:00(из A в B)">21:00(из A в B)</option>
                </select>

            </div>

        )

    }

export default AtoB