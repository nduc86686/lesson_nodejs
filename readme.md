##Crypto trong Node.js
**Trong Node.js, module crypto được sử dụng để cung cấp các chức năng mã hóa và giải mã các chuỗi và dữ liệu. Module này hỗ trợ nhiều thuật toán mã hóa, bao gồm cả symmetric và asymmetric encryption.**

**Để sử dụng module crypto trong Node.js, trước tiên cần import module này bằng cách sử dụng lệnh require như sau:**

``
const crypto = require('crypto');``

**Sau khi import module crypto, ta có thể sử dụng các phương thức của module này để thực hiện các chức năng mã hóa và giải mã.**

**Ví dụ, để mã hóa một chuỗi sử dụng thuật toán AES-256-CBC với một key và iv cho trước, ta có thể sử dụng phương thức crypto.createCipheriv như sau:**


```const key = 'mysecretkey';
const iv = 'myiv';
const algorithm = 'aes-256-cbc';
const text = 'Hello world';
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(text, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
```

**Phương thức createCipheriv trả về một đối tượng Cipher, cho phép ta mã hóa các dữ liệu theo thuật toán và key được chỉ định. Phương thức update và final được sử dụng để mã hóa dữ liệu đầu vào, sau đó trả về chuỗi mã hóa dưới dạng hex.**

**Tương tự, để giải mã một chuỗi đã được mã hóa sử dụng thuật toán AES-256-CBC với cùng một key và iv, ta có thể sử dụng phương thức crypto.createDecipheriv như sau:**

```
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log(decrypted);
```
**Phương thức createDecipheriv trả về một đối tượng Decipher, cho phép ta giải mã chuỗi đã được mã hóa theo thuật toán và key được chỉ định. Phương thức update và final được sử dụng để giải mã dữ liệu đầu vào, sau đó trả về chuỗi gốc dưới dạng utf8.**

**Module crypto trong Node.js cung cấp nhiều thuật toán mã hóa khác nhau, cùng với các chức năng khác như tạo chữ ký số và xác thực người dùng. Ta có thể tìm hiểu thêm về module này trong tài liệu chính thức của Node.js.**