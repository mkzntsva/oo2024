//otsime arvude keskmine

function arvudeKeskmine(arvud: number[]): number {
  let summa: number = 0;

  for (let i = 0; i < arvud.length; i++) {
    summa += arvud[i];
  }

  const keskmine: number = summa / arvud.length;
  return keskmine;
}

const arvud: number[] = [4, 7, 8, 10];
const keskmineVaartus: number = arvudeKeskmine(arvud);
console.log('Arvude keskmine on: ', keskmineVaartus);
