import React, { useState, useCallback } from 'react';
import Header from '@components/Header';
import { container, Button, layoutList, addBtn, editItem, items, editItemView, transitionClass, addText, padding, overlay, layout1, layout2, layout_view } from './style.js';
import TextField from './TextField.js';
import AddImage from '@components/UploadImage'

const CreateStory = ({selectedLayout, setLayout, addFields, editTextField})=>{

	const [itemOpen, setItemToggle] = useState({"2": true, "3": true, "4": true, "5": true});
	const clickEditItem = useCallback((id)=>{
		let toggleItem = {...itemOpen};
		if(toggleItem[id]){
			delete toggleItem[id]
		}else {
			toggleItem[id]=true;
		}
		setItemToggle(toggleItem);
	},[itemOpen]);

	const selectLayout = useCallback((val)=>{
		setLayout(val);
	},[])

	const getImage = useCallback((data)=>{
		console.log(data);
		addFields(data);
	},[addFields])

	return(
		<React.Fragment>
			<div className={container} id="editBar">
				<div className={items}>
					{/*<div className={editItem}>
						<div className="textArea" onClick={()=>clickEditITem('1')}>
							<p>Select Screen Layout</p>
							<span className={`menu ${itemOpen && itemOpen['1']?'':'active'}`}></span>
						</div>
						<div>
							<div className={`${editItemView} ${layoutList} ${itemOpen && itemOpen['1']?transitionClass({height: '360px'}):''}`}>
								<div className={`${selectedLayout===1?'selectedLayout':''} ${layout1} ${layout_view}`}>
									<span className={`${addBtn} btn`} onClick={()=>selectLayout(1)}>{`${selectedLayout===1?'Selected':'Add'} Layout`}</span>
								</div>

								<div className={`${selectedLayout===2?'selectedLayout':''} ${layout2} ${layout_view}`}>
									<div className={`${addBtn} btn`} onClick={()=>selectLayout(2)}>{`${selectedLayout===2?'Selected':'Add'} Layout`}</div>
									<span></span>
									<span></span>
								</div>

								<div className={`${selectedLayout===3?'selectedLayout':''} ${layout2} ${layout_view}`}>
									<div className={`${addBtn} btn`} onClick={()=>selectLayout(3)}>{`${selectedLayout===3?'Selected':'Add'} Layout`}</div>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
							
						</div>
					</div>*/}

					<div className={editItem}>
						<div className="textArea" onClick={()=>clickEditItem('2')}>
							<p>Add Text</p>
							<span className={`menu ${itemOpen && itemOpen['2']?'':'active'}`}></span>
						</div>
						<div className={`${addText} ${itemOpen && itemOpen['2']?transitionClass({height: '260px'}):''}`}>
							<TextField addFields={addFields} editTextField={editTextField}/>
						</div>
					</div>

					<div className={editItem} >
						<div className="textArea" onClick={()=>clickEditItem('3')}>
							<p>Select Background Color</p>
							<span className={`menu ${itemOpen && itemOpen['3']?'':'active'}`}></span>
						</div>
						<div className={`${addText} ${itemOpen && itemOpen['3']?transitionClass({height: '80px'}):''}`}>
						{
							itemOpen && itemOpen['3']?	
							<input type="color" onChange={(e)=>addFields({value:e.target.value, bgColor: true})}/>
							:''
						}
						</div>
					</div>
					<div className={editItem}>
						<div className="textArea" onClick={()=>clickEditItem('4')}>
							<p>Add Icons</p>
							<span className={`menu ${itemOpen && itemOpen['4']?'':'active'}`}></span>
						</div>
						<div className={`${addText} ${itemOpen && itemOpen['4']?transitionClass({height: '80px'}):''}`}>
							{itemOpen && itemOpen['4']?<AddImage addImage={true} addIcons={true} onAdd={getImage} demo="111"/>:''}
						</div>
					</div>
					<div className={editItem}>
						<div className="textArea" onClick={()=>clickEditItem('5')}>
							<p>Add Image</p>
							<span className={`menu ${itemOpen && itemOpen['5']?'':'active'}`}></span>
						</div>
						<div className={`${addText} ${itemOpen && itemOpen['5']?transitionClass({height: '80px'}):''}`}>
							{
								itemOpen && itemOpen['5']?<AddImage addImage={true} addIcons={false} onAdd={getImage} demo="222"/>:''
							}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
		)
}

export default CreateStory;