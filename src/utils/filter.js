const filter = function (data, filterBy) {
  return data.filter((d) => d.genre._id === filterBy);
};

export default filter;
