import React, { useEffect, useState } from "react";
import "./viewPage.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ViewPage() {
  const [loading, setLoading] = useState(true);
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await axios.get(`http://localhost:5500/planets/${id}`);
        setPlanet(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, [id]);

  return (
    <>
      {loading ? <p>Loading...</p> : null}
      {planet !== null && (
        <div className="view">
          <div className="view-lhs">
            <Link className="back" to={"/planets"}>
              &lt;
            </Link>
            <img src={planet.Image} alt="" />
          </div>
          <div className="view-rhs">
            <div className="planet-info">
              <h1 className="title">{planet.Name}</h1>
              <hr />
              <p className="description">{planet.Appearance}</p>
              <hr />
              <div className="travel-info">
                <p className="">Distances from Earth to the {planet.Name}: </p>
                <p className="distance">{planet.Distance}</p>
              </div>
            </div>

            <div className="itinerary">
              <div className="">
                <h3>Discovery</h3>
                <hr />
                <ul>
                  <li>{planet.Discovery}</li>
                </ul>
              </div>

              <div className="">
                <h3>Moons</h3>
                <hr />
                  <ul>
                    <li>{planet.Moon}</li>
                  </ul>
              </div>

              <div className="">
                <h3>Orbit</h3>
                <hr />
                <ul>
                 <li>{planet.Orbit}</li>
                </ul>
              </div>
              
              <div className="">
                <h3>Rotation</h3>
                <hr />
                <ul>
                 <li>{planet.Rotation}</li>
                </ul>
              </div>
              
              <div className="">
                <h3>Origin</h3>
                <hr />
                <ul>
                 <li>{planet.Origin}</li>
                </ul>
              </div>
              
              <div className="">
                <h3>Size</h3>
                <hr />
                <ul>
                 <li>{planet.Size}</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

{
  /* <div className="view">
        <div className="view-lhs">
          <img
            src="https://science.nasa.gov/wp-content/uploads/2024/03/pia15162-mercury-basins-messenger-16x9-1.jpg?w=1536&format=webp"
            alt=""
          />
        </div>
        <div className="view-rhs">
          <div className="planet-info">
            <h1 className="title">Moon</h1>
            <hr />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              laboriosam eius maiores dolorum numquam asperiores rerum iure quo
              soluta repellat animi aliquid nesciunt libero itaque accusamus
              aliquam deleniti, optio adipisci.
            </p>
            <hr />
            <div className="travel-info">
              <p className="distance">33 Miles</p>
              <hr />
              <p>3 days duration</p>
            </div>
          </div>

          <div className="itinerary">
            <div className="packing-list">
              <h3>Packing List</h3>
              <hr />
              <ul>
                <li>Heat-resistant suit</li>
                <li>Camera</li>
                <li>Geological tool</li>
              </ul>
            </div>

            <div className="itinerary-activities">
              <h3>Itinerary Activities</h3>
              <hr />
              <div className="days">
                <ul>
                  <p>
                    <strong>Day 1</strong>
                  </p>
                  <li>Arrive at Mercury Base Camp</li>
                  <li>Explore the Caloris Basin</li>
                  <li>Evening solar observation</li>
                </ul>
                <ul>
                  <p>
                    <strong>Day 1</strong>
                  </p>
                  <li>Arrive at Mercury Base Camp</li>
                  <li>Explore the Caloris Basin</li>
                  <li>Evening solar observation</li>
                </ul>
                <ul>
                  <p>
                    <strong>Day 1</strong>
                  </p>
                  <li>Arrive at Mercury Base Camp</li>
                  <li>Explore the Caloris Basin</li>
                  <li>Evening solar observation</li>
                </ul>
              </div>
            </div>
            <div className="facts">
              <h3>Facts</h3>
              <hr />
              <ul>
                <li>Mercury has a very thin atmosphere.</li>
                <li>Its surface experiences extreme temperature variations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */
}
