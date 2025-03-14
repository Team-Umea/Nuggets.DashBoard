import React, { useEffect, useState } from 'react';

// json-server --watch db.json --port 3001


const FetchBitcoinData = () => {
    const URL = '';
    const APIKEY = '';

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${URL}?apiKey=${APIKEY}`);
                
                if (!response.ok) {
                    const errorMessage = await response.text(); 
                    throw new Error(`Fel: ${response.status} - ${errorMessage}`);
                }

                const result = await response.json();
                setData(result.data); 
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <ul>
                {data.map((key, index) => (
                    <li key={index}>
                        {data[key].name}: {data[key].price} USD
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchBitcoinData;