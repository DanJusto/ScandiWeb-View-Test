export function TypesAttribute (type, attribute) {
  
  const arrIndex = ['dvd', 'book', 'furniture'];

  const index = arrIndex.indexOf(type);

  const arrExt = ['MB', 'KG', ''];

  const arrName = ['Size: ', 'Weight: ', 'Dimension: '];

  const result = arrName[index] + attribute + arrExt[index];

  return result
}