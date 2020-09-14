//Для взаимодейстивя с сервером
class NewsService {
  constructor(http) {
    this._key = "24b5e7c7e405443592fb48a27fee2ebd";
    this._url = "https://newsapi.org/v2";
    this._country = "ua";
    this._category = "technology";
    this._http = http;
  }
  /**
   * fetchTopHeadlines - принимает параметры отбора новостей
   * @param {Function} callback - обработчик ответа сервера
   * @param {Text} country - регион для запроса новостей
   * @param {Text} category - категория новостей
   */
  fetchTopHeadlines(callback, country = this._country, category = this._category) {
    this._http.get(`${this._url}/top-headlines?country=${country}&category=${category}&apiKey=${this._key}`, callback);
  }
  fetchNewsByQuery(callback, query) {
    this._http.get(`${this._url}/everything?q=${query}&apiKey=${this._key}`, callback);
  }
}
