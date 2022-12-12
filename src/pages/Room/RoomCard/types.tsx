interface Card {
	id: number;
	title: string;
	caption?: string;
	description?: string;
	version?: "in lab" | "decrepted" | string;
}

export type { Card };
