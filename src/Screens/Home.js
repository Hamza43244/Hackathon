import React, { useEffect, useState } from "react";

import axios from "axios";

import { Container } from "react-bootstrap";

import { FidgetSpinner } from "react-loader-spinner";

import { useNavigate } from "react-router-dom";

import SmCard from "../Components/Smcard";
import SmHeader from "../Components/Smheader";


const Home = () => {
  let navigate = useNavigate();
  let [loader, setLoader] = useState(false);
  
  let [cardList, setCardList] = useState([

      {
        id: 1,
        car: "Mitsubishi",
        car_model: "Montero",
        car_color: "Yellow",
        car_model_year: 2002,
        car_vin: "SAJWJ0FF3F8321657",
        price: "$2814.46",
        availability: "Available",
        image:
          "https://images.freecreatives.com/wp-content/uploads/2015/06/cool-car-wallpapers-hd.jpg",
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 2,
        car: "Volkswagen",
        car_model: "Passat",
        car_color: "Maroon",
        car_model_year: 2008,
        car_vin: "WBANV9C51AC203320",
        price: "$1731.98",
        availability: "Available",
        image:
          "https://wallpaperaccess.com/full/40045.jpg",
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 3,
        car: "Saturn",
        car_model: "L-Series",
        car_color: "Red",
        car_model_year: 2003,
        car_vin: "1HGCR6F34EA246317",
        price: "$2238.35",
        availability: "Available",
        image:
          "https://www.supercars.net/blog/wp-content/uploads/2017/10/lamborghini_egoista_concept_car-1920x1200.jpg",
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 4,
        car: "Jeep",
        car_model: "Compass",
        car_color: "Violet",
        car_model_year: 2012,
        car_vin: "4USBT33454L511606",
        price: "$2732.99",
        availability: "Available",
        image:
          " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 5,
        car: "Mitsubishi",
        car_model: "Lancer Evolution",
        car_color: "Purple",
        car_model_year: 2002,
        car_vin: "WAU2GBFCXDN339713",
        price: "$3849.47",
        availability: "Available",
        image:
          "https://images.freecreatives.com/wp-content/uploads/2015/06/cool-car-wallpapers-hd.jpg",
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 6,
        car: "Chevrolet",
        car_model: "Suburban",
        car_color: "Indigo",
        car_model_year: 2009,
        car_vin: "WAUSH98E96A592763",
        price: "$1252.30",
        availability: "Available",
        image:
        "https://wallpaperaccess.com/full/40045.jpg",
       descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 7,
        car: "Dodge",
        car_model: "Ram Van B350",
        car_color: "Yellow",
        car_model_year: 1994,
        car_vin: "KNADH4A37A6919967",
        price: "$1762.42",
        availability: true,
        image:
        "https://www.supercars.net/blog/wp-content/uploads/2017/10/lamborghini_egoista_concept_car-1920x1200.jpg",
       descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 8,
        car: "Isuzu",
        car_model: "Ascender",
        car_color: "Teal",
        car_model_year: 2004,
        car_vin: "5GTMNGEE8A8713093",
        price: "$1081.40",
        availability: "Available",
        image:
          " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 9,
        car: "BMW",
        car_model: "6 Series",
        car_color: "Purple",
        car_model_year: 2008,
        car_vin: "5TDBY5G16DS675822",
        price: "$1258.99",
        availability: "Available",
        image:
          " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 10,
        car: "Mitsubishi",
        car_model: "GTO",
        car_color: "Purple",
        car_model_year: 1994,
        car_vin: "JM1NC2PFXE0140518",
        price: "$3822.92",
        availability: "Available",
        image:
          " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 11,
        car: "Mazda",
        car_model: "Mazda5",
        car_color: "Red",
        car_model_year: 2010,
        car_vin: "WAUNE78P18A342660",
        price: "$3963.20",
        availability: "Available",
        image:
        " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 12,
        car: "Audi",
        car_model: "Q7",
        car_color: "Pink",
        car_model_year: 2012,
        car_vin: "WA1WYBFE2AD448505",
        price: "$1144.27",
        availability: "Available",
        image:
          " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 13,
        car: "Mercedes-Benz",
        car_model: "SL-Class",
        car_color: "Aquamarine",
        car_model_year: 1989,
        car_vin: "4A4AP3AU8FE713946",
        price: "$1386.49",
        availability: "Available",
        image:
        " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
     descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 14,
        car: "Volvo",
        car_model: "C70",
        car_color: "Red",
        car_model_year: 2012,
        car_vin: "WAUHGBFC9DN768366",
        price: "$1366.96",
        availability: "Available",
        image:
          " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
        descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 15,
        car: "GMC",
        car_model: "Envoy XL",
        car_color: "Green",
        car_model_year: 2006,
        car_vin: "WA1AV74L67D649365",
        price: "$1221.46",
        availability: "Available",
  
        image:
        " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
     descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
      {
        id: 16,
        car: "GMC",
        car_model: "Vandura G3500",
        car_color: "Teal",
        car_model_year: 1996,
        car_vin: "1FMJK2A5XAE576485",
        price: "$1877.63",
        availability: "available",
        image:
        " https://i.pinimg.com/736x/d3/27/bd/d327bdb6a255c2cc2c9b0a1780cf35ba.jpg", 
     descriptions:
          "A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.",
      },
  ]);

  // let getData = () => {
  //   axios
  //     .get("https://myfakeapi.com/api/cars")
  //     .then((res) => {
  //       setCardList(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       setLoader(false);
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(true);
  //   }, 2000);
  //   getData();
  // }, []);

  let render = (i) => {
    navigate(`/Carddetail/${i + 1}`);
  };

  return (
    <div>
      <SmHeader title="Home Screen" />
      <Container>
        <div className="row">
          {cardList.map((e, i) => {
            return (
              <div onClick={() => render(i)} className="cur my-2 col-md-4">
                <SmCard
                  key={i}
                  car={e.car}
                  carModel={e.car_model}
                  price={e.price}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Home;
