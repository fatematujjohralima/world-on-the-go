import React, { use } from 'react';

const Countries = ({countryPromise}) => {

    const countriesAll= use(countryPromise);
    const countries= countriesAll.countries;
    return (
        <div>
            <h3>There are {countries.length} countries in the world.</h3>
        </div>
    );
};

export default Countries;