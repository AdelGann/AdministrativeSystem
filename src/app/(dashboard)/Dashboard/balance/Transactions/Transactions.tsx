import React from "react";

import { Input } from "@/components/ui/input";
import SelectField from "@/Custom/SelectField";
import { DatePickerWithRange } from "@/Custom/DataPickerRange";
import { Card, CardTitle } from "@/components/ui/card";

export const Transactions = () => {
	return (
		<div>
			<div className="flex gap-2 p-5">
				<SelectField
					Name="Select Range"
					content={[
						{ name: "Diario", value: "diario" },
						{ name: "Semanal", value: "semanal" },
						{ name: "Mensual", value: "mensual" },
						{ name: "Anual", value: "anual" },
					]}
				/>
				<DatePickerWithRange />
				<Input placeholder="Buscar Concepto" className="w-[250px]" />
			</div>
			<div className="flex ">
				<Card className="p-5 m-5 w-[170px]">
					<CardTitle>Balance Total</CardTitle>
					<h2 className="text-xl">$0</h2>
				</Card>
				<Card className="p-5 m-5 w-[170px]">
					<CardTitle>Ventas Totales</CardTitle>
					<h2 className="text-green-500 text-xl ">$0</h2>
				</Card>
				<Card className="p-5 m-5 w-[170px]">
					<CardTitle>Gastos Totales</CardTitle>
					<h2 className="text-red-500 text-xl">$0</h2>
				</Card>
			</div>
		</div>
	);
};
