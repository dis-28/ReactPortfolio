import React from 'react';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Profiles from './components/Profiles';
import './assest/app.css'

function App() {





	return (
		<>

			<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Intro />
					<Portfolio />
					<Profiles />
					<Timeline />
					<Contact />
				</div>
			</div>
		</>
	)
}

export default App
