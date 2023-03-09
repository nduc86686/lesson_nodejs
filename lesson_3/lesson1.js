const crypto = require('crypto');

// Khóa bí mật để sử dụng cho việc mã hóa/giải mã
const secretKey = 'my-secret-key';

// Văn bản cần mã hóa/giải mã
const plaintext = 'Hello world';

// Tạo một đối tượng Cipher để mã hóa văn bản
const cipher = crypto.createCipher('aes-256-cbc', secretKey);
let encrypted = cipher.update(plaintext, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Mã hóa:', encrypted);

// Tạo một đối tượng Decipher để giải mã văn bản
const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Giải mã:', decrypted);
