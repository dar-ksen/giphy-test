const tags = [
  'test', 'da', 'sort', 'integral', 'array', 'excellent', 'terror', 'master', 'soul', 
]

export const getRandomTag = () => {
  const index = Math.floor(Math.random() * tags.length);
  return tags[index];
}