import styled from 'styled-components'

import { ReactComponent as C } from '../assets/icons/C.svg'
import { ReactComponent as Python } from '../assets/icons/Python.svg'
import { ReactComponent as JS } from '../assets/icons/JS.svg'
import { ReactComponent as Reactjs } from '../assets/icons/Reactjs.svg'
import { ReactComponent as Nodejs } from '../assets/icons/Nodejs.svg'
import { ReactComponent as Mongo } from '../assets/icons/Mongo.svg'
import { ReactComponent as SDL } from '../assets/icons/SDL.svg'
import { ReactComponent as Sol } from '../assets/icons/Solidity.svg'

import { Link } from '../components/StyledComponents'

import BDLogo from "../assets/projects/bd_logo.png"
import LBLogo from "../assets/projects/Lootbox_logo.png"
import FDFLogo from "../assets/projects/fdf_logo.svg"
import RayLogo from "../assets/projects/ray_logo.svg"
import EdgeLogo from "../assets/projects/edge.jpg"
import SDLXLogo from "../assets/projects/SDL_logo.png"
import FractLogo from "../assets/projects/fractal_logo.jpg"
import SMHDLogo from "../assets/projects/smhd_logo.png"
import RADLogo from "../assets/projects/rad_logo.svg"

const Container = styled.div`
	display: flex;
	flex-direction: column;
`


const Text = styled.p
`
	display: flex;
`

const List = styled.ul`
	// display:list-item;
// list-style-position:outside;
	// flex-direction: column;
	// list-style-type:  "►";
	// gap: 10px;
	// display: list-item;
	text-align: left;
	margin-top: -5px;

`

const ListItem = styled.li`
	// display: flex;
	// &&:marker {
	// 	color: red;
	// 	content: "►";
	// }
`

export const projectsData = {
	"edgeDetect" : {
		hasDemo: true,
		name : "Edge Detection",
		short: "Detects straight edges from drawings",
		controls: [
			["Tab", "switch between visualize and draw mode"],
			["Space"," In draw mode, calculate the lines"],
			["Left / right arrow", "In visualize mode, adjust sensitivity"]
			],
		link: "https://github.com/LumenNoctis/Shape_detect",
		description: <Container>
			<Text> Implementation of the Hough transform algorithm to find straight edges in a picture</Text>
			<Text> Demo available <Link href="/projects/edgeDetect"> here </Link> </Text>
			<Text> Features :</Text>
			<List>
				<ListItem> Adjustable parameters for fine tuning</ListItem>
				<ListItem> Visualizer shows Hough space and line coordinate</ListItem>
				<ListItem> Uses my own <Link href="https://github.com/FlavorlessQuark/SDL_Tools"> game engine </Link> </ListItem>
			</List>
		</Container>,
		module:"draw",
		logo: EdgeLogo,
		lang : [<C key="C"/>, <SDL key="SDL"/>],
	},
	"SDLX": {
		name: "SDLX",
		logo: SDLXLogo,
		short: "Mini game engine wrapped around SDL.\n Includes buttons, animations, rendering and collisions",
		link : "https://github.com/FlavorlessQuark/SDL_Tools",
		description: <Container>
			<Text> This project is ongoing and updated as I need. New features get added when I need them for other projects, and in turn this "engine" is used in almost every C project as it is very convenient</Text>
			<Text> Current features:</Text>
			<List>
				<ListItem> FPS regulator for smooth and uniform update loops</ListItem>
				<ListItem> Input map</ListItem>
				<ListItem> 2D sprite and sprite sheets</ListItem>
				<ListItem> Layerer render queue </ListItem>
				<ListItem> CSS like alignment system </ListItem>
				<ListItem> Buttons - triggerable with mouse and keyboard -</ListItem>
			</List>
		</Container>,
		lang : [<C key="C"/>, <SDL key="SDL"/>],
	},
	"Renderer": {
		name: "3D renderer",
		hasDemo: true,
		logo: FDFLogo,
		short: "Renders .obj files",
		description: <Container>
			<Text> This project once fully finished and optimized will be added to my  game engine as its 3D renderer. I am planning to also add .fbx support </Text>
			<Text> Demo available <Link href="/projects/renderer"> here </Link> </Text>
			<Text> Features :</Text>
			<List>
				<ListItem> Fixed point optimization </ListItem>
				<ListItem> Supports rotation, scaling </ListItem>
				<ListItem> "Trace" functionality traces the path of each vertex. Can be toggled off and erased</ListItem>
			</List>
		</Container>,
		link : "https://github.com/LumenNoctis/TinyRenderer",
		lang : [<C key="C"/>, <SDL key="SDL"/>],
	},
	"AoC": {
		name: "Advent of Code",
		short: "Yearly programming contest",
		description: <Container>
			<Text> Advent of Code is a yearly rpogramming contest, where a new two part problems is revealed daily from the 1st to the 25th of december. The problems cover many subjects and increase in difficulty </Text>
			<Text> Completion progress: </Text>
			<List>
				<ListItem> 2015 : C    - 50/50</ListItem>
				<ListItem> 2016 : C    - 41/50</ListItem>
				<ListItem> 2017 : C    - 30/50</ListItem>
				<ListItem> 2018 : Py   - 8/50</ListItem>
				<ListItem> 2019 : N/A </ListItem>
				<ListItem> 2020 : C/Py - 50/50</ListItem>
				<ListItem> 2021 : Py   - 5/50 </ListItem>
				<ListItem> 2022 : N/A </ListItem>
			</List>
		</Container>,
		link : "https://github.com/FlavorlessQuark/Advent_of_Code",

		lang : [<C key="C"/>, <Python key="Py"/>],
	},
	"BD": {
		name: "BlockDuelers",
		isWork:true,
		logo:BDLogo,
		short: "NFT game website",
		description: <Container>
			<Text> Block duelers is a site that gives utility to nfts by allowing them to be used in 1 vs 1 battles. Nfts have stats that are retained between trades and can level up. The site also features it's own collection and lootbox </Text>
			<Text> My role :</Text>
			<List>
				<ListItem> FullStack/ Blockchain + team lead</ListItem>
				<ListItem> Design and implement cross chain feature</ListItem>
				<ListItem> Design and implement "partner" feature which gives nfts from a partnered collection stats and the ability to battle. This system also computes and keeps track of the current owners of each NFT</ListItem>
				<ListItem> Refactor and optimize front and back end </ListItem>
				<ListItem> Code reviews </ListItem>
			</List>
		</Container>,
		lang : [<JS key="js"/>, <Reactjs key="react"/>, <Nodejs key="node"/>, <Mongo key="mongo"/>],
	},
	"LB": {
		name: "Lootbox",
		isWork:true,
		logo: LBLogo,
		short: "NFT website",
		description: <Container>
			<Text> NFT Lootbox is an NFT collection website where users can open lootboxes to get random NFTs as well as trade them for better NFTs </Text>
			<Text> My role :</Text>
			<List>
				<ListItem> Create an image upload API using Nodejs and AWS</ListItem>
				<ListItem> Create and admin interface to create NFTs and NFT collections to add to lootboxes </ListItem>
				<ListItem> Create a feature that let's user trade some amount of NFTs for higher rairity ones</ListItem>
			</List>
		</Container>,
		lang : [<JS key="js"/>, <Reactjs key="react"/>, <Nodejs key="node"/>, <Mongo key="mongo"/>],
	},
	"SMHD": {
		name: "SuperMegaHyperDoge",
		isWork:true,
		logo: SMHDLogo,
		short: "NFT game website",
		description: <Container>
			<Text> I worked on a small part of the website which implements a Space Invaders like game where users pay tokens to play and earn tokens based on their leaderboard position </Text>
			<Text> My role :</Text>
			<List>
				<ListItem> Frontend + team lead</ListItem>
				<ListItem> Designed and implement game loop </ListItem>
				<ListItem> Co-designed anti-cheat system </ListItem>
			</List>
		</Container>,
		lang : [<JS key="js"/>, <Reactjs key="react"/>],
	},
	"Fract": {
		name: "Fractals",
		isWork:false,
		logo: FractLogo,
		short: "Fractal visualizer. Supports colors, movements and multiple fractal types",
		description: <Container>
			<Text> A better version of a school project </Text>
			<Text> Features :</Text>
			<List>
				<ListItem> Switch between Gradient and sine coloring</ListItem>
				<ListItem> Color parameters for sine coloring </ListItem>
				<ListItem> Some fractal's parameters can be changed by moving the mouse (ex: Julia) </ListItem>
				<ListItem> translation and zoom </ListItem>
			</List>
		</Container>,
		link : "https://github.com/LumenNoctis/Fractals",
		lang : [<C key="c"/>, <SDL key="SDL"/>],
	},
	"RM": {
		name: "Raymarcher",
		isWork:false,
		logo:RayLogo,
		short: "Raymarcher renderer. Supports mesh addition and substraction, as well as rotation, translation, light and shadows",
		description: <Container>
			<Text> Unlike other 3D rendering method, raymarchers use mathematical functions (SDF) to determine the shape of an object. </Text>
			<Text>Every bit of math in this project was figured out by hand. </Text>
			<Text> Features :</Text>
			<List>
				<ListItem> Cube and Sphere SDF</ListItem>
				<ListItem> Modular system allows for the easy addition of new SDFs</ListItem>
				<ListItem> Supports shadows and lighting. </ListItem>
			</List>
		</Container>,
		link : "https://github.com/LumenNoctis/RayMarching",
		lang : [<C key="c"/>, <SDL key="SDL"/>],
	},
	"RAD": {
		name: "Rad NFT marketplace",
		isWork:true,
		logo:RADLogo,
		short: "NFT marketplace ",
		description: <Container>
			<Text> Designed and implemented a NFT marketplace for RAD. </Text>
			<Text> My role :</Text>
			<List>
				<ListItem> smart contract (solidity)+ team lead </ListItem>
				<ListItem> Simple offer : user puts NFT for sale</ListItem>
				<ListItem> Auction : User puts nft for sale at a price. Bidders must match or exceed set price. Highest bidder wins NFT at the end of the auction </ListItem>
				<ListItem> Passive offer : user offers to buy an nft that isn't for sale </ListItem>
				<ListItem> Implements the<Link href="https://eips.ethereum.org/EIPS/eip-2981"> EIP-2981 standard</Link> for royalties </ListItem>
			</List>
		</Container>,
		lang : [<Sol key="sol"/>],
	}
}


export const showcaseProjects = [ "BD", "LB", "edgeDetect", "Renderer", "SDLX"]
