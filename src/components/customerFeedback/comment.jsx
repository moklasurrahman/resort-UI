import { datas } from "../../data";
import './comment.scss'




import {useEffect, useState, useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




let slidesToShow = 1;
const Comment = () => {


  const sliderRef = useRef(null);


  const carouselProperties = {
    dots: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "320px",
    // speed: 500,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // const [width, setWidth] = useState(window.innerWidth);
  // const updateWidth = () => {
  //   setWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', updateWidth);
  //   return () => window.removeEventListener('resize', updateWidth);
  // }, []);

  // if (width <= 426) {
  //   slidesToShow = 1;
  // } else if (width > 426 && width <= 769) {
  //   slidesToShow = 2;
  // } else if (width > 769 && width <= 1025) {
  //   slidesToShow = 3;
  // } else {
  //   slidesToShow = 3;
  // }


    return(
        <section className="commentcarousel">
           
                <Slider  ref ={sliderRef} {...carouselProperties}>
      
                    {
                       datas?.map((item)=>{
                        return(
                          <div className='commentCard' key={item.id}>
                            <p>{item.desc}</p>
                            
                            <div className="profile">
                              <div className="profileItem">
                                <img src={item.imgScr} alt="" />
                              
                              <div className="text">
                                <h3>Moklasur</h3>
                                <span>ceo world</span>
                              </div>
                            </div>
                          </div>
                        </div> 
                        )
                   })}
                </Slider>
        </section>
    )
}

export default Comment