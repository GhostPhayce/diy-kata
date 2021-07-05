const joinNames = namesObj => {
  const names = namesObj.map(person => person.name).join(", ");
  const lastComma = names.lastIndexOf(",");
  return `${names.substr(0, lastComma)} &${names.substr(lastComma + 1)}`;
};

module.exports = joinNames;
