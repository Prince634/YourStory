import React, { useCallback } from 'react'
import { buttonStyle } from './style.js'
const Button = ({children, styleProps, disable, clickHandler})=>{

	return(
		<span className={buttonStyle({...styleProps, disable})} onClick={clickHandler}>
			<p>{children}</p>
		</span>
		)
}

export default Button;