export const getPokemonIndex = (index: number) => {
  if (index < 10) {
    return `00${index}`;
  } else if (index < 100) {
    return `0${index}`;
  } else {
    return index.toString();
  }
};
