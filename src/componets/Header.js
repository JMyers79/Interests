import React from 'react';

const Header = ({title})=>{
    return(
        <header className = "header">
        <h1 className="text-5xl font-bold">
            {title}
        </h1>
        </header>
    );
}

export default Header;