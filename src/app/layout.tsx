import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cameron Blatt",
	description: "Cameron's Personal Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<div className="background-image"></div>
				<main>
					<div className="flex justify-center">
						{/* <nav className="bg-white bg-opacity-85 shadow-lg rounded-xl backdrop-blur-md p-4 my-10 w-auto">
							<ul className="flex justify-center space-x-4">
								<li>
									<Link href="#home" className="text-base-900 font-medium hover:text-base-700">
										Home
									</Link>
								</li>
								<li>
									<Link href="#skills" className="text-base-900 font-medium hover:text-base-700">
										Skills
									</Link>
								</li>
								<li>
									<Link href="#projects" className="text-base-900 font-medium hover:text-base-700">
										Projects
									</Link>
								</li>
								<li>
									<Link href="#work" className="text-base-900 font-medium hover:text-base-700">
										Work Experience
									</Link>
								</li>
								<li>
									<Link href="#contact" className="text-base-900 font-medium hover:text-base-700">
										Contact Me
									</Link>
								</li>
								<li>
									<Link href="#contact" className="text-base-900 font-medium hover:text-base-700">
										Contact Me
									</Link>
								</li>
							</ul>
						</nav> */}
						<nav>
							<div className="space-x-4 mt-10 mb-12">
								<Link className="btn bg-white btn-outline" href="#skills">
									Skills
								</Link>
								<Link className="btn bg-white btn-outline" href="#projects">
									Projects
								</Link>
								<Link className="btn bg-white btn-outline" href="#work">
									Work Experience
								</Link>
								<Link className="btn bg-white btn-outline" href="#contact">
									Contact Me
								</Link>
							</div>
						</nav>
					</div>

					{children}
				</main>
			</body>
		</html>
	);
}
