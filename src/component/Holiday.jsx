import { useEffect, useState } from "react";
import React from "react";
import axios from 'axios';

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

function Holiday() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    async function getData() {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) {
        return(
            <div className="text-center">
                <h1 className="strong text-white">....Loading</h1>
            </div>
        ) 
    }
    
    
    if (data.success) {
        return(
            <div className="text-center">
                <h1 className="strong text-white">Le Nostre Vacande</h1>
                <div className="underline rounded"></div>
            </div>
        );
    } else {
        return (
            <div className="text-center">
                <h1 className="strong text-white">Error loading</h1>
            </div>
        )
    }
}

export default Holiday;