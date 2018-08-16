# Frontend-test-task
## Описание
Тестовое задание представляет собой сервер (express.js).
Для запуска сервера необходимо:
- Установить зависимости (npm i)
- Запустить (npm run server)
- Заготовлены скрипты для разработки в package.json:
  - npm start (для дев-сборки, разработки: запускает сборку webpack и сервер express)
  - npm run prod (для продакшн-сборки)

Сервер реализуетследующий функционал:

| UR            | Метод | Параметры       | Описание                      |
|---------------|-------|-----------------|-------------------------------|
| /signup       | POST  | login, password | Регистрация                   |
| /login        | POST  | login, password | Авторизация                   |
| /category     | GET   |                 | Список категорий              |
| /category/2   | GET   |                 | Список подкатегорий           |
| /products     | GET   |                 | Список всех продуктов         |
| /products/1   | GET   |                 | Список продуктов по категории |


### Регистрация и авторизация
Пользователь создается в рантайме, после рестарта сервера все данные пропадают.
После успешной авторизации, сервер возвращает парметр sid, с помощью которого проверяется авторизация 
пользователя в запросах к категориям и продуктам.

### Запрос категорий и продуктов
В заголовке запроса должен передаваться параметр sid, получаемый после авторизации.

## Задача
Реализовать одностраничное приложение - каталог продуктов.
Использовать исходный конфиг webpack для расширения.

### Функционал
- Страница регистрации ( логин и пароль );
- Страница авторизации;
- Отображение списка категорий ( подкатегрии загружаются по клику на категорию )
- Список продуктов активной категории;

Визуальная часть, также оценивается.
**Не рекомендуется использовать фреймворки для стилизации.**

### Технологии
- React (предпочтительнее, вместе с сопутствующим стеком: redux, react-router)
