function Bio() {
	return (
		<div>
			<div className='sectionHeader'>about</div>
			<div className='bioInner'>
				<div className='bioBody'>
					Casey Berman (he/him) is a senior webXR developer, creative technologist and <span>musician</span> living in Brooklyn, New York.
					Casey has worked at Aircards, Elephant, Bonzai Media/Metroclick, Saatchi & Saatchi, and as a freelancer.
					<br></br><br></br>
					Originally a Jazz saxophonist, Casey learned to code on YouTube after completing a degree in Jazz Performance at the New York University.
					At Aircards, Casey worked with worldwide brands such as Durex, Johnnie Walker, The British Royal Navy, and many more.
					He has helped push webXR into more people's hands and eyes, and has created experiences that are both beautiful and functional.
					<br></br><br></br>
					At Elephant, Casey worked with a team to bring the Webby-nominated Elephant website to life using React, Sass and a number of other techs.
					He was a dedicated developer for Comcast, and managed all experiences in their flagship and premiere stores, but additionally worked
					on internal projects, and projects for Marc Jacobs and other clients.

					<br></br><br></br>

					For more information on Casey's work at Aircards, Elephant, et al,
					go to the <span 
						// onClick={} // want to add click that changes state to 'work' - will figure out again
					>Work </span>
					page.
					{/* click here? */}
					<br></br><br></br>
					Casey maintains a rich life of learning and making. When he gets a chance,
					he rides his bike around the five boroughs, composes in Ableton, makes things move in TouchDesigner, and
					spends time with his cats, Phoebe and Zelda.
				</div>
			</div>
		</div>
	)
}

export default Bio;
