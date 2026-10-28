# Find the Christmas Tree

Игра на удачу и скорость: откройте клетки и найдите ёлки, не наступив на бомбу.

**[Играть онлайн →](https://ceyhun1999.github.io/GAME-Find-Christmas_Tree/)**

<p align="center"><img src="screenshots/game.png" width="520" alt="Find the Christmas Tree"></p>

## Как играть

- На поле 4×4 спрятаны ёлки 🎄 и три бомбы 💣
- Нажимайте на клетки: ёлка — клетка становится зелёной, бомба — игра окончена
- Таймер на 29 секунд; кнопка **Again** запускает новую партию

## Структура

```
├── index.html
├── css/
└── javascript.js   # таймер, случайная раскладка, открытие клеток
```

## Запуск

Игра работает без сборки. Откройте `index.html` в браузере или поднимите локальный сервер:

```bash
python3 -m http.server 8000
```

и перейдите на http://localhost:8000.

## Стек

HTML · CSS · JavaScript (без библиотек)
