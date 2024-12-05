const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cors());

const dbConfig = {
  user: 'usr_SAIA_LL',
  password: 'Arr3nd@d0R4_PR0',
  server: '10.60.25.149',
  database: 'LeasingAndLoanDB',
  options: {
    encrypt: false,
  },
};

app.get('/api/datos', async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request().query('SELECT * FROM ');
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});