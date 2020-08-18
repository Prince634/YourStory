import { css } from 'emotion';
import { cursor } from '@styles/index.js'

export const container = css`{
	width: 100%;
	background-color: #FFFFFF;
	padding: 50px 0px;
}`

export const learnStory = css`{
	padding: 0px 50px;
	h3{
		text-align: center;
		font-size: 40px;
		font-weight: 900;
		margin: 0;
	}
	.learnSection{
		display: flex;
		padding: 50px;
		justify-content: space-around;
	}
	.textSection{
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	}
	.heading{
		font-size: 24px;
		font-weight: 700;
	}
	.text{
		margin-top: 12px;
		font-size: 18px;
		width: 500px;
	}
	.imgSection{
		img{
			max-height: 300px;
			max-width: 400px;
			border: 1px solid;
		}
	}

}`
