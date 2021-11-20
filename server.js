/* eslint-disable prettier/prettier */
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = require("./app");

const PORT = process.env.PORT || 3000;
console.log(app.get("env"));
app.listen(PORT, () => {
  console.log(`Server  running on port ${PORT}`);
});
