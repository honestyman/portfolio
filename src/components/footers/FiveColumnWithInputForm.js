import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { IoMailOpenOutline, IoLogoDiscord } from "react-icons/io5";
import { FaGithub, FaPhoneSquare, FaTelegram } from "react-icons/fa";
import SimpleContactUs from "components/forms/SimpleContactUs";

const Container = tw.div`relative bg-gray-900 text-gray-700 -mb-8 -mx-8 px-8`;
const LinkContainer = tw.div`relative flex justify-center items-center text-gray-700 pb-20 -mx-8 px-8`;
const ItemDiv = tw.div`flex justify-center items-center text-gray-200 mx-10`;
export default () => {
  return (
    <Container>
      <SimpleContactUs/>
      <LinkContainer>
        <div tw="flex text-base justify-center flex-wrap mx-5">
          <ItemDiv>
            <IoMailOpenOutline tw="text-2xl mr-2"/>
            <label>poonhaorui@gmail.com</label>
          </ItemDiv>
          <ItemDiv>
            <FaGithub tw="text-2xl mr-2"/>
            <label>honestyman</label>
          </ItemDiv>
          {/* <ItemDiv>
            <FaPhoneSquare tw="text-2xl mr-2"/>
            <label>+00000000</label>
          </ItemDiv> */}
          <ItemDiv>
            <IoLogoDiscord tw="text-2xl mr-2"/>
            <label>haorui</label>
          </ItemDiv>
          <ItemDiv>
            <FaTelegram tw="text-2xl mr-2"/>
            <label>haorui</label>
          </ItemDiv>
        </div>
      </LinkContainer>
    </Container>
  );
};
