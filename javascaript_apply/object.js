let test = {
      key: "value", // 프로퍼티 (객체 프로퍼티)
      key2: "value2",
      key3: true,
      key4: undefined,
      key5: [1, 2],
      key6: function test () {
            console.log("key6 function")
      }
}; // 객체 리터럴 방식
// console.log(test);


let person = {
      name: "이름",
      age: 29
}
// console.log(person[name]);
// console.log(person.name);

// console.log(getPropertyValue("name"));

function getPropertyValue(key){
      return person[key];
}

person.location = "한국";
person.gender["남성"];
// console.log(person.location);
console.log(person.gender);