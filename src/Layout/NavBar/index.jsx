import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Menu, Space, Button, Row, Col, Divider,Image, notification } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  AliwangwangOutlined,
  ContactsOutlined,
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  HistoryOutlined,
  KeyOutlined
} from "@ant-design/icons";

import { logoutAction,getCartListAction } from "../../redux/actions";

import { ROUTER } from "../../constants/router";
import { COLOR } from "../../constants/color";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import * as S from "./styles";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cartReducer);
  const { userInfo } = useSelector((state) => state.authReducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const changeTopNavBar = () => {
      const navBar = document.getElementById("navbar-container");
      const scroll = window.scrollY;
      scroll > 50 ? (navBar.style.backgroundColor = '#f0f0f0') : (navBar.style.backgroundColor = '#fff');
    };
    window.addEventListener("scroll", changeTopNavBar);
  }, []);

  return (
    <S.NavbarContainer id="navbar-container">
      <S.NavBar>
        <S.NavBarBrand to={ROUTER.HOME} href="" style={{ zIndex: 10 }}>
          <img
            src="https://flatsometutorial.com/wp-content/uploads/2020/03/logo.png"
            alt=""
          />
        </S.NavBarBrand>
        <S.NavBarMenu className="collapse navbar-collapse" id="navbarContent">
          <Space>
            <S.NavBarNav className="navbar-nav mr-auto">
              <S.NavBarLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link"
              >
                home
              </S.NavBarLink>
              <S.NavBarLink exact to={ROUTER.CART} activeClassName="active">
                cart
              </S.NavBarLink>
              <S.NavBarLink
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                to={ROUTER.SHOP}
              >
                <img
                  src="https://flatsometutorial.com/wp-content/uploads/2020/03/Image-1-150x150.jpg"
                  alt=""
                />
                Shop
              </S.NavBarLink>
              <S.NavBarLink to={ROUTER.ABOUT} exact>
                about
              </S.NavBarLink>
            </S.NavBarNav>
          </Space>
        </S.NavBarMenu>
        <S.NavBarMenuIcon onClick={() => setVisible(true)}>
          <MenuOutlined />
        </S.NavBarMenuIcon>
        <S.NavBarDrawer
          title="Flatsome"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Space direction="vertical">
            <S.NavBarLink
              exact
              to="/"
              activeClassName="active"
              className="nav-link"
            ><HomeOutlined />&nbsp;&nbsp;
              home
            </S.NavBarLink>
            <S.NavBarLink exact to={ROUTER.CART} activeClassName="active">
              <ShoppingCartOutlined />&nbsp;&nbsp;
              cart
            </S.NavBarLink>
            <S.NavBarLink to={ROUTER.SHOP}>
              <ShoppingOutlined />&nbsp;&nbsp;
              Shop
            </S.NavBarLink>
            <S.NavBarLink to={ROUTER.ABOUT} exact>
              <AliwangwangOutlined />&nbsp;&nbsp;
              about
            </S.NavBarLink>
            <Divider></Divider>
            <Image src='https://cdn.vietnambiz.vn/2019/9/22/technical-leader-roles-and-responsibilities-15691555119602075448671.png' />
            {/* </S.NavBarNav> */}
          </Space>
        </S.NavBarDrawer>
        <S.NavbarUserContainer>
          <S.NavBarUser>
            <Dropdown
              overlay={
                userInfo.data ? (
                  <Menu>
                    <Menu.Item key="0">
                      <span
                        onClick={() => history.push(ROUTER.PROFILE)}
                        style={{fontSize:'1rem'}}
                      >
                       <ProfileOutlined />&nbsp;&nbsp;My profile
                      </span>
                    </Menu.Item>
                    <Menu.Item key="1">
                      <span
                        onClick={() => history.push({
                          pathname:ROUTER.PROFILE,
                          state: {
                            activeTab:1
                          }
                        })}
                        style={{fontSize:'1rem'}}
                      >
                       <HistoryOutlined />&nbsp;&nbsp;Order History
                      </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <span
                        onClick={() => history.push({
                          pathname:ROUTER.PROFILE,
                          state: {
                            activeTab:1
                          }
                        })}
                        style={{fontSize:'1rem'}}
                      >
                       <KeyOutlined />&nbsp;&nbsp;Change Password
                      </span>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <span
                      style={{fontSize:'1rem'}}
                        onClick={() => {
                          localStorage.removeItem("userInfo");
                          dispatch(logoutAction());
                          notification.info({
                            message:'You logout!'
                          })
                        }}
                      >
                       <LogoutOutlined />&nbsp;&nbsp;Logout
                      </span>
                    </Menu.Item>
                  </Menu>
                ) : (
                  <></>
                )
              }
            >
              {userInfo.data ? (
                <span
                  className="ant-dropdown-link"
                  style={{
                    color: `rgba(102, 102, 102, 0.85)`,
                    cursor: "pointer",
                    fontSize: "1rem",
                    margin: "auto",
                    paddingRight: "1rem",
                  }}
                >
                 <UserOutlined /> {userInfo?.data?.username}
                </span>
              ) : (
                <Button
                  className="ant-dropdown-link"
                  loading={userInfo.loading}
                  style={{
                    color: `#fff`,
                    backgroundColor: "#ff7a45",
                    margin: "auto",
                    cursor: "pointer",
                    fontSize: "1rem",
                    padding: "4px 1rem",
                    marginRight: "1rem",
                    textAlign: "center",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  onClick={() => showModal()}
                >
                  Login
                </Button>
              )}
            </Dropdown>
            <S.FormModal
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              okButtonProps={<button></button>}
              width={1200}
              footer={[]}
            >
              <S.AuthFormContainer>
                <Row>
                  <Col
                    sm={{ span: 0 }}
                    xs={{ span: 0 }}
                    md={{ span: 0 }}
                    lg={{ span: 12 }}
                  >
                    <S.FormImage src="https://cdn2.edumall.io/k-577a160c047c994bb7e5b397/20170728-/technology.jpg" />
                  </Col>
                  <Col
                    sm={{ span: 24 }}
                    xs={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 12 }}
                    style={{
                      backgroundColor: '#bfbfbf',
                    }}
                  >
                    {/* <S.FormContainer> */}
                    {isLogin ? (
                      <LoginForm setIsModalVisible={setIsModalVisible} setIsLogin={setIsLogin} />
                    ) : (
                      <RegisterForm setIsLogin={setIsLogin} />
                    )}
                  </Col>
                </Row>
              </S.AuthFormContainer>
            </S.FormModal>
            <S.NavBarCart
              count={cartList && cartList.data?.length}
              className="navbar-cart"
            >
              <Button
                icon={<i class="fas fa-cart-arrow-down cart-icon" style={{color: COLOR.MAIN_COLOR,fontSize:'1.2rem'}}></i>}
                
                type="text"
                onClick={() => history.push({
                  pathname:ROUTER.CART,
                  state: {
                    checkoutStep: 0 
                  }
                })}
              ></Button>
            </S.NavBarCart>
          </S.NavBarUser>
        </S.NavbarUserContainer>
      </S.NavBar>
    </S.NavbarContainer>
  );
};

export default NavBar;
