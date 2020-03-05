import getSpacePeople from './get-space-people.js';
const url = 'http://api.open-notify.org/astros.json';
exports.echo = () => {
getSpacePeople(url)
	.then(
		(data) => console.log(JSON.parse(data).people),
		(request) => console.log(request.status)
	);
	console.log('hello!!');
}