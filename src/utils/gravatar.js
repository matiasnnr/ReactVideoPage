import md5 from 'md5';

const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/';
    const formattedEmail = email.trim().toLowerCase();
    const hash = md5(formattedEmail, { encoding: "binary" });
    return `${base}${hash}`; //url que vamos a usar para presentar nuestro avatar en la aplicación de video
}

export default gravatar;
