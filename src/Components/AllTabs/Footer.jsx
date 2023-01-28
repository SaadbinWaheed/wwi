import "../footer.css";
import footerLogo from "../images/footerLogo.png";

export default function Footer() {
  return (
    <footer className="footer max-w-12 p-2 mx-auto h-60 mx-2">
      <div className="container flex mx-auto items-center justify-between">
        <div className="footer__addr">
          <h1 className="footer__logo">
          <img style={{ width: "230px", height: "85px", margin: "0 -70px 0 0" }} src={footerLogo} />
          </h1>
        </div>

        <ul className="footer__nav">
          <li className="">
            <h2 className="lg:text-xl font-bold">Media</h2>

            <ul className="lg:text-sm ml-2 mt-2">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li className="">
            <h2 className="lg:text-xl font-bold">Technology</h2>

            <ul className="lg:text-sm ml-2 mt-2">
              <li>
                <a href="#">Hardware Design</a>
              </li>

              <li>
                <a href="#">Software Design</a>
              </li>

              <li>
                <a href="#">Digital Signage</a>
              </li>
            </ul>
          </li>

          <li className="">
            <h2 className="lg:text-xl font-bold">Legal</h2>

            <ul className="lg:text-sm ml-2 mt-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
