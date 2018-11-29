/**
 * CustomHttp - класс для создания объекта взаимодействия с сервером
 * @param {Text} url - адрес запроса
 * @param {Function} callback - обработчик принимающий ответ сервера
 */
class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.addEventListener("load", () => {
            callback(JSON.parse(xhr.responseText));
        });

        xhr.send();
    }
}