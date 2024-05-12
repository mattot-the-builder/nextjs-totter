type Tott = {
  username: string,
  content: string
}

interface Store {
  totts: Tott[];

  addTott: (tott: Tott) => void;
  getAllTott: () => Tott[];
}
