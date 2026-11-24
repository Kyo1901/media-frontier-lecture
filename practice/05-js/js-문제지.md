# JS 연습 문제지

> 총 **60문제** — 초급 25 · 중급 25 · 고급 10 (코드 작성 54 · 고르기 6)
> 수업(JS 1~9일차)에서 다룬 것에 더해, 수업에서 짧게 지나간 **기본 문법**(문자열 · Math · 기본값 · 나머지 매개변수 · ?. · Set · 클로저 · 재귀)도 담았습니다.
> 풀이 페이지(**JS 연습장**)에서 바로 돌려 보고 채점할 수 있습니다. 정답과 해설은 `js-답안지.md` 에 있습니다.

## 채점은 이렇게 합니다

- 여러분의 코드를 **실제로 돌려** 결과를 봅니다 — 함수가 돌려준 값 · `console.log` 로 찍힌 줄 · 화면(DOM)의 모습. **쓰는 방법은 자유**입니다.
- 함수 문제는 숨은 입력 여러 개로 불러 봅니다. 틀리면 「입력 → 내 답 (기대 …)」 이 나옵니다. 문제에 적힌 **함수 이름을 그대로** 쓰십시오.
- 「넘겨준 배열 · 객체는 바꾸지 않습니다」 라고 적힌 문제는 부른 뒤 원본이 그대로인지도 봅니다.
- DOM 문제는 채점기가 직접 **누르고 · 입력하고 · 제출해 보고** 화면을 봅니다.
- `fetch` 는 인터넷 대신 문제의 **가짜 서버** 표대로 답합니다(404 · 500 · 네트워크 오류도 흉내 냅니다).
- 끝나지 않는 코드(무한 반복)는 3초 뒤 멈추고 알려 줍니다.

## 목차

- **초급** (1~25번, 25문제): 변수 · 템플릿 리터럴 · 형 변환 · 비교 · 조건 · 반복 · 함수(화살표 · 기본값 · 나머지 매개변수) · 문자열 · Math · 배열 · 구조 분해
- **중급** (26~50번, 25문제): 객체 전개 · 참조 · ?. · Object.entries · map · filter · find · some/every · reduce · sort · Set · flatMap · 클로저 · 재귀 · DOM · 이벤트
- **고급** (51~60번, 10문제): 이벤트 위임 · preventDefault · 실행 순서 · Promise · async/await · fetch · 오류 처리 · Promise.all · 종합

## 초급 (25문제)

### 문제 1. 변수와 템플릿 리터럴

주어진 변수 `name` 과 `views` 를 써서 아래 한 줄을 **console.log** 로 찍으시오. 템플릿 리터럴(`` ` ``)을 쓰십시오.
```text
김하나 기자의 기사 — 조회수 1845회
```
(검사는 변수 값을 바꿔서도 한 번 더 돌립니다 — 글자를 그대로 적으면 걸립니다)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const name = "김하나";
const views = 1845;
```

**작성할 것 — 출력 (console.log)**

```js

```

### 문제 2. + 와 - 의 차이

다음 두 줄은 무엇을 찍습니까?
```js
console.log("3" + 1);
console.log("3" - 1);
```

① `31` 과 `2`  
② `4` 와 `2`  
③ `31` 과 `31`  
④ `4` 와 `NaN`

### 문제 3. 글자를 숫자로

입력칸에서 받은 두 값(**문자열**)을 더한 **숫자**를 돌려주는 함수 `addStrings(a, b)` 를 만드시오.
- `addStrings("10", "5")` → `15`

**작성할 것 — 함수 작성**

```js
function addStrings(a, b) {
  
}
```

### 문제 4. == 와 ===

다음 중 결과가 `true` 인 것은?

① `"1" === 1`  
② `null === undefined`  
③ `0 == ""`  
④ `NaN === NaN`

### 문제 5. if … else if

점수를 받아 등급을 돌려주는 `grade(score)` 를 만드시오.
- 90 이상 `"A"` · 80 이상 `"B"` · 70 이상 `"C"` · 그 밖에는 `"F"`

**작성할 것 — 함수 작성**

```js
function grade(score) {
  
}
```

### 문제 6. 나머지 연산자 %

정수가 짝수이면 `true`, 홀수이면 `false` 를 돌려주는 `isEven(n)` 을 만드시오. 음수도 들어옵니다.

**작성할 것 — 함수 작성**

```js
function isEven(n) {
  
}
```

### 문제 7. switch

요일 번호(0 = 일요일 … 6 = 토요일)를 받아 한 글자 요일을 돌려주는 `dayName(n)` 을 **switch** 로 만드시오.
- `0` → `"일"`, `1` → `"월"`, … `6` → `"토"`
- 그 밖의 값 → `"없음"`

**작성할 것 — 함수 작성**

```js
function dayName(n) {
  switch (n) {
    
  }
}
```

### 문제 8. for 반복

1부터 `n` 까지의 합을 돌려주는 `sumTo(n)` 을 **for** 로 만드시오. `n` 이 0 이면 `0` 입니다.

**작성할 것 — 함수 작성**

```js
function sumTo(n) {
  
}
```

### 문제 9. while 반복

`n` 부터 1까지 거꾸로 센 배열을 돌려주는 `countdown(n)` 을 **while** 로 만드시오.
- `countdown(3)` → `[3, 2, 1]` · `countdown(0)` → `[]`

**작성할 것 — 함수 작성**

```js
function countdown(n) {
  const result = [];
  
  return result;
}
```

### 문제 10. for…of

주어진 배열 `sections` 를 **for…of** 로 돌며 번호를 붙여 한 줄씩 찍으시오.
```text
1. 정치
2. 경제
3. 사회
```
(검사는 다른 배열로도 돌립니다)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const sections = ["정치", "경제", "사회"];
```

**작성할 것 — 출력 (console.log)**

```js

```

### 문제 11. break

숫자 배열에서 **처음으로** 나오는 음수의 위치(인덱스)를 돌려주는 `firstNegative(nums)` 를 만드시오. 음수가 없으면 `-1` 입니다. 반복과 `break`(또는 `return`)를 쓰십시오.

**작성할 것 — 함수 작성**

```js
function firstNegative(nums) {
  
}
```

### 문제 12. || 와 ??

값이 **없으면**(`null` · `undefined`) `"없음"` 을, 있으면 그 값을 그대로 돌려주는 `withDefault(value)` 를 만드시오.
🔴 `0` 과 빈 글자 `""` 는 «있는 값»입니다 — 그대로 돌려줍니다.

**작성할 것 — 함수 작성**

```js
function withDefault(value) {
  
}
```

### 문제 13. 화살표 함수 · 숫자 꾸미기

조회수를 받아 **세 자리마다 쉼표**를 넣고 `회` 를 붙인 글자를 돌려주는 `formatViews` 를 **화살표 함수**로 만드시오.
- `formatViews(1845)` → `"1,845회"`

**작성할 것 — 함수 작성**

```js
const formatViews = (n) => ;
```

### 문제 14. 문자열 다듬기 — trim · toLowerCase

검색어를 비교하기 좋게 다듬는 `cleanInput(s)` 를 만드시오 — **앞뒤 공백을 없애고 영어는 소문자로** 바꿉니다.
- `cleanInput("  Hello JS  ")` → `"hello js"`

**작성할 것 — 함수 작성**

```js
function cleanInput(s) {
  
}
```

### 문제 15. 문자열 자르기 — length · slice

제목이 `max` 글자보다 **길면** 앞의 `max` 글자만 남기고 `…` 를 붙이고, 아니면 그대로 돌려주는 `shorten(title, max)` 를 만드시오.
- `shorten("폭설 주의보 발령", 5)` → `"폭설 주의…"` · `shorten("금리 동결", 5)` → `"금리 동결"`

**작성할 것 — 함수 작성**

```js
function shorten(title, max) {
  
}
```

### 문제 16. 숫자만 꺼내기 — parseInt 의 함정

`"1,845회"` 처럼 쉼표와 글자가 섞인 조회수에서 숫자만 꺼내 **숫자**로 돌려주는 `parseViews(text)` 를 만드시오.
- `parseViews("1,845회")` → `1845`

**작성할 것 — 함수 작성**

```js
function parseViews(text) {
  
}
```

### 문제 17. 자리 맞추기 — padStart

기사 번호를 **네 자리**로 맞춘 글자를 돌려주는 `padId(n)` 을 만드시오. 모자라는 자리는 앞에 `0` 을 채웁니다.
- `padId(7)` → `"0007"` · `padId(12345)` → `"12345"`(넘치면 그대로)

**작성할 것 — 함수 작성**

```js
function padId(n) {
  
}
```

### 문제 18. 반올림 — Math.round

수를 소수점 아래 `digits` 자리로 **반올림한 숫자**를 돌려주는 `roundTo(x, digits)` 를 만드시오.
- `roundTo(3.14159, 2)` → `3.14` · `roundTo(2.5, 0)` → `3`

**작성할 것 — 함수 작성**

```js
function roundTo(x, digits) {
  
}
```

### 문제 19. 무작위 정수 — Math.random

`min` 이상 `max` 이하의 **정수**를 무작위로 돌려주는 `randomInt(min, max)` 를 만드시오. 양 끝 값도 나와야 합니다.
(검사는 여러 번 불러 봅니다)

**작성할 것 — 함수 작성**

```js
function randomInt(min, max) {
  
}
```

### 문제 20. 기본값 매개변수

이름을 받아 인사말을 돌려주는 `greet(name)` 을 만드시오. 이름을 **안 주면** `"손님"` 으로 인사합니다.
- `greet("김하나")` → `"안녕하세요, 김하나님"` · `greet()` → `"안녕하세요, 손님님"`

**작성할 것 — 함수 작성**

```js
function greet(name) {
  
}
```

### 문제 21. 나머지 매개변수 ...

인자를 **몇 개든** 받아 모두 더한 값을 돌려주는 `sumAll` 을 만드시오. 하나도 안 주면 `0` 입니다.
- `sumAll(1, 2, 3)` → `6` · `sumAll()` → `0`

**작성할 것 — 함수 작성**

```js
function sumAll() {
  
}
```

### 문제 22. return 과 console.log

다음 코드는 무엇을 찍습니까?
```js
function show(n) {
  console.log(n * 2);
}
const result = show(5);
console.log(result);
```

① `10` 그리고 `10`  
② `10` 그리고 `undefined`  
③ `undefined` 그리고 `10`  
④ 오류가 납니다

### 문제 23. 배열의 마지막

배열의 **마지막 값**을 돌려주는 `lastItem(arr)` 를 만드시오. 빈 배열이면 `undefined` 입니다.

**작성할 것 — 함수 작성**

```js
function lastItem(arr) {
  
}
```

### 문제 24. 원본을 지키며 추가하기

태그 배열 `tags` 에 `tag` 를 더한 **새 배열**을 돌려주는 `addTag(tags, tag)` 를 만드시오.
- 이미 들어 있는 태그면 더하지 않습니다
- 🔴 넘겨받은 `tags` 배열은 **바꾸지 않습니다**

**작성할 것 — 함수 작성**

```js
function addTag(tags, tag) {
  
}
```

### 문제 25. 구조 분해

기사 객체를 받아 `"제목 — 분야 · 기자"` 모양의 글자를 돌려주는 `describe(article)` 을 만드시오. **구조 분해**로 꺼내 쓰십시오.
- `describe(news[0])` → `"금리 동결 — 경제 · 김하나"`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function describe(article) {
  
}
```

## 중급 (25문제)

### 문제 26. 객체 전개로 바꾼 사본

기사 객체와 새 조회수를 받아, 조회수만 바꾼 **새 객체**를 돌려주는 `withViews(article, views)` 를 만드시오. 넘겨받은 객체는 바꾸지 않습니다.

**작성할 것 — 함수 작성**

```js
function withViews(article, views) {
  
}
```

### 문제 27. = 는 복사가 아니다

다음 코드는 무엇을 찍습니까?
```js
const a = [1, 2];
const b = a;
b.push(3);
console.log(a.length);
```

① `2`  
② `3`  
③ 오류 — `const` 배열에는 push 할 수 없다  
④ `undefined`

### 문제 28. ?. 옵셔널 체이닝

기사의 기자 이름(`article.author.name`)을 돌려주는 `authorName(article)` 을 만드시오. 기사나 기자 정보가 **없으면**(`undefined` · `null`) 오류 대신 `"알 수 없음"` 을 돌려줍니다.

**작성할 것 — 함수 작성**

```js
function authorName(article) {
  
}
```

### 문제 29. Object.entries

객체를 받아 `키=값` 을 `&` 로 이은 글자(주소 뒤에 붙는 질의 문자열)를 만드는 `toQuery(params)` 를 만드시오. 글자를 바꾸는(인코딩) 일은 하지 않습니다.
- `toQuery({ page: 2, size: 10 })` → `"page=2&size=10"` · `toQuery({})` → `""`

**작성할 것 — 함수 작성**

```js
function toQuery(params) {
  
}
```

### 문제 30. map — 제목만 꺼내기

기사 배열을 받아 **제목만 모은 배열**을 돌려주는 `titles(list)` 를 `map` 으로 만드시오.
(주어진 `news` 로 시험해 볼 수 있습니다 — `console.log(titles(news))`)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function titles(list) {
  
}
```

### 문제 31. filter — 분야로 거르기

기사 배열과 분야를 받아 **그 분야의 기사만** 돌려주는 `bySection(list, section)` 을 `filter` 로 만드시오.

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function bySection(list, section) {
  
}
```

### 문제 32. find — 하나 찾기

기사 배열과 번호를 받아 **그 번호의 기사 하나**를 돌려주는 `findById(list, id)` 를 만드시오. 없으면 `undefined` 입니다.

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function findById(list, id) {
  
}
```

### 문제 33. some · every

기사 배열과 기준 조회수 `min` 을 받아 다음 객체를 돌려주는 `checkViews(list, min)` 을 만드시오.
- `some`: 조회수가 `min` 이상인 기사가 **하나라도** 있으면 `true`
- `every`: **모든** 기사의 조회수가 `min` 이상이면 `true`
- `checkViews(news, 3000)` → `{ some: true, every: false }`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function checkViews(list, min) {
  return { some: , every:  };
}
```

### 문제 34. reduce — 합계

기사 배열의 **조회수 합계**를 `reduce` 로 구하는 `totalViews(list)` 를 만드시오. 빈 배열이면 `0` 입니다.

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function totalViews(list) {
  
}
```

### 문제 35. sort — 원본을 지키며

기사를 **조회수가 많은 순**으로 정렬한 **새 배열**을 돌려주는 `sortByViews(list)` 를 만드시오. 넘겨받은 배열의 순서는 바꾸지 않습니다.

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function sortByViews(list) {
  
}
```

### 문제 36. sort 의 기본은 글자순

다음 코드는 무엇을 찍습니까?
```js
console.log([10, 9, 1, 100].sort());
```

① `[1, 9, 10, 100]`  
② `[100, 10, 9, 1]`  
③ `[1, 10, 100, 9]`  
④ `[10, 9, 1, 100]` — 숫자는 비교 함수 없이 정렬하지 않는다

### 문제 37. 숫자 정렬

숫자 배열을 **작은 수부터** 정렬한 새 배열을 돌려주는 `sortNumbers(nums)` 를 만드시오. 넘겨받은 배열은 바꾸지 않습니다.

**작성할 것 — 함수 작성**

```js
function sortNumbers(nums) {
  
}
```

### 문제 38. 이어 쓰기 — 상위 n개

조회수가 많은 기사 **상위 `n`개의 제목**을 돌려주는 `topTitles(list, n)` 을 만드시오. 넘겨받은 배열은 바꾸지 않습니다.
- `topTitles(news, 3)` → `["폭설 주의보", "야구 개막", "AI 규제안"]`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function topTitles(list, n) {
  
}
```

### 문제 39. 분야별 개수 세기

기사 배열을 받아 **분야별 기사 수**를 담은 객체를 돌려주는 `countBySection(list)` 을 만드시오.
- `countBySection(news)` → `{ 경제: 2, 문화: 1, 사회: 2, 스포츠: 1, 정치: 1, IT: 1 }` (키의 순서는 상관없음)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function countBySection(list) {
  const counts = {};
  
  return counts;
}
```

### 문제 40. Set — 중복 없애기

기사 배열에서 **기자 이름을 중복 없이**, 처음 나온 순서대로 담은 배열을 돌려주는 `uniqueAuthors(list)` 를 만드시오.
- `uniqueAuthors(news)` → `["김하나", "이도윤", "박서준", "최지우", "정민호"]`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function uniqueAuthors(list) {
  
}
```

### 문제 41. null 이 섞인 평균

기사 배열의 **평균 조회수**(정수로 반올림)를 돌려주는 `averageViews(list)` 를 만드시오. 조회수가 `null` 인 기사는 **빼고** 셉니다. 셀 기사가 없으면 `0` 입니다.
- `averageViews(news)` → `1946` (15570 ÷ 8)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
// 조회수를 아직 못 센 기사가 하나 있다
const newsWithNull = [...news, { id: 9, title: "속보", section: "사회", author: "박서준", views: null, date: "2024-11-06" }];
```

**작성할 것 — 함수 작성**

```js
function averageViews(list) {
  
}
```

### 문제 42. flatMap — 겹친 배열 펴기

기사마다 태그 배열(`tags`)이 있습니다. 모든 기사의 태그를 **한 줄로 펴서, 중복 없이**(처음 나온 순서) 돌려주는 `allTags(list)` 를 만드시오.
- `allTags(tagged)` → `["경제", "금리", "날씨", "수출"]`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const tagged = [
  { title: "금리 동결", tags: ["경제", "금리"] },
  { title: "폭설 주의보", tags: ["날씨"] },
  { title: "반도체 수출", tags: ["경제", "수출"] },
];
```

**작성할 것 — 함수 작성**

```js
function allTags(list) {
  
}
```

### 문제 43. 클로저 — 세는 함수 만들기

부를 때마다 1, 2, 3 … 을 돌려주는 **함수를 만들어 돌려주는** `makeCounter()` 를 만드시오. 만든 계수기끼리는 **따로** 셉니다.
```js
const a = makeCounter();
a(); // 1
a(); // 2
const b = makeCounter();
b(); // 1
```

**작성할 것 — 함수 작성**

```js
function makeCounter() {
  
}
```

### 문제 44. 재귀 — 겹친 배열의 합

배열 안에 배열이 **몇 겹이든** 들어 있을 때, 모든 숫자의 합을 돌려주는 `sumNested(arr)` 를 만드시오.
- `sumNested([1, [2, [3, [4]]], 5])` → `15`

**작성할 것 — 함수 작성**

```js
function sumNested(arr) {
  
}
```

### 문제 45. DOM — 글자 바꾸기

JS 로 화면의 글자를 바꾸시오.
- 제목(`#title`) → `오늘의 뉴스`
- 설명(`.desc`) → `8건의 기사`

**HTML (고정)**

```html
<h1 id="title">제목</h1>
<p class="desc">설명</p>
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 46. DOM — 조건에 맞는 것에 class

목록의 각 `.item` 에는 조회수가 `data-views` 로 적혀 있습니다. 조회수가 **2000 이상**인 항목에만 class `hot` 을 붙이시오.

**HTML (고정)**

```html
<ul id="list">
  <li class="item" data-views="1845">금리 동결</li>
  <li class="item" data-views="920">신작 개봉</li>
  <li class="item" data-views="3120">폭설 주의보</li>
  <li class="item" data-views="2102">국회 본회의</li>
</ul>
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 47. 배열을 화면으로 — 그리기 함수

기사 배열을 받아 `#list` 에 기사마다 `<li>` 하나(글자는 제목)를 그리는 함수 `render(list)` 를 만들고, 맨 아래에서 `render(news)` 를 부르시오.
🔴 `render` 를 **여러 번** 불러도 목록이 겹치면 안 됩니다 — 그릴 때마다 새로 그립니다.

**HTML (고정)**

```html
<ul id="list"></ul>
```

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — DOM · 이벤트**

```js
function render(list) {
  const ul = document.querySelector("#list");
  
}

render(news);
```

### 문제 48. textContent 와 innerHTML

주어진 `title` 을 `#headline` 에 **글자 그대로** 넣으시오. 화면에 `<b>속보</b> 폭설 주의보` 가 꺾쇠까지 그대로 보여야 하고, 굵은 글씨(`<b>` 요소)가 생기면 안 됩니다.

**HTML (고정)**

```html
<h2 id="headline"></h2>
```

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const title = "<b>속보</b> 폭설 주의보";
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 49. 클릭 이벤트 — 좋아요

버튼(`#like`)을 누를 때마다 숫자가 1씩 올라가게 하시오 — `좋아요 1`, `좋아요 2` …

**HTML (고정)**

```html
<button id="like">좋아요 0</button>
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 50. input 이벤트 — 글자 수 세기

입력칸(`#q`)에 **글자를 칠 때마다** 아래(`#count`)에 지금 글자 수를 `N자` 로 보여 주시오.

**HTML (고정)**

```html
<input id="q" placeholder="검색어">
<p id="count">0자</p>
```

**작성할 것 — DOM · 이벤트**

```js

```

## 고급 (10문제)

### 문제 51. 이벤트 위임

목록의 항목을 누르면 `#picked` 에 `고른 기사: 번호` 를 보여 주시오(번호는 `data-id`).
🔴 이벤트는 **목록(`#list`)에 한 번만** 거십시오. 나중에 JS 로 **새로 붙인** 항목을 눌러도 동작해야 합니다.

**HTML (고정)**

```html
<ul id="list">
  <li data-id="1">금리 동결</li>
  <li data-id="2">신작 개봉</li>
  <li data-id="3">폭설 주의보</li>
</ul>
<p id="picked">고른 기사: 없음</p>
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 52. 폼 제출 — preventDefault

검색 폼을 제출하면(버튼 · Enter) **페이지가 새로 고쳐지지 않게** 막고, `#result` 에 보여 주시오.
- 검색어(앞뒤 공백 제거)가 있으면 `「금리」 검색`
- 비어 있으면 `검색어를 입력하세요`

**HTML (고정)**

```html
<form id="search">
  <input name="q" id="q">
  <button>검색</button>
</form>
<p id="result"></p>
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 53. 실행 순서

다음 코드는 어떤 순서로 찍습니까?
```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
```

① `1 2 3 4`  
② `1 4 2 3`  
③ `1 4 3 2`  
④ `1 3 4 2`

### 문제 54. 기다리는 함수 만들기 — Promise

`ms` 밀리초 뒤에 끝나는 **Promise** 를 돌려주는 `sleep(ms)` 를 만드시오. `await sleep(1000)` 처럼 쓸 수 있어야 합니다.

**작성할 것 — 비동기 함수**

```js
function sleep(ms) {
  
}
```

### 문제 55. async / await

주어진 `getNumber(n)` 은 30ms 뒤에 `n × 10` 을 주는 Promise 를 돌려줍니다. 두 수의 결과를 받아 **더한 값**을 돌려주는 `async` 함수 `sumTwo(a, b)` 를 만드시오.
- `await sumTwo(1, 2)` → `30`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
// 30ms 뒤에 n × 10 을 주는 함수 (서버에서 받아오는 흉내)
function getNumber(n) {
  return new Promise((resolve) => setTimeout(() => resolve(n * 10), 30));
}
```

**작성할 것 — 비동기 함수**

```js
async function sumTwo(a, b) {
  
}
```

### 문제 56. fetch — await 가 두 번

`news.json` 을 받아(`fetch`) **제목 배열**을 돌려주는 `async` 함수 `loadTitles()` 를 만드시오.
(이 연습장의 `fetch` 는 인터넷 대신 위 「가짜 서버」 표대로 답합니다)

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `news.json` | 200 · JSON 배열 8건 |

**작성할 것 — 비동기 함수**

```js
async function loadTitles() {
  
}
```

### 문제 57. fetch 오류 처리 — res.ok 와 try/catch

주소를 받아 결과를 **객체로** 돌려주는 `async` 함수 `loadSafe(url)` 을 만드시오. 함수는 **오류를 던지지 않습니다**.
- 성공 → `{ ok: true, data: 받은 JSON }`
- 응답이 200번대가 아니면(404 · 500 …) → `{ ok: false, error: "HTTP 404" }` 처럼 상태 번호
- 네트워크 오류로 `fetch` 자체가 실패하면 → `{ ok: false, error: "네트워크 오류" }`

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `news.json` | 200 · JSON 배열 2건 |
| `broken.json` | 500 · 글자 "서버 오류" |
| `down.json` | 네트워크 오류 (fetch 가 실패) |

**작성할 것 — 비동기 함수**

```js
async function loadSafe(url) {
  
}
```

### 문제 58. Promise.all — 한꺼번에

주소 배열을 받아 **모두 한꺼번에** 받아온 JSON 을 **같은 순서의 배열**로 돌려주는 `async` 함수 `loadAll(urls)` 를 만드시오.
가짜 서버는 주소마다 150ms 씩 걸립니다 — 셋을 **하나씩** 받으면 450ms, **한꺼번에** 받으면 150ms 쯤입니다. 한꺼번에 받으십시오.

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `a.json` | 200 · JSON 1 · 150ms 뒤 |
| `b.json` | 200 · JSON 2 · 150ms 뒤 |
| `c.json` | 200 · JSON 3 · 150ms 뒤 |

**작성할 것 — 비동기 함수**

```js
async function loadAll(urls) {
  
}
```

### 문제 59. 종합 — 받아서 그리기 (로딩 · 성공 · 실패)

페이지가 열리면 `news.json` 을 받아 그리시오. 화면의 상태는 **셋**입니다(8일차).
- 받는 동안 `#status`: `불러오는 중…`
- 성공: `#list` 에 기사마다 `<li>`(글자는 제목) — **조회수가 많은 순** · `#status`: `8건`(받은 건수)
- 실패(응답이 200번대가 아님): `#status`: `불러오지 못했습니다 (HTTP 500)` 처럼 상태 번호

**HTML (고정)**

```html
<p id="status"></p>
<ul id="list"></ul>
```

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `news.json` | 200 · JSON 배열 8건 · 120ms 뒤 |

**작성할 것 — DOM · 이벤트**

```js
async function start() {
  const status = document.querySelector("#status");
  const list = document.querySelector("#list");
  
}

start();
```

### 문제 60. 종합 — 실시간 검색

제목 검색 화면을 만드시오.
- 처음에는 `news` 전부를 `#list` 에 그리고(`<li>` 글자는 제목, 원래 순서) `#count` 에 `8건`
- 입력칸(`#q`)에 **칠 때마다** 검색어(앞뒤 공백 제거)가 제목에 **들어 있는** 기사만 다시 그리고 건수를 바꿉니다. 검색어가 비면 전부
- 폼을 제출(Enter)해도 페이지가 새로 고쳐지지 않게 막습니다

**HTML (고정)**

```html
<form id="search">
  <input id="q" placeholder="제목 검색">
</form>
<p id="count"></p>
<ul id="list"></ul>
```

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const news = [
  { id: 1, title: "금리 동결", section: "경제", author: "김하나", views: 1845, date: "2024-11-05" },
  { id: 2, title: "신작 개봉", section: "문화", author: "이도윤", views: 920, date: "2024-11-05" },
  { id: 3, title: "폭설 주의보", section: "사회", author: "박서준", views: 3120, date: "2024-11-04" },
  { id: 4, title: "야구 개막", section: "스포츠", author: "최지우", views: 2733, date: "2024-11-04" },
  { id: 5, title: "국회 본회의", section: "정치", author: "김하나", views: 2102, date: "2024-11-03" },
  { id: 6, title: "반도체 수출", section: "경제", author: "정민호", views: 1560, date: "2024-11-03" },
  { id: 7, title: "지하철 지연", section: "사회", author: "박서준", views: 880, date: "2024-11-02" },
  { id: 8, title: "AI 규제안", section: "IT", author: "이도윤", views: 2410, date: "2024-11-02" },
];
```

**작성할 것 — DOM · 이벤트**

```js
const list = document.querySelector("#list");
const count = document.querySelector("#count");

function render(items) {
  
}

render(news);
```
