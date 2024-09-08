import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Transactions } from "./views/Transactions/Transactions";

export default function Dashboard() {
	return (
		<div className="p-10">
			<div>
				<h2 className="font-bebas text-6xl font-bold">Balance</h2>
			</div>
			<Tabs defaultValue="transactions" className="">
				<TabsList className="flex justify-center bg-transparent">
					<TabsTrigger value="transactions" className="w-[500px]">
						Transacciones
					</TabsTrigger>
					<TabsTrigger value="close" className="w-[500px]">
						Cierre de Caja
					</TabsTrigger>
				</TabsList>
				<TabsContent value="transactions">{<Transactions />}</TabsContent>
				<TabsContent value="close">Change your password here.</TabsContent>
			</Tabs>
		</div>
	);
}
