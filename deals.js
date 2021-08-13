const masha = 50;
const petya = -0.2;
const vasya = -0.5;
const goodMode = 1370;

const needDeals = 2100;
const period = 16;

const getPetyasDeals = () => {
  return masha + masha * petya;
};

const getVasyasDeals = (deals) => {
  return deals > goodMode ? masha : masha + masha * vasya;
};

const getMonthByDeels = () => {
  let months = 0;
  let deals = 0;
  while (deals <= needDeals) {
    deals += getMonthDeals(deals);
    months++;
  }
  return months;
};

const getDealsByMonth = () => {
  let deals = 0;
  for (let i = 0; i < period; i++) {
    deals += getMonthDeals(deals);
  }
  return deals;
};

const getMonthDeals = (deals) => {
  return masha + getPetyasDeals() + getVasyasDeals(deals);
};

console.log(getMonthByDeels());
console.log(getDealsByMonth());
