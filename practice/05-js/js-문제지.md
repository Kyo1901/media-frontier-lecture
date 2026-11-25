# JS 연습 문제지

> 총 **60문제** — 초급 22 · 중급 26 · 고급 12 · 번호가 커질수록 어려워집니다
> 유형: 개념 확인 2 · 결과 예측 7 · 빈칸 채우기 7 · 오류 고치기 11 · 코드 작성 31 · 종합 구현 2
> 수업(JS 1~9일차)에서 다룬 것에 더해, 수업에서 짧게 지나간 **기본 문법**(문자열 · Math · 기본값 · 나머지 매개변수 · ?. · Set · 클로저 · 재귀)도 담았습니다.
> 풀이 페이지(**JS 연습장**)에서 바로 돌려 보고 채점할 수 있습니다. 정답과 해설은 `js-답안지.md` 에 있습니다.

## 채점은 이렇게 합니다

- 여러분의 코드를 **실제로 돌려** 결과를 봅니다 — 함수가 돌려준 값 · `console.log` 로 찍힌 줄 · 화면(DOM)의 모습. **쓰는 방법은 자유**입니다.
- 함수 문제는 숨은 입력 여러 개로 불러 봅니다. 틀리면 「입력 → 내 답 (기대 …)」 이 나옵니다. 문제에 적힌 **함수 이름을 그대로** 쓰십시오.
- 「넘겨준 배열 · 객체는 바꾸지 않습니다」 라고 적힌 문제는 부른 뒤 원본이 그대로인지도 봅니다.
- DOM 문제는 채점기가 직접 **누르고 · 입력하고 · 제출해 보고** 화면을 봅니다.
- `fetch` 는 인터넷 대신 문제의 **가짜 서버** 표대로 답합니다(404 · 500 · 네트워크 오류도 흉내 냅니다).
- 끝나지 않는 코드(무한 반복)는 3초 뒤 멈추고 알려 줍니다.
- 코드를 쓰지 않는 문제도 있습니다 — **하나 고르기** · **모두 고르기**(맞는 것을 빠짐없이) · **답 적기**(찍히는 값을 적는다). 「빈칸 채우기」 · 「오류 고치기」는 시작 코드를 고쳐서 냅니다.

## 목차

- **초급** (1~22번, 22문제): 형 변환 · 템플릿 리터럴 · 비교 · 조건 · 반복 · ?? · 문자열 · 시간 표시 · Math · 기본값 · 나머지 매개변수 · return
- **중급** (23~48번, 26문제): 배열 사본 · 구조 분해 · 객체 전개 · ?. · Object.entries · map · filter · find · some/every · reduce · sort · Set · 묶기 · flatMap · 클로저 · 재귀 · DOM
- **고급** (49~60번, 12문제): 이벤트(클릭 · input · 위임 · submit) · 실행 순서 · Promise · async/await · fetch · 오류 처리 · Promise.all · 종합

## 초급 (22문제)

### 문제 1. * 와 + 의 형 변환

*결과 예측 · 답 적기*

다음 코드가 찍는 두 줄을 차례로 적으시오.
```js
console.log("10" * 2);
console.log("10" + 2 - 1);
```

**답 적기** — 두 값을 띄어 써서: `______`

### 문제 2. 템플릿 리터럴

*코드 작성 · 출력 (console.log)*

주어진 변수 `title` 과 `minutes` 를 써서 아래 한 줄을 **console.log** 로 찍으시오. 템플릿 리터럴(`` ` ``)을 쓰십시오.
```text
새벽 시장 이야기 · 32분 듣기
```
(검사는 변수 값을 바꿔서도 한 번 더 돌립니다 — 글자를 그대로 적으면 걸립니다)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const title = "새벽 시장 이야기";
const minutes = 32;
```

**작성할 것 — 출력 (console.log)**

```js

```

### 문제 3. 비교 — true 인 것 모두

*개념 확인 · 모두 고르기*

다음 중 결과가 `true` 인 것을 **모두** 고르시오.

(맞는 것을 **모두** 고르시오)

① `"1" === 1`  
② `null == undefined`  
③ `0 == ""`  
④ `NaN === NaN`  
⑤ `"b" > "a"`  
⑥ `[] === []`

### 문제 4. 입력값은 글자다

*오류 고치기 · 함수 작성*

장바구니의 수량 칸 두 개(`input.value` — 언제나 **글자**)를 받아 합을 돌려주는 함수입니다. 그런데 `totalQty("2", "3")` 이 `5` 가 아니라 `"23"` 을 돌려줍니다. **숫자** 합을 돌려주게 고치시오.

**작성할 것 — 함수 작성**

```js
function totalQty(a, b) {
  return a + b;
}
```

### 문제 5. if … else if — 구간 나누기

*코드 작성 · 함수 작성*

나이를 받아 공연 관람료(원)를 돌려주는 `ticketPrice(age)` 를 만드시오.
- **7세 이하** `0` · **8~18세** `7000` · **65세 이상** `5000` · 그 밖에는 `12000`

**작성할 것 — 함수 작성**

```js
function ticketPrice(age) {
  
}
```

### 문제 6. 나머지 연산자 %

*코드 작성 · 함수 작성*

정수가 짝수이면 `true`, 홀수이면 `false` 를 돌려주는 `isEven(n)` 을 만드시오. 음수도 들어옵니다.

**작성할 것 — 함수 작성**

```js
function isEven(n) {
  
}
```

### 문제 7. switch

*빈칸 채우기 · 함수 작성*

요일 번호(0 = 일요일 … 6 = 토요일)를 받아 한 글자 요일을 돌려주는 `dayName(n)` 을 **switch** 로 만들려 합니다.
- `0` → `"일"`, `1` → `"월"`, … `6` → `"토"`
- 그 밖의 값 → `"없음"`

아래 코드의 빈칸(`___`) 두 곳을 채우시오. 두 번째 빈칸은 「어느 case 에도 맞지 않을 때」입니다.

**작성할 것 — 함수 작성**

```js
function dayName(n) {
  switch (___) {
    case 0: return "일";
    case 1: return "월";
    case 2: return "화";
    case 3: return "수";
    case 4: return "목";
    case 5: return "금";
    case 6: return "토";
    ___: return "없음";
  }
}
```

### 문제 8. for 반복

*빈칸 채우기 · 함수 작성*

1부터 `n` 까지의 합을 돌려주는 `sumTo(n)` 을 **for** 로 만들려 합니다. `n` 이 0 이면 `0` 입니다.

아래 코드의 빈칸(`___`) 두 곳을 채우시오.

**작성할 것 — 함수 작성**

```js
function sumTo(n) {
  let total = 0;
  for (let i = ___; i ___ n; i++) {
    total += i;
  }
  return total;
}
```

### 문제 9. while 반복

*오류 고치기 · 함수 작성*

`n` 부터 1까지 거꾸로 센 배열을 돌려주는 `countdown(n)` 입니다. 그런데 `countdown(3)` 이 `[3, 2, 1]` 이 아니라 `[3, 2, 1, 0]` 을 돌려줍니다. 고치시오.
- `countdown(3)` → `[3, 2, 1]` · `countdown(0)` → `[]`

**작성할 것 — 함수 작성**

```js
function countdown(n) {
  const result = [];
  while (n >= 0) {
    result.push(n);
    n--;
  }
  return result;
}
```

### 문제 10. for…of

*코드 작성 · 출력 (console.log)*

주어진 배열 `tracks` 를 **for…of** 로 돌며 곡마다 한 줄씩 찍으시오. 트랙 번호는 1부터입니다.
```text
트랙 1 — 새벽 라디오
트랙 2 — 퇴근길
트랙 3 — 주말 산책
```
(검사는 다른 배열로도 돌립니다)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const tracks = ["새벽 라디오", "퇴근길", "주말 산책"];
```

**작성할 것 — 출력 (console.log)**

```js

```

### 문제 11. break

*오류 고치기 · 함수 작성*

숫자 배열에서 **처음으로** 나오는 음수의 위치(인덱스)를 돌려주는 `firstNegative(nums)` 입니다(음수가 없으면 `-1`). 그런데 `firstNegative([3, -1, -5])` 가 `1` 이 아니라 `2` 를 돌려줍니다. 처음 것을 찾으면 **거기서 멈추도록** 고치시오.

**작성할 것 — 함수 작성**

```js
function firstNegative(nums) {
  let found = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) found = i;
  }
  return found;
}
```

### 문제 12. || 와 ?? — 0 도 값이다

*오류 고치기 · 함수 작성*

설정 객체에서 음량(`volume`)을 꺼내되, **없으면**(`undefined` · `null`) 기본값 `50` 을 쓰는 함수입니다.
그런데 음량을 `0`(음소거)으로 맞춘 사람도 `50` 으로 나옵니다. 고치시오.

**작성할 것 — 함수 작성**

```js
function volumeOf(settings) {
  return settings.volume || 50;
}
```

### 문제 13. 문자열 다듬기 — trim · toLowerCase

*코드 작성 · 함수 작성*

검색어를 비교하기 좋게 다듬는 `cleanInput(s)` 를 만드시오 — **앞뒤 공백을 없애고 영어는 소문자로** 바꿉니다.
- `cleanInput("  Hello JS  ")` → `"hello js"`

**작성할 것 — 함수 작성**

```js
function cleanInput(s) {
  
}
```

### 문제 14. 문자열 자르기 — length · slice

*오류 고치기 · 함수 작성*

제목이 `max` 글자보다 **길면** 앞의 `max` 글자만 남기고 `…` 를 붙이고, 아니면 그대로 돌려주는 `shorten(title, max)` 입니다.
그런데 `shorten("금리 동결", 5)` 처럼 **딱 `max` 글자인 제목**에도 `…` 가 붙습니다(`"금리 동결…"`). 고치시오.
- `shorten("폭설 주의보 발령", 5)` → `"폭설 주의…"` · `shorten("금리 동결", 5)` → `"금리 동결"`

**작성할 것 — 함수 작성**

```js
function shorten(title, max) {
  if (title.length >= max) return title.slice(0, max) + "…";
  return title;
}
```

### 문제 15. 자리 맞추기 — padStart

*코드 작성 · 함수 작성*

기사 번호를 **네 자리**로 맞춘 글자를 돌려주는 `padId(n)` 을 만드시오. 모자라는 자리는 앞에 `0` 을 채웁니다.
- `padId(7)` → `"0007"` · `padId(12345)` → `"12345"`(넘치면 그대로)

**작성할 것 — 함수 작성**

```js
function padId(n) {
  
}
```

### 문제 16. 화살표 함수 — 시간 표시

*코드 작성 · 함수 작성*

초(정수)를 받아 `분:초` 모양의 글자를 돌려주는 `formatTime` 을 **화살표 함수**로 만드시오. 초는 **두 자리**로 맞춥니다.
- `formatTime(205)` → `"3:25"` · `formatTime(65)` → `"1:05"` · `formatTime(600)` → `"10:00"`

**작성할 것 — 함수 작성**

```js
const formatTime = (sec) => {
  
};
```

### 문제 17. 글자를 쪼개 숫자로

*코드 작성 · 함수 작성*

`"3:25"` 처럼 `분:초` 로 적힌 재생 시간을 받아 **초(숫자)** 를 돌려주는 `toSeconds(text)` 를 만드시오.
- `toSeconds("3:25")` → `205` · `toSeconds("10:00")` → `600`

**작성할 것 — 함수 작성**

```js
function toSeconds(text) {
  
}
```

### 문제 18. 반올림 — Math.round

*빈칸 채우기 · 함수 작성*

수를 소수점 아래 `digits` 자리로 **반올림한 숫자**를 돌려주는 `roundTo(x, digits)` 를 만들려 합니다.
- `roundTo(3.14159, 2)` → `3.14` · `roundTo(2.5, 0)` → `3`

아래 코드의 빈칸(`___`) 두 곳을 채우시오. (힌트: 소수 둘째 자리로 반올림하려면 100 을 곱해 반올림한 뒤 다시 100 으로 나눕니다)

**작성할 것 — 함수 작성**

```js
function roundTo(x, digits) {
  const k = 10 ** ___;
  return Math.___(x * k) / k;
}
```

### 문제 19. 무작위 정수 — Math.random

*코드 작성 · 함수 작성*

`min` 이상 `max` 이하의 **정수**를 무작위로 돌려주는 `randomInt(min, max)` 를 만드시오. 양 끝 값도 나와야 합니다.
(검사는 여러 번 불러 봅니다)

**작성할 것 — 함수 작성**

```js
function randomInt(min, max) {
  
}
```

### 문제 20. 기본값은 언제 쓰이나

*결과 예측 · 답 적기*

다음 코드가 찍는 세 줄을 차례로 적으시오.
```js
function greet(name = "손님") {
  return `${name}님`;
}
console.log(greet(undefined));
console.log(greet(null));
console.log(greet(""));
```

**답 적기** — 세 줄을 띄어 써서: `______`

### 문제 21. 나머지 매개변수 ...

*코드 작성 · 함수 작성*

인자를 **몇 개든** 받아 모두 더한 값을 돌려주는 `sumAll` 을 만드시오. 하나도 안 주면 `0` 입니다.
- `sumAll(1, 2, 3)` → `6` · `sumAll()` → `0`

**작성할 것 — 함수 작성**

```js
function sumAll() {
  
}
```

### 문제 22. return 과 console.log

*결과 예측 · 하나 고르기*

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

## 중급 (26문제)

### 문제 23. 배열 — 처음과 끝 바꾸기

*코드 작성 · 함수 작성*

배열의 **첫 값과 마지막 값을 바꾼 새 배열**을 돌려주는 `swapEnds(arr)` 를 만드시오.
- `swapEnds([1, 2, 3, 4])` → `[4, 2, 3, 1]`
- 길이가 0 · 1 이면 같은 내용의 새 배열
- 🔴 넘겨받은 배열은 **바꾸지 않습니다**

**작성할 것 — 함수 작성**

```js
function swapEnds(arr) {
  
}
```

### 문제 24. 원본을 바꾸는 메서드

*개념 확인 · 모두 고르기*

`const a = [3, 1, 2];` 에 다음을 **하나씩**(매번 새로 만든 `a` 에) 했을 때, **`a` 자체가 바뀌는 것**을 모두 고르시오.

(맞는 것을 **모두** 고르시오)

① `a.push(4)`  
② `a.map((x) => x * 2)`  
③ `a.sort()`  
④ `a.filter((x) => x > 1)`  
⑤ `a.slice(0, 1)`  
⑥ `a.reverse()`

### 문제 25. 구조 분해와 기본값

*코드 작성 · 함수 작성*

회차 객체를 받아 소개 한 줄을 돌려주는 `describe(ep)` 를 만드시오. **구조 분해**로 꺼내 쓰고, 게스트(`guest`)가 없으면 `없음` 으로 씁니다.
- `describe(eps[0])` → `"새벽 시장 이야기 — 진행 한도윤 · 게스트 박상인"`
- `describe(eps[1])` → `"동네 책방 탐방 — 진행 이서아 · 게스트 없음"`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const eps = [
  { title: "새벽 시장 이야기", host: "한도윤", guest: "박상인" },
  { title: "동네 책방 탐방", host: "이서아" },
];
```

**작성할 것 — 함수 작성**

```js
function describe(ep) {
  
}
```

### 문제 26. 객체 전개로 바꾼 사본

*코드 작성 · 함수 작성*

회차 객체와 새 재생 수를 받아, **재생 수(`plays`)만 바꾼 새 객체**를 돌려주는 `withPlays(ep, plays)` 를 만드시오. 넘겨받은 객체는 바꾸지 않습니다.
- `withPlays({ id: 1, title: "퇴근길", plays: 10 }, 11)` → `{ id: 1, title: "퇴근길", plays: 11 }`

**작성할 것 — 함수 작성**

```js
function withPlays(ep, plays) {
  
}
```

### 문제 27. 전개는 한 겹만 복사한다

*결과 예측 · 하나 고르기*

다음 코드는 무엇을 찍습니까?
```js
const a = { title: "퇴근길", tags: ["음악"] };
const b = { ...a };
b.title = "출근길";
b.tags.push("라디오");
console.log(a.title, a.tags.length);
```

① `퇴근길 1`  
② `퇴근길 2`  
③ `출근길 2`  
④ `출근길 1`

### 문제 28. ?. 옵셔널 체이닝

*코드 작성 · 함수 작성*

기사의 기자 이름(`article.author.name`)을 돌려주는 `authorName(article)` 을 만드시오. 기사나 기자 정보가 **없으면**(`undefined` · `null`) 오류 대신 `"알 수 없음"` 을 돌려줍니다.

**작성할 것 — 함수 작성**

```js
function authorName(article) {
  
}
```

### 문제 29. Object.entries

*빈칸 채우기 · 함수 작성*

객체를 받아 `키=값` 을 `&` 로 이은 글자(주소 뒤에 붙는 질의 문자열)를 만드는 `toQuery(params)` 를 만들려 합니다. 글자를 바꾸는(인코딩) 일은 하지 않습니다.
- `toQuery({ page: 2, size: 10 })` → `"page=2&size=10"` · `toQuery({})` → `""`

아래 코드의 빈칸(`___`) 두 곳을 채우시오. (`Object.___(params)` 는 `[["page", 2], ["size", 10]]` 처럼 [키, 값] 짝의 배열을 줍니다)

**작성할 것 — 함수 작성**

```js
function toQuery(params) {
  return Object.___(params)
    .map(([k, v]) => `${k}=${v}`)
    .join(___);
}
```

### 문제 30. map — 번호 붙여 꾸미기

*코드 작성 · 함수 작성*

회차 배열을 받아 `"번호. 제목 (N분)"` 모양의 **글자 배열**을 돌려주는 `numbered(list)` 를 `map` 으로 만드시오. 번호는 1부터입니다.
- `numbered(episodes)` → `["1. 새벽 시장 이야기 (32분)", "2. 금리와 내 통장 (41분)", …]`
- 힌트: `map` 의 콜백은 두 번째 인자로 **자리 번호**(0부터)를 받습니다 — `(ep, i) => …`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function numbered(list) {
  
}
```

### 문제 31. filter — 조건 둘

*코드 작성 · 함수 작성*

분야와 최대 길이(분)를 받아, **그 분야이면서 길이가 최대 길이 이하**인 회차의 **제목 배열**을 돌려주는 `quickListen(list, category, maxMinutes)` 를 만드시오.
- `quickListen(episodes, "경제", 35)` → `["전세 계약 체크"]`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function quickListen(list, category, maxMinutes) {
  
}
```

### 문제 32. find — 없을 때까지 생각하기

*코드 작성 · 함수 작성*

검색어를 받아, 제목에 그 말이 **들어 있는 첫 회차의 `id`** 를 돌려주는 `firstMatch(list, word)` 를 만드시오. 없으면 `null` 입니다.
- `firstMatch(episodes, "책방")` → `7` · `firstMatch(episodes, "라디오")` → `null`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function firstMatch(list, word) {
  
}
```

### 문제 33. 빈 배열의 some · every

*결과 예측 · 답 적기*

다음 코드가 찍는 두 줄을 차례로 적으시오.
```js
const empty = [];
console.log(empty.some((x) => x > 0));
console.log(empty.every((x) => x > 0));
```

**답 적기** — 두 값을 띄어 써서: `______`

### 문제 34. reduce — 합을 시간으로

*코드 작성 · 함수 작성*

회차들의 길이(`minutes`)를 모두 더해 `"N시간 M분"` 으로 돌려주는 `totalTime(list)` 를 만드시오. 합은 `reduce` 로 구하십시오.
- `totalTime(episodes)` → `"4시간 52분"` · `totalTime([])` → `"0시간 0분"`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function totalTime(list) {
  
}
```

### 문제 35. 글자 정렬 — 대문자가 먼저

*결과 예측 · 하나 고르기*

다음 코드는 무엇을 찍습니까?
```js
console.log(["b", "a", "C"].sort());
```

① `["a", "b", "C"]`  
② `["C", "a", "b"]`  
③ `["a", "C", "b"]`  
④ `["b", "a", "C"]` — 바뀌지 않는다

### 문제 36. sort 가 원본을 바꾼다

*오류 고치기 · 함수 작성*

화면 옆에 「인기 3」 칸을 만들려고 `topThree(episodes)` 를 불렀더니, **최신순으로 보여야 할 `episodes` 까지 순서가 바뀌었습니다**.
돌려주는 값(재생 수 상위 3개)은 그대로 두고, 넘겨받은 배열을 바꾸지 않게 고치시오.

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function topThree(list) {
  return list.sort((a, b) => b.plays - a.plays).slice(0, 3);
}
```

### 문제 37. sort — 기준 둘

*코드 작성 · 함수 작성*

회차를 **분야 가나다순**으로, 같은 분야 안에서는 **재생 수가 많은 순**으로 정렬한 새 배열을 돌려주는 `sortForShelf(list)` 를 만드시오. 넘겨받은 배열은 바꾸지 않습니다.
- `sortForShelf(episodes)` 의 id → `[6, 2, 5, 3, 7, 4, 1, 8]` (경제 → 기술 → 문화 → 스포츠 → 시사)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function sortForShelf(list) {
  
}
```

### 문제 38. Set — 중복 없애기

*빈칸 채우기 · 함수 작성*

회차 배열에서 **진행자 이름을 중복 없이**, 처음 나온 순서대로 담은 배열을 돌려주는 `uniqueHosts(list)` 를 만들려 합니다.
- `uniqueHosts(episodes)` → `["한도윤", "서유진", "이서아", "정하린"]`

아래 코드의 빈칸(`___`) 두 곳을 채우시오.

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function uniqueHosts(list) {
  return [...new ___(list.map((ep) => ep.___))];
}
```

### 문제 39. 0 점도 별점이다 — 평균

*코드 작성 · 함수 작성*

리뷰 배열의 **별점 평균**(소수 한 자리로 반올림)을 돌려주는 `avgStars(list)` 를 만드시오.
- 별점을 **안 준** 리뷰(`stars` 키가 없음)는 빼고 셉니다
- 🔴 `0` 점은 «준 별점»입니다 — 셉니다
- 셀 리뷰가 없으면 `0` · `avgStars(reviews)` → `3` (12 ÷ 4)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const reviews = [
  { user: "a01", stars: 5 },
  { user: "b02", stars: 0 },
  { user: "c03", stars: 4 },
  { user: "d04" },
  { user: "e05", stars: 3 },
];
```

**작성할 것 — 함수 작성**

```js
function avgStars(list) {
  
}
```

### 문제 40. 묶기 — 진행자별 제목 목록

*코드 작성 · 함수 작성*

회차 배열을 받아 **진행자 이름 → 그 진행자의 제목 배열** 객체를 돌려주는 `groupByHost(list)` 를 만드시오. 제목은 나온 순서대로.
- `groupByHost(episodes)` → `{ 한도윤: ["새벽 시장 이야기", "야구 결산 특집"], 서유진: [...], 이서아: [...], 정하린: [...] }` (키의 순서는 상관없음)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function groupByHost(list) {
  
}
```

### 문제 41. 분야별 1위

*코드 작성 · 함수 작성*

분야마다 **재생 수가 가장 많은 회차의 제목**을 담은 객체를 돌려주는 `topByCategory(list)` 를 만드시오.
- `topByCategory(episodes)` → `{ 시사: "새벽 시장 이야기", 경제: "전세 계약 체크", 문화: "겨울 영화 추천", 스포츠: "야구 결산 특집", 기술: "AI 비서 써 보기" }` (키의 순서는 상관없음)

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — 함수 작성**

```js
function topByCategory(list) {
  
}
```

### 문제 42. flatMap — 겹친 배열 펴기

*코드 작성 · 함수 작성*

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

*오류 고치기 · 함수 작성*

부를 때마다 1, 2, 3 … 을 돌려주는 **함수를 만들어 돌려주는** `makeCounter()` 입니다. 만든 계수기끼리는 **따로** 세야 하는데, 아래처럼 두 번째 계수기 `b` 가 `1` 이 아니라 `3` 부터 셉니다. 고치시오.
```js
const a = makeCounter();
a(); // 1
a(); // 2
const b = makeCounter();
b(); // 3  ← 1 이어야 한다
```

**작성할 것 — 함수 작성**

```js
let count = 0;
function makeCounter() {
  return () => {
    count++;
    return count;
  };
}
```

### 문제 44. 재귀 — 겹친 배열의 합

*코드 작성 · 함수 작성*

배열 안에 배열이 **몇 겹이든** 들어 있을 때, 모든 숫자의 합을 돌려주는 `sumNested(arr)` 를 만드시오.
- `sumNested([1, [2, [3, [4]]], 5])` → `15`

**작성할 것 — 함수 작성**

```js
function sumNested(arr) {
  
}
```

### 문제 45. DOM — 잡아서 글자 바꾸기

*빈칸 채우기 · DOM · 이벤트*

재생기 화면에서 곡 제목(`.now`)을 `퇴근길`, 길이(`#time`)를 `3:25` 로 바꾸려 합니다. 빈칸(`___`) 세 곳을 채우시오.

**HTML (고정)**

```html
<section class="player">
  <h2 class="now">-</h2>
  <p id="time">0:00</p>
</section>
```

**작성할 것 — DOM · 이벤트**

```js
const now = document.___(".now");
const time = document.querySelector(___);
now.___ = "퇴근길";
time.textContent = "3:25";
```

### 문제 46. classList — 하나만 강조

*코드 작성 · DOM · 이벤트*

지금 재생 중인 곡(번호 `nowId`)에만 class `playing` 이 붙게 하시오. 처음 HTML 에는 1번 곡에 `playing` 이 붙어 있으니, **다른 곡에서는 떼어야** 합니다. 곡 번호는 `data-id` 에 있습니다.
(검사는 `nowId` 를 바꿔서도 돌립니다)

**HTML (고정)**

```html
<ul id="tracks">
  <li class="track playing" data-id="1">새벽 라디오</li>
  <li class="track" data-id="2">퇴근길</li>
  <li class="track" data-id="3">주말 산책</li>
</ul>
```

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const nowId = 3;
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 47. 배열을 표로 그리기

*코드 작성 · DOM · 이벤트*

회차 배열을 받아 `#rows` 에 회차마다 `<tr>` 한 줄을 그리는 `renderRows(list)` 를 만들고, 맨 아래에서 `renderRows(episodes)` 를 부르시오.
- 줄마다 칸(`<td>`) **두 개** — 제목 · 길이(`32분`)
- `renderRows` 를 여러 번 불러도 줄이 겹치면 안 됩니다

**HTML (고정)**

```html
<table>
  <thead><tr><th>제목</th><th>길이</th></tr></thead>
  <tbody id="rows"></tbody>
</table>
```

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — DOM · 이벤트**

```js
function renderRows(list) {
  const tbody = document.querySelector("#rows");
  
}

renderRows(episodes);
```

### 문제 48. 청취자 글은 글자 그대로

*오류 고치기 · DOM · 이벤트*

청취자 댓글을 목록으로 그리는 코드입니다. 그런데 두 번째 댓글이 **굵은 글씨**로 나옵니다 — 청취자가 쓴 `<b>` 가 태그로 해석되었습니다.
청취자가 쓴 **글자 그대로**(꺾쇠까지) 보이게 고치시오.

**HTML (고정)**

```html
<ul id="comments"></ul>
```

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const comments = ["좋은 방송 고마워요", "<b>최고</b>예요"];
```

**작성할 것 — DOM · 이벤트**

```js
const ul = document.querySelector("#comments");
for (const c of comments) {
  const li = document.createElement("li");
  li.innerHTML = c;
  ul.append(li);
}
```

## 고급 (12문제)

### 문제 49. 클릭 — 재생 / 일시정지 토글

*코드 작성 · DOM · 이벤트*

단추(`#play`)를 누를 때마다 상태가 번갈아 바뀌게 하시오.
- 재생으로 바뀌면: 글자 `❚❚ 일시정지` · `aria-pressed="true"`
- 다시 누르면: 글자 `▶ 재생` · `aria-pressed="false"`

**HTML (고정)**

```html
<button id="play" type="button" aria-pressed="false">▶ 재생</button>
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 50. input — 글자 수와 한도

*코드 작성 · DOM · 이벤트*

사연 입력칸(`#msg`)에 **칠 때마다** `#count` 에 `N / 50` 을 보여 주시오.
- 50자를 **넘으면** `#count` 에 class `over` 를 붙이고, 다시 50자 이하가 되면 **뗍니다**

**HTML (고정)**

```html
<textarea id="msg"></textarea>
<p id="count">0 / 50</p>
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 51. 이벤트 위임 — 삭제 단추

*오류 고치기 · DOM · 이벤트*

재생 목록에서 **삭제 단추를 누르면 그 곡(`li`)을 지우는** 코드입니다. 처음부터 있던 곡은 잘 지워지는데, **나중에 JS 로 새로 붙인 곡**의 삭제 단추는 눌러도 아무 일도 없습니다.
이벤트를 **목록(`#list`)에 한 번만** 거는 방식(위임)으로 고치시오.
- 곡 이름(`span`)을 누르면 아무 일도 일어나지 않아야 합니다

**HTML (고정)**

```html
<ul id="list">
  <li><span>새벽 라디오</span> <button class="del" type="button">삭제</button></li>
  <li><span>퇴근길</span> <button class="del" type="button">삭제</button></li>
  <li><span>주말 산책</span> <button class="del" type="button">삭제</button></li>
</ul>
```

**작성할 것 — DOM · 이벤트**

```js
document.querySelectorAll(".del").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest("li").remove();
  });
});
```

### 문제 52. 폼 — 막고, 더하고, 비우기

*코드 작성 · DOM · 이벤트*

공연 알림 신청 폼을 만드시오. 제출하면(단추 · Enter) **페이지가 새로 고쳐지지 않게** 막고 —
- 이메일(앞뒤 공백 제거)이 비었으면 `#msg`: `이메일을 입력하세요` (목록은 그대로)
- 아니면 `#subs` 에 `<li>`(글자는 이메일)를 더하고, **입력칸을 비우고**, `#msg`: `N명 신청`(지금까지 신청한 수)

**HTML (고정)**

```html
<form id="sub">
  <input id="email" placeholder="이메일">
  <button>알림 신청</button>
</form>
<p id="msg"></p>
<ul id="subs"></ul>
```

**작성할 것 — DOM · 이벤트**

```js

```

### 문제 53. await 는 함수를 거기서 멈춘다

*결과 예측 · 답 적기*

다음 코드가 찍는 네 줄을 차례로 적으시오.
```js
console.log(1);
(async () => {
  console.log(2);
  await null;
  console.log(3);
})();
console.log(4);
```

**답 적기** — 네 값을 띄어 써서: `______`

### 문제 54. 기다리는 함수 만들기 — Promise

*빈칸 채우기 · 비동기 함수*

`ms` 밀리초 뒤에 끝나는 **Promise** 를 돌려주는 `sleep(ms)` 를 만들려 합니다. `await sleep(1000)` 처럼 쓸 수 있어야 합니다.

아래 코드의 빈칸(`___`) 두 곳을 채우시오. 두 번째 빈칸에는 «시간이 되면 부를 함수»가 들어갑니다.

**작성할 것 — 비동기 함수**

```js
function sleep(ms) {
  return new ___((resolve) => setTimeout(___, ms));
}
```

### 문제 55. async / await

*코드 작성 · 비동기 함수*

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

### 문제 56. fetch — 받아서 고르기

*코드 작성 · 비동기 함수*

`episodes.json` 을 받아(`fetch`) **가장 긴 회차의 제목**을 돌려주는 `async` 함수 `loadLongest()` 를 만드시오.
- `await loadLongest()` → `"야구 결산 특집"` (55분)
(이 연습장의 `fetch` 는 인터넷 대신 위 「가짜 서버」 표대로 답합니다)

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `episodes.json` | 200 · JSON 배열 8건 |

**작성할 것 — 비동기 함수**

```js
async function loadLongest() {
  
}
```

### 문제 57. Promise.all — 하나씩 받던 것을 한꺼번에

*오류 고치기 · 비동기 함수*

주소 배열을 받아 JSON 을 **같은 순서의 배열**로 돌려주는 `async` 함수 `loadAll(urls)` 입니다. 결과는 맞는데 **느립니다** — 가짜 서버는 주소마다 150ms 씩 걸리고, 시작 코드는 셋을 **하나씩** 받아 450ms 쯤 걸립니다.
결과(순서 포함)는 그대로 두고, **한꺼번에** 받아 150ms 쯤에 끝나게 고치시오.

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `a.json` | 200 · JSON 1 · 150ms 뒤 |
| `b.json` | 200 · JSON 2 · 150ms 뒤 |
| `c.json` | 200 · JSON 3 · 150ms 뒤 |

**작성할 것 — 비동기 함수**

```js
async function loadAll(urls) {
  const out = [];
  for (const url of urls) {
    const res = await fetch(url);
    out.push(await res.json());
  }
  return out;
}
```

### 문제 58. fetch 오류 처리 — 404 는 오류가 아니다

*오류 고치기 · 비동기 함수*

주소를 받아 결과를 **객체로** 돌려주는 `async` 함수 `loadSafe(url)` 입니다. 함수는 **오류를 던지지 않습니다**.
- 성공 → `{ ok: true, data: 받은 JSON }`
- 응답이 200번대가 아니면(404 · 500 …) → `{ ok: false, error: "HTTP 404" }` 처럼 상태 번호
- 네트워크 오류로 `fetch` 자체가 실패하면 → `{ ok: false, error: "네트워크 오류" }`

그런데 시작 코드는 **없는 주소에도** `{ ok: false, error: "네트워크 오류" }` 를 돌려줍니다. 위 세 경우가 맞게 나오도록 고치시오.

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `episodes.json` | 200 · JSON 배열 2건 |
| `broken.json` | 500 · 글자 "서버 오류" |
| `down.json` | 네트워크 오류 (fetch 가 실패) |

**작성할 것 — 비동기 함수**

```js
async function loadSafe(url) {
  try {
    const res = await fetch(url);
    return { ok: true, data: await res.json() };
  } catch (e) {
    return { ok: false, error: "네트워크 오류" };
  }
}
```

### 문제 59. 종합 — 받아서 그리기 (로딩 · 성공 · 빈 결과 · 실패)

*종합 구현 · DOM · 이벤트*

페이지가 열리면 `episodes.json` 을 받아 그리시오. 화면의 상태는 **넷**입니다.
- 받는 동안 `#status`: `불러오는 중…`
- 성공: `#list` 에 회차마다 `<li>`(글자는 제목) — **재생 수가 많은 순** · `#status`: `8편`(받은 수)
- 받은 배열이 **비었으면**: `#list` 는 비우고 `#status`: `회차가 없습니다`
- 실패(응답이 200번대가 아님): `#status`: `불러오지 못했습니다 (HTTP 500)` 처럼 상태 번호

**HTML (고정)**

```html
<p id="status"></p>
<ul id="list"></ul>
```

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `episodes.json` | 200 · JSON 배열 8건 · 120ms 뒤 |

**작성할 것 — DOM · 이벤트**

```js
async function start() {
  const status = document.querySelector("#status");
  const list = document.querySelector("#list");
  
}

start();
```

### 문제 60. 종합 — 재생 목록 화면

*종합 구현 · DOM · 이벤트*

재생 목록 화면을 만드시오. `episodes` 는 이미 **최신순**으로 놓여 있습니다.
- 처음: 전부를 `#list` 에 그리고(`<li>` 글자는 제목) `#total` 에 `8편 · 총 4시간 52분`
- 분야 단추(`#cats` 안, 분야는 `data-cat` — 「전체」는 `""`)를 누르면 그 분야만
- 정렬(`#sort`)을 바꾸면 `최신순`(주어진 순서) · `재생 많은 순`
- 🔴 **분야와 정렬은 함께 적용**됩니다 — 경제를 고른 뒤 정렬을 바꾸면 경제 안에서, 정렬을 바꾼 뒤 분야를 고르면 그 정렬 그대로
- `#total` 은 지금 보이는 회차의 수와 길이 합
- 넘겨받은 `episodes` 의 순서는 바꾸지 않습니다

**HTML (고정)**

```html
<nav id="cats">
  <button type="button" data-cat="">전체</button>
  <button type="button" data-cat="경제">경제</button>
  <button type="button" data-cat="문화">문화</button>
  <button type="button" data-cat="시사">시사</button>
</nav>
<select id="sort">
  <option value="new">최신순</option>
  <option value="plays">재생 많은 순</option>
</select>
<p id="total"></p>
<ul id="list"></ul>
```

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const episodes = [
  { id: 1, title: "새벽 시장 이야기", category: "시사", host: "한도윤", plays: 4210, minutes: 32, date: "2024-11-05" },
  { id: 2, title: "금리와 내 통장", category: "경제", host: "서유진", plays: 2875, minutes: 41, date: "2024-11-05" },
  { id: 3, title: "겨울 영화 추천", category: "문화", host: "이서아", plays: 1960, minutes: 27, date: "2024-11-04" },
  { id: 4, title: "야구 결산 특집", category: "스포츠", host: "한도윤", plays: 3340, minutes: 55, date: "2024-11-04" },
  { id: 5, title: "AI 비서 써 보기", category: "기술", host: "정하린", plays: 5120, minutes: 38, date: "2024-11-03" },
  { id: 6, title: "전세 계약 체크", category: "경제", host: "서유진", plays: 3010, minutes: 29, date: "2024-11-03" },
  { id: 7, title: "동네 책방 탐방", category: "문화", host: "이서아", plays: 980, minutes: 24, date: "2024-11-02" },
  { id: 8, title: "선거 여론조사 읽기", category: "시사", host: "정하린", plays: 3605, minutes: 46, date: "2024-11-02" },
];
```

**작성할 것 — DOM · 이벤트**

```js

```
