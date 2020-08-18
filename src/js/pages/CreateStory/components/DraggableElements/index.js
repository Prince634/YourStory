import React, { useState, useEffect, useCallback } from 'react';
import { addText, addDragIcon } from './style.js'

const DragableElements = ({data, saveData, showCarousel})=>{ 
	console.log(data);
	const { id } = data;
	const [input, setInput] = useState(data.value||'');
	const mobileCont = document.getElementById('mobileViewDemo');
	useEffect(()=>{
		const element = document.getElementById(id);
		element.style.left=data.left?data.left:'40px';
		element.style.top=data.top?data.top:'40px';

	},[])

	useEffect(()=>{
		setInput(data.value);
	},[data.value])

	const mouseDown = useCallback((event)=>{
		const element = document.getElementById(id);
		element.style.zIndex = 1;
		document.getElementById('mobileViewDemo').onmouseup = mouseUp;
		document.getElementById('mobileViewDemo').onmousemove = mouseMove;
	},[]);

	const moveAt= (pageX, pageY)=> {
		const element = document.getElementById(id);
	    element.style.left= pageX-mobileCont.offsetLeft+'px';
	    element.style.top= pageY-mobileCont.offsetTop+'px';
	}
	const mouseUp = ()=>{
		document.getElementById('mobileViewDemo').onmouseup = null;
		document.getElementById('mobileViewDemo').onmousemove = null;
	}

	const mouseMove = (event)=>{
	    moveAt(event.clientX, event.pageY);
	}

	const focusOut = ()=>{
		document.getElementById(id).style.border = '0px';
	}

	const focusIn = ()=>{
		document.getElementById(id).style.border = '2px solid black';
	}

	return(
		<React.Fragment>
			{
				data.tag==="p"?
				<p contentEditable className={addText({showCarousel})} style={{color: data.color||'#000', fontSize: `${data.fontSize?data.fontSize:16}px`, fontWeight: data.fontWeight||500}} id={id} onMouseOver={focusIn} onMouseOut={focusOut} onMouseDown={mouseDown} onChange={()=> saveData(id, e)} onBlur={focusOut} onChange={(e)=>setInput(e.target.value)}>
				{input}
				</p>
				:null
			}
			{
				data.tag==='img'?
				<img className={addDragIcon} src={data.src} id={id} onMouseOver={focusIn} onMouseOut={focusOut} onMouseDown={mouseDown}/>
				:null
			}

		</React.Fragment>
		)
}

export default DragableElements