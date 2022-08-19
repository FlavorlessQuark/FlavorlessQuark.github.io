import React from 'react'
import styled, { ThemeProvider } from "styled-components"

import { Title } from '../StyledComponents'

import pdf from "../../assets/Resume.pdf"

const Resume = ({ innerRef }) =>
{
	return (
		<Container ref={innerRef}>
			<Title style={{textAlign: "center", alignSelf:"center"}}>
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
	align-items: flex-start;
	justify-content: space-between;
	height: fit-content;
	scroll-margin-top: 130px;
`
const PDF = styled.iframe`
	display: block;
	width:90%;
	height: 50vh;
	margin:auto;
`
