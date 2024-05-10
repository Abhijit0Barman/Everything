import { NavLink } from "react-router-dom"

const links = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Contact", path: "/contact" },
    { text: "Products", path: "/products" },
]

function Navbar() {

    const defaultStyle = { textDecoration: "none", color: "black" }
    const activeStyle = { textDecoration: "none", color: "red" }

    return (
        <div className="navbar"
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center", backgroud: "red",
                border: "1px solid lightgray",
                marginBottom: "10px",
                height: "50px",
                backgroundColor: "lightgray"
            }}
        >
            {links.map(item => (
                <NavLink
                    style={({ isActive }) => {
                        return isActive ? activeStyle : defaultStyle
                    }}
                    to={item.path}
                    key={item.path}
                >
                    {item.text}
                </NavLink>
            ))}
        </div>
    )
}

export { Navbar }