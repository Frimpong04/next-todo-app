import Link from "next/link";

// styles
import classes from "./not-found.module.css"

export default function NotFoundPage() {
    return (
        <div className={classes.container}>
            <h2>Ooops, the page can not be found</h2>
            <p>Kindly go back <Link href="/">home</Link></p>
        </div>
    )
}