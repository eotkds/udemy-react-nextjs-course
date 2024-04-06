import AllPosts from "../components/posts/all-posts";
import Head from "next/head";
import { getAllPosts } from "../../lib/posts-util";
import { Fragment } from "react";

function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all programming-related tutorials and posts!" />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
    );
}

export function getStaticProps() {
    const AllPosts = getAllPosts();
    // revalidate 를 안하는 이유; 새로운 것이 업데이트 되면, 재배포가 되기 때문에(?)
    return {
        props: {
            posts: AllPosts,
        },
    };
}

export default AllPostsPage;
