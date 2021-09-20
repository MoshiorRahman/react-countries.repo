import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country)
    const { name, flag, capital, population, region } = props.country;
    return (
        <div className="country">
            <h3>This is: {name}</h3>
            <img className="flag" src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital is: {capital} / Population: {population}</p>
        </div>
    );
};

export default Country;