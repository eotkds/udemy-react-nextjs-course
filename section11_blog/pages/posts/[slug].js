import PostContent from "../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostsDetailPage(props) {
    return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
    console.log(context);
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
    };
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}

export default PostsDetailPage;
