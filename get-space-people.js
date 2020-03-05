export default function getSpacePeople(url) {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.addEventListener('load', (event) =>
			resolve(request.response)
		);
		request.addEventListener('error', (event) =>
			reject(request)
		);
		request.open('GET', url);
		request.send();	
	});
}
console.log('export:', getSpacePeople);