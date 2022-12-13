const roomList = [
	{
		id: 1,
		title: "React Use Hooks",
		caption: "tam11a/react-use-hooks",
		description:
			"Performant, flexible & extensible hooks with easy-to-use flexibility. react-use-hooks reduces the amount of code you need to write while removing unnecessary re-renders in ReactJS.",
		version: "v0.1.1",
		tags: ["React", "Typescript", "Javascript", "Package"],
	},
	{
		id: 2,
		title: "React Use Access",
		caption: "tam11a/react-use-access",
		description: "React library to use in ACL(Access List) feature.",
		version: "in lab",
		tags: ["React", "Typescript", "Javascript", "Package"],
	},
	{
		id: 3,
		title: "React Boilerplate",
		caption: "tam11a/react-ts-boilerplate",
		description:
			"React Typescript Boilarplate using Vite, a modern, blazing-fast tool for scaffolding and bundling projects.",
		version: "boilerplate",
		tags: ["React", "Typescript", "Boilerplate"],
	},
	{
		id: 4,
		title: "React NPM Package",
		caption: "tam11a/react-package-boilerplate",
		description:
			"React Typescript Boilarplate to create react packages and publishing on npm.",
		version: "boilerplate",
		tags: ["React", "Typescript"],
	},
];

export const getRoomById = (id: any) => {
    return roomList.filter(r => id == r.id)[0]
}

export default roomList;