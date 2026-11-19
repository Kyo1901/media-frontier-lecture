
# JavaScript 정리

> **★ 표시 = 우리 수업에서 직접 다루는 것**입니다. 뒤의 숫자는 JavaScript 과목 몇 일차인지입니다.
> ★ 이 없는 것은 **필요할 때 찾아보는 용도**입니다 — 지금 몰라도 됩니다.
> 수업 슬라이드와 이 문서가 다르게 말하는 것 같으면 **슬라이드가 우선**입니다. 물어봐 주십시오.

## 목차
1. [JavaScript 기본](#javascript-기본)
2. [변수와 상수](#변수와-상수)
3. [데이터 타입](#데이터-타입)
4. [연산자](#연산자)
5. [조건문](#조건문)
6. [반복문](#반복문)
7. [함수](#함수)
8. [배열](#배열)
9. [객체](#객체)
10. [DOM 조작](#dom-조작)
11. [이벤트](#이벤트)
12. [문자열 메서드](#문자열-메서드)
13. [배열 메서드](#배열-메서드)
14. [비동기 처리](#비동기-처리)
15. [ES6+ 문법](#es6-문법)
16. [모범 사례](#모범-사례)

---

## JavaScript 기본

### JavaScript란?
**JavaScript**: 웹 페이지에 동적인 기능을 추가하는 프로그래밍 언어

### JavaScript 사용 방법 ★ JS 1일차

#### 1. 인라인 JavaScript
```html
<button onclick="alert('클릭!')">버튼</button>

```

#### 2. 내부 스크립트
```html
<script>
  console.log('Hello World');
</script>
```

#### 3. 외부 스크립트 (권장)
```html
<script src="script.js" defer></script>

```

```javascript
// script.js
console.log('Hello World');
```

### 주석 ★ JS 1일차
```javascript
// 한 줄 주석

/*
  여러 줄
  주석
*/
```

### 출력 방법 ★ JS 1일차 — console.log
```javascript
// 콘솔 출력
console.log('메시지');

// 경고창
alert('경고 메시지');

// 확인창
confirm('확인하시겠습니까?');

// 입력창
prompt('이름을 입력하세요');

// HTML에 직접 출력 — 🔴 쓰지 않습니다. 페이지를 통째로 덮어쓸 수 있습니다.
// 화면에 글자를 넣을 때는 element.textContent (5일차)
document.write('내용');
```

---

## 변수와 상수

### `var` (구형 - 사용 지양) ★ JS 1일차
```javascript
var name = '홍길동';
var age = 30;
```

### `let` (변수 - 재할당 가능) ★ JS 1일차
```javascript
let name = '홍길동';
name = '김철수'; // 재할당 가능

let age = 30;
age = 31;
```

### `const` (상수 - 재할당 불가) ★ JS 1일차
```javascript
const PI = 3.14159;
// PI = 3.14; // 에러!

const name = '홍길동';
// name = '김철수'; // 에러!
```

### 변수 명명 규칙
```javascript
// 카멜 케이스 (권장)
let userName = '홍길동';
let userAge = 30;

// 스네이크 케이스
let user_name = '홍길동';

// 상수는 대문자
const MAX_SIZE = 100;
const API_KEY = 'abc123'; // 이름 짓기 예시일 뿐 — 🔴 진짜 API 키는 화면 코드(JS)에 적지 않는다. 브라우저에서 누구나 본다
```

---

## 데이터 타입

### 원시 타입 (Primitive Types) ★ JS 1일차

#### Number (숫자)
```javascript
let age = 30;
let price = 19.99;
let negative = -10;
let infinity = Infinity;
let nan = NaN; // Not a Number
```

#### String (문자열)
```javascript
let name = '홍길동';
let greeting = "안녕하세요";
let message = `반갑습니다`; // 템플릿 리터럴

// 문자열 연결
let fullName = '홍' + '길동';
let text = `이름: ${name}`; // 템플릿 리터럴
```

#### Boolean (불리언)
```javascript
let isActive = true;
let isLoggedIn = false;
```

#### Undefined (정의되지 않음)
```javascript
let value;
console.log(value); // undefined
```

#### Null (없음)
```javascript
let data = null;
```

#### Symbol (심볼) - ES6
```javascript
let symbol = Symbol('description');
```

### 참조 타입 (Reference Types) ★ JS 3일차

#### Object (객체)
```javascript
let person = {
  name: '홍길동',
  age: 30
};
```

#### Array (배열)
```javascript
let numbers = [1, 2, 3, 4, 5];
```

#### Function (함수)
```javascript
function greet() {
  console.log('안녕하세요');
}
```

### 타입 확인 ★ JS 1일차
```javascript
typeof 123;           // 'number'
typeof '안녕';        // 'string'
typeof true;          // 'boolean'
typeof undefined;     // 'undefined'
typeof null;          // 'object' (버그)
typeof {};            // 'object'
typeof [];            // 'object'
typeof function(){}   // 'function'
```

### 타입 변환 ★ JS 1일차
```javascript
// 문자열 → 숫자
Number('123');        // 123
parseInt('123');      // 123
parseFloat('3.14');   // 3.14
+'123';               // 123

// 숫자 → 문자열
String(123);          // '123'
(123).toString();     // '123'
123 + '';             // '123'

// Boolean 변환
Boolean(1);           // true
Boolean(0);           // false
Boolean('hello');     // true
Boolean('');          // false
!!value;              // Boolean으로 변환
```

---

## 연산자

### 산술 연산자
```javascript
let a = 10;
let b = 3;

a + b;  // 13 (덧셈)
a - b;  // 7  (뺄셈)
a * b;  // 30 (곱셈)
a / b;  // 3.333... (나눗셈)
a % b;  // 1  (나머지)
a ** b; // 1000 (거듭제곱)

// 증감 연산자
let count = 0;
count++;    // 1 (후위 증가)
++count;    // 2 (전위 증가)
count--;    // 1 (후위 감소)
--count;    // 0 (전위 감소)
// 주석은 «실행한 뒤의 count». 🔴 식 자체의 값은 다르다 — let x = count++; 이면 x 는 «올리기 전» 값
```

### 할당 연산자
```javascript
let x = 10;

x += 5;  // x = x + 5  (15)
x -= 3;  // x = x - 3  (12)
x *= 2;  // x = x * 2  (24)
x /= 4;  // x = x / 4  (6)
x %= 4;  // x = x % 4  (2)
```

### 비교 연산자 ★ JS 1일차 — ===
```javascript
// 동등 연산자 (타입 변환 O)
5 == '5';   // true
0 == false; // true

// 일치 연산자 (타입 변환 X) - 권장
5 === '5';   // false
0 === false; // false

// 부등 연산자
5 != '5';    // false
5 !== '5';   // true

// 크기 비교
10 > 5;   // true
10 < 5;   // false
10 >= 10; // true
10 <= 5;  // false
```

### 논리 연산자 ★ JS 2일차
```javascript
// AND (&&) - 모두 true여야 true
true && true;   // true
true && false;  // false

// OR (||) - 하나라도 true면 true
true || false;  // true
false || false; // false

// NOT (!) - 반대
!true;  // false
!false; // true

// 단축 평가
let result1 = value || '기본값'; // value가 falsy면 '기본값'
let result2 = value && func();   // value가 truthy면 func() 실행
```

### 삼항 연산자
```javascript
let age = 20;
let message = age >= 18 ? '성인' : '미성년자';

// 중첩 가능
let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' : 'F';
```

### null 병합 연산자 (??) - ES2020
```javascript
let value = null;
let result = value ?? '기본값'; // '기본값'

let num = 0;
result = num ?? 10;  // 0 (0은 falsy지만 null/undefined 아님)
result = num || 10;  // 10 (||는 falsy 체크)
```

### 옵셔널 체이닝 (?.) - ES2020
```javascript
let user = {
  name: '홍길동',
  address: {
    city: '서울'
  }
};

// 안전한 접근
user?.address?.city;        // '서울'
user?.contact?.phone;       // undefined (에러 없음)
nonExistent?.someProperty;  // undefined
```

---

## 조건문

### if 문 ★ JS 2일차
```javascript
let age = 20;

if (age >= 18) {
  console.log('성인입니다');
}
```

### if-else 문 ★ JS 2일차
```javascript
if (age >= 18) {
  console.log('성인입니다');
} else {
  console.log('미성년자입니다');
}
```

### if-else if-else 문 ★ JS 2일차
```javascript
let score = 85;

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else {
  console.log('F');
}
```

### switch 문
```javascript
let day = 3;

switch (day) {
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  default:
    console.log('기타');
}
```

---

## 반복문

### for 문 ★ JS 2일차
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// 역순
for (let i = 5; i > 0; i--) {
  console.log(i); // 5, 4, 3, 2, 1
}
```

### while 문 ★ JS 2일차
```javascript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```

### do-while 문
```javascript
let count = 0;

do {
  console.log(count);
  count++;
} while (count < 5);
```

### for...of (배열 순회) ★ JS 3일차
```javascript
let fruits = ['사과', '바나나', '오렌지'];

for (let fruit of fruits) {
  console.log(fruit);
}
```

### for...in (객체 순회)
```javascript
let person = {
  name: '홍길동',
  age: 30,
  city: '서울'
};

for (let key in person) {
  console.log(key, person[key]);
}
```

### break와 continue ★ JS 2일차
```javascript
// break: 반복문 종료
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// continue: 현재 반복 건너뛰기
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4
}
```

---

## 함수

### 함수 선언문 ★ JS 2일차
```javascript
function greet(name) {
  return `안녕하세요, ${name}님!`;
}

console.log(greet('홍길동')); // '안녕하세요, 홍길동님!'
```

### 함수 표현식
```javascript
const greet = function(name) {
  return `안녕하세요, ${name}님!`;
};
```

### 화살표 함수 (Arrow Function) - ES6 ★ JS 2일차
```javascript
// 기본 형태
const greet1 = (name) => {
  return `안녕하세요, ${name}님!`;
};

// 매개변수가 하나일 때 괄호 생략 가능
const greet2 = name => {
  return `안녕하세요, ${name}님!`;
};

// 단일 표현식일 때 중괄호와 return 생략 가능
const greet3 = name => `안녕하세요, ${name}님!`;

// 매개변수가 없을 때
const sayHello = () => console.log('Hello!');

// 여러 매개변수
const add = (a, b) => a + b;
```

### 기본 매개변수 (Default Parameters)
```javascript
function greet(name = '손님') {
  return `안녕하세요, ${name}님!`;
}

greet();         // '안녕하세요, 손님님!'
greet('홍길동'); // '안녕하세요, 홍길동님!'
```

### 나머지 매개변수 (Rest Parameters)
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3);       // 6
sum(1, 2, 3, 4, 5); // 15
```

### 즉시 실행 함수 (IIFE)
```javascript
(function() {
  console.log('즉시 실행!');
})();

(() => {
  console.log('화살표 함수로도 가능!');
})();
```

### 콜백 함수 ★ JS 4일차
```javascript
function processData(data, callback) {
  // 데이터 처리
  const result = data * 2;
  callback(result);
}

processData(5, function(result) {
  console.log(result); // 10
});
```

---

## 배열

### 배열 생성 ★ JS 3일차
```javascript
let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array(1, 2, 3);
let arr3 = Array.of(1, 2, 3);
let arr4 = Array(5).fill(0); // [0, 0, 0, 0, 0]
```

### 배열 요소 접근 ★ JS 3일차
```javascript
let fruits = ['사과', '바나나', '오렌지'];

fruits[0];     // '사과'
fruits[1];     // '바나나'
fruits.at(-1); // '오렌지' (마지막 요소)
```

### 배열 길이 ★ JS 3일차
```javascript
let fruits = ['사과', '바나나', '오렌지'];
fruits.length; // 3
```

### 배열 요소 추가/제거 ★ JS 3일차 — push

#### push / pop (끝)
```javascript
let arr = [1, 2, 3];

arr.push(4);      // [1, 2, 3, 4] - 끝에 추가
arr.pop();        // [1, 2, 3] - 끝에서 제거
// 주석은 «실행한 뒤의 arr». 🔴 돌려주는 값은 다르다 — push 는 새 길이(4), pop 은 꺼낸 값(4)
```

#### unshift / shift (앞)
```javascript
let arr = [2, 3, 4];

arr.unshift(1);   // [1, 2, 3, 4] - 앞에 추가
arr.shift();      // [2, 3, 4] - 앞에서 제거
```

#### splice (중간)
```javascript
let arr = [1, 2, 3, 4, 5];

// 삭제
arr.splice(2, 1);        // [1, 2, 4, 5] - 인덱스 2부터 1개 삭제

// 삽입
arr.splice(2, 0, 3);     // [1, 2, 3, 4, 5] - 인덱스 2에 3 삽입

// 교체
arr.splice(2, 1, 10);    // [1, 2, 10, 4, 5] - 인덱스 2를 10으로 교체
```

### 배열 검색 ★ JS 4일차 — find · includes
```javascript
let fruits = ['사과', '바나나', '오렌지'];

fruits.indexOf('바나나');      // 1
fruits.indexOf('포도');        // -1 (없음)
fruits.includes('사과');       // true
fruits.find(f => f === '바나나'); // '바나나'
```

### 배열 변환 ★ JS 4일차 — join · slice · sort
```javascript
let arr = [1, 2, 3];

// join: 배열 → 문자열
arr.join('-');        // '1-2-3'

// slice: 부분 배열
arr.slice(1, 3);      // [2, 3]

// concat: 배열 합치기
arr.concat([4, 5]);   // [1, 2, 3, 4, 5]

// reverse: 순서 뒤집기
arr.reverse();        // [3, 2, 1]

// sort: 정렬
[3, 1, 2].sort();     // [1, 2, 3]
[10, 2, 1].sort();    // 🔴 [1, 10, 2] — 글자로 비교한다! 숫자는 sort((a, b) => a - b)
```

---

## 객체

### 객체 생성 ★ JS 3일차
```javascript
// 객체 리터럴
let person = {
  name: '홍길동',
  age: 30,
  city: '서울'
};

// new Object()
let person2 = new Object();
person2.name = '홍길동';
```

### 프로퍼티 접근 ★ JS 3일차
```javascript
let person = {
  name: '홍길동',
  age: 30
};

// 점 표기법
person.name;        // '홍길동'

// 대괄호 표기법
person['name'];     // '홍길동'
person['age'];      // 30
```

### 프로퍼티 추가/수정/삭제 ★ JS 3일차
```javascript
let person = {
  name: '홍길동'
};

// 추가
person.age = 30;

// 수정
person.name = '김철수';

// 삭제
delete person.age;
```

### 메서드
```javascript
let person = {
  name: '홍길동',
  greet: function() {
    return `안녕하세요, ${this.name}입니다.`;
  },
  // ES6 단축 문법
  sayHello() {
    return `Hello, ${this.name}`;
  }
};

person.greet();    // '안녕하세요, 홍길동입니다.'
person.sayHello(); // 'Hello, 홍길동'
```

### 객체 순회
```javascript
let person = {
  name: '홍길동',
  age: 30,
  city: '서울'
};

// for...in
for (let key in person) {
  console.log(key, person[key]);
}

// Object.keys()
Object.keys(person);    // ['name', 'age', 'city']

// Object.values()
Object.values(person);  // ['홍길동', 30, '서울']

// Object.entries()
Object.entries(person); // [['name', '홍길동'], ['age', 30], ['city', '서울']]
```

### 구조 분해 할당 (Destructuring) ★ JS 3일차
```javascript
let person = {
  name: '홍길동',
  age: 30,
  city: '서울'
};

// 객체 구조 분해
let { name, age } = person;
console.log(name); // '홍길동'
console.log(age);  // 30

// 배열 구조 분해
let [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
```

### 전개 연산자 (Spread Operator) ★ JS 3일차
```javascript
// 객체 복사
let person = { name: '홍길동', age: 30 };
let copy = { ...person };

// 객체 병합
let person1 = { name: '홍길동' };
let person2 = { age: 30 };
let merged = { ...person1, ...person2 };

// 배열 복사
let arr = [1, 2, 3];
let arrCopy = [...arr];

// 배열 합치기
let arr1 = [1, 2];
let arr2 = [3, 4];
let mergedArr = [...arr1, ...arr2]; // [1, 2, 3, 4]
```

---

## DOM 조작

### 요소 선택 ★ JS 5일차

#### 단일 요소 선택
```javascript
// ID로 선택
document.getElementById('myId');

// CSS 선택자로 선택 (첫 번째 요소)
document.querySelector('.myClass');
document.querySelector('#myId');
document.querySelector('div.container > p');
```

#### 여러 요소 선택
```javascript
// 클래스로 선택
document.getElementsByClassName('myClass');

// 태그로 선택
document.getElementsByTagName('div');

// CSS 선택자로 선택 (모든 요소)
document.querySelectorAll('.myClass');
document.querySelectorAll('div p');
```

### 요소 내용 조작 ★ JS 5일차
```javascript
let element = document.querySelector('#myElement');

// 텍스트 내용
element.textContent = '새로운 텍스트';

// HTML 내용
element.innerHTML = '<strong>굵은 텍스트</strong>';
// 🔴 사용자가 입력한 글자를 innerHTML 에 넣지 마십시오 — 그 안의 코드가 실행될 수 있습니다(XSS).
//    글자는 textContent 로. innerHTML 은 내가 만든 HTML 에만 씁니다

// 입력 값
let input = document.querySelector('input');
input.value = '입력값';
```

### 스타일 조작
```javascript
let element = document.querySelector('#myElement');

// 인라인 스타일
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';

// 여러 스타일 한 번에
Object.assign(element.style, {
  color: 'red',
  backgroundColor: 'blue',
  fontSize: '20px'
});
```

### 클래스 조작 ★ JS 5일차
```javascript
let element = document.querySelector('#myElement');

// 클래스 추가
element.classList.add('active');

// 클래스 제거
element.classList.remove('hidden');

// 클래스 토글
element.classList.toggle('show');

// 클래스 포함 여부
element.classList.contains('active'); // true/false
```

### 속성 조작 ★ JS 6일차 — dataset
```javascript
let img = document.querySelector('img');

// 속성 가져오기
img.getAttribute('src');

// 속성 설정
img.setAttribute('src', 'image.jpg');
img.setAttribute('alt', '이미지 설명');

// 속성 제거
img.removeAttribute('alt');

// 직접 접근
img.src = 'image.jpg';
img.alt = '이미지 설명';

// data-* 속성 — <li data-id="17"> 의 값 (6일차)
let li = document.querySelector('li');
li.dataset.id; // '17' (언제나 문자열)
```

### 요소 생성 및 추가 ★ JS 5일차
```javascript
// 요소 생성
let div = document.createElement('div');
div.textContent = '새로운 div';
div.classList.add('box');

// 요소 추가
let container = document.querySelector('#container');
container.appendChild(div);        // 끝에 추가
container.prepend(div);            // 앞에 추가
container.insertBefore(div, ref);  // ref 앞에 추가

// HTML 문자열로 추가
container.insertAdjacentHTML('beforeend', '<div>새로운 div</div>');
```

### 요소 제거
```javascript
let element = document.querySelector('#myElement');

// 요소 제거
element.remove();

// 자식 요소 제거
let parent = document.querySelector('#parent');
parent.removeChild(child);
```

### 요소 탐색
```javascript
let element = document.querySelector('#myElement');

// 부모 요소
element.parentElement;

// 자식 요소
element.children;          // HTMLCollection
element.firstElementChild;
element.lastElementChild;

// 형제 요소
element.nextElementSibling;
element.previousElementSibling;
```

---

## 이벤트

### 이벤트 리스너 등록 ★ JS 5·6일차

#### addEventListener (권장)
```javascript
let button = document.querySelector('#myButton');

button.addEventListener('click', function() {
  console.log('버튼 클릭!');
});

// 화살표 함수
button.addEventListener('click', () => {
  console.log('버튼 클릭!');
});
```

#### 이벤트 리스너 제거
```javascript
function handleClick() {
  console.log('클릭!');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

### 주요 이벤트 타입

#### 마우스 이벤트
```javascript
element.addEventListener('click', () => {});       // 클릭
element.addEventListener('dblclick', () => {});    // 더블 클릭
element.addEventListener('mouseenter', () => {});  // 마우스 진입
element.addEventListener('mouseleave', () => {});  // 마우스 이탈
element.addEventListener('mousemove', () => {});   // 마우스 이동
element.addEventListener('mousedown', () => {});   // 마우스 버튼 누름
element.addEventListener('mouseup', () => {});     // 마우스 버튼 뗌
```

#### 키보드 이벤트
```javascript
input.addEventListener('keydown', () => {});   // 키 누름
input.addEventListener('keyup', () => {});     // 키 뗌
input.addEventListener('keypress', () => {});  // 키 입력 (deprecated)
```

#### 폼 이벤트
```javascript
form.addEventListener('submit', () => {});     // 폼 제출
input.addEventListener('focus', () => {});     // 포커스 받음
input.addEventListener('blur', () => {});      // 포커스 잃음
input.addEventListener('change', () => {});    // 값 변경
input.addEventListener('input', () => {});     // 입력 (실시간)
```

#### 기타 이벤트
```javascript
window.addEventListener('load', () => {});     // 페이지 로드 완료
window.addEventListener('resize', () => {});   // 윈도우 크기 변경
window.addEventListener('scroll', () => {});   // 스크롤
```

### 이벤트 객체 ★ JS 6일차
```javascript
button.addEventListener('click', function(event) {
  console.log(event.type);        // 'click'
  console.log(event.target);      // 이벤트가 발생한 요소
  console.log(event.currentTarget); // 이벤트 리스너가 등록된 요소

  event.preventDefault();  // 기본 동작 방지
  event.stopPropagation(); // 이벤트 전파 중단
});
```

### 이벤트 위임 (Event Delegation) ★ JS 6일차
```javascript
// 부모에 이벤트 리스너 하나만 등록
let list = document.querySelector('#list');

list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('클릭한 항목:', e.target.textContent);
  }
});
```

### DOMContentLoaded
```javascript
// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM 로드 완료!');
  // 초기화 코드
});
```

---

## 문자열 메서드

### 문자열 길이 ★ JS 1일차
```javascript
let str = '안녕하세요';
str.length; // 5
```

### 문자열 검색 ★ JS 6일차 — includes
```javascript
let str = 'Hello World';

str.indexOf('World');      // 6
str.indexOf('world');      // -1 (대소문자 구분)
str.lastIndexOf('o');      // 7
str.includes('World');     // true
str.startsWith('Hello');   // true
str.endsWith('World');     // true
```

### 문자열 추출
```javascript
let str = 'Hello World';

str.charAt(0);          // 'H'
str[0];                 // 'H'
str.slice(0, 5);        // 'Hello'
str.slice(-5);          // 'World'
str.substring(0, 5);    // 'Hello'
str.substr(6, 5);       // 'World' (deprecated)
```

### 문자열 변환 ★ JS 6일차 — trim
```javascript
let str = 'Hello World';

str.toLowerCase();      // 'hello world'
str.toUpperCase();      // 'HELLO WORLD'
str.trim();             // 앞뒤 공백 제거
str.trimStart();        // 앞 공백 제거
str.trimEnd();          // 뒤 공백 제거
str.repeat(3);          // 'Hello WorldHello WorldHello World'
```

### 문자열 분할/결합
```javascript
let str = 'apple,banana,orange';

str.split(',');         // ['apple', 'banana', 'orange']
str.split('');          // ['a', 'p', 'p', 'l', 'e', ...]

let arr = ['apple', 'banana', 'orange'];
arr.join('-');          // 'apple-banana-orange'
```

### 문자열 치환
```javascript
let str = 'Hello World';

str.replace('World', 'JavaScript');      // 'Hello JavaScript'
str.replaceAll('o', '0');                // 'Hell0 W0rld'

// 정규식
str.replace(/world/i, 'JavaScript');     // 'Hello JavaScript' (대소문자 무시)
```

### 템플릿 리터럴 ★ JS 1일차
```javascript
let name = '홍길동';
let age = 30;

// 문자열 보간
let message = `이름: ${name}, 나이: ${age}`;

// 여러 줄 문자열
let html = `
  <div>
    <h1>${name}</h1>
    <p>${age}세</p>
  </div>
`;

// 표현식 사용
let result = `2 + 3 = ${2 + 3}`;  // '2 + 3 = 5'
```

---

## 배열 메서드

### forEach (순회) ★ JS 4일차
```javascript
let arr = [1, 2, 3, 4, 5];

arr.forEach((item, index) => {
  console.log(index, item);
});
```

### map (변환) ★ JS 4일차
```javascript
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

let squared = numbers.map(num => num ** 2);
// [1, 4, 9, 16, 25]
```

### filter (필터링) ★ JS 4일차
```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let evens = numbers.filter(num => num % 2 === 0);
// [2, 4, 6]

let greaterThan3 = numbers.filter(num => num > 3);
// [4, 5, 6]
```

### find / findIndex (검색) ★ JS 4일차
```javascript
let users = [
  { id: 1, name: '홍길동' },
  { id: 2, name: '김철수' },
  { id: 3, name: '이영희' }
];

let user = users.find(u => u.id === 2);
// { id: 2, name: '김철수' }

let index = users.findIndex(u => u.id === 2);
// 1
```

### reduce (누적) ★ JS 4일차
```javascript
let numbers = [1, 2, 3, 4, 5];

// 합계
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
// 15

// 곱
let product = numbers.reduce((acc, cur) => acc * cur, 1);
// 120

// 최대값
let max = numbers.reduce((acc, cur) => Math.max(acc, cur));
// 5
```

### some / every (조건 검사) ★ JS 4일차
```javascript
let numbers = [1, 2, 3, 4, 5];

// some: 하나라도 만족하면 true
numbers.some(num => num > 3);   // true
numbers.some(num => num > 10);  // false

// every: 모두 만족해야 true
numbers.every(num => num > 0);  // true
numbers.every(num => num > 3);  // false
```

### sort (정렬) ★ JS 4일차
```javascript
let numbers = [3, 1, 4, 1, 5, 9, 2];

// 오름차순
numbers.sort((a, b) => a - b);
// [1, 1, 2, 3, 4, 5, 9]

// 내림차순
numbers.sort((a, b) => b - a);
// [9, 5, 4, 3, 2, 1, 1]

// 문자열 정렬
let fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
// ['apple', 'banana', 'cherry']
```

### 메서드 체이닝 ★ JS 4일차
```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
  .filter(num => num % 2 === 0)  // [2, 4, 6]
  .map(num => num * 2)            // [4, 8, 12]
  .reduce((sum, num) => sum + num, 0); // 24
```

---

## 비동기 처리

### 동기 vs 비동기 ★ JS 7일차
```javascript
// 동기 (Synchronous)
console.log('1');
console.log('2');
console.log('3');
// 출력: 1, 2, 3

// 비동기 (Asynchronous)
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
// 출력: 1, 3, 2
```

### setTimeout / setInterval ★ JS 7일차 — setTimeout
```javascript
// setTimeout: 일정 시간 후 한 번 실행
setTimeout(() => {
  console.log('1초 후 실행');
}, 1000);

// setInterval: 일정 시간마다 반복 실행
let intervalId = setInterval(() => {
  console.log('1초마다 실행');
}, 1000);

// 중단
let timeoutId = setTimeout(() => {}, 1000);
clearTimeout(timeoutId);
clearInterval(intervalId);
```

### 콜백 (Callback)
```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: '홍길동' };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

// 콜백 지옥 (Callback Hell)
getData((a) => {
  getMoreData(a, (b) => {
    getEvenMoreData(b, (c) => {
      console.log(c);
    });
  });
});
```

### Promise ★ JS 7일차
```javascript
// Promise 생성
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('성공!');
    } else {
      reject('실패!');
    }
  }, 1000);
});

// Promise 사용
promise
  .then(result => {
    console.log(result); // '성공!'
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('완료!');
  });
```

### Promise 체이닝
```javascript
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => {
    console.log(comments);
  })
  .catch(error => {
    console.error(error);
  });
```

### async/await ★ JS 7일차
```javascript
// async 함수
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// 여러 Promise 를 한꺼번에 기다리기
async function fetchAll() {
  try {
    const [users, posts] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json())
    ]);
    console.log(users, posts);
  } catch (error) {
    console.error(error);
  }
}
```

### Fetch API ★ JS 8일차
```javascript
// GET 요청
// 🔴 fetch 는 404·500 이 나도 catch 로 가지 않습니다 — response.ok 를 직접 봐야 합니다 (8일차)
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) throw new Error('HTTP ' + response.status);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST 요청
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: '홍길동' })
})
  .then(response => response.json())
  .then(data => console.log(data));

// async/await 사용
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

---

## ES6+ 문법

### let과 const ★ JS 1일차
```javascript
// let: 블록 스코프, 재할당 가능
let count = 0;
count = 1;

// const: 블록 스코프, 재할당 불가
const PI = 3.14159;
// PI = 3.14; // 에러!
```

### 템플릿 리터럴 ★ JS 1일차
```javascript
let name = '홍길동';
let age = 30;

let message = `이름: ${name}, 나이: ${age}`;
```

### 화살표 함수 ★ JS 2일차
```javascript
const add = (a, b) => a + b;
const square = x => x ** 2;
```

### 구조 분해 할당 ★ JS 3일차
```javascript
// 배열
let [a, b] = [1, 2];

// 객체
let { name, age } = { name: '홍길동', age: 30 };
```

### 전개 연산자 ★ JS 3일차
```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### 기본 매개변수
```javascript
function greet(name = '손님') {
  return `안녕하세요, ${name}님!`;
}
```

### 나머지 매개변수
```javascript
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4, 5); // 15
```

### 단축 프로퍼티
```javascript
let name = '홍길동';
let age = 30;

// 기존 방식
let person1 = { name: name, age: age };

// 단축 프로퍼티
let person2 = { name, age };
```

### 계산된 프로퍼티 이름
```javascript
let key = 'name';
let person = {
  [key]: '홍길동',
  ['age']: 30
};
```

### 옵셔널 체이닝
```javascript
let user = {
  name: '홍길동',
  address: {
    city: '서울'
  }
};

user?.address?.city;        // '서울'
user?.contact?.phone;       // undefined
```

### null 병합 연산자
```javascript
let value = null;
let result = value ?? '기본값'; // '기본값'
```

### Class
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `안녕하세요, ${this.name}입니다.`;
  }

  static create(name, age) {
    return new Person(name, age);
  }
}

let person = new Person('홍길동', 30);
person.greet(); // '안녕하세요, 홍길동입니다.'
```

### Module (ES6 모듈) ★ JS 8일차
```javascript
// export (내보내기)
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export default class Calculator {}

// import (가져오기)
import Calculator, { PI, add } from './math.js';
```

```html

<script type="module" src="main.js"></script>

```

---

## 모범 사례

### 1. 명명 규칙
```javascript
// 변수/함수: 카멜 케이스
let userName = '홍길동';
function getUserName() {}

// 상수: 대문자 스네이크 케이스
const MAX_SIZE = 100;
const API_KEY = 'abc123'; // 🔴 이름 예시일 뿐 — 진짜 키는 서버에 둔다

// 클래스: 파스칼 케이스
class UserProfile {}

// private: 언더스코어 접두사 (관례)
let _privateVar = 'private';
```

### 2. 변수 선언
```javascript
// const를 기본으로, 재할당이 필요할 때만 let
const name = '홍길동';
let count = 0;

// var는 사용하지 않기
// var x = 10; ❌
```

### 3. 비교 연산
```javascript
// 일치 연산자(===) 사용
if (value === 10) {} // ✅
// if (value == 10) {} // ❌

// 불일치 연산자(!==) 사용
if (value !== 10) {} // ✅
// if (value != 10) {} // ❌
```

### 4. 함수
```javascript
// 함수는 한 가지 일만 하도록
function getUserName(user) {
  return user.name;
}

// 매개변수는 3개 이하로
function createUser(name, age, city) {}

// 화살표 함수 활용
const double = x => x * 2;
```

### 5. 배열 메서드 활용
```javascript
// for 대신 forEach, map, filter 사용
// ❌
let doubledA = [];
for (let i = 0; i < arr.length; i++) {
  doubledA.push(arr[i] * 2);
}

// ✅
let doubledB = arr.map(x => x * 2);
```

### 6. 에러 처리
```javascript
// try-catch 사용
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('파싱 에러:', error);
}

// async/await에서도 try-catch
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('요청 실패:', error);
  }
}
```

### 7. 주석
```javascript
// 복잡한 로직에만 주석 추가
// ✅ 좋은 주석
// 사용자 권한이 없으면 기본 페이지로 리다이렉트
if (!user.hasPermission) {
  redirect('/');
}

// ❌ 불필요한 주석
// count를 1 증가시킴
count++;
```

### 8. 코드 구조
```javascript
// 관련된 코드는 함께 묶기
// 상수 선언
const MAX_RETRY = 3;
const TIMEOUT = 5000;

// 함수 선언
function fetchData() {}
function processData() {}

// 이벤트 리스너
button.addEventListener('click', handleClick);
```

### 9. 성능 최적화
```javascript
// DOM 조작 최소화
// ❌
for (let i = 0; i < 100; i++) {
  document.body.innerHTML += `<div>${i}</div>`;
}

// ✅
let html = '';
for (let i = 0; i < 100; i++) {
  html += `<div>${i}</div>`;
}
document.body.innerHTML = html;
// 🔴 숫자처럼 «내가 만든» 값일 때만. 사용자가 쓴 글자가 섞이면 createElement + textContent 로

// 이벤트 위임 사용
// ✅
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    // 처리
  }
});
```

### 10. 디버깅
```javascript
// console.log 활용
console.log('값:', value);
console.table(array);
console.error('에러:', error);
console.warn('경고:', warning);

// debugger 사용
function complexFunction() {
  debugger; // 브라우저 개발자 도구에서 중단점
  // 복잡한 로직
}
```

---

## 섹션별 요약 표

### 1. JavaScript 기본

| 항목 | 설명 | 예시 |
|------|------|------|
| 인라인 JavaScript | HTML 태그 속성에 직접 작성 | `<button onclick="alert('클릭!')">` |
| 내부 스크립트 | `<script>` 태그 안에 작성 | `<script>console.log('Hello');</script>` |
| 외부 스크립트 (권장) | 별도 .js 파일로 분리 | `<script src="script.js" defer></script>` |
| 한 줄 주석 | `//` 사용 | `// 주석` |
| 여러 줄 주석 | `/* */` 사용 | `/* 주석 */` |
| 콘솔 출력 | 개발자 도구 콘솔에 출력 | `console.log('메시지')` |
| 경고창 | 알림 팝업 표시 | `alert('경고')` |
| 확인창 | 확인/취소 선택 팝업 | `confirm('확인?')` |
| 입력창 | 사용자 입력 팝업 | `prompt('입력하세요')` |
| HTML 출력 | 문서에 직접 출력 — 🔴 쓰지 않는다 | `document.write('내용')` |

### 2. 변수와 상수

| 키워드 | 재할당 | 스코프 | 호이스팅 | 권장 여부 |
|--------|--------|--------|----------|-----------|
| `var` | 가능 | 함수 스코프 | O (undefined) | 사용 지양 |
| `let` | 가능 | 블록 스코프 | O (TDZ) | 재할당 필요 시 사용 |
| `const` | 불가 | 블록 스코프 | O (TDZ) | 기본으로 사용 (권장) |

| 명명 규칙 | 표기법 | 예시 |
|-----------|--------|------|
| 변수/함수 | 카멜 케이스 | `userName`, `userAge` |
| 스네이크 케이스 | 언더스코어 구분 | `user_name` |
| 상수 | 대문자 + 언더스코어 | `MAX_SIZE`, `API_KEY` |

### 3. 데이터 타입

| 분류 | 타입 | 설명 | 예시 |
|------|------|------|------|
| 원시 타입 | Number | 정수, 실수, Infinity, NaN | `30`, `19.99`, `NaN` |
| 원시 타입 | String | 문자열 | `'홍길동'`, `"안녕"`, `` `템플릿` `` |
| 원시 타입 | Boolean | 참/거짓 | `true`, `false` |
| 원시 타입 | Undefined | 값이 할당되지 않음 | `undefined` |
| 원시 타입 | Null | 의도적으로 비어있음 | `null` |
| 원시 타입 | Symbol | 고유 식별자 (ES6) | `Symbol('desc')` |
| 참조 타입 | Object | 키-값 쌍 | `{ name: '홍길동' }` |
| 참조 타입 | Array | 순서가 있는 목록 | `[1, 2, 3]` |
| 참조 타입 | Function | 실행 가능한 코드 블록 | `function() {}` |

| 타입 변환 | 방법 | 예시 |
|-----------|------|------|
| 문자열 → 숫자 | `Number()`, `parseInt()`, `parseFloat()`, `+` | `Number('123')` → `123` |
| 숫자 → 문자열 | `String()`, `.toString()`, `+ ''` | `String(123)` → `'123'` |
| Boolean 변환 | `Boolean()`, `!!` | `Boolean(1)` → `true` |

### 4. 연산자

| 분류 | 연산자 | 설명 |
|------|--------|------|
| 산술 | `+`, `-`, `*`, `/`, `%`, `**` | 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지, 거듭제곱 |
| 증감 | `++`, `--` | 전위/후위 증가, 전위/후위 감소 |
| 할당 | `=`, `+=`, `-=`, `*=`, `/=`, `%=` | 값 할당 및 복합 할당 |
| 비교 (동등) | `==`, `!=` | 타입 변환 후 비교 |
| 비교 (일치) | `===`, `!==` | 타입 변환 없이 비교 (권장) |
| 비교 (크기) | `>`, `<`, `>=`, `<=` | 크기 비교 |
| 논리 | `&&`, `\|\|`, `!` | AND, OR, NOT |
| 삼항 | `조건 ? 참 : 거짓` | 간단한 조건 분기 |
| null 병합 | `??` | null/undefined일 때 기본값 (ES2020) |
| 옵셔널 체이닝 | `?.` | 안전한 프로퍼티 접근 (ES2020) |

### 5. 조건문

| 구문 | 용도 | 특징 |
|------|------|------|
| `if` | 단일 조건 분기 | 조건이 true일 때 실행 |
| `if-else` | 이중 조건 분기 | true/false 두 경우 처리 |
| `if-else if-else` | 다중 조건 분기 | 여러 조건을 순차 검사 |
| `switch` | 값에 따른 분기 | 특정 값과 일치 여부로 분기, `break` 필수 |

### 6. 반복문

| 구문 | 용도 | 특징 |
|------|------|------|
| `for` | 횟수 기반 반복 | 초기값, 조건, 증감식 지정 |
| `while` | 조건 기반 반복 | 조건이 true인 동안 반복 |
| `do-while` | 최소 1회 실행 반복 | 먼저 실행 후 조건 검사 |
| `for...of` | 배열 순회 | 배열 요소를 직접 순회 |
| `for...in` | 객체 순회 | 객체의 키를 순회 |
| `break` | 반복문 종료 | 즉시 반복문 탈출 |
| `continue` | 현재 반복 건너뛰기 | 다음 반복으로 이동 |

### 7. 함수

| 종류 | 문법 | 특징 |
|------|------|------|
| 함수 선언문 | `function greet() {}` | 호이스팅 가능 |
| 함수 표현식 | `const greet = function() {}` | 변수에 할당 |
| 화살표 함수 | `const greet = () => {}` | 간결한 문법, `this` 바인딩 없음 (ES6) |
| 기본 매개변수 | `function f(x = 10) {}` | 인수 미전달 시 기본값 사용 |
| 나머지 매개변수 | `function f(...args) {}` | 가변 인수를 배열로 수집 |
| IIFE | `(function() {})()` | 즉시 실행, 스코프 격리 |
| 콜백 함수 | `func(data, callback)` | 다른 함수에 인수로 전달 |

### 8. 배열

| 항목 | 메서드/문법 | 설명 |
|------|-------------|------|
| 생성 | `[]`, `new Array()`, `Array.of()`, `Array().fill()` | 배열 생성 방법들 |
| 요소 접근 | `arr[0]`, `arr.at(-1)` | 인덱스로 접근, 음수 인덱스 지원 |
| 길이 | `arr.length` | 배열 요소 개수 |
| 끝 추가/제거 | `push()` / `pop()` | 배열 끝에서 추가/제거 |
| 앞 추가/제거 | `unshift()` / `shift()` | 배열 앞에서 추가/제거 |
| 중간 조작 | `splice(index, count, ...items)` | 삭제, 삽입, 교체 모두 가능 |
| 검색 | `indexOf()`, `includes()`, `find()` | 요소 위치/존재/조건 검색 |
| 변환 | `join()`, `slice()`, `concat()`, `reverse()`, `sort()` | 문자열 변환, 부분 추출, 합치기, 뒤집기, 정렬 |

### 9. 객체

| 항목 | 설명 | 예시 |
|------|------|------|
| 객체 리터럴 | 중괄호로 생성 | `{ name: '홍길동', age: 30 }` |
| 점 표기법 | `.`으로 프로퍼티 접근 | `person.name` |
| 대괄호 표기법 | `[]`로 프로퍼티 접근 | `person['name']` |
| 프로퍼티 추가 | 새 키에 값 할당 | `person.age = 30` |
| 프로퍼티 삭제 | `delete` 연산자 사용 | `delete person.age` |
| 메서드 | 객체 안의 함수 | `greet() { return this.name; }` |
| 객체 순회 | `for...in`, `Object.keys/values/entries` | 키, 값, 키-값 쌍 순회 |
| 구조 분해 할당 | 변수에 바로 추출 | `let { name, age } = person` |
| 전개 연산자 | 객체/배열 복사 및 병합 | `{ ...obj1, ...obj2 }` |

### 10. DOM 조작

| 항목 | 메서드 | 설명 |
|------|--------|------|
| ID 선택 | `getElementById('id')` | ID로 단일 요소 선택 |
| CSS 선택자 (단일) | `querySelector('선택자')` | 첫 번째 일치 요소 선택 |
| CSS 선택자 (복수) | `querySelectorAll('선택자')` | 모든 일치 요소 선택 |
| 텍스트 조작 | `textContent` | 요소의 텍스트 내용 변경 |
| HTML 조작 | `innerHTML` | 요소의 HTML 내용 변경 |
| 스타일 조작 | `element.style.속성` | 인라인 스타일 변경 |
| 클래스 조작 | `classList.add/remove/toggle/contains` | 클래스 추가/제거/토글/확인 |
| 속성 조작 | `getAttribute/setAttribute/removeAttribute` | HTML 속성 읽기/설정/제거 |
| 요소 생성 | `createElement('태그')` | 새 DOM 요소 생성 |
| 요소 추가 | `appendChild()`, `prepend()`, `insertBefore()` | 자식 요소 추가 |
| 요소 제거 | `remove()`, `removeChild()` | 요소 삭제 |
| 요소 탐색 | `parentElement`, `children`, `nextElementSibling` | 부모/자식/형제 탐색 |

### 11. 이벤트

| 분류 | 이벤트 | 설명 |
|------|--------|------|
| 마우스 | `click`, `dblclick` | 클릭, 더블 클릭 |
| 마우스 | `mouseenter`, `mouseleave` | 마우스 진입, 이탈 |
| 마우스 | `mousemove`, `mousedown`, `mouseup` | 이동, 버튼 누름, 버튼 뗌 |
| 키보드 | `keydown`, `keyup` | 키 누름, 키 뗌 |
| 폼 | `submit`, `change`, `input` | 폼 제출, 값 변경, 실시간 입력 |
| 폼 | `focus`, `blur` | 포커스 받음, 포커스 잃음 |
| 윈도우 | `load`, `resize`, `scroll` | 로드 완료, 크기 변경, 스크롤 |

| 이벤트 관련 개념 | 설명 |
|------------------|------|
| `addEventListener` | 이벤트 리스너 등록 (권장) |
| `removeEventListener` | 이벤트 리스너 제거 |
| `event.target` | 이벤트가 발생한 요소 |
| `event.currentTarget` | 이벤트 리스너가 등록된 요소 |
| `event.preventDefault()` | 기본 동작 방지 |
| `event.stopPropagation()` | 이벤트 전파 중단 |
| 이벤트 위임 | 부모에 리스너 등록하여 자식 이벤트 처리 |
| `DOMContentLoaded` | DOM 로드 완료 시 실행 |

### 12. 문자열 메서드

| 메서드 | 설명 | 예시 |
|--------|------|------|
| `length` | 문자열 길이 | `'Hello'.length` → `5` |
| `indexOf()` | 문자열 위치 검색 | `'Hello'.indexOf('l')` → `2` |
| `includes()` | 포함 여부 확인 | `'Hello'.includes('He')` → `true` |
| `startsWith()` | 시작 문자열 확인 | `'Hello'.startsWith('He')` → `true` |
| `endsWith()` | 끝 문자열 확인 | `'Hello'.endsWith('lo')` → `true` |
| `charAt()` / `[]` | 특정 위치 문자 반환 | `'Hello'[0]` → `'H'` |
| `slice()` | 부분 문자열 추출 | `'Hello'.slice(0, 2)` → `'He'` |
| `toLowerCase()` | 소문자 변환 | `'Hello'.toLowerCase()` → `'hello'` |
| `toUpperCase()` | 대문자 변환 | `'Hello'.toUpperCase()` → `'HELLO'` |
| `trim()` | 앞뒤 공백 제거 | `' Hi '.trim()` → `'Hi'` |
| `repeat()` | 문자열 반복 | `'ab'.repeat(3)` → `'ababab'` |
| `split()` | 문자열 분할 (→ 배열) | `'a,b'.split(',')` → `['a', 'b']` |
| `replace()` | 문자열 치환 (첫 번째) | `'abc'.replace('a', 'x')` → `'xbc'` |
| `replaceAll()` | 문자열 치환 (전체) | `'aba'.replaceAll('a', 'x')` → `'xbx'` |
| 템플릿 리터럴 | 문자열 보간 및 여러 줄 | `` `이름: ${name}` `` |

### 13. 배열 메서드

| 메서드 | 반환값 | 설명 |
|--------|--------|------|
| `forEach()` | `undefined` | 배열 순회 (반환값 없음) |
| `map()` | 새 배열 | 각 요소를 변환한 새 배열 반환 |
| `filter()` | 새 배열 | 조건을 만족하는 요소만 추출 |
| `find()` | 요소 / `undefined` | 조건을 만족하는 첫 번째 요소 반환 |
| `findIndex()` | 인덱스 / `-1` | 조건을 만족하는 첫 번째 인덱스 반환 |
| `reduce()` | 누적값 | 배열을 하나의 값으로 누적 |
| `some()` | `boolean` | 하나라도 조건 만족 시 `true` |
| `every()` | `boolean` | 모든 요소가 조건 만족 시 `true` |
| `sort()` | 정렬된 배열 | 배열 정렬 (원본 변경) |
| 메서드 체이닝 | 최종 결과 | `filter → map → reduce` 등 연결 사용 |

### 14. 비동기 처리

| 항목 | 설명 | 특징 |
|------|------|------|
| 동기 (Synchronous) | 코드가 순서대로 실행 | 한 작업이 끝나야 다음 실행 |
| 비동기 (Asynchronous) | 기다려야 하는 일을 맡겨 두고 다음 줄로 넘어감 | 결과는 나중에 콜백·Promise 로 받는다 (코드는 여전히 한 번에 한 줄씩 실행) |
| `setTimeout` | 일정 시간 후 한 번 실행 | `clearTimeout()`으로 취소 |
| `setInterval` | 일정 시간마다 반복 실행 | `clearInterval()`로 취소 |
| 콜백 (Callback) | 함수를 인수로 전달하여 나중에 실행 | 중첩 시 콜백 지옥 발생 |
| Promise | 비동기 작업의 미래 결과를 나타내는 객체 | `.then()`, `.catch()`, `.finally()` |
| Promise 체이닝 | `.then()`을 연결하여 순차 처리 | 콜백 지옥 해결 |
| `async/await` | Promise를 동기 코드처럼 작성 | `try-catch`로 에러 처리 |
| `Promise.all()` | 여러 Promise를 한꺼번에 기다림 | 모두 완료될 때까지 대기 · 하나라도 실패하면 실패 |
| Fetch API | HTTP 요청 | GET, POST 등 지원 |

### 15. ES6+ 문법

| 문법 | 설명 | 예시 |
|------|------|------|
| `let` / `const` | 블록 스코프 변수/상수 선언 | `let x = 1;` / `const y = 2;` |
| 템플릿 리터럴 | 백틱을 사용한 문자열 보간 | `` `이름: ${name}` `` |
| 화살표 함수 | 간결한 함수 표현 | `const add = (a, b) => a + b` |
| 구조 분해 할당 | 배열/객체에서 값 추출 | `let { name } = obj` |
| 전개 연산자 | 배열/객체 펼치기 | `[...arr]`, `{ ...obj }` |
| 기본 매개변수 | 매개변수 기본값 설정 | `function f(x = 10) {}` |
| 나머지 매개변수 | 가변 인수를 배열로 수집 | `function f(...args) {}` |
| 단축 프로퍼티 | 변수명과 키가 같으면 생략 | `{ name }` = `{ name: name }` |
| 계산된 프로퍼티 이름 | 동적으로 키 설정 | `{ [key]: value }` |
| 옵셔널 체이닝 | 안전한 프로퍼티 접근 | `user?.address?.city` |
| null 병합 연산자 | null/undefined 시 기본값 | `value ?? '기본값'` |
| Class | 클래스 기반 객체 생성 | `class Person { constructor() {} }` |
| Module | 모듈 내보내기/가져오기 | `export` / `import` |

### 16. 모범 사례

| 분류 | 권장 사항 |
|------|-----------|
| 명명 규칙 | 변수/함수: 카멜 케이스, 상수: 대문자 스네이크 케이스, 클래스: 파스칼 케이스 |
| 변수 선언 | `const`를 기본으로, 재할당 필요 시만 `let` 사용, `var` 사용 지양 |
| 비교 연산 | 일치 연산자(`===`, `!==`) 사용 권장 |
| 함수 | 한 가지 일만 하도록, 매개변수 3개 이하, 화살표 함수 활용 |
| 배열 메서드 | `for` 대신 `forEach`, `map`, `filter` 등 활용 |
| 에러 처리 | `try-catch` 사용, `async/await`에서도 `try-catch` 적용 |
| 주석 | 복잡한 로직에만 주석 추가, 불필요한 주석 지양 |
| 코드 구조 | 관련된 코드는 함께 묶기 (상수 → 함수 → 이벤트 리스너) |
| 성능 최적화 | DOM 조작 최소화, 이벤트 위임 사용 |
| 디버깅 | `console.log/table/error/warn` 활용, `debugger` 사용 |
