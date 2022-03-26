import React from 'react';
import IconText from '../../pages/IconText';

const Header = () => {
	return (
		<>
			<nav className="flex justify-between items-center h-20 px-36 py-5 border-b border-gray-color">
				<IconText />
				<ul className="flex">
					<li className="pl-8">
						<a href="#" className="text-primary-color text-base">
							Home
						</a>
					</li>
					<li className="pl-8 text-base">
						<a href="#">Browse by</a>
					</li>
					<li className="pl-8 text-base">
						<a href="#">Stories</a>
					</li>
					<li className="pl-8 text-base">
						<a href="#">Agents</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
