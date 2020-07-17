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
  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = formatNumber(today.getMonth() + 1);
  return `${thisYear}-${thisMonth}`;
}