import { useSelector } from 'react-redux';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Portfolio = () => {
  const port = useSelector((state) => {
    console.log(state);
    return state;
  });
  return (
    <div className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper spaceBetween={5} slidesPerView={3} grabCursor={true} className="portfolio-slider">
        {port.portofolio.map((el) => {
          return (
            <SwiperSlide>
              <a href={el.url} target="blank" style={{ textDecoration: 'none' }}>
                <img src={el.img} alt="" />
                <div className="text-content">
                  <h3>{el.title}</h3>
                  <p>{el.tools}</p>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
