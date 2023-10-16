const arr = [1, 2, 3, 4];
const newArr = [];

// 1. forEach
arr.forEach(function (elm) { 
      newArr.push(elm * 2);
});
// == 같음
// arr.forEach((elm) => console.log(elm));
console.log(newArr);

// 2. map
const newArr2 = arr.map((elm)=>{
      return elm * 2;
});

console.log(newArr2);

// 3. includes
let number = 3;
arr.forEach((elm)=>{
      if(elm === number){
            console.log(true);
      }
});
// 주어진 배열 안에 해당 값이 있는지 여부를 파악함
console.log(arr.includes(number));

// 4.
console.log(arr.indexOf(number));

// 5. findIndex
const arr2 = [
      {color: "red"},
      {color: "black"},
      {color: "blue"},
      {color: "green"}
]
// console.log(arr2.findIndex((elm)=> elm.color === "green"));
const idx = arr2.findIndex((elm)=> elm.color === "green");
console.log(idx);

// 6. find
const idx2 = arr2.find((elm)=> elm.color === "green");
console.log(idx2);

// 7. filter
const arr3 = [
      {num: 1, color: "red"},
      {num: 2, color: "black"},
      {num: 3, color: "blue"},
      {num: 4, color: "green"},
      {num: 5, color: "blue"}
];
console.log(arr3.filter((elm)=>elm.color === "blue"));

//8. slice
console.log(arr.slice(0,2));


//9. concat
const arr4 = [
      {num: 1, color: "red"},
      {num: 2, color: "black"},
      {num: 3, color: "blue"}
];
const arr5 = [
      {num: 4, color: "green"},
      {num: 5, color: "blue"}
];
console.log(arr4.concat(arr5));

//10. sort 
let chars = ["나", "다", "가"];
let chars2 = [1, 35, 22, 3, 30]; // 숫자로 보고 정렬이 아닌 문자를 보고 정렬
console.log(chars2);
chars2.sort();
console.log(chars2);

// 정수 오름차순 정렬
const compare = (a,b)=>{
      //같다
      //크다
      //작다
      if(a > b){
            return 1
      }     
      if(a < b){
            return -1
      }
      return 0;
}
chars2.sort(compare);
console.log(chars2);

// 11. join
const arr6 = ["name", "님", "안녕하세요", "또 오셨군요"];
console.log(arr6.join(" "));