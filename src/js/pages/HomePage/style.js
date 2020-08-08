import { css } from 'emotion';
import { bgColor, scrollableWidget, imgSpec, mq, mq_max, boxSizing } from '@styles'

export const container = css`{
	${mq[1]}{
		margin: 40px 150px;
	}
	${boxSizing};
	${mq_max[0]}{
		margin: 20px;
	}
}`

export const rowList = css`{
	display: flex;
	${scrollableWidget};
	margin-top:20px;
	img{
		${imgSpec};
	}
}`
