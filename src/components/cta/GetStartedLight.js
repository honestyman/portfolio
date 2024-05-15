import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";

const PrimaryBackgroundContainer = tw.div`py-16 lg:py-20 bg-purple-200 rounded-lg relative`
const Row = tw.div`px-4 sm:px-16 mx-auto flex justify-between items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-full max-w-4xl`
const TextContainer = tw(ColumnContainer)`font-bold`;
const Subheading = tw.h6`text-primary-500 opacity-75`;
const Heading = tw.h5`text-primary-500`;

const LinksContainer = tw.div`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Link = tw.a`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(Link)`shadow text-gray-100 hocus:text-gray-300 bg-primary-500 hocus:bg-primary-700`;

const Description = tw.p`text-base`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-500 opacity-5`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-500 opacity-5`
export default ({
  primaryLinkText = "Hire Me",
  primaryLinkUrl = "http://timerse.com",
  pushDownFooter = true
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
      <PrimaryBackgroundContainer>
        <Row>
          <TextContainer> 
            <Description>Are you looking for a full stack developer who can bring your project from concept to deployment? Look no further! With a diverse set of technical skills and the ability to understand and optimize the full technology stack of a project, I am well-equipped to tackle a wide range of challenges. I have experience with both front-end and back-end technologies, and am comfortable working with both established and emerging platforms. I am a problem-solver at heart, and am always looking for ways to improve processes and find creative solutions. I am adaptable and able to learn new technologies as needed, making me a valuable asset to any team. My goal is to exceed your expectations and help bring your project to success. Contact me today to discuss how I can be a part of your next project. </Description>
          </TextContainer>
          <LinksContainer>
            <PrimaryLink href={primaryLinkUrl}>{primaryLinkText}</PrimaryLink>
          </LinksContainer>
        </Row>
        <DecoratorBlobContainer>
          <DecoratorBlob1/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer>
      </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
