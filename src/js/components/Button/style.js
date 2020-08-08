import { css } from 'emotion';
import { cursor } from '@styles/index.js'

export const buttonStyle = (props) => css`{
	display: inline-block;
	padding: ${props && props.padding?props.padding:12}px;
	margin: ${props && props.margin?props.margin:4}px;
	background-color: ${props.color?props.color:'green'};
	border-radius: 20px;
	box-shadow: 0px 0px 2px grey;
	opacity: ${props.disable?0.5:1};
	cursor: ${props.disable?'unset':'pointer'};
	color: ${props.fontColor?props.fontColor:'#000'};
}`
