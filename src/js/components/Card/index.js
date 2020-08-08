import React from 'react';
import { cardStyle } from './style.js';

const Card = ({children, styleProps})=>{

	return(
		<div className={cardStyle(styleProps)}>
			{children}
		</div>
		)
}

export default Card;