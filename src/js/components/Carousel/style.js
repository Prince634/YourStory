import { css } from 'emotion';
import { cursor } from '@styles/index.js'

export const carousel = css`{
	position: absolute;
	z-index: 30;
	width: 100vw;
	display: flex;
	justify-content: center;
	background: black;
    position: absolute;
    top: 0;
    bottom: 0;
    transition: opacity 0.6s;
    opacity: 0.9;
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

export const carouselImages = css`{
	z-index: 25;
	display: flex;
	overflow-x: auto;
	scroll-behavior: smooth;
	width: 280px;
	align-items: center;
	img{
		height: 300px;
		width: 300px;
		margin-right: 24px;
		transition: height 0.8s;
	}
	.active{
		height: 350px;
	}
}`

export const carouselBtn = css`{
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: -30%;
	span{
		border:5px solid #fff;
		margin-right: 4px;
		border-radius: 50%;
	}
}`
