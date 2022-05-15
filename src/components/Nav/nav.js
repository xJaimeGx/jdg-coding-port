import React from 'react';

function Nav() {
    const navOption = [
        {
          name: "Portfolio",
          description: ""
        },
        { 
          name: "Resume", 
          description: "" 
        }
    ];

    function optionSelected(name) {
        console.log(`${name} clicked`)
    };

  return (
    <header>
        <nav>
            <ul className='flex-row'>
                <li className='navList'>
                    <a href='#about'>
                        About Me
                    </a>
                </li>
                <li>
                    <span>
                        Contact
                    </span>
                </li>
                {navOption.map((option) => (
                    <li className='optionList' key={option.name}>
                        <span onClick={() => optionSelected(option.name)}>
                            {option.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;