import React from 'react';
import { Bounce, Fade } from 'react-reveal';
import Sticker from '../sticker';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './index.less';

export default ({ items, icon, title, description })=> {

  return(
    <div className="section-header-main-cont">
      <div className="section-header-icon-cont">
        <Bounce delay={250}>
          <Sticker src={icon} />
        </Bounce>
        <Bounce delay={300} bottom>
          <h2>{title}</h2>
        </Bounce>
      </div>
      <div className="section-header-carousel-cont">
        <Fade delay={800} bottom>
          <div dangerouslySetInnerHTML={{ __html: description }} />
{/*          <CarouselProvider
            naturalSlideWidth={100}
            //naturalSlideHeight={60}
            isIntrinsicHeight={true}
            totalSlides={items.length}
            visibleSlides={1}
            orientation="horizontal"
            isPlaying
          >
            <Slider>
              {
                items.map((item, index) => (
                  <Slide key={index * Date.now()} index={index}>
                    <p className="carousel-text">{item}</p>
                  </Slide>
                ))
              }
            </Slider>
          <div className="carousel-text-dots-container">
            {
              items.map((_,i) => <Dot className="carousel-text-dot" key={i} slide={i} />)
            }      
          </div>      
          </CarouselProvider>*/}
        </Fade>
      </div>
    </div>
  )
}