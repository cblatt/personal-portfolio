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
						<nav className="bg-white bg-opacity-85 shadow-lg rounded-xl backdrop-blur-md p-4 my-10 w-auto">
							<ul className="flex justify-center space-x-4">
								<li>
									<Link href="/" className="text-base-900 font-medium hover:text-base-700">
										Home
									</Link>
								</li>
								<li>
									<Link href="/" className="text-base-900 font-medium hover:text-base-700">
										Home
									</Link>
								</li>
								<li>
									<Link href="/" className="text-base-900 font-medium hover:text-base-700">
										Home
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					{children}
				</main>
			</body>
		</html>
	);
}
