import React from "react";
import ArduinoPro from "../../assets/ArduinoPro.jpg";
import ArduinoEducation from "../../assets/ArduinoEducation.jpg";
export default function ArduinoHardware() {
  return (
    <div className="arduino-hardware-section">
      <h1>Arduino Hardware</h1>
      <p>
        Arduino has over the years released over 100 hardware products: boards,
        shields, carriers, kits and other accessories. In this page, you will
        find an overview of all active Arduino hardware, including the Nano, MKR
        and Classic families.
      </p>
      <hr />
      <a className="arduino-pro-img" href="https://www.arduino.cc/pro/hardware">
        <img src={ArduinoPro} alt="" />
      </a>
      <hr />
      <a
        className="educational-kits-img"
        href="https://www.arduino.cc/education"
      >
        <img src={ArduinoEducation} alt="" />
      </a>
      <hr />
    </div>
  );
}
