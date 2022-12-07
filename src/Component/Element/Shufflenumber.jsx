import React, { useState } from "react";
import { Image } from "react-bootstrap";
import carddata from "../Layout/Carddata.json"

function Shufflenumber() {
  const [data, setData] = useState("");
  const [image, setImage] =useState("");
  const [id, setId] =useState()

  const randomnumber = () => {
    const random_data = carddata[Math.floor(Math.random() * carddata.length)];
    console.log(random_data.tile);
    setData(random_data.tile);
    setImage(random_data.img);
    setId(random_data.id)
  };

  return (
    <div className="shuffle">
      <div className=" container text-center">
        <div className="row">
          {carddata.map((items) => (
            <div className="col-md-2">
              {" "}
              <div className="card" style={{ width: "10rem" }}>
                {" "}
                <img src={items.img} className="card-img-top img-fluid" alt="..." />{" "}
                <div className="card-body">
                  {" "}
                  <p className="card-text">card {items.id}</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button className="btn btn-dark " onClick={randomnumber}>
            Select Number
          </button>
        </div>
        <div className="row mt-5 d-flex justify-content-center">
        <div className="col-md-4">
              {" "}
              <div className="card">
                {" "}
                <div className=" d-flex justify-content-center">
                <img src={image} className=" img-fluid random-img mt-3"/>{" "}
                </div>
                <div className="card-body">
                  {" "}
                  <h5 className="card-title">{data}</h5>{" "}
                </div>{" "}
              </div>{" "}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Shufflenumber;
