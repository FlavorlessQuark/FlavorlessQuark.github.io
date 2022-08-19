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
		<Container>
			<div style={{position:"fixed", zIndex: "42"}}>

			{ !isIntroVisible && <button onClick={()=> doScroll(introRef)} > to intro</button>}
			{ !isResumeVisible && <button onClick={()=> doScroll(resumeRef)}> to resume</button>}
			{ !isShowVisible && <button onClick={()=> doScroll(showRef)}> to showcase</button>}

			</div>
			<Intro innerRef={introRef}/>
			<Resume innerRef={resumeRef}/>
			<Showcase innerRef={showRef}/>
		</Container>
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
