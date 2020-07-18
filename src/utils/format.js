export const formatPrice = (number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(number)
}

export const formatDate = (date) => {
  const [year, month] = date.split('-');
  const monthArray = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  const chooseDate = `${monthArray[Number(month) - 1]} / ${year}`
  return chooseDate;
}

export const formatNumber = (number) => {
  return number.toString().padStart(2, '0');
}

export const actualMonth = () => {
  const now = new Date();
  const today = formatNumber(now.getDate());
  const thisYear = now.getFullYear();
  const thisMonth = formatNumber(now.getMonth() + 1);
  return {
    today: `${thisYear}-${thisMonth}-${today}`,
    thisDate: `${thisYear}-${thisMonth}`
  }
}

export const formatLetter = (word) => {
  return word.replace(/[áàãâää]/ig, "a")
      .replace(/[éèêë]/ig, "e")
      .replace(/[íìîï]/ig, "i")
      .replace(/[óòôõö]/ig, "o")
      .replace(/[úùûü]/ig, "u")
      .toLowerCase();
}