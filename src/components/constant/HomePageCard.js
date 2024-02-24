import ArduinoAlvik from "../../assets/ArduinoAlvik.jpg";
import ArduinoKit from "../../assets/ArduinoKit.png";
import ArduinoOpenSource from "../../assets/ArduinoOpenSource.jpg";
import ArduinoClassic from "../../assets/ArduinoClassic.jpg";
import ArduinoOpta from "../../assets/ArduinoOpta.jpg"
import ArduinoPortenta from "../../assets/ArduinoPortenta.jpg"
import ArduinoSiliconLabs from "../../assets/ArduinoSiliconLabs.jpg"
import Arduinolot from "../../assets/ArduinoIot.png"
import ArduinoThreeBoards from "../../assets/ArduinoThreeBoards.jpg"
const HomePageCards = [
    { id: 0, url: ArduinoAlvik, type: "poster" },
    { id: 1, url: ArduinoKit, type: "poster" },
    {
        id: 5,
        url: ArduinoSiliconLabs,
        type: "blog",
        title: "Arduino and Silicon Labs team up to make the Matter protocol accessible to all"
    }
    ,
    {
        id: 6,
        url: ArduinoThreeBoards,
        type: "blog",
        title: "’Tis the season to get making!"

    },
    { id: 2, url: Arduinolot, type: "poster" },
    { id: 3, url: ArduinoOpta, type: "poster" },
    {
        id: 7,
        type: "blog",
        url: ArduinoOpenSource,
        title: "THE 2023 ARDUINO OPEN SOURCE REPORT IS OUT NOW",
    },
    {
        id: 8,
        type: "blog",
        url: ArduinoClassic,
        title: "YOUR CLASSIC ARDUINO IDE EXPERIENCE, NOW IN THE CLOUD",
    },
    { id: 4, url: ArduinoPortenta, type: "poster" }
];
export default HomePageCards;