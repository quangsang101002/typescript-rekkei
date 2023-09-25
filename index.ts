const usernames: string = 'sang';
const age: number = 20;
const isActive: boolean = false;
console.log(usernames);
console.log(age);
console.log(isActive);

//Araay
const number: number[] = [1, 2, 3];
const names: string[] = ['sang', 'quang'];
const mixed: and[] = [1, 'a', true, {}];

//funtion
const caculate = (price: number): number => {
  const rate: number = 7; //tiền thuế: 7%
  const tax = (price * rate) / 100;

  return price + tax;
};

const showName = (name: string): void => {
  console.log(name);
};
showName('Quang');
const priceWithTax = caculate(1000);
