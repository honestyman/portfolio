import React from "react";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import ServiceFeatures from "components/features/DashedBorderSixFeatures";
import Project from "components/pricing/TwoPlansWithDurationSwitcher.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
// import SimpleContactUs from "components/forms/SimpleContactUs";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features 
        heading={<>My <HighlightedText>Skills</HighlightedText></>}
      />
      <ServiceFeatures/>
      <Project 
        heading={<><HighlightedText>Projects</HighlightedText></>}
      />
      <Testimonial 
        heading={<>My Clients <HighlightedText>Reviews</HighlightedText></>}
      />
      <GetStarted/>
      {/* <SimpleContactUs/> */}
      <Footer id="hire"/>
    </AnimationRevealPage>
  );
}
