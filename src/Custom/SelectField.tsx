import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
interface ContentProps {
    name: string;
    value: string
}
interface SelectFieldProps {
	Name: string;
	content: ContentProps[];
	customWidth?: string;
}

export default function SelectField({ Name, content, customWidth = "180px" }: SelectFieldProps) {
	return (
		<Select>
			<SelectTrigger className={`w-[${customWidth}]`}>
				<SelectValue placeholder={Name} />
			</SelectTrigger>
			<SelectContent>
				{content.map((_, index: any) => (
					<SelectItem key={content[index]["name"]} value={content[index]["value"]}>
						{content[index]["name"]}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
