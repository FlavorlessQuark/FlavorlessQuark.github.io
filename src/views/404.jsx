import React from 'react'
import styled from "styled-components"
import { Title } from '../components/StyledComponents'

const Page404 = () =>
{
	return (
		<Container>
			<Title>
				There's nothing here !
			</Title>
			<Text> Or is there ...?</Text>
			<HiddenText> Nope! There's nothing at all :) </HiddenText>
		</Container>
	)
}

const Container = styled.div`
	display:flex;
	flex-direction: column;
	font-family:"Iceland";
	width: 100%;
	gap: 50px;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: ${props => props.theme.colors.secondary};
	height: 100%;
	// z-index:0;
`

const Text = styled.div`
	display:flex;
	font-size: 26px;
`

const HiddenText = styled.div`
	display:flex;
	color: ${props => props.theme.colors.background};
`

export default Page404
