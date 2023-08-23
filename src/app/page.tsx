

export default function HomePage() {
	return (
		<div className="mb-12 fade-in-up">
			<div className="flex justify-center flex-col">
				<div className="avatar px-5 flex justify-center mt-6">
					<div className="w-36 rounded-full relative">
						<img src="/images/headshot4.jpg" alt="Cameron Blatt" />
					</div>
				</div>

				<div className="flex justify-center flex-col mt-12">
					<h1 className="text-5xl font-semibold text-center mt-8">
						Hello! I'm Cameron Blatt
					</h1>
					<div className="text-xl text-center mt-6">
						Passionate and driven Software Engineering Student in my final year at Western
						University <strong>(3.9 GPA)</strong>
					</div>

					<div className="flex justify-center mt-8">
						<button className="btn btn-lg hover:-translate-y-1 justify-center btn-info text-white">
							Contact Me!
						</button>
					</div>
				</div>

				<div className="flex justify-center flex-col mt-12 pt-10">
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
										<img src="/images/typescript.png" alt="typescript" className="h-12 w-12" />
										<span>Typescript</span>
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
				</div>

				<div className="flex justify-center flex-col mt-12 pt-10">
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
											<span>📈</span>
											<p className="pl-3">
												Developed a complex algorithm to predict the point differential in NFL games
											</p>
										</li>
										<li className="flex mt-2">
											<span>🏈</span>
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
				</div>
				<div className="flex justify-center flex-col mt-12 pt-10">
					<h1 className="text-5xl font-semibold text-center mt-8">Work Experience</h1>

					<div className="flex flex-col items-center">
						<div className="card shadow-lg mt-12 w-5/6">
							<div className="card-body flex flex-col">
								<h1 className="text-2xl font-semibold text-center">Tofu (startup)</h1>
								<p className="text-lg text-center font-medium">Full stack developer, intern</p>
							</div>
						</div>
						<div className="card shadow-lg w-5/6">
							<div className="card-body flex flex-col">
								<div>
									<h1 className="text-2xl font-semibold text-center">Decks & Fences</h1>
								</div>
								<div>
									<p className="text-lg text-center font-medium">Founder, CEO</p>
								</div>

								<div className="w-full justify-center flex">
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
				</div>
			</div>
		</div>
	);
}
