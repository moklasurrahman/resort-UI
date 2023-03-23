import { useEffect, useState, useRef } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";


import './carousel.scss'
import img from '../../assets/mainimh4.jpg'
import { datas } from './../../data';
import Card from './../card/Card';


import { ButtonBase } from "@material-ui/core";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


let slidesToShow = 3;
const Carousels = () => {


  const sliderRef = useRef(null);


  const carouselProperties = {
    dots: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: false,
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
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerMode: false,
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
        <section className="carousel">
            <div className="overlay"></div>
              <img className='backImg' src={img} alt="" />
            
            <div className="CarouselItems">
                <div className="title">
                    <h1>find your popular packages</h1>
                    
                    <div className="icons">
                    
                    <ButtonBase onClick={() => sliderRef.current.slickPrev()}>
                    <EastOutlinedIcon className="icon" />
                    </ButtonBase>
                  
                    <ButtonBase  onClick={() => sliderRef.current.slickNext()}>
                    <WestOutlinedIcon className="icon" />
                    </ButtonBase>
                    </div>


                </div>

                <div className="carouselCard"> 

                <Slider  ref ={sliderRef} {...carouselProperties}>
      
                    {
                       datas?.map((item)=>{
                        return(
                           <Card item={item} key={item.id}/>
                        )
                   })}
                </Slider>
                </div>

                   <div className="btnDiv">
                    <button>view all packages</button>
                   </div>

            </div>
        </section>
    )
}

export default Carousels

