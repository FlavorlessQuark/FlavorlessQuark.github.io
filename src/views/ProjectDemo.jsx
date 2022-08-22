import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Title } from '../components/StyledComponents';
import Page404 from './404'

import {projectsData }from './projectsData';
// Here we will get the projects dynamically
// They should all be located in the Wasync organization
// First we will check if the url params correspon to a repo by checking github
// Once we have established that a repo does exist we will do 3 things :
// First we will fetch the project's config file and parse it. It should have the following fields:
// name, shortdesc, logo,  description, controls, aspect ratio
// Then parse description so that :
//  This is a sample text with a |link| , **bold** *italic*  [0xFFFF colored text]
// becomes
// <Text> This is a sample text with a <Link>link<Link/> <Bold>bold<Bold/> <Italic>italic<Italic> <p style={{color: 0xFFFF}}> colored text <p>
// Lastly we will fetch the js script with : "https://cdn.jsdelivr.net/gh/Wasync/[repo]/[script url (not including branch)]"
export const ProjectDemo = ({ children }) =>
{
	const {name} = useParams()
    const [runScript, setRun] = useState(1);


    useEffect(() => {
        if (setRun && window.Module)
        {
            setRun(0)
            console.log("loaded");
            window.Module({
                canvas: (() => document.getElementById('canvas'))(),
            })
            .then(() => {
                console.log("Done");
            });
        }
        else if (runScript < 50)
        {
            setRun(runScript + 1)
            console.log("Script not loaded")
        }
    }, [runScript]);


	if (!(name in projectsData))
		return <Page404/>
	else
		return (
        <Container>
     <Column>
        <Title style={{marginTop: "-30px"}}> {projectsData[name].name} </Title>
        <Canvas id="canvas"/>
        <Controls>
			<Text>Controls :</Text>
			{
				projectsData[name].controls.map((elem) =>
					<Text>{"["+elem[0]+"] : " + elem[1]}</Text>
				)
			}
			{/* <Text>[Tab]: switch between visualize and draw mode </Text>
			<Text>[Space] In draw mode, calculate the lines</Text>
			<Text>[Left / right arrow] In visualize mode, adjust sensitivity</Text> */}
		</Controls>
		<Source href={projectsData[name].link}> Source Code </Source>
        <ProjectName>About this project</ProjectName>
        <ProjectDesc>
			{projectsData[name].description}
        </ProjectDesc>
     </Column>
     <Helmet>
              <script src={projectsData[name].src}/>

          </Helmet>
          {/* <button onClick={() =>console.log(window.TEST)}/> */}
        </Container>

    )
}
const Container = styled.div`
	display:flex;
	flex-direction: column;
	gap: 10px;

	width: 100%;
	font-family: 'Iceland';
	align-items: center;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
	font-family: Iceland;
	gap: 10px;
	padding: 0px 50px;
	width: 90%;
`

const Text = styled.div`
	display:flex;
	padding: 10px;
`
const Source = styled.a`
	display:flex;
	cursor: pointer;
	color: #B54E4E;
`

const Canvas = styled.canvas`
    background: black;
    width: 100%;
    border: 20px solid #78787863;
    // aspect-ratio: 1/1;
    // height:80%;
	max-height: 580px;
	@media (max-device-width : ${props =>props.theme.mobile}px) {
		max-width: 80%;
	}
`

const ProjectName = styled.div`
    display: flex;
    color: ${props => props.theme.colors.secondary};
	font-size: 48px;
	text-align: center;
	@media (max-device-width : ${props => props.theme.mobile}px)
	{
		font-size: 36px;
	}
`

const Controls = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
    color: ${props => props.theme.colors.secondary};
    padding: 10px;
	width: calc(100% + 20px);
    // align-self:baseline;
	background: #312F2F;
	justify-content: flex-start;
`

const ProjectDesc = styled.div`
    display: flex;
	color: #8D7E7E;
	font-size: 36px;
	text-align: center;
	margin: 50px 0px;
	white-space: pre-wrap;
	@media (max-device-width : ${props => props.theme.mobile}px)
	{
		font-size: 24px;
	}
`
