import React, { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="main-container">
            <h1 style={{ color: "indigo", padding: "15px" }}>Hello from my Countries: {countries.length}</h1>
            <div className="countries-container container">
                {
                    countries.map(country => <Country
                        key={country.alpha3code}
                        country={country}>

                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;