import nails from "../data/nails.js";
import Flickity from "react-flickity-component";
import "./Nails.scss";
import * as SC from "./Nails.styled.js";
import {  useTranslation } from "react-i18next";

const flickityOptions = {
  initialIndex: 2,
};

function Nails() {
  const{t} = useTranslation()
  return (
    <SC.Works className="container-works">
      <SC.Title className="container-works-title">
        <h1>{t('Works')}</h1>
      </SC.Title>
      <div>
        <Flickity
          className="Slider"
          elementType="div"
          disableImagesLoaded={false}
          options={flickityOptions}
          reloadOnUpdate
          static
        >
          {nails.map((nail, id) => {
            return (
              <div key={id} className="Plate">
                <>
                  <div
                    style={{
                      backgroundImage: `url(${nail.img})`,
                      width: "100%",
                      height: 600,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </>
              </div>
            );
          })}
        </Flickity>
      </div>
    </SC.Works>
  );
}

export default Nails;
