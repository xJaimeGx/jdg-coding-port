import React from "react";

function Nav(props) {
    const navOption = ["About"];
    return (
        <div className="h-link">
            <ul className="list-link">
                {navOption.map((link) => (
                    <li className={props.currentPage === link ? "nav-option is-active" : "nav-option"}
                    key={link}
                    >
                        <a href={"#" + link.toLowerCase()}
                           onClick={() => props.pageHandler(link)}
                           className={props.currentPage === link ? "nav-page is-active" : "nav-page"}
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