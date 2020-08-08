import React, { useState, useCallback, useEffect } from 'react';
import Card from '@components/Card';
import Button from '@components/Button'
import UploadImg from '@components/UploadImage';
import Img1 from '@assets/img1.jpeg';
import { container, rowList } from './style.js';
import Carousel from '@components/Carousel';
import Overlay from '@components/Overlay';
const HomePage = ({history})=>{
	
	const [showOverlay, toggleOverlay] = useState(false);

	const clicked = useCallback(()=>{
		history.push('/list');
	},[]);

	const navigateToStory = useCallback(()=>{
		history.push('/createMyStory')
	},[])

	return(
		<React.Fragment>
			<div className={container}>
				<div className={rowList}>
					<Card styleProps={{height: 70, width: 200, }}>
						<Button styleProps={{padding: 12, margin: 12, color: 'green'}} clickHandler={navigateToStory}>
							Create Story
						</Button>
					</Card>
				</div>	
				<Carousel showCarousel={true}/>
				<Button styleProps={{padding: 12, margin: 12, color: 'green'}} clickHandler={()=>toggleOverlay(overlay=> !overlay)}>
					Open Overlay
				</Button>
				<Overlay showOverlay={showOverlay}>
					<Button styleProps={{padding: 12, margin: 12, color: 'green'}} clickHandler={()=>toggleOverlay(overlay=> !overlay)}>
						Close Overlay
					</Button>
				</Overlay>
			</div>
		</React.Fragment>
		)

}

export default HomePage;