import "../mission.css";
import missionImg from "../images/secondaryBg.svg";

export default function Mission() {
  return (
    <div className="container flex justify-center mx-auto mission bg-center mx-auto bg-gray-100">
      <img
        className="header-class xl:w-1/2 lg:w-1/2 max-w-full h-auto"
        src={missionImg}
        alt="Mission Image"
      />
      <div className="p-8 px-16 xl:w-1/2 lg:w-1/2">
        <h1 className="header-class text-center lg:text-6xl xl:text-7xl md:text-5xl sm:text-4xl
        xs:text-3xl max-w-full h-auto lg:mt-10 xl:mt-10 sm:mt-4 md:md-7">
          Our Mission
        </h1>
        <p className="sm:mt-4 lg:mt-10 xl:mt-10 mx-4 text-center max-w-full h-auto lg:text-xl xl:text-xl md:text-base sm:text-sm">
          To level the playing field for women at work and to help companies
          that care™ build a diverse talent pipeline for the workforce of today
          and tomorrow.
        </p>
        <p className="sm:mt-4 mx-3 lg:mt-10 xl:mt-10 text-center max-w-full h-auto lg:text-xl xl:text-xl md:text-base sm:text-sm">
          We envision a society that values the success of business by what it
          contributes to the world.
        </p>
      </div>
    </div>
  );
}
