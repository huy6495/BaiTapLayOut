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

function App() {
  return (
    <div className="App">
      <BaiTapLayout />
      {/* <Databinding /> */}
      {/* <Styles />
      <p className="text-red">Cybersoft app component</p> */}

      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe /> */}
      {/* <BaiTapVongLap /> */}
    </div>
  );
}

export default App;
