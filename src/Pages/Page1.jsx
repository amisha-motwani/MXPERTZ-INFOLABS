import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navpage from "../Navpage";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

function Page1() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://child.onrender.com/api/sciencefiction"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[#1b1437]">
        {/* <Navpage /> */}
        <div className="w-full flex justify-evenly py-5 text-white">
          <div className="w-[fit-content] h-[fit-content] flex-wrap-wrap flex justify-between gap-2 py-2 items-center  px-3 rounded-full bg-[#0086ff]">
            <div className="w-[30px] h-[30px] rounded-full"></div>
            <h1>New</h1>
          </div>
          <div className="w-[fit-content] h-[fit-content] flex justify-between gap-2 py-2 items-center  px-3 rounded-full bg-[#ffbc03]">
            <div className="w-[30px] h-[30px] rounded-full">
              <img src={icon1} alt="" />
            </div>
            <h1>In Progress</h1>
          </div>
          <div className="w-[fit-content] h-[fit-content] flex justify-between gap-2 py-2 items-center  px-3 rounded-full bg-[#00ff6c]">
            <div className="w-[30px] h-[30px] rounded-full">
              <img src={icon2} alt="" />
            </div>
            <h1>Completed</h1>
          </div>
          <div className="w-[fit-content] h-[fit-content] flex justify-between gap-2 py-2 items-center  px-3 rounded-full bg-gradient-to-r from-[#416be8] to-[#00c0ee]">
            <div className="w-[30px] h-[30px] rounded-full">
              <img src={icon3} alt="" />
            </div>
            <h1>Clear All</h1>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly gap-3 py-5 text-white">
          {data.map((item) => (
            <Card
              key={item._id} // Assuming each item has a unique id
              id={item._id} // Passing the id prop
              title={item.Title}
              image={item.Image}
              status={item.Status}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Page1;

function Card({ title, image, status, id }) {
  return (
    <Link to={`/page2/${id}`}>
      <div
        className="w-[250px] h-[fit-content] items-center px-3 border-1 text-black py-2 rounded-lg text-white"
        style={{ backgroundImage: "linear-gradient(40deg, #3b82f6, #10b981)" }}
      >
        <img
          src={`https://ik.imagekit.io/dev24/${image[0]}`}
          alt={title}
          className="w-[200px] h-[200px] border-1 mx-auto"
        />
        <h1 className="text-center my-2">{title}</h1>
        <button className="ms-4 w-[80%] h-[fit-content] border-1 rounded-full px-2 py-1">
          {status}
        </button>
      </div>
    </Link>
  );
}
