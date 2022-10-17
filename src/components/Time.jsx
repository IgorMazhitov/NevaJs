import React, { useContext } from "react";
import Context from "../Context";
import AtoB from "./AtoB";
import BtoA from "./BtoA";

    const Time = (props) => {

        const aTob = ["18:00(из A в B)", "18:30(из A в B)", ]

        const {time, setTime, route} = useContext(Context)

        if (route === "из A в B") {

            return (

                <AtoB />

            )

        } else if (route === "из B в A" || route === "из A в B и обратно в А") {

            return (

                <BtoA />

            )

        }

    }

export default Time