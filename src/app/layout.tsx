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
				<main>
					<nav>
						<div className="navbar bg-base-100 flex justify-center items-center">
							<div className="navbar-center lg:flex">
								<ul className="menu menu-horizontal flex items-center">
									<li className="me-3">
										<div className="p-0 m-0">
											<Link href="/" className="btn btn-outline">
												HOME
											</Link>
										</div>
									</li>
									<li className="me-3">
										<div className="p-0 m-0">
											<Link href="/projects" className="btn btn-outline">
												PROJECTS
											</Link>
										</div>
									</li>
									<li className="me-3">
										<div className="p-0 m-0">
											<Link href="/projects" className="btn btn-outline">
												WORK EXPERIENCE
											</Link>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{children}
				</main>
			</body>
		</html>
	);
}
