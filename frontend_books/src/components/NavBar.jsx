
import './NavBar.css'
import { useState } from "react"
export default function NavBar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                BxTrack
            </a>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                {/* hamburger svg code... */}
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/addbook">Add_Book</a>
                    </li>
                    <li>
                        <a href="/books">View_Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    );


}