import HowCanWeHelp from "./HowCanWeHelp";
import vaastu from "./media/vaastu.png";
import astrology from "./media/astrology.png";
import numerology from "./media/numerology.png";
function MainBody() {
  return (
    <>
      <section className="bodySection">
        <div className="videoHolder">
          <iframe
            title="placeholder video"
            width="40%"
            height="600px"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>

        <div className="services">
          <div className="serviceSign">
            <img src={astrology} alt="astrology symbol" />
            <p>Astrology</p>
          </div>

          <div className="serviceSign">
            <img src={numerology} alt="numerology symbol" />
            <p>Numerology</p>
          </div>

          <div className="serviceSign">
            <img src={vaastu} alt="vaastu symbol" />
            <p>Vaastu</p>
          </div>
        </div>
      </section>
      <section>
        <HowCanWeHelp />
      </section>
    </>
  );
}
export default MainBody;
