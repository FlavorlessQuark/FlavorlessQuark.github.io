import styled from "styled-components";

export const Title = styled.div`
	display: flex;
	font-size:160px;
	color: ${props =>props.theme.colors.primary};
	margin: 20px;
	margin-top: 0px;
	font-family:"Iceland";
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 48px;
	}
`
export const Link = styled.a`
	color: ${props =>props.theme.colors.highlight};
	text-decoration:none;
	&:hover {
		color: white;
	}
	display: inline;
`

export const BaseText = styled.span`
	color:white;
	font-size: 26px;
	width: 90%;
`
