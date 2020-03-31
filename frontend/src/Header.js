import React from 'react';

//as chaves é pra utilizar JS dentro de HTML
//<h1>{props.title}</h1>
//children permite pegar todas as propriedades do objeto

export default function Header({children}){ 
    return(
        <header>  
            <h1>{children}</h1>
        </header>
    );
}

