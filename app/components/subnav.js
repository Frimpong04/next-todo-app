import Link from "next/link";

// styles
import classes from "./subnav.module.css"

export default function SubNav() {
    return (
        <nav className={classes.nav}>
                <Link href="/todos">Todos</Link>
        </nav>
    )
}