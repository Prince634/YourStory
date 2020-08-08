import React, {useCallback} from 'react'
import { headerContainer, RightMenu, brandLogo, leftMenu } from './style.js'
const Header = ({history, title})=>{
	const navigateTo = useCallback((path)=>{
		history.push(path);
	},[])
	return(
		<>
			<div className={headerContainer}>
				<div className={leftMenu}>
					<div className={brandLogo} id="header" onClick={()=>navigateTo('/')}>
						{title?title:'MyBlog'}
					</div>
				</div>
				<div className={RightMenu}>
					<div>About Us</div>
				</div>
			</div>
		</>
		)
}

export default Header;