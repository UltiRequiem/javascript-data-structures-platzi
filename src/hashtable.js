export class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const addres = this.hashMethod(key);

    if (!this.data[addres]) {
      this.data[addres] = [];
    }
    this.data[addres].push([key, value]);

    return this.data;
  }

  get(key) {
    const addres = this.hashMethod(key);
    const currentBucket = this.data[addres];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }
}

const myHashTable = new HashTable(50);

console.log(myHashTable.set("Zero", 45));
console.log(myHashTable.set("v1rtl", 450));
