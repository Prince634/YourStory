import React from 'react';
import { overlay } from './style.js';

const Overlay = ({children, showOverlay})=>{

	return(
		<React.Fragment>
			{
				showOverlay?
				<div className={overlay}>
					{children}
				</div>
				:''
			}
		</React.Fragment>
		)
}

export default Overlay;