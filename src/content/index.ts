import './style.scss';
import {Example} from './example';
import {tryNTimes} from './promise-repeater';

new Example().printLog();

tryNTimes(() => {
	const name = 'article';
	const element = document.getElementsByTagName(name)[0];
	if (!element) {
		throw new Error(`Element <${name}> not found`);
	}
	return element;
}).then(element => console.log('Found <article> element', element));
