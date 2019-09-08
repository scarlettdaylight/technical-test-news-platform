// localstorage
const LOCALSTORAGE_NEWSLIST = 'newsPlatform_newsList';

// news type
const NEWS_TYPES_ALL = 'everything';
const NEWS_TYPES_HEADLINES = 'top-headlines';

// SOURCES
const SOURCE_WASHINGTON = 'the-washington-post';
const SOURCE_NEW_YORK_TIMES = 'the-new-york-times';

const DEFAULT_SOURCE_LIST = [SOURCE_WASHINGTON, SOURCE_NEW_YORK_TIMES];

// API
const DEFAULT_ITEM_PER_PAGE = 10;
const INITIAL_NUMBER_OF_DATA = 20;

const API_ENDPOINT_NEWS = '/api/getNews';
const API_ENDPOINT_HEADLINES = '/api/getHeadlines';

module.exports = {
  SOURCE_WASHINGTON,
  SOURCE_NEW_YORK_TIMES,
  NEWS_TYPES_ALL,
  NEWS_TYPES_HEADLINES,
  DEFAULT_SOURCE_LIST,
  DEFAULT_ITEM_PER_PAGE,
  INITIAL_NUMBER_OF_DATA,
  API_ENDPOINT_NEWS,
  API_ENDPOINT_HEADLINES,
};
