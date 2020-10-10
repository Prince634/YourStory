import React, { useState, useCallback, useEffect } from 'react';
import Card from '@components/Card';
import Button from '@components/Button'
import UploadImg from '@components/UploadImage';
import Img1 from '@assets/img1.jpeg';
import { container, rowList } from './style.js';
import Carousel from '@components/Carousel';
import Overlay from '@components/Overlay';
import DatePicker from '@components/DatePicker';
import dayjs from 'dayjs';

const HomePage = ({history})=>{
	
	const [showOverlay, toggleOverlay] = useState(false);
	const [showDatePicker, toggleCalendar] = useState(false);
	const [dayMonthSelected, setDayMonth] = useState({
		startTime: dayjs().subtract(1, 'month'),
		endTime: dayjs(),
	});
	const [oldSelectedDates, setOldSelectedDates] = useState({
		startTime: dayMonthSelected.startTime,
		endTime: dayMonthSelected.endTime,
	});

	const clicked = useCallback(()=>{
		history.push('/list');
	},[]);

	const navigateToStory = useCallback(()=>{
		history.push('/createMyStory')
	},[])

	const selectTimeStatus = useCallback(val => {
		setTimeStatus(val);
		setFetchData(newVal => !newVal);
		toggleTimeStatus(false);
	  }, []);
	
	  const selectDate = useCallback(
		newDate => {
		  let startT = dayMonthSelected.startTime;
		  let endT = dayMonthSelected.endTime;
	
		  if (dayjs(newDate).diff(startT) < dayjs(endT).diff(newDate)) {
			startT = newDate;
		  } else {
			endT = newDate;
		  }
		  setDayMonth({ startTime: startT, endTime: endT });
		},
		[dayMonthSelected],
	  );
	
	  const applySelection = useCallback(() => {
		const newDates = { ...dayMonthSelected };
		setOldSelectedDates(newDates);
		setDatePickerDisplay(false);
		setStickyDatePicker(false);
		setFetchData(val => !val);
	  }, [dayMonthSelected]);
	
	  const cancelSelection = useCallback(() => {
		const newDates = { ...oldSelectedDates };
		setDayMonth(newDates);
		setDatePickerDisplay(false);
		setStickyDatePicker(false);
	  }, [oldSelectedDates]);

	  const click = ()=>{
	  	if(window && typeof window==="object"){
	  		console.log('a');
	  	}
	  }

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
				<Carousel showCarousel={true} />
				<Button styleProps={{padding: 12, margin: 12, color: 'green'}} clickHandler={()=>toggleOverlay(overlay=> !overlay)}>
					Open Overlay Plz
				</Button>
				<Overlay showOverlay={showOverlay}>
					<Button styleProps={{padding: 12, margin: 12, color: 'green'}} clickHandler={()=>toggleOverlay(overlay=> !overlay)}>
						Close Overlay
					</Button>
				</Overlay>
				<Button styleProps={{padding: 12, margin: 12, color: 'green'}} clickHandler={()=>toggleCalendar(overlay=> !overlay)}>
					Open Calendar
				</Button>
				{
					showDatePicker?
					<DatePicker dayMonthSelected={dayMonthSelected}
					onClose={() => setStickyDatePicker(false)}
					setDate={selectDate}
					applySelection={applySelection}
					cancelSelection={cancelSelection} abc={click()}/>
					:null
				}
			</div>
		</React.Fragment>
		)

}

export default HomePage;