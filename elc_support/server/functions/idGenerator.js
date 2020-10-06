module.exports = function idGen(lastId){
  const type= lastId.slice(0,2).toUpperCase()
  const num = parseInt(lastId.slice(2,lastId.length))+1
  const id=type+num
  return id;
}
