import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/CJGG16361.png" alt="An image showing DS" width={300} height={300} />
            </div>
            <h1>Hi, I'm DS</h1>
            <p>I blog about web development - frontend and backend frameworks like React, NextJS ...</p>
        </section>
    );
}

export default Hero;
