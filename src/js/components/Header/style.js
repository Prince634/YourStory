import { css } from 'emotion';
import { mq, cursor, mq_max, boxSizing } from '../../styles';

export const headerContainer = css`{
	width: 100%;
	background-color: #122843;
	display: flex;
	padding: 16px;
	justify-content: center;
	align-items: center;
	${boxSizing};
	${mq_max[0]}{
		justify-content: flex-start;
	}

}`

export const leftMenu = css`{
	display: flex;
	align-items: center;
}`
export const brandLogo = css`{
	padding: 0px 16px;
	color: #fff;
	font-size: 22px;
	font-weight: 800;
	${cursor};
}`

export const RightMenu = css`{
	position: absolute;
	right: 20px;
	color: #fff;
	div{
		${cursor};
		color: #fff;
		padding-right: 16px;
		&:last-child{
			padding-right: 0px;
		}
	}
}`
