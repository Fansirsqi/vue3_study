import axios from "./../utils/axios";

function getAdminListBySearchAndPage({ currentPage, PageSize, searchName }) {
  return axios({
    url: "xxxx",
    method: "post",
    data: { currentPage, PageSize, searchName },
  });
}
