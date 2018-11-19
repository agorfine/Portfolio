import React from 'react';


function Portfolio (props) {
	return(
		<div className = 'background'>
			<div className = 'portfolioInfo'>
				<div className= 'portfolioPageTitle' >PORTFOLIO</div>
				<div className = 'portfolioProject'>
					<img className = 'projectPic project1' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481447/Screen_Shot_2018-11-17_at_1.56.16_PM.png" alt= "project1"/>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>One Player Battleship | HTML CSS JavaScript</div>
					</div>
				</div>
				<div className = 'portfolioProject'>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>Disney Trip Adviser | React CSS JavaScript</div>
					</div>
					<img className = 'projectPic project2' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481539/Screen_Shot_2018-11-17_at_1.56.54_PM.png" alt= "project1"/>
				</div>
				<div className = 'portfolioProject'>
					<img className = 'project3' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481614/Screen_Shot_2018-11-17_at_1.57.52_PM.png" alt= "project1"/>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>Instagram | React CSS JavaScript</div>
					</div>
				</div>
				<div className = 'portfolioProject'>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>Duck Hunt | JavaScript</div>
					</div>
					<img className = 'projectPic project4' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481645/Screen_Shot_2018-11-17_at_1.59.01_PM.png" alt= "project1"/>
				</div>
				<div className = 'portfolioProject'>
					<img className = 'projectPic project5' src="https://res.cloudinary.com/drsaojfyp/image/upload/v1542481182/Screen_Shot_2018-11-17_at_1.59.28_PM.png" alt= "project1"/>
					<div className = 'projectDescription'>
						<div className = 'projectTitles'>Weather App | HTML CSS JavaScript</div>
					</div>
				</div>
			</div>	
		</div>
	)
	
}

export default Portfolio;