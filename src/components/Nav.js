import React from "react";

function Nav(props) {
    const navOption = ["About", "Portfolio", "Contact", "Resume"];
    return (
        <div className="h-link">
            <ul className="nav nav-tabs">
                {navOption.map((link) => (
                    <li className={props.currentPage === link ? "nav-item is-active" : "nav-item"}
                    key={link}
                    >
                        <a href={"#" + link.toLowerCase()}
                           onClick={() => props.pageHandler(link)}
                           className={props.currentPage === link ? "nav-link is-active" : "nav-link"}
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Nav;