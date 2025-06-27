import SubNav from "@/app/components/subnav";
import Link from "next/link";

export default function TasksLayout({ children }) {
    return (
        <main>
            <SubNav />
            { children }
        </main>
       
    )
}