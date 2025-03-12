import React, { useEffect, useState } from 'react';


/// Endpoints

// Endpoint: /v1/cryptocurrency/quotes/latest - aktuella priser för en eller flera kryptovalutor.

// Endpoint: /v1/cryptocurrency/listings/latest - hämta en lista över kryptovalutor med deras aktuella marknadsdata

// Endpoint: /v1/cryptocurrency/info - hämta information om en specifik kryptovaluta.

// Endpoint: /v1/global-metrics/quotes/latest - hämta globala marknadsdata, som total marknadsvärde.



const FetchBitcoinData = () => {
    const URL = '';
    const APIKEY = '';

    const [data, setData] = useState(null);
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
                setData(result.data); // Kontrollera att detta är rätt väg
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
                {Object.keys(data).map((key, index) => (
                    <li key={index}>
                        {data[key].name}: {data[key].quote.USD.price} USD 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchBitcoinData;