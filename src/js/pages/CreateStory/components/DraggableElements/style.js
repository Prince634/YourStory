import { css } from 'emotion';
import { cursor } from '@styles/index.js'

export const addText = props =>css`{
	position: absolute;
	top: 40px;
	left: ${props.showCarousel?'60%':'40px'};
	z-index: 1;
	border-radius: 8px;
    border: ${props.showCarousel?'0px':'2px solid'};
    min-width: 120px;
    min-height: 30px;
    padding-right: 8px;
}`

export const addDragIcon = css`{
	position: absolute;
	top: 40px;
	left: 40px;
	z-index: 100;
	height: 100px;
}`