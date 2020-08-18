import React , { useState, useCallback, useEffect } from 'react';
import { array, func } from 'prop-types';
import { container, body, coachmarkBox } from './style.js';

const Coachmark = ({coachmarkList, handleClose})=>{

	const[activeMark, setActiveMark] = useState(0);

	const setCoachmarkHighlighter = useCallback((target)=>{
		const { top, bottom, left, right, height, width } = target.getBoundingClientRect();
		const { width: bodyWidth, height: bodyHeight } = document.body.getBoundingClientRect();

		if(top<bodyHeight/3 && bottom<bodyHeight/2){
			document.getElementById('coachmarkBox').style.top = `${top+40}px`;
			document.getElementById('coachmarkBox').style.left = `${left + width/2}px`;
			document.getElementById('pointer').classList = 'pointer top';
		}else if(top>bodyHeight/2){
			document.getElementById('coachmarkBox').style.top = `${top-document.getElementById('coachmarkBox').clientHeight-40}px`;
			document.getElementById('coachmarkBox').style.left = `${left + width/2}px`;
			document.getElementById('pointer').classList = 'pointer bottom';
		}else if(left<bodyWidth/3 && (right<bodyWidth/2 || right+320<bodyWidth)){
			document.getElementById('coachmarkBox').style.top = `${top + width/2}px`;
			document.getElementById('coachmarkBox').style.left = `${width + left+ 20}px`;
			document.getElementById('pointer').classList= 'pointer left';
		}else {
			document.getElementById('coachmarkBox').style.top = `${top + width/2}px`;
			document.getElementById('coachmarkBox').style.left = `${left - 20- document.getElementById('coachmarkBox').clientWidth}px`;
			document.getElementById('pointer').classList = 'pointer right';
		}
		target.classList.add('coachmark-cls');

	},[])

	useEffect(()=>{
		setCoachmarkHighlighter(coachmarkList[0].target)		
	},[])

	const setNavigate = useCallback((prev=false)=>{
		const target = coachmarkList[activeMark].target;
		target.classList.remove('coachmark-cls');
		let newTarget = null;
		let newIndex = activeMark;
		if(prev){
			newIndex-=1;
			newTarget = coachmarkList[activeMark-1].target;
		}else{
			if(activeMark===coachmarkList.length-1){
				handleClose();
			}else{
				newIndex+=1;
				newTarget = coachmarkList[activeMark+1].target;
			}
		}
		setActiveMark(newIndex);
		if(newTarget){
			setCoachmarkHighlighter(newTarget);
		}
	},[activeMark, handleClose])

	return(
		<React.Fragment>
			<div className={container}>
				<div className={body}>
					<div id="coachmarkBox" className={coachmarkBox}>
						<span id="pointer" className="pointer"></span>
						<p className="heading">{coachmarkList[activeMark].heading}</p>
						<p className="text">{coachmarkList[activeMark].text}</p>
						<div className="buttons">
							{
								activeMark===0?'':<p className="prev" onClick={()=>setNavigate(true)}>Previous</p>
							}
							<p className="next" onClick={()=>setNavigate(false)}>{`${activeMark===coachmarkList.length-1?"Finish":"Next"}`}</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
		)
}

Coachmark.propTypes = {
	coachmarkList: array.isRequired,
	handleClose: func.isRequired
}
export default Coachmark;