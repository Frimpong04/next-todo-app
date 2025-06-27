"use client"

import { usePathname } from 'next/navigation';

// styles
import Link from 'next/link';
import classes from './nav.module.css';


export default function Nav() {

    const pathname = usePathname();

    return (
        <main className={classes.main}>
            <nav className={classes.nav}>
                <h1>ToDo</h1>
                <div className={classes.nav_items}>
                    <Link href="/" className={pathname === '/' ? classes.active : ""}>Home</Link>
                    {/* <Link href="/todos" className={pathname === '/todos' ? classes.active : ""}>All Todos</Link> */}
                    <Link href="/create" className={pathname === '/create' ? classes.active : ""}>Create</Link>
                    
                </div>
            </nav>
        </main>
    )
}