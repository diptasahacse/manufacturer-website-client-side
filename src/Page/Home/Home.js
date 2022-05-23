import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import RequestQuoteSection from './RequestQuoteSection/RequestQuoteSection';
import ReviewsSection from './ReviewsSection/ReviewsSection';
import ToolsSection from './ToolsSection/ToolsSection';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsSection></ToolsSection>
            <BusinessSummery></BusinessSummery>
            <RequestQuoteSection></RequestQuoteSection>
            <WhyUs></WhyUs>
            {/* <ReviewsSection> </ReviewsSection> */}
        </div>
    );
};

export default Home;