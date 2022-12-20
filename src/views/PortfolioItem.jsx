import React, {useEffect, useRef, useState} from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { Title } from '../components/StyledComponents';
import Page404 from './404';

import {projectsData }from './projectsData';

const PortfolioItem = () =>
{
	const {project} = useParams();

	useEffect(() =>
	{
		if (project && projectsData[project]?.hasDemo && window[projectsData[project].module])
        {
			console.log("Attempting to load wasm module")
			window[projectsData[project].module]({
				canvas: (() => document.getElementById('canvas'))(),
			})
			.then(() => {
				console.log("Done");
			});

        }
	}, [project])
	console.log("HEre", project, projectsData[project])
	if (!projectsData[project] || !projectsData[project].hasDemo)
		return <Page404/>
	else
		return (
		<>
		<Container>
			<Title>{projectsData[project].name}</Title>
			{
				<ProjectContainer>
					<ProjectBody >
					<FeatureTitle>{projectsData[project].title}</FeatureTitle>
					<Canvas id="canvas"/>
					<Source href={projectsData[project].source}> Source Code </Source>
					</ProjectBody>
					<TabContainer>
						<Tab> Demo </Tab>
					</TabContainer>
				</ProjectContainer>
			}
		</Container>
		</>
	)
}

const Canvas = styled.canvas`
    background: black;
    // width: 90%;
    border: 2px solid #78787863;
    aspect-ratio: 1/1;
    // height:80%;
	max-height: 580px;
	@media (max-device-width : ${props =>props.theme.mobile}px) {
		max-width: 80%;
	}
`
const Source = styled.a`
	display:flex;
	cursor: pointer;
	color: #B54E4E;
	font-weight:700;
	font-weight: bolder;
	text-decoration: none;
`

const Container = styled.div`
	display:flex;
	font-family: Iceland;
	flex-direction:column;
	align-items:center;
	width:100%;
	justify-content: space-between;

`

const ProjectContainer = styled.div`
	display:flex;
	flex-drection:row;
	justify-content:center;
	align-items:center;
	width: 100%;
`
const ProjectBody = styled.div`
	display:flex;

	border: 1px solid white;
	width: 90%;
	align-items: center;
	justify-content:space-around;
	flex-direction: column;
	border-radius: 3px;
	background: black;

`

const TabContainer = styled.div`
	display:flex;
	flex-direction: row;
	transform-origin: bottom left;
	transform: rotate(90deg);
	top: -50%;
	position: relative;
	width: 0%;
`

const Tab = styled.div`
	display:flex;
	justify-content: space-around;
	border: 1px solid white;
	background: black;
	color:white;
	border: 2px solid white;
	text-align: center;
	padding: 5px;

	border-top-left-radius: 11px;

	white-space: nowrap;
	border-bottom:none;
	cursor:pointer;

	border-bottom: none;
	cursor: pointer;
	font-size: 24px;
	margin: 2px;
	bottom: -3px;
	position:relative;
`
const FeatureTitle = styled.div`
	display:flex;
	color:white;
	font-size:30px;
`

const Picture = styled.img`
display:flex;
	max-width:80%;
	min-height: 300px;
	max-height: 500px;
`

const SourceText = styled.div`
display:flex;

`


export default PortfolioItem;
