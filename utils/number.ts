function formatNumber (num: number, k?: boolean): string | number {
  if (num>1000 && k) {
    return `${(num / 1000).toFixed(1)}rb`  
  }

  return num.toLocaleString();
}

export { formatNumber }