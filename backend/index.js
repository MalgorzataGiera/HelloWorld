const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Konfiguracja połączenia z bazą danych PostgreSQL
const pool = new Pool({
  host: process.env.DATABASE_HOST || 'localhost',
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'example',
  database: process.env.DATABASE_NAME || 'usersdb',
  port: 5432,
});

// Endpoint do pobierania listy użytkowników
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Błąd serwera');
  }
});

// Uruchomienie serwera
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});


