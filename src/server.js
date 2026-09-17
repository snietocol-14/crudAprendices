const app = require("./app");

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`SERVER http://localhost:${PORT}`)
})