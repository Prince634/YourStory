import React, { useState, useCallback } from 'react';
import { uploadWidget, uploadBtn, previewItems } from './style.js'

const UploadImage = ({addImage, onAdd, addIcons, demo})=>{
	console.log(addIcons);
	const [uploadedImages, setFile] = useState([]);

	const uploadImage = useCallback((event)=>{
		const files = event.target.files;
		let reader = new FileReader();
		let imgUrl;

		reader.readAsDataURL(files[0]);

		reader.onload = function() {
			console.log(demo)
		  //setFile((uploadedImages)=> uploadedImages.concat({url:reader.result, fileInfo: files[0]} ))
		  onAdd({src:`http://localhost:4005/${files[0].name}`/*reader.result*fileInfo: files[0],*/ ,value: files[0].name, tag: 'img', isIcon: addIcons, isDragable: addIcons});
		};

	},[onAdd]);

	const getArrayBuffer = useCallback((file, cb)=>{

		return new Promise((resolve, reject)=>{
			let reader = new FileReader();
			reader.readAsArrayBuffer(file.fileInfo);
			reader.onload = function(){
				resolve(reader.result);
			}
			reader.onerror = function(){
				reject(reader.error);
			}
		})
	},[])

	const submitImage = useCallback(()=>{
		let allPromises = [];
		let arrayBuffer = [];
		uploadedImages.forEach((file)=>{
			allPromises.push(getArrayBuffer(file));
		});
		arrayBuffer = Promise.all(allPromises);
		console.log(arrayBuffer);
	},[uploadedImages])

	return(
			<div className={uploadWidget}>
				<div className={uploadBtn}>

					<label className="btn" for="upload">Upload Image
						<input id="upload" type="file" accept="image/*;capture=camera" style={{display: 'none'}} onChange={(e)=>uploadImage(e)} />
					</label>
					{
						addImage?'':<div onClick={submitImage}>Submit Image</div>
					}
				</div>
				{
					!addImage && uploadedImages.length?
					<div className={previewItems}>
					{
						uploadedImages.map((image)=>{
							return 	<img src={image.url} />
						})
					}
					</div>
					:''
				}
				
			</div>
		)
}

export default UploadImage;
