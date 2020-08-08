import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from '@components/Header';
import { container, mobieContainer, moblileView, mainParent, mobileBtn, flexClass, flexDirectionColumn, borderClass, addText, addDragIcon, alreadyAddedElements, addedElem, bottomBtns } from './style.js'
import EditBar from './components/EditBar'
import Button from '@components/Button';
import { uploadImg } from '@js/helpers.js';
import Coachmark from '@components/Coachmark';

const DragableElements = ({data, saveData})=>{ 
	const { id } = data;
	const [input, setInput] = useState(data.value||'');
	const mobileCont = document.getElementById('mobileViewDemo');
	useEffect(()=>{
		const element = document.getElementById(id);
		element.style.left='40px';
		element.style.top='40px';

	},[])

	useEffect(()=>{
		setInput(data.value);
	},[data.value])

	const mouseDown = useCallback((event)=>{
		const element = document.getElementById(id);
		element.style.zIndex = 1000;
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
				<p contentEditable className={addText} style={{color: data.color||'#000', fontSize: `${data.fontSize?data.fontSize:16}px`, fontWeight: data.fontWeight||500}} id={id} onMouseOver={focusIn} onMouseOut={focusOut} onMouseDown={mouseDown} onChange={()=> saveData(id, e)} onBlur={focusOut} onChange={(e)=>setInput(e.target.value)}>
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
const CreateStory = ({history})=>{

	const [storyData, setStoryData] = useState({});
	const [activePage, setActivePage] = useState('');
	const [selectedLayout, setLayout] = useState(1);
	const [allFields, addFields] = useState({});
	const [editTextField, setEditTextField] = useState(null);

	const createUUID = useCallback((uid_string)=>{
	    var dt = new Date().getTime();
	    var uuid = uid_string.replace(/[xy]/g, function (c) {
	        var r = (dt + Math.random() * 16) % 16 | 0;
	        dt = Math.floor(dt / 16);
	        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	    });
	    return uuid;
	},[])

	useEffect(()=>{
		let newPage = createUUID('fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
		setActivePage(newPage);
		const newFields = {...allFields};
		newFields[newPage] =  { layoutType: 'fill', page_id: newPage, dataElem:[] }; 
		addFields(newFields);

		// setTimeout(()=>{
		// 	setCoachmark(true);
		// },2000)
	},[])

	const getSelectedLayout = useCallback((val)=>{
		setLayout(val);
		const mobileContainer = document.getElementById('mobileViewDemo');
		let layout = document.createElement("div");
		let uid_string = createUUID('fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
		layout.id = uid_string;
		layout.className = mainParent;
		let newPage = createUUID('fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
		let layoutType = '';

		if(val===1){
			layoutType ='fill';
		}else if(val===2){
			layoutType="double";
			layout.className+= ` ${flexDirectionColumn}`;
			appendChild(layout);
			appendChild(layout);
		}else if(val===3){
			layoutType="thirds";
			layout.className+= ` ${flexDirectionColumn}`;
			appendChild(layout);
			appendChild(layout);
			appendChild(layout);
		}
		setActivePage(newPage);
		addFields(prevState=> ({ layoutType, page_id: newPage, dataElem:[] }) ) ;
		mobileContainer.style.backgroundColor=""
		mobileContainer.innerHTML=""
		mobileContainer.appendChild(layout);

	},[activePage])

	const appendChild = useCallback((parent)=>{
		let layout = document.createElement("div");
		layout.className = flexClass;
		layout.className+= ` ${borderClass}`;
		parent.appendChild(layout)
	},[])

	const addElements = useCallback((data, editField=false)=>{
		let uid_string = createUUID('fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
		const newDataElem = {...allFields};
		
		if(data.tag ==="p" && editField){
			//Edit Text field
			newDataElem[activePage].dataElem = newDataElem[activePage].dataElem.filter(x=>x.id!=data.id);
			newDataElem[activePage].dataElem.push({...data});
		}else{
			newDataElem[activePage].dataElem.push({id: uid_string, ...data})
		}

		if(data.tag==='img'){
			let img = document.createElement('img');
			img.src= data.src;
			img.id = uid_string;
			if(!data.isIcon){
				img.style.height = '100%';
				img.style.width = '100%';
				img.style.borderRadius = '20px 20px 0px 0px';
				img.style.pointerEvents = 'none';
				img.style.zIndex = 100;
				img.style.position = 'absolute';
				document.getElementById('mobileViewDemo').appendChild(img);
			}
		}
		addFields(newDataElem);
	},[allFields, activePage])

	const removeElements = useCallback((id, tag)=>{
		const newDataElem = {...allFields};
		newDataElem[activePage].dataElem = newDataElem[activePage].dataElem.filter(x=>x.id !==id);
		addFields(newDataElem);
		const newStoryData = {...storyData};
		if(newStoryData && newStoryData['preview'] && newStoryData['preview'][activePage] && newStoryData['preview'][activePage].dataElem){
			newStoryData['preview'][activePage].dataElem = newStoryData['preview'][activePage].dataElem.filter(x=>x.id!==id);
		}
		setStoryData(newStoryData);
		if(tag){
			removeChild(document.getElementById(id));
		}
	},[allFields, storyData])

	const removeChild = useCallback((child)=>{
		document.getElementById('mobileViewDemo').removeChild(child);
	})

	const saveData = useCallback((id, data)=>{
		let newData = {...allFields};
		let newDataElem = newData[activePage].dataElem.map((field)=>{
			if(data.id===id){
				return {...data}
			}
			return field;
		})
		newData[activePage]['dataElem'] = newDataElem;
		addFields(allFieldData);
	},[allFields, activePage])

	const savePage = useCallback(()=>{
		let newStoryData = {...storyData};
		const newAllFields = {...allFields}; 
		const mobileContainer = document.getElementById('mobileViewDemo');
		const imgData = [];
		if(!newStoryData.story_id){
			newStoryData['story_id'] = createUUID('fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
		}	
		newStoryData['preview']= newStoryData['preview'] || {};

		if(newAllFields && newAllFields[activePage] &&  newAllFields[activePage].dataElem){
			newAllFields[activePage].dataElem = newAllFields[activePage].dataElem.map((x)=>{
				let element = document.getElementById(x.id);
				if(x.tag=='p'){
					return{
						left: ((parseInt(element.style.left)+4)/mobileContainer.clientWidth)*100,
						top: ((parseInt(element.style.top)+4)/mobileContainer.clientHeight)*100,
						value: element.innerText,
						fontSize: element.style.fontSize,
						fontWeight: element.style.fontWeight,
						tag: 'p',
						id: x.id,
						color: element.style.color
					}
				}else{
					// imgData.push({id: x.id, fileInfo: x.fileInfo});
					// return x;
					return{
						...x,
						left: ((parseInt(element.style.left)+4)/mobileContainer.clientWidth)*100,
						top: ((parseInt(element.style.top)+4)/mobileContainer.clientHeight)*100,
						tag: 'img',
						id: x.id,
						src: x.src
					}
				}
			})
		}
		console.log(newAllFields);
		uploadImg(imgData);
		newStoryData['preview'] = newAllFields;
		setStoryData(newStoryData);
		let jsonData = JSON.stringify(newStoryData);
		try{
			document.cookie = "dataElem="+jsonData;
			document.cookie = "dataSaved=true";
		}catch(e){
			console.log(e);
		}
		
	},[storyData, activePage, allFields])

	const addNewPage = useCallback(()=>{
		//savePage();
		const node = document.getElementById('mobileViewDemo');
		node.dangerouslySetInnerHTML = {_html: ""};
		//node.querySelectorAll('*').forEach(n => n.remove());
		let newPage = createUUID('fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
		const newFields = {...allFields};
		newFields[newPage] =  { layoutType: 'fill', page_id: newPage, dataElem:[] }; 
		addFields(newFields) ;
		setActivePage(newPage);
	},[savePage, allFields]);

	const editTextFieldValue = useCallback((elem)=>{
		setEditTextField(elem);
	},[])

	const highlightElement = useCallback((e)=>{
		if(e.currentTarget.dataset.id){
			document.getElementById(e.currentTarget.dataset.id).style.border="8px solid green";
		}
	},[])

	const removeHighlight = useCallback((e)=>{
		console.log('remove highlight', e.currentTarget.dataset.id)
		if(e.currentTarget.dataset.id){
			document.getElementById(e.currentTarget.dataset.id).style.border="0px";
		}
	},[])

	const showStory = useCallback(()=>{
		history.push('/amp/story');
	},[])

	const showPreview = useCallback(()=>{
		history.push('/amp/story');
	},[])

	const reset = useCallback(()=>{

	},[])

	console.log(allFields);
	console.log(storyData);
	console.log(editTextField);

	const [showCoachmark, setCoachmark] = useState(false);
	const isClient = typeof(window)==="object";

	const handleCloseCoachmark = useCallback(()=>{
		setCoachmark(false);
	},[])

	const coachmarkList = [
		{
			target: isClient?document.getElementById('editBar'):'',
			heading: 'Edit Bar',
			text: 'Edit bar to add elements and to edit already added elements.You can add Images, Text field, Buttons'
		},
		{
			target: isClient?document.getElementById('mobileViewDemo'):'',
			heading: 'Mobile View',
			text: 'Mobile simulator where your added elements will be visible'
		},
		{
			target: isClient?document.getElementById('addedElementsList'):'',
			heading: 'Added Elements',
			text: 'Here you can see your all added elements, you can Edit and Remove them'
		},
		{
			target: isClient?document.getElementById('bottomBtns'):'',
			heading: 'Add Action',
			text: 'From here you can add multiple pages in your story, Save it and can see the preview of your story.'
		}
	];
	return(
			<div className={container}>
				{
					showCoachmark?
					<Coachmark coachmarkList={coachmarkList} handleClose={handleCloseCoachmark} />
					:''	
				}
				<EditBar selectedLayout={selectedLayout} setLayout= {getSelectedLayout} addFields={addElements} editTextField={editTextField}/>
				<div className={mobieContainer}>
					<div className={`${moblileView}`} id="mobileViewDemo">
						{
							allFields && allFields[activePage] && allFields[activePage].dataElem.filter(x=>x.isDragable).map((elem, key)=>{
								return <DragableElements key={key} data={elem} saveData={saveData}/>
							})
						}
					</div>
					<div className={mobileBtn}>

					</div>
					<div id="bottomBtns" className={bottomBtns}>
						<div className="row">
							<Button styleProps={{padding: 12, margin: 12, color: 'green', fontColor:'#FFF'}} disable={false} clickHandler={showPreview}>
								Preview
							</Button>
							<Button styleProps={{padding: 12, margin: 12, color: 'green', fontColor:'#FFF'}} disable={false} clickHandler={reset}>
								RESET
							</Button>
						</div>
						<div className="row">
							<Button styleProps={{padding: 12, margin: 12, color: 'green', fontColor:'#FFF'}} disable={false} clickHandler={addNewPage}>
								Add new Page
							</Button>
							<Button styleProps={{padding: 12, margin: 12, color: 'green', fontColor:'#FFF'}} disable={false} clickHandler={savePage}>
								Save Changes
							</Button>
						</div>
					</div>
				</div>
				<div id="addedElementsList"  className={alreadyAddedElements}>
					<div className="container">
						<p className="mainHead">Added Elements</p>
						{
							allFields && allFields[activePage] && allFields[activePage].dataElem.map((elem, key)=>{
							return	<div key={key} className={addedElem} >
										<p>{elem.tag==='p'?'Text Field':'Image Name'}</p>
										<p onMouseOver={highlightElement} onMouseOut={removeHighlight} data-id={elem.id}>{elem.value}</p>
										<div className="addedButtons">
											{
												elem.tag==='p'?
												<Button styleProps={{padding: 16, margin: 4, color: '#8989ea', fontColor:'#FFF'}} disable={false} clickHandler={()=>editTextFieldValue(elem)}>
													Edit
												</Button>
												:''
											}
											<Button styleProps={{padding: 16, margin: 4, color: '#8989ea', fontColor:'#FFF'}} disable={false} clickHandler={()=>removeElements(elem.id, elem.tag && !elem.isDragable)}>
												Remove
											</Button>
										</div>
									</div>
							})
						}
						{
							showCoachmark?
							<React.Fragment>
								<div className={addedElem} >
									<p>Text Field</p>
									<p data-id="hello_world">Hello World</p>
									<div className="addedButtons">
										<Button styleProps={{padding: 16, margin: 4, color: '#8989ea', fontColor:'#FFF'}} disable={false}>
											Edit
										</Button>
											<Button styleProps={{padding: 16, margin: 4, color: '#8989ea', fontColor:'#FFF'}} disable={false}>
											Remove
										</Button>
									</div>
								</div>
								<div className={addedElem} >
									<p>Image Name</p>
									<p data-id="coachmark_img">Nature.png</p>
									<div className="addedButtons">
										<Button styleProps={{padding: 16, margin: 4, color: '#8989ea', fontColor:'#FFF'}} disable={false}>
											Edit
										</Button>
										<Button styleProps={{padding: 16, margin: 4, color: '#8989ea', fontColor:'#FFF'}} disable={false}>
											Remove
										</Button>
									</div>
								</div>
							</React.Fragment>
							:null
						}
					</div>
				</div>
			</div>
		)
}

export default CreateStory;