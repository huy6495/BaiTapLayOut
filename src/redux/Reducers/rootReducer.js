import { combineReducers } from "redux";

const stateDefault = {
  gioHang: [],
};

//Store tổng ứng dụng
export const rootReducer = combineReducers({
  //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer: (state = stateDefault, action) => {
    console.log("reducer", action);
    switch (action.type) {
      case "THEM_GIO_HANG": {
        let gioHangCapNhap = [...state.gioHang];
        let index = gioHangCapNhap.findIndex(
          (sp) => sp.maSP === action.spGioHang.maSP
        );
        if (index !== -1) {
          gioHangCapNhap[index].soLuong += 1;
        } else {
          gioHangCapNhap = [...gioHangCapNhap, action.spGioHang];
        }
        state.gioHang = gioHangCapNhap;
        return { ...state };
      }
      case "XOA_GIO_HANG": {
        let gioHangCapNhap = [...state.gioHang];
        gioHangCapNhap.splice(action.index, 1);
        state.gioHang = gioHangCapNhap;
        return { ...state };
      }
    }
    return state;
  },
});
