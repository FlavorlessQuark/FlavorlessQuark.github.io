import React, {useState} from 'react'
import styled from "styled-components"

import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as Selector } from '../../assets/HUD/TopContainer.svg'
import { ReactComponent as Menu } from '../../assets/HUD/MenuContainer.svg'
import { ReactComponent as Separator } from '../../assets/HUD/MenuSeparator.svg'

import { ReactComponent as emailSVG} from "../../assets/icons/email.svg"
import { ReactComponent as githubSVG} from "../../assets/icons/github.svg"
import { ReactComponent as linkedinSVG} from "../../assets/icons/linkedin.svg"
import { ReactComponent as Xicon} from "../../assets/icons/X.svg"


import { useDisplaySize } from '../useDisplaySize'
import { styles } from '../../styles'

export const NavBar = () =>
{
	const location = useLocation().pathname
	const navigate = useNavigate();
    const [show , setShow] = useState(false)
    const options = ["home", "projects", "contact"]
	const links = [["https://github.com/FlavorlessQuark", <Github />], ["https://www.linkedin.com/in/johanna-josephine-7a91b01b6", <Linkedin/>], ["mailto:jjosephi.dev@google.com", <Email/>]]

	const {width} = useDisplaySize();

	if (width <= styles.mobile)
	{
		return (
		<Row show={show}>
			<RotatedDiv onClick={() => setShow(show ^ 1)}>
				<StyledMenu  />
				<Text> Menu </Text>
			</RotatedDiv>
			<Col>
				<StyledX  onClick={() => setShow(show ^ 1)}/>
				{
					options.map((elem) =>
						<OptionCol key={elem}>
							<TopOption selected={location === ("/" + elem)} onClick={() => {setShow(show ^ 1); navigate("/" + elem)}}> {elem}</TopOption>
							<StyledSeparator/>
						</OptionCol>
					)
				}
				<SocialRow>
					{
						links.map((elem) =>
						<a href={elem[0]} key={elem}>
						{elem[1]}
						</a>
						)
					}
				</SocialRow>
			</Col>
		</Row>

		)
	}
	else return (
		<>
		<TopContainer>
			{
				options.map((elem) =>
					location === ("/" + elem) ?
						<Selected key= {elem}>
							<StyledSelector/>
							<TopOption style={{position: "absolute", top: "-14px"}} > {elem}</TopOption>
						</Selected>
						:
						<TopOption key={elem} onClick={() => navigate("/" + elem)}> {elem}</TopOption>
				)
			}
		</TopContainer>
			<Line/>
		</>
	)

}

const StyledX = styled(Xicon)`
	display: flex;
	align-self: end;
	margin: 15px;
	cursor: pointer;
`
const Github = styled(githubSVG)`
    display: flex;

`
const Linkedin = styled(linkedinSVG)`
    display: flex;

`
const Email = styled(emailSVG)`
    display: flex;

`


const SocialRow = styled.div`
	display:flex;
	flex-direction: row;
	gap: 25px;
`

const Selected = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledMenu = styled(Menu)`
	display:flex;
	// transform: rotate(90deg);
`
const StyledSeparator = styled(Separator)`
	position: absolute;
`

const Line = styled.div`
	position: fixed;
	width: 100vw;
	height: 75px;
	 background: ${props => props.theme.colors.background};
	//  background: rgb(16,19,21);
	 box-shadow: 0 0 11px 7px #101315;
	 z-index: 1;
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
	z-index: 43;
`

const TopOption = styled.div`
	display: flex;
	color:${props => props.theme.colors.highlight};
	font-size: 34px;
	z-index: 3;
	position: relative;
	text-transform: capitalize;
	cursor:pointer;
	${props =>props.selected ? "text-decoration: underline": ""};
`

const StyledSelector = styled(Selector)`
	display: flex;
	z-index: 1;
	position: relative;
	top: -50%;
	margin: 0px -60px;
`
const Col = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width:100%;
	gap: 110px;
	top: 0px;
	position: absolute;
`
const OptionCol = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width:100%;
`
const Row = styled.div`
	display:flex;
	flex-direction: row;
	position: fixed;
	color:${props => props.theme.colors.highlight};
	height: 100vh;
	align-items: center;
	background: #101315;
	right: 0px;
	width: 100%;
	z-index: 1;
	font-family: Iceland;
	right: ${props => props.show ? "0%" : "-100%"};
	transition: all 0.5s;
	z-index:1;
`
const Text = styled.div`
	display:flex;
	position: absolute;
	top: -4px;
	font-size: 28px;
`

const RotatedDiv = styled.div`
	display:flex;
	transform: rotate(90deg);
	position: absolute;
	justify-content: center;
	top: 70px;
	left: -82px;
`
