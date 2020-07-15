import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Title from '../components/Title';
import ButtonExample from '../components/ButtonExample'
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>ORT en CASA</Header>
    <Title>Selecciona tu ROL</Title>
    <Paragraph>Por Favor Ingresa a donde corresponde.</Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('StudentScreen')}>
      Alumno
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('LoginScreen')}
    >
      Docente
    </Button>
  </Background>
);

export default memo(HomeScreen);
