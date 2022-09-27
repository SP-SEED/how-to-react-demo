import React, { useState } from 'react';

const UseStateComp = () => {
	const [click, setClick] = useState(0);

	return (
		<>
			<button className="click-me" onClick={() => setClick(click + 1)}>
				Click me
			</button>
			<span className="display-text">You've clicked {click} times.</span>
		</>
	);
};

export default UseStateComp;
