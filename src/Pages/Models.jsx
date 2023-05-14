import React from "react";
import HeroPages from "../components/HeroPages";
import { carData } from "../components/data";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Models = () => {
  return (
    <section className="section models" id="models">
      <HeroPages name="Vihecle Models" />
      <div className="container">
        <div className="models-div">
          {carData.map(
            ({ id, price, img, model, mark, doors, transmission, fuel }) => {
              return (
                <div key={id}>
                  <div className="models-div__box">
                    <div className="models-div__box__img">
                      <img src={img} alt={model} />
                      <div className="models-div__box__descr">
                        <div className="models-div__box__descr__name-price">
                          <div className="models-div__box__descr__name-price__name">
                            <p>{model}</p>
                            <span>
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                            </span>
                          </div>
                          <div className="models-div__box__descr__name-price__price">
                            <h4>${price}</h4>
                            <p>per day</p>
                          </div>
                        </div>
                        <div className="models-div__box__descr__name-price__details">
                          <span>{mark}</span>
                          <span style={{ textAlign: "right" }}>
                            {doors} &nbsp;{" "}
                            <i className="fa-solid fa-car-side"></i>
                          </span>
                          <span>{transmission}</span>
                          <span style={{ textAlign: "right" }}>{fuel}</span>
                        </div>
                        <div className="models-div__box__descr__name-price__btn">
                          <Link className="button" to="/">
                            Book Ride
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <Banner />
      <Footer />
    </section>
  );
};

export default Models;
