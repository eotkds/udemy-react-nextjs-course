import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.header}>
            {/* 
                Invalid `<Link>` with `<a>` child 
                https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor#why-this-error-occurred
            */}
            <Link href="/">
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
