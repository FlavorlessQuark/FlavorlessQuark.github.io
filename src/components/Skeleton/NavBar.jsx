import React, {useState} from 'react'
import styled, { ThemeProvider } from "styled-components"
import { styles } from '../../styles'

import { ReactComponent as Selector } from '../../assets/HUD/TopContainer.svg'
import SelectorImg from '../../assets/HUD/TopContainer.svg'

export const NavBar = () =>
{
    const [active, setActive] = useState("Projects");
    const [show , setShow] = useState(true)
    const options = {
        Home : "/",
        Projects:"",
        "Contact Me": "/",
    }
	return (
		<TopContainer>
			{
				Object.keys(options).map((elem) =>
					active === elem ?
						<Selected>
							<StyledSelector/>
							<TopOption style={{position: "absolute", top: "-14px"}} onClick={() => setActive(elem)}> {elem }</TopOption>
						</Selected>
						:
						<TopOption onClick={() => setActive(elem)}> {elem }</TopOption>
				)
			}

		</TopContainer>
	)
    // return (
    //     <Container show={show} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onClick={() => setShow(show ^ 1)}>
    //         <Delimeter/>
    //         <Arrow show={show}> &#8250; </Arrow>
    //         <OptionContainer >
    //             {
    //                 Object.keys(options).map((elem) =>
    //                     <>
    //                     <Option active={active === elem && show}  href={show ? options[elem] : "javascript:void(0)"} onMouseEnter={() => setActive(elem)}>{elem} </Option>
    //                     </>
    //                 )
    //             }
    //         </OptionContainer>
    //     </Container>
    // )
}

const Selected = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const TopContainer = styled.div`
	display: flex;
	flex-direction: row;
	position:fixed;
	gap: 30px;
	left: 156px;
	top: 37px;
	z-index: 5;
	font-family: "Iceland";
`

const TopOption = styled.div`
	display: flex;
	color:${props => props.theme.colors.highlight};
	font-size: 34px;
	z-index: 3;
	position: relative;
`

const StyledSelector = styled(Selector)`
	display: flex;
	z-index: 1;
	position: relative;
	// position: absolute;
	top: -50%;
	// width: 80%;
	// left: 42px;
	// margin: 0px 5px;
	margin: 0px -60px;
`

const Arrow = styled.div`
    color:${props => props.theme.colors.secondary};
    display: ${props => props.show ? "none" : "flex"};
    font-size: 30px;
    position: absolute;
    left: -18px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;

    position: fixed;
    right: ${props => props.show ? "0" : "-105px"};
    top: 0;
    transition: right 0.2s;
`

const Delimeter = styled.div`
    display: flex;

    width: 3px;
    background: ${props => props.theme.colors.primary};
`

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 110px

`

const Option = styled.div`
    display: flex;

    padding: 13px;

    font-size: 18px;
    font-family: Source Code Pro;
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    width: calc(100% + ${props => props.active ? "18px" : "0px"});
    justify-content: center;
    align-items: center;
    background: transparent;
    ${props => props.active &&
        "border: 2px solid" + props.theme.colors.highlight + ";" +
        "justify-content: start;" +
        "background:" + props.theme.colors.shadow + ";"
    }
    transition: width 0.5s, justify-content 0.5s;
`
