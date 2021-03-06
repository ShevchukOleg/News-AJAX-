// Create instance
const newsService = new NewsService(new CustomHttp());
const newsUI = new NewsUI();

// UI elements
const countrySelect = document.querySelector(".country");
const categorySelect = document.querySelector(".category");
const queryForm = document.querySelector("form");
const queryTheme = queryForm.elements["NewsTheme"];

/**
 * getCountryTechnolodyHandler -
 * @param {Text} country - регион для запроса новостей
 * @param {Text} category - категория новостей
 */
const getCountryTechnolodyHandler = () => {
  const country = countrySelect.value;
  const category = categorySelect.value;

  newsService.fetchTopHeadlines((res) => {
    console.log(res);
    const { articles, totalResults } = res;
    if (totalResults < 1) alert("Ошибка ответа сервера!");

    newsUI.clearContainer();
    articles.forEach(news => newsUI.addNews(news));
  }, country, category);
}

/**
 * getQueryHandler - обработчик запроса с проверкой и запуском запроса, очищения темплейта и раздачи на оформления новостей
 * @param {event} e -  событие при отправке формы
 * @param {Text} query -  пользовательский запрос
 */
const getQueryHandler = (e) => {
  e.preventDefault();
  const query = queryTheme.value;

  if (query.length == 0) {
    alert("Введите корректный запрос");
  } else {
    newsService.fetchNewsByQuery((result) => {
      const { articles, totalResults } = result;
      if (totalResults == 0) alert("Нет данных по введенному запросу.")
      newsUI.clearContainer();
      articles.forEach(news => newsUI.addNews(news));
    }, query);
  }
}

countrySelect.addEventListener("change", getCountryTechnolodyHandler);
categorySelect.addEventListener("change", getCountryTechnolodyHandler);
queryForm.addEventListener("submit", getQueryHandler);
window.addEventListener("load", getCountryTechnolodyHandler);
