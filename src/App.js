import logo from "./logo.svg";
import "./App.css";
import DemoFunction from "./Components/DemoComponent/DemoFunction";
import DemoClass from "./Components/DemoComponent/DemoClass";
import CardProduct from "./Components/DemoComponent/CardProduct";
import BaiTapLayout1 from "./Components/BaiTapLayout1/BaiTapLayout1";
import Databinding from "./Databinding/Databinding";
import BaiTapLayout from "./Components/BaiTapThucHanhLayout/BaiTapLayout";
import Styles from "./Components/Styles/Styles";
import HandleEvent from "./HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import BaiTapChonXe from "./StateDemo/BaiTapChonXe";
import BaiTapVongLap from "./Components/BaiTapVongLap/BaiTapVongLap";
import RenderWithMap from "./RenderWithMap.js/RenderWithMap";
import BaiTapLayoutMap from "./RenderWithMap.js/BaiTapLayoutMap";
import DanhSachSPProps from "./Props/DemoProps/DanhSachSPProps";
import BaiTapPropsFunction from "./Components/BaiTapTruyenPropsFunction/BaiTapPropsFunction";
import Products from "./Props/BaiTapProps/Products";
import BTGioHangRedux from "./Components/BaiTapRedux/BTGioHangRedux";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout1 /> */}
      {/* <BaiTapLayout /> */}
      {/* <Databinding /> */}
      {/* <Styles />
      <p className="text-red">Cybersoft app component</p> */}

      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe /> */}
      {/* <BaiTapVongLap /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapLayoutMap /> */}
      {/* <DanhSachSPProps /> */}
      {/* <BaiTapPropsFunction /> */}
      {/* <Products /> */}
      <BTGioHangRedux />
    </div>
  );
}

export default App;
