import { css } from 'emotion';

export const uploadWidget = css`{
	display: flex;
	margin-top: 40px;
}`

export const uploadBtn = css`{

	.btn{
		border: 1px solid lightgrey;
		padding: 4px 16px;
		border-radius: 8px;
		background: #fff;
		cursor:pointer;
		position: relative;
		top: 48%;
	}
}`

export const previewItems = css`{
	margin-left: 40px;
	height: 300px;
	width: calc(100% - 200px) !important;
	overflow-x: scroll;
	display: flex;
	align-items: center;
	background: #fff;
	border-radius: 20px;
	box-shadow: 0px 0px 4px grey;
	
	img{
		height: 200px;
		width: 250px;
		flex-shrink: 0;
		margin-right: 20px;
		padding: 0px 12px;
	}
	span{
		padding: 4px 8px;
		cursor: pointer;
		border: 1px solid grey;
	}
}`