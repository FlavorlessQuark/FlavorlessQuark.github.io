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
			<Text>
				Text here
			</Text>
		</Container>
    )
}
const Container = styled.div`
	display:flex;
	flex-direction: column;
	font-family:"Iceland";
	justify-content: space-around;
	width: 100%;
	padding: 80px;
	align-items: flex-start;
	justify-content: flex-start;
`

const Hello = styled.div`
	display: flex;
	font-size:148px;
	color: ${props =>props.theme.colors.secondary};
`

const Text = styled.div`
	display:flex;
	font-size:114px;
	color: ${props =>props.theme.colors.shadow};
	align-self: end;
`
