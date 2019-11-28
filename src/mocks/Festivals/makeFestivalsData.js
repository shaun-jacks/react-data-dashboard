import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const TYPES = ["Jazz", "EDM", "Blues", "Pop", "Rock", "Indie", "Alternative"];

const newFestival = () => {
  return {
    id: Math.floor(Math.random() * 1000),
    title: namor.generate({ words: 1, numbers: 0 }),
    location: namor.generate({ words: 1, numbers: 0 }),
    type: TYPES[Math.floor(Math.random() * 7)],
    date_start: new Date().getTime(),
    date_end: new Date().getTime(),
    max_occupants: Math.floor(Math.random() * 100000),
    max_artists: Math.floor(Math.random() * 100),
    employees: Math.floor(Math.random() * 200)
  };
};

export default function makeSignalData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newFestival(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}
