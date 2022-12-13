interface Card {
	id?: any;
	title?: string;
	caption?: string;
	description?: string;
	version?: "in lab" | "decrepted" | "boilarplate" | string;
}

export type { Card };
