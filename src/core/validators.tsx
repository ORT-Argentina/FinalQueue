export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'El campo E-Mail no puede estar vació.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const dniValidator = (dni: string) => {
  const re = /^[0-9\b]+$/;

  if (!dni || dni.length <= 0) return 'El campo DNI no puede estar vació.';
  if (!re.test(dni)) return 'No pareceser un DNI válido. Unicamente los números';

  return '';
};

export const courseValidator = (text: string) => {
  const re = /(a|A|b|B)/;

  if (!text || text.length <= 0) return 'El curso no puede estar vació.';
  if (!re.test(text)) return 'No pareceser ser un curso válido.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'La contraseña no puede estar vaciá.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'El campo Nombre es obligatorio.';

  return '';
};
