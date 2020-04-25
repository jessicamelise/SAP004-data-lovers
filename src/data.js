// funções de exemplo

export const filterData = (data, type, condition) => {
  if (type === "type") {
    return data.filter((item) => item[type].find(e => e === condition));
  }
  else {
    return data.filter((item) => item[type] === condition);
  }
};

export const sortData = (data, sortBy) => {
  data.map(item => {
    if(item["spawn_time"] === "N/A") {
      item["spawn_time"] = "00:00"
    }
  })
    return data.slice().sort((a,b) =>a[sortBy]>b[sortBy]?1:-1);
}