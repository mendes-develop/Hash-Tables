class Hashtable {
  constructor(size=53){
    this.keyMap = new Array(size)

  }

  hashFunc(key) {
    let total = 0;
    let weirdPrime = 31; // hash functions take advantage of prime #s to reduce collisions
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * weirdPrime + value) % this.keyMap.length;
    }
    return total
  }

  set(key, value){
    //set a key-value pair
    let index = this.hashFunc(key)
    if (!this.keyMap[index]) this.keyMap[index] = []
    this.keyMap[index].push([key, value])
  }

  get(key){
    let index = this.hashFunc(key)
    let array = this.keyMap[index]
    if (!array) return false
    let element = array.find( ar => ar[0] === key)
    return element ? element[1] : false
  }

  getKeys(){
    let keys = []
    for (let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        this.keyMap[i].forEach(ar => keys.push(ar[0]))
      }
    }
     return keys
  }

  getValues(){
    let values = []
    for (let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        this.keyMap[i].forEach(ar => values.push(ar[1]))
      }
    }
    return values
  }

}

const hashNew = new Hashtable(5)

hashNew.set("color", "blue")
hashNew.set("drink", "whiskey")
hashNew.set("sport", "volleyball")
hashNew.set("food", "lasagna")
console.log(hashNew)
console.log("______")
console.log(hashNew.get("color"))
console.log(hashNew.get("alex"))
console.log("______")
console.log(hashNew.getKeys())
console.log(hashNew.getValues())










































// function hash(key, arrayLen) {
//   let total = 0;
//   for (let i = 0; i < key.length; i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96 // alphabetic position of char
//     total = (total + value) % arrayLen; // % keeps it within arrayLen
//   }
//   return total
// }

// function hash(key, arrayLen) {
//   let total = 0;
//   let weirdPrime = 31; // hash functions take advantage of prime #s to reduce collisions
//   for (let i = 0; i < Math.min (key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96
//     total = (total * weirdPrime + value) % arrayLen;
//   }
//   return total
// }

// console.log(hash("pink", 10), "key")
// console.log(hash("blue", 10), "Alex")
// console.log(hash("black", 10), "house")
// console.log(hash("whit", 10), "KEy")