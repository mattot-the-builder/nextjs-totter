const totts: Tott[] = [
  {
    username: "johndoe",
    content: "Hello World!",
  }
];

function addTott(tott: Tott) {
  totts.push(tott);
}

function getAllTott() {
  return totts;
}

export { addTott, getAllTott };
