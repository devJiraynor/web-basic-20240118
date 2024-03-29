/*
    디스트럭처링 :
    - 구조화된 배열 또는 객체를 비구조화, 구조화 파괴하여 개별 변수로 할당하는 것
    - 배열 또는 객체에서 필요한 데이터만 추출해서 변수에 할당하여 사용할 수 있도록 함
*/

let king = {
    name: '이성계',
    tombName: '태조',
    birth: '1335.11.04.',
    death: '1408.06.27.'
};

// let name = king.name;
// let tombName = king.tombName;
// let birth = king.birth;
// let death = king.death;

let fruits = ['apple', 'banana', 'melon', 'mango', 'orange'];

// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];
// let fruit4 = fruits[3];
// let fruit5 = fruits[4];

/*
    배열 디스트럭처링
    - 배열의 각각의 요소를 배열로부터 추출해서 변수에 할당
    - 할당 기준은 인덱스
*/
// fruits = ['apple', 'banana', 'melon', 'mango', 'orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

console.log('========================================');

/*
    spread 연산자를 활용
    - 
*/



console.log('========================================');

/*
    객체 디스트럭처링
    - 
    - 
*/



console.log('========================================');

/*
    spread 연산자를 활용
    - 
*/



console.log('========================================');