import React from 'react'
import styled from "styled-components"

export const ProjectTile = ({ projectsData, project }) =>
{
	return (
		<ProjectContainer key={project}  >
				<Project href={"/projects/" + project}>
					<ImgContainer>
						<ProjectImg src={projectsData[project].logo}/>
					</ImgContainer>
					<ProjectTitle>{projectsData[project].name}</ProjectTitle>
					<ProjectDesc>{projectsData[project].short}</ProjectDesc>
					<WrappedRow>
						{ projectsData[project].lang.map((lang) => lang) }
					</WrappedRow>
				</Project>
			</ProjectContainer>
	)
}


const ProjectContainer = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 370px;
	height: 400px;
	text-align: center;
		@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
			height: 200px
			width: 185px
	}
`
const ProjectImg = styled.img`
	display:flex;
`

const ImgContainer = styled.div`
	display: flex;
	width: 50%;
	height: 25%;
	justify-content:center;
	// align-items:center;
`


const Project = styled.a`
	display:flex;
	width: 100%;
	height:100%;

	flex-direction: column;
	padding: 5px 10px;
	background: black;
	border: 4px solid white;
	text-align: center;
	justify-content: space-around;
	align-items: center;
	text-decoration: none;

	flex-shrink: 0;

	&&:hover {
		width: 105%;
		height: 105%;
		cursor:pointer;
	}
	transition: all 0.5s;

	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		width: 280px;
		padding: 5px;
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
	white-space: pre-wrap;
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
	gap: 50px;
	align-items:center;
`
