import {
  HomeOutlined,
  IdcardOutlined,
  HistoryOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  KeyOutlined,
} from "@ant-design/icons";

export const BREADCRUMB = [
  {
    title: "Home",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Profile",
    path: "/profile",
  },
];

export const PROFILE_TABS = [
  {
    title: "Personal Information",
    icon: <IdcardOutlined />,
    value: 0,
  },
  {
    title: "Order History",
    icon: <HistoryOutlined />,
    value: 1,
  },
  {
    title: "Favorite Product",
    icon: <HeartOutlined />,
    value: 2,
  },
  // {
  //   title: "Sổ địa chỉ",
  //   icon: <EnvironmentOutlined />,
  //   value: 3,
  // },
  // {
  //   title: "Thông tin thanh toán",
  //   icon: <CreditCardOutlined />,
  //   value: 4,
  // },
  {
    title: "Change Password",
    icon: <KeyOutlined />,
    value: 3,
  },
];
