import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="flex sm:flex-row flex-col">
			<div className="px-4 sm:px-16 items-center content-center flex-col p-6 lg:p-12 flex gap-5 justify-center  bg-[url('/bg.jpg')] flex justify-center bg-no-repeat bg-cover bg-center bg-fixed bg-blend-multiply bg-slate-500 dark:bg-slate-700 w-full min-h-screen min-h-screen-100%">
				<div>
					<h1 className="text-8xl text-white font-bebas font-bold">Treinta y Uno</h1>
				</div>
				<div>
					<p className="text-white font-bebas font-light text-2xl">
						Sistema para administrar cuentas y clientes etc... 
					</p>
				</div>
				<div>
					<Button className="bg-white text-black hover:bg-slate-300">
						Comienza Ya
					</Button>
				</div>
			</div>
		</main>
	);
}
