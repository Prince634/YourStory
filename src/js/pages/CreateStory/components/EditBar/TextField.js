import React, { useState, useEffect, useCallback } from 'react';
import { Button, padding  } from './style.js';

const TextField = ({addFields, editTextField})=>{

	const [input, setInput] = useState('');
	const [fontSize, setFontSize] = useState('');
	const [fontWeight, setFontWeight] = useState('');
	const [color, setColor] = useState('');
	const [error, setError] = useState(null);

	useEffect(()=>{
		if(editTextField){
			setInput(editTextField.value);
			setFontWeight(editTextField.fontWeight);
			setFontSize(editTextField.fontSize);
			setColor(editTextField.color);
		}
	},[editTextField])

	const add = useCallback(()=>{

		if(!input){
			setError(true);
			return;
		}
		const dataFormat = {
			tag: 'p',
			fontSize,
			fontWeight,
			color,
			value:input,
			src:'',
			isDragable: true
		}
		if(editTextField && editTextField.id){
			dataFormat['id'] = editTextField.id;
		}
		addFields(dataFormat, editTextField && editTextField.id)
		setInput('');
		setFontSize('');
		setFontWeight('');
		setColor('');

	},[input, fontSize, fontWeight, color, addFields])

	return (

		<React.Fragment>
			<div className="options">
				<input onFocus={()=>setError(false)} type="text"className={error?"inputError":''} placeholder="Enter Text" value={input} onChange={(e)=>setInput(e.target.value)}/>
			</div>
			<div className="options">
				<label>Font Color</label>
				<input type="color" onChange={(e)=>setColor(e.target.value)} value={color} placeholder="Color Name"/>				
			</div>
			<div className="options">
				<label className={padding({padding: '0px 18px 0px 0px'})} >Font Size</label>
				<select placeholder="Font Size" onChange={(e)=>setFontSize(e.target.value)} value={fontSize}>
					<option>12</option>
					<option>14</option>
					<option>16</option>
					<option>18</option>
					<option>20</option>
					<option>22</option>
					<option>24</option>
					<option>26</option>
					<option>28</option>
					<option>30</option>
					<option>32</option>
					<option>34</option>
					<option>36</option>
				</select>
			</div>
			<div className="options">
				<label>Font Weight</label>
				<select placeholder="Font Size" onChange={(e)=>setFontWeight(e.target.value)} value={fontWeight}>
					<option>500</option>
					<option>600</option>
					<option>700</option>
					<option>800</option>
					<option>900</option>
					<option>1000</option>
				</select>
			</div>
			<span className={Button} onClick={add}>Add</span>
		</React.Fragment>
		)
}

export default TextField;