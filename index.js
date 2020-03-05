import getSpacePeople from './get-space-people';
const url = 'http://api.open-notify.org/astros.json';
 
getSpacePeople(url)
	.then(
		(data) => console.log(JSON.parse(data).people),
		(request) => console.log(request.status)
	);
