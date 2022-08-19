import React, {useRef} from 'react'
import styled from "styled-components"

import Intro from '../components/HomePage/Intro'
import Resume from '../components/HomePage/Resume'
import Showcase from '../components/HomePage/Showcase'

export const Home = ({ children }) =>
{
	const introRef= useRef(null);
	const resumeRef= useRef(null);
	const showRef= useRef(null);

	const doScroll = (ref) =>
	{
		console.log(ref)
		ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

    return (
		<Container>
			<div style={{position:"fixed", zIndex: "42"}}>
			<button onClick={()=> doScroll(introRef)}> to intro</button>
			<button onClick={()=> doScroll(resumeRef)}> to resume</button>
			<button onClick={()=> doScroll(showRef)}> to showcase</button>

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
