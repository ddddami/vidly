import _ from "lodash";

const paginate = function (data, page, pageSize) {
  const paginatedData = _.chunk(data, pageSize)[page - 1];
  return paginatedData ? paginatedData : [];
};

// const paginate = function (data, page, pageSize) {
//   const startIndex = (page - 1) * pageSize;
//   return _(data).slice(startIndex).take(pageSize).value();
// };
export default paginate;
