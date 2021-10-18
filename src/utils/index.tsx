const tags = [
  'test', 'da', 'sort', 'integral', 'arrat', 'exelent', 'terror', 'master', 'sould', 
]

export const getRandomTag = () => {
  const index = Math.floor(Math.random() * tags.length);
  return tags[index];
}