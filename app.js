/* 
Tiago Costa Conceição   RA: 23337
Julio César Dourado     RA: 23633
*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dados mockados
const users = [
    { name: 'tiago', password: 'senha123' },
    { name: 'julio', password: 'password123' },
    { name: 'simone', password: 'nota10'}
];

// Rota de login
app.post('/login', (req, res) => {
    const { name, password } = req.body;
    const user = users.find(u => u.name === name && u.password === password);

    if (user) {
        return res.status(200).json({ message: 'Login feito com sucesso!' });
    }
    return res.status(401).json({ message: 'senha ou nome invalidos.' });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
