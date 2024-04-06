import { Fragment } from "react";
import Head from "next/head";
import Hero from "./components/home-page/hero";
import FeaturedPosts from "./components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
    return (
        <Fragment>
            <Hero />
            <Head>
                <title>DS Blog</title>
                <meta name="description" content="I post about programming and web development." />
            </Head>
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
        revalidate: 600,
    };
}

export default HomePage;
