const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

sequelize
    
    .sync({ force: false })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connection succeeded!')
            console.log(`Server is running! Port number is ${PORT} ...`);
        });
    })
    .catch((err) => {
        console.error(err);
    });