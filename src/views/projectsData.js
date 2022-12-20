import { ReactComponent as C } from '../assets/icons/C.svg'
import { ReactComponent as Python } from '../assets/icons/Python.svg'
import { ReactComponent as JS } from '../assets/icons/JS.svg'
import { ReactComponent as Reactjs } from '../assets/icons/Reactjs.svg'
import { ReactComponent as Nodejs } from '../assets/icons/Nodejs.svg'
import { ReactComponent as Mongo } from '../assets/icons/Mongo.svg'
import { ReactComponent as SDL } from '../assets/icons/SDL.svg'

import BDLogo from "../assets/projects/BD/bd_logo.png"
import LBLogo from "../assets/projects/Lootbox/Lootbox_logo.png"
import FDFLogo from "../assets/projects/fdf/fdf_logo.svg"
import RayLogo from "../assets/projects/raymarcher/ray_logo.svg"
import EdgeLogo from "../assets/projects/edge.jpg"
import SDLXLogo from "../assets/projects/SDLX/SDL_logo.png"
import FractLogo from "../assets/projects/fractals/fractal_logo.jpg"
import SMHDLogo from "../assets/projects/smhd/smhd_logo.png"

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
		module:"draw",
		logo: EdgeLogo,
		lang : [<C key="C"/>, <SDL key="SDL"/>],
	},
	"SDLX": {
		name: "SDLX",
		logo: SDLXLogo,
		short: "Mini game engine wrapped around SDL.\n Includes buttons, animations, rendering and collisions",
		link : "https://github.com/FlavorlessQuark/SDL_Tools",
		lang : [<C key="C"/>, <SDL key="SDL"/>],
	},
	"Renderer": {
		name: "3D renderer",
		hasDemo: true,
		logo: FDFLogo,
		short: "Renders .obj files",
		link : "https://github.com/LumenNoctis/TinyRenderer",
		lang : [<C key="C"/>, <SDL key="SDL"/>],
	},
	"AoC": {
		name: "Advent of Code",
		short: "Yearly programming contest",
		link : "https://github.com/FlavorlessQuark/Advent_of_Code",
		lang : [<C key="C"/>, <Python key="Py"/>],
	},
	"BD": {
		name: "BlockDuelers",
		isWork:true,
		logo:BDLogo,
		short: "NFT game website",
		lang : [<JS key="js"/>, <Reactjs key="react"/>, <Nodejs key="node"/>, <Mongo key="mongo"/>],
	},
	"LB": {
		name: "Lootbox",
		isWork:true,
		logo: LBLogo,
		short: "NFT game website",
		description: "September 2021 - February 2022 \n\nBlockDuelers is a website whose main purpose is to give utility to NFTs by letting users battle with them",
		lang : [<JS key="js"/>, <Reactjs key="react"/>, <Nodejs key="node"/>, <Mongo key="mongo"/>],
	},
	"SMHD": {
		name: "SuperMegaHyperDoge",
		isWork:true,
		logo: SMHDLogo,
		short: "NFT game website",
		description: "September 2021 - February 2022 \n\nBlockDuelers is a website whose main purpose is to give utility to NFTs by letting users battle with them",
		lang : [<JS key="js"/>, <Reactjs key="react"/>],
	},
	"Fract": {
		name: "Fractals",
		isWork:false,
		logo: FractLogo,
		short: "Fractal visualizer. Supports colors, movements and multiple fractal types",
		link : "https://github.com/LumenNoctis/Fractals",
		lang : [<C key="c"/>, <SDL key="SDL"/>],
	},
	"RM": {
		name: "Raymarcher",
		isWork:false,
		logo:RayLogo,
		short: "Raymarcher renderer. Supports mesh addition and substraction, as well as rotation, translation, light and shadows",
		link : "https://github.com/LumenNoctis/RayMarching",
		lang : [<C key="c"/>, <SDL key="SDL"/>],
	}
}


export const showcaseProjects = [ "BD", "LB", "edgeDetect", "Renderer", "SDLX"]
