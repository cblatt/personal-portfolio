'use client'

import ContactForm from "./components/contactform";
import Link from "next/link";

import { motion, useAnimation, Variants } from "framer-motion";


import { useInView } from "react-intersection-observer";

import { use, useEffect, useState } from "react";

import Image from "next/image";

const cardVariants: Variants = {
	offscreen: {
		y: 300,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		rotate: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 1.3,
		},
	},
};




export default function HomePage() {

	const [hasAnimatedHome, setHasAnimatedHome] = useState(false);
	const [hasAnimatedSkills, setHasAnimatedSkills] = useState(false);
	const [hasAnimatedProjects, setHasAnimatedProjects] = useState(false);
	const [hasAnimatedWork, setHasAnimatedWork] = useState(false);
	const [hasAnimatedContact, setHasAnimatedContact] = useState(false);

	const homeControl = useAnimation();
	const [homeRef, homeInView] = useInView();

	const skillsControl = useAnimation();
	const [skillsRef, skillsInView] = useInView();

	const projectsControl = useAnimation();
	const [projectsRef, projectsInView] = useInView();

	const workControl = useAnimation();
	const [workRef, workInView] = useInView();

	const contactControl = useAnimation();
	const [contactRef, contactInView] = useInView();

	useEffect(() => {
		if (homeInView && !hasAnimatedHome) {
			homeControl.start("onscreen");
			setHasAnimatedHome(true);
		}
	}, [homeControl, homeInView, hasAnimatedHome]);

	useEffect(() => {
		if (skillsInView && !hasAnimatedSkills) {
			skillsControl.start("onscreen");
			setHasAnimatedSkills(true);
		}
	}, [skillsControl, skillsInView, hasAnimatedSkills]);

	useEffect(() => {
		if (projectsInView && !hasAnimatedProjects) {
			projectsControl.start("onscreen");
			setHasAnimatedProjects(true);
		}
	}, [projectsControl, projectsInView, hasAnimatedProjects]);

	useEffect(() => {
		if (workInView && !hasAnimatedWork) {
			workControl.start("onscreen");
			setHasAnimatedWork(true);
		}
	}, [workControl, workInView, hasAnimatedWork]);

	useEffect(() => {
		if (contactInView && !hasAnimatedContact) {
			contactControl.start("onscreen");
			setHasAnimatedContact(true);
		}
	}, [contactControl, contactInView, hasAnimatedContact]);

	


	return (
		<div className="mb-12 ">
			<div className="flex justify-center flex-col">
				<motion.div variants={cardVariants} initial="offscreen" animate={homeControl} ref={homeRef}>
					<div className="avatar px-5 flex justify-center mt-6">
						<div className="w-36 rounded-full relative">
							<div className="w-36 rounded-full relative">
								<Image
									src="https://i.imgur.com/dg5mLjL.jpg"
									alt="Cameron Blatt"
									width={144}
									height={144}
									quality={100}
								/>
							</div>
						</div>
					</div>

					<div id="home" className="flex justify-center flex-col mt-12">
						<h1 className="text-5xl font-semibold text-center mt-8">
							Hello! I&apos;m Cameron Blatt
						</h1>
						<div className="text-xl text-center mt-6">
							Passionate and driven <strong>Software Engineering Student</strong> in my final year
							at Western University
						</div>

						<div className="flex justify-center mt-8">
							<Link
								className="btn btn-lg hover:-translate-y-1 justify-center btn-info text-white"
								href="#contact">
								Contact Me!
							</Link>
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={cardVariants}
					initial="offscreen"
					animate={skillsControl}
					ref={skillsRef}
					id="skills"
					className="flex justify-center flex-col mt-12 pt-10">
					<h1 className="text-5xl font-semibold text-center mt-8">Skills</h1>

					<div className="flex justify-center">
						<div className="flex flex-row justify-center space-x-4 mt-6 w-5/6">
							<div className="card shadow-lg w-1/2">
								<div className="card-body flex flex-col items-center">
									<h2 className="text-2xl font-semibold mb-6">Programming Languages</h2>
									<div className="flex flex-wrap justify-center space-x-10">
										{["Python", "Java", "Javascript", "Typescript", "HTML", "CSS", "C#"].map(
											(skill, index) => (
												<div
													key={index}
													className="flex flex-col items-center space-y-2 mt-4 skill-item">
													<div className="image-container">
														<Image
															src={`https://i.imgur.com/${
																[
																	"ClDSzbM",
																	"nL4pOFN",
																	"HgwiRD5",
																	"mgpkUpM",
																	"0NZlLLw",
																	"cBOC1uS",
																	"YE8OX18",
																][index]
															}.png`}
															alt={skill}
															width={48}
															height={48}
														/>
													</div>
													<span>{skill}</span>
												</div>
											)
										)}
									</div>
								</div>
							</div>

							<div className="card shadow-lg w-1/2">
								<div className="card-body flex flex-col items-center">
									<h2 className="text-2xl font-semibold mb-6">Frameworks & Libraries</h2>
									<div className="flex flex-wrap justify-center space-x-10">
										{[
											"Django",
											"React.js",
											"Next.js",
											"jQuery",
											"Node.js",
											"Express.js",
											"Nest.js",
											"Bootstrap",
											"Tailwind",
										].map((skill, index) => (
											<div
												key={index}
												className="flex flex-col items-center space-y-2 mt-4 skill-item">
												<div className="image-container">
													<Image
														src={`https://i.imgur.com/${
															[
																"UMsUtn5",
																"R1dVOlT",
																"EjkWRs9",
																"6KdABJl",
																"CXrF1eh",
																"DGOAlwz",
																"W6S5K3r",
																"G8lWkg2",
																"czu26Cz",
															][index]
														}.png`}
														alt={skill}
														width={48}
														height={48}
													/>
												</div>
												<span>{skill}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center">
						<div className="flex flex-row justify-center space-x-4 mt-6 w-5/6">
							<div className="card shadow-lg w-1/3">
								<div className="card-body flex flex-col items-center">
									<h2 className="text-2xl font-semibold mb-6">Database Management</h2>
									<div className="flex flex-wrap justify-center space-x-10">
										{["MySQL", "PostgreSQL", "Firebase"].map((skill, index) => (
											<div
												key={index}
												className="flex flex-col items-center space-y-2 mt-4 skill-item">
												<div className="image-container">
													<Image
														src={`https://i.imgur.com/${
															["MNRVecg", "9qljWlz", "oyTDiDY"][index]
														}.png`}
														alt={skill}
														width={48}
														height={48}
													/>
												</div>
												<span>{skill}</span>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="card shadow-lg w-1/3">
								<div className="card-body flex flex-col items-center">
									<h2 className="text-2xl font-semibold mb-6">Cloud Platforms & Services</h2>
									<div className="flex flex-wrap justify-center space-x-10">
										{["AWS", "GCP", "EC2", "DialogFlow"].map((skill, index) => (
											<div
												key={index}
												className="flex flex-col items-center space-y-2 mt-4 skill-item">
												<div className="image-container">
													<Image
														src={`https://i.imgur.com/${
															["gJJKzFA", "37o9fga", "vXso4Ay", "nYY5iVe"][index]
														}.png`}
														alt={skill}
														width={48}
														height={48}
													/>
												</div>
												<span>{skill}</span>
											</div>
										))}
									</div>
								</div>
							</div>

							<div className="card shadow-lg w-1/3">
								<div className="card-body flex flex-col items-center">
									<h2 className="text-2xl font-semibold mb-6">Development Tools</h2>
									<div className="flex flex-wrap justify-center space-x-10">
										{["GitHub", "Jira", "Confluence"].map((skill, index) => (
											<div
												key={index}
												className="flex flex-col items-center space-y-2 mt-4 skill-item">
												<div className="image-container">
													<Image
														src={`https://i.imgur.com/${
															["nsJ58Es", "bZe1WAU", "Awqjh6K"][index]
														}.png`}
														alt={skill}
														width={48}
														height={48}
													/>
												</div>
												<span>{skill}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={cardVariants}
					initial="offscreen"
					animate={workControl}
					ref={workRef}
					id="work"
					className="flex justify-center flex-col mt-12 pt-10">
					<h1 className="text-5xl font-semibold text-center mt-8">Work Experience</h1>

					<div className="flex flex-col items-center">
						<div className="card shadow-lg mt-12 w-5/6 hover:-translate-y-2 transition-transform duration-300">
							<a href="https://www.hiretofu.com/" target="_blank">
								<div className="card-body flex flex-col">
									<h1 className="text-2xl font-semibold text-center">Tofu (startup)</h1>
									<p className="text-xl text-center font-medium">Software engineering intern</p>
									<p className="text-lg text-center font-normal text-gray-600 italic">
										Summer 2023
									</p>

									<div className="flex justify-center space-x-2 flex-wrap p-0 mt-3 mb-2">
										<div className="badge bg-gray-300 font-medium p-3 mt-1">Python</div>
										<div className="badge bg-gray-300 font-medium p-3 mt-1">Django</div>
										<div className="badge bg-gray-300 font-medium p-3 mt-1">DjangoORM</div>
										<div className="badge bg-gray-300 font-medium p-3 mt-1">MVT Architecture</div>
										<div className="badge bg-gray-300 font-medium p-3 mt-1">BootstrapCSS</div>
										<div className="badge bg-gray-300 font-medium p-3 mt-1">Jira</div>
									</div>

									<div className="w-full justify-center flex mb-2">
										<ul className="mt-4 w-3/4">
											<li className="flex">
												<span>🚀</span>
												<p className="pl-3">
													Spearheaded a complete UI redesign, utilizing Django’s template engine and
													jQuery for dynamic, responsive web pages
												</p>
											</li>
											<li className="flex mt-2">
												<span>📈</span>
												<p className="pl-3">
													Overhauled data table handling, utilizing Python and Django ORM for
													backend rendering and AJAX for frontend retrieval, achieving considerable
													improvements in page load times and overall user experience
												</p>
											</li>
											<li className="flex mt-2">
												<span>💻</span>
												<p className="pl-3">
													Created a scoring algorithm to quantify candidate-job fit, providing
													recruiters with data-driven candidate evaluations
												</p>
											</li>
											<li className="flex mt-2">
												<span>📫</span>
												<p className="pl-3">
													Developed an SMTP email feature with editable templates, enabling
													recruiters to contact candidates directly from Tofu
												</p>
											</li>
											<li className="flex mt-2">
												<span>🌐</span>
												<p className="pl-3">
													Launched approximately 10 additional features, integrating RESTful
													endpoints for efficient data exchange, and ensuring reliability using
													Django’s testing framework
												</p>
											</li>
											<li className="flex mt-2">
												<span>💡</span>
												<p className="pl-3">
													Collaborated with a team of 4, frequently leading Agile stand-ups and
													planning sessions
												</p>
											</li>
										</ul>
									</div>
								</div>
							</a>
						</div>

						<div className="card shadow-lg w-5/6">
							<div className="card-body flex flex-col">
								<div>
									<h1 className="text-2xl font-semibold text-center">Decks & Fences</h1>
								</div>
								<div>
									<p className="text-lg text-center font-medium">Founder, CEO</p>
									<p className="text-lg text-center font-normal text-gray-600 italic mt-2">
										Summer 2020, 2022
									</p>
								</div>

								<div className="w-full justify-center flex mb-2">
									<ul className="mt-4 w-3/4">
										<li className="flex">
											<span>🪵</span>
											<p className="pl-3">
												Founded and operated a home exterior maintenance company, providing services
												to 60+ unique clients
											</p>
										</li>
										<li className="flex mt-2">
											<span>📈</span>
											<p className="pl-3">
												Demonstrated strong entrepreneurial and problem-solving skills
											</p>
										</li>
										<li className="flex mt-2">
											<span>💼</span>
											<p className="pl-3">
												Orchestrated project timelines and resource allocation, enhancing
												operational efficiency
											</p>
										</li>
										<li className="flex mt-2">
											<span>📋</span>
											<p className="pl-3">
												Led a team of 4, ensuring optimal task delegation and workflow efficiency
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					variants={cardVariants}
					initial="offscreen"
					animate={projectsControl}
					ref={projectsRef}
					id="projects"
					className="flex justify-center flex-col mt-12 pt-10">
					<h1 className="text-5xl font-semibold text-center mt-8">Projects</h1>

					<div className="flex justify-center space-x-5">
						<div className="card shadow-lg mt-12 w-5/6 hover:-translate-y-2 transition-transform duration-300">
							<a href="https://github.com/cblatt/Bet3309" target="_blank">
								<div className="card-body flex flex-col">
									<h1 className="text-2xl font-semibold text-center">Bet3309</h1>
									<p className="text-lg text-center font-medium">NFL betting aid web application</p>

									<div className="flex justify-center space-x-2 mt-3 mb-2 flex-wrap">
										<div className="badge bg-gray-300 font-medium p-3 mt-1">React.js</div>
										<div className="badge bg-gray-300 font-medium p-3 mt-1">Node.js</div>
										<div className="badge bg-gray-300 font-medium p-3 mt-1">MySQL</div>
										<div className="badge bg-gray-300 font-medium p-3 mt-1">AWS</div>
									</div>

									<div className="w-full justify-center flex">
										<ul className="mt-4 w-3/4">
											<li className="flex">
												<span>🏈</span>
												<p className="pl-3">
													Created a full-stack web application to aid in NFL betting, utilizing
													React.js for frontend and Node.js for backend
												</p>
											</li>
											<li className="flex mt-2">
												<span>📈</span>
												<p className="pl-3">
													Developed a complex algorithm to predict the point differential in NFL
													games
												</p>
											</li>
											<li className="flex mt-2">
												<span>🛠️</span>
												<p className="pl-3">
													Implemented features such as game prediction and player comparison, using
													MySQL for data management
												</p>
											</li>
										</ul>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className="flex justify-center mt-8">
						<div className="w-5/6 flex space-x-4">
							<div className="card shadow-lg w-1/3 hover:-translate-y-2 transition-transform duration-300">
								<a href="https://github.com/cblatt/OutlineMaster" target="_blank">
									<div className="card-body p-0">
										<div className="card-body flex flex-col">
											<div>
												<h1 className="text-2xl font-semibold text-center">OutlineMaster</h1>
											</div>
											<p className="text-lg text-center font-medium">
												Course outline management web application
											</p>

											<div className="flex justify-center space-x-2 flex-wrap p-0 mt-3 mb-2">
												<div className="badge bg-gray-300 font-medium p-3 mt-1">React.js</div>
												<div className="badge bg-gray-300 font-medium p-3 mt-1">Nest.js</div>
												<div className="badge bg-gray-300 font-medium p-3 mt-1">PostgreSQL</div>
												<div className="badge bg-gray-300 font-medium p-3 mt-1">Docker</div>
												<div className="badge bg-gray-300 font-medium p-3 mt-1">AWS</div>
											</div>

											<div className="w-full justify-center flex">
												<ul className="mt-4 w-full">
													<li className="flex">
														<span>📝</span>
														<p className="pl-3">
															Developed features such as course outline creation and modification,
															utilizing PostgreSQL for data management
														</p>
													</li>
													<li className="flex mt-2">
														<span>💬</span>
														<p className="pl-3">
															Implemented a robust review system allowing department chairs to
															suggest modifications and return updated outlines to professors for
															further refinements
														</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="card shadow-lg w-1/3 hover:-translate-y-2 transition-transform duration-300">
								<a href="https://github.com/cblatt/Music-Town" target="_blank">
									<div className="card-body p-0">
										<div className="card-body flex flex-col">
											<div>
												<h1 className="text-2xl font-semibold text-center">MusicTown</h1>
											</div>
											<div>
												<p className="text-lg text-center font-medium">
													Music library web application
												</p>
											</div>
											<div className="flex justify-center space-x-2 flex-wrap p-0 mt-3 mb-2">
												<div className="badge bg-gray-300 font-medium p-3 mt-1">React.js</div>
												<div className="badge bg-gray-300 font-medium p-3 mt-1">Node.js</div>
												<div className="badge bg-gray-300 font-medium p-3 mt-1">MySQL</div>
												<div className="badge bg-gray-300 font-medium p-3 mt-1">AWS</div>
												<div className="badge bg-gray-300 font-medium p-3 mt-1">Firebase</div>
											</div>

											<div className="w-full justify-center flex">
												<ul className="mt-4 w-full">
													<li className="flex">
														<span>🎵</span>
														<p className="pl-3">
															Developed features such as track search, playlist creation, and music
															sharing, utilizing Node.js for backend queries and MySQL for database
															management
														</p>
													</li>
													<li className="flex mt-2">
														<span>🎸</span>
														<p className="pl-3">
															Implemented playlist review system, allowing users to rate and comment
															on friends’ playlists
														</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</a>
							</div>
							<div className="card shadow-lg w-1/3 hover:-translate-y-2 transition-transform duration-300">
								<a href="https://github.com/cblatt/Galactical-Conquest" target="_blank">
									<div className="card-body p-0">
										<div className="card-body flex flex-col">
											<div>
												<h1 className="text-2xl font-semibold text-center">Galactical Conquest</h1>
											</div>
											<div>
												<p className="text-lg text-center font-medium">Role-playing video game</p>
											</div>
											<div className="flex justify-center space-x-2 flex-wrap p-0 mt-3 mb-2">
												<div className="badge bg-gray-300 font-medium p-3 mt-1">Unity</div>
												<div className="badge bg-gray-300 font-medium p-3 mt-1">C#</div>
											</div>

											<div className="w-full justify-center flex">
												<ul className="mt-4 w-full">
													<li className="flex">
														<span>🎮</span>
														<p className="pl-3">
															Developed custom scripts in C# to handle gameplay mechanics, user
															input, and other game logic
														</p>
													</li>
													<li className="flex mt-2">
														<span>👾</span>
														<p className="pl-3">
															Utilized advanced features of Unity, such as animations, physics, and
															particle systems
														</p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					variants={cardVariants}
					initial="offscreen"
					animate={contactControl}
					ref={contactRef}
					id="contact"
					className="flex justify-center items-center flex-col mt-12 pt-10">
					<h1 className="text-5xl font-semibold text-center mt-8">Get in Touch!</h1>
					<div className="card shadow-lg flex w-1/2">
						<div className="card-body flex flex-col items-center">
							<ContactForm />
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
