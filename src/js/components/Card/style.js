import { css } from 'emotion';
import { bgColor } from '../../styles'

export const cardStyle = (props) => css`{
	height: ${props && props.height?props.height:220}px;
	background-color: #fff;
	margin: 8px;
	flex-shrink: 0;
	width: ${props && props.width?props.width:220}px;
	border-radius: 20px;
	box-shadow: 0px 0px 8px grey;
	padding: 12px;
}`
