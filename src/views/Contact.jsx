import React, {useRef, useState} from 'react'
import styled from "styled-components"
import emailjs from '@emailjs/browser';

export const Contact = ({ children }) =>
{
	const form = useRef();
	const [wasSent, setSent] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

	// console.log(form.current)
    emailjs.sendForm('service_9lrdvcf', 'template_7rf9ujo', form.current, '_4EjZgE1dMISt_e9D')
      .then((result) => {
          console.log(result.text);
		form.current.reset()
		setSent(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
	<Container>
		<Header> Want to get in touch? </Header>
		<Text> Email me</Text>
		{
			wasSent ?
			<Thanks> <Text style={{color:"black"}}> Your email has been sent.</Text>
				<Text style={{color:"black"}}> Thank you!</Text>
			</Thanks>
			:
			<StyledForm ref={form} onSubmit={sendEmail}>
				{/* <label>Your email</label> */}
				<TextInput type="email" name="user_email" placeholder='your_email@email.com' />
				{/* <label>Email</label> */}
				<TextInput type="text" name="email_subject" placeholder='Program me a sheep!'/>
				{/* <label>Message</label> */}
				<TextArea name="message" placeholder='If you please--Program me a sheep'/>
				<Send style={{cursor:"pointer"}} type="submit" value="Send" />
			</StyledForm>
		}
		<Text> Or reach out here : </Text>
		<Text><b>Discord</b> : Quark#2769 </Text>
		<Text><b>Whatsapp</b> : (786)602-0249</Text>
		<Text><b>Text</b> : (786)602-0249</Text>
	</Container>
  );
}

const Container = styled.div`
	display:flex;
	flex-direction: column;
	gap: 10px;

	width: 100%;
	font-family: 'Iceland';
	align-items: center;
`

const Thanks = styled.div`
	display:flex;
	flex-direction: column;
	background-color: #D9D9D9;
	border: 3px solid black;
	// height: 50px;
	gap: 10px;
	font-size: 29px;
	font-family: Iceland;
	align-items: center;
	padding: 55px 65px;
	color: black;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 21px;
		padding: 20px 16px;
	}
`

const Header = styled.div`
	display:flex;
	color ${props => props.theme.colors.secondary};
	font-size: 80px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 29px;
	}
`
const Text = styled.div`
	display:flex;
	color ${props => props.theme.colors.secondary};
	font-size: 36px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 21px;
	}
`

const StyledForm = styled.form`
	display:flex;
	flex-direction: column;
	gap: 10px;
	background-color: ${props => props.theme.colors.shadow || "grey"};
	width: 90%;
	padding: 10px;
	border: 10px solid  ${props => props.theme.colors.primary || "grey"};
`

const TextInput = styled.input`
	display:flex;
	background-color: #D9D9D9;
	border: 3px solid black;
	height: 50px;
	font-size: 29px;
	font-family: Iceland;
	padding: 0px 5px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 21px;
	}
`

const Send = styled.input`
	display:flex;
	background-color: #D9D9D9;
	border: 3px solid black;
	height: 50px;
	font-size: 29px;
	font-family: Iceland;
	&&:hover {
		background-color: ${props => props.theme.colors.highlight};
	}
	&&:active {
		border: 1px solid black;
	}
`

const TextArea = styled.textarea`
	display:flex;
	background-color: #D9D9D9;
	min-height: 300px;
	border: 3px solid black;
	font-size: 29px;
	font-family: Iceland;
	padding: 0px 5px;
	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		font-size: 21px;
	}
`
