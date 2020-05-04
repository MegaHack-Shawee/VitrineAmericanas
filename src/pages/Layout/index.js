import React from 'react';

import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Main from '../../components/Main';
import ArrowBack from '../../components/ArrowBack';

function Layout({children, arrowBack}) {
    return (
        <Background>
            {arrowBack && <ArrowBack action={arrowBack} />}
            <Logo />
            <Main>{children}</Main>
        </Background>
    );
}

export default Layout;
