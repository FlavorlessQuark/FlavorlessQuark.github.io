import React from 'react'
import styled from "styled-components"

import { Title, Link } from '../StyledComponents'
import { ReactComponent as C } from '../../assets/icons/C.svg'
import { ReactComponent as Python } from '../../assets/icons/Python.svg'

const Showcase = () =>
{
	const projects = {
		"Edge detection": {
			lang : [<C key="C"/>],
			desc: "Detects straight edges from drawings",
			url : "https://github.com/LumenNoctis/Shape_detect"
		},
		"SDLX": {
			lang : [<C key="C"/>],
			desc: "Mini game engine wrapped around SDL. Includes buttons, animations, rendering and collisions",
			url : "https://github.com/FlavorlessQuark/old_SDL_Tools"
		},
		"Wireframe renderer": {
			lang : [<C key="C"/>],
			desc: "Simple wireframe renderer. Suports rotation vertex edition",
			url : "https://github.com/42Curriculum/ft_fdf"
		},
		"Advent of Code": {
			lang : [<C key="C"/>, <Python key="Py"/>],
			desc: "Yearly programming contest",
			url : "https://github.com/FlavorlessQuark/Advent_of_Code"
		}
	}

	return (
		<Container>
			<Title style={{textAlign: "center", alignSelf:"center"}}>
					Showcase
			</Title>
			<Text>These are what I consider to be my best projects</Text>
			<Text>Demos of other projects are available <Link href="/projects">here</Link></Text>
			<Empty/>
			<WrappedRow>
				{
					Object.keys(projects).map((elem) =>
					<BeveledDivTop key={elem}>
						<BeveledDiv>
							<Project href={projects[elem].url}>
								<ProjectTitle>
									{elem}
								</ProjectTitle>
								<ProjectDesc>
									{projects[elem].desc}
								</ProjectDesc>
								<WrappedRow>
								{
									projects[elem].lang.map((lang) =>
											lang
										)
								}
								</WrappedRow>
							</Project>
						</BeveledDiv>
					</BeveledDivTop>
					)
				}
			</WrappedRow>
		</Container>
	)
}

export default Showcase;

const BeveledDiv = styled.div`
	display:flex;
	clip-path: polygon(2.5% 0%,97.5% 0%,100% 2.5%,100% 97.5%,97.5% 100%,2.5% 100%,0% 97.5%,0% 2.5%);
	width: 100%;
	padding: 10px;
	background: #B0ACB0;
	&&:hover {
		// width: 380px;
		padding: 5px;
	}
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		padding: 5px;
		&&:hover {
			padding: 3px;
		}
	}
`

const BeveledDivTop = styled.div`
	display:flex;
	clip-path: polygon(2.5% 0%,97.5% 0%,100% 2.5%,100% 97.5%,97.5% 100%,2.5% 100%,0% 97.5%,0% 2.5%);
	// width: 35%;
	padding: 10px;
	text-align: center;
	background: #353535;
	aspect-ratio: 3/2;
	width: 370px;
	&&:hover {
		width: 380px;
		padding: 5px;
	}
	transition: all 0.5s;

	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		width: 280px;
		padding: 5px;
		&&:hover {
			width: 277px;
			padding: 3px;
		}
	}
`

const Text = styled.div`
	font-size: 42px;
	color: ${props =>props.theme.colors.secondary};
	text-align: center;
	align-self: center;
	width: 100%;

	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 26px;
	}
`

const Empty = styled.div`
	width: 100%;
	margin: 20px;
`

const Container = styled.div`
	display:flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	justify-content: space-between;
	height: fit-content;
	margin: 50px 0px;
`
const WrappedRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	align-items: ;
	justify-content: center;
	gap: 34px;

`
const Project = styled.a`
	display:flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
	background: black;
	text-decoration: none;

	padding: 5px;
	text-align: center;

		@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		gap: 0px;
	}
`

const ProjectTitle = styled.div`
	color: ${props => props.theme.colors.secondary};
	font-size: 30px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 21px;
	}
`

const ProjectDesc = styled.div`
	display:flex;
	color: ${props => props.theme.colors.shadow};
	flex-wrap: wrap;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 16px;
	}
`
