import "../App.css";
import "../heroimage.css";

export default function HeroImg() {
  return (
    <div style={{height: "32rem"}} className="container flex justify-center mx-auto bg-[image:var(--hero-image)] w-full bg-cover bg-center p-40 mb-16">
      <div className="flex flex-col items-center justify-center">
        <h1 style={{fontSize: "80px", color: "#DBC7C3"}} className="font-medium text-center text-white margin-mobile">
          WHO WE ARE
        </h1>
      </div>
    </div>
  );
}
