import React from 'react'
import styled from "styled-components"

import { Link } from '../StyledComponents'

import { projectsData, showcaseProjects } from '../../views/projectsData'
import { ProjectTile } from '../ProjectTile'
import picture from "../../assets/picture.jpg";

import { ReactComponent as C } from '../../assets/icons/C.svg'
import { ReactComponent as Python } from '../../assets/icons/Python.svg'
import { ReactComponent as JS } from '../../assets/icons/JS.svg'
import { ReactComponent as Reactjs } from '../../assets/icons/Reactjs.svg'
import { ReactComponent as Nodejs } from '../../assets/icons/Nodejs.svg'
import { ReactComponent as Mongo } from '../../assets/icons/Mongo.svg'
import { ReactComponent as SDL } from '../../assets/icons/SDL.svg'
import { ReactComponent as Unity } from '../../assets/icons/Unity.svg'
import { ReactComponent as VsCode } from '../../assets/icons/VsCode.svg'


const About = ({ innerRef }) =>
{
	const skills = [ <C/>, <Python/>, <JS/>, <Reactjs/>, <Nodejs/>, <Mongo/>, <SDL/>, <Unity/>, <VsCode/> ]

	return (
		<Container >
			<PicDiv>
				<Self src={picture}/>
			</PicDiv>
			<Col>
				<Title ref={innerRef} style={{textAlign: "center", alignSelf:"center"}}>
						About Me
				</Title>
				<Text>
					Hello world! I'm Johanna, a <Link href="https://www.42.us.org/">42 SiliconValley</Link> alumna and self-taught developer.
					<br/> <Link href="https://github.com/FlavorlessQuark">Coding</Link> is one of my greatest passions and
					I've spent most of my days pursuing it since 2019, and hope to do so for many more years.
				</Text>
				<Text>
				<br/>
					I enjoy learning about everything and am always looking to improve as a programmer and a person.</Text>
				<Text>
				<br/>
					Although most of <Link href="/projects">my projects</Link> are written in the C programming language, I'm also proficient in Python, JS, shell script and various tools and frameworks
				</Text>
				<Button href="/resume"> Check out my resume</Button>
			</Col>
		</Container>
	)
}

const Title = styled.div`
	display: flex;
	font-size:160px;
	color: ${props =>props.theme.colors.primary};
	margin: 20px;
	margin-top: 0px;
	font-family:"Iceland";
	text-align: center;
	align-self: center;
	font-size: 60px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		align-self: flex-start;
		font-size: 40px;
		margin: unset;
	}
`
const PicDiv = styled.div`
	display:flex;
	flex-direction:row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 50px;
	width: 35%;
	min-width:280px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		max-width: 30%;
		min-width:180px;
	}
`
const Button = styled.a`
	display:flex;
	cursor: pointer;
	border-radius: 8px;
	border: none;
	text-transform: uppercase;
	font-size: 1 rem;
	font-weight: 300;
	letter-spacing: 0.1rem;
	padding: 10px 25px;
	// border-radius: 5px;
	border: 2px solid white;
	// background-color: black;
	color: white;
	transition: all 0.5s ease-in-out;
	margin: 10px;
	&&:hover {
		background-color:#53c0c682;
	}
}
`

const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 60%;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		width: 100%;
		gap: 10px;
		justify-content: space-between;
	}
`

const Self = styled.img`
	display:flex;
	max-width: 80%;
	border: 2px solid #00e3c3;
	border-radius: 50%;
	min-width: 280px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		min-width:unset;
	}
`

const Text = styled.div`
	font-size: 1.8rem;
	color: ${props =>props.theme.colors.secondary};
	text-align: left;
	width: 80%;

	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 23px;
		width: 100%;
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: center;
	height: fit-content;
	scroll-margin-top: 50px;
	height: 100vh;
	flex-wrap: wrap;
	margin-top: 55px;
`


export default About;
