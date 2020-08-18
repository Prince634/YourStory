import React from 'react';
import { container, learnStory } from './style.js';

const ElementsDescription = ()=>{

	return(
		<div className={container}>

			<div className={learnStory}>
				<h3>Learn How to make Stories</h3>
				
				<div className="learnSection">
					<div className="textSection">
						<div className="heading">
							Edit Bar
						</div>
						<div className="text">
							Edit Bar is used to Add different elements to the story.<br/>
							You can drag Text fields and Icons added to the screen as per your suitable position in the mobile simulator 
						</div>
					</div>
					<div className="imgSection">
						<img src="/edit.jpg" alt="Added Image"/>
					</div>
				</div>

				<div className="learnSection">
					<div className="imgSection">
						<img src="/mobile.jpg" alt="Added Mobile Simulator"/>
					</div>
					<div className="textSection">
						<div className="heading">
							Mobile Simulator
						</div>
						<div className="text">
							Here in mobile Simulator ,you can see the view, how elements you added looks like.You can also drag and drop elements added.
						</div>
					</div>
				</div>

				<div className="learnSection">
					<div className="textSection">
						<div className="heading">
							Added Element List
						</div>
						<div className="text">
							Here you get the all list of elements you added, you also have the option to edit or remove the elements added.
						</div>
					</div>
					<div className="imgSection">
						<img src="/addedList.jpg" alt="Added Mobile Simulator"/>
					</div>
				</div>


				<div className="learnSection">
					<div className="imgSection">
						<img src="/buttons.jpg" alt="Added Mobile Simulator"/>
					</div>
					<div className="textSection">
						<div className="heading">
							Actions Buttons
						</div>
						<div className="text">
							There are four buttons provided for different purposes.
							<ul>
								<li>Preview Buttons gives you the preview of your story.Just click on it after creating your story, to see how it looks like.</li>
								<li>Reset Button helps you to reset your mobile simulator to default state.</li>
								<li>Add new Page helps you to add new page to your story.You can create multipage story using this button</li>
								<li>Save Changes helps to save your story changes so that you can get it anytime</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

export default ElementsDescription;