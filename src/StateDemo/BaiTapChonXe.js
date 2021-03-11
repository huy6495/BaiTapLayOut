import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcImg: "./img/car/products/black-car.jpg",
  };
  mangBtn = ["black", "red", "silver", "steel"];

  renderBtn = () => {
    return this.mangBtn.map((mau, index) => (
      <button
        key={index}
        onClick={() => {
          this.setState({ srcImg: `./img/car/products/${mau}-car.jpg` });
        }}
        style={{
          backgroundColor: mau,
          cursor: "pointer",
          color: "white",
          marginLeft: "20px",
        }}
      >
        {mau}
      </button>
    ));
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">Bài tập chọn xe</h1>
        <div className="container row">
          <div className="col-6">
            <img src={this.state.srcImg} className="w-100"></img>
          </div>
          <div className="col-6">{this.renderBtn()}</div>
        </div>
      </div>
    );
  }
}
