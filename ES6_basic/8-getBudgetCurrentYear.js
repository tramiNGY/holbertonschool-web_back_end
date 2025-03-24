function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const prop_income = "income";
  const prop_gdp = "gdp";
  const prop_capita = "capita";

  budget[prop_income] = income;
  budget[prop_gdp] = gdp;
  budget[prop_capita] = capita;

  return budget;
}
