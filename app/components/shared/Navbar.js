import Link from "next/link";

const navItems = [
    {
        route: "Home",
        pathname: "/"
    },
    {
        route: "Register",
        pathname: "/register"
    },
    {
        route: "Login",
        pathname: "/login"
    },
    {
        route: "Dashboard",
        pathname: "/dashboard"
    },
    {
        route: "Contact Us",
        pathname: "/contact"
    },
    {
        route: "About Us",
        pathname: "/about"
    },
    
]

export default function Navbar() {
    return (
        <div className="py-6 px-6">
            <nav className="flex justify-between">
                <Link href="/">Logo</Link>
                <div className="flex gap-8">
                    { navItems.map(item => <Link href={item.pathname} key={item}>{item.route}</Link>)}
                </div>
            </nav>
        </div>
        );
}