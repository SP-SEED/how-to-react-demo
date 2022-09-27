import React, { useState } from 'react';
import { useEffect } from 'react';

const UseStateComp = () => {
	const [click, setClick] = useState(0);

	useEffect(() => {
		welcomeUser();
	}, []);

	useEffect(() => {
		informRender();
	});

	useEffect(() => {
		informClicked(click);
	}, [click]);

	const welcomeUser = () => {
		alert(`Welcome`);
	};

	const informRender = () => {
		alert(`The component just rendered.`);
	};

	const informClicked = (number) => {
		alert(`You've clicked ${number} times.`);
	};

	return (
		<div>
			<button className="click-me" onClick={() => setClick(click + 1)}>
				Click me
			</button>
		</div>
	);
};

export default UseStateComp;
