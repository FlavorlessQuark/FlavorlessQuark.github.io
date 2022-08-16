import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import { Footer } from './Footer'
import { NavBar } from './NavBar'
import { styles } from '../../styles'

import { ReactComponent as right } from "../../assets/HUD/HUDRight.svg"
import { ReactComponent as top } from "../../assets/HUD/HUDTop.svg"
import { ReactComponent as left } from "../../assets/HUD/HUDLeft.svg"

export const Baseview = ({ children }) =>
{
    return (
    <ThemeProvider theme={styles}>
        <Container>
            <Background/>
            {/* <HUD/> */}
            <NavBar/>
			<HUD>
				<HUD_Left/>
				<HUD_Top/>
				<HUD_Right/>
			</HUD>
            <PageContent>
                {children}
            </PageContent>
            <Footer/>
        </Container>
    </ThemeProvider>
    )
}

const Container = styled.div`
    display:flex;

    width: 100vw;
    height: 100vh;
`

const HUD = styled.div`
	display:flex;
	flex-direction: row;
	position:fixed;
	width: 100%;
`

const HUD_Left = styled(left)`
	display:flex;
	top: -3px;
	left: -4px;
	flex-shrink: 0;
	position: relative;
	margin-right: -6px;
`
const HUD_Top = styled(top)`
	display:flex;
	top: -3px;
	position:relative;
	width: 101%;
`
const HUD_Right = styled(right)`
	display:flex;
	right: -1px;
	top: -3px;
	flex-shrink: 0;
	position:relative;
	margin-left: -5px;
`

const Background = styled.div`
    display:flex;

    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    background-color: ${props => props.theme.colors.background || "grey"};
    // background-repeat: no-repeat;
    // background-size: cover;
    // position: fixed;
    // top: -4px;
    // left: -4px;

`
// const Background = styled.div`
//     display:flex;

//     width: 100%;
//     height: 101%;
//     position: fixed;
//     z-index: -1;
//     background-color: ${props => props.theme.colors.background || "grey"};
//     background-image: url(${hu});
//     background-repeat: no-repeat;
//     background-size: cover;
//     position: fixed;
//     top: -4px;
//     left: -4px;

// `

const PageContent = styled.div`
    display: flex;
    width: 100%;
    padding: 100px 100px 0px 100px;
`
