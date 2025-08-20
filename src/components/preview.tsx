import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";

import "github-markdown-css/github-markdown-dark.css";

interface Props {
	content: string;
}

function Preview({ content }: Props) {
	const md = unified()
		.use(remarkGfm)
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeReact, { jsxs, jsx, Fragment })
		.processSync(content).result;

	return <div className="markdown-body bg-transparent! p-4">{md}</div>;
}

export default Preview;
