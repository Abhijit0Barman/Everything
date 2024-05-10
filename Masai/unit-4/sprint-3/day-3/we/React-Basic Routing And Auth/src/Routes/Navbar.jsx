import { Link, NavLink } from "react-router-dom"

const links = [
    { text: 'Login', path: "/login" },
    { text: 'Home', path: '/' },
    { text: 'About', path: "/about" },
    { text: 'Contact', path: "/contact" },
    { text: 'Products', path: "/products" },
]


function Navbar() {
    const activeStyle = { textDecoration: "none", color: "red" }
    const defaultStyle = { textDecoration: "none", color: "black" }

    return (
        <div className="navbar" style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "50px",
            backgroundColor:"lightblue"
        }}>
            {
                links.map(({ text, path }) => (
                    <NavLink to={path} style={({ isActive }) => { return isActive ? activeStyle : defaultStyle }}>{text}</NavLink>
                ))
            }
            {/* <Link to="/">Home</Link> */}
        </div>
    )
}

export { Navbar }