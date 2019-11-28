import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const GENRES = ["Jazz", "EDM", "Blues", "Pop", "Rock", "Indie", "Alternative"];

const newArtist = () => {
  return {
    id: Math.floor(Math.random() * 1000),
    artist: namor.generate({ words: 1, numbers: 0 }),
    genre: GENRES[Math.floor(Math.random() * 7)],
    members: Math.floor(Math.random() * 10),
    origin: namor.generate({ words: 2, numbers: 0 })
  };
};

export default function makeContractData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newArtist(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}
