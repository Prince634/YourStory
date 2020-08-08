import { css } from 'emotion';
import { cursor } from '@styles/index.js'

export const container = css`{
	width: 30%;
	height: calc(100vh - 58px);
	background-color: #fff;
	border-right-width: 5px;
    box-shadow: 0px 0px 5px grey;
}`

export const items = css`{
	overflow-y: auto;
	height: calc(100vh - 60px);
}`
export const editItem = css`{
	border-bottom: 2px solid black;
	&:last-child{
		border-bottom: 0px;
	}
	padding: 20px;
    color: dimgrey;
    p{
    	${cursor};
		font-size: 18px;
    }
    .textArea{
    	display: flex;
    }
    .menu{
    	border: solid black;
	    border-width: 0 3px 3px 0;
	    display: inline-block;
	    padding: 3px;
	    background-color: white;
	    height: 0px;
	    margin-left: 10px;
	    position: relative;
	    top: 8px;
	    margin-left: 12px;
	    transform: rotate(-135deg);
	    transition: transform 0.5s;
    }
    .active{
    	transform: rotate(45deg);
    }
}`

export const editItemView = css`{

	overflow-x: auto;
	display: flex;
	transition: height 1s;
	height: 0px;
}`

export const addText = css`{

	overflow-x: auto;
	transition: height 1s;
	height: 0px;
	display: flex;
	flex-direction: column;
	.options{
		.inputError{
			border: 1px solid red;
		}
	}
	input, select{
		margin-top: 20px;
		padding: 8px 16px;
	}
	label{
		margin-right: 8px;
	}
}`

export const transitionClass = (props)=>css`{
	height: ${props.height};
}`

export const padding = (props)=>css`{
	padding: ${props.padding};
}`

export const overlay = css`{
	position: absolute;
	opacity: 0.9;
	background-color: black;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 20;

	span{
			&:after{
			content:'X';
			font-size: 28px;
		    color: #fff;
		    position: absolute;
		    right: 20px;
		    top: 20px;
		    cursor: pointer;
		}
	}
}`

export const layout1 = css`{
	border: 1px solid black;
}`

export const layout2 = css`{
	display: flex;
	flex-direction: column;
	span{
		border:1px solid black;
		flex: 1;
	}
}`

export const layout_view = css`{
	margin-top: 24px;
	height: 300px;
	width: 220px;
	margin-right: 24px;
	transition: height 0.8s;
	flex-shrink: 0;
	position: relative;
}`

export const layoutList = css`{
	.selectedLayout{
		border: 2px solid green;
	}
	.selectedLayout .btn{
		background-color: grey;
	}
}`

export const Button = css`{
	cursor: pointer;
	color: #fff;
	width: fit-content;
	padding: 8px 24px;
	border-radius: 8px;
	background-color: green;
}`

export const addBtn = css`{
	${Button};
	position: absolute;
}`