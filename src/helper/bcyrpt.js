import {pbkdf2} from 'crypto';
const hash = (password, salt) => {
  return new Promise((resolve, reject) => {
    pbkdf2(password, salt, 50, 100, 'sha512', (err, values) => {
      if (err) {
        return reject(err);
      }

      resolve(values.toString('hex'));
    });
  });
}

export { hash };
