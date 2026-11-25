# JS 연습 답안지 (해설 포함)

> 총 **60문제** — 초급 22 · 중급 26 · 고급 12 · 번호가 커질수록 어려워집니다
> 유형: 개념 확인 1 · 결과 예측 7 · 빈칸 채우기 1 · 오류 고치기 6 · 코드 작성 43 · 종합 구현 2
>
> 같은 결과를 내는 다른 코드도 정답입니다. 채점은 쓴 방법이 아니라 **돌려 본 결과**를 봅니다.
> 아래 정답은 모두 실제 Chrome 에서 검사를 전부 통과하고, 「흔한 오답」은 적힌 검사에서 실제로 걸리는 것을 확인한 것입니다. 고르기 문제의 코드도 실제로 돌려 본 결과입니다.

## 빠른 찾기

- **초급**: 1~22번
- **중급**: 23~48번
- **고급**: 49~60번

---

## 초급

### 문제 1. * 와 + 의 형 변환

*결과 예측 · 답 적기*

**문제**

다음 코드가 찍는 두 줄을 차례로 적으시오.
```js
console.log("10" * 2);
console.log("10" + 2 - 1);
```

**정답** — `20 101`

**실제로 돌려 보면**

```text
20
101
```

**해설**

`*` · `-` · `/` 는 글자를 **숫자로 바꿔** 계산합니다 — `"10" * 2` 는 20.
`+` 만 다릅니다. 한쪽이 글자면 **이어 붙입니다**. `"10" + 2` 는 `"102"`, 그다음 `- 1` 은 다시 숫자로 바꿔 빼서 **101** 입니다. 계산은 왼쪽부터 차례로 합니다.

**흔한 오답** — `20 11`

둘 다 숫자 계산으로 보고 `10 + 2 - 1 = 11` 로 적은 경우입니다. `+` 는 한쪽이 글자면 **이어 붙입니다**.

---

### 문제 2. 템플릿 리터럴

*코드 작성 · 출력 (console.log)*

**문제**

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

**정답**

```js
console.log(`${title} · ${minutes}분 듣기`);
```

**해설**

템플릿 리터럴은 **백틱**(`` ` ``)으로 감싸고, 그 안의 `${...}` 자리에 값이 들어갑니다. 파이썬의 f-string 과 같습니다.
작은따옴표 · 큰따옴표 안에서는 `${...}` 가 그냥 글자로 찍힙니다.

**검사 항목** (2개)

1. 한 줄이 찍힌다
2. 변수가 바뀌면 찍히는 글자도 바뀐다 (동네 책방 탐방 · 24)

**흔한 오답** — 「변수가 바뀌면 찍히는 글자도 바뀐다 (동네 책방 탐방 · 24)」에서 걸립니다

화면에 같은 글자가 찍히니 맞은 것 같습니다. 하지만 변수가 바뀌면 따라가지 못합니다.

```js
console.log("새벽 시장 이야기 · 32분 듣기");
```

---

### 문제 3. 비교 — true 인 것 모두

*개념 확인 · 모두 고르기*

**문제**

다음 중 결과가 `true` 인 것을 **모두** 고르시오.

① `"1" === 1`  
② `null == undefined`  
③ `0 == ""`  
④ `NaN === NaN`  
⑤ `"b" > "a"`  
⑥ `[] === []`

**정답** — ② ③ ⑤

**실제로 돌려 보면**

```text
false
true
true
false
true
false
```

**해설**

`===` 은 **형까지** 같아야 합니다 — `"1" === 1` 은 false. `null == undefined` 는 `==` 의 특별 규칙으로 true 입니다(`===` 면 false).
`0 == ""` 는 빈 글자가 숫자 0 으로 바뀌어 true — 그래서 `==` 는 피합니다. `NaN` 은 **자기 자신과도 같지 않습니다**(확인은 `Number.isNaN`). 글자는 사전 순으로 비교해 `"b" > "a"` 는 true. 배열 `[]` 두 개는 **서로 다른 상자**라 false 입니다.

**흔한 오답** — ② ④ ⑤

`NaN === NaN` 은 «같은 것끼리 비교하니 true» 같고, `0 == ""` 는 «숫자와 빈 글자라 false» 같아 보입니다. 둘 다 반대입니다.

---

### 문제 4. 입력값은 글자다

*오류 고치기 · 함수 작성*

**문제**

장바구니의 수량 칸 두 개(`input.value` — 언제나 **글자**)를 받아 합을 돌려주는 함수입니다. 그런데 `totalQty("2", "3")` 이 `5` 가 아니라 `"23"` 을 돌려줍니다. **숫자** 합을 돌려주게 고치시오.

**시작 코드**

```js
function totalQty(a, b) {
  return a + b;
}
```

**정답**

```js
function totalQty(a, b) {
  return Number(a) + Number(b);
}
```

**해설**

입력칸의 `value` 는 숫자를 쳐도 **글자**입니다. `+` 는 한쪽이라도 글자면 이어 붙이므로, 더하기 **전에** 둘 다 `Number()` 로 바꿉니다.

**검사 항목** (2개)

1. totalQty("2", "3") → 5
2. totalQty("10", "0") → 10 · ("0", "0") → 0

**흔한 오답** — 「totalQty("2", "3") → 5」에서 걸립니다

앞의 값만 숫자로 바꾸면 `2 + "3"` 이 되어 여전히 이어 붙습니다. `+` 는 한쪽만 글자여도 이어 붙입니다.

```js
function totalQty(a, b) {
  return +a + b;
}
```

---

### 문제 5. if … else if — 구간 나누기

*코드 작성 · 함수 작성*

**문제**

나이를 받아 공연 관람료(원)를 돌려주는 `ticketPrice(age)` 를 만드시오.
- **7세 이하** `0` · **8~18세** `7000` · **65세 이상** `5000` · 그 밖에는 `12000`

**시작 코드**

```js
function ticketPrice(age) {
  
}
```

**정답**

```js
function ticketPrice(age) {
  if (age <= 7) return 0;
  if (age <= 18) return 7000;
  if (age >= 65) return 5000;
  return 12000;
}
```

**해설**

구간 문제는 **경계값**에서 틀립니다. 「이하」는 `<=`, 「이상」은 `>=` 입니다.
위에서부터 차례로 걸러 내려가므로, 앞에서 `return` 한 나이는 뒤의 조건까지 오지 않습니다 — 둘째 줄의 `age <= 18` 에 오는 것은 이미 8세 이상뿐입니다.

**검사 항목** (2개)

1. 5세 → 0 · 12세 → 7000 · 30세 → 12000 · 70세 → 5000
2. 경계값 — 7 → 0 · 8 → 7000 · 18 → 7000 · 19 → 12000 · 64 → 12000 · 65 → 5000

**흔한 오답** — 「경계값 — 7 → 0 · 8 → 7000 · 18 → 7000 · 19 → 12000 · 64 → 12000 · 65 → 5000」에서 걸립니다

「7세 이하」를 `< 7` 로 옮기면 7세가 빠집니다. 경계값(7 · 18 · 65)은 «이하 · 이상»이 `<=` · `>=` 입니다.

```js
function ticketPrice(age) {
  if (age < 7) return 0;
  if (age < 18) return 7000;
  if (age > 65) return 5000;
  return 12000;
}
```

---

### 문제 6. 나머지 연산자 %

*코드 작성 · 함수 작성*

**문제**

정수가 짝수이면 `true`, 홀수이면 `false` 를 돌려주는 `isEven(n)` 을 만드시오. 음수도 들어옵니다.

**시작 코드**

```js
function isEven(n) {
  
}
```

**정답**

```js
function isEven(n) {
  return n % 2 === 0;
}
```

**해설**

`%` 는 나눈 **나머지**입니다. 짝수는 2 로 나눈 나머지가 `0` 입니다.
🔴 JS 의 `%` 는 왼쪽 수의 부호를 따라갑니다 — `-3 % 2` 는 `-1`(파이썬은 `1`). 그래서 「`=== 1` 이면 홀수」는 음수에서 틀립니다. `=== 0` 으로 짝수를 묻는 쪽이 안전합니다.

**검사 항목** (2개)

1. 4 → true · 7 → false · 0 → true
2. 음수 — -4 → true · -3 → false

**흔한 오답** — 「음수 — -4 → true · -3 → false」에서 걸립니다

「홀수는 나머지가 1」이라고 외우기 쉽습니다. JS 에서 `-3 % 2` 는 `-1` 이라 음수 홀수가 짝수로 나옵니다.

```js
function isEven(n) {
  return n % 2 === 1 ? false : true;
}
```

---

### 문제 7. switch

*코드 작성 · 함수 작성*

**문제**

요일 번호(0 = 일요일 … 6 = 토요일)를 받아 한 글자 요일을 돌려주는 `dayName(n)` 을 **switch** 로 만드시오.
- `0` → `"일"`, `1` → `"월"`, … `6` → `"토"`
- 그 밖의 값 → `"없음"`

**시작 코드**

```js
function dayName(n) {
  switch (n) {
    
  }
}
```

**정답**

```js
function dayName(n) {
  switch (n) {
    case 0: return "일";
    case 1: return "월";
    case 2: return "화";
    case 3: return "수";
    case 4: return "목";
    case 5: return "금";
    case 6: return "토";
    default: return "없음";
  }
}
```

**해설**

`switch` 는 값 하나를 여러 `case` 와 `===` 로 비교합니다. 어느 것과도 같지 않으면 `default` 로 갑니다.
`return` 을 쓰지 않는 `case` 에는 `break` 를 빠뜨리지 마십시오 — 없으면 아래 case 까지 **이어서** 실행됩니다.

**검사 항목** (2개)

1. 0 → 일 · 3 → 수 · 6 → 토
2. 그 밖의 값 — 7 → 없음 · -1 → 없음

**흔한 오답** — 「그 밖의 값 — 7 → 없음 · -1 → 없음」에서 걸립니다

0~6 만 시험해 보면 다 맞습니다. 맞는 case 가 없을 때를 잊으면 `undefined` 가 나옵니다.

```js
function dayName(n) {
  switch (n) {
    case 0: return "일";
    case 1: return "월";
    case 2: return "화";
    case 3: return "수";
    case 4: return "목";
    case 5: return "금";
    case 6: return "토";
  }
}
```

---

### 문제 8. for 반복

*코드 작성 · 함수 작성*

**문제**

1부터 `n` 까지의 합을 돌려주는 `sumTo(n)` 을 **for** 로 만드시오. `n` 이 0 이면 `0` 입니다.

**시작 코드**

```js
function sumTo(n) {
  
}
```

**정답**

```js
function sumTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

**해설**

`for (시작; 조건; 증가)` — 조건이 참인 동안 돕니다. 「n 까지」는 `i <= n` 입니다.
합을 모을 변수(`total`)는 반복 **바깥**에서 `let` 으로 만듭니다. 안에서 만들면 돌 때마다 0 으로 돌아갑니다.

**검사 항목** (2개)

1. sumTo(10) → 55 · sumTo(100) → 5050
2. sumTo(1) → 1 · sumTo(0) → 0

**흔한 오답** — 「sumTo(10) → 55 · sumTo(100) → 5050」에서 걸립니다

`i < n` 은 `n` 을 빼고 멈춥니다 — 반복의 끝 경계를 하나 어긋나게 쓰는 가장 흔한 실수입니다.

```js
function sumTo(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    total += i;
  }
  return total;
}
```

---

### 문제 9. while 반복

*코드 작성 · 함수 작성*

**문제**

`n` 부터 1까지 거꾸로 센 배열을 돌려주는 `countdown(n)` 을 **while** 로 만드시오.
- `countdown(3)` → `[3, 2, 1]` · `countdown(0)` → `[]`

**시작 코드**

```js
function countdown(n) {
  const result = [];
  
  return result;
}
```

**정답**

```js
function countdown(n) {
  const result = [];
  while (n >= 1) {
    result.push(n);
    n--;
  }
  return result;
}
```

**해설**

`while (조건)` 은 조건이 참인 동안 돕니다. 안에서 조건을 바꾸지 않으면(`n--` 을 빠뜨리면) **끝나지 않습니다** — 이 연습장은 3초 뒤 멈추고 알려 줍니다.
`push` 는 배열 끝에 하나를 넣습니다. `const` 배열이어도 안의 내용은 바꿀 수 있습니다.

**검사 항목** (2개)

1. countdown(3) → [3, 2, 1]
2. countdown(1) → [1] · countdown(0) → []

**흔한 오답** — 「countdown(3) → [3, 2, 1]」에서 걸립니다

「0 이 될 때까지」를 `n >= 0` 으로 쓰면 0 까지 들어갑니다.

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

---

### 문제 10. for…of

*코드 작성 · 출력 (console.log)*

**문제**

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

**정답**

```js
let no = 1;
for (const track of tracks) {
  console.log(`트랙 ${no} — ${track}`);
  no++;
}
```

**해설**

`for (const track of tracks)` 는 배열의 **값**을 하나씩 꺼냅니다. 번호가 필요하면 바깥에 세는 변수를 두고 한 바퀴마다 1 씩 올립니다.

**검사 항목** (2개)

1. 세 줄이 차례로 찍힌다
2. 다른 배열 ["봄비", "여름밤"] 으로도

**흔한 오답** — 「세 줄이 차례로 찍힌다」에서 걸립니다

배열의 자리 번호(인덱스)가 0 부터라 번호도 0 부터 세기 쉽습니다. 사람에게 보여 주는 번호는 보통 1 부터입니다.

```js
let no = 0;
for (const track of tracks) {
  console.log(`트랙 ${no} — ${track}`);
  no++;
}
```

---

### 문제 11. break

*코드 작성 · 함수 작성*

**문제**

숫자 배열에서 **처음으로** 나오는 음수의 위치(인덱스)를 돌려주는 `firstNegative(nums)` 를 만드시오. 음수가 없으면 `-1` 입니다. 반복과 `break`(또는 `return`)를 쓰십시오.

**시작 코드**

```js
function firstNegative(nums) {
  
}
```

**정답**

```js
function firstNegative(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) return i;
  }
  return -1;
}
```

**해설**

찾았으면 **그 자리에서 멈춰야** 「처음」입니다. 함수 안이면 `return i` 가 반복과 함수를 한꺼번에 끝내고, 반복만 끝내려면 `break` 를 씁니다.
배열 메서드로는 `nums.findIndex((n) => n < 0)` 한 줄입니다(4일차 `find` 의 형제).

**검사 항목** (2개)

1. [3, -1, -5] → 1 (처음 것)
2. [-2] → 0 · [1, 2] → -1 · [] → -1

**흔한 오답** — 「[3, -1, -5] → 1 (처음 것)」에서 걸립니다

찾아도 멈추지 않으면 끝까지 돌며 덮어써서 «마지막» 음수의 위치가 남습니다.

```js
function firstNegative(nums) {
  let found = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) found = i;
  }
  return found;
}
```

---

### 문제 12. || 와 ?? — 0 도 값이다

*오류 고치기 · 함수 작성*

**문제**

설정 객체에서 음량(`volume`)을 꺼내되, **없으면**(`undefined` · `null`) 기본값 `50` 을 쓰는 함수입니다.
그런데 음량을 `0`(음소거)으로 맞춘 사람도 `50` 으로 나옵니다. 고치시오.

**시작 코드**

```js
function volumeOf(settings) {
  return settings.volume || 50;
}
```

**정답**

```js
function volumeOf(settings) {
  return settings.volume ?? 50;
}
```

**해설**

`a || b` 는 `a` 가 **거짓 같은 값**(`0` · `""` · `false` · `null` · `undefined` · `NaN`)이면 `b` 를 씁니다 — 그래서 `0` 이 기본값으로 바뀝니다.
`a ?? b` 는 `a` 가 **`null` · `undefined` 일 때만** `b` 를 씁니다. 「값이 없을 때만 기본값」이면 `??` 입니다.

**검사 항목** (2개)

1. { volume: 0 } → 0 (음소거는 값이다)
2. { volume: 80 } → 80 · {} → 50 · { volume: null } → 50

**흔한 오답** — 「{ volume: 0 } → 0 (음소거는 값이다)」에서 걸립니다

삼항 연산자로 바꿔도 `settings.volume ?` 은 «참 같은 값인가»를 묻는 것이라 `0` 이 여전히 걸러집니다.

```js
function volumeOf(settings) {
  return settings.volume ? settings.volume : 50;
}
```

---

### 문제 13. 문자열 다듬기 — trim · toLowerCase

*코드 작성 · 함수 작성*

**문제**

검색어를 비교하기 좋게 다듬는 `cleanInput(s)` 를 만드시오 — **앞뒤 공백을 없애고 영어는 소문자로** 바꿉니다.
- `cleanInput("  Hello JS  ")` → `"hello js"`

**시작 코드**

```js
function cleanInput(s) {
  
}
```

**정답**

```js
function cleanInput(s) {
  return s.trim().toLowerCase();
}
```

**해설**

문자열 메서드는 원래 글자를 **고치지 않고** 새 글자를 돌려줍니다. 그래서 `s.trim()` 만 쓰고 버리면 아무 일도 안 일어납니다 — 결과를 받아 쓰거나 이어서(`.trim().toLowerCase()`) 부르십시오.
한글에는 대소문자가 없어 그대로입니다.

**검사 항목** (2개)

1. "  Hello JS  " → "hello js"
2. "AI" → "ai" · "   " → "" · "금리" → "금리"

**흔한 오답** — 「"  Hello JS  " → "hello js"」에서 걸립니다

`s.trim()` 이 `s` 를 고친다고 생각하기 쉽습니다. 문자열은 바뀌지 않고, 다듬은 «새 글자»를 돌려줄 뿐입니다.

```js
function cleanInput(s) {
  s.trim();
  return s.toLowerCase();
}
```

---

### 문제 14. 문자열 자르기 — length · slice

*코드 작성 · 함수 작성*

**문제**

제목이 `max` 글자보다 **길면** 앞의 `max` 글자만 남기고 `…` 를 붙이고, 아니면 그대로 돌려주는 `shorten(title, max)` 를 만드시오.
- `shorten("폭설 주의보 발령", 5)` → `"폭설 주의…"` · `shorten("금리 동결", 5)` → `"금리 동결"`

**시작 코드**

```js
function shorten(title, max) {
  
}
```

**정답**

```js
function shorten(title, max) {
  if (title.length > max) return title.slice(0, max) + "…";
  return title;
}
```

**해설**

`length` 는 글자 수(띄어쓰기 포함), `slice(0, max)` 는 0번부터 `max` 개입니다.
「길면」은 `> max` — 딱 `max` 글자인 제목은 자를 필요가 없습니다. 경계값을 꼭 넣어 보십시오.

**검사 항목** (3개)

1. 긴 제목 — ("폭설 주의보 발령", 5) → "폭설 주의…"
2. 딱 맞는 길이 — ("금리 동결", 5) → 그대로
3. 짧은 제목 — ("금리 동결", 10) → 그대로

**흔한 오답** — 「딱 맞는 길이 — ("금리 동결", 5) → 그대로」에서 걸립니다

「길면」을 `>=` 로 쓰면 딱 맞는 길이에도 `…` 가 붙습니다.

```js
function shorten(title, max) {
  if (title.length >= max) return title.slice(0, max) + "…";
  return title;
}
```

---

### 문제 15. 자리 맞추기 — padStart

*코드 작성 · 함수 작성*

**문제**

기사 번호를 **네 자리**로 맞춘 글자를 돌려주는 `padId(n)` 을 만드시오. 모자라는 자리는 앞에 `0` 을 채웁니다.
- `padId(7)` → `"0007"` · `padId(12345)` → `"12345"`(넘치면 그대로)

**시작 코드**

```js
function padId(n) {
  
}
```

**정답**

```js
function padId(n) {
  return String(n).padStart(4, "0");
}
```

**해설**

`padStart(길이, 채울 글자)` 는 그 길이가 될 때까지 **앞에** 채웁니다. 이미 길면 그대로 둡니다. 숫자에는 없는 메서드라 `String(n)` 으로 먼저 바꿉니다.
날짜의 `"05"` 월 · 일을 만들 때도 같은 방법을 씁니다.

**검사 항목** (2개)

1. 7 → "0007"
2. 42 → "0042" · 123 → "0123" · 12345 → "12345"

**흔한 오답** — 「42 → "0042" · 123 → "0123" · 12345 → "12345"」에서 걸립니다

한 자리 번호만 보고 `0` 을 세 개 붙이면 두 자리 · 세 자리에서 다섯 자리가 됩니다.

```js
function padId(n) {
  return "000" + n;
}
```

---

### 문제 16. 화살표 함수 — 시간 표시

*코드 작성 · 함수 작성*

**문제**

초(정수)를 받아 `분:초` 모양의 글자를 돌려주는 `formatTime` 을 **화살표 함수**로 만드시오. 초는 **두 자리**로 맞춥니다.
- `formatTime(205)` → `"3:25"` · `formatTime(65)` → `"1:05"` · `formatTime(600)` → `"10:00"`

**시작 코드**

```js
const formatTime = (sec) => {
  
};
```

**정답**

```js
const formatTime = (sec) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
};
```

**해설**

분은 `Math.floor(sec / 60)`(몫), 초는 `sec % 60`(나머지)입니다. 초를 두 자리로 맞추려면 글자로 바꿔 `padStart(2, "0")` — 15번에서 쓴 그 방법입니다.

**검사 항목** (3개)

1. 205 → "3:25"
2. 65 → "1:05" · 600 → "10:00"
3. 59 → "0:59" · 0 → "0:00"

**흔한 오답** — 「65 → "1:05" · 600 → "10:00"」에서 걸립니다

205초처럼 초가 두 자리면 맞게 나와서 놓칩니다. 65초는 `1:5` 가 됩니다.

```js
const formatTime = (sec) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s}`;
};
```

---

### 문제 17. 글자를 쪼개 숫자로

*코드 작성 · 함수 작성*

**문제**

`"3:25"` 처럼 `분:초` 로 적힌 재생 시간을 받아 **초(숫자)** 를 돌려주는 `toSeconds(text)` 를 만드시오.
- `toSeconds("3:25")` → `205` · `toSeconds("10:00")` → `600`

**시작 코드**

```js
function toSeconds(text) {
  
}
```

**정답**

```js
function toSeconds(text) {
  const parts = text.split(":");
  return Number(parts[0]) * 60 + Number(parts[1]);
}
```

**해설**

`split(":")` 은 글자를 `:` 에서 잘라 **글자 배열** `["3", "25"]` 을 줍니다. 계산하기 전에 둘 다 `Number()` 로 바꿉니다 — 곱하기는 저절로 바뀌지만 더하기는 이어 붙이기 때문입니다.

**검사 항목** (2개)

1. "3:25" → 205
2. "10:00" → 600 · "0:59" → 59

**흔한 오답** — 「"3:25" → 205」에서 걸립니다

`parts[0] * 60` 은 곱하기라 숫자가 되지만, 뒤의 `+ parts[1]` 은 글자라 이어 붙어 `"18025"` 가 됩니다.

```js
function toSeconds(text) {
  const parts = text.split(":");
  return parts[0] * 60 + parts[1];
}
```

---

### 문제 18. 반올림 — Math.round

*코드 작성 · 함수 작성*

**문제**

수를 소수점 아래 `digits` 자리로 **반올림한 숫자**를 돌려주는 `roundTo(x, digits)` 를 만드시오.
- `roundTo(3.14159, 2)` → `3.14` · `roundTo(2.5, 0)` → `3`

**시작 코드**

```js
function roundTo(x, digits) {
  
}
```

**정답**

```js
function roundTo(x, digits) {
  const k = 10 ** digits;
  return Math.round(x * k) / k;
}
```

**해설**

`Math.round` 는 정수로만 반올림합니다. 소수 둘째 자리라면 100 을 곱해 반올림하고 다시 100 으로 나눕니다(`10 ** digits` 는 10 의 거듭제곱).
`toFixed(2)` 는 **화면에 보일 글자**를 만들 때 씁니다 — `"3.14"` 는 숫자가 아닙니다.

**검사 항목** (2개)

1. (3.14159, 2) → 3.14 · (2.5, 0) → 3 (숫자)
2. (17.56, 1) → 17.6 · (1946.25, 0) → 1946

**흔한 오답** — 「(3.14159, 2) → 3.14 · (2.5, 0) → 3 (숫자)」에서 걸립니다

`toFixed` 도 반올림한 모양을 보여 줘서 맞아 보입니다. 하지만 돌려주는 것이 «글자»라 더하면 이어 붙여집니다.

```js
function roundTo(x, digits) {
  return x.toFixed(digits);
}
```

---

### 문제 19. 무작위 정수 — Math.random

*코드 작성 · 함수 작성*

**문제**

`min` 이상 `max` 이하의 **정수**를 무작위로 돌려주는 `randomInt(min, max)` 를 만드시오. 양 끝 값도 나와야 합니다.
(검사는 여러 번 불러 봅니다)

**시작 코드**

```js
function randomInt(min, max) {
  
}
```

**정답**

```js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

**해설**

`Math.random()` 은 0 이상 1 **미만**의 소수입니다. 칸 수(`max - min + 1`)를 곱하고 `Math.floor` 로 내리면 0 ~ 칸 수-1, 거기에 `min` 을 더합니다.
`Math.round` 를 쓰면 양 끝 값이 다른 값의 절반만큼만 나와 고르지 않습니다.

**검사 항목** (3개)

1. randomInt(1, 6) 을 300번 — 모두 1~6 의 정수
2. 300번 안에 1 · 2 · 3 · 4 · 5 · 6 이 모두 나온다(양 끝 포함)
3. randomInt(5, 5) → 5

**흔한 오답** — 「300번 안에 1 · 2 · 3 · 4 · 5 · 6 이 모두 나온다(양 끝 포함)」에서 걸립니다

`+ 1` 을 빠뜨리면 `max` 가 «한 번도» 안 나옵니다. 몇 번 눌러 봐서는 모릅니다.

```js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
```

---

### 문제 20. 기본값은 언제 쓰이나

*결과 예측 · 답 적기*

**문제**

다음 코드가 찍는 세 줄을 차례로 적으시오.
```js
function greet(name = "손님") {
  return `${name}님`;
}
console.log(greet(undefined));
console.log(greet(null));
console.log(greet(""));
```

**정답** — `손님님 null님 님`

**실제로 돌려 보면**

```text
손님님
null님
님
```

**해설**

매개변수의 기본값은 인자가 **`undefined`**(안 줬거나 `undefined` 를 줬을 때)일 때만 쓰입니다.
`null` 은 «값이 없다»는 **값**이라 그대로 들어가 `"null님"`, 빈 글자 `""` 도 값이라 `"님"` 이 됩니다. `null` 까지 기본값으로 바꾸고 싶으면 함수 안에서 `name ?? "손님"` 을 씁니다.

**흔한 오답** — `손님님 손님님 손님님`

「값이 없으면 기본값」이라 `null` · `""` 도 «없는 것»으로 보기 쉽습니다. 기본값은 **`undefined` 일 때만** 쓰입니다.

---

### 문제 21. 나머지 매개변수 ...

*코드 작성 · 함수 작성*

**문제**

인자를 **몇 개든** 받아 모두 더한 값을 돌려주는 `sumAll` 을 만드시오. 하나도 안 주면 `0` 입니다.
- `sumAll(1, 2, 3)` → `6` · `sumAll()` → `0`

**시작 코드**

```js
function sumAll() {
  
}
```

**정답**

```js
function sumAll(...nums) {
  let total = 0;
  for (const n of nums) total += n;
  return total;
}
```

**해설**

매개변수 앞의 `...` 는 «남은 인자를 **배열로** 모아라»입니다(나머지 매개변수). `sumAll(1, 2, 3)` 이면 `nums` 는 `[1, 2, 3]`, 아무것도 없으면 빈 배열 `[]` 입니다.
3일차의 **전개**(`...배열` → 펼치기)와 기호는 같고 방향이 반대입니다 — 매개변수 자리에서는 «모으기»입니다.

**검사 항목** (2개)

1. sumAll(1, 2, 3) → 6 · sumAll(10) → 10
2. sumAll() → 0

**흔한 오답** — 「sumAll(1, 2, 3) → 6 · sumAll(10) → 10」에서 걸립니다

배열을 받는 함수처럼 쓰면 `sumAll(1, 2, 3)` 의 `nums` 는 그냥 `1` 이라 `for…of` 가 오류를 냅니다.

```js
function sumAll(nums) {
  let total = 0;
  for (const n of nums) total += n;
  return total;
}
```

---

### 문제 22. return 과 console.log

*결과 예측 · 하나 고르기*

**문제**

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

**정답** — ② `10` 그리고 `undefined`

**실제로 돌려 보면**

```text
10
undefined
```

**해설**

`console.log` 는 화면에 **보여 줄** 뿐이고, 함수가 값을 **돌려주는** 것은 `return` 입니다. `return` 이 없는 함수의 결과는 `undefined` 입니다.
그래서 `show(5)` 안에서 `10` 이 찍히고, `result` 에는 `undefined` 가 담겨 그다음 줄에 찍힙니다.

**흔한 오답** — ①

화면에 `10` 이 보이니 함수가 `10` 을 «돌려줬다»고 생각하기 쉽습니다(2일차 🔴).

---

## 중급

### 문제 23. 배열 — 처음과 끝 바꾸기

*코드 작성 · 함수 작성*

**문제**

배열의 **첫 값과 마지막 값을 바꾼 새 배열**을 돌려주는 `swapEnds(arr)` 를 만드시오.
- `swapEnds([1, 2, 3, 4])` → `[4, 2, 3, 1]`
- 길이가 0 · 1 이면 같은 내용의 새 배열
- 🔴 넘겨받은 배열은 **바꾸지 않습니다**

**시작 코드**

```js
function swapEnds(arr) {
  
}
```

**정답**

```js
function swapEnds(arr) {
  const copy = [...arr];
  if (copy.length < 2) return copy;
  const last = copy.length - 1;
  const first = copy[0];
  copy[0] = copy[last];
  copy[last] = first;
  return copy;
}
```

**해설**

전개 `[...arr]` 로 **사본**을 먼저 만들고 사본만 고칩니다. 마지막 자리는 `length - 1` 입니다.
두 값을 맞바꿀 때는 한쪽을 잠시 다른 변수(`first`)에 담아 두어야 합니다 — 그러지 않으면 먼저 덮어쓴 값이 사라집니다.

**검사 항목** (3개)

1. [1, 2, 3, 4] → [4, 2, 3, 1]
2. 넘겨준 배열은 그대로
3. [] → [] · ["a"] → ["a"] (새 배열)

**흔한 오답** — 「넘겨준 배열은 그대로」에서 걸립니다

돌려준 값은 맞아서 통과한 것 같지만, 넘겨받은 배열 자체를 바꿨습니다. 그 배열을 다른 곳에서도 쓰고 있었다면 거기 순서까지 바뀝니다.

```js
function swapEnds(arr) {
  if (arr.length < 2) return arr;
  const last = arr.length - 1;
  const first = arr[0];
  arr[0] = arr[last];
  arr[last] = first;
  return arr;
}
```

---

### 문제 24. 원본을 지키며 추가하기

*코드 작성 · 함수 작성*

**문제**

태그 배열 `tags` 에 `tag` 를 더한 **새 배열**을 돌려주는 `addTag(tags, tag)` 를 만드시오.
- 이미 들어 있는 태그면 더하지 않습니다
- 🔴 넘겨받은 `tags` 배열은 **바꾸지 않습니다**

**시작 코드**

```js
function addTag(tags, tag) {
  
}
```

**정답**

```js
function addTag(tags, tag) {
  if (tags.includes(tag)) return [...tags];
  return [...tags, tag];
}
```

**해설**

`push` 는 **원본을 고칩니다**. 새 배열이 필요하면 전개로 복사해 만듭니다 — `[...tags, tag]`.
3일차 🔴 「`=` 는 복사가 아닙니다」의 연장입니다. 함수가 넘겨받은 배열을 고치면, 부른 쪽의 배열도 같이 바뀝니다(같은 배열이니까). React 의 state 는 이 «새로 만들기»를 반드시 요구합니다.

**검사 항목** (2개)

1. ["경제"] 에 "금리" → ["경제", "금리"] · 이미 있으면 그대로
2. 넘겨준 배열은 그대로다

**흔한 오답** — 「넘겨준 배열은 그대로다」에서 걸립니다

`push` 로 넣고 돌려주면 결과는 맞습니다. 하지만 넘겨받은 배열까지 바뀌어 다른 곳에서 쓰던 목록이 몰래 변합니다.

```js
function addTag(tags, tag) {
  if (!tags.includes(tag)) tags.push(tag);
  return tags;
}
```

---

### 문제 25. 구조 분해와 기본값

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function describe(ep) {
  
}
```

**정답**

```js
function describe(ep) {
  const { title, host, guest = "없음" } = ep;
  return `${title} — 진행 ${host} · 게스트 ${guest}`;
}
```

**해설**

`const { title, host, guest = "없음" } = ep;` 은 객체에서 같은 이름의 키를 꺼내 변수로 만듭니다. `= "없음"` 은 그 키가 **없을 때(`undefined`)** 쓸 기본값입니다.
매개변수 자리에서 바로 꺼낼 수도 있습니다 — `function describe({ title, host, guest = "없음" }) { … }`

**검사 항목** (2개)

1. eps[0] → 「… · 게스트 박상인」
2. eps[1](게스트 없음) → 「… · 게스트 없음」

**흔한 오답** — 「eps[1](게스트 없음) → 「… · 게스트 없음」」에서 걸립니다

게스트가 있는 회차로만 시험하면 맞게 나옵니다. 없는 회차는 `게스트 undefined` 가 찍힙니다.

```js
function describe(ep) {
  const { title, host, guest } = ep;
  return `${title} — 진행 ${host} · 게스트 ${guest}`;
}
```

---

### 문제 26. 객체 전개로 바꾼 사본

*코드 작성 · 함수 작성*

**문제**

회차 객체와 새 재생 수를 받아, **재생 수(`plays`)만 바꾼 새 객체**를 돌려주는 `withPlays(ep, plays)` 를 만드시오. 넘겨받은 객체는 바꾸지 않습니다.
- `withPlays({ id: 1, title: "퇴근길", plays: 10 }, 11)` → `{ id: 1, title: "퇴근길", plays: 11 }`

**시작 코드**

```js
function withPlays(ep, plays) {
  
}
```

**정답**

```js
function withPlays(ep, plays) {
  return { ...ep, plays };
}
```

**해설**

`{ ...ep, plays }` 는 `ep` 의 키를 **새 객체에 펼친 뒤** `plays` 를 덮어씁니다(`plays` 는 `plays: plays` 를 줄인 것). 나중에 쓴 키가 이깁니다.

**검사 항목** (2개)

1. plays 만 바뀐 객체를 돌려준다
2. 넘겨준 객체는 그대로 · 돌려준 것은 다른 객체

**흔한 오답** — 「넘겨준 객체는 그대로 · 돌려준 것은 다른 객체」에서 걸립니다

돌려준 값은 맞지만 넘겨받은 객체를 고쳤습니다. 그 객체가 화면의 목록에도 들어 있었다면 거기 숫자까지 바뀝니다.

```js
function withPlays(ep, plays) {
  ep.plays = plays;
  return ep;
}
```

---

### 문제 27. 전개는 한 겹만 복사한다

*결과 예측 · 하나 고르기*

**문제**

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

**정답** — ② `퇴근길 2`

**실제로 돌려 보면**

```text
퇴근길 2
```

**해설**

`{ ...a }` 는 `a` 의 키를 새 객체에 옮깁니다. `title` 은 글자 값이라 **따로** 생기고, `b.title` 을 바꿔도 `a` 는 그대로 `"퇴근길"` 입니다.
`tags` 는 배열 «자체»가 아니라 **같은 배열을 가리키는 것**이 옮겨집니다. 그래서 `b.tags.push` 는 `a.tags` 에도 보입니다 — 길이 2. 안쪽까지 떼어 내려면 `{ ...a, tags: [...a.tags] }` 처럼 그 배열도 따로 복사합니다.

**흔한 오답** — ①

「전개로 사본을 만들었으니 `a` 는 하나도 안 바뀐다」고 보기 쉽습니다. 사본은 **한 겹**만입니다 — 안쪽 배열은 둘이 함께 씁니다.

---

### 문제 28. ?. 옵셔널 체이닝

*코드 작성 · 함수 작성*

**문제**

기사의 기자 이름(`article.author.name`)을 돌려주는 `authorName(article)` 을 만드시오. 기사나 기자 정보가 **없으면**(`undefined` · `null`) 오류 대신 `"알 수 없음"` 을 돌려줍니다.

**시작 코드**

```js
function authorName(article) {
  
}
```

**정답**

```js
function authorName(article) {
  return article?.author?.name ?? "알 수 없음";
}
```

**해설**

`a?.b` 는 `a` 가 `null` · `undefined` 이면 오류 대신 `undefined` 를 돌려주고 거기서 멈춥니다. 여러 겹이면 겹마다 `?.` 를 씁니다.
그 뒤의 `?? "알 수 없음"` 이 `undefined` 를 기본값으로 바꿉니다(12번). 서버에서 받은 데이터처럼 **비어 있을 수 있는 값**을 꺼낼 때 씁니다.

**검사 항목** (3개)

1. { author: { name: "김하나" } } → "김하나"
2. {} · { author: null } → "알 수 없음"
3. undefined → "알 수 없음"

**흔한 오답** — 「{} · { author: null } → "알 수 없음"」에서 걸립니다

기자 정보가 있는 기사로만 시험하면 잘 돕니다. 하나라도 비어 있으면 `Cannot read properties of undefined` 로 멈춥니다.

```js
function authorName(article) {
  return article.author.name || "알 수 없음";
}
```

---

### 문제 29. Object.entries

*코드 작성 · 함수 작성*

**문제**

객체를 받아 `키=값` 을 `&` 로 이은 글자(주소 뒤에 붙는 질의 문자열)를 만드는 `toQuery(params)` 를 만드시오. 글자를 바꾸는(인코딩) 일은 하지 않습니다.
- `toQuery({ page: 2, size: 10 })` → `"page=2&size=10"` · `toQuery({})` → `""`

**시작 코드**

```js
function toQuery(params) {
  
}
```

**정답**

```js
function toQuery(params) {
  return Object.entries(params).map(([k, v]) => `${k}=${v}`).join("&");
}
```

**해설**

`Object.entries(obj)` 는 `[키, 값]` 짝의 배열입니다 — `[["page", 2], ["size", 10]]`. 배열이 되었으니 `map` 으로 `"page=2"` 를 만들고 `join("&")` 으로 **사이에만** `&` 를 넣습니다.
`Object.keys`(키만) · `Object.values`(값만)도 함께 기억해 두십시오.

**검사 항목** (2개)

1. { page: 2, size: 10 } → "page=2&size=10"
2. { q: "금리" } → "q=금리" · {} → ""

**흔한 오답** — 「{ page: 2, size: 10 } → "page=2&size=10"」에서 걸립니다

반복하며 `&` 를 붙이면 맨 끝에도 하나가 남습니다.

```js
function toQuery(params) {
  let s = "";
  for (const k in params) s += `${k}=${params[k]}&`;
  return s;
}
```

---

### 문제 30. map — 번호 붙여 꾸미기

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function numbered(list) {
  
}
```

**정답**

```js
function numbered(list) {
  return list.map((ep, i) => `${i + 1}. ${ep.title} (${ep.minutes}분)`);
}
```

**해설**

`map` 은 배열의 칸마다 콜백을 불러 **같은 길이의 새 배열**을 만듭니다. 콜백의 두 번째 인자 `i` 는 지금 칸의 자리 번호(0부터)입니다.

**검사 항목** (3개)

1. 앞의 두 줄과 개수
2. 마지막 줄 — 8. 선거 여론조사 읽기 (46분)
3. [] → []

**흔한 오답** — 「앞의 두 줄과 개수」에서 걸립니다

자리 번호를 그대로 쓰면 0 부터 시작합니다. 사람에게 보여 줄 번호는 `i + 1` 입니다.

```js
function numbered(list) {
  return list.map((ep, i) => `${i}. ${ep.title} (${ep.minutes}분)`);
}
```

---

### 문제 31. filter — 조건 둘

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function quickListen(list, category, maxMinutes) {
  
}
```

**정답**

```js
function quickListen(list, category, maxMinutes) {
  return list
    .filter((ep) => ep.category === category && ep.minutes <= maxMinutes)
    .map((ep) => ep.title);
}
```

**해설**

조건 둘을 **모두** 만족해야 하므로 `&&` 로 잇습니다. 거른 뒤 `map` 으로 제목만 꺼냅니다 — `filter` 와 `map` 은 이어 쓸 수 있습니다.

**검사 항목** (3개)

1. 경제 · 35분 이하 → ["전세 계약 체크"]
2. 경계 — 시사 · 32분 이하 → ["새벽 시장 이야기"] (32분 포함)
3. 문화 · 30 → 둘 · 스포츠 · 30 → []

**흔한 오답** — 「경계 — 시사 · 32분 이하 → ["새벽 시장 이야기"] (32분 포함)」에서 걸립니다

「이하」를 `<` 로 쓰면 길이가 딱 최대 길이인 회차가 빠집니다.

```js
function quickListen(list, category, maxMinutes) {
  return list
    .filter((ep) => ep.category === category && ep.minutes < maxMinutes)
    .map((ep) => ep.title);
}
```

---

### 문제 32. find — 없을 때까지 생각하기

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function firstMatch(list, word) {
  
}
```

**정답**

```js
function firstMatch(list, word) {
  const found = list.find((ep) => ep.title.includes(word));
  return found ? found.id : null;
}
```

**해설**

`find` 는 조건에 맞는 **첫 칸**을 주고, 없으면 `undefined` 를 줍니다. 그래서 꺼내 쓰기 전에 «있는지»를 먼저 봅니다.
`found?.id ?? null` 로 한 줄에 써도 됩니다(`?.` 는 28번).

**검사 항목** (2개)

1. 책방 → 7 · 이야기 → 1 (처음 것)
2. 없는 말 → null (오류 없이)

**흔한 오답** — 「없는 말 → null (오류 없이)」에서 걸립니다

있는 말로만 시험하면 맞습니다. `find` 가 아무것도 못 찾으면 `undefined` 를 주고, 거기서 `.id` 를 꺼내는 순간 **오류**가 납니다.

```js
function firstMatch(list, word) {
  return list.find((ep) => ep.title.includes(word)).id;
}
```

---

### 문제 33. 빈 배열의 some · every

*결과 예측 · 답 적기*

**문제**

다음 코드가 찍는 두 줄을 차례로 적으시오.
```js
const empty = [];
console.log(empty.some((x) => x > 0));
console.log(empty.every((x) => x > 0));
```

**정답** — `false true`

**실제로 돌려 보면**

```text
false
true
```

**해설**

`some` 은 「조건에 맞는 칸이 **하나라도** 있는가」 — 칸이 없으니 false.
`every` 는 「조건을 **어긴 칸이 없는가**」 — 칸이 없으니 어긴 칸도 없어 true 입니다. 「모든 회차가 30분 이상인가」 를 빈 목록에 물으면 true 가 나오므로, 화면에서는 빈 목록을 먼저 따로 다룹니다.

**흔한 오답** — `false false`

「아무것도 없으니 둘 다 false」 로 보기 쉽습니다. `every` 는 «조건을 어긴 칸이 하나도 없는가»라서 빈 배열이면 true 입니다.

---

### 문제 34. reduce — 합을 시간으로

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function totalTime(list) {
  
}
```

**정답**

```js
function totalTime(list) {
  const total = list.reduce((sum, ep) => sum + ep.minutes, 0);
  return `${Math.floor(total / 60)}시간 ${total % 60}분`;
}
```

**해설**

`reduce((sum, ep) => sum + ep.minutes, 0)` 은 0 에서 시작해 칸마다 더해 갑니다. 시작값 `0` 이 있어야 빈 배열에서도 오류 없이 0 이 나옵니다.
시간은 몫(`Math.floor(total / 60)`), 분은 나머지(`total % 60`)입니다.

**검사 항목** (3개)

1. episodes → "4시간 52분"
2. [{ minutes: 60 }] → "1시간 0분" · [] → "0시간 0분"
3. [25분, 10분] → "0시간 35분"

**흔한 오답** — 「episodes → "4시간 52분"」에서 걸립니다

시간을 `Math.round` 로 내면 292분이 4.87시간 → **5시간** 52분이 됩니다. 「몇 시간을 꽉 채웠나」는 버림(`Math.floor`)입니다.

```js
function totalTime(list) {
  const total = list.reduce((sum, ep) => sum + ep.minutes, 0);
  return `${Math.round(total / 60)}시간 ${total % 60}분`;
}
```

---

### 문제 35. 글자 정렬 — 대문자가 먼저

*결과 예측 · 하나 고르기*

**문제**

다음 코드는 무엇을 찍습니까?
```js
console.log(["b", "a", "C"].sort());
```

① `["a", "b", "C"]`  
② `["C", "a", "b"]`  
③ `["a", "C", "b"]`  
④ `["b", "a", "C"]` — 바뀌지 않는다

**정답** — ② `["C", "a", "b"]`

**실제로 돌려 보면**

```text
["C", "a", "b"]
```

**해설**

비교 함수 없는 `sort()` 는 값을 **글자로 바꿔 코드 번호 순**으로 놓습니다. `"C"`(67)는 `"a"`(97)보다 작아 맨 앞에 옵니다.
대소문자를 무시하고 싶으면 `sort((x, y) => x.toLowerCase().localeCompare(y.toLowerCase()))` 처럼 비교 함수를 줍니다.

**흔한 오답** — ①

사전처럼 a → b → c 로 놓일 것 같지만, `sort()` 는 글자의 **코드 번호**로 비교합니다. 대문자(65~)가 소문자(97~)보다 앞입니다.

---

### 문제 36. sort 가 원본을 바꾼다

*오류 고치기 · 함수 작성*

**문제**

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

**시작 코드**

```js
function topThree(list) {
  return list.sort((a, b) => b.plays - a.plays).slice(0, 3);
}
```

**정답**

```js
function topThree(list) {
  return [...list].sort((a, b) => b.plays - a.plays).slice(0, 3);
}
```

**해설**

`sort` 는 `map` · `filter` 와 달리 **원본을 바꾸고** 그 원본을 돌려줍니다. 그래서 정렬 전에 `[...list]` 로 사본을 만듭니다. `slice()` 로 복사해도 됩니다.

**검사 항목** (2개)

1. 상위 3개의 id → [5, 1, 8]
2. 부른 뒤에도 episodes 는 원래 순서(1 … 8)

**흔한 오답** — 「부른 뒤에도 episodes 는 원래 순서(1 … 8)」에서 걸립니다

시작 코드 그대로입니다. 돌려주는 3개는 맞아서 놓치기 쉽습니다 — `sort` 는 새 배열을 만들지 않고 **그 자리에서** 정렬합니다.

```js
function topThree(list) {
  return list.sort((a, b) => b.plays - a.plays).slice(0, 3);
}
```

---

### 문제 37. sort — 기준 둘

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function sortForShelf(list) {
  
}
```

**정답**

```js
function sortForShelf(list) {
  return [...list].sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return b.plays - a.plays;
  });
}
```

**해설**

비교 함수 안에서 **첫 기준이 다르면 그것으로** 정하고, 같을 때만 둘째 기준으로 넘어갑니다. 글자는 `localeCompare`(음수 · 0 · 양수를 돌려줌), 숫자는 빼기로 비교합니다.

**검사 항목** (2개)

1. id → [6, 2, 5, 3, 7, 4, 1, 8]
2. 넘겨준 배열은 그대로

**흔한 오답** — 「id → [6, 2, 5, 3, 7, 4, 1, 8]」에서 걸립니다

분야만으로 정렬하면 같은 분야끼리는 «원래 순서»로 남습니다. 경제의 2번(2875회)이 6번(3010회)보다 앞에 놓입니다.

```js
function sortForShelf(list) {
  return [...list].sort((a, b) => a.category.localeCompare(b.category));
}
```

---

### 문제 38. Set — 중복 없애기

*코드 작성 · 함수 작성*

**문제**

회차 배열에서 **진행자 이름을 중복 없이**, 처음 나온 순서대로 담은 배열을 돌려주는 `uniqueHosts(list)` 를 만드시오.
- `uniqueHosts(episodes)` → `["한도윤", "서유진", "이서아", "정하린"]`

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

**시작 코드**

```js
function uniqueHosts(list) {
  
}
```

**정답**

```js
function uniqueHosts(list) {
  return [...new Set(list.map((ep) => ep.host))];
}
```

**해설**

`Set` 은 같은 값을 **한 번만** 담는 통입니다. 처음 넣은 순서를 지킵니다. `[...set]` 으로 다시 배열로 펼칩니다.

**검사 항목** (2개)

1. episodes → 네 명, 처음 나온 순서
2. [] → []

**흔한 오답** — 「episodes → 네 명, 처음 나온 순서」에서 걸립니다

`map` 으로 이름만 꺼내면 같은 진행자가 회차 수만큼 들어갑니다.

```js
function uniqueHosts(list) {
  return list.map((ep) => ep.host);
}
```

---

### 문제 39. 0 점도 별점이다 — 평균

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function avgStars(list) {
  
}
```

**정답**

```js
function avgStars(list) {
  const rated = list.filter((r) => r.stars !== undefined);
  if (rated.length === 0) return 0;
  const sum = rated.reduce((s, r) => s + r.stars, 0);
  return Math.round((sum / rated.length) * 10) / 10;
}
```

**해설**

「값이 있는가」와 「참 같은 값인가」는 다릅니다. `0` 은 값이 있지만 거짓 같은 값입니다. 그래서 «없음»을 거를 때는 `r.stars !== undefined`(또는 `"stars" in r`)처럼 **없음 자체**를 묻습니다.
반올림해 소수 한 자리로: `Math.round(평균 * 10) / 10`.

**검사 항목** (3개)

1. reviews → 3 (0점 포함 · 안 준 리뷰 제외)
2. [4, 5] → 4.5 · [5, 4, 4] → 4.3
3. [] → 0 · 아무도 별점을 안 줌 → 0

**흔한 오답** — 「reviews → 3 (0점 포함 · 안 준 리뷰 제외)」에서 걸립니다

`filter((r) => r.stars)` 는 «별점이 있는가»처럼 보이지만 «참 같은 값인가»를 묻습니다. `0` 점이 빠져 12 ÷ 3 = **4** 가 됩니다.

```js
function avgStars(list) {
  const rated = list.filter((r) => r.stars);
  if (rated.length === 0) return 0;
  const sum = rated.reduce((s, r) => s + r.stars, 0);
  return Math.round((sum / rated.length) * 10) / 10;
}
```

---

### 문제 40. 묶기 — 진행자별 제목 목록

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function groupByHost(list) {
  
}
```

**정답**

```js
function groupByHost(list) {
  const groups = {};
  for (const ep of list) {
    if (!groups[ep.host]) groups[ep.host] = [];
    groups[ep.host].push(ep.title);
  }
  return groups;
}
```

**해설**

묶기는 「통이 없으면 **먼저 빈 배열을 만들고**, 그 통에 넣는다」 두 단계입니다. `groups[ep.host]` 처럼 대괄호를 쓰면 변수에 든 글자를 키로 씁니다.

**검사 항목** (2개)

1. episodes → 네 명, 각자 두 편
2. [] → {}

**흔한 오답** — 「episodes → 네 명, 각자 두 편」에서 걸립니다

칸마다 `= [ep.title]` 로 새 배열을 넣으면, 같은 진행자의 앞 회차가 지워지고 마지막 하나만 남습니다.

```js
function groupByHost(list) {
  const groups = {};
  for (const ep of list) {
    groups[ep.host] = [ep.title];
  }
  return groups;
}
```

---

### 문제 41. 분야별 1위

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function topByCategory(list) {
  
}
```

**정답**

```js
function topByCategory(list) {
  const best = {};
  for (const ep of list) {
    const cur = best[ep.category];
    if (!cur || ep.plays > cur.plays) best[ep.category] = ep;
  }
  const out = {};
  for (const [category, ep] of Object.entries(best)) out[category] = ep.title;
  return out;
}
```

**해설**

분야마다 «지금까지의 1위»를 들고 다니며, 새 회차가 더 많으면 바꿉니다. 1위 «객체»를 들고 있어야 재생 수를 비교할 수 있고, 마지막에 제목만 꺼냅니다(`Object.entries` 는 29번).

**검사 항목** (2개)

1. episodes → 분야 다섯의 1위
2. [] → {}

**흔한 오답** — 「episodes → 분야 다섯의 1위」에서 걸립니다

비교 없이 넣으면 분야마다 «마지막에 나온» 회차가 남습니다. 경제는 우연히 맞지만 시사 · 문화가 틀립니다.

```js
function topByCategory(list) {
  const out = {};
  for (const ep of list) {
    out[ep.category] = ep.title;
  }
  return out;
}
```

---

### 문제 42. flatMap — 겹친 배열 펴기

*코드 작성 · 함수 작성*

**문제**

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

**시작 코드**

```js
function allTags(list) {
  
}
```

**정답**

```js
function allTags(list) {
  return [...new Set(list.flatMap((a) => a.tags))];
}
```

**해설**

`flatMap` 은 `map` 한 뒤 **한 겹 펴기**(`flat()`)까지 합니다 — `[["경제", "금리"], ["날씨"]]` 가 `["경제", "금리", "날씨"]` 가 됩니다.
펴진 뒤에야 `Set` 이 같은 글자를 하나로 묶습니다(40번).

**검사 항목** (2개)

1. tagged → ["경제", "금리", "날씨", "수출"]
2. 태그가 빈 기사 · 빈 배열

**흔한 오답** — 「tagged → ["경제", "금리", "날씨", "수출"]」에서 걸립니다

`map` 으로 꺼내면 «배열의 배열»이 됩니다. 배열끼리는 내용이 같아도 다른 값이라 Set 이 하나도 못 지웁니다.

```js
function allTags(list) {
  return [...new Set(list.map((a) => a.tags))];
}
```

---

### 문제 43. 클로저 — 세는 함수 만들기

*코드 작성 · 함수 작성*

**문제**

부를 때마다 1, 2, 3 … 을 돌려주는 **함수를 만들어 돌려주는** `makeCounter()` 를 만드시오. 만든 계수기끼리는 **따로** 셉니다.
```js
const a = makeCounter();
a(); // 1
a(); // 2
const b = makeCounter();
b(); // 1
```

**시작 코드**

```js
function makeCounter() {
  
}
```

**정답**

```js
function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}
```

**해설**

안쪽 함수는 자기가 **만들어진 자리의 변수**(`count`)를 기억합니다 — 이것을 **클로저**라고 합니다. `makeCounter()` 를 부를 때마다 새 `count` 가 생기므로 계수기끼리 섞이지 않습니다.
React 의 이벤트 함수 · `useState` 가 이 원리 위에 서 있습니다.

**검사 항목** (2개)

1. a() 세 번 → 1, 2, 3
2. 계수기끼리 따로 센다

**흔한 오답** — 「계수기끼리 따로 센다」에서 걸립니다

계수기 하나만 시험하면 잘 셉니다. `count` 를 함수 «바깥»에 두면 모든 계수기가 한 숫자를 나눠 씁니다.

```js
let count = 0;
function makeCounter() {
  return () => {
    count++;
    return count;
  };
}
```

---

### 문제 44. 재귀 — 겹친 배열의 합

*코드 작성 · 함수 작성*

**문제**

배열 안에 배열이 **몇 겹이든** 들어 있을 때, 모든 숫자의 합을 돌려주는 `sumNested(arr)` 를 만드시오.
- `sumNested([1, [2, [3, [4]]], 5])` → `15`

**시작 코드**

```js
function sumNested(arr) {
  
}
```

**정답**

```js
function sumNested(arr) {
  let total = 0;
  for (const x of arr) {
    total += Array.isArray(x) ? sumNested(x) : x;
  }
  return total;
}
```

**해설**

**재귀**는 함수가 자기 자신을 부르는 것입니다. 「칸이 배열이면 그 배열의 합(= 같은 문제)을 구해 더한다」 — 겹이 몇 개든 같은 규칙으로 풀립니다.
끝나는 조건(숫자면 그대로 더함)이 꼭 있어야 합니다. (`arr.flat(Infinity)` 로 끝까지 펴는 방법도 있습니다.)

**검사 항목** (2개)

1. [1, [2, [3, [4]]], 5] → 15
2. [1, 2, 3] → 6 · [] → 0 · [[[]]] → 0

**흔한 오답** — 「[1, [2, [3, [4]]], 5] → 15」에서 걸립니다

`flat()` 은 «한 겹만» 폅니다. 두 겹 이상이면 배열이 남아 더하기가 글자 이어 붙이기가 됩니다.

```js
function sumNested(arr) {
  return arr.flat().reduce((s, x) => s + x, 0);
}
```

---

### 문제 45. DOM — 잡아서 글자 바꾸기

*빈칸 채우기 · DOM · 이벤트*

**문제**

재생기 화면에서 곡 제목(`.now`)을 `퇴근길`, 길이(`#time`)를 `3:25` 로 바꾸려 합니다. 빈칸(`___`) 세 곳을 채우시오.

**HTML (고정)**

```html
<section class="player">
  <h2 class="now">-</h2>
  <p id="time">0:00</p>
</section>
```

**시작 코드**

```js
const now = document.___(".now");
const time = document.querySelector(___);
now.___ = "퇴근길";
time.textContent = "3:25";
```

**정답**

```js
const now = document.querySelector(".now");
const time = document.querySelector("#time");
now.textContent = "퇴근길";
time.textContent = "3:25";
```

**해설**

`document.querySelector(선택자)` 는 CSS 와 같은 선택자로 **첫 요소 하나**를 잡습니다 — 클래스는 `.`, id 는 `#`. 잡은 요소의 `textContent` 에 넣으면 화면 글자가 바뀝니다.

**검사 항목** (2개)

1. .now 의 글자가 「퇴근길」
2. #time 의 글자가 「3:25」

**흔한 오답** — 「#time 의 글자가 「3:25」」에서 걸립니다

id 로 고를 때 `#` 을 빠뜨리면 `<time>` 이라는 **태그**를 찾아 `null` 이 나오고, 그 줄에서 오류가 납니다.

```js
const now = document.querySelector(".now");
const time = document.querySelector("time");
now.textContent = "퇴근길";
time.textContent = "3:25";
```

---

### 문제 46. classList — 하나만 강조

*코드 작성 · DOM · 이벤트*

**문제**

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

**정답**

```js
document.querySelectorAll(".track").forEach((li) => {
  li.classList.toggle("playing", Number(li.dataset.id) === nowId);
});
```

**해설**

`classList.toggle(이름, 조건)` 은 조건이 참이면 붙이고 거짓이면 뗍니다. 곡을 **전부** 돌며 조건을 주면 붙이기와 떼기를 한 번에 합니다.
🔴 `dataset.id` 는 **글자**(`"3"`)라 숫자 `nowId` 와 `===` 로 비교하려면 `Number()` 로 바꿉니다.

**검사 항목** (2개)

1. nowId = 3 → 「주말 산책」만 playing
2. nowId = 2 → 「퇴근길」만 playing

**흔한 오답** — 「nowId = 3 → 「주말 산책」만 playing」에서 걸립니다

지금 곡에 붙이기만 하고 떼지 않으면 1번 곡의 `playing` 이 그대로 남아 두 곡이 강조됩니다.

```js
document.querySelector(`.track[data-id="${nowId}"]`).classList.add("playing");
```

---

### 문제 47. 배열을 표로 그리기

*코드 작성 · DOM · 이벤트*

**문제**

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

**시작 코드**

```js
function renderRows(list) {
  const tbody = document.querySelector("#rows");
  
}

renderRows(episodes);
```

**정답**

```js
function renderRows(list) {
  const tbody = document.querySelector("#rows");
  tbody.innerHTML = "";
  for (const ep of list) {
    const tr = document.createElement("tr");
    const title = document.createElement("td");
    title.textContent = ep.title;
    const len = document.createElement("td");
    len.textContent = `${ep.minutes}분`;
    tr.append(title, len);
    tbody.append(tr);
  }
}

renderRows(episodes);
```

**해설**

표의 한 줄은 `<tr>`, 칸은 `<td>` 입니다. 칸마다 요소를 따로 만들어 `tr.append(칸1, 칸2)` 로 한꺼번에 붙입니다.
그리기 전에 `tbody.innerHTML = ""` 로 비워야 다시 불렀을 때 겹치지 않습니다.

**검사 항목** (3개)

1. 첫 줄 — 칸 두 개: 새벽 시장 이야기 | 32분
2. 8줄, 마지막 줄 — 선거 여론조사 읽기 | 46분
3. 다시 불러도 8줄 · renderRows([]) → 0줄

**흔한 오답** — 「첫 줄 — 칸 두 개: 새벽 시장 이야기 | 32분」에서 걸립니다

글자 하나로 이어 붙여 칸 하나에 넣으면 화면에는 비슷하게 보여도 「길이」 칸이 비고, 표의 열이 맞지 않습니다.

```js
function renderRows(list) {
  const tbody = document.querySelector("#rows");
  tbody.innerHTML = "";
  for (const ep of list) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = `${ep.title} ${ep.minutes}분`;
    tr.append(td);
    tbody.append(tr);
  }
}

renderRows(episodes);
```

---

### 문제 48. 청취자 글은 글자 그대로

*오류 고치기 · DOM · 이벤트*

**문제**

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

**시작 코드**

```js
const ul = document.querySelector("#comments");
for (const c of comments) {
  const li = document.createElement("li");
  li.innerHTML = c;
  ul.append(li);
}
```

**정답**

```js
const ul = document.querySelector("#comments");
for (const c of comments) {
  const li = document.createElement("li");
  li.textContent = c;
  ul.append(li);
}
```

**해설**

`innerHTML` 은 글자를 **HTML 로 읽어** 요소를 만듭니다. `textContent` 는 **글자 그대로** 넣습니다.
남이 쓴 글(댓글 · 검색어 · 서버에서 받은 제목)은 `textContent` 로 넣는 것이 원칙입니다. `<img onerror=…>` 같은 글이 들어오면 `innerHTML` 은 그 코드를 실행까지 합니다.

**검사 항목** (2개)

1. 댓글 두 줄
2. 두 번째 줄이 「<b>최고</b>예요」 그대로 · b 요소가 없다

**흔한 오답** — 「두 번째 줄이 「<b>최고</b>예요」 그대로 · b 요소가 없다」에서 걸립니다

시작 코드 그대로입니다. 첫 댓글은 멀쩡해 보여서 문제를 못 느끼지만, 남이 쓴 글을 `innerHTML` 에 넣으면 그 안의 태그가 **실제로 만들어집니다**.

```js
const ul = document.querySelector("#comments");
for (const c of comments) {
  const li = document.createElement("li");
  li.innerHTML = c;
  ul.append(li);
}
```

---

## 고급

### 문제 49. 클릭 — 재생 / 일시정지 토글

*코드 작성 · DOM · 이벤트*

**문제**

단추(`#play`)를 누를 때마다 상태가 번갈아 바뀌게 하시오.
- 재생으로 바뀌면: 글자 `❚❚ 일시정지` · `aria-pressed="true"`
- 다시 누르면: 글자 `▶ 재생` · `aria-pressed="false"`

**HTML (고정)**

```html
<button id="play" type="button" aria-pressed="false">▶ 재생</button>
```

**정답**

```js
const btn = document.querySelector("#play");
let playing = false;
btn.addEventListener("click", () => {
  playing = !playing;
  btn.textContent = playing ? "❚❚ 일시정지" : "▶ 재생";
  btn.setAttribute("aria-pressed", String(playing));
});
```

**해설**

「지금 재생 중인가」를 변수(`playing`)로 기억하고, 누를 때마다 `!playing` 으로 뒤집은 뒤 화면을 그 값에 맞춥니다.
`aria-pressed` 는 화면 읽기 프로그램에게 「눌린 상태인 단추」라고 알려 줍니다. 값은 글자 `"true"` · `"false"` 입니다.

**검사 항목** (3개)

1. 한 번 누르면 「❚❚ 일시정지」 · aria-pressed true
2. 두 번 누르면 「▶ 재생」 · aria-pressed false
3. 세 번 누르면 다시 「❚❚ 일시정지」

**흔한 오답** — 「두 번 누르면 「▶ 재생」 · aria-pressed false」에서 걸립니다

한 번 눌러 보고 바뀌면 끝난 것 같습니다. 두 번째로 누르면 되돌아와야 하는데, 「지금 어떤 상태인가」를 기억하지 않으면 늘 같은 쪽으로만 바뀝니다.

```js
const btn = document.querySelector("#play");
btn.addEventListener("click", () => {
  btn.textContent = "❚❚ 일시정지";
  btn.setAttribute("aria-pressed", "true");
});
```

---

### 문제 50. input — 글자 수와 한도

*코드 작성 · DOM · 이벤트*

**문제**

사연 입력칸(`#msg`)에 **칠 때마다** `#count` 에 `N / 50` 을 보여 주시오.
- 50자를 **넘으면** `#count` 에 class `over` 를 붙이고, 다시 50자 이하가 되면 **뗍니다**

**HTML (고정)**

```html
<textarea id="msg"></textarea>
<p id="count">0 / 50</p>
```

**정답**

```js
const msg = document.querySelector("#msg");
const count = document.querySelector("#count");
msg.addEventListener("input", () => {
  const n = msg.value.length;
  count.textContent = `${n} / 50`;
  count.classList.toggle("over", n > 50);
});
```

**해설**

`input` 이벤트는 글자를 **칠 때마다**(붙여넣기 · 지우기 포함) 일어납니다. `classList.toggle("over", n > 50)` 한 줄이 붙이기와 떼기를 함께 합니다.

**검사 항목** (3개)

1. 「안녕」 → 「2 / 50」 · over 없음
2. 51자 → over
3. 51자 뒤 50자로 줄이면 over 가 떨어진다 (50자는 넘은 것이 아니다)

**흔한 오답** — 「51자 뒤 50자로 줄이면 over 가 떨어진다 (50자는 넘은 것이 아니다)」에서 걸립니다

넘었을 때 붙이기만 하면, 글자를 지워 다시 50자 이하가 되어도 빨간 표시가 남습니다.

```js
const msg = document.querySelector("#msg");
const count = document.querySelector("#count");
msg.addEventListener("input", () => {
  const n = msg.value.length;
  count.textContent = `${n} / 50`;
  if (n > 50) count.classList.add("over");
});
```

---

### 문제 51. 이벤트 위임 — 삭제 단추

*코드 작성 · DOM · 이벤트*

**문제**

재생 목록에서 **삭제 단추를 누르면 그 곡(`li`)을 지우시오**.
- 🔴 이벤트는 **목록(`#list`)에 한 번만** 겁니다
- 곡 이름(`span`)을 누르면 아무 일도 일어나지 않습니다
- 나중에 JS 로 **새로 붙인** 곡의 삭제 단추도 동작해야 합니다

**HTML (고정)**

```html
<ul id="list">
  <li><span>새벽 라디오</span> <button class="del" type="button">삭제</button></li>
  <li><span>퇴근길</span> <button class="del" type="button">삭제</button></li>
  <li><span>주말 산책</span> <button class="del" type="button">삭제</button></li>
</ul>
```

**정답**

```js
const list = document.querySelector("#list");
list.addEventListener("click", (e) => {
  const del = e.target.closest(".del");
  if (!del) return;
  del.closest("li").remove();
});
```

**해설**

클릭은 누른 요소에서 시작해 **바깥 요소로 거슬러 올라갑니다**(버블링). 그래서 목록 하나에만 걸어 두면 안쪽의 어떤 단추를 눌러도 목록이 압니다.
`e.target` 은 실제로 누른 요소입니다. `closest(".del")` 로 「삭제 단추를 눌렀나」를 확인하고, 그 단추의 `closest("li")` 를 지웁니다.

**검사 항목** (3개)

1. 두 번째 곡의 삭제 → 「새벽 라디오 · 주말 산책」
2. 곡 이름을 누르면 그대로 세 곡
3. 새로 붙인 곡의 삭제도 동작한다

**흔한 오답** — 「새로 붙인 곡의 삭제도 동작한다」에서 걸립니다

단추마다 리스너를 다는 것은 «지금 있는» 단추에만 걸립니다. 나중에 붙인 곡의 단추에는 아무것도 걸려 있지 않습니다.

```js
document.querySelectorAll(".del").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest("li").remove();
  });
});
```

---

### 문제 52. 폼 — 막고, 더하고, 비우기

*코드 작성 · DOM · 이벤트*

**문제**

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

**정답**

```js
const form = document.querySelector("#sub");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const subs = document.querySelector("#subs");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = email.value.trim();
  if (!value) {
    msg.textContent = "이메일을 입력하세요";
    return;
  }
  const li = document.createElement("li");
  li.textContent = value;
  subs.append(li);
  email.value = "";
  msg.textContent = `${subs.children.length}명 신청`;
});
```

**해설**

폼의 `submit` 은 단추 클릭과 Enter 를 **둘 다** 받습니다. `e.preventDefault()` 가 페이지 새로 고침을 막습니다.
제출이 끝나면 입력칸을 비워 「받았다」는 것을 보여 줍니다. 신청 수는 따로 세지 않고 목록의 `children.length` 로 읽으면 화면과 어긋날 일이 없습니다.

**검사 항목** (3개)

1. 제출을 막았다 (preventDefault)
2. 「 a@b.kr 」 → 목록에 a@b.kr · 입력칸 비움 · 「1명 신청」 → 한 번 더 「2명 신청」
3. 공백만 → 「이메일을 입력하세요」 · 목록 그대로

**흔한 오답** — 「「 a@b.kr 」 → 목록에 a@b.kr · 입력칸 비움 · 「1명 신청」 → 한 번 더 「2명 신청」」에서 걸립니다

목록에 더하는 것까지 하고 나면 끝난 것 같습니다. 입력칸에 방금 쓴 이메일이 그대로 남아 있으면 사용자는 「신청이 안 됐나?」 하고 또 누릅니다.

```js
const form = document.querySelector("#sub");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const subs = document.querySelector("#subs");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = email.value.trim();
  if (!value) {
    msg.textContent = "이메일을 입력하세요";
    return;
  }
  const li = document.createElement("li");
  li.textContent = value;
  subs.append(li);
  msg.textContent = `${subs.children.length}명 신청`;
});
```

---

### 문제 53. await 는 함수를 거기서 멈춘다

*결과 예측 · 답 적기*

**문제**

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

**정답** — `1 2 4 3`

**실제로 돌려 보면**

```text
1
2
4
3
```

**해설**

`async` 함수는 부르는 즉시 **첫 `await` 까지는 바로** 돕니다 — 그래서 2 가 4 보다 먼저입니다.
`await` 에서 함수는 멈추고 부른 쪽(바깥)이 계속 돌아 4 를 찍습니다. 바깥이 다 끝난 뒤에 멈췄던 자리로 돌아와 3 을 찍습니다.

**흔한 오답** — `1 2 3 4`

`await null` 은 기다릴 것이 없으니 바로 지나갈 것 같습니다. 하지만 `await` 를 만나면 그 함수는 **무조건 한 번 멈추고** 바깥 코드에 차례를 넘깁니다.

---

### 문제 54. 기다리는 함수 만들기 — Promise

*코드 작성 · 비동기 함수*

**문제**

`ms` 밀리초 뒤에 끝나는 **Promise** 를 돌려주는 `sleep(ms)` 를 만드시오. `await sleep(1000)` 처럼 쓸 수 있어야 합니다.

**시작 코드**

```js
function sleep(ms) {
  
}
```

**정답**

```js
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

**해설**

`new Promise((resolve) => …)` — 「나중에 줄게」 쪽지를 만들고, 일이 끝나면 `resolve()` 를 불러 «끝났다»고 알립니다. `setTimeout(resolve, ms)` 는 `ms` 뒤에 그 알림을 보냅니다.
`await` 는 Promise 만 기다립니다. Promise 가 아닌 것(`undefined`)은 기다릴 것이 없어 바로 지나갑니다.

**검사 항목** (2개)

1. Promise 를 돌려준다
2. await sleep(150) 이 150ms 쯤 기다린다

**흔한 오답** — 「Promise 를 돌려준다」에서 걸립니다

`setTimeout` 을 부르면 «기다리는» 것 같지만, 아무도 그 끝을 알려 주지 않습니다 — 함수는 바로 끝나고 `undefined` 를 돌려줍니다.

```js
function sleep(ms) {
  setTimeout(() => {}, ms);
}
```

---

### 문제 55. async / await

*코드 작성 · 비동기 함수*

**문제**

주어진 `getNumber(n)` 은 30ms 뒤에 `n × 10` 을 주는 Promise 를 돌려줍니다. 두 수의 결과를 받아 **더한 값**을 돌려주는 `async` 함수 `sumTwo(a, b)` 를 만드시오.
- `await sumTwo(1, 2)` → `30`

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
// 30ms 뒤에 n × 10 을 주는 함수 (서버에서 받아오는 흉내)
function getNumber(n) {
  return new Promise((resolve) => setTimeout(() => resolve(n * 10), 30));
}
```

**시작 코드**

```js
async function sumTwo(a, b) {
  
}
```

**정답**

```js
async function sumTwo(a, b) {
  const x = await getNumber(a);
  const y = await getNumber(b);
  return x + y;
}
```

**해설**

`await` 는 Promise 가 끝날 때까지 **그 함수 안에서만** 기다리고, 끝난 값을 꺼내 줍니다. `await` 는 `async` 함수 안에서만 쓸 수 있습니다.
`async` 함수는 늘 Promise 를 돌려주므로, 부르는 쪽도 `await sumTwo(1, 2)` 로 받습니다.

**검사 항목** (2개)

1. await sumTwo(1, 2) → 30
2. await sumTwo(5, 0) → 50

**흔한 오답** — 「await sumTwo(1, 2) → 30」에서 걸립니다

`await` 를 빠뜨리면 숫자가 아니라 «쪽지»(Promise) 두 장을 더합니다 — 글자 `"[object Promise][object Promise]"` 가 됩니다(7일차).

```js
async function sumTwo(a, b) {
  const x = getNumber(a);
  const y = getNumber(b);
  return x + y;
}
```

---

### 문제 56. fetch — 받아서 고르기

*코드 작성 · 비동기 함수*

**문제**

`episodes.json` 을 받아(`fetch`) **가장 긴 회차의 제목**을 돌려주는 `async` 함수 `loadLongest()` 를 만드시오.
- `await loadLongest()` → `"야구 결산 특집"` (55분)
(이 연습장의 `fetch` 는 인터넷 대신 위 「가짜 서버」 표대로 답합니다)

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `episodes.json` | 200 · JSON 배열 8건 |

**시작 코드**

```js
async function loadLongest() {
  
}
```

**정답**

```js
async function loadLongest() {
  const res = await fetch("episodes.json");
  const data = await res.json();
  const longest = data.reduce((best, ep) => (ep.minutes > best.minutes ? ep : best));
  return longest.title;
}
```

**해설**

`fetch` 는 응답(머리)을 기다리는 데 한 번, `res.json()` 은 본문을 다 받아 읽는 데 한 번 — **`await` 가 두 번** 필요합니다.
가장 큰 것 고르기는 `reduce` 로 «지금까지의 최고»를 들고 다니면 됩니다(시작값을 안 주면 첫 칸이 시작값).

**검사 항목** (2개)

1. await loadLongest() → "야구 결산 특집"
2. 서버의 내용이 바뀌면 답도 바뀐다

**흔한 오답** — 「await loadLongest() → "야구 결산 특집"」에서 걸립니다

`fetch` 에만 `await` 를 쓰고 `res.json()` 에는 빠뜨린 경우입니다. `res.json()` 도 Promise 를 줘서, `data.reduce` 에서 「함수가 아니다」 오류가 납니다.

```js
async function loadLongest() {
  const res = await fetch("episodes.json");
  const data = res.json();
  const longest = data.reduce((best, ep) => (ep.minutes > best.minutes ? ep : best));
  return longest.title;
}
```

---

### 문제 57. Promise.all — 하나씩 받던 것을 한꺼번에

*오류 고치기 · 비동기 함수*

**문제**

주소 배열을 받아 JSON 을 **같은 순서의 배열**로 돌려주는 `async` 함수 `loadAll(urls)` 입니다. 결과는 맞는데 **느립니다** — 가짜 서버는 주소마다 150ms 씩 걸리고, 시작 코드는 셋을 **하나씩** 받아 450ms 쯤 걸립니다.
결과(순서 포함)는 그대로 두고, **한꺼번에** 받아 150ms 쯤에 끝나게 고치시오.

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `a.json` | 200 · JSON 1 · 150ms 뒤 |
| `b.json` | 200 · JSON 2 · 150ms 뒤 |
| `c.json` | 200 · JSON 3 · 150ms 뒤 |

**시작 코드**

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

**정답**

```js
async function loadAll(urls) {
  return Promise.all(urls.map(async (url) => {
    const res = await fetch(url);
    return res.json();
  }));
}
```

**해설**

`Promise.all([쪽지들])` 은 쪽지를 **한꺼번에** 기다렸다가, 모두 끝나면 결과를 **넣은 순서대로** 배열로 줍니다(먼저 끝난 순서가 아님).
`urls.map(async …)` 이 쪽지 배열을 만들고 — 이때 이미 셋 다 출발합니다 — `Promise.all` 이 모아서 기다립니다. 🔴 `forEach` 안의 `await` 는 아무도 기다려 주지 않습니다(7일차).

**검사 항목** (3개)

1. [a, b, c] → [1, 2, 3] (순서대로)
2. 한꺼번에 받는다 — 셋에 300ms 안
3. 빈 배열 → []

**흔한 오답** — 「한꺼번에 받는다 — 셋에 300ms 안」에서 걸립니다

시작 코드 그대로입니다. `for` 안의 `await` 는 앞의 것이 «끝나야» 다음 것을 시작합니다.

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

---

### 문제 58. fetch 오류 처리 — 404 는 오류가 아니다

*오류 고치기 · 비동기 함수*

**문제**

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

**시작 코드**

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

**정답**

```js
async function loadSafe(url) {
  let res;
  try {
    res = await fetch(url);
  } catch (e) {
    return { ok: false, error: "네트워크 오류" };
  }
  if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
  return { ok: true, data: await res.json() };
}
```

**해설**

갈림길이 **둘**입니다(8일차). ① 서버에 아예 못 닿으면 `fetch` 가 **실패**(`catch` 로 잡힘). ② 닿았지만 404 · 500 이면 `fetch` 는 **성공**하고 `res.ok` 가 `false` — 직접 봐야 합니다.
화면에서는 이 두 실패를 사용자에게 다르게 알려야 합니다(「잠시 뒤 다시」 vs 「없는 회차」).

**검사 항목** (3개)

1. episodes.json → { ok: true, data: [회차 2건] }
2. 없는 주소 → { ok: false, error: "HTTP 404" } · broken.json → "HTTP 500"
3. down.json(네트워크 오류) → { ok: false, error: "네트워크 오류" }

**흔한 오답** — 「없는 주소 → { ok: false, error: "HTTP 404" } · broken.json → "HTTP 500"」에서 걸립니다

시작 코드 그대로입니다. `fetch` 는 404 · 500 에도 **실패하지 않고** 응답을 줍니다. 그 응답의 본문(`Not Found`)을 `res.json()` 이 읽다가 터진 것을 «네트워크 오류»로 잘못 잡았습니다.

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

---

### 문제 59. 종합 — 받아서 그리기 (로딩 · 성공 · 빈 결과 · 실패)

*종합 구현 · DOM · 이벤트*

**문제**

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

**시작 코드**

```js
async function start() {
  const status = document.querySelector("#status");
  const list = document.querySelector("#list");
  
}

start();
```

**정답**

```js
async function start() {
  const status = document.querySelector("#status");
  const list = document.querySelector("#list");
  status.textContent = "불러오는 중…";
  const res = await fetch("episodes.json");
  if (!res.ok) {
    status.textContent = `불러오지 못했습니다 (HTTP ${res.status})`;
    return;
  }
  const data = await res.json();
  list.innerHTML = "";
  if (data.length === 0) {
    status.textContent = "회차가 없습니다";
    return;
  }
  const sorted = [...data].sort((a, b) => b.plays - a.plays);
  for (const ep of sorted) {
    const li = document.createElement("li");
    li.textContent = ep.title;
    list.append(li);
  }
  status.textContent = `${data.length}편`;
}

start();
```

**해설**

화면이 가질 수 있는 상태를 먼저 **모두 적어 보는** 것이 시작입니다 — 받는 중 · 있음 · 없음 · 실패. 하나라도 빠지면 그 경우에 화면이 어색하게 남습니다.
`fetch` 는 404 · 500 에도 실패하지 않으므로 `res.ok` 를 직접 봅니다. 정렬은 받은 배열의 사본으로.

**검사 항목** (4개)

1. 받는 동안 「불러오는 중…」
2. 성공 — 재생 많은 순 8편 · 「8편」
3. 빈 배열 → 「회차가 없습니다」 · 목록 비움
4. 실패(500) → 「불러오지 못했습니다 (HTTP 500)」

**흔한 오답** — 「빈 배열 → 「회차가 없습니다」 · 목록 비움」에서 걸립니다

성공 · 실패만 생각하면 빈 결과가 빠집니다. 받은 배열이 비면 목록이 텅 빈 채 `0편` 이라고만 나와, 사용자는 고장 난 줄 압니다.

```js
async function start() {
  const status = document.querySelector("#status");
  const list = document.querySelector("#list");
  status.textContent = "불러오는 중…";
  const res = await fetch("episodes.json");
  if (!res.ok) {
    status.textContent = `불러오지 못했습니다 (HTTP ${res.status})`;
    return;
  }
  const data = await res.json();
  list.innerHTML = "";
  const sorted = [...data].sort((a, b) => b.plays - a.plays);
  for (const ep of sorted) {
    const li = document.createElement("li");
    li.textContent = ep.title;
    list.append(li);
  }
  status.textContent = `${data.length}편`;
}

start();
```

---

### 문제 60. 종합 — 재생 목록 화면

*종합 구현 · DOM · 이벤트*

**문제**

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

**정답**

```js
const list = document.querySelector("#list");
const total = document.querySelector("#total");
const state = { cat: "", sort: "new" };

function render() {
  let items = episodes.filter((ep) => state.cat === "" || ep.category === state.cat);
  if (state.sort === "plays") items = [...items].sort((a, b) => b.plays - a.plays);
  list.innerHTML = "";
  for (const ep of items) {
    const li = document.createElement("li");
    li.textContent = ep.title;
    list.append(li);
  }
  const minutes = items.reduce((sum, ep) => sum + ep.minutes, 0);
  total.textContent = `${items.length}편 · 총 ${Math.floor(minutes / 60)}시간 ${minutes % 60}분`;
}

document.querySelector("#cats").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  state.cat = btn.dataset.cat;
  render();
});
document.querySelector("#sort").addEventListener("change", (e) => {
  state.sort = e.target.value;
  render();
});

render();
```

**해설**

「지금 무엇을 골랐나」(분야 · 정렬)를 **상태 객체 하나**에 모으고, 그리는 함수는 **언제나 상태만 보고** 처음부터 그립니다. 단추와 정렬은 상태를 바꾸고 `render()` 를 부를 뿐입니다.
이렇게 하면 조합이 늘어도 그리는 곳이 하나라 어긋나지 않습니다 — 다음 과목(React)이 이 생각 그대로입니다.

**검사 항목** (5개)

1. 처음 — 8편 최신순 · 「8편 · 총 4시간 52분」
2. 경제 → 두 편 · 「2편 · 총 1시간 10분」
3. 경제를 고른 뒤 재생 많은 순 → 경제 안에서 정렬
4. 재생 많은 순을 고른 뒤 문화 → 전체로 → 정렬이 유지된다
5. episodes 의 순서는 그대로

**흔한 오답** — 「경제를 고른 뒤 재생 많은 순 → 경제 안에서 정렬」에서 걸립니다

분야 단추와 정렬이 «각자» 그리면, 경제를 고른 뒤 정렬을 바꾸는 순간 전체 목록이 정렬되어 나옵니다. 「지금 무엇을 골랐나」를 한 곳(상태)에 모아 두지 않아서입니다.

```js
const list = document.querySelector("#list");
const total = document.querySelector("#total");

function draw(items) {
  list.innerHTML = "";
  for (const ep of items) {
    const li = document.createElement("li");
    li.textContent = ep.title;
    list.append(li);
  }
  const minutes = items.reduce((sum, ep) => sum + ep.minutes, 0);
  total.textContent = `${items.length}편 · 총 ${Math.floor(minutes / 60)}시간 ${minutes % 60}분`;
}

document.querySelector("#cats").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const cat = btn.dataset.cat;
  draw(episodes.filter((ep) => cat === "" || ep.category === cat));
});
document.querySelector("#sort").addEventListener("change", (e) => {
  if (e.target.value === "plays") draw([...episodes].sort((a, b) => b.plays - a.plays));
  else draw(episodes);
});

draw(episodes);
```

---
