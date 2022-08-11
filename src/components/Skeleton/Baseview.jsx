import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import { Footer } from './Footer'
import { NavBar } from './NavBar'
import { styles } from '../../styles'

import { ReactComponent as hud } from "../../assets/HUD/Vector4.svg"
import hu from "../../assets/HUD/Vector4.svg"

export const Baseview = ({ children }) =>
{
    return (
    <ThemeProvider theme={styles}>
        <Container>
            <Background/>
            {/* <HUD/> */}
            <NavBar/>
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
const Background = styled.div`
    display:flex;

    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    background-color: ${props => props.theme.colors.background || "grey"};
    background-image: url(${hu});
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: -4px;
    left: -4px;

`

const HUD = styled(hud)`

`

const PageContent = styled.div`
    display: flex;
    width: 75%;
    margin: auto;
    height: 100%;
`