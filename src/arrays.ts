export default class CoolArray<T> {
  public length: number;
  public data: T[];

  constructor(...items: T[]) {
    this.length = items.length;
    this.data = { ...items };
  }

  get(index: number) {
    return this.data[index];
  }

  push(item: T) {
    this.data[this.length + 1] = item;
    this.length++;
  }

  shift() {
    const firstItem = this.data[0];
    this.shiftIndex(0);
    return firstItem;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  toString() {
    return Object.values(this.data);
  }

  delete(index: number) {
    delete this.data[index];
  }

  shiftIndex(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
  }
}

const myArray = new CoolArray("Zero", "Poli", "Suzaku", "Miles");

console.log(myArray.toString());

console.log(myArray.length);

myArray.push("Nyanners");

console.log(myArray.length);

console.log(myArray.toString());
