import React from "react";
import "./homePage.css";
import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import solarSystem from "../../assets/solar system.webp";
import logo from "../../assets/logo.gif";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await axios.get("http://localhost:5500/planets");
        setPlanets(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching planets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <>
      <div className="home-grid">
        <div className="grid">
          <nav>
            <div className="logo">
              <picture>
              <img src={logo} alt="" />
              </picture>
            </div>

            {/* <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">NASA</a>
              </li>
              <li>
                <a href="/">ISRO</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul> */}

            <div className="nav-cta">
              <button className="signup"><Link>Get Source Code</Link></button>
              {/* <button className="login"></button> */}
            </div>
          </nav>
          <div className="heading">
            <div className="inner-heading">
              <h1>Celestial Adventures</h1>
              <div className="heading-image">
                <img src={solarSystem} alt="" />
              </div>
              <h1>A Journey Through Our Solar System</h1>
              <div className="text">
                <p>
                  Experience interactive exhibits and thrilling activities
                  designed for space enthusiasts of all ages.
                </p>
              </div>
            </div>
          </div>
          {loading ? <p>Loading...</p> : null}
          {planets !== null &&
            planets.data.data.map((planet, index) => (
              <div className={"card card" + (index + 1)} key={planet._id}>
                <Link to={`/planets/${planet._id}`}>
                  <img src={planet.Image} alt="" />
                  <div className="card-titleContainer">
                    <h1 className="title">{planet.Name}</h1>
                    <p className="description">{planet.SpecialFact}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="card card1">
            <img src={moon} alt="" />
            <img
              src="https://science.nasa.gov/wp-content/uploads/2024/03/pia15162-mercury-basins-messenger-16x9-1.jpg?w=1536&format=webp"
              alt=""
            />
            <div className="card-titleContainer">
              <h1 className="title">Title</h1>
              <p className="description">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card card2Venus">
            <img src={moon} alt="" />
            <img
              src="https://science.nasa.gov/wp-content/uploads/2023/05/saturn-farewell-pia21345-sse-banner-1920x640-1.jpg?w=1536&format=webp"
              alt=""
            />
            <div className="card-titleContainer">
              <h1 className="title">Title</h1>
              <p className="description">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card card3">
            <img src={moon} alt="" />
            <img
              src="https://science.nasa.gov/wp-content/uploads/2024/03/jupiter-marble-pia22946-16x9-1.jpg?w=1536&format=webp"
              alt=""
            />
            <div className="card-titleContainer">
              <h1 className="title">Title</h1>
              <p className="description">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card card4">
            <img src={moon} alt="" />
            <img
              src="https://science.nasa.gov/wp-content/uploads/2024/03/uranus-pia18182-16x9-1.jpg?w=1536&format=webp"
              alt=""
            />
            <div className="card-titleContainer">
              <h1 className="title">Title</h1>
              <p className="description">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card card5">
            <img src={moon} alt="" />
            <img
              src="https://science.nasa.gov/wp-content/uploads/2024/03/mars-full-globe-16x9-1.jpg?w=1536&format=webp"
              alt=""
            />
            <div className="card-titleContainer">
              <h1 className="title">Title</h1>
              <p className="description">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card card6">
            <img src={moon} alt="" />
            <img
              src="https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?w=1536&format=webp"
              alt=""
            />
            <div className="card-titleContainer">
              <h1 className="title">Title</h1>
              <p className="description">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card card7">
            <img src={moon} alt="" />
            <img
              src="https://science.nasa.gov/wp-content/uploads/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?w=1536&format=webp"
              alt=""
            />
            <div className="card-titleContainer">
              <h1 className="title">Title</h1>
              <p className="description">Lorem ipsum dolor sit amet.</p>
            </div>
          </div> */
}
