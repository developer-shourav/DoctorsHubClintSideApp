import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppiontmentBanner from './AppiontmentBanner/AppiontmentBanner';
import Services from './Services/Services';
const Home = () => {
    return (
        <div>
            <Navigation> </Navigation>
            <Services> </Services>
            <AppiontmentBanner> </AppiontmentBanner>
        </div>
    );
};

export default Home;