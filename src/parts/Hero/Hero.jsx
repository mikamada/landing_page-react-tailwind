import React from 'react';
import ic_traveler from '../../assets/ic_traveler.png';
import ic_treasure from '../../assets/ic_treasure.png';
import ic_city from '../../assets/ic_cities.png';
import banner from '../../assets/image.png';
import frame from '../../assets/frame.png';

const Hero = () => {
	return (
		<div className="px-36 pt-20 flex w-auto justify-between">
			<div>
				<h1 className="text-5xl font-bold text-secondary-color w-width">
					Forget Busy Work, Start Next Vacation
				</h1>
				<p className="text-base font-light max-w-xs text-dark-gray-color pt-5 pb-7">
					We provide what you need to enjoy your holiday with family. Time to
					make another memorable moments.
				</p>
				<button className="bg-primary-color py-2 px-7 text-white-color font-medium text-lg shadow-lg shadow-cyan-500/50 rounded">
					Show Me Now
				</button>
				<div className="flex mt-20">
					<div className="travelers mr-12">
						<img src={ic_traveler} alt="traveler" />
						<p className="mt-3 text-base">
							<span className="font-medium text-secondary-color">80,000</span>{' '}
							<span className="font-light text-base text-dark-gray-color">
								travelers
							</span>
						</p>
					</div>
					<div className="treasure mr-12">
						<img src={ic_treasure} alt="traveler" />
						<p className="mt-3 text-base">
							<span className="font-medium text-secondary-color">80,000</span>{' '}
							<span className="font-light text-base text-dark-gray-color">
								treasure
							</span>
						</p>
					</div>
					<div className="cities mr-12">
						<img src={ic_city} alt="traveler" />
						<p className="mt-3 text-base">
							<span className="font-medium text-secondary-color">80,000</span>{' '}
							<span className="font-light text-base text-dark-gray-color">
								cities
							</span>
						</p>
					</div>
				</div>
			</div>
			<div>
				<div
					className="w-w-banner h-h-banner box-border rounded-tl-full rounded-bl-large rounded-tr-large rounded-br-large overflow-hidden absolute"
					id="banner"
				>
					<img
						src={banner}
						alt="hero-banner"
						className="object-fill object-center"
					/>
				</div>
				<img src={frame} alt="frame" className="h-h-frame w-w-frame" />
			</div>
		</div>
	);
};

export default Hero;
