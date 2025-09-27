// const xss = require("xss");

// console.log(xss("<script>alert('Hola')</script>"));




const bcrypt = require("bcryptjs");

(async () => {
    const res = await bcrypt.hash("mauro1234", 10)
    console.log(res);
})();

// $2b$10$OFgopkQgZpAOcEu0m2KvWOUBtXHV7ooaC4pon1wTeJCsiIp02edku