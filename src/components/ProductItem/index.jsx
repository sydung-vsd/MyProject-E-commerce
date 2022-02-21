import React, { useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import {
  addToCartAction,
  updateCartProductAction,
  getCommentListAction,
  getAllCommentAction,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Space, notification, Rate, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { ROUTER } from "../../constants/router";

import * as S from "./styles";

const ProductItem = ({ product }) => {
  const [productRate, setProductRate] = useState(0);
  const history = useHistory();
  const { userInfo } = useSelector((state) => state.authReducer);
  const { cartList } = useSelector((state) => state.cartReducer);
  
  const dispatch = useDispatch();
  
  const addItemToCartHandler = () => {

    if (userInfo.data?.id) {
      if (!!product.options.length) {
        const existCartProductOption = cartList.data.find(
          (cartItem) => cartItem.option?.id === product.options[0].id
        );
        if (!!existCartProductOption) {
          dispatch(
            updateCartProductAction({
              data: {
                id: existCartProductOption.id,
                quantity: existCartProductOption.quantity + 1,
              },
              callback: {
                showSuccess: () =>
                  notification.success({
                    message: "Updating product is success!",
                  }),
              },
            })
          );
        } else {
          dispatch(
            addToCartAction({
              productId: parseInt(product.id),
              quantity: 1,
              userId: parseInt(userInfo.data?.id),
              option: product.options[0]
            })
          );
        }
      } else {
        const existCartProduct = cartList.data?.find(
          (cartItem) => cartItem.productId === product.id
        );
        if (!!existCartProduct) {
          dispatch(
            updateCartProductAction({
              data: {
                quantity: existCartProduct.quantity + 1,
                id: existCartProduct.id,
              },
              callback: {
                showSuccess: () => {
                  notification.success({
                    message: "Updated product in cart is success",
                  });
                },
              },
            })
          );
        } else {
          dispatch(
            addToCartAction({
              userId: userInfo?.data.id,
              productId: parseInt(product.id),
              quantity: 1,
              option: null,
            })
          );
        }
      }
    } else {
      notification.error({
        message: "You need to login to do this",
      });
    }
  };
  return (
    <S.Product
      cover={
        <S.ProductImg
          onClick={() => {
            history.push(
              generatePath(ROUTER.PRODUCT_DETAIL, { productId: product.id })
            );
          }}
          className="product-img"
          alt="example"
          src={product?.imageShow}
        />
      }
      actions={[
        <S.ProductAddBtn onClick={addItemToCartHandler}>
          <ShoppingCartOutlined
            style={{ fontSize: "1.2rem", marginRight: "4px" }}
          />
          <span>add to cart</span>
        </S.ProductAddBtn>,
      ]}
      bordered
    >
      <div>
        <S.ProductName>{product.name}</S.ProductName>
        <Space>
          <S.ProductPrice>${product.price.toLocaleString()}</S.ProductPrice>
          {/* <Rate disabled allowHalf value={productRate} /> */}
          <h3>{/* ({commentList.data?.length} Reviews) */}</h3>
        </Space>
      </div>
      <Space
        align="end"
        style={{ width: "100%", justifyContent: "space-between" }}
      >
        <S.ProductType>{product.category.name}</S.ProductType>
        <S.ProductBrand>{product.brand.name}</S.ProductBrand>
      </Space>
    </S.Product>
  );
};
export default ProductItem;
