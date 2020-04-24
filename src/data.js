// funções de exemplo

export const filterData = (data,type, condition) => {
  if(type === "type") {
    return data.filter((item) => item[type].find(e => e === condition))
  }
  else  {
    return data.filter((item) => item[type] === condition);};
};



