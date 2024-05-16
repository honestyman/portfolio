import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import ClientMax from "images/clients/max.jpg";
import ClientBen from "images/clients/ben.jpg";
import ClientHui from "images/clients/hui.jpg";
import ClientBoston from "images/clients/boston.jpg";
import { ReactComponent as StarIconBase } from "images/star-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-full xl:w-full mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:pr-12 lg:pr-16 md:order-first` : tw`md:pl-12 lg:pl-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = styled(Slider)`
  ${tw`w-full mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;
const StarsContainer = styled.div``;
const StarIcon = tw(StarIconBase)`inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;
const TestimonialHeading = tw.div`mt-4 text-xl font-bold`;
const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col sm:flex-row`;

const CustomerInfo = tw.div`flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-16 h-16 sm:w-20 sm:h-20`;
const CustomerTextInfo = tw.div`text-center md:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-bold text-xl`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;
// 
export default ({

  subheading = "Testimonials",
  heading = "Our Clients Love Us.",
  textOnLeft = false,
  testimonials = [
    {
      stars: 5,
      profileImageSrc: ClientMax,
      heading: "Would definitely recommend working with him in the future!",
      quote:
        "“Haorui has been a great partner throughout the course of our build of our MVP. He was ready to dive right in and learned the NEAR SDK with little guidance, implementing complex features and on schedule within budget. His can do attitude is wonderful and he is very responsive to communications. Would definitely recommend working with him in the future!”",
      customerName: "Max Goodman",
      customerTitle: "Founder & Chief at Gyde"
    },
    {
      stars: 5,
      profileImageSrc:ClientBen,
      heading: "I highly recommend him for any Web development work!",
      quote:
        "“I had the pleasure of working with Haorui on a company website project, where he served as the sole developer. The website was built using React, and Haorui played a crucial role in its development and maintenance from start to finish. Throughout the project, Haorui demonstrated a strong understanding of web technologies and was able to effectively integrate 3rd party services via their API's. He showed excellent problem-solving skills and was a true team player, consistently displaying a strong work ethic and willingness to take on any challenge. I was very impressed with Haorui's skills and dedication to the project, and I look forward to our ongoing work together. He is a valuable asset to any team, and I highly recommend him for any Web development work.”",
      customerName: "Ben Blair",
      customerTitle: "Director at TraderDeepDive"
    },
    {
      stars: 5,
      profileImageSrc:ClientHui,
      heading: "Whether you are working web2 or web3 for your startup, Haorui is an amazing developer talent and rising tech lead I would like to recommend for any startup team!",
      quote:
        "“Haorui is an experienced developer I really enjoyed working with. While we were working together to explore DeFi stacks, Haorui has demonstrated great problem solving skills and fast execution to navigate both solution domain and tech domain through building working prototypes. I am very impressed his hands-on and system thinking. His high performing work has enabled us to make practical decision quicker as a product engineering team. Whether you are working web2 or web3 for your startup, Haorui is an amazing developer talent and rising tech lead I would like to recommend for any startup team.”",
      customerName: "Hui Huang",
      customerTitle: "Entrepreneur & Startup CTO at Skyline Dev Labs"
    },
    {
      stars: 5,
      profileImageSrc:ClientBoston,
      heading: "I highly recommend Haorui to anyone seeking a skilled and knowledgeable developer in web3 integration, blockchain, and subgraph development!",
      quote:
        "“I've enjoyed working with Haorui on a web3 project. He is a true expert in the field of web3 integration and blockchain technology. His deep knowledge and expertise have been crutial in our project's success. He has an excellent ability to understand complex blockchain concepts and turn them into practical solutions. One of Haorui's best qualities is his proficiency in developing subgraphs. His work in this area has significantly improved our project's data indexing and querying capabilities. I highly recommend Haorui to anyone seeking a skilled and knowledgeable developer in web3 integration, blockchain, and subgraph development.”",
      customerName: "Boston TCHOUKOUA",
      customerTitle: "Head Of Development at IotaOrigin UG"
    }
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <TextColumn textOnLeft={textOnLeft}>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <TestimonialSlider arrows={false} ref={setSliderRef}>
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index}>
                  <StarsContainer>
                    {Array.from({ length: testimonial.stars }).map((_,indexIcon) => (
                      <StarIcon key={indexIcon} />
                    ))}
                  </StarsContainer>
                  <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerInfoAndControlsContainer>
                    <CustomerInfo>
                      <CustomerProfilePicture src={testimonial.profileImageSrc} alt={testimonial.customerName} />
                      <CustomerTextInfo>
                        <CustomerName>{testimonial.customerName}</CustomerName>
                        <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                      </CustomerTextInfo>
                    </CustomerInfo>
                    <Controls>
                      <ControlButton onClick={sliderRef?.slickPrev}>
                        <ArrowLeftIcon />
                      </ControlButton>
                      <div className="divider" />
                      <ControlButton onClick={sliderRef?.slickNext}>
                        <ArrowRightIcon />
                      </ControlButton>
                    </Controls>
                  </CustomerInfoAndControlsContainer>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TextColumn>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
