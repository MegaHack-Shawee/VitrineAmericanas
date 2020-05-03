import React from 'react';
import {View} from 'react-native';
import Lottie from 'lottie-react-native';

import animation from '../../assets/animations/loading.json';
import {Container, LottieView} from './styles';

const LoadingAnimation = () => {
    return (
        <Container>
            <LottieView>
                <Lottie resizeMode="contain" source={animation} autoPlay loop />
            </LottieView>
        </Container>
    );
};

export default LoadingAnimation;
