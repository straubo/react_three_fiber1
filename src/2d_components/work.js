import React from "react"
import '../styles/work.css'

// function Work() {
//     return (
//         <div>
//             <div classNameName='sectionHeader'>
//                 work
//             </div>
// 			{/* classNameName="siteBody" */}
// 			<div>
// 				Casey uses technologies such as THREE.js, Unity, React, 8th Wall, Spark AR and many others to make a wide range of colorful, impactful experiences. Some examples of his work:
// 				<br/> <br/>
// 				<span classNameName="subHeader">Web AR experiences (Xfinity)</span><br/>
// 				<a href="https://www.adweek.com/performance-marketing/xfinity-retail-is-putting-shoppers-on-tv-via-augmented-reality-qr-codes/" target="_blank">
// 					Entertainment/Peacock Promotion (Zappar)
// 				</a>
// 				<br/>
// 				<span>2021 Summer Olympics (8th Wall/Three.js)</span>
// 				<br/>
// 				<span>Sing 2/Happy Holidays (8th Wall/Three.js)</span><br/>
// 				<br/>
// 				<span classNameName="subHeader">Flat Web:</span>
// 				<br/>
// 				<a href="https://www.elephant.is" target="_blank">Elephant website (Webby-nominated)</a>
// 				<br/>
// 				<a href="https://www.marcjacobs.com/" target="_blank">Marc Jacobs</a>
// 				<br/>
// 				2022 Winter Olympics Promotion
// 				<br/> <br/>

// 			</div>
//         </div>
//     )
// }

function Work(props) {
	return (
	<div
		onScroll={(e) => {
			props.scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
		}}
	  	className="scroll"
	>
		<div style={{ height: "100vh" }}>
			<div className="dot">
				<h1>work</h1>
				casey has been working as a creative technologist and front-end developer for over five years. scroll down to learn more.
			</div>
		</div>
		<div style={{ height: "100vh" }}>
			<div className="dot">
				<h1>technologies</h1>
				Casey uses technologies such as THREE.js, Unity, React, 8th Wall, Spark AR and many others to make a wide range of colorful, impactful experiences. Some examples of his work:
			</div>
		</div>
		<div style={{ height: "200vh" }}>
			<div className="dot">
				<h1>Summer Olympics (2021)</h1>
				<h2>(mobile AR)</h2>
				Using 8th Wall and THREE.js, Casey led a team that created a mobile AR Photo Op experience -
				 customers could take a photo with the 2021 US Summer Olympians 
			</div>
		</div>
		<div style={{ height: "200vh" }}>
			<div className="dot">
				<h1>Winter Olympics (2022)</h1>
				<h2>(web)</h2>
				Using React and Next.js, Casey worked on a team to deliver a scrolljacked web experience that showcased new Xfinity projects
				and featured Comcast's Winter Olympics coverage.
			</div>
		</div>
		<div style={{ height: "200vh" }}>
			<div className="dot">
				<h1>Sing 2 / Happy Holidays (2021)</h1>
				<h2>(mobile AR)</h2>
				Using THREE.js and 8th Wall, Casey led a team to deploy a customizable Photo Op holiday card,
				featuring the cast of Sing 2
			</div>
		</div>
		<div style={{ height: "200vh" }}>
			<div className="dot">
				<h1>
					<a href="https://www.elephant.is" target="_blank" rel="noreferrer">elephant.is</a>
						

				</h1>
				<h2>(web)</h2>
				Casey worked on a team to bring the Webby-nominated Elephant website to life using React, Sass and a number
				of other front-end technologies.
			</div>
		</div>
		<div style={{ height: "200vh" }}>
			<div className="dot">
				<h1>
					<a href="https://www.marcjacobs.com/" target="_blank" rel="noreferrer">Marc Jacobs</a>
				</h1>
				<h2>(web)</h2>
				Casey used handlebars.js and other front-end technologies to bring the iconic
				designer's website to life.
			</div>
		</div>
		<div style={{ height: "200vh" }}>
			<div className="dot">
				<h1>Xfinity Retail Experiences</h1>
				<h2>(various techs: Unity, Javascript, Brightsign et al.)</h2>
				Casey played a massive role in developing and maintaining upwards of 
				50 evergreen experiences in Xfinity's premiere and flagship stores. In addition, he prototypes and maintains
				experiences that exist in their 500+ stores nationwide. 
			</div>
		</div>
		<div style={{ height: "200vh" }}>
			<div className="dot">
				<h1>
					<a href="https://www.adweek.com/performance-marketing/xfinity-retail-is-putting-shoppers-on-tv-via-augmented-reality-qr-codes/" target="_blank" rel="noreferrer">
						Entertainment
					</a>
				</h1>
				<h2>(mobile AR)</h2>
				Casey prototyped creative designs using multiple technologies. Final product was made with Zappar.
				Read the Adweek coverage of this experience <a href="https://www.adweek.com/performance-marketing/xfinity-retail-is-putting-shoppers-on-tv-via-augmented-reality-qr-codes/" target="_blank" rel="noreferrer">
						here
					</a>
			</div>
		</div>
		{/* <span className="caption" ref={props.caption}> */}
		{/* ref={scrollRef} */}
		{/* <span className="caption" >
			0.00
		</span> */}
	</div>
  	)
	// )
	}
  
  export default Work