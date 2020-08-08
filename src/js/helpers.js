export const uploadImg = (data)=>{
	let allPromises = [];
	data.forEach((file)=>{
		allPromises.push(getArrayBuffer(file));
	});
	Promise.all(allPromises).then((resp)=>{
		let body = {id: '2', name:'prince'}
		body = JSON.stringify(body);
		return fetch('http://localhost:4006/uploadImg', {
			method: 'POST',
			body,
			headers:{
				'Content-Type': 'application/json'
			}
		}).then((response)=>{
			response.json().then((json)=>{
				console.log(json);
				return json;
			}).catch((e)=>{
				console.log('error in parsing', e);
			})
		})
	});
}

export const getList = (data)=>{
	return fetch('http://localhost:4006/getList').then((resp)=>{
		resp.json().then((json)=>{
			console.log(json);
			return json;
		}).catch((e)=>{
			console.log('error in parsing', e);
		})
	})
}

const getArrayBuffer = (file, cb)=>{

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
}
