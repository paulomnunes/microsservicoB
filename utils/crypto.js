const crypto = require('crypto')
const CRYPTO_ALGORITHM = process.env.CRYPTO_ALGORITHM
const CRYPTO_KEY = encodeURIComponent(process.env.CRYPTO_KEY)

function encrypt(value) {
    const cipher = crypto.createCipheriv('aes-192-ecb', 'minha-senha-super-segura', null);
    let encryptedValue = cipher.update(String(value), 'utf8', 'hex');
    encryptedValue += cipher.final('hex');
    return encryptedValue;
}

function decrypt(value) {
    if (!value) {
        return value;
    }

    const decipher = crypto.createDecipheriv('aes-192-ecb', 'minha-senha-super-segura', null);
    let decryptedValue = decipher.update(String(value), 'hex', 'utf8');
    decryptedValue += decipher.final('utf8');
    return decryptedValue;
}

module.exports = {
    encrypt,
    decrypt
};