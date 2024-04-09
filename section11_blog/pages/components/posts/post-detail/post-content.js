import Markdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const customRenderers = {
        // 이 부분이 정확한 차이가 이해가 안됨

        // img(image) {
        //     return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />;
        // },
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === "img") {
                const image = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt={image.properties.alt}
                            width={600}
                            height={300}
                            priority
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },
        code(code) {
            // 강의 코드와 달라 링크 참조하여 작성
            // https://github.com/remarkjs/react-markdown?tab=readme-ov-file#use-custom-components-syntax-highlight
            const { children, className, node, ...rest } = code;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
                <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={atomDark}
                />
            ) : (
                <code {...rest} className={className}>
                    {children}
                </code>
            );
        },
    };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <Markdown components={customRenderers}>{post.content}</Markdown>
        </article>
    );
}

export default PostContent;
