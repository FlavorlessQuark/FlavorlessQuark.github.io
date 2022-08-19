import React from 'react'
import styled from "styled-components"

import Intro from '../components/HomePage/Intro'
import Resume from '../components/HomePage/Resume'
import Showcase from '../components/HomePage/Showcase'

export const Home = ({ children }) =>
{
    return (
		<Container>
			<Intro/>
			<Resume/>
			<Showcase/>
		</Container>
    )
}
const Container = styled.div`
	display:flex;
	flex-direction: column;
	font-family:"Iceland";
	width: 100%;
	// margin: 80px;
	gap: 50px;
	justify-content: space-between;
	height: fit-content;
`
