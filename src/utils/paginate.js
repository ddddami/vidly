import _ from "lodash";

const paginate = function (data, page, pageSize) {
  return _.chunk(data, pageSize)[page - 1];
};

export default paginate;
