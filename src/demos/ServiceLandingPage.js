import React from "react";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import ServiceFeatures from "components/features/DashedBorderSixFeatures";
import Project from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
const HighlightedText = tw.span`text-primary-500`

export default () => {
  const param = useParams();
  useEffect(() => {
    if(param.hire){
      window.location="#hire";
    }
  }, [param]); 
   
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
      <div id="hire">
        <Footer/>
      </div>
    </AnimationRevealPage>
  );
}
