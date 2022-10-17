import React, { useContext } from "react";
import Context from "../Context";

    const Route = (props) => {

        const {route, setRoute} = useContext(Context)

        return (

            <div className="flex flex-col justify-center items-center h-24 w-56 m-5">

                <label className="text-lg" for="route">Выберите направление</label>
                <select className="w-56 p-2 bg-slate-300 rounded-lg" name="route" id="route" value={route} onChange={(e) => setRoute(e.target.value)}>
                    <option value="">Chose route...</option>
                    <option value="из A в B">из A в B</option>
                    <option value="из B в A">из B в A</option>
                    <option value="из A в B и обратно в А">из A в B и обратно в А</option>
                </select>

            </div>

        )

    }

export default Route