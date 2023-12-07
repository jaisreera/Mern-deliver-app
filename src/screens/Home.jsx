import React from "react";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";
import Card from "../componets/Card";
import Carousel from "../componets/Carousel";

export default function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}
