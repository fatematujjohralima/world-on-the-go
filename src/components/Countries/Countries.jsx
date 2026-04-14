import React, { use } from 'react';
import Country from '../country/Country';

const Countries = ({countryPromise}) => {

    const countriesAll= use(countryPromise);
    const countries= countriesAll.countries;
    console.log(countriesAll);
    return (
        <div>
            <h3>There are {countries.length} countries in the world.</h3>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;