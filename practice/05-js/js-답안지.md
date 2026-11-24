# JS 연습 답안지 (해설 포함)

> 총 **60문제** — 초급 25 · 중급 25 · 고급 10 (코드 작성 54 · 고르기 6)
>
> 같은 결과를 내는 다른 코드도 정답입니다. 채점은 쓴 방법이 아니라 **돌려 본 결과**를 봅니다.
> 아래 정답은 모두 실제 Chrome 에서 검사를 전부 통과하고, 「흔한 오답」은 적힌 검사에서 실제로 걸리는 것을 확인한 것입니다. 고르기 문제의 코드도 실제로 돌려 본 결과입니다.

## 빠른 찾기

- **초급**: 1~25번
- **중급**: 26~50번
- **고급**: 51~60번

---

## 초급

### 문제 1. 변수와 템플릿 리터럴

**문제**

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

**정답**

```js
console.log(`${name} 기자의 기사 — 조회수 ${views}회`);
```

**해설**

템플릿 리터럴은 **백틱**(`` ` ``)으로 감싸고, 그 안의 `${...}` 자리에 값이 들어갑니다. 파이썬의 f-string 과 같습니다.
작은따옴표 · 큰따옴표 안에서는 `${...}` 가 그냥 글자로 찍힙니다.

**검사 항목** (2개)

1. 한 줄이 찍힌다
2. 변수가 바뀌면 찍히는 글자도 바뀐다 (이도윤 · 920)

**흔한 오답** — 「변수가 바뀌면 찍히는 글자도 바뀐다 (이도윤 · 920)」에서 걸립니다

화면에 같은 글자가 찍히니 맞은 것 같습니다. 하지만 변수가 바뀌면 따라가지 못합니다.

```js
console.log("김하나 기자의 기사 — 조회수 1845회");
```

---

### 문제 2. + 와 - 의 차이

**문제**

다음 두 줄은 무엇을 찍습니까?
```js
console.log("3" + 1);
console.log("3" - 1);
```

① `31` 과 `2`  
② `4` 와 `2`  
③ `31` 과 `31`  
④ `4` 와 `NaN`

**정답** — ① `31` 과 `2`

**실제로 돌려 보면**

```text
31
2
```

**해설**

`+` 는 한쪽이라도 **문자열**이면 이어 붙입니다 — `"3" + 1` 은 `"31"`. `-` 는 이어 붙이는 뜻이 없어서 둘 다 숫자로 바꿔 계산합니다 — `2`.
입력칸의 값(`input.value`)은 늘 문자열이라, 더하기 전에 `Number(...)` 로 바꿔야 합니다.

**흔한 오답** — ②

둘 다 숫자 계산이라고 생각하기 쉽습니다. `+` 는 한쪽이 글자면 «이어 붙이기»가 됩니다.

---

### 문제 3. 글자를 숫자로

**문제**

입력칸에서 받은 두 값(**문자열**)을 더한 **숫자**를 돌려주는 함수 `addStrings(a, b)` 를 만드시오.
- `addStrings("10", "5")` → `15`

**정답**

```js
function addStrings(a, b) {
  return Number(a) + Number(b);
}
```

**해설**

`Number("10")` 은 숫자 `10` 입니다. 바꾼 뒤에 더해야 `15` 가 됩니다.
`parseInt` 도 되지만 소수점 아래를 버리므로(`parseInt("1.5")` → `1`) 이 문제에는 `Number`(또는 `parseFloat`)가 맞습니다.

**검사 항목** (3개)

1. addStrings("10", "5") → 15
2. addStrings("3", "4") → 7 · ("0", "0") → 0
3. 소수도 된다 — addStrings("1.5", "2") → 3.5

**흔한 오답** — 「addStrings("10", "5") → 15」에서 걸립니다

더하기만 쓰면 `"105"` 가 됩니다 — 문자열끼리는 이어 붙이기입니다.

```js
function addStrings(a, b) {
  return a + b;
}
```

---

### 문제 4. == 와 ===

**문제**

다음 중 결과가 `true` 인 것은?

① `"1" === 1`  
② `null === undefined`  
③ `0 == ""`  
④ `NaN === NaN`

**정답** — ③ `0 == ""`

**실제로 돌려 보면**

```text
false false true false
```

**해설**

`==` 는 타입이 다르면 **바꿔서** 비교합니다 — `0 == ""` 는 `""` 가 `0` 으로 바뀌어 `true`. 이런 «몰래 바꾸기» 때문에 헷갈립니다.
`===` 는 바꾸지 않습니다 — 타입이 다르면 무조건 `false`. **늘 `===` 를 쓰십시오.** (`NaN` 은 자기 자신과도 같지 않습니다 — `Number.isNaN(x)` 로 봅니다.)

**흔한 오답** — ②

`null == undefined` 는 `true` 라서 `===` 도 그럴 것 같습니다. `===` 는 타입까지 같아야 합니다.

---

### 문제 5. if … else if

**문제**

점수를 받아 등급을 돌려주는 `grade(score)` 를 만드시오.
- 90 이상 `"A"` · 80 이상 `"B"` · 70 이상 `"C"` · 그 밖에는 `"F"`

**정답**

```js
function grade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  return "F";
}
```

**해설**

파이썬의 `elif` 가 JS 에서는 `else if` 입니다. 위에서부터 처음 맞는 곳에서 멈추므로 **큰 점수부터** 묻습니다.
「이상」은 `>=`, 「초과」는 `>` — 경계값을 꼭 넣어 시험해 보십시오.

**검사 항목** (3개)

1. 100 → A · 85 → B · 75 → C · 30 → F
2. 경계값 — 90 → A · 80 → B · 70 → C
3. 경계 바로 아래 — 89 → B · 69 → F

**흔한 오답** — 「경계값 — 90 → A · 80 → B · 70 → C」에서 걸립니다

「90 이상」을 `> 90` 으로 옮기는 실수입니다. 경계값(90 · 80 · 70)에서만 틀려서 눈에 잘 안 띕니다.

```js
function grade(score) {
  if (score > 90) return "A";
  else if (score > 80) return "B";
  else if (score > 70) return "C";
  return "F";
}
```

---

### 문제 6. 나머지 연산자 %

**문제**

정수가 짝수이면 `true`, 홀수이면 `false` 를 돌려주는 `isEven(n)` 을 만드시오. 음수도 들어옵니다.

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

**문제**

요일 번호(0 = 일요일 … 6 = 토요일)를 받아 한 글자 요일을 돌려주는 `dayName(n)` 을 **switch** 로 만드시오.
- `0` → `"일"`, `1` → `"월"`, … `6` → `"토"`
- 그 밖의 값 → `"없음"`

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

**문제**

1부터 `n` 까지의 합을 돌려주는 `sumTo(n)` 을 **for** 로 만드시오. `n` 이 0 이면 `0` 입니다.

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

**문제**

`n` 부터 1까지 거꾸로 센 배열을 돌려주는 `countdown(n)` 을 **while** 로 만드시오.
- `countdown(3)` → `[3, 2, 1]` · `countdown(0)` → `[]`

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

**문제**

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

**정답**

```js
let no = 1;
for (const s of sections) {
  console.log(`${no}. ${s}`);
  no++;
}
```

**해설**

`for (const x of 배열)` 은 배열의 **값**을 하나씩 꺼냅니다(파이썬의 `for x in 리스트`). 번호가 필요하면 바깥에 세는 변수를 두거나 `sections.forEach((s, i) => …)` 의 `i + 1` 을 씁니다.
🔴 `for…in` 은 값이 아니라 **번호(키)** 를 꺼냅니다 — 배열에는 `for…of` 를 쓰십시오.

**검사 항목** (2개)

1. 1. 정치 · 2. 경제 · 3. 사회
2. 다른 배열 — ["IT", "문화"] → 1. IT · 2. 문화

**흔한 오답** — 「1. 정치 · 2. 경제 · 3. 사회」에서 걸립니다

배열의 번호(인덱스)가 0 부터라 그대로 찍으면 `0. 정치` 가 됩니다. 사람에게 보이는 번호는 1 부터입니다.

```js
let no = 0;
for (const s of sections) {
  console.log(`${no}. ${s}`);
  no++;
}
```

---

### 문제 11. break

**문제**

숫자 배열에서 **처음으로** 나오는 음수의 위치(인덱스)를 돌려주는 `firstNegative(nums)` 를 만드시오. 음수가 없으면 `-1` 입니다. 반복과 `break`(또는 `return`)를 쓰십시오.

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

### 문제 12. || 와 ??

**문제**

값이 **없으면**(`null` · `undefined`) `"없음"` 을, 있으면 그 값을 그대로 돌려주는 `withDefault(value)` 를 만드시오.
🔴 `0` 과 빈 글자 `""` 는 «있는 값»입니다 — 그대로 돌려줍니다.

**정답**

```js
function withDefault(value) {
  return value ?? "없음";
}
```

**해설**

`a || b` 는 `a` 가 **거짓 같은 값**(0 · "" · false · null · undefined · NaN)이면 `b` 입니다. `a ?? b` 는 `a` 가 **null · undefined 일 때만** `b` 입니다.
조회수 0 · 빈 제목처럼 «0 도 값»인 자리에는 `??` 를 쓰십시오.

**검사 항목** (2개)

1. null · undefined → "없음" · "김하나" → "김하나"
2. 0 → 0 · "" → "" · false → false (있는 값)

**흔한 오답** — 「0 → 0 · "" → "" · false → false (있는 값)」에서 걸립니다

`||` 로 기본값을 넣는 코드를 많이 봅니다. `||` 는 0 · "" · false 도 «없다»로 봅니다.

```js
function withDefault(value) {
  return value || "없음";
}
```

---

### 문제 13. 화살표 함수 · 숫자 꾸미기

**문제**

조회수를 받아 **세 자리마다 쉼표**를 넣고 `회` 를 붙인 글자를 돌려주는 `formatViews` 를 **화살표 함수**로 만드시오.
- `formatViews(1845)` → `"1,845회"`

**정답**

```js
const formatViews = (n) => n.toLocaleString("ko-KR") + "회";
```

**해설**

화살표 함수는 몸통이 **식 하나**이면 중괄호 없이 쓰고, 그 값이 자동으로 돌아갑니다. 중괄호를 쓰면 `return` 을 직접 적어야 합니다.
`toLocaleString("ko-KR")` 은 그 나라 방식으로 숫자를 꾸밉니다(세 자리 쉼표). 9일차 카드의 조회수가 이것입니다.

**검사 항목** (2개)

1. 1845 → "1,845회" · 920 → "920회"
2. 1234567 → "1,234,567회" · 0 → "0회"

**흔한 오답** — 「1845 → "1,845회" · 920 → "920회"」에서 걸립니다

중괄호를 쓰는 순간 «자동 return» 이 사라집니다. 계산은 하고 버려서 `undefined` 가 나옵니다(JS 2일차 🔴).

```js
const formatViews = (n) => { n.toLocaleString("ko-KR") + "회"; };
```

---

### 문제 14. 문자열 다듬기 — trim · toLowerCase

**문제**

검색어를 비교하기 좋게 다듬는 `cleanInput(s)` 를 만드시오 — **앞뒤 공백을 없애고 영어는 소문자로** 바꿉니다.
- `cleanInput("  Hello JS  ")` → `"hello js"`

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

### 문제 15. 문자열 자르기 — length · slice

**문제**

제목이 `max` 글자보다 **길면** 앞의 `max` 글자만 남기고 `…` 를 붙이고, 아니면 그대로 돌려주는 `shorten(title, max)` 를 만드시오.
- `shorten("폭설 주의보 발령", 5)` → `"폭설 주의…"` · `shorten("금리 동결", 5)` → `"금리 동결"`

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

### 문제 16. 숫자만 꺼내기 — parseInt 의 함정

**문제**

`"1,845회"` 처럼 쉼표와 글자가 섞인 조회수에서 숫자만 꺼내 **숫자**로 돌려주는 `parseViews(text)` 를 만드시오.
- `parseViews("1,845회")` → `1845`

**정답**

```js
function parseViews(text) {
  return Number(text.replace(/[^0-9]/g, ""));
}
```

**해설**

`parseInt` 는 앞에서부터 숫자를 읽다가 **숫자가 아닌 글자에서 멈춥니다** — `parseInt("1,845회")` 는 `1`. 크롤링한 글자에서 자주 걸립니다.
숫자가 아닌 것을 모두 지운 뒤(`replace(/[^0-9]/g, "")` 또는 `replaceAll(",", "").replace("회", "")`) `Number` 로 바꿉니다.

**검사 항목** (2개)

1. "1,845회" → 1845 · "1,234,567회" → 1234567
2. "920회" → 920 · "0회" → 0

**흔한 오답** — 「"1,845회" → 1845 · "1,234,567회" → 1234567」에서 걸립니다

`parseInt` 가 앞의 숫자를 알아서 읽어 줘서 편해 보입니다. 하지만 쉼표에서 멈춰 `1` 이 나옵니다.

```js
function parseViews(text) {
  return parseInt(text);
}
```

---

### 문제 17. 자리 맞추기 — padStart

**문제**

기사 번호를 **네 자리**로 맞춘 글자를 돌려주는 `padId(n)` 을 만드시오. 모자라는 자리는 앞에 `0` 을 채웁니다.
- `padId(7)` → `"0007"` · `padId(12345)` → `"12345"`(넘치면 그대로)

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

### 문제 18. 반올림 — Math.round

**문제**

수를 소수점 아래 `digits` 자리로 **반올림한 숫자**를 돌려주는 `roundTo(x, digits)` 를 만드시오.
- `roundTo(3.14159, 2)` → `3.14` · `roundTo(2.5, 0)` → `3`

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

**문제**

`min` 이상 `max` 이하의 **정수**를 무작위로 돌려주는 `randomInt(min, max)` 를 만드시오. 양 끝 값도 나와야 합니다.
(검사는 여러 번 불러 봅니다)

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

### 문제 20. 기본값 매개변수

**문제**

이름을 받아 인사말을 돌려주는 `greet(name)` 을 만드시오. 이름을 **안 주면** `"손님"` 으로 인사합니다.
- `greet("김하나")` → `"안녕하세요, 김하나님"` · `greet()` → `"안녕하세요, 손님님"`

**정답**

```js
function greet(name = "손님") {
  return `안녕하세요, ${name}님`;
}
```

**해설**

`function greet(name = "손님")` — 매개변수 자리에 `=` 로 **기본값**을 적으면, 인자가 없거나 `undefined` 일 때 그 값이 들어갑니다.
기본값이 없으면 `name` 은 `undefined` 이고, 템플릿 리터럴에 그대로 `"undefined"` 로 찍힙니다.

**검사 항목** (2개)

1. greet("김하나") → "안녕하세요, 김하나님"
2. greet() → "안녕하세요, 손님님"

**흔한 오답** — 「greet() → "안녕하세요, 손님님"」에서 걸립니다

JS 는 인자를 덜 줘도 오류가 나지 않습니다(2일차 🔴) — 빠진 인자는 `undefined` 가 되어 그대로 찍힙니다.

```js
function greet(name) {
  return `안녕하세요, ${name}님`;
}
```

---

### 문제 21. 나머지 매개변수 ...

**문제**

인자를 **몇 개든** 받아 모두 더한 값을 돌려주는 `sumAll` 을 만드시오. 하나도 안 주면 `0` 입니다.
- `sumAll(1, 2, 3)` → `6` · `sumAll()` → `0`

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

### 문제 23. 배열의 마지막

**문제**

배열의 **마지막 값**을 돌려주는 `lastItem(arr)` 를 만드시오. 빈 배열이면 `undefined` 입니다.

**정답**

```js
function lastItem(arr) {
  return arr[arr.length - 1];
}
```

**해설**

배열 번호는 **0 부터**라 길이가 `n` 이면 마지막은 `n - 1` 번입니다. 없는 번호를 꺼내면 오류가 아니라 `undefined` 입니다(그래서 틀려도 조용합니다).
요즘 JS 에서는 `arr.at(-1)` 로도 씁니다 — 음수는 뒤에서부터 셉니다.

**검사 항목** (2개)

1. [1, 2, 3] → 3 · ["금리"] → "금리"
2. [] → undefined

**흔한 오답** — 「[1, 2, 3] → 3 · ["금리"] → "금리"」에서 걸립니다

길이가 3 이면 마지막 칸도 3번이라고 생각하기 쉽습니다. 번호는 0 부터라 마지막은 `length - 1` 입니다.

```js
function lastItem(arr) {
  return arr[arr.length];
}
```

---

### 문제 24. 원본을 지키며 추가하기

**문제**

태그 배열 `tags` 에 `tag` 를 더한 **새 배열**을 돌려주는 `addTag(tags, tag)` 를 만드시오.
- 이미 들어 있는 태그면 더하지 않습니다
- 🔴 넘겨받은 `tags` 배열은 **바꾸지 않습니다**

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

### 문제 25. 구조 분해

**문제**

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

**정답**

```js
function describe(article) {
  const { title, section, author } = article;
  return `${title} — ${section} · ${author}`;
}
```

**해설**

`const { title, section } = article` 은 `const title = article.title` 을 여러 개 한 줄로 쓴 것입니다. **이름이 키와 같아야** 꺼내집니다.
매개변수 자리에서 바로 꺼낼 수도 있습니다 — `function describe({ title, section, author }) { … }`. React 의 props 가 늘 이 모양입니다.

**검사 항목** (2개)

1. news[0] → "금리 동결 — 경제 · 김하나"
2. news[7] → "AI 규제안 — IT · 이도윤"

**흔한 오답** — 「news[0] → "금리 동결 — 경제 · 김하나"」에서 걸립니다

구조 분해의 이름은 «객체의 키와 같아야» 합니다. 없는 키(`writer`)를 꺼내도 오류 없이 `undefined` 가 됩니다.

```js
function describe(article) {
  const { title, section, writer } = article;
  return `${title} — ${section} · ${writer}`;
}
```

---

## 중급

### 문제 26. 객체 전개로 바꾼 사본

**문제**

기사 객체와 새 조회수를 받아, 조회수만 바꾼 **새 객체**를 돌려주는 `withViews(article, views)` 를 만드시오. 넘겨받은 객체는 바꾸지 않습니다.

**정답**

```js
function withViews(article, views) {
  return { ...article, views };
}
```

**해설**

`{ ...article, views }` — 원래 객체를 펼쳐 **새 객체**를 만들고, 뒤에 쓴 `views` 가 같은 키를 덮어씁니다(`views` 는 `views: views` 를 줄여 쓴 것).
객체도 배열처럼 `=` 로는 복사되지 않습니다. React 에서 state 객체를 바꿀 때 쓰는 모양 그대로입니다.

**검사 항목** (2개)

1. 조회수만 바뀐 객체가 나온다
2. 넘겨준 객체는 그대로다 · 다른 객체다

**흔한 오답** — 「넘겨준 객체는 그대로다 · 다른 객체다」에서 걸립니다

값을 바꿔 돌려주면 결과는 맞습니다. 하지만 넘겨받은 객체가 «같은 객체»라 원본도 같이 바뀝니다.

```js
function withViews(article, views) {
  article.views = views;
  return article;
}
```

---

### 문제 27. = 는 복사가 아니다

**문제**

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

**정답** — ② `3`

**실제로 돌려 보면**

```text
3
```

**해설**

`const b = a` 는 배열을 **복사하지 않고**, 같은 배열에 이름을 하나 더 붙입니다. 그래서 `b` 로 넣은 `3` 이 `a` 에서도 보입니다(3일차 🔴).
`const` 가 막는 것은 **다시 담기**(`a = [...]`)이지, 안의 내용을 바꾸는 것이 아닙니다. 복사가 필요하면 `[...a]` 입니다.

**흔한 오답** — ①

`b` 를 고쳤으니 `a` 는 그대로일 것 같습니다. 하지만 `a` 와 `b` 는 «같은 배열 하나»를 가리킵니다.

---

### 문제 28. ?. 옵셔널 체이닝

**문제**

기사의 기자 이름(`article.author.name`)을 돌려주는 `authorName(article)` 을 만드시오. 기사나 기자 정보가 **없으면**(`undefined` · `null`) 오류 대신 `"알 수 없음"` 을 돌려줍니다.

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

**문제**

객체를 받아 `키=값` 을 `&` 로 이은 글자(주소 뒤에 붙는 질의 문자열)를 만드는 `toQuery(params)` 를 만드시오. 글자를 바꾸는(인코딩) 일은 하지 않습니다.
- `toQuery({ page: 2, size: 10 })` → `"page=2&size=10"` · `toQuery({})` → `""`

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

### 문제 30. map — 제목만 꺼내기

**문제**

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

**정답**

```js
function titles(list) {
  return list.map((a) => a.title);
}
```

**해설**

`map` 은 **넣은 만큼 나오는** 변환입니다 — 기사 8개를 넣으면 제목 8개. 화살표 함수가 돌려주는 값이 새 배열의 칸이 됩니다.
`forEach` 는 돌기만 하고 결과를 버립니다. 「바꾼 배열이 필요하면 `map`」.

**검사 항목** (2개)

1. news → 제목 8개(순서 그대로)
2. [] → []

**흔한 오답** — 「news → 제목 8개(순서 그대로)」에서 걸립니다

`forEach` 도 하나씩 돌지만 «아무것도 돌려주지 않습니다» — 결과는 `undefined` 입니다(4일차).

```js
function titles(list) {
  return list.forEach((a) => a.title);
}
```

---

### 문제 31. filter — 분야로 거르기

**문제**

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

**정답**

```js
function bySection(list, section) {
  return list.filter((a) => a.section === section);
}
```

**해설**

`filter` 는 화살표 함수가 `true` 를 돌려준 것만 남깁니다(**0개 ~ 전부**). 조건에는 비교 `===` 를 씁니다.
🔴 `a.section = section` 은 비교가 아니라 **담기**이고, 담은 값(글자)은 참처럼 굴어 모두 통과합니다. 원본 데이터까지 바뀌는 무서운 실수입니다.

**검사 항목** (3개)

1. "사회" → 3번 · 7번 기사
2. "IT" → 8번 · 없는 분야 → []
3. news 는 그대로다

**흔한 오답** — 「"사회" → 3번 · 7번 기사」에서 걸립니다

`===` 대신 `=` 를 쓰면 «비교»가 아니라 «담기»가 되어, 모든 기사가 통과하고 분야까지 바뀝니다.

```js
function bySection(list, section) {
  return list.filter((a) => a.section = section);
}
```

---

### 문제 32. find — 하나 찾기

**문제**

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

**정답**

```js
function findById(list, id) {
  return list.find((a) => a.id === id);
}
```

**해설**

`find` 는 조건에 맞는 **첫 번째 값 하나**를 돌려주고, 없으면 `undefined` 입니다. `filter` 는 늘 **배열**을 돌려줍니다(없으면 `[]`).
「목록이 필요한가, 하나가 필요한가」로 고르십시오. 상세 화면은 `find` 입니다.

**검사 항목** (2개)

1. 3 → 폭설 주의보 기사(객체 하나)
2. 99 → undefined

**흔한 오답** — 「3 → 폭설 주의보 기사(객체 하나)」에서 걸립니다

`filter` 로도 찾아지지만 결과가 «하나짜리 배열»입니다. `.title` 을 꺼내면 `undefined` 가 됩니다.

```js
function findById(list, id) {
  return list.filter((a) => a.id === id);
}
```

---

### 문제 33. some · every

**문제**

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

**정답**

```js
function checkViews(list, min) {
  return {
    some: list.some((a) => a.views >= min),
    every: list.every((a) => a.views >= min),
  };
}
```

**해설**

`some` 은 하나라도, `every` 는 전부 — 둘 다 **`true` / `false`** 를 돌려줍니다.
🔴 빈 배열에서 `every` 는 `true` 입니다. 「조건을 어긴 것이 하나도 없다」이기 때문입니다. 빈 목록을 따로 다뤄야 하는 화면이라면 길이를 먼저 보십시오.

**검사 항목** (3개)

1. min 3000 → { some: true, every: false }
2. min 800 → { some: true, every: true } · min 5000 → 둘 다 false
3. 빈 배열 → { some: false, every: true }

**흔한 오답** — 「min 3000 → { some: true, every: false }」에서 걸립니다

`find` 도 «있으면 뭔가 나오니» 참처럼 쓸 수 있어 보입니다. 하지만 나오는 것은 `true` 가 아니라 기사 객체입니다.

```js
function checkViews(list, min) {
  return {
    some: list.find((a) => a.views >= min),
    every: list.every((a) => a.views >= min),
  };
}
```

---

### 문제 34. reduce — 합계

**문제**

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

**정답**

```js
function totalViews(list) {
  return list.reduce((sum, a) => sum + a.views, 0);
}
```

**해설**

`reduce((누적, 값) => 새 누적, 시작값)` — 배열을 **하나로 합칩니다**. 함수가 돌려준 값이 다음 칸의 누적이 됩니다.
🔴 **시작값(`0`)을 꼭 쓰십시오.** 없으면 첫 칸이 시작값이 되는데, 빈 배열에는 첫 칸이 없어 오류가 납니다. 객체 배열이면 첫 칸이 «객체»라 계산도 틀어집니다.

**검사 항목** (2개)

1. news → 15570
2. [] → 0

**흔한 오답** — 「[] → 0」에서 걸립니다

시작값을 빼도 기사가 있으면 잘 돕니다. 빈 배열에서 `Reduce of empty array with no initial value` 로 멈춥니다.

```js
function totalViews(list) {
  return list.map((a) => a.views).reduce((sum, v) => sum + v);
}
```

---

### 문제 35. sort — 원본을 지키며

**문제**

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

**정답**

```js
function sortByViews(list) {
  return [...list].sort((a, b) => b.views - a.views);
}
```

**해설**

🔴 `sort` 는 **원본을 고칩니다**(4일차). 새 배열이 필요하면 `[...list]` 로 복사한 뒤 정렬합니다(요즘 JS 는 `list.toSorted(…)` 도 있습니다).
비교 함수 `(a, b) => b.views - a.views` 는 결과가 양수면 `b` 를 앞으로 — 즉 **큰 것부터**입니다. `a.views - b.views` 는 작은 것부터.

**검사 항목** (2개)

1. 많은 순 — 3 · 4 · 8 · 5 · 1 · 6 · 2 · 7번
2. news 의 순서는 그대로다

**흔한 오답** — 「news 의 순서는 그대로다」에서 걸립니다

결과는 완벽합니다. 하지만 `sort` 가 `news` 자체를 줄 세워, 다른 곳에서 쓰던 «원래 순서»가 사라집니다.

```js
function sortByViews(list) {
  return list.sort((a, b) => b.views - a.views);
}
```

---

### 문제 36. sort 의 기본은 글자순

**문제**

다음 코드는 무엇을 찍습니까?
```js
console.log([10, 9, 1, 100].sort());
```

① `[1, 9, 10, 100]`  
② `[100, 10, 9, 1]`  
③ `[1, 10, 100, 9]`  
④ `[10, 9, 1, 100]` — 숫자는 비교 함수 없이 정렬하지 않는다

**정답** — ③ `[1, 10, 100, 9]`

**실제로 돌려 보면**

```text
[1, 10, 100, 9]
```

**해설**

비교 함수 없는 `sort()` 는 값을 **문자열로 바꿔 사전 순서**로 정렬합니다. `"10"` 이 `"9"` 보다 앞입니다(첫 글자 `1` < `9`). 그래서 `[1, 10, 100, 9]`.
숫자는 **언제나** `sort((a, b) => a - b)` 처럼 비교 함수를 주십시오.

**흔한 오답** — ①

숫자 배열이니 숫자 크기대로 줄 설 것 같습니다. 비교 함수가 없으면 모두 «글자»로 바꿔 사전 순서로 세웁니다.

---

### 문제 37. 숫자 정렬

**문제**

숫자 배열을 **작은 수부터** 정렬한 새 배열을 돌려주는 `sortNumbers(nums)` 를 만드시오. 넘겨받은 배열은 바꾸지 않습니다.

**정답**

```js
function sortNumbers(nums) {
  return [...nums].sort((a, b) => a - b);
}
```

**해설**

`(a, b) => a - b` — 결과가 음수면 `a` 가 앞, 양수면 `b` 가 앞입니다. 그래서 작은 수부터 섭니다.
복사(`[...nums]`)를 먼저 하는 이유는 35번과 같습니다.

**검사 항목** (2개)

1. [10, 9, 1, 100] → [1, 9, 10, 100]
2. [3, -2, 0] → [-2, 0, 3] · 넘겨준 배열은 그대로

**흔한 오답** — 「[10, 9, 1, 100] → [1, 9, 10, 100]」에서 걸립니다

36번의 함정입니다 — `[3, 1, 2]` 처럼 한 자리 수로만 시험하면 맞게 나옵니다.

```js
function sortNumbers(nums) {
  return [...nums].sort();
}
```

---

### 문제 38. 이어 쓰기 — 상위 n개

**문제**

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

**정답**

```js
function topTitles(list, n) {
  return [...list]
    .sort((a, b) => b.views - a.views)
    .slice(0, n)
    .map((a) => a.title);
}
```

**해설**

메서드는 **이어 쓸** 수 있습니다 — 앞 메서드가 돌려준 배열에 다음 메서드를 부릅니다. 줄을 바꿔 쓰면 읽기 쉽습니다.
순서: 줄 세우고(`sort`) → 잘라서(`slice(0, n)`) → 모양 바꾸기(`map`). 모양을 먼저 바꾸면 정렬에 필요한 `views` 가 사라집니다.

**검사 항목** (2개)

1. news, 3 → 폭설 주의보 · 야구 개막 · AI 규제안
2. news, 1 → [폭설 주의보] · 넘겨준 배열은 그대로

**흔한 오답** — 「news, 3 → 폭설 주의보 · 야구 개막 · AI 규제안」에서 걸립니다

메서드를 이을 때 순서가 중요합니다. 제목만 남긴 «뒤»에는 `views` 가 없어 정렬이 아무 일도 안 합니다.

```js
function topTitles(list, n) {
  return [...list]
    .map((a) => a.title)
    .sort((a, b) => b.views - a.views)
    .slice(0, n);
}
```

---

### 문제 39. 분야별 개수 세기

**문제**

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

**정답**

```js
function countBySection(list) {
  const counts = {};
  for (const a of list) {
    counts[a.section] = (counts[a.section] ?? 0) + 1;
  }
  return counts;
}
```

**해설**

객체를 «칸이 이름으로 된 계산기»로 씁니다. `counts[a.section]` — 대괄호 안의 **값**이 키가 됩니다(`counts.section` 은 `"section"` 이라는 키).
처음 보는 분야는 `undefined` 라서 `?? 0` 으로 0 부터 셉니다. `reduce` 로도 쓸 수 있습니다 — 9일차에서 표의 숫자를 이렇게 «세어서» 만들었습니다.

**검사 항목** (2개)

1. news → { 경제: 2, 문화: 1, 사회: 2, 스포츠: 1, 정치: 1, IT: 1 }
2. [] → {}

**흔한 오답** — 「news → { 경제: 2, 문화: 1, 사회: 2, 스포츠: 1, 정치: 1, IT: 1 }」에서 걸립니다

처음 나온 분야는 아직 값이 없어(`undefined`) `+ 1` 하면 `NaN` 이 됩니다.

```js
function countBySection(list) {
  const counts = {};
  for (const a of list) {
    counts[a.section] += 1;
  }
  return counts;
}
```

---

### 문제 40. Set — 중복 없애기

**문제**

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

**정답**

```js
function uniqueAuthors(list) {
  return [...new Set(list.map((a) => a.author))];
}
```

**해설**

`Set` 은 **같은 값을 한 번만** 담는 상자입니다. 넣은 순서는 지킵니다. `[...new Set(배열)]` 은 「중복을 없앤 배열」의 관용구입니다.
`Set` 에는 `map` · `filter` 가 없으니 쓸 일이 있으면 배열로 펼치십시오.

**검사 항목** (2개)

1. news → 기자 5명(처음 나온 순서)
2. [] → []

**흔한 오답** — 「news → 기자 5명(처음 나온 순서)」에서 걸립니다

`Set` 으로 중복은 사라졌지만 «배열»이 아닙니다 — `.map` · `[0]` 이 안 됩니다. 배열로 다시 펼쳐야 합니다.

```js
function uniqueAuthors(list) {
  return new Set(list.map((a) => a.author));
}
```

---

### 문제 41. null 이 섞인 평균

**문제**

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

**정답**

```js
function averageViews(list) {
  const counted = list.filter((a) => a.views !== null);
  if (counted.length === 0) return 0;
  const sum = counted.reduce((s, a) => s + a.views, 0);
  return Math.round(sum / counted.length);
}
```

**해설**

🔴 `null` 은 더하기에서 `0` 처럼 굴어 **합계는 그대로**입니다. 틀리는 것은 평균의 분모 — 9건으로 나누면 1730 이 됩니다. 「없는 값」을 먼저 걸러 내고 셉니다.
0 으로 나누면 `NaN` 이므로 셀 것이 없을 때를 먼저 처리합니다.

**검사 항목** (3개)

1. news → 1946
2. null 이 섞여도 → 1946 (null 기사는 빼고 8건으로 나눈다)
3. [] → 0 · 전부 null → 0

**흔한 오답** — 「null 이 섞여도 → 1946 (null 기사는 빼고 8건으로 나눈다)」에서 걸립니다

합계는 같게 나옵니다(`null` 은 더하기에서 0 처럼 굽니다). 틀리는 것은 «나누는 수» — 못 센 기사까지 세어 평균이 낮아집니다(4일차).

```js
function averageViews(list) {
  if (list.length === 0) return 0;
  const sum = list.reduce((s, a) => s + a.views, 0);
  return Math.round(sum / list.length);
}
```

---

### 문제 42. flatMap — 겹친 배열 펴기

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

**문제**

부를 때마다 1, 2, 3 … 을 돌려주는 **함수를 만들어 돌려주는** `makeCounter()` 를 만드시오. 만든 계수기끼리는 **따로** 셉니다.
```js
const a = makeCounter();
a(); // 1
a(); // 2
const b = makeCounter();
b(); // 1
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

**문제**

배열 안에 배열이 **몇 겹이든** 들어 있을 때, 모든 숫자의 합을 돌려주는 `sumNested(arr)` 를 만드시오.
- `sumNested([1, [2, [3, [4]]], 5])` → `15`

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

### 문제 45. DOM — 글자 바꾸기

**문제**

JS 로 화면의 글자를 바꾸시오.
- 제목(`#title`) → `오늘의 뉴스`
- 설명(`.desc`) → `8건의 기사`

**HTML (고정)**

```html
<h1 id="title">제목</h1>
<p class="desc">설명</p>
```

**정답**

```js
document.querySelector("#title").textContent = "오늘의 뉴스";
document.querySelector(".desc").textContent = "8건의 기사";
```

**해설**

`document.querySelector(선택자)` 는 CSS 선택자 그대로 **첫 번째 요소**를 잡습니다 — id 는 `#`, class 는 `.`. 못 찾으면 `null` 입니다.
`textContent` 에 담으면 그 요소의 글자가 바뀝니다.

**검사 항목** (2개)

1. 제목이 「오늘의 뉴스」
2. 설명이 「8건의 기사」

**흔한 오답** — 「제목이 「오늘의 뉴스」」에서 걸립니다

선택자의 `#` · `.` 를 빠뜨리면 그 이름의 «태그»를 찾습니다. 못 찾으면 `null` 이고, 거기에 글자를 넣다 멈춥니다(5일차 「가장 많이 볼 오류」).

```js
document.querySelector("title").textContent = "오늘의 뉴스";
document.querySelector("desc").textContent = "8건의 기사";
```

---

### 문제 46. DOM — 조건에 맞는 것에 class

**문제**

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

**정답**

```js
document.querySelectorAll(".item").forEach((li) => {
  if (Number(li.dataset.views) >= 2000) li.classList.add("hot");
});
```

**해설**

`querySelectorAll` 은 맞는 요소를 **모두** 잡고 `forEach` 로 돌 수 있습니다(5일차: 배열처럼 생겼지만 배열은 아님).
`data-views` 는 `dataset.views` 로 읽고, 늘 **문자열**이라 `Number` 로 바꿔 비교합니다. `classList.add` · `remove` · `toggle` 로 class 를 다룹니다.

**검사 항목** (2개)

1. 폭설 주의보(3120) · 국회 본회의(2102)에 hot
2. 신작 개봉(920) · 금리 동결(1845)에는 없다

**흔한 오답** — 「신작 개봉(920) · 금리 동결(1845)에는 없다」에서 걸립니다

`data-` 값은 언제나 «글자»입니다. 글자끼리 비교하면 사전 순서라 `"920" >= "2000"` 이 참이 됩니다(첫 글자 9 > 2).

```js
document.querySelectorAll(".item").forEach((li) => {
  if (li.dataset.views >= "2000") li.classList.add("hot");
});
```

---

### 문제 47. 배열을 화면으로 — 그리기 함수

**문제**

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

**정답**

```js
function render(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";
  for (const a of list) {
    const li = document.createElement("li");
    li.textContent = a.title;
    ul.append(li);
  }
}

render(news);
```

**해설**

「그리기 = **비우고 · 그린다**」(5일차). 그리는 함수는 늘 지금 데이터로 **처음부터** 그려야, 몇 번 불러도 화면이 데이터와 같습니다.
`createElement` 로 만들고 → `textContent` 로 채우고 → `append` 로 붙이는 세 줄이 한 벌입니다.

**검사 항목** (3개)

1. 기사 8건이 제목으로, 순서대로 그려진다
2. 다시 render(news) 를 불러도 8건
3. render(news.slice(0, 2)) → 2건 · render([]) → 0건

**흔한 오답** — 「다시 render(news) 를 불러도 8건」에서 걸립니다

한 번 그릴 때는 완벽합니다. 검색 · 정렬로 다시 부르는 순간 목록이 두 배가 됩니다(5일차 「두 번 부르면」).

```js
function render(list) {
  const ul = document.querySelector("#list");
  for (const a of list) {
    const li = document.createElement("li");
    li.textContent = a.title;
    ul.append(li);
  }
}

render(news);
```

---

### 문제 48. textContent 와 innerHTML

**문제**

주어진 `title` 을 `#headline` 에 **글자 그대로** 넣으시오. 화면에 `<b>속보</b> 폭설 주의보` 가 꺾쇠까지 그대로 보여야 하고, 굵은 글씨(`<b>` 요소)가 생기면 안 됩니다.

**HTML (고정)**

```html
<h2 id="headline"></h2>
```

**주어진 JS** — 이미 들어 있습니다(같은 이름을 다시 선언하지 마십시오)

```js
const title = "<b>속보</b> 폭설 주의보";
```

**정답**

```js
document.querySelector("#headline").textContent = title;
```

**해설**

`textContent` 는 **글자로** 넣고, `innerHTML` 은 **HTML 로 읽어** 요소를 만듭니다.
🔴 사용자 · 서버에서 온 글을 `innerHTML` 로 넣으면 그 안의 `<script>` · `<img onerror=…>` 가 실행될 수 있습니다(XSS). 데이터는 `textContent` — 5일차 「제목에 태그가 들어 있으면」.

**검사 항목** (2개)

1. 글자가 그대로 들어갔다
2. <b> 요소가 생기지 않았다

**흔한 오답** — 「<b> 요소가 생기지 않았다」에서 걸립니다

`innerHTML` 도 글자를 넣는 것처럼 보입니다. 하지만 꺾쇠를 «태그»로 읽어 실제 요소를 만듭니다 — 남이 쓴 글이면 위험합니다.

```js
document.querySelector("#headline").innerHTML = title;
```

---

### 문제 49. 클릭 이벤트 — 좋아요

**문제**

버튼(`#like`)을 누를 때마다 숫자가 1씩 올라가게 하시오 — `좋아요 1`, `좋아요 2` …

**HTML (고정)**

```html
<button id="like">좋아요 0</button>
```

**정답**

```js
let likes = 0;
const button = document.querySelector("#like");
button.addEventListener("click", () => {
  likes++;
  button.textContent = `좋아요 ${likes}`;
});
```

**해설**

`addEventListener("click", 함수)` — 누를 때마다 그 함수가 불립니다. 누른 횟수처럼 **계속 남아야 하는 값**은 함수 **바깥**에 둡니다(43번의 클로저).
안에 두면 불릴 때마다 새로 만들어져 0 에서 시작합니다.

**검사 항목** (2개)

1. 한 번 누르면 「좋아요 1」
2. 세 번 누르면 「좋아요 3」

**흔한 오답** — 「세 번 누르면 「좋아요 3」」에서 걸립니다

한 번 눌러 보면 `좋아요 1` 로 잘 됩니다. 숫자 변수를 이벤트 함수 «안»에 두면 누를 때마다 0 에서 다시 시작합니다.

```js
const button = document.querySelector("#like");
button.addEventListener("click", () => {
  let likes = 0;
  likes++;
  button.textContent = `좋아요 ${likes}`;
});
```

---

### 문제 50. input 이벤트 — 글자 수 세기

**문제**

입력칸(`#q`)에 **글자를 칠 때마다** 아래(`#count`)에 지금 글자 수를 `N자` 로 보여 주시오.

**HTML (고정)**

```html
<input id="q" placeholder="검색어">
<p id="count">0자</p>
```

**정답**

```js
const input = document.querySelector("#q");
const count = document.querySelector("#count");
input.addEventListener("input", () => {
  count.textContent = `${input.value.length}자`;
});
```

**해설**

`input` 이벤트는 **값이 바뀔 때마다**(한 글자마다) 일어납니다. `change` 는 다 친 뒤 칸을 떠날 때 한 번입니다(6일차 「언제 읽을 것인가」).
입력칸의 값은 `input.value` — 언제나 **문자열**입니다.

**검사 항목** (2개)

1. 「폭설」을 치면 「2자」
2. 다 지우면 「0자」

**흔한 오답** — 「「폭설」을 치면 「2자」」에서 걸립니다

`change` 도 값이 바뀔 때 같지만, 칠 때마다가 아니라 «칸을 떠날 때(또는 Enter)» 한 번 일어납니다.

```js
const input = document.querySelector("#q");
const count = document.querySelector("#count");
input.addEventListener("change", () => {
  count.textContent = `${input.value.length}자`;
});
```

---

## 고급

### 문제 51. 이벤트 위임

**문제**

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

**정답**

```js
const list = document.querySelector("#list");
const picked = document.querySelector("#picked");
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  picked.textContent = `고른 기사: ${li.dataset.id}`;
});
```

**해설**

클릭은 누른 요소에서 **위로 번져** 올라갑니다(버블링). 그래서 부모(`#list`)에 한 번만 걸어도 어느 항목이 눌렸는지 `e.target` 으로 알 수 있습니다 — **이벤트 위임**(6일차).
`e.target.closest("li")` 는 누른 곳에서 위로 올라가며 가장 가까운 `li` 를 찾습니다(항목 안에 `<b>` 같은 것이 있어도 안전). 목록을 다시 그려도 이벤트를 다시 걸 필요가 없습니다.

**검사 항목** (2개)

1. 3번 항목을 누르면 「고른 기사: 3」
2. 새로 붙인 항목(4번)을 눌러도 「고른 기사: 4」

**흔한 오답** — 「새로 붙인 항목(4번)을 눌러도 「고른 기사: 4」」에서 걸립니다

지금 있는 항목에는 다 걸려서 잘 됩니다. 나중에 그려 넣은 항목에는 아무도 이벤트를 걸어 주지 않았습니다.

```js
const picked = document.querySelector("#picked");
document.querySelectorAll("#list li").forEach((li) => {
  li.addEventListener("click", () => {
    picked.textContent = `고른 기사: ${li.dataset.id}`;
  });
});
```

---

### 문제 52. 폼 제출 — preventDefault

**문제**

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

**정답**

```js
const form = document.querySelector("#search");
const result = document.querySelector("#result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.querySelector("#q").value.trim();
  result.textContent = q ? `「${q}」 검색` : "검색어를 입력하세요";
});
```

**해설**

폼은 제출되면 **페이지를 새로 엽니다**(기본 동작). JS 로 처리할 때는 `submit` 이벤트에서 `e.preventDefault()` 로 막습니다.
버튼의 `click` 이 아니라 폼의 `submit` 에 거는 이유 — Enter 로 제출해도 똑같이 잡힙니다.

**검사 항목** (3개)

1. 제출을 막았다 (preventDefault)
2. 「  금리 」 → 「금리」 검색
3. 빈칸(공백만) → 「검색어를 입력하세요」

**흔한 오답** — 「제출을 막았다 (preventDefault)」에서 걸립니다

글자는 잘 바뀝니다 — 단, 한순간만. 진짜 브라우저에서는 바로 새로 고쳐져 다 사라집니다(6일차 🔴).

```js
const form = document.querySelector("#search");
const result = document.querySelector("#result");
form.addEventListener("submit", (e) => {
  const q = document.querySelector("#q").value.trim();
  result.textContent = q ? `「${q}」 검색` : "검색어를 입력하세요";
});
```

---

### 문제 53. 실행 순서

**문제**

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

**정답** — ③ `1 4 3 2`

**실제로 돌려 보면**

```text
1
4
3
2
```

**해설**

일꾼은 **하나**입니다(7일차). 지금 줄을 다 돈 뒤에야 기다리던 일을 봅니다 — 그래서 `1`, `4` 가 먼저.
기다리던 일 중에서는 **Promise 의 then 이 setTimeout 보다 먼저**입니다(마이크로태스크가 먼저). 그래서 `3`, 그다음 `2`.

**흔한 오답** — ②

`setTimeout` 이 0ms 라 바로 될 것 같고, 위에 적혀 있으니 먼저일 것 같습니다.

---

### 문제 54. 기다리는 함수 만들기 — Promise

**문제**

`ms` 밀리초 뒤에 끝나는 **Promise** 를 돌려주는 `sleep(ms)` 를 만드시오. `await sleep(1000)` 처럼 쓸 수 있어야 합니다.

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

### 문제 56. fetch — await 가 두 번

**문제**

`news.json` 을 받아(`fetch`) **제목 배열**을 돌려주는 `async` 함수 `loadTitles()` 를 만드시오.
(이 연습장의 `fetch` 는 인터넷 대신 위 「가짜 서버」 표대로 답합니다)

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `news.json` | 200 · JSON 배열 8건 |

**정답**

```js
async function loadTitles() {
  const res = await fetch("news.json");
  const data = await res.json();
  return data.map((a) => a.title);
}
```

**해설**

`fetch` 는 **두 번** 기다립니다(8일차) — ① 응답(머리)이 오기를 `await fetch(…)`, ② 몸통을 JSON 으로 읽기를 `await res.json()`.
괄호로 묶어 `(await fetch(url)).json()` 이라고도 쓸 수 있지만, 두 줄이 읽기 쉽고 오류를 찾기도 쉽습니다.

**검사 항목** (2개)

1. 제목 8개를 돌려준다
2. news.json 을 받았다

**흔한 오답** — 「제목 8개를 돌려준다」에서 걸립니다

한 줄로 줄이고 싶어집니다. 하지만 `fetch(…)` 가 돌려주는 것은 Promise 라 `.json()` 이 없습니다 — 먼저 기다려 응답을 받아야 합니다.

```js
async function loadTitles() {
  const data = await fetch("news.json").json();
  return data.map((a) => a.title);
}
```

---

### 문제 57. fetch 오류 처리 — res.ok 와 try/catch

**문제**

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
화면에서는 이 두 실패를 사용자에게 다르게 알려야 합니다(「잠시 뒤 다시」 vs 「없는 기사」).

**검사 항목** (3개)

1. news.json → { ok: true, data: [기사 2건] }
2. 없는 주소 → { ok: false, error: "HTTP 404" } · broken.json → "HTTP 500"
3. down.json(네트워크 오류) → { ok: false, error: "네트워크 오류" }

**흔한 오답** — 「없는 주소 → { ok: false, error: "HTTP 404" } · broken.json → "HTTP 500"」에서 걸립니다

`try/catch` 로 감싸면 다 잡힐 것 같습니다. 하지만 🔴 `fetch` 는 404 · 500 에도 «성공»합니다 — 몸통을 JSON 으로 읽다 실패해 엉뚱한 «네트워크 오류»가 됩니다.

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

### 문제 58. Promise.all — 한꺼번에

**문제**

주소 배열을 받아 **모두 한꺼번에** 받아온 JSON 을 **같은 순서의 배열**로 돌려주는 `async` 함수 `loadAll(urls)` 를 만드시오.
가짜 서버는 주소마다 150ms 씩 걸립니다 — 셋을 **하나씩** 받으면 450ms, **한꺼번에** 받으면 150ms 쯤입니다. 한꺼번에 받으십시오.

**가짜 서버** — `fetch` 는 인터넷 대신 이 표대로 답합니다. 그 밖의 주소는 404

| 주소 | 답 |
| --- | --- |
| `a.json` | 200 · JSON 1 · 150ms 뒤 |
| `b.json` | 200 · JSON 2 · 150ms 뒤 |
| `c.json` | 200 · JSON 3 · 150ms 뒤 |

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

결과는 같습니다. 하지만 하나가 끝나야 다음을 시작해서 주소가 늘수록 기다리는 시간이 쌓입니다(7일차 「하나씩 vs 한꺼번에」).

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

### 문제 59. 종합 — 받아서 그리기 (로딩 · 성공 · 실패)

**문제**

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

**정답**

```js
async function start() {
  const status = document.querySelector("#status");
  const list = document.querySelector("#list");
  status.textContent = "불러오는 중…";
  const res = await fetch("news.json");
  if (!res.ok) {
    status.textContent = `불러오지 못했습니다 (HTTP ${res.status})`;
    return;
  }
  const data = await res.json();
  const sorted = [...data].sort((a, b) => b.views - a.views);
  list.innerHTML = "";
  for (const a of sorted) {
    const li = document.createElement("li");
    li.textContent = a.title;
    list.append(li);
  }
  status.textContent = `${data.length}건`;
}

start();
```

**해설**

9일차의 한 바퀴입니다 — **받고(fetch) → 확인하고(res.ok) → 바꾸고(sort) → 그린다(비우고 · 그린다)**. 그리고 화면에는 상태가 셋입니다: 로딩 · 성공 · 실패.
🔴 실패를 **화면에** 알리지 않으면 사용자는 「불러오는 중…」만 보며 기다립니다. 콘솔의 빨간 줄은 사용자에게 안 보입니다.

**검사 항목** (3개)

1. 받는 동안 「불러오는 중…」
2. 성공 — 조회수 많은 순 8건 · 「8건」
3. 실패(500) — 「불러오지 못했습니다 (HTTP 500)」

**흔한 오답** — 「실패(500) — 「불러오지 못했습니다 (HTTP 500)」」에서 걸립니다

성공만 시험하면 완벽합니다. 서버가 500 을 주면 몸통(「서버 오류」)을 JSON 으로 읽다 멈추고, 화면은 「불러오는 중…」에 영원히 머뭅니다.

```js
async function start() {
  const status = document.querySelector("#status");
  const list = document.querySelector("#list");
  status.textContent = "불러오는 중…";
  const res = await fetch("news.json");
  const data = await res.json();
  const sorted = [...data].sort((a, b) => b.views - a.views);
  list.innerHTML = "";
  for (const a of sorted) {
    const li = document.createElement("li");
    li.textContent = a.title;
    list.append(li);
  }
  status.textContent = `${data.length}건`;
}

start();
```

---

### 문제 60. 종합 — 실시간 검색

**문제**

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

**정답**

```js
const list = document.querySelector("#list");
const count = document.querySelector("#count");

function render(items) {
  list.innerHTML = "";
  for (const a of items) {
    const li = document.createElement("li");
    li.textContent = a.title;
    list.append(li);
  }
  count.textContent = `${items.length}건`;
}

document.querySelector("#q").addEventListener("input", (e) => {
  const q = e.target.value.trim();
  render(news.filter((a) => a.title.includes(q)));
});

document.querySelector("#search").addEventListener("submit", (e) => e.preventDefault());

render(news);
```

**해설**

**데이터는 그대로 두고, 화면만 매번 다시 그립니다.** 검색어가 바뀌면 원본 `news` 에서 거른 결과로 `render` 를 부를 뿐입니다 — 걸러 낸 결과로 `news` 를 덮어쓰면 지운 검색어를 되돌릴 수 없습니다.
`includes("")` 는 언제나 `true` 라서 빈 검색어는 저절로 「전부」가 됩니다. 이 모양(상태 → 거르기 → 그리기)이 React 에서 그대로 이어집니다.

**검사 항목** (5개)

1. 처음 — 8건 · 「8건」
2. 「주의」 → 폭설 주의보 1건 · 「1건」
3. 「  금리 」(앞뒤 공백) → 금리 동결 1건
4. 없는 말 → 0건 · 다 지우면 다시 8건
5. 제출(Enter)을 막았다

**흔한 오답** — 「「  금리 」(앞뒤 공백) → 금리 동결 1건」에서 걸립니다

손으로 칠 때는 공백을 잘 안 넣어서 잘 됩니다. 앞뒤에 공백이 붙은 검색어(복사 · 붙여넣기)는 한 건도 안 맞습니다.

```js
const list = document.querySelector("#list");
const count = document.querySelector("#count");

function render(items) {
  list.innerHTML = "";
  for (const a of items) {
    const li = document.createElement("li");
    li.textContent = a.title;
    list.append(li);
  }
  count.textContent = `${items.length}건`;
}

document.querySelector("#q").addEventListener("input", (e) => {
  render(news.filter((a) => a.title.includes(e.target.value)));
});

document.querySelector("#search").addEventListener("submit", (e) => e.preventDefault());

render(news);
```

---
