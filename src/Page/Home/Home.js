import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import RequestQuoteSection from './RequestQuoteSection/RequestQuoteSection';
import ToolsSection from './ToolsSection/ToolsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsSection></ToolsSection>
            <BusinessSummery></BusinessSummery>
            <RequestQuoteSection></RequestQuoteSection>
        </div>
    );
};

export default Home;