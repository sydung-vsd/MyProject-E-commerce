import styled, { css,keyframes } from "styled-components";
import { COLOR } from "../../constants/color";
const showUp = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;
export const SectionWrapper = styled.div`
  max-width: 1200px;
  padding: 3rem 16px;
  margin: 0 auto;
`;
export const FirstSection = styled.div`
  & .section_right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    height: 100%;
  }
  & .section_title {
    font-size: 2rem;
    font-weight: bold;
    color: ${COLOR.MAIN_COLOR};
  }
  & .section_content {
    font-size: 1.1rem;
  }
  & .section_btn {
    text-transform: uppercase;
    background-color: #000;
    width: 180px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    animation: all .5s ease;

  }
  & .section_btn:hover {
    background-color: red;
  }
`;
export const SecondSection = styled.div`
  background-color: #282828;
  & .section_heading {
    text-align: center;
    font-weight: bold;
    color: #fff;
  }
  & .section_title {
    text-align: center;
    color: #fff;
    font-size: 3rem;
  }
  & .section_content {
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
  }
`;
export const MemberContainer = styled.div`
  padding-top: 100%;
  width: 100%;
  position: relative;
  & .member_wrapper {
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height:100%; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    animation: ${showUp} .5s ease;
  }
  &:hover .member_wrapper {
    display: flex;
  }
  & .member_name {
    color: #fff;

  }
  & .member_role {
    color: red;
    font-size: 1.5rem;
    font-weight: bold;

  }
  & .shop_btn {
    text-transform: uppercase;
    background-color: transparent;
    width: 180px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
    border: #fff 1px solid;
    padding: 8px 12px;
    cursor: pointer;
  }
  & .shop_btn:hover {
    background-color: red;
    border: none;
  }
  ${({ image }) =>
    css`
      background-image: url(${image});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
`;
export const ThirdSection = styled.div`
  background-image: url("https://cdn.onebauer.media/one/media/5d62/de05/a950/7724/707b/ae29/peaky-blinders-s5.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  & .section_title {
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    margin-bottom:3rem;
    text-shadow: 0 0 1px #000;

  }
  & .section_content {
    font-size: 1.2rem;
    color: #fff;
    text-shadow: 0 0 1px #000;
  }
  & .section_btn {
    text-transform: uppercase;
    background-color: #fff;
    color: #000;
    width: 180px;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    animation: all .5s ease;
    margin-top:2rem;
  }
  & .section_btn:hover {
    background-color: red;
    color: #fff;
  }
  & ${SectionWrapper} {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

