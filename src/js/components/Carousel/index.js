import React, { useState, useCallback } from 'react';
import { carousel,  carouselImages } from './style.js';
import Img4 from '@assets/img2.jpeg';

const Carousel = ({toggleCarousel, showCarousel})=>{

	const scrollHandler = useCallback((e)=>{
		const scrollElement = document.getElementById('carousel');
		const scrollWidth = scrollElement.scrollWidth;
		const scrollLeft = scrollElement.scrollLeft;
		const elementWidth = document.getElementById('carousel').childNodes[0].clientWidth + 24;
		let imgCount = scrollLeft/elementWidth;
		let carryPoint = imgCount - parseInt(imgCount);
		if(carryPoint>=0.5){
			imgCount = Math.ceil(imgCount)+1;
		}else{
			imgCount = Math.ceil(imgCount);
		}
		if(imgCount==0){
			imgCount=1;
		}
		const activeElement = document.querySelector('#carousel .active');
		const imagesCarousel = document.querySelectorAll('#carousel img')
		if(activeElement){
			if(activeElement.classList.contains(imgCount.toString())){

			}else{
				activeElement.classList.remove('active');
				imagesCarousel[imgCount-1].classList.add('active');
			}
		}
	},[])	

	return(
		<>
			{
				showCarousel?
				<div className={``}>
					<span onClick={toggleCarousel}></span>
					<div className={carouselImages} id="carousel" onScroll={scrollHandler}>
						<img className="1 active" id="1" src={Img4}/>
						<img className="2" id="2" src={Img4}/>
						<img className="3"  id="3" src={Img4}/>
						<img className="4"  id="4" src={Img4}/>
					</div>
				</div>
				:''
			}
		</>
		)
}

export default Carousel;