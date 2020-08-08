import { css } from 'emotion';
import { cursor } from '@styles/index.js'

export const container = css`{
	font-family: 'Open Sans', sans-serif;
	box-sizing: border-box;
	overflow: hidden;
	height: calc(100vh - 58px);
	display: flex;
}`

export const mobieContainer = css`{
	width: 68%;
	margin: 20px 40px;
	display: flex;
	flex-direction: column;

}`

export const moblileView = css`{
	position: relative;
	border-radius: 20px 20px 0px 0px;
	min-width: 360px;
	height: 90%;
	background: #fff;
	border: 2px solid;
	&:last-child{
		border:0px;
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

export const addText = css`{
	position: absolute;
	top: 40px;
	left: 40px;
	z-index: 100;
	border-radius: 8px;
    border: 2px solid;
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

export const alreadyAddedElements = css`{
	overflow-y: auto;
	background:#fff;
	width: 100%;
	color: dimgrey;
	font-size: 20px;
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