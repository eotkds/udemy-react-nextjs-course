import AllPosts from "../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
    return <AllPosts posts={props.posts} />;
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
