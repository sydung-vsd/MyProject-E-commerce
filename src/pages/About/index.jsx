import React from "react";
import { Row, Col, Image, Divider } from "antd";
import { RightOutlined } from "@ant-design/icons";

import TopWrapper from "../../components/TopWrapper";
import { BREADCRUMB, MEMBER } from "./constant";
import { ROUTER } from "../../constants/router";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

const About = () => {

  const history = useHistory()

  const renderMember = () => {
    MEMBER.map((item, index) => (
      <Col xs={24} md={12} lg={6} key={index}>
        <S.MemberContainer className="member_container" image={item.image}>
          <div className="member_wrapper">
            <h1 className="member_name">{item.name}</h1>
            <p className="member_role">{item.role}</p>
            <button className="shop_btn">
              shop now <RightOutlined />
            </button>
          </div>
        </S.MemberContainer>
      </Col>
    ));
  };

  return (
    <div>
      <TopWrapper breadcrumb={BREADCRUMB} />
      <S.FirstSection>
        <S.SectionWrapper>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <Image
                style={{ width: "100%", height: "auto" }}
                src="https://lacomparacion.com/wp-content/uploads/2021/05/1621404197_Peaky-Blinders-temporada-6-fecha-de-lanzamiento-elenco-historia-y-1080x675.jpg"
              />
            </Col>
            <Col xs={24} lg={12}>
              <div className="section_right">
                <h1 className="section_title">ABOUT OUR COMPANY</h1>
                <p className="section_content">
                  FAUCIBUS IN ORNARE QUAM VIVERRA ORCI. SAPIEN PELLENTESQUE
                  HABITANT MORBI TRISTIQUE SENECTUS ET NETUS. NULLA ALIQUET ENIM
                  TORTOR AT. NUNC CONSEQUAT INTERDUM VARIUS SIT.
                </p>
                {/* <Divider /> */}
                <button className="section_btn" onClick={() => history.push(ROUTER.SHOP)}>
                  shop now <RightOutlined />
                </button>
              </div>
            </Col>
          </Row>
        </S.SectionWrapper>
      </S.FirstSection>
      <S.SecondSection>
        <S.SectionWrapper>
          <h3 className="section_heading">THE CREW</h3>
          <h1 className="section_title">OUR TEAM</h1>
          <p className="section_content">
            VIVAMUS CONSECTETUER HENDRERIT LACUS. VIVAMUS QUIS MI. NULLA PORTA
            DOLOR. DUIS ARCU TORTOR, SUSCIPIT EGET, IMPERDIET NEC, IMPERDIET
            IACULIS, IPSUM. PRAESENT BLANDIT LAOREET.
          </p>
          <Row gutter={[16, 16]} style={{ marginTop: "2rem" }}>
            <Col xs={24} md={12} lg={6}>
              <S.MemberContainer
                className="member_container"
                image="https://www.thesun.co.uk/wp-content/uploads/2019/09/NINTCHDBPICT000521056539-1-e1568551433951.jpg"
              >
                <div className="member_wrapper">
                  <h1 className="member_name">Tommy Shelby</h1>
                  <p className="member_role">BOSS</p>
                  <button className="shop_btn">Contact</button>
                </div>
              </S.MemberContainer>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <S.MemberContainer
                className="member_container"
                image="https://pbs.twimg.com/media/EYuL8MiXQAc_4rD.jpg"
              >
                <div className="member_wrapper">
                  <h1 className="member_name">Author Shelby</h1>
                  <p className="member_role">CEO</p>
                  <button className="shop_btn">Contact</button>
                </div>
              </S.MemberContainer>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <S.MemberContainer
                className="member_container"
                image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c6b60c8-e44e-4ddd-b214-007445f6bcfe/ddwwyw1-c6d9ab0e-0954-458e-9342-4a5b6ca751a2.jpg/v1/fill/w_1024,h_1024,q_75,strp/john_shelby___peaky_blinders_by_radimirovna_ddwwyw1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzZjNmI2MGM4LWU0NGUtNGRkZC1iMjE0LTAwNzQ0NWY2YmNmZVwvZGR3d3l3MS1jNmQ5YWIwZS0wOTU0LTQ1OGUtOTM0Mi00YTViNmNhNzUxYTIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BtnPs8mfIVjijJHBA3VTEZ4G6qTNFV-i4a6k1E2CZk0"
              >
                <div className="member_wrapper">
                  <h1 className="member_name">John Shelby</h1>
                  <p className="member_role">CEO</p>
                  <button className="shop_btn">Contact</button>
                </div>
              </S.MemberContainer>
            </Col>
            <Col xs={24} md={12} lg={6}>
              <S.MemberContainer
                className="member_container"
                image="https://www.thenorthernecho.co.uk/resources/images/2638751/"
              >
                <div className="member_wrapper">
                  <h1 className="member_name">WILLIAM</h1>
                  <p className="member_role">MANAGER</p>
                  <button className="shop_btn">Contact</button>
                </div>
              </S.MemberContainer>
            </Col>
          </Row>
        </S.SectionWrapper>
      </S.SecondSection>
      <S.ThirdSection>
        <S.SectionWrapper>
          <h1 className="section_title">
            LET’S WORK TOGETHER ON YOUR NEXT WEB PROJECT
          </h1>
          <p className="section_content">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. UT ELIT
            TELLUS, LUCTUS NEC ULLAMCORPER MATTIS, PULVINAR DAPIBUS LEO.
          </p>
          <button className="section_btn" onClick={() => history.push(ROUTER.SHOP)}>shop now <RightOutlined /></button>
        </S.SectionWrapper>
      </S.ThirdSection>
    </div>
  );
};

export default About;
