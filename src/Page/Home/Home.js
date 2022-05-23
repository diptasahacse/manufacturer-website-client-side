import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import ToolsSection from './ToolsSection/ToolsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsSection></ToolsSection>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;