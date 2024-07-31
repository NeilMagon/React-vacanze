import React from "react";
import { useState, useEffect } from "react";

function SingleHoliday({img, titolo, durata, descrizione, prezzo}) {
    return(
        <div className="img-container mt-4 shadow">
            <img src={img} alt={titolo} />
            <div className="text-white py-3">
                <h3>{titolo}</h3>
                <p>{durata}</p>
                <p>{descrizione}</p>
                <p>{prezzo} €</p>
            </div>
        </div>
    );
}

export default SingleHoliday