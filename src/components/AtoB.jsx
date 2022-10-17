import React, { useContext } from "react"; 
import Context from "../Context";

    const AtoB = (props) => {

        const {timeA, setTimeA, route} = useContext(Context)

        return (
            
            <div>

                <label for="time">Выберите время</label>
                <select name="time" id="time" value={timeA} onChange={e => setTimeA(e.target.value)}>
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