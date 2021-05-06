import formatter from './formatter.js';

const compare = (filepath1, filepath2) => {
  const coll1 = Object.entries(formatter(filepath1)).map((key) => key.join(': '));
  const coll2 = Object.entries(formatter(filepath2)).map((key) => key.join(': '));

  const result = coll1.reduce((acc, item) => {
    coll2.includes(item) ? acc.push(`   ${item}`) : acc.push(` - ${item}`);
    return acc;
  }, []);

  coll2.reduce((acc, item) => {
    if (!coll1.includes(item)) {
      acc.push(` + ${item}`);
    }
    return acc;
  }, result);

  result.sort((a, b) => {
    if (a[3] > b[3]) {
      return 1;
    } if (a[3] < b[3]) {
      return -1;
    }
    return 0;
  });

  return `{\n${result.join('\n')} \n}`;
};

export default compare;
