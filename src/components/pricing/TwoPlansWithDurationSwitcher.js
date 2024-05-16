import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import SpinPool from "../../images/project/01.png";
import SMR from "../../images/project/02.png";
import Gydedao from "../../images/project/03.png";
import XDX from "../../images/project/04.png";
import NFTb from "../../images/project/05.png";
import Kupad from "../../images/project/06.png";
import Duck from "../../images/project/07.png";
import ABA from "../../images/project/08.png";
import Cibolo from "../../images/project/09.png";
import Car from "../../images/project/10.png";
import Insurance from "../../images/project/11.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full mb-10`;
const Description = tw(SectionDescription)`w-full text-center`;

const ProjectContainer = tw.div`w-full flex justify-center items-center flex-col md:flex-row items-center md:items-start relative`;


export default ({
  subheading = "My Creation",
  heading = "Flexible Plans.",
  plans = null
}) => {
// 
  const navigate = useNavigate();

  const carouselList = [
    {
      image: SpinPool,
      title: "Snippool",
      description: "Snippool is an NFT AMM inspired by Sudoswap where users can create pools, buy and sell NFTs, add pools to vaults to get rewards.",
      technology: "Next.js, Redux, Mateial UI, Styled Components, Apollo GraphQL, Subgraph, Solidity, Wagmi, Rainbowkit",
      link: "https://www.snippool.xyz/Collections"
    },
    {
      image: SMR,
      title: "SMR NFT Launchpad",
      description: "NFT Collection launchapd on Shimmer EVM network where users can easily launch NFT collections with custom settings like royalty, affiliate, bulk discount, etc.",
      technology: "Next.js, Redux, Tailwind CSS, Apollo GraphQL, Subgraph, Solidity, Wagmi, Rainbowkit, Nest.js, PostgreSQL, Prisma",
      link: "https://launchpad.snippool.xyz/"
    },
    {
      image: Gydedao,
      title: "Gydedao",
      description: "Gydedao is an NFT-gated website that provides users with helpful information about their lives. They offer resources on topics such as investments, savings, insurance, planning for retirement, taxes, and more. They provide resources from experienced professionals who can assist in guiding users through their financial decisions. The website also offers up-to-date news and insights from the financial world.",
      technology: "React.js, Node/Express, MySQL, TailwindCSS, Google Map API, NEAR CLI",
      link: "https://gydedao.netlify.app/"
    },
    {
      image: XDX,
      title: "XDX Exchange",
      description: "XDX is a decentralized exchange deployed on Avalanche with low swap fees and no price impact. It engages a liquidity shared mechanism called XDX to faciliate trades. XDX is the utility and governance token of the protocol.",
      technology: "React.js, Tailwind CSS, Web3-React, Ethers.js, Solidity, Hardhat, Subgraph",
      link: "https://xdx-frontend.vercel.app/#/dashboard"
    },
    {
      image: NFTb,
      title: "NFTb",
      description: "NFTb is an NFT marketplace running on Binance Smart Chain. It provides services such as listing, sales and auction of NFTs. It also has DeFi as a service which empowers users to earn passively and support projects with customized staking and farming services. On the other hand, NFT and token launchpad is also part of the platform to help projects and creators launch in a fair way.",
      technology: "React/Next.js, Node/Express, MongoDB, SCSS, Web3.js, Nginx",
      link: "https://pixelrealm.io/"
    },
    {
      image: Kupad,
      title: "Kupad Finance",
      description: "KUPAD is a protocol built on Kucoin blockchain with the sole aim of helping projects raise capital in a decentralized way, an easy approach for both investors and project to either invest or raise funds.",
      technology: "React.js, Material UI, Styled Components, Ethers.js",
      link: "https://ku-pad.netlify.app/"
    },
    {
      image: Duck,
      title: "Rubber Duck Bath Party",
      description: "NFT collection of 10, 000 ducks on Ethereum network.",
      technology: "Solidity, Hardhat",
      link: "https://duck.art/"
    },
    {
      image: ABA,
      title: "ABA Engine",
      description: "ABA Engine is a platform for clients to book services of providers depending on each other's availability, authorization, insurance provider, location and other criteria. It has seamless client intake and provider onboarding process.",
      technology: "React.js, Redux, Material UI, Styled Components, Express.js, PostgreSQL, Typeorm, Socket.io, Stripe, Sentry",
      link: "https://schedule.abaengine.com/"
    },
    {
      image: Cibolo,
      title: "Cibolo",
      description: "A web based platform that is designed to help financial firms and advisors enhance portfolio management experience specifically in the alternative investment industry.",
      technology: "React.js, Redux, Material UI, Styled Components, Express.js, PostgreSQL",
      link: "https://ciboloai.com/"
    },
    {
      image: Car,
      title: "Car Parts Service Platform",
      description: "CarParts is an online automotive parts store that offers a wide selection of automotive parts, accessories, and tools for cars, trucks, and SUVs. Customers can easily find what they need by searching through the available categories, or by using the search bar to find the right part for their vehicle. The website is easy to navigate, and provides detailed product descriptions and images to help customers make an informed purchase. It also offers customer support, detailed shipping information, and special offers and discounts.",
      technology: "React.js, GSAP, PHP, PostgreSQL, Styled Components, Payment Integration(Paypal, Apple Pay, Google Pay, Credit Card)",
      link: "https://www.carparts.com/"
    },
    {
      image: Insurance,
      title: "Insurance Service Platform",
      description: "Application where user get insurance quotes by choosing their insurance category and add required data. It provides various insurance services for automobiles, health, life, home, etc.",
      technology: "React.js, Ionic, Node/Express, Google Cloud Platform",
      link: "https://veronicasquote.com/"
    }
  ];
 
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
        </HeaderContainer>
        <ProjectContainer>
          {/* <div className="w-1/2"> */}
            <Carousel tw="w-full" autoPlay={true} infiniteLoop={true}>
              {
                carouselList.map((carousel, index)=>{
                  return(
                      <a href={carousel.link} target="_blank">
                        <div tw="border-2 rounded-xl p-5">
                        <img src={carousel.image} />
                        <div tw="w-full flex flex-col text-left bg-gray-100 lg:py-5 lg:px-10">
                            <label tw="text-xl font-bold">{carousel.title}</label>
                            <label tw="text-sm">{carousel.description}</label>
                            <label tw="text-sm"><span tw="font-bold">Technologies: </span>{carousel.technology}</label>
                        </div>
                      </div>
                      </a>
                  );
                })
              }
            </Carousel>
          {/* </div> */}
        </ProjectContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
