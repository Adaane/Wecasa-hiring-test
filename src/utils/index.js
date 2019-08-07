export var setId = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const displayCentsToEuro = cents =>
  (cents / 100).toLocaleString("fr", { style: "currency", currency: "EUR" });

export const convertMinutesToHours = minutes => {
  const minutesModulo60 = minutes % 60;
  const hours = (minutes - minutesModulo60) / 60;

  return `${hours ? hours + 'h' : ''}${minutesModulo60 !== 0 ? minutesModulo60 + 'min' : ''}`;
};


export const getTotalPrice = (prestations) => {
  return displayCentsToEuro(prestations && prestations.reduce((acc, curr) => {
    return acc + curr.priceNumber
  }, 0))

}

export const getTotalDuration = (prestations) => {
  return convertMinutesToHours(prestations && prestations.reduce((acc, curr) => {
    return acc + curr.durationAbsolue
  }, 0))

}


export const tabList = [
  {
    key: 'man',
    tab: 'Homme',
  },
  {
    key: 'woman',
    tab: 'Femme',
  },
  {
    key: 'child',
    tab: 'Enfant',
  },
];


