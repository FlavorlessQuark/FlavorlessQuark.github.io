import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import { Title } from '../StyledComponents'

const Intro = ({ innerRef }) =>
{
	return (
		<Container >
			<div>
				<Title ref={innerRef} style={{maxWidth:"450px", scrollMarginTop: "150px"}} >
					Hello World!
				</Title>
			</div>
			<FlexText style={{textAlign: "start"}}>
				<Text>
					I'm a programmer and C wizard!
				</Text>
				<br/>
				<Text>
					I enjoy creating programming tools and have been working as FullStack / Web3/ Smart Contract developer
				</Text>
			</FlexText>
			<Text style={{textAlign: "center", alignSelf: "center"}}>
				This website is a showcase of the code I have crafted
			</Text>
		</Container>
	)
}

export default Intro;

const Container = styled.div`
	display:flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	justify-content: space-between;
	gap: 20px;
	margin: 10px;
	min-height: 770px;
	scroll-margin-top: 120px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		gap: 20px;
		margin: 0px;
		min-height: 680px;
		// margin-top: 40px;
	}
`
const FlexText = styled.div`
	display:flex;
	flex-direction: column;
	text-align: start;
	// align-self: end;
	gap: 20px;
	max-width: 1095px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		gap: 13px;
	}
`

const Text = styled.div`
	display:flex;
	font-size:48px;
	color: ${props =>props.theme.colors.shadow};
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		// color: blue;
		font-size: 32px;
	}
`
