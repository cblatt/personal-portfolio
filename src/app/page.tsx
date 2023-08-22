export default function HomePage() {
	return (
		<div className="flex justify-center flex-col">
			<div className="avatar px-5 flex justify-center mt-10">
				<div className="w-48 rounded-full relative">
					<img src="/images/headshot4.jpg" alt="Cameron Blatt" />
					<span className="absolute bottom-0 right-0 mb-1 mr-1 text-2xl">👋</span>
				</div>
			</div>

			<div className="flex justify-center flex-col mt-6">
				
				
						<h1 className="text-8xl text-center mt-8">Hey! I'm Cameron Blatt</h1>
						<div className="text-3xl text-center mt-4">
							Passionate and driven
							<span className="highlighter-effect">Software Engineering Student</span>
							in my final year at Western University
						</div>
				
				

				
			</div>
		</div>
	);
}
