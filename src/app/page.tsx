'use client'

import ContactForm from "./components/contactform";
import Link from "next/link";

import { motion, useAnimation, Variants } from "framer-motion";


import { useInView } from "react-intersection-observer";

import { useEffect, useState } from "react";

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
			duration: 2,
		},
	},
};




export default function HomePage() {

	const [hasAnimatedSkills, setHasAnimatedSkills] = useState(false);
	const [hasAnimatedProjects, setHasAnimatedProjects] = useState(false);
	const [hasAnimatedWork, setHasAnimatedWork] = useState(false);
	const [hasAnimatedContact, setHasAnimatedContact] = useState(false);

	const skillsControl = useAnimation();
	const [skillsRef, skillsInView] = useInView();

	const projectsControl = useAnimation();
	const [projectsRef, projectsInView] = useInView();

	const workControl = useAnimation();
	const [workRef, workInView] = useInView();

	const contactControl = useAnimation();
	const [contactRef, contactInView] = useInView();

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
				<div className="avatar px-5 flex justify-center mt-6">
					<div className="w-36 rounded-full relative">
						<img src="/images/headshot4.jpg" alt="Cameron Blatt" />
					</div>
				</div>

				<div id="home" className="flex justify-center flex-col mt-12">
					<h1 className="text-5xl font-semibold text-center mt-8">Hello! I'm Cameron Blatt</h1>
					<div className="text-xl text-center mt-6">
						Passionate and driven Software Engineering Student in my final year at Western
						University <strong>(3.9 GPA)</strong>
					</div>

					<div className="flex justify-center mt-12">
						<Link
							className="btn btn-lg hover:-translate-y-1 justify-center btn-info text-white"
							href="#contact">
							Contact Me!
						</Link>
					</div>
				</div>

				<motion.div
					variants={cardVariants}
					initial="offscreen"
					animate={skillsControl}
					ref={skillsRef}
					id="skills"
					className="flex justify-center flex-col mt-12 pt-10">
					<h1 className="text-5xl font-semibold text-center mt-8">Skills</h1>

					<div className="flex flex-col items-center">
						<div className="card shadow-lg w-3/4">
							<div className="card-body flex flex-col items-center">
								<div className="flex flex-wrap justify-center space-x-10">
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/python.png" alt="Python" className="h-12 w-12" />
										<span>Python</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/java.png" alt="Java" className="h-12 w-12" />
										<span>Java</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/javascript.png" alt="Javascript" className="h-12 w-12" />
										<span>Javascript</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/typescript.png" alt="typescript" className="h-12 w-12" />
										<span>Typescript</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/django.png" alt="Django" className="h-12 w-12" />
										<span>Django</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/react.png" alt="React.js" className="h-12 w-12" />
										<span>React.js</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/next.png" alt="Next.js" className="h-12 w-12" />
										<span>Next.js</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/node.png" alt="Node.js" className="h-12 w-12" />
										<span>Node.js</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/express.png" alt="Express.js" className="h-12 w-12" />
										<span>Express.js</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/nest.png" alt="Nest.js" className="h-12 w-12" />
										<span>Nest.js</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/sql.png" alt="SQL" className="h-12 w-12" />
										<span>SQL</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/bootstrap.png" alt="Bootstrap CSS" className="h-12 w-12" />
										<span>Bootstrap</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/tailwind.png" alt="Tailwind CSS" className="h-12 w-12" />
										<span>Tailwind</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/github.png" alt="GitHub" className="h-12 w-12" />
										<span>GitHub</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/jira.png" alt="Jira" className="h-12 w-12" />
										<span>Jira</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/confluence.png" alt="Confluence" className="h-12 w-12" />
										<span>Confluence</span>
									</div>
									<div className="flex flex-col items-center space-y-2 mt-4">
										<img src="/images/firebase.png" alt="Firebase" className="h-12 w-12" />
										<span>Firebase</span>
									</div>
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
						<div className="card shadow-lg mt-12 w-5/6">
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
												Developed a complex algorithm to predict the point differential in NFL games
											</p>
										</li>
										<li className="flex mt-2">
											<span>📈</span>
											<p className="pl-3">
												Implemented features such as game prediction, player contribution analysis,
												and player comparison
											</p>
										</li>
										<li className="flex mt-2">
											<span>🛠️</span>
											<p className="pl-3">
												Created a REST API and utilized SQL to efficiently retrieve and manipulate
												large CSV files of NFL data
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="flex justify-center mt-8">
						<div className="w-5/6 flex space-x-4">
							<div className="card shadow-lg w-1/3">
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
														Developed features such as creating, editing, and forwarding course
														outlines
													</p>
												</li>
												<li className="flex mt-2">
													<span>💬</span>
													<p className="pl-3">
														Implemented review system to allow reviewers to suggest changes and
														modify course outlines
													</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card shadow-lg w-1/3">
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
														sharing
													</p>
												</li>
												<li className="flex mt-2">
													<span>🎸</span>
													<p className="pl-3">
														Implemented a playlist review system, allowing users to rate and comment
														on friends' playlists
													</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="card shadow-lg w-1/3">
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
														Developed custom scripts in C# to handle gameplay mechanics, user input,
														and other game logic
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
						<div className="card shadow-lg mt-12 w-5/6">
							<div className="card-body flex flex-col">
								<h1 className="text-2xl font-semibold text-center">Tofu (startup)</h1>
								<p className="text-xl text-center font-medium">Full stack developer, intern</p>
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
												Spearheaded a complete redesign of the UI, focusing on user-friendly design
												and intuitive navigation.
											</p>
										</li>
										<li className="flex mt-2">
											<span>📈</span>
											<p className="pl-3">
												Achieved ~20% decrease in load times through optimized backend rendering and
												code restructuring
											</p>
										</li>
										<li className="flex mt-2">
											<span>💻</span>
											<p className="pl-3">
												Successfully implemented and launched numerous valuable features
											</p>
										</li>
										<li className="flex mt-2">
											<span>💡</span>
											<p className="pl-3">
												Proactively solicited feedback from users and team members, ensuring
												continuous improvement and user satisfaction
											</p>
										</li>
										<li className="flex mt-2">
											<span>🌐</span>
											<p className="pl-3">
												Constantly sought out leadership opportunities, guiding project direction
												and fostering team collaboration
											</p>
										</li>
									</ul>
								</div>
							</div>
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
												Owner and operator of outdoor pressure washing, sanding and painting company
											</p>
										</li>
										<li className="flex mt-2">
											<span>📈</span>
											<p className="pl-3">
												Generated over $15,000 in revenue through effective business operations and
												client satisfaction
											</p>
										</li>
										<li className="flex mt-2">
											<span>💼</span>
											<p className="pl-3">
												Demonstrated strong entrepreneurial skills and adaptability in managing a
												small business
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
