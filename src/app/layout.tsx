import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CamBot from "./components/cambot";

const inter = Inter({ subsets: ["latin"] });

declare namespace JSX {
	interface IntrinsicElements {
		"df-messenger": any;
	}
}


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
					<div className="relative flex justify-center items-center mt-10 mb-12">
						<nav className="z-10">
							<div className="inline-block space-x-4">
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
						<div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex space-x-8">
							<a
								target="_blank"
								href="https://www.linkedin.com/in/cameron-blatt/"
								className="hover:scale-110 transition-transform duration-300">
								<img src="https://i.imgur.com/tM6JkcT.png" alt="LinkedIn" className="h-12 w-12" />
							</a>
							<a
								target="_blank"
								href="https://github.com/cblatt"
								className="hover:scale-110 transition-transform duration-300">
								<img src="https://i.imgur.com/nsJ58Es.png" alt="GitHub" className="h-12 w-12" />
							</a>
						</div>
					</div>

					{children}
				</main>
				<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>

				<CamBot />
			</body>
		</html>
	);
}
