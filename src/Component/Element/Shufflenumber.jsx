import React, { useState } from "react";

function Shufflenumber() {
  const [data, setData] = useState("");
  const number = [1, 2, 3, 4, 5];
  const randomnumber = () => {
    const random_data = number[Math.floor(Math.random() * number.length)];
    setData(random_data);
  };
  return (
    <div className="shuffle">
      <div className=" container text-center">
        <div className="row">
            <div className="col-md-1"></div>
          <div className="col-md-2">
            <div className="card">
              <h1>Card 1</h1>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <h1>Card 2</h1>
            </div>
          </div>{" "}
          <div className="col-md-2">
            <div className="card">
              <h1>Card 3</h1>
            </div>
          </div>{" "}
          <div className="col-md-2">
            <div className="card">
              <h1>Card 4</h1>
            </div>
          </div>{" "}
          <div className="col-md-2">
            <div className="card">
              <h1>Card 5</h1>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="btn btn-dark " onClick={randomnumber}>
            Select Number
          </button>
        </div>
        <div className="row">
            <div className="col-md-1"></div>
          <div className="col-md-3 mt-4">
            <div className="card mt-4">
              <h1>Card {data}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shufflenumber;
