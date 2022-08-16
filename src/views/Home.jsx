import React from 'react'
import styled from "styled-components"


export const Home = ({ children }) =>
{
    return (
		<Container>
			<div>
				<Hello>
					Hello
				</Hello>
				<Hello>
					World!
				</Hello>
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
const Container = styled.div`
	display:flex;
	flex-direction: column;
	font-family:"Iceland";
	width: 100%;
	padding: 80px;
	align-items: flex-start;
	justify-content: space-between;
	gap: 20px;
`

const Hello = styled.div`
	display: flex;
	font-size:148px;
	color: ${props =>props.theme.colors.secondary};
`

const FlexText = styled.div`
	display:flex;
	flex-direction: column;
	text-align: start;
	// align-self: end;
	gap: 20px;
	max-width: 940px;
`

const Text = styled.div`
	display:flex;
	font-size:48px;
	color: ${props =>props.theme.colors.shadow};
`
