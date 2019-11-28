import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newSignal = () => {
  return {
    id: Math.floor(Math.random() * 1000),
    refid: Math.floor(Math.random() * 1000),
    signals_type_id: Math.floor(Math.random() * 1000),
    open_time: new Date().getTime(),
    close_time: new Date().getTime(),
    asset: namor.generate({ words: 1, numbers: 0 }),
    direction: namor.generate({ words: 1, numbers: 0 }),
    open_price: Math.floor(Math.random() * 100),
    close_price: Math.floor(Math.random() * 100),
    results: Math.floor(Math.random() * 100),
    winper: Math.random(),
    close_hour: Math.floor(Math.random() * 24),
    close_min: Math.floor(Math.random() * 60)
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newSignal(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}
