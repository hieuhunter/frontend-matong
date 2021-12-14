import {
  CTPRODUCT_FAILED,
  CTPRODUCT_REQUESTED,
  CTPRODUCT_SUCCEED,
  PRODUCT_FAILED,
  PRODUCT_REQUESTED,
  PRODUCT_SUCCEED,
} from "../Constants/constant";

export const productRequestedAction = () => ({
  type: PRODUCT_REQUESTED,
});
export const productSucceedAction = (san_pham) => ({
  type: PRODUCT_SUCCEED,
  payload: {
    san_pham: san_pham,
  },
});
export const productFailedAction = (errors) => ({
  type: PRODUCT_FAILED,
  payload: {
    errors: errors,
  },
});
// chi tiet san pham
export const ctproductRequestedAction = (id) => ({
  type: CTPRODUCT_REQUESTED,
  payload: {
    id: id,
  },
});
export const ctproductSucceedAction = (san_pham) => ({
  type: CTPRODUCT_SUCCEED,
  payload: {
    san_pham: san_pham,
  },
});
export const ctproductFailedAction = (error) => ({
  type: CTPRODUCT_FAILED,
  payload: {
    error: error,
  },
});
