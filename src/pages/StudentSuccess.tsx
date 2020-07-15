import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import { Navigation } from '../types';

type Props = {
    navigation: Navigation;
};

const StudentSuccess = ({ navigation }: Props) => {
    let student = navigation.getParam('student', {});
    return (
        <Background>
            <Logo />
            <Header>Registrado en {student.topic}{student.course}</Header>
            <Title>Tu posición es {student.order}</Title>
            <Paragraph>
                    
            </Paragraph>
        </Background>);
};

export default memo(StudentSuccess);