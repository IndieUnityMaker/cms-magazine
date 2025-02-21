# Домашний проект: CMS Magazine

## Главная страница

Отображение общей информации о магазине, таких как текущие продажи, количество товаров на складе и важные новости.

### Блоки с графиками:

-   Динамика продаж за неделю/месяц.

### Кнопки для быстрого доступа:

-   Основные функции.

## Управление товарами

### Список товаров:

-   Таблица с полями для:
    -   Имя товара
    -   Категория
    -   Цена
    -   Количество на складе
    -   Статус (в наличии/нет)
    -   Кнопки "Редактировать" и "Удалить"

### Добавление/Редактирование товара:

-   Форма с полями для заполнения:
    -   Название
    -   Описание
    -   Категория
    -   Цена
    -   Количество
    -   Изображение

### Фильтрация товаров:

-   Возможность фильтрации по категориям.
-   Поисковая строка.

### Импорт/Экспорт:

-   Загрузка товаров из файла (например, CSV).
-   Экспорт товаров в файл.

## Управление заказами

### Список заказов:

-   Отображение всех заказов с информацией о:
    -   Заказчике
    -   Товарах в заказе
    -   Сумме
    -   Статусе заказа (новый, завершен, отменен)

### Создание нового заказа:

-   Форма для добавления нового заказа с выбором:
    -   Товаров
    -   Их количества
    -   Информации о покупателе

### История заказов:

-   Возможность просматривать и искать прошлые заказы.

## Управление клиентами

### Список клиентов:

-   Таблица с информацией о клиентах:
    -   ФИО
    -   Контактные данные
    -   История заказов

### Добавление/Редактирование клиента:

-   Форма с полями для:
    -   Имени
    -   Телефона
    -   Адреса
    -   Примечаний

### Поиск клиентов:

-   Функция поиска по имени или контактной информации.

## Отчеты

### Дашборд:

-   Визуализация данных в виде графиков и диаграмм.
-   Информация о:
    -   Общих продажах
    -   Топ-продаваемых товарах
    -   Анализ прейскурантов и отгрузок

### Экспорт отчетов:

-   Возможность скачивания отчетов в формате PDF или Excel.

## Настройки

### Настройки аккаунта:

-   Изменение пароля
-   Настройка уведомлений

### Настройки магазина:

-   Имя магазина
-   Контактная информация
-   Рабочие часы

### Управление ролями:

-   Добавление новых пользователей с различными правами доступа.

## Интеграция с такси (если актуально для бизнеса)

### Заказ такси для доставок:

-   Возможность создать новый заказ на такси с указанием адреса отправления и назначения, привязка к текущим заказам.

### История доставок:

-   Список всех заказов, выполненных с помощью такси, с состоянием доставки.

## Технологии

-   **Frontend**: React, TypeScript, Redux для управления состоянием приложения.
-   **Backend**: Node.js с Express для создания API.
-   **База данных**: PostgreSQL или MongoDB для хранения данных о товарах, заказах и клиентах.

## Дополнительные функции

-   Уведомления: push-уведомления о важной информации, например, о низком запасе товара.
-   Поддержка мобильных устройств: адаптивный дизайн для использования на мобильных устройствах.
