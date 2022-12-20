import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import { Title } from '../components/StyledComponents'

import { projectsData } from './projectsData'
import { ProjectTile } from '../components/ProjectTile'

const Projects = ({ children }) =>
{
	const titles = ["All", "Work", "Personal", "Demos"];
	const [projects, setProjects] = useState([])
	const [index, setIndex] = useState(0)
	useEffect(() => {
		let projs = [[], [], [], []];

		for (let project of Object.keys(projectsData))
		{
			projs[0].push(<ProjectTile projectsData={projectsData} project={project}/>)
			if (projectsData[project].isWork)
				projs[1].push(<ProjectTile projectsData={projectsData} project={project}/>)
			else
				projs[2].push(<ProjectTile projectsData={projectsData} project={project}/>)
			if ((projectsData[project].hasDemo))
				projs[3].push(<ProjectTile projectsData={projectsData} project={project}/>)
		}
		setProjects(projs)
	}, [])

    return (
		<>
		<Container>
			<Title style={{textAlign: "center", alignSelf:"center", height: "50px"}}>  </Title>
			<Title style={{textAlign: "center", alignSelf:"center", }}> Projects </Title>
			<WrappedRow>
				{
					titles.map((title, i) =>
					<Button selected={i == index} onClick={() => setIndex(i)}>{title}</Button>
					)
				}
			</WrappedRow>
			<WrappedRow>
				{
					projects[index] && projects[index].map((elem) =>
						<>
						{elem}
						</>
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

const Button = styled.div`
	display:flex;
	cursor: pointer;
	border-radius: 8px;
	border: none;
	text-transform: uppercase;
	font-size: 1 rem;
	font-weight: 300;
	letter-spacing: 0.1rem;
	padding: 10px 25px;
	border-radius: 5px;
	background-color: ${props => props.selected ? "#5fa25a" : "#a7c6c847"};
	transition: all 0.5s ease-in-out;
	&&:hover {
		background-color:#53c0c682;
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
export default Projects;
