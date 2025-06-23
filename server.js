const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Укажите папку, где находятся ваши HTML и CSS файлы
app.use(express.static(path.join(__dirname, 'public')));

// Обработка главного маршрута
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'veteran.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
