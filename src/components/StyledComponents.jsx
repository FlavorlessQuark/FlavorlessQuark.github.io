import styled from "styled-components";

export const Title = styled.div`
	display: flex;
	font-size:160px;
	color: ${props =>props.theme.colors.secondary};
	margin: 20px;
	margin-top: 0px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 48px;
	}
`
export const Link = styled.a`
	// display: flex;
	color: ${props =>props.theme.colors.highlight};
`
