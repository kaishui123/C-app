import axios from 'axios';
import baseURL, {
  URLS,
} from './URLS';

const appkey = 'kaishui_1622427561036';
const request = axios.create({
  baseURL,
  params: {
    appkey,
  },
});
request.interceptors.response.use((value) => value.data);

const getSideList = (type) => request.get(
  URLS.getSide, {
    params: {
      type,
    },
  },
);

const getGoodsList = (type, page, size, sort) => request.get(
  URLS.getGoodsList, {
    params: {
      type,
      page,
      size,
      sort,
    },
  },
);

const likeSearch = (value) => request.get(
  URLS.likeSearch, {
    params: {
      likeValue: value,
    },
  },
);

const search = (type, page, size) => request.get(
  URLS.search, {
    params: {
      type,
      page,
      size,
    },
  },
);

export default {
  getSideList,
  getGoodsList,
  likeSearch,
  search,
};
