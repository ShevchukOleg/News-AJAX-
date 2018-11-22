class NewsService {
    constructor(http) {
        this._key = "9c27b0f722b84da5a08312d2b125351b";
        this._url = "https://newsapi.org/v2";
        this._country = "ua";
        this._category = "technology";
        this._http = http;
    }
    /**
     * 
     * @param {*} callback 
     * @param {*} country 
     * @param {*} category 
     */
    fetchTopHeadlines(callback, country = this._country, category = this._category) {
        this._http.get(`${this._url}/top-headlines?country=${country}&category=${category}&apiKey=${this._key}`, callback);
    }
}

