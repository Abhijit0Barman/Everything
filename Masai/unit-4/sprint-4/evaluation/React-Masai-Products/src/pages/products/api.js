import axios from "axios";

export const getProducts = (params) => {
  const { page, limit, sortCriteria, sortOrder, filter } = params;
  const finalParams = {};

  if (page && limit) {
    finalParams.page = page;
    finalParams.limit = limit;
  }
  if (sortCriteria && sortOrder) {
    finalParams.sort = sortCriteria;
    finalParams.order = sortOrder;
    console.log(sortCriteria, sortOrder)
  }

  if (filter) {
    finalParams.filter = filter;
  }

  return axios({
    method: "get",
    url: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`,
    params: finalParams,
  }).then((res) => res);
};
