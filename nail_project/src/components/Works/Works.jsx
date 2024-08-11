import React from 'react';
import './Works.scss';
import Flickity from 'react-flickity-component';
import nail1 from '../../images/nailimg/nail1.jpg';
import nail2 from '../../images/nailimg/nail2.jpg';
import nail3 from '../../images/nailimg/nail3.jpg';
import nail4 from '../../images/nailimg/nail4.jpg';
import nail5 from '../../images/nailimg/nail5.jpg';

const flickityOptions = {
  initialIndex: 2,
  // Додайте інші опції, якщо потрібно
};

const nails = {
  id: [1, 2, 3, 4, 5],
  image: [nail1, nail2, nail3, nail4, nail5],
};

function Works() {
  return (
    <div id="works">
      <Flickity
        className="Slider"
        elementType="div"
        options={flickityOptions}
        reloadOnUpdate
      >
        {nails.id.map((index) => (
          <div key={index} className="Plate">
            <div
              style={{
                backgroundImage: `url(${nails.image[index - 1]})`,
                width: '100%',
                height: 600,
                backgroundSize: 'cover',
              }}
            />
          </div>
        ))}
      </Flickity>
    </div>
  );
}

export default Works;
