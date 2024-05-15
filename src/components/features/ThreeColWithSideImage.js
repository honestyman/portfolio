import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import ReduxIconImage from "images/skills/redux.png";
import ReactIconImage from "images/skills/react.png";

import NextIconImage from "images/skills/nextjs.png";
import MysqlIconImage from "images/skills/mysql.png";
import NodeIconImage from "images/skills/node.png";
import JangoIconImage from "images/skills/django.png";
import MongodbIconImage from "images/skills/mongodb.png";
import FirebaseIconImage from "images/skills/firebase.png";
import FlutterIconImage from "images/skills/flutter.png";
import NativeIconImage from "images/skills/react native.png";
import SolidityIconImage from "images/skills/solidity.png";
import Web3IconImage from "images/skills/web3.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-2 flex-shrink-0`}
    img {
      ${tw`w-10 h-10`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "My Skills"}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ReactIconImage,
      title: "React",
      description: "Frontend Development"
    },
    { imageSrc: ReduxIconImage, title: "Redux", description: "State Management" },
    { imageSrc: NextIconImage, title: "Next.js", description: "Full Stack Development" },
    { imageSrc: JangoIconImage, title: "Django", description: "Full Stack Development" },
    { imageSrc: NodeIconImage, title: "Node js", description: "Backend Development" },
    { imageSrc: MysqlIconImage, title: "MySQL", description: "Relational Database" },
    { imageSrc: MongodbIconImage, title: "MongoDB", description: "Non-relational Database" },
    { imageSrc: FirebaseIconImage, title: "Firebase", description: "Cloud-hosted NoSQL database" },
    { imageSrc: FlutterIconImage, title: "Flutter", description: "App Development" },
    { imageSrc: NativeIconImage, title: "React Native", description: "App Development" },
    { imageSrc: SolidityIconImage, title: "Solididy", description: "Smart Contracts" },
    { imageSrc: Web3IconImage, title: "Web3", description: "Web3 integration" },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>{heading}</Heading>
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
