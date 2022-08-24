import React, {useRef} from 'react'
import styled from "styled-components"

import Intro from '../components/HomePage/Intro'
import Resume from '../components/HomePage/Resume'
import Showcase from '../components/HomePage/Showcase'
import useIsVisible from '../components/useIsVisible'

export const Home = ({ children }) =>
{
	const introRef= useRef(null);
	const resumeRef= useRef(null);
	const showRef= useRef(null);
	const isIntroVisible = useIsVisible(introRef)
	const isResumeVisible = useIsVisible(resumeRef)
	const isShowVisible = useIsVisible(showRef)

	const doScroll = (ref) =>
	{
		console.log(ref)
		ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

    return (
		<>
		{/* <PageNavContainer >

			<Anchor active={!( isResumeVisible || isShowVisible)} onClick={()=> doScroll(introRef)} > Intro</Anchor>
			<Anchor active={!( isIntroVisible  || isShowVisible)} onClick={()=> doScroll(resumeRef)}> Resume</Anchor>
			<Anchor active={!( isResumeVisible || isIntroVisible)} onClick={()=> doScroll(showRef)}> Showcase</Anchor>

		</PageNavContainer> */}
		<Container>
			<Intro innerRef={introRef}/>
			<Resume innerRef={resumeRef}/>
			<Showcase innerRef={showRef}/>
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

const PageNavContainer = styled.div`
	display:flex;
	position: fixed;
	flex-direction: column;
	flex-direction: column;
	right: 0px;
	gap: 25px;
`

const Anchor = styled.div`
	display:flex;
	background: ${props => props.theme.colors.shadow};
	font-size: 20px;
	position: relative;
	padding: ${props => props.active ? "15px 51px" : "11px"};
	border: 2px solid  ${props => props.theme.colors.primary};
	color: ${props => props.active ? "red" : "white"};
	width: ${props => props.active ? "100%" : "75%"};
	left: ${props => props.active ? "0px" : "50px"};
	transition: all 0.5s;
`
