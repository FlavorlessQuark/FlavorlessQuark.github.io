import React from 'react'
import styled from "styled-components"
import { Title } from '../StyledComponents'

const Intro = ({ innerRef }) =>
{
	return (
		<Container >
			<div style={{height: "15%"}}> </div>
			<div>
				<Title ref={innerRef} style={{ scrollMarginTop: "150px", color: "#3e9b6f"}} >
					Hello World!
				</Title>
				<Text style={{textAlign: "right", display: "block"}}>
					I'm a programmer !
				</Text>
			</div>
			<FlexText style={{textAlign: "center"}}>
				<br/>
				<Text>
					I love coding and solving problems of all kinds, and am always looking for the next oportunity to improve my skills and learn new ones!
				</Text>
				<br/>
				<br/>
				<Text>
					I'm currently working as FullStack / Blockchain developer at SimpleBreakthrough;
				</Text>
			</FlexText>
			<Text style={{textAlign: "center", alignSelf: "center"}}>
				⌄
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
	justify-content: space-around;
	min-height: 770px;
	height: 100vh;
	scroll-margin-top: 120px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		gap: 20px;
		margin: 0px;
		min-height: 680px;
	}
`
const FlexText = styled.div`
	display:block;
	flex-direction: column;
	text-align: start;
	align-self:center;
	gap: 20px;
	max-width: 65%;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
	max-width: 90%;
		wid
	}
`

const Text = styled.div`
	display:flex;
	font-size:35px;
	// color: ${props =>props.theme.colors.primary};
	color: #84b0bd;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		// color: blue;
		font-size: 25px;
	}
`
