import { HTMLProps } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";

import "./markdown-preview.css";

interface Props extends HTMLProps<HTMLDivElement> {
	content: string;
}

function Preview({ content, className, ...props }: Props) {
	const md = unified()
		.use(remarkGfm)
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeReact, { jsxs, jsx, Fragment })
		.processSync(content).result;

	return (
		<div className={`markdown-body p-4 ${className}`} {...props}>
			{md}
		</div>
	);
}

export default Preview;
