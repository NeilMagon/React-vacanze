import React from "react";
import { useState, useEffect } from "react";

function SingleHoliday({img, titolo, durata, descrizione, prezzo}) {
    return(
        <div>
            <div className="img-container mt-4 shadow">
                <img src={img} alt={titolo} />
                <div className="text-white p-3">
                    <h3>{titolo}</h3>
                    <p>{descrizione}</p>
                    <div className="d-flex justify-content-between ">
                        <p>{durata}</p>
                        <p>{(prezzo / 100).toFixed(2)} €</p>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <button className="ms-btn">
                            <i class="fa-solid fa-caret-left"></i>
                        </button>
                        <button className="ms-btn">
                            <i class="fa-solid fa-caret-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleHoliday