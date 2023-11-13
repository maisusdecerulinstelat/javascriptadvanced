class Animal {
  #familie;
  #mancare;
  #culoare;
  greutate;
  nrPicioare;

  constructor(greutate, nrPicioare){
    this.greutate = greutate;
    this.nrPicioare = nrPicioare;
  }
  mananca(cantitate){
    console.log(`Cantitate de hrana consumata este ${cantitate} kg`);
  } 
  doarme(ore){
    console.log(`Doarme ${ore} ore pe zi`);
  }
  comunica(mesaj) {
    console.log(`Acest animal face: ${mesaj}`);
  }


get familie() {
  return this.#familie;
}

set familie(myFam) {
  this.#familie = myFam;
}
}
export {Animal}
// buna practica spune ca pt fiecare clasa facem un fisier nou.