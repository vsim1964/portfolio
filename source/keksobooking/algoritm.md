
// {
//   "author": {
//     "avatar": ,
//   },
//   "offer": {
//     "title": ,
//     "address": ,
//     "price": getRandomInteger(500000, 1000000),
//     "type": ,
//     "rooms": ,
//     "guests": ,
//     "checkin": ,
//     "checkout": ,
//     "features": [
//       "wifi",
//       "washer",
//       "elevator",
//       "parking",
//       "dishwasher",
//       "conditioner"
//     ],
//     "description":

//       "photos": [

//       ]
//   },
//   "location": {

//   }
// }



### ИНИЦИАЛИЗАЦИЯ

- Загрузка и успешная инициализация карты (карта реализуется сторонней библиотекой Leaflet) переводит страницу в активное состояние.

=> установить карту
=> РЕАЛИЗОВАТЬ по событию загрузки карты перевод в активный режим - удалить атрибуты disabled и соответствущие классы




## СБОР И ОТПРАВКА ДАННЫХ
- После заполнения всех данных, при нажатии на кнопку «Опубликовать», все данные из формы, включая изображения,
с помощью AJAX-запроса отправляются на сервер https://24.javascript.pages.academy/keksobooking
методом POST с типом multipart/form-data.

=> значения полей будут отправляться в создаваемый объект
=> событие на конпке отправляет объект на сервер

Например,


### Объект и идентификаторы для свойств и значений
```
{
  "author": {
    "avatar": "img/avatars/user04.png"
  },
  "offer": {
    "title": "Квартира студия в престижном районе",
    "address": "Chiyoda-ku, Tōkyō-to 102-0091",
    "price": 88000,
    "type": "bungalow",
    "rooms": 6,
    "guests": 5,
    "checkin": "7:00",
    "checkout": "10:00",
    "features": [
      "wifi",
      "washer",
      "elevator",
      "parking",
      "dishwasher",
      "conditioner"
    ],
    "description": "Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.",
    "photos": [
      "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/cameron-venti-R64qgQ6rr_o.jpg",
      "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
      "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
    ]
  },
  "location": {
    "lat": 35.66478515199194,
    "lng": 139.7046871667523
  }
}
```
