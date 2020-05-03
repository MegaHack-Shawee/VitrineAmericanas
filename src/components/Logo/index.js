import React from 'react';
import logoVitrine from '../../assets/icons/logo/logo_home.png';

import {Image, LogoView} from './styles';

export default function Logo() {
    return (
        <LogoView>
            <Image source={logoVitrine} />
        </LogoView>
    );
}
