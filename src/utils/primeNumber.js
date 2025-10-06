export const isPrime = (num) => {
  if (num <= 1) return 'no'
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return 'no'
  }
  return 'yes'
}
