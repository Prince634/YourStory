import { css } from 'emotion';
import { cursor } from '@styles/index.js'

export const container = css`{
	font-family: 'Open Sans', sans-serif;
	box-sizing: border-box;
	overflow-x: hidden;
	display: flex;
	background: #fff;
	box-shadow: 0px 0px 2px grey;
	margin-bottom: 4px;
}`

export const mobieContainer = css`{
	width: 58%;
	margin: 20px 40px 0px;
	display: flex;
	flex-direction: column;
}`

export const moblileView = css`{
	position: relative;
	border-radius: 20px 20px 0px 0px;
	min-width: 360px;
	height: calc(100vh - 260px);
	background: #fff;
	border: 2px solid;
	&:last-child{
		border:0px;
	}
	.fixedBackgroundImg{
		height: 100%;
		width: 100%;
		border-radius: 20px 20px 0px 0px;
		pointer-events: none;
	}
	.bgColor{
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 20px 20px 0px 0px;
	}
}`

export const mobileBtn = css`{
	position: relative;
	min-width: 360px;
	background: black;
	height: 60px;
	border-radius: 0px 0px 20px 20px;
	border: 2px solid;
	&:before{
		content: '';
	    border: 20px solid #696969;
	    border-radius: 50%;
	    height: 5px;
	    width: 5px;
	    background: white;
	    position: absolute;
	    bottom: 4px;
	    right: 154px;
	}
}`

export const flexClass = css`{
	display: flex;
	flex: 1;
}`

export const flexDirectionColumn = css`{
	flex-direction: column;
}`

export const borderClass = css`{
	border-bottom: 2px solid green;
}`

export const mainParent = css`{
	${flexClass};
	height: 100%;
}`

export const alreadyAddedElements = css`{
	overflow-y: auto;
	background:#fff;
	box-shadow: 0px 0px 5px grey;
	width: 100%;
	color: dimgrey;
	font-size: 20px;
	height: calc(100vh - 60px);
	.mainHead{
		padding: 20px;
	}
	.addedButtons{
		display: flex;
	    margin-top: 8px;
	}
}`

export const addedElem = css`{
	border-bottom: 2px solid;
	padding: 20px;
	cursor: pointer;
	&:last-child{
		border:0px;
	}
}`

export const bottomBtns = css`{
	display: flex;
	flex-direction: column;
	.row{
		display: flex;
		justify-content: center;
	}
}`