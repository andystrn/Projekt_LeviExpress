import React from "react";
import './style.css';
import BusStop from "./BusStop";

const JorneyDetail = ( jorney ) => {
    console.log(jorney);
    return (
        <div className="journey-detail container">
            <h2>Podrobnosti cesty</h2>
            <div className="stops">
             {jorney.journey.stops.map((j) => <BusStop key={j.code} name={j.name} station={j.station} time={j.time}/>)}   
            </div>
        </div>

    )
}

export default JorneyDetail;