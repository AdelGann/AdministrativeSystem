import { Card } from "@/components/ui/card";
import { Fragment } from "react";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Fragment>
			
			<main>{children}</main>
			<footer className="py-5 px-10 flex bottom-0 right-0 relative justify-between items-center">
				<p className="absolute">Developed By Adel Gannem September 2024 - Some rights reserved©</p>
			</footer>
		</Fragment>
	);
}
