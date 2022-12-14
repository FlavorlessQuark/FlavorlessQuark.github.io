import React from 'react'
import styled from "styled-components"

import { Link, Title } from '../StyledComponents'

import { projectsData, showcaseProjects } from '../../views/projectsData'
import { ProjectTile } from '../ProjectTile'


const Showcase = ({ innerRef }) =>
{

	return (
		<Container >
			<Title ref={innerRef} style={{textAlign: "center", alignSelf:"center"}}>
					Showcase
			</Title>
			<Text>These are what I consider to be my best projects</Text>
			<Text>Demos of other projects are available <Link href="/projects">here</Link></Text>
			<Empty/>
			<WrappedRow>
				{
					showcaseProjects.map((project) =>
					 <ProjectTile projectsData={projectsData} project={project}/>
					)
				}
			</WrappedRow>
		</Container>
	)
}

export default Showcase;


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
	scroll-margin-top: 50px;
`
const WrappedRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	align-items: ;
	justify-content: center;
	gap: 50px;

`

