import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newSale = () => {
  return {
    id: Math.floor(Math.random() * 1000),
    festival_id: Math.floor(Math.random() * 1000),
    tickets_sold: Math.floor(Math.random() * 100000),
    profit: Math.floor(Math.random() * 1000000)
  };
};

export default function makeTradeSignalsData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newSale(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}
