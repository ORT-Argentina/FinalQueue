import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { Navigation } from '../types';
import {
  dniValidator,
  nameValidator,
  courseValidator
} from '../core/validators';
import axios from 'axios';
import api from '../services/api';
import { theme } from '../core/theme';
import { ToastProvider, useToasts } from 'react-toast-notifications'

//import Snackbar from 'react-native-snackbar';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  
  const { addToast } = useToasts();

  const [name, setName] = useState({ value: 'PR2', error: '' });
  const [course, setCourse] = useState({ value: '', error: '' });
  const [dni, setDNI] = useState({ value: '', error: '' });

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const courseError = courseValidator(course.value);
    const dniError = dniValidator(dni.value);

    if (dniError || nameError || courseError) {
      setDNI({ ...dni, error: dniError });
      setName({ ...name, error: nameError });
      setCourse({ ...course, error: courseError });
      return;
    }

    axios.post(api.url.concat('/queue'), {
      "topic": name.value,
      "course": course.value,
      "dni": dni.value
    }).then(function (res) {
      if (res.data.status == 'success') {
        navigation.navigate('StudentSuccess', { student: res.data.data } );
      } else {
        addToast(res.data.message, { appearance: 'warning' })
        /*Snackbar.show({
          text: res.data.message,
          duration: 2000,
        });*/
      }
    }).catch(function (error) {
      console.log(error);
      addToast("Hay un error en el servidor.", { appearance: 'error' })
      /*Snackbar.show({
        text: "Hay un error en el servidor.",
        duration: 2000,
      });*/
    });
  };

  return (
    <Background>

      <Logo />

      <Header>Registro de Alumnos</Header>

      <TextInput
        label="Materia"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        editable={false}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Curso"
        returnKeyType="next"
        value={course.value}
        onChangeText={text => setCourse({ value: text, error: '' })}
        error={!!course.error}
        errorText={course.error}
      />

      <TextInput
        label="DNI"
        returnKeyType="next"
        value={dni.value}
        onChangeText={text => setDNI({ value: text, error: '' })}
        error={!!dni.error}
        errorText={dni.error}
        autoCapitalize="none"
        autoCompleteType="cc-number"
        textContentType="oneTimeCode"
        keyboardType="number-pad"
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>Registro</Button>

    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
