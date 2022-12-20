import React from 'react'
import styled from "styled-components"

import { Title } from '../components/StyledComponents'

import pdf from "../assets/Resume.pdf"

const Resume = ({ innerRef }) =>
{
	return (
		<Container >
			<Title style={{textAlign: "center", alignSelf:"center", height: "50px"}}>  </Title>
			<Title ref={innerRef} style={{textAlign: "center", alignSelf:"center", scrollMarginTop: "150px"}}>
					Resume
			</Title>
			<PDF id="resumepdf" src={pdf} frameborder="0" scrolling="yes" seamless="seamless"></PDF>
		</Container>
	)
}

export default Resume;

const Container = styled.div`
	display:flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	height: fit-content;
	min-height: 75vh;
`
const PDF = styled.iframe`
	display: block;
	width:90%;
	height: 75vh;
	margin:auto;
`
