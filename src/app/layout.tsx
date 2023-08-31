import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CamBot from "./components/cambot";
import Image from "next/image";

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
			<head>
				<link rel="icon" href="https://i.imgur.com/gr5qymX.png" type="image/x-icon" />
			</head>
			<body>
				<div className="background-image"></div>
				<main>
					<div className="relative flex items-center mt-10 mb-12 w-full">
						<div className="flex space-x-7 ms-4">
							<a
								target="_blank"
								href="https://www.linkedin.com/in/cameron-blatt/"
								className="hover:scale-110 transition-transform duration-300">
								<Image
									src="https://i.imgur.com/tM6JkcT.png"
									alt="LinkedIn"
									width="48"
									height="48"></Image>
							</a>
							<a
								target="_blank"
								href="https://github.com/cblatt"
								className="hover:scale-110 transition-transform duration-300">
								<Image src="https://i.imgur.com/nsJ58Es.png" alt="GitHub" width="48" height="48" />
							</a>
						</div>
						<nav className="flex-1 flex justify-center z-10">
							<div className="inline-block space-x-4">
								<Link className="btn bg-white btn-outline" href="#skills">
									Skills
								</Link>
								<Link className="btn bg-white btn-outline" href="#work">
									Work Experience
								</Link>
								<Link className="btn bg-white btn-outline" href="#projects">
									Projects
								</Link>

								<Link className="btn bg-white btn-outline" href="#contact">
									Contact Me
								</Link>
							</div>
						</nav>
						<div className="flex-shrink-0 me-2">
							<a className="btn btn-neutral text-white">Resume</a>
						</div>
					</div>
					{children}
				</main>
				<script async src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
				<CamBot />
			</body>
		</html>
	);
}
