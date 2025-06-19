export type Challenge = {
  id: number;
  word: string;
  tip: string;
};

export const WORDS: Challenge[] = [
  { id: 1, word: 'CSS', tip: 'Linguagem de estilos' },
  { id: 2, word: 'REACT', tip: 'Biblioteca para criar interfaces Web' },
  { id: 3, word: 'HTML', tip: 'Linguagem de marcação' },
  {
    id: 4,
    word: 'Javascript',
    tip: 'Uma das linguagens de programação mais utilizadas no mundo',
  },
  { id: 5, word: 'Typescript', tip: 'Para adicionar tipagem no Javascript' },
  { id: 6, word: 'Node', tip: 'Um ambiente de execução para JavaScript' },
  { id: 7, word: 'Express', tip: 'Framework para criar APIs' },
  { id: 8, word: 'Nest', tip: 'Framework contruído com Express' },
  { id: 9, word: 'Next', tip: 'Framework contruído através do React' },
  { id: 10, word: 'SQL', tip: 'Linguagem de consulta para bancos de dados' },
  { id: 11, word: 'MongoDB', tip: 'Banco de dados NoSQL' },
  { id: 12, word: 'Git', tip: 'Ferramenta para controle de versões' },
  { id: 13, word: 'Angular', tip: 'Framework para criar interfaces Web' },
  { id: 14, word: 'Vue', tip: 'Framework para criar interfaces Web' },
];
