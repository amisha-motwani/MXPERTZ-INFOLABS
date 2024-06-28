import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        right: "100px", 
        top: "109%",
        borderRadius:"50%",
        width:"8%",
        height:"7%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex: 1,
        borderRadius:"50%"
      }}
      onClick={onClick}
    />
  );
};


const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        left: "100px", 
        top: "109%",
        zIndex: 1,
        borderRadius:"50%",
        width:"8%",
        height:"7%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}
      onClick={onClick}
    />
  );
};


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

function Page2() {
  const { id } = useParams();
  console.log("myid==>", id);

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://child.onrender.com/api/sciencefiction/${id}`
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
  }, [id]);

  console.log("mydata", data);

  return (
    <>
      <div className="bg-[#1b1437] w-full h-[100vh]">
        <div>
          <h1 className="text-center py-2 text-white">
            The Lost City of Future Earth
          </h1>
        </div>
        <div className="w-full flex justify-evenly py-5 text-white">
          <div className="w-[fit-content] h-[fit-content] flex justify-between gap-2 py-2 items-center px-3 rounded-full bg-[#0086ff]">
            <div className="w-[30px] h-[30px] rounded-full">
              <img src={icon1} alt="" />
            </div>
            <h1>World Explorer</h1>
          </div>
          <div className="w-[fit-content] h-[fit-content] flex justify-between gap-2 py-2 items-center px-3 rounded-full bg-[#ffbc03]">
            <div className="w-[30px] h-[30px] rounded-full">
              <img src={icon2} alt="" />
            </div>
            <h1>Story Adventure</h1>
          </div>
          <div className="w-[fit-content] h-[fit-content] flex justify-between gap-2 py-2 items-center px-3 rounded-full bg-[#00ff6c]">
            <div className="w-[30px] h-[30px] rounded-full">
              <img src={icon3} alt="" />
            </div>
            <h1>Brain Quest</h1>
          </div>
        </div>
        <div>
          <h1 className="text-center py-4 text-white">
            Drag Picture to the matching Words, light up correct pairs, shake
            for a retry
          </h1>
        </div>

        <div className="w-full flex h-[100vh] text-white px-4 justify-between bg-[#1b1437]">
          <div className="w-[32%] h-[fit-content] py-3 px-3  rounded-lg border-1 border-dashed border-[#24a0d5]">
            <Slider {...settings}>
              {data?.Wordexplore?.map((item, index) => (
                <div
              
                  key={index}
                >
                  <h1>{item.Storytitle}</h1>
                  <p>{item.Storyttext}</p>
                  <img
                  className="my-3"
                    src={`https://ik.imagekit.io/dev24/${item.Storyimage[0]}`}
                    alt=""
                  />
                  <div className="w-[fit-content] p-0">
                    <div className="flex items-center ms-0 gap-1">
                      <span className="text-green-700"> Synonyms:</span> <h1>{item.Synonyms}</h1>
                    </div>
                    <div className="flex items-center gap-1 ms-0">
                      <span className="text-red-600">Antonyms:</span> <h1>{item.Antonyms}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-[67%]">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2;
