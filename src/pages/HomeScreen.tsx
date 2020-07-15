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
    <Header>Pantalla de bienvenida</Header>
    <Title>ORT en CASA</Title>
    <Paragraph>
      Este es un ejemplo de pantalla de login
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Ingreso
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Registro
    </Button>
    <ButtonExample></ButtonExample>
  </Background>
);

export default memo(HomeScreen);
