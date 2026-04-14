import React, { use } from 'react';
import Country from '../country/Country';
import './Countries.css';

const Countries = ({countryPromise}) => {

    const countriesAll= use(countryPromise);
    const countries= countriesAll.countries;
    console.log(countriesAll);
    return (
        <div >
            <h3>There are {countries.length} countries in the world.</h3>
            <div id='countries'>
                {
                countries.map(country => <Country country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;