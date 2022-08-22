import React from 'react'
import styled from "styled-components"
import { ReactComponent as emailSVG} from "../../assets/icons/email.svg"
import { ReactComponent as githubSVG} from "../../assets/icons/github.svg"
import { ReactComponent as linkedinSVG} from "../../assets/icons/linkedin.svg"

import { ReactComponent as hudContainer} from "../../assets/HUD/IconContainer.svg"
// import Background from "../../assets/HUD/IconContainer.svg"

export const Footer = () =>
{
    const links = [["https://github.com/FlavorlessQuark", <Github />], ["https://www.linkedin.com/in/johanna-josephine-7a91b01b6", <Linkedin/>], ["mailto:jjosephi.dev@google.com", <Email/>]]

    return (
        <Container>
            <Bg/>
            <SocialContainer>
                {
                    links.map((elem) =>
					<a href={elem[0]} key={elem[0]}>
                    {elem[1]}
					</a>
                    )
                }
            </SocialContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;

    position: fixed;
    left: 0;
    bottom: 0;

    width: 100px;

	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		left: -57px;
	}
	z-index: 1;
`

const Bg = styled(hudContainer)`
	position: absolute;
	z-index: -1;
	top: -35%;
	left: -3px;
`

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
	position: relative;
	align-items: end;
	justify-content: space-around;
	top: -13px;
	left: 23px;

	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		left: 57px;
	}
`
const Github = styled(githubSVG)`
    display: flex;
    width: 84%;
    // padding: 5% 0px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		width: 60%;
	}
`
const Linkedin = styled(linkedinSVG)`
    display: flex;
    width: 84%;
    // padding: 5% 0px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		width: 60%;
	}
`
const Email = styled(emailSVG)`
    display: flex;
    width: 84%;
    // padding: 5% 0px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		width: 60%;
	}
`
