import { ReactComponent as C } from '../assets/icons/C.svg'
import { ReactComponent as Python } from '../assets/icons/Python.svg'
import { ReactComponent as JS } from '../assets/icons/JS.svg'
import { ReactComponent as Reactjs } from '../assets/icons/Reactjs.svg'
import { ReactComponent as Nodejs } from '../assets/icons/Nodejs.svg'
import { ReactComponent as Mongo } from '../assets/icons/Mongo.svg'

import BDLogo from "../assets/projects/BD/bd_logo.png"
import LBLogo from "../assets/projects/Lootbox/Lootbox_logo.png"
import FDFLogo from "../assets/projects/fdf/fdf_logo.svg"
import RayLogo from "../assets/projects/raymarcher/ray_logo.svg"
import EdgeLogo from "../assets/projects/edge.jpg"


import sphere from "../assets/projects/raymarcher/sphere.png"
import spherecube from "../assets/projects/raymarcher/spherecube.png"

// import burningship from "../assets/projects/fractals/burningship.gif"
import styled from 'styled-components'

export const projectsData = {
	"edgeDetect" : {
		show: true,
		isInteractive: true,
		name : "Edge Detection",
		short: "Detects straight edges from drawings",
		description : " \
This is my first computer vision project. It took about 4 weeks to make, and most of this time was spent figuring out the math behind it and constructing the visualizer\n\
This web version is quite a bit slower and jankier than the executable so I encourage you to run the executable by clicking the 'source code' link above. This project was programmed with C and SDL2 and compiled fore the web using the emscripten compiler \n\n \
Implementation : \n\n \
This is a computer vision program that is used to detect edges. The user will draw something and the program will attempt to find straight edges within the picture\n\n \
This specific algorithm uses the Hough transform to check for lines.\n\
When a user draws, we capture the mouse input. Because knowing what pixels have been written to screen is an expensive operation in SDL2, we manually calculate the path of the mouse since the last input capture.\n\
For each point in this path we calculate the hough transform. The hough transform works as follows: \n\
For a given point P(x,y) we graph every line that may pass throught it. We use polar cooridnates to avoid issues with slopes and potential division by 0 when the line is vertical. \n\n\
The formula for this line is :\n\n  x * cos(t) + y * sin(t) = d; \n\n Where d is the distance to the origin and t is the angle of the perpendicular line passing through the origin\n\n\
For a given point P(x,y) we graph every possible distance (d) from the origin (within a range) for every angle (t) \n\
We graph all the points like this and then use a divide and conquer algorithm to find all the local maxmiums (above a certain threshold). Each of these maximums represent the distance and angle of an edge.\n \
		",
		controls: [
			["Tab", "switch between visualize and draw mode"],
			["Space"," In draw mode, calculate the lines"],
			["Left / right arrow", "In visualize mode, adjust sensitivity"]
			],
		link: "https://github.com/LumenNoctis/Shape_detect",
		module:"draw",
		logo: EdgeLogo,
		src: "https://cdn.jsdelivr.net/gh/LumenNoctis/Shape_detect/draw.js",
		dependencies : ["https://cdn.jsdelivr.net/gh/LumenNoctis/Shape_detect/draw.data", "https://cdn.jsdelivr.net/gh/LumenNoctis/Shape_detect/draw.js.mem"],
		lang : [<C key="C"/>],
	},
	"SDLX": {
		show: true,
		isInteractive: false,
		name: "SDLX",

		short: "Mini game engine wrapped around SDL.\n Includes buttons, animations, rendering and collisions",
		description:"SDLX is a mini game engine using SDL2. The main purpose was to make it easier to develop graphical applications.\n\
		 This version includes support for animations, simple collisions, rendering, FPS cap and buttons.\n\
		 The repository includes documentation and a simple code example that showcases the simplicity of using this library\
		 ",
		link : "https://github.com/FlavorlessQuark/old_SDL_Tools",
		lang : [<C key="C"/>],
	},
	"FdF": {
		show: true,
		name: "3D renderer",
		isInteractive: true,
		module:"renderer",
		logo: FDFLogo,
		short: "Renders .obj files",
		link : "https://github.com/LumenNoctis/TinyRenderer",
		lang : [<C key="C"/>],
	},
	"AoC": {
		show: false,
		name: "Advent of Code",
		isInteractive: false,
		short: "Yearly programming contest",
		link : "https://github.com/FlavorlessQuark/Advent_of_Code",
		lang : [<C key="C"/>, <Python key="Py"/>],
	},
	"BD": {
		show: true,
		name: "BlockDuelers",
		isInteractive: false,
		isWork:true,
		logo:BDLogo,
		short: "NFT game website",
		link : null,
		description: "September 2021 - February 2022 \n\nBlockDuelers is a website whose main purpose is to give utility to NFTs by letting users battle with them \n\n \
We used a combination of Node and Mongoose for the backend, React for the frontEnd and ethers for anything web3 related.\n\
\nMy roles:\n\n\
Team lead\n\
FullStack\n\
Web3\n\
\nMy responsibilities :\n\n\
Providing tasks and guidance to the team\n\
Reviewing and approving changes\n\
Designing and discussing features with the client and implementing them\n\
Testing and deploying changes\n\
\n\nMy contributions: \n\n\
Reworked parts of the backend to optimize data fetching and saving\n\n\
Reworked parts of the frontend to reduce loading time\n \n\
Refactored legacy code\n \n\
Added compatibility with other (EVM based) blockchain\n \n\
Added ability to utilise any NFT from any (partnered) smart contract on an EVM chain\n \n\
Designed system to keep our databases synchronised to the blokchains\n \n\
Designed new backend architecture to go with the above system \n \n\
Rewrote database and backend / frontend to use a new system needed for the above changes to work and work more efficiently\n \n\
Wrote and implemented web3 functions \n \n\
Worked with user feedback to fix bugs and patch security issues \
",
		lang : [<JS key="js"/>, <Reactjs key="react"/>, <Nodejs key="node"/>, <Mongo key="mongo"/>],
		images : []
	},
	"LB": {
		show: true,
		name: "Lootbox",
		isInteractive: false,
		isWork:true,
		logo: LBLogo,
		short: "NFT game website",
		link : null,
		description: "September 2021 - February 2022 \n\nBlockDuelers is a website whose main purpose is to give utility to NFTs by letting users battle with them",
		lang : [<JS key="js"/>, <Reactjs key="react"/>, <Nodejs key="node"/>, <Mongo key="mongo"/>],
		images : []
	},
	"Fract": {
		show: true,
		name: "Fractals",
		isInteractive: false,
		isWork:false,
		short: "Fractal visualizer. Supports colors, movements and multiple fractal types",
		description: "This is a remake of an old project I did as a student. \n\n\
This version improved the rendering and smoothness of the displayed fractal. Two color modes are available, gradient and sine coloring.\n\n\
The first uses my own gradient function which precomputes the gradient and saves them in a struct\n\
The sine coloring method uses the sine function with 3 parameters (thayt can be modified at runtime) to calclute the R,G,B values\n\n\
Some fractals like the Julia sets which is not static, can have their parameters modified by mouse movement",
		link : "https://github.com/LumenNoctis/Fractals",
		lang : [<C key="c"/>],
		images : []
	},
	"RM": {
		show: true,
		name: "Raymarcher",
		isInteractive: false,
		isWork:false,
		logo:RayLogo,
		short: "Raymarcher renderer. Supports mesh addition and substraction, as well as rotation, translation, light and shadows",
		link : "https://github.com/LumenNoctis/RayMarching",
		description:
"Raymarching is a technique that consists of using mathematical equations called signed dstance functions (or SDFs for short) to draw objects to the screen\n \
In this implementation, each pixel is given a ray to 'march' trhough.\n\
At each step, the algorithm calculates the distance D to the closest object and steps forward in its vector in a step equal D.\n \
Once the distance is small enough or the number of iterations is too high, the algorithm returns\n\n \
Lighting is calculated by aproximating the derivative of the object's SDF at the point where te object was hit by the ray.\n \
This gives us the normal. The lighting coefficient is then just a mater of taking the dot product of the light and normal vector and normalizing it.",
		lang : [<C key="c"/>],
		images : [sphere, spherecube]
	}
}


export const showcaseProjects = [ "BD", "LB", "edgeDetect", "FdF", "SDLX"]
