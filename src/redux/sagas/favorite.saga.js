import { put, takeEvery } from "redux-saga/effects";
import {
  FAVORITE_ACTION,
  REQUEST,
  SUCCESS,
  FAIL,
  PRODUCT_ACTION,
} from "../constants";
import axios from "axios";
import { notification } from "antd";
function* getFavoriteListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:5000/favorites");
    yield put({
      type: SUCCESS(FAVORITE_ACTION.GET_FAVORITE_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (error) {
    yield put({
      type: FAIL(FAVORITE_ACTION.GET_FAVORITE_LIST),
      payload: {
        error,
      },
    });
  }
}
function* likeProductSaga(action) {
  try {
    const { productId } = action.payload;
    const result = yield axios.post(
      "http://localhost:5000/favorites",
      action.payload
    );
    // yield put({
    //   type: REQUEST(FAVORITE_ACTION.GET_FAVORITE_LIST)
    // })
    yield put({
      type: SUCCESS(FAVORITE_ACTION.LIKE_PRODUCT),
      payload: {
        data: result.data,
      },
    });
    yield put({
      type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: { id: productId },
    });
    notification.success({
      message: "You liked product",
    });
  } catch (error) {
    yield put({
      type: FAIL(FAVORITE_ACTION.LIKE_PRODUCT),
      payload: {
        error,
      },
    });
  }
}
function* dislikeProductSaga(action) {
  const { id, productId } = action.payload;
  try {
    yield axios.delete(`http://localhost:5000/favorites/${id}`);
    yield put({
      type: SUCCESS(FAVORITE_ACTION.DISLIKE_PRODUCT),
      payload: {
        data: {
          id,
        },
      },
    });
    yield put({
      type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: { id: productId },
    });
    notification.success({
      message: "You disliked product",
    });
  } catch (error) {
    yield put({
      type: FAIL(FAVORITE_ACTION.DISLIKE_PRODUCT),
      payload: {
        error,
      },
    });
  }
}
export default function* favoriteSaga() {
  yield takeEvery(REQUEST(FAVORITE_ACTION.LIKE_PRODUCT), likeProductSaga);
  yield takeEvery(REQUEST(FAVORITE_ACTION.DISLIKE_PRODUCT), dislikeProductSaga);
  yield takeEvery(
    REQUEST(FAVORITE_ACTION.GET_FAVORITE_LIST),
    getFavoriteListSaga
  );
}
