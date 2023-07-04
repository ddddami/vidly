import _ from "lodash";

// const paginate = function (data, page, pageSize) {
//   if (data.length <= pageSize) return data;
//   const paginatedData = _.chunk(data, pageSize)[page - 1];
//   return paginatedData ? paginatedData : [];
// };

const paginate = function (data, page, pageSize) {
  const startIndex = (page - 1) * pageSize;
  if (data.length <= pageSize) return data;
  return _(data).slice(startIndex).take(pageSize).value();
};
export default paginate;
