import { css } from 'emotion';

export const container = css`{
	overflow: hidden;
}`

export const body = css`{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	z-index: 20;
	background: rgb(0 0 0 / 0.8);
}`

export const coachmarkBox = css`{
	position: absolute;
	top: -100px;
	background: #FFFFFF;
	padding: 24px;
	border-radius: 24px;
	max-width: 300px;
	text-align: center;
	transition : top,left, 0.5s ease-out;
	.pointer{
		position: absolute;
		border-left: 24px solid transparent;
	    border-right: 24px solid transparent;
	    border-bottom: 24px solid #FFF;  
	}
	.left{
		transform: rotate(90deg);
	    left: -8px;
	    top: -8px;
	}
	.right{
		top: 0;
		right: -8px;
	    transform: rotate(147deg);
	}
	.bottom{
		bottom: -8px;
		transform: rotate(90deg);
	}
	.top{
		top: -8px;
		transform: rotate(100deg);
	}
	.heading{
		font-size: 28px;
		font-weight: 800;
		margin-bottom: 20px;
	}
	.text{
		color: grey;
		font-size: 14px;
	}
	.buttons{
		margin: 20px 0px;
		display: flex;
		color: green;
		font-weight: 900;
		font-size: 20px;
	}
	.prev{
		display: flex;
		flex: 1;
		cursor: pointer;
		justify-content: flex-start;
	}
	.next{
		display: flex;
		flex: 1;
		cursor: pointer;
		justify-content: flex-end;
	}
}`