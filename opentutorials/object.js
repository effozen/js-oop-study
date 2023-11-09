// Lim, Jaedo a.k.a. OAO
// 09NOV2023 Thursday

let memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[1]", memberArray[1]);

let memberObject = {
	manager: 'egoing',
	developer: 'graphittie',
	designer: 'leezhce'
}
console.log("memberObject.designer", memberObject.designer);

memberObject.desinger = 'heyman';
console.log("memberObject.designer", memberObject.designer);

delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);
