import React, {useRef} from 'react'
import styled from "styled-components"
import { Title } from '../components/StyledComponents'

import { projectsData } from './projectsData'

export const Projects = ({ children }) =>
{
	// console.log(projectsData)
    return (
		<>
		<Container>
			<Title style={{textAlign: "center", alignSelf:"center"}}> Projects </Title>
			<Text> Below are interactive projects you can try on this website</Text>
			<WrappedRow>
				{
					Object.keys(projectsData).map((elem) =>
						projectsData[elem].isInteractive
						?
						<BeveledDivTop key={elem}>
							<BeveledDiv>
								<Project
								href={projectsData[elem].isInteractive
									? "/project/" + elem
									: projectsData[elem].link
								}>
									<ProjectTitle>
										{projectsData[elem].name}
									</ProjectTitle>
									<ProjectDesc>
										{projectsData[elem].short}
									</ProjectDesc>
								</Project>
							</BeveledDiv>
						</BeveledDivTop>
						: <></>
					)
				}
			</WrappedRow>
		</Container>
		</>
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
	// z-index:0;
`

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


const Project = styled.a`
	display:flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-around;
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
	color: ${props => props.theme.colors.primary};
	flex-wrap: wrap;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 16px;
	}
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
