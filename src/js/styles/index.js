import { css } from 'emotion'

const breakpoints = [576, 768, 992, 1200]

export const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export const mq_max = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

export const cursor = css`{
	cursor: pointer;
}`

export const boxSizing = css`{
	box-sizing: border-box;
}`

export const bgColor = css`{
	background-color: #EDEEEC;
}`

export const scrollableWidget = css`{
	overflow-x: auto;
	::-webkit-scrollbar { 
    display: none;
	}
	scroll-behavior: smooth;
}`

export const imgSpec = css`{
	height: 100%;
    width: 100%;
    object-fit: contain;
}`

export const hamburger = css`{
	padding-left: 8px;
	${cursor};
	p{
		width: 20px;
		border: 1px solid #fff;
		margin-bottom: 4px;
	}
}`

export const searchBar = css`{
	width: 80vh;
	input{
		${boxSizing};
		padding: 12px;
		border: 2px solid grey;
		border-radius: 8px;
		width: 100%;
		font-size: 16px;
	}

}`