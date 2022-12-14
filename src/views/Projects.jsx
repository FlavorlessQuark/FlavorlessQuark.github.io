import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import { Title } from '../components/StyledComponents'

import { projectsData } from './projectsData'
import { ProjectTile } from '../components/ProjectTile'

export const Projects = ({ children }) =>
{
	const [workProjs, setWork] = useState([])
	const [persProjs, setPers] = useState([])
	useEffect(() => {
		let pers= []
		let work = []
		for (let project of Object.keys(projectsData))
		{
			if (projectsData[project].isWork)
				work.push(<ProjectTile projectsData={projectsData} project={project}/>)
			else
				pers.push(<ProjectTile projectsData={projectsData} project={project}/>)
		}

		setWork(work)
		setPers(pers)
	}, [])

    return (
		<>
		<Container>
			<Title style={{textAlign: "center", alignSelf:"center"}}> Projects </Title>
			<Text> Work projects </Text>
			<WrappedRow>
				{
					workProjs.map((elem) =>
						<>
						{elem}
						</>
					)
				}
			</WrappedRow>
			<Text> Personal projects </Text>
			<WrappedRow>
				{
					persProjs.map((elem) =>
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
