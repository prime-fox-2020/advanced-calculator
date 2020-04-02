class Person{
  constructor(namaDepan, namaBelakang, age, gender){
    this.firstName = namaDepan
    this.lastName = namaBelakang
    this.age = age
    this.energy = 1000
    this.gener = gender
  }
  nama(){
    return this.firstName
  }
}

const object1 = new Person('jap1', 'hendy1', 20,'laki')

console.log(object1.nama())
