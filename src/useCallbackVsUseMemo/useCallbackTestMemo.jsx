import React, { useState, useEffect, useMemo } from 'react';

const UseStateComp = () => {
	const [click, setClick] = useState(0);
	const [theme, setTheme] = useState('theme1');

	const getNumbers = useMemo(
		(incrementor) => {
			return [
				click + 1 + incrementor,
				click + 2 + incrementor,
				click + 3 + incrementor,
			];
		},
		[click]
	);

	const changeTheme = () => {
		if (theme === 'theme1') setTheme('theme2');
		else setTheme('theme1');
	};

	useEffect(() => {
		alert(`Welcome`);
	}, []);

	return (
		<div>
			<button className="click-me" onClick={() => setClick(click + 1)}>
				Click me
			</button>
			<button className="change-theme" onClick={changeTheme}>
				Change theme
			</button>
			<span className={theme}>
				You've clicked {click} times. <br />
				The next 3 numbers are:
			</span>

			<List getNumbers={getNumbers} theme={theme} />
		</div>
	);
};

const List = ({ getNumbers, theme }) => {
	const [numbers, setNumbers] = useState([]);
	const [incrementor, setIncrementor] = useState(0);

	useEffect(() => {
		setNumbers(getNumbers(incrementor));
		console.log('Updating numbers...');
	}, [getNumbers, incrementor]);

	return (
		<>
			<input
				type={'number'}
				value={incrementor}
				onChange={(e) => setIncrementor(parseInt(e.target.value))}
			/>
			<ul className="number-list">
				{numbers.map((num) => (
					<li className={theme}>{num}</li>
				))}
			</ul>
		</>
	);
};

export default UseStateComp;
