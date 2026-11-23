# HTML/CSS 연습 답안지 (해설 포함)

> 총 **40문제** — 초급 15 · 중급 17 · 고급 8 (코드 작성 35 · 고르기 5)
>
> 같은 화면을 그리는 다른 코드도 정답입니다. 채점은 쓴 방법이 아니라 **그려진 결과**(계산된 스타일 · 위치와 크기 · 구조)를 잽니다.
> 아래 정답은 모두 실제 Chrome 에서 검사를 전부 통과하고, 「흔한 오답」은 적힌 검사에서 실제로 걸리는 것을 확인한 것입니다.

## 빠른 찾기

- **초급**: 1~15번
- **중급**: 16~32번
- **고급**: 33~40번

---

## 초급

### 문제 1. 문서 뼈대

**문제**

다음 조건을 지키는 HTML 문서를 **처음부터** 작성하시오.
- 문서 형식 선언(`<!DOCTYPE html>`)
- 언어는 한국어(`lang="ko"`)
- 문자 인코딩은 UTF-8
- 탭에 보이는 제목은 `오늘의 뉴스`
- 본문에 `h1` 하나: `오늘의 뉴스`

**정답**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>오늘의 뉴스</title>
</head>
<body>
  <h1>오늘의 뉴스</h1>
</body>
</html>
```

**해설**

`<!DOCTYPE html>` 은 「이 문서는 지금의 HTML 규칙으로 그려 달라」는 표시입니다. 빠뜨려도 글자는 똑같이 보여서 알아차리기 어렵지만, 브라우저가 **호환 모드**로 그려 상자 크기 계산 같은 것이 옛날 방식이 됩니다.
`<meta charset="utf-8">` 이 없으면 서버 설정에 따라 한글이 깨질 수 있습니다. `<head>` 의 맨 앞쪽에 둡니다.

**검사 항목** (5개)

1. 맨 첫 줄이 문서 형식 선언(<!DOCTYPE html>)
2. html 의 lang 이 ko
3. meta charset 이 utf-8
4. 탭 제목이 「오늘의 뉴스」
5. 본문의 h1 이 「오늘의 뉴스」 하나

**흔한 오답** — 「맨 첫 줄이 문서 형식 선언(<!DOCTYPE html>)」에서 걸립니다

화면은 똑같이 나와서 빠뜨린 줄 모릅니다. 선언이 없으면 브라우저가 옛날 규칙(호환 모드)으로 그려 박스 크기 계산이 달라집니다.

```html
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>오늘의 뉴스</title>
</head>
<body>
  <h1>오늘의 뉴스</h1>
</body>
</html>
```

---

### 문제 2. 시맨틱 배치

**문제**

뉴스 사이트의 큰 틀을 **이름이 있는 상자**(시맨틱 태그)로 만드시오.
- `body` 바로 아래에 차례대로 **머리 · 메뉴 · 본문 · 바닥** 네 상자
- 상자마다 안에 글자를 아무거나 넣을 것 (예: `오늘의 뉴스`, `정치 경제 사회`, `기사 목록`, `© 오늘의 뉴스`)

**정답**

```html
<header>오늘의 뉴스</header>
<nav>정치 경제 사회</nav>
<main>기사 목록</main>
<footer>© 오늘의 뉴스</footer>
```

**해설**

`div` 로 다 만들어도 화면은 같습니다. 그런데 `<div class="header">` 의 `header` 는 **사람만** 읽는 이름이고, `<header>` 는 **브라우저 · 화면 읽기 프로그램 · 검색 엔진**도 읽는 이름입니다.
`nav` 를 `header` 안에 넣는 것도 흔하고 틀린 것은 아니지만, 이 문제는 「body 바로 아래 네 개」를 요구합니다.

**검사 항목** (2개)

1. body 바로 아래가 header → nav → main → footer
2. 네 상자 모두 안에 글자가 있다

**흔한 오답** — 「body 바로 아래가 header → nav → main → footer」에서 걸립니다

화면은 똑같습니다. 하지만 class 이름은 사람만 읽고, 화면 읽기 프로그램 · 검색 엔진은 태그 이름을 읽습니다.

```html
<div class="header">오늘의 뉴스</div>
<div class="nav">정치 경제 사회</div>
<div class="main">기사 목록</div>
<div class="footer">© 오늘의 뉴스</div>
```

---

### 문제 3. strong 과 b

**문제**

기사 본문에서 「**오늘 오후 3시부터 운행 중단**」은 독자가 꼭 알아야 할 **중요한 내용**이라 굵게 보이게 하려 합니다. 가장 알맞은 것은?

① `<b>` — 굵게 보이기만 하면 된다  
② `<strong>` — 「중요하다」는 뜻을 담는다  
③ `<h3>` — 크고 굵게 보인다  
④ `<br>` 으로 앞뒤를 끊어 눈에 띄게 한다

**정답** — ② `<strong>` — 「중요하다」는 뜻을 담는다

**해설**

`<b>` 와 `<strong>` 은 **화면이 같습니다**. 다른 것은 뜻입니다 — `<strong>` 은 「중요하다」를 담아 화면 읽기 프로그램이 힘주어 읽고, `<b>` 는 「굵게 보일 뿐」입니다.
`<h3>` 은 **제목**이라 문서의 목차(구조)가 바뀌고, `<br>` 은 줄을 바꿀 뿐 강조가 아닙니다.

**흔한 오답** — ①

화면에서는 `<b>` 와 `<strong>` 이 똑같이 굵습니다. 그래서 짧은 `<b>` 를 고르기 쉽습니다.

---

### 문제 4. 순위 목록

**문제**

「많이 본 기사」 1~3위를 **순서가 있는 목록**으로 만드시오. 항목은 차례대로 `금리 동결`, `신작 개봉`, `폭설 주의보` 입니다.

**정답**

```html
<ol>
  <li>금리 동결</li>
  <li>신작 개봉</li>
  <li>폭설 주의보</li>
</ol>
```

**해설**

`ul` 은 순서 없는 목록(점), `ol` 은 **순서가 있는** 목록(번호)입니다. 번호를 글자로 직접 쓰지 않아도 `ol` 이 1, 2, 3 을 붙여 줍니다. 순위 · 절차처럼 **순서를 바꾸면 뜻이 달라지는** 것은 `ol` 입니다.

**검사 항목** (3개)

1. ol 안에 li 가 3개
2. 순서 없는 목록(ul)을 쓰지 않았다
3. 항목이 금리 동결 / 신작 개봉 / 폭설 주의보 차례

**흔한 오답** — 「ol 안에 li 가 3개」에서 걸립니다

목록이면 `ul` 부터 떠올리기 쉽습니다. 순위처럼 **순서에 뜻이 있으면** `ol` 입니다.

```html
<ul>
  <li>금리 동결</li>
  <li>신작 개봉</li>
  <li>폭설 주의보</li>
</ul>
```

---

### 문제 5. 이름–값 목록

**문제**

기사 정보 세 가지를 **이름–값 목록**(`dl`)으로 만드시오.
- 기자 — 김하나
- 날짜 — 2024-11-05
- 조회수 — 1,204

**정답**

```html
<dl>
  <dt>기자</dt><dd>김하나</dd>
  <dt>날짜</dt><dd>2024-11-05</dd>
  <dt>조회수</dt><dd>1,204</dd>
</dl>
```

**해설**

`dl`(목록) 안에 `dt`(이름)와 `dd`(값)를 **짝지어** 차례로 씁니다. 기사 정보 · 상품 정보처럼 「항목: 값」이 이어지는 곳에 씁니다.
`dd` 는 기본으로 왼쪽이 들여 쓰여 보입니다 — 모양은 CSS 로 바꾸면 됩니다.

**검사 항목** (3개)

1. dl 이 하나 있다
2. dt 3개 · dd 3개
3. 짝이 기자=김하나 · 날짜=2024-11-05 · 조회수=1,204

**흔한 오답** — 「dl 이 하나 있다」에서 걸립니다

「목록」이라 `ul` 로 쓰기 쉽습니다. 이름과 값이 «짝»이면 `dl` 이 그 짝을 태그로 드러냅니다.

```html
<ul>
  <li>기자: 김하나</li>
  <li>날짜: 2024-11-05</li>
  <li>조회수: 1,204</li>
</ul>
```

---

### 문제 6. 링크 안의 사진

**문제**

기사 사진 `photo.jpg` 를 누르면 `detail.html` 로 가도록 만드시오. 사진의 대체 글은 `폭설로 멈춘 버스` 입니다.
(미리보기에는 사진 파일이 없어 대체 글이 보입니다 — 그게 정상입니다)

**정답**

```html
<a href="detail.html">
  <img src="photo.jpg" alt="폭설로 멈춘 버스">
</a>
```

**해설**

`a` 안에는 글자뿐 아니라 사진도 넣을 수 있습니다 — 사진 전체가 누를 수 있는 링크가 됩니다.
`alt` 는 사진을 못 볼 때(사진 파일이 없을 때 · 화면 읽기 프로그램) 대신 쓰이는 글입니다. 특히 **링크 안의 사진**은 alt 가 곧 링크의 이름이라, 빠뜨리면 「어디로 가는 링크인지」를 알 수 없습니다.

**검사 항목** (3개)

1. detail.html 로 가는 링크 안에 img 가 있다
2. 사진 주소가 photo.jpg
3. 대체 글(alt)이 「폭설로 멈춘 버스」

**흔한 오답** — 「대체 글(alt)이 「폭설로 멈춘 버스」」에서 걸립니다

사진이 잘 보이면 alt 를 빠뜨려도 티가 나지 않습니다.

```html
<a href="detail.html">
  <img src="photo.jpg">
</a>
```

---

### 문제 7. 경로

**문제**

폴더가 이렇게 되어 있습니다.
```text
site/
├─ index.html
├─ images/
│   └─ logo.png
└─ news/
    └─ list.html
```
`news/list.html` 에서 로고를 띄우려면 `<img src="?">` 의 `?` 에 무엇을 써야 합니까?

① `images/logo.png`  
② `../images/logo.png`  
③ `/images/logo.png`  
④ `news/images/logo.png`

**정답** — ② `../images/logo.png`

**해설**

경로는 **그 HTML 파일이 있는 곳**에서 출발합니다. `list.html` 은 `news/` 안에 있으니, `../` 로 한 칸 올라가(`site/`) `images/logo.png` 로 내려갑니다.
`images/logo.png` 는 `news/images/logo.png` 를 찾고, `/images/logo.png` 는 서버에 올렸을 때만(사이트 맨 위가 정해졌을 때만) 맞습니다 — 파일로 열면 깨집니다.

**흔한 오답** — ③

`/` 로 시작하면 「맨 위에서부터」라 맞아 보입니다. 하지만 파일을 더블클릭해 열면 맨 위가 `site/` 가 아니라 **디스크의 맨 위**(C:\)가 됩니다.

---

### 문제 8. 표

**문제**

분야별 기사 수를 **표**로 만드시오. 머리 줄(`thead`)과 몸통(`tbody`)을 나눕니다.

| 분야 | 기사 수 | 비율 |
| --- | --- | --- |
| 사회 | 121 | 24.2% |
| 정치 | 115 | 23.0% |
| 경제 | 88 | 17.6% |
| 스포츠 | 80 | 16.0% |

**정답**

```html
<table>
  <thead>
    <tr><th>분야</th><th>기사 수</th><th>비율</th></tr>
  </thead>
  <tbody>
    <tr><td>사회</td><td>121</td><td>24.2%</td></tr>
    <tr><td>정치</td><td>115</td><td>23.0%</td></tr>
    <tr><td>경제</td><td>88</td><td>17.6%</td></tr>
    <tr><td>스포츠</td><td>80</td><td>16.0%</td></tr>
  </tbody>
</table>
```

**해설**

`th` 는 머리 칸(굵게 · 가운데), `td` 는 데이터 칸입니다. `thead` · `tbody` 로 나누면 「어느 줄이 머리인가」가 태그로 드러나고, 나중에 CSS 로 머리 줄만 꾸미기도 쉽습니다.
🔴 `tbody` 를 안 써도 브라우저가 **알아서 넣습니다**(F12 의 Elements 에 보입니다). 그래서 `thead` 없이 쓰면 머리 줄까지 몸통 안에 들어갑니다.

**검사 항목** (5개)

1. 표가 하나 있다
2. 머리 줄(thead)에 칸(th) 3개
3. 몸통(tbody)에 4줄
4. 몸통 줄마다 칸(td) 3개
5. 첫 몸통 줄이 「사회」로 시작

**흔한 오답** — 「머리 줄(thead)에 칸(th) 3개」에서 걸립니다

화면은 같습니다. 그런데 `thead` 를 안 쓰면 브라우저가 몰래 `tbody` 하나에 다섯 줄을 다 넣습니다 — F12 로 보면 보입니다.

```html
<table>
  <tr><th>분야</th><th>기사 수</th><th>비율</th></tr>
  <tr><td>사회</td><td>121</td><td>24.2%</td></tr>
  <tr><td>정치</td><td>115</td><td>23.0%</td></tr>
  <tr><td>경제</td><td>88</td><td>17.6%</td></tr>
  <tr><td>스포츠</td><td>80</td><td>16.0%</td></tr>
</table>
```

---

### 문제 9. 폼

**문제**

뉴스레터 신청 폼을 만드시오.
- 「이메일」 글자표(`label`)와 **이메일 형식** 입력 칸 — 글자표를 누르면 칸에 커서가 가도록 **이어 붙일 것**
- 「신청」 버튼
(미리보기에서 버튼을 눌러도 아무 데도 보내지 않습니다)

**정답**

```html
<form>
  <label for="email">이메일</label>
  <input type="email" id="email" name="email">
  <button type="submit">신청</button>
</form>
```

**해설**

`label` 의 `for` 와 `input` 의 `id` 를 **같은 이름**으로 쓰면 둘이 이어집니다. 글자표를 눌러도 칸이 선택되고, 화면 읽기 프로그램이 칸의 이름을 읽어 줍니다. (`<label>이메일 <input …></label>` 처럼 감싸도 이어집니다.)
`type="email"` 은 제출할 때 「@」가 없으면 막아 주고, 휴대폰에서는 @ 가 있는 자판을 띄웁니다.

**검사 항목** (4개)

1. form 이 있다
2. form 안에 이메일 형식 입력 칸
3. 「이메일」 글자표가 입력 칸과 이어져 있다
4. form 안에 「신청」 버튼

**흔한 오답** — 「「이메일」 글자표가 입력 칸과 이어져 있다」에서 걸립니다

글자표가 칸 옆에 보이면 이어진 것 같지만, `for` 와 `id` 가 없으면 서로 남남입니다. 글자표를 눌러 보면 압니다.

```html
<form>
  <label>이메일</label>
  <input type="email" name="email">
  <button type="submit">신청</button>
</form>
```

---

### 문제 10. 클래스 선택자

**문제**

기사 제목(`title` 클래스)만 글자 색을 `#0d6b75` 로 바꾸시오. 「많이 본 기사」 제목은 그대로 둡니다.

**HTML (고정)**

```html
<h2 class="title">금리 동결</h2>
<p>한국은행이 기준금리를 동결했다.</p>
<h2>많이 본 기사</h2>
<h2 class="title">신작 개봉</h2>
```

**정답**

```css
.title {
  color: #0d6b75;
}
```

**해설**

`h2` 는 **모든** h2 를, `.title` 은 **class="title" 인 것만** 고릅니다. 같은 태그 중 일부만 꾸미고 싶을 때 클래스를 씁니다. 점(`.`)을 빠뜨리면 `title` 이라는 **태그**를 찾아 아무것도 안 바뀝니다.

**검사 항목** (2개)

1. .title 두 개의 글자 색이 #0d6b75
2. 「많이 본 기사」(class 없는 h2)는 그대로

**흔한 오답** — 「「많이 본 기사」(class 없는 h2)는 그대로」에서 걸립니다

제목이 다 `h2` 라 태그 이름으로 고르기 쉽습니다. 그러면 「많이 본 기사」까지 같이 바뀝니다.

```css
h2 {
  color: #0d6b75;
}
```

---

### 문제 11. 자손 선택자

**문제**

**메뉴(nav) 안의 링크만** 밑줄을 없애시오. 바닥(footer)의 링크는 밑줄이 그대로 있어야 합니다.

**HTML (고정)**

```html
<nav>
  <a href="#">정치</a>
  <a href="#">경제</a>
</nav>
<p>본문</p>
<footer>
  <a href="#">회사 소개</a>
</footer>
```

**정답**

```css
nav a {
  text-decoration: none;
}
```

**해설**

선택자 사이의 **띄어쓰기**는 「안에 있는」이라는 뜻입니다. `nav a` 는 「nav 안에 있는 a」만 고릅니다. 바로 아래 자식만이 아니라 몇 겹 안에 있어도 고릅니다.

**검사 항목** (2개)

1. nav 안 링크의 밑줄이 없다
2. footer 안 링크의 밑줄은 그대로

**흔한 오답** — 「footer 안 링크의 밑줄은 그대로」에서 걸립니다

`a` 하나로 쓰면 짧고 메뉴도 잘 바뀌어서, 바닥 링크까지 바뀐 것을 못 보고 넘어갑니다.

```css
a {
  text-decoration: none;
}
```

---

### 문제 12. 글자 꾸미기

**문제**

기사 본문 문단(`.news` 안의 `p`)을 이렇게 꾸미시오.
- 글자 크기 `18px`
- 줄 간격 `1.6` (글자 크기의 1.6배)
- 글자 색 `#333333`

**HTML (고정)**

```html
<article class="news">
  <h2>폭설 주의보</h2>
  <p>오늘 밤부터 중부 지방에 많은 눈이 내리겠습니다. 출근길 교통에 주의하십시오.</p>
</article>
```

**정답**

```css
.news p {
  font-size: 18px;
  line-height: 1.6;
  color: #333333;
}
```

**해설**

`line-height` 는 **단위 없이**(`1.6`) 쓰는 것이 기본입니다. 글자 크기가 바뀌면 줄 간격도 그 비율로 따라갑니다. 브라우저는 계산해서 `28.8px`(18 × 1.6)로 그립니다 — F12 의 Computed 탭에서 보입니다.

**검사 항목** (3개)

1. 글자 크기 18px
2. 줄 간격 28.8px (18 × 1.6)
3. 글자 색 #333333

**흔한 오답** — 「줄 간격 28.8px (18 × 1.6)」에서 걸립니다

줄 간격을 px 로 쓰면서 글자 크기보다 작게 쓰면 줄이 겹칩니다. 「1.6」 은 단위 없이 씁니다.

```css
.news p {
  font-size: 18px;
  line-height: 16px;
  color: #333333;
}
```

---

### 문제 13. 박스 네 겹

**문제**

카드(`.card`)를 이렇게 꾸미시오.
- 안쪽 여백 `16px` (네 방향 모두)
- 테두리 `1px` 실선, 색 `#d8dfe7`
- 카드 사이 간격 `12px` (아래쪽 바깥 여백)

**HTML (고정)**

```html
<div class="card">첫 번째 카드</div>
<div class="card">두 번째 카드</div>
```

**정답**

```css
.card {
  padding: 16px;
  border: 1px solid #d8dfe7;
  margin-bottom: 12px;
}
```

**해설**

상자는 안에서부터 **내용 → 안쪽 여백(padding) → 테두리(border) → 바깥 여백(margin)** 네 겹입니다. 안쪽 여백은 테두리 «안», 바깥 여백은 테두리 «밖»입니다. 카드에 바탕색을 주면 padding 은 색이 칠해지고 margin 은 안 칠해져서 구분됩니다.

**검사 항목** (3개)

1. 안쪽 여백 16px
2. 테두리 1px 실선 #d8dfe7
3. 두 카드 사이 간격 12px

**흔한 오답** — 「안쪽 여백 16px」에서 걸립니다

안쪽 여백(padding)과 바깥 여백(margin)을 바꿔 쓰는 실수입니다. 화면에서는 둘 다 「빈 곳」이라 헷갈립니다.

```css
.card {
  padding: 12px;
  border: 1px solid #d8dfe7;
  margin-bottom: 16px;
}
```

---

### 문제 14. box-sizing

**문제**

상자(`.box`)에 폭 `300px`, 안쪽 여백 `20px`, 테두리 `2px` 실선을 주시오. 단, **화면에 보이는 상자의 폭이 정확히 300px** 이어야 합니다.

**HTML (고정)**

```html
<div class="box">상자</div>
```

**CSS (고정)**

```css
body { margin: 0; }
```

**정답**

```css
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #16202a;
}
```

**해설**

기본(`content-box`)에서 `width` 는 **내용의 폭**이라 안쪽 여백과 테두리가 **더해집니다**(300 + 40 + 4 = 344). `box-sizing: border-box` 를 주면 `width` 가 **테두리까지 포함한 폭**이 되어 300px 그대로입니다.
그래서 보통 CSS 맨 위에 `*, *::before, *::after { box-sizing: border-box; }` 를 둡니다.

**검사 항목** (3개)

1. 보이는 폭이 300px
2. 안쪽 여백 20px
3. 테두리 2px

**흔한 오답** — 「보이는 폭이 300px」에서 걸립니다

width 300px 이라고 썼으니 300px 이겠지 하고 넘어갑니다. 실제로는 300 + 20×2 + 2×2 = 344px 입니다.

```css
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid #16202a;
}
```

---

### 문제 15. 우선순위 ①

**문제**

다음 HTML 과 CSS 에서 「첫 문단」의 글자 색은 무엇입니까?
```html
<p id="lead" class="intro">첫 문단</p>
```
```css
#lead  { color: red; }
.intro { color: blue; }
p      { color: green; }
```

① 빨강 (red)  
② 파랑 (blue)  
③ 초록 (green)  
④ 검정 (아무것도 안 먹는다)

**정답** — ① 빨강 (red)

**해설**

여러 규칙이 겹치면 **선택자의 점수**로 정합니다 — id(`#`) > 클래스(`.`) > 태그. 순서와 상관없이 id 규칙이 이기므로 빨강입니다.
「나중 것이 이긴다」는 점수가 **같을 때** 쓰는 규칙입니다. F12 의 Styles 탭을 보면 진 규칙에 줄이 그어져 있습니다.

**흔한 오답** — ③

「나중에 쓴 것이 이긴다」만 기억하면 맨 아래의 초록을 고릅니다. 그 규칙은 **점수가 같을 때만** 씁니다.

---

## 중급

### 문제 16. 상속

**문제**

기사(`.news`)의 글자 색을 `#333333` 으로 주면 문단은 그 색을 **물려받지만**, 링크는 파란색 그대로입니다.
링크도 **둘러싼 글자의 색을 물려받게** 하시오. 링크에 색 값(`#333333`)을 다시 쓰지 말 것 — 기사 색을 나중에 바꾸면 링크도 따라 바뀌어야 합니다.

**HTML (고정)**

```html
<article class="news">
  <p>폭설로 버스 운행이 멈췄다. <a href="#">관련 기사</a>도 함께 보십시오.</p>
</article>
```

**정답**

```css
.news {
  color: #333333;
}
.news a {
  color: inherit;
}
```

**해설**

글자 색 · 글꼴 같은 «글자» 속성은 **안쪽 요소가 물려받습니다**(상속). 그런데 링크는 브라우저가 **자기 색(파랑)을 따로** 정해 두어서 물려받지 않습니다.
`color: inherit` 는 「둘러싼 요소의 값을 그대로 쓴다」는 뜻입니다. 색을 한 곳(`.news`)에만 두면 고칠 곳도 한 곳입니다.

**검사 항목** (3개)

1. 문단 글자 색 #333333
2. 링크 글자 색 #333333
3. 기사 색을 바꾸면 링크도 따라 바뀐다

**흔한 오답** — 「기사 색을 바꾸면 링크도 따라 바뀐다」에서 걸립니다

지금 화면은 정답과 똑같습니다. 하지만 기사 색을 바꾸는 날 링크만 옛 색으로 남습니다.

```css
.news {
  color: #333333;
}
.news a {
  color: #333333;
}
```

---

### 문제 17. 우선순위 ②

**문제**

다음에서 「제목」의 글자 색은 무엇입니까?
```html
<h2 class="title main">제목</h2>
```
```css
.main  { color: red; }
.title { color: blue; }
```

① 빨강 — HTML 의 class 에서 `main` 이 뒤에 있으니까  
② 파랑 — CSS 에서 `.title` 이 뒤에 있으니까  
③ 보라 — 두 색이 섞인다  
④ 검정 — 둘이 부딪혀 아무것도 안 먹는다

**정답** — ② 파랑 — CSS 에서 `.title` 이 뒤에 있으니까

**해설**

`.main` 과 `.title` 은 둘 다 클래스 하나라 **점수가 같습니다**. 점수가 같으면 **CSS 에 나중에 적힌 규칙**이 이깁니다 — 파랑.
`class="title main"` 처럼 HTML 에 적은 순서는 **아무 상관이 없습니다**. 색은 섞이지 않고, 둘 중 하나가 이깁니다.

**흔한 오답** — ①

HTML 에 적은 class 순서가 영향을 줄 것 같아 보입니다. 순서를 보는 곳은 **CSS 쪽**뿐입니다.

---

### 문제 18. inline-block

**문제**

탭(`span.tab`)에 폭 `120px` 을 줬는데(고정 CSS) **안 먹습니다**. 탭이 **한 줄에 나란히 놓인 채로** 폭이 120px 이 되게 하시오.

**HTML (고정)**

```html
<nav>
  <span class="tab">정치</span>
  <span class="tab">경제</span>
  <span class="tab">사회</span>
</nav>
```

**CSS (고정)**

```css
.tab { width: 120px; background: #e2f1f3; }
```

**정답**

```css
.tab {
  display: inline-block;
}
```

**해설**

`span` 은 **inline** 이라 글자처럼 흘러가고, 폭 · 높이를 받지 않습니다. `div` 같은 **block** 은 폭을 받지만 한 줄을 통째로 차지합니다.
`inline-block` 은 둘의 가운데 — **글자처럼 나란히 놓이면서 폭 · 높이도 받습니다**. (탭 사이에 4px 쯤 빈틈이 보이는 것은 HTML 의 줄바꿈이 «띄어쓰기 한 칸»으로 그려지기 때문입니다.)

**검사 항목** (2개)

1. 탭 세 개의 폭이 120px
2. 탭이 한 줄에 나란히

**흔한 오답** — 「탭이 한 줄에 나란히」에서 걸립니다

`block` 으로 바꾸면 폭은 먹지만, 블록은 한 줄을 통째로 차지해서 탭이 세로로 쌓입니다.

```css
.tab {
  display: block;
}
```

---

### 문제 19. 메뉴를 가로로

**문제**

**Flexbox** 로 메뉴 다섯 칸을 **한 줄**로 놓고, 목록의 점을 없애시오.

**HTML (고정)**

```html
<nav>
  <ul class="menu">
    <li>정치</li>
    <li>경제</li>
    <li>사회</li>
    <li>IT</li>
    <li>문화</li>
  </ul>
</nav>
```

**정답**

```css
.menu {
  display: flex;
  list-style: none;
}
```

**해설**

`display: flex` 는 **그 상자의 자식들**을 가로 한 줄로 놓습니다. 그래서 `li` 가 아니라 **`ul`(컨테이너)** 에 줍니다.
`list-style: none` 은 `ul` 에 주면 `li` 가 물려받습니다.

**검사 항목** (3개)

1. 다섯 칸이 한 줄에 있다
2. 왼쪽에서 오른쪽으로 차례대로
3. 목록의 점이 없다

**흔한 오답** — 「다섯 칸이 한 줄에 있다」에서 걸립니다

점이 사라지면 할 일을 다 한 것 같습니다. `li` 는 블록이라 여전히 세로로 쌓여 있습니다.

```css
.menu {
  list-style: none;
}
```

---

### 문제 20. 양 끝 정렬

**문제**

머리(`.top`, 폭 800px · 이미 flex)에서 **로고는 왼쪽 끝, 메뉴는 오른쪽 끝**에 놓으시오.

**HTML (고정)**

```html
<header class="top">
  <div class="logo">오늘의 뉴스</div>
  <nav class="menu">정치 · 경제 · 사회</nav>
</header>
```

**CSS (고정)**

```css
body { margin: 0; }
.top { display: flex; width: 800px; background: #e2f1f3; }
```

**정답**

```css
.top {
  justify-content: space-between;
}
```

**해설**

`justify-content` 는 **주축(가로)** 에서 남는 공간을 어떻게 나눌지 정합니다. `space-between` 은 첫 아이템을 시작 끝, 마지막 아이템을 반대쪽 끝에 붙이고 **사이에** 공간을 나눕니다.
`center` 는 둘을 붙여서 가운데로 모읍니다.

**검사 항목** (3개)

1. 로고가 머리의 왼쪽 끝
2. 메뉴가 머리의 오른쪽 끝
3. 로고와 메뉴가 한 줄

**흔한 오답** — 「로고가 머리의 왼쪽 끝」에서 걸립니다

「가운데로 벌린다」와 「양 끝으로 민다」를 헷갈리는 경우입니다.

```css
.top {
  justify-content: center;
}
```

---

### 문제 21. 세로 가운데

**문제**

사진(`.thumb`, 높이 80px)과 제목(`.txt`)을 **세로 가운데**로 맞추시오. 제목 상자가 사진 높이만큼 늘어나지 않아야 합니다.

**HTML (고정)**

```html
<div class="row">
  <div class="thumb"></div>
  <p class="txt">금리 동결 — 한국은행</p>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.row { display: flex; gap: 12px; }
.thumb { width: 80px; height: 80px; background: #b8c7d3; }
.txt { margin: 0; background: #e2f1f3; }
```

**정답**

```css
.row {
  align-items: center;
}
```

**해설**

`align-items` 는 **교차축(세로)** 에서 아이템을 어디에 둘지 정합니다. 기본값은 `stretch` — 가장 높은 아이템에 맞춰 **늘립니다**. 제목에 바탕색을 주면 늘어난 것이 보입니다.
`center` 를 주면 늘리지 않고 세로 가운데에 둡니다.

**검사 항목** (2개)

1. 제목 상자가 80px 까지 늘어나지 않았다
2. 사진과 제목의 세로 중심이 같다

**흔한 오답** — 「제목 상자가 80px 까지 늘어나지 않았다」에서 걸립니다

`vertical-align` 은 글자 줄 안에서만 쓰는 속성이라 flex 아이템에는 아무 일도 안 합니다. 이름 때문에 가장 먼저 떠올리기 쉽습니다.

```css
.txt {
  vertical-align: middle;
}
```

---

### 문제 22. gap

**문제**

카드 **사이**의 간격을 `16px` 로 만드시오. 첫 카드는 왼쪽 끝에 붙어 있어야 합니다(바깥 양 끝에는 간격 없음).

**HTML (고정)**

```html
<div class="cards">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.cards { display: flex; }
.card { width: 200px; height: 100px; background: #e2f1f3; }
```

**정답**

```css
.cards {
  gap: 16px;
}
```

**해설**

`gap` 은 아이템 **사이에만** 간격을 둡니다. 바깥 양 끝에는 안 생기므로 margin 으로 끝을 따로 처리할 필요가 없습니다. 줄이 바뀌면(`flex-wrap`) 줄 사이에도 같은 간격이 생깁니다.

**검사 항목** (3개)

1. 첫 카드가 왼쪽 끝
2. 1번과 2번 사이 16px
3. 2번과 3번 사이 16px

**흔한 오답** — 「첫 카드가 왼쪽 끝」에서 걸립니다

카드마다 양쪽 8px 이면 사이는 16px 이 맞지만, 첫 카드 왼쪽에도 8px 이 생깁니다.

```css
.card {
  margin: 0 8px;
}
```

---

### 문제 23. flex-wrap

**문제**

폭 540px 상자에 250px 카드 네 장이 한 줄로 **우겨 들어가 줄어들었습니다**. 카드 폭(250px)은 그대로 두고, 넘치는 카드는 **다음 줄로** 넘기시오 (한 줄에 2장씩 2줄).

**HTML (고정)**

```html
<div class="cards">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.cards { display: flex; gap: 20px; width: 540px; }
.card { width: 250px; height: 80px; background: #e2f1f3; }
```

**정답**

```css
.cards {
  flex-wrap: wrap;
}
```

**해설**

flex 는 기본으로 **한 줄**입니다. 넘치면 아이템을 줄여서라도(`flex-shrink`) 한 줄에 넣습니다. `flex-wrap: wrap` 을 주면 넘치는 아이템이 **다음 줄로** 갑니다. `gap` 이 줄 사이에도 적용됩니다.

**검사 항목** (2개)

1. 카드 폭이 모두 250px
2. 한 줄에 2장씩 2줄

**흔한 오답** — 「한 줄에 2장씩 2줄」에서 걸립니다

줄어들지 않게 막으면 폭은 250px 이 되지만, 한 줄로 그대로 있어 상자 밖으로 삐져나갑니다.

```css
.card {
  flex-shrink: 0;
}
```

---

### 문제 24. flex-direction

**문제**

카드(`.card`, 이미 flex) 안의 세 요소(사진 · 제목 · 정보)가 **위에서 아래로** 쌓이고, 사이 간격이 `8px` 이 되게 하시오. 사진은 카드 폭에 꽉 차야 합니다.

**HTML (고정)**

```html
<article class="card">
  <div class="pic"></div>
  <h3>폭설 주의보</h3>
  <p class="meta">김하나 · 11/05</p>
</article>
```

**CSS (고정)**

```css
body { margin: 0; }
.card { display: flex; width: 300px; }
.pic { height: 120px; background: #b8c7d3; }
h3, p { margin: 0; }
```

**정답**

```css
.card {
  flex-direction: column;
  gap: 8px;
}
```

**해설**

`flex-direction: column` 은 **주축을 세로로** 바꿉니다. 이제 아이템이 위에서 아래로 놓이고, `gap` 은 세로 간격이 됩니다.
축이 바뀌면 `justify-content`(주축)와 `align-items`(교차축)의 방향도 같이 바뀝니다 — 기본 `stretch` 가 이번엔 **가로로** 늘려서 사진이 300px 에 꽉 찹니다.

**검사 항목** (3개)

1. 사진이 카드 폭(300px)에 꽉 찬다
2. 사진 아래 8px 에 제목
3. 제목 아래 8px 에 정보

**흔한 오답** — 「사진이 카드 폭(300px)에 꽉 찬다」에서 걸립니다

간격만 주면 셋이 여전히 가로로 놓입니다. 폭을 안 준 사진은 가로 줄에서 폭이 0 이 되어 아예 안 보입니다.

```css
.card {
  gap: 8px;
}
```

---

### 문제 25. Grid 3열

**문제**

**Grid** 로 폭 900px 상자를 **같은 폭 3열**로 나누시오. 열 사이 간격은 `30px` 입니다.

**HTML (고정)**

```html
<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.grid { width: 900px; }
.item { height: 60px; background: #e2f1f3; }
```

**정답**

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
```

**해설**

`fr` 은 **간격을 빼고 남은 공간**을 나누는 단위입니다. `repeat(3, 1fr)` 은 남은 840px 을 셋으로 — 280px 씩입니다.
px 로 직접 쓰면 간격을 계산에 넣어야 하고, 상자 폭이 바뀌면 다시 계산해야 합니다.

**검사 항목** (3개)

1. 칸 폭이 모두 280px ((900 − 30×2) ÷ 3)
2. 한 줄에 3칸
3. 열 사이 30px

**흔한 오답** — 「칸 폭이 모두 280px ((900 − 30×2) ÷ 3)」에서 걸립니다

900 ÷ 3 = 300 이라 300px 로 쓰기 쉽습니다. 간격 60px 이 더해져 960px 이 되어 상자를 넘칩니다.

```css
.grid {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 30px;
}
```

---

### 문제 26. fr 비율

**문제**

Grid 로 본문(`main`)과 곁(`aside`)의 폭을 **2 : 1** 로 나누시오. 사이 간격은 `24px` 입니다.

**HTML (고정)**

```html
<div class="page">
  <main>본문</main>
  <aside>많이 본 기사</aside>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.page { width: 960px; }
main { height: 200px; background: #e2f1f3; }
aside { height: 200px; background: #edf1f5; }
```

**정답**

```css
.page {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}
```

**해설**

`2fr 1fr` 은 남은 공간을 2 : 1 로 나눕니다. 간격 24px 을 먼저 빼고(936px) 나누므로 624px · 312px 입니다. 퍼센트(`66%` · `33%`)로 쓰면 간격이 더해져 넘칩니다 — `fr` 이 간격을 알아서 빼 주는 것이 장점입니다.

**검사 항목** (3개)

1. 본문 폭 624px ((960 − 24) × 2/3)
2. 곁 폭 312px
3. 나란히, 사이 24px

**흔한 오답** — 「본문 폭 624px ((960 − 24) × 2/3)」에서 걸립니다

비율은 맞게 썼는데 간격을 빠뜨린 경우입니다. 본문이 640px 이 되어 검사에서 걸립니다.

```css
.page {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
```

---

### 문제 27. grid-template-areas

**문제**

`grid-template-areas` 로 그림처럼 배치하시오. 열은 본문 `3fr` · 곁 `1fr`, 간격은 없습니다.
```text
┌──────────── header ────────────┐
├──────────── nav ───────────────┤
├────────── main ─────────┬ aside ┤
├──────────── footer ────────────┤
```

**HTML (고정)**

```html
<div class="page">
  <header>머리</header>
  <nav>메뉴</nav>
  <main>본문</main>
  <aside>곁</aside>
  <footer>바닥</footer>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.page { width: 1000px; }
.page > * { min-height: 60px; background: #e2f1f3; }
```

**정답**

```css
.page {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    "header header"
    "nav    nav"
    "main   aside"
    "footer footer";
}
header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }
```

**해설**

`grid-template-areas` 는 칸에 **이름을 붙여 그림처럼** 적습니다. 따옴표 한 쌍이 한 줄, 이름 하나가 한 칸이고, 같은 이름을 이어 쓰면 칸이 합쳐집니다.
각 요소는 `grid-area: 이름` 으로 자기 자리를 말합니다. 그림에 없는 이름의 요소는 자리를 못 찾아 남는 곳(맨 아래)에 붙습니다.

**검사 항목** (5개)

1. 머리가 맨 위, 폭 1000px
2. 메뉴가 머리 바로 아래, 폭 1000px
3. 본문이 메뉴 아래 왼쪽, 폭 750px
4. 곁이 본문 오른쪽, 폭 250px
5. 바닥이 맨 아래, 폭 1000px

**흔한 오답** — 「곁이 본문 오른쪽, 폭 250px」에서 걸립니다

그림에 aside 칸을 안 그리면 aside 가 갈 곳이 없어 맨 아래 빈 줄로 밀려납니다.

```css
.page {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    "header header"
    "nav    nav"
    "main   main"
    "footer footer";
}
header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
footer { grid-area: footer; }
```

---

### 문제 28. 미디어 쿼리

**문제**

창이 **넓으면 3열**, 창 폭이 **600px 이하면 1열**이 되게 하시오. (601px 이면 3열입니다.)
미리보기 위의 폭 단추로 375 · 600 · 1000 을 눌러 확인할 수 있습니다.

**HTML (고정)**

```html
<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.grid { display: grid; gap: 20px; }
.item { height: 60px; background: #e2f1f3; }
```

**정답**

```css
.grid {
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

**해설**

`@media (max-width: 600px)` 은 「창 폭이 **600px 이하**일 때만」 안의 규칙을 씁니다. 바깥 규칙(3열)은 늘 쓰이고, 좁을 때만 1열이 **덮어씁니다** — 그래서 미디어 쿼리는 바깥 규칙보다 **뒤에** 둡니다.
모바일 우선(`min-width`)으로 쓴다면 「601px 이상」이니 `min-width: 601px` 입니다. 경계값 하나 차이로 600px 화면이 달라집니다.

**검사 항목** (4개)

1. 창 1000px — 한 줄에 3칸 — 창 1000px
2. 창 1000px — 칸 폭 320px — 창 1000px
3. 창 601px — 아직 3칸 — 창 601px
4. 창 600px — 1열 (칸 폭 600px) — 창 600px

**흔한 오답** — 「창 600px — 1열 (칸 폭 600px)」에서 걸립니다

모바일 우선으로 잘 썼는데 경계를 600 으로 쓴 경우입니다. `min-width: 600px` 은 600px 을 **포함**해서 600px 에서도 3열이 됩니다.

```css
.grid {
  grid-template-columns: 1fr;
}
@media (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

### 문제 29. 사진이 넘칠 때

**문제**

폭 375px 휴대폰 화면에서 사진(480px) 때문에 **가로 스크롤**이 생깁니다. 사진이 카드 폭에 맞게 **줄어들고 비율은 그대로** 유지되게 하시오. 넓은 화면에서는 원래 크기(480px)보다 **커지면 안 됩니다**.

**HTML (고정)**

```html
<article class="card">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='270'%3E%3Crect width='480' height='270' fill='%23b8c7d3'/%3E%3Ccircle cx='150' cy='110' r='40' fill='%23e5ecf2'/%3E%3Cpath d='M0 270 L170 150 L280 230 L360 170 L480 270 Z' fill='%2359677a'/%3E%3C/svg%3E" width="480" height="270" alt="폭설로 멈춘 버스">
  <h3>폭설 주의보</h3>
</article>
```

**CSS (고정)**

```css
body { margin: 0; }
.card { padding: 16px; }
```

**정답**

```css
img {
  max-width: 100%;
  height: auto;
}
```

**해설**

`max-width: 100%` 는 「감싼 상자보다 **커지지는 마라**」입니다. 좁으면 줄고, 넓으면 원래 크기에서 멈춥니다(`width: 100%` 는 넓은 화면에서 사진을 **늘려** 흐려집니다).
`<img>` 에 `width` · `height` 를 적어 두면 사진을 받기 전에도 자리가 잡혀 화면이 덜컹거리지 않는데, 그 대신 CSS 에 `height: auto` 가 있어야 비율이 유지됩니다.

**검사 항목** (4개)

1. 창 375px — 가로 스크롤이 없다 — 창 375px
2. 창 375px — 사진 폭 343px (375 − 16×2) — 창 375px
3. 창 375px — 비율 그대로 (높이 약 193px) — 창 375px
4. 창 800px — 원래 크기 480px 를 넘지 않는다 — 창 800px

**흔한 오답** — 「창 375px — 비율 그대로 (높이 약 193px)」에서 걸립니다

폭은 줄었는데 HTML 의 `height="270"` 이 그대로 남아 사진이 납작해집니다. `height: auto` 가 짝입니다.

```css
img {
  max-width: 100%;
}
```

---

### 문제 30. CSS 변수

**문제**

브랜드 색 `#0d6b75` 를 `:root` 에 변수 `--brand` 로 정의하고, **제목 글자 색**(`.brand`)과 **배지 바탕색**(`.badge`)이 그 변수를 쓰게 하시오. 배지 글자는 흰색입니다.

**HTML (고정)**

```html
<h1 class="brand">오늘의 뉴스</h1>
<span class="badge">속보</span>
```

**정답**

```css
:root {
  --brand: #0d6b75;
}
.brand {
  color: var(--brand);
}
.badge {
  background: var(--brand);
  color: #ffffff;
}
```

**해설**

`--이름: 값` 으로 정의하고 `var(--이름)` 으로 씁니다. `:root` 는 문서 맨 바깥(`html`)이라 **어디서나** 쓸 수 있습니다.
변수의 값어치는 「**한 곳만 고치면 다 바뀐다**」입니다. 그래서 검사가 `--brand` 를 빨강으로 바꿔 보고 둘이 함께 바뀌는지 봅니다.

**검사 항목** (5개)

1. 제목 글자 색 #0d6b75
2. 배지 바탕색 #0d6b75
3. 배지 글자 흰색
4. :root 에 --brand 가 있다
5. --brand 만 바꾸면 제목 · 배지가 함께 바뀐다

**흔한 오답** — 「--brand 만 바꾸면 제목 · 배지가 함께 바뀐다」에서 걸립니다

변수를 만들어 놓고 정작 값을 직접 쓴 경우입니다. 화면은 똑같지만, 색을 바꾸는 날 고칠 곳이 다시 여러 군데가 됩니다.

```css
:root {
  --brand: #0d6b75;
}
.brand {
  color: #0d6b75;
}
.badge {
  background: #0d6b75;
  color: #ffffff;
}
```

---

### 문제 31. 상태 — :hover · :focus-visible

**문제**

버튼(`.btn`)을 이렇게 꾸미시오.
- 평소: 바탕 `#0d6b75`, 글자 흰색
- 마우스를 올리면: 바탕 `#0a5058`
- **키보드(Tab)로 왔을 때**: 굵기 `3px` 의 바깥선(`outline`)이 보이게 (색은 자유 — 바탕과 대비가 나는 색)
(채점은 마우스를 올린 상태 · Tab 으로 온 상태를 켠 것처럼 바꿔 그려서 잽니다)

**HTML (고정)**

```html
<button class="btn" type="button">구독하기</button>
```

**정답**

```css
.btn {
  background: #0d6b75;
  color: #ffffff;
  border: 0;
  padding: 8px 16px;
}
.btn:hover {
  background: #0a5058;
}
.btn:focus-visible {
  outline: 3px solid #16202a;
  outline-offset: 2px;
}
```

**해설**

`:hover` 는 「마우스가 올라가 있는 동안」, `:focus-visible` 은 「**키보드로** 와서 선택된 동안」입니다. `:focus` 는 마우스로 눌러도 켜져서 누를 때마다 테두리가 번쩍이는데, `:focus-visible` 은 키보드로 왔을 때만 보여 줍니다.
🔴 `outline: none` 으로 바깥선을 **지우기만** 하면 키보드 사용자는 지금 어디에 있는지 알 수 없습니다. 지웠다면 반드시 다른 표시를 주십시오.

**검사 항목** (4개)

1. 평소 바탕 #0d6b75
2. 평소 글자 흰색
3. 마우스를 올리면 바탕 #0a5058
4. Tab 으로 왔을 때 3px 바깥선

**흔한 오답** — 「평소 바탕 #0d6b75」에서 걸립니다

마우스를 올린 색을 평소 규칙에 써 버린 경우입니다. 늘 진한 색이라 「올리면 바뀐다」가 사라집니다.

```css
.btn {
  background: #0a5058;
  color: #ffffff;
}
.btn:focus-visible {
  outline: 3px solid #16202a;
}
```

---

### 문제 32. 박스 계산

**문제**

`box-sizing` 이 기본값(`content-box`)일 때, 이 상자의 **눈에 보이는 폭**(테두리 바깥쪽 끝에서 끝까지)은?
```css
.box {
  width: 200px;
  padding: 10px;
  border: 2px solid #16202a;
  margin: 8px;
}
```

① 200px  
② 220px  
③ 224px  
④ 240px

**정답** — ③ 224px

**해설**

content-box 에서 `width` 는 **내용**의 폭입니다. 보이는 폭 = 200 + 안쪽 여백 10×2 + 테두리 2×2 = **224px**.
바깥 여백(margin)은 테두리 **밖**의 빈 곳이라 보이는 상자에는 안 들어갑니다(차지하는 자리는 240px). F12 의 Computed 탭 맨 위 상자 그림에 네 겹이 숫자로 나옵니다.

**흔한 오답** — ①

`width` 에 적은 값이 그대로 보이는 폭이라고 생각하기 쉽습니다. 기본값에서는 내용의 폭일 뿐입니다.

---

## 고급

### 문제 33. div 를 이름 있는 상자로

**문제**

시작 코드는 `div` 로만 짠 화면입니다. **화면은 그대로 두고** 태그만 이름 있는 상자로 바꾸시오.
- 머리 → `header`, 메뉴 → `nav`, 본문 → `main`, 기사 → `article`, 기사 제목 → `h2`, 바닥 → `footer`
- `class` 는 그대로 두십시오 — 고정 CSS 가 class 로 꾸미고 있어서, class 를 지우면 화면이 바뀝니다

**CSS (고정)**

```css
body { margin: 0; font-family: sans-serif; }
.header { display: flex; justify-content: space-between; padding: 12px 16px; background: #0d6b75; color: #ffffff; }
.logo { font-weight: 700; }
.menu a { color: #ffffff; margin-left: 12px; }
.main { padding: 16px; }
.news { border: 1px solid #d8dfe7; border-radius: 8px; padding: 12px; }
.title { font-size: 20px; font-weight: 700; margin: 0 0 8px; }
.footer { padding: 12px 16px; color: #59677a; }
```

**정답**

```html
<header class="header">
  <div class="logo">오늘의 뉴스</div>
  <nav class="menu"><a href="#">정치</a><a href="#">경제</a></nav>
</header>
<main class="main">
  <article class="news">
    <h2 class="title">금리 동결</h2>
    <p class="body">한국은행이 기준금리를 동결했다.</p>
  </article>
</main>
<footer class="footer">© 오늘의 뉴스</footer>
```

**해설**

태그를 바꿔도 `class` 가 그대로면 고정 CSS 가 그대로 적용되어 **화면은 한 픽셀도 안 바뀝니다**. 바뀌는 것은 「이 상자가 무엇인가」를 **기계가 읽을 수 있게** 된다는 것입니다.
`h2` 는 기본 글자 크기(1.5em)를 갖고 있지만 `.title` 의 20px 이 덮어써서 같아 보입니다. `body` 문단도 `p` 로 바꾸면 더 좋습니다.

**검사 항목** (8개)

1. 머리가 body 바로 아래의 header
2. 메뉴가 header 안의 nav
3. 본문이 body 바로 아래의 main
4. 기사가 main 안의 article
5. 기사 제목이 article 안의 h2
6. 바닥이 body 바로 아래의 footer
7. div 로 남은 상자가 없다
8. 화면이 그대로 (제목 글자 크기 20px)

**흔한 오답** — 「기사 제목이 article 안의 h2」에서 걸립니다

큰 상자만 바꾸고 기사 제목은 `div` 로 남기기 쉽습니다. 화면이 같아서 놓칩니다 — 제목은 제목 태그여야 목차가 됩니다.

```html
<header class="header">
  <div class="logo">오늘의 뉴스</div>
  <nav class="menu"><a href="#">정치</a><a href="#">경제</a></nav>
</header>
<main class="main">
  <article class="news">
    <div class="title">금리 동결</div>
    <p class="body">한국은행이 기준금리를 동결했다.</p>
  </article>
</main>
<footer class="footer">© 오늘의 뉴스</footer>
```

---

### 문제 34. 뉴스 카드 한 장

**문제**

뉴스 카드 한 장을 HTML 과 CSS 로 만드시오. 사진 주소는 시작 코드에 들어 있습니다.
- `article.card` 안에 사진(`img`, 대체 글 있음) · 제목(`h3`) · 정보 목록(`dl` — 기자 · 날짜 두 쌍)
- 카드: 폭 `320px`(테두리까지), 안쪽 여백 `16px`, 테두리 `1px` 실선 `#d8dfe7`, 둥근 모서리 `12px`
- 카드 안의 요소는 **위에서 아래로**, 사이 간격 `12px` (Flexbox) — 제목 · 정보 목록의 기본 바깥 여백은 `0`
- 사진은 카드 안쪽 폭에 꽉 차게 (`286px` — 320 − 안쪽 여백 16×2 − 테두리 1×2)

**CSS (고정)**

```css
body { margin: 0; padding: 16px; font-family: sans-serif; }
```

**정답**

```html
<article class="card">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='270'%3E%3Crect width='480' height='270' fill='%23b8c7d3'/%3E%3Ccircle cx='150' cy='110' r='40' fill='%23e5ecf2'/%3E%3Cpath d='M0 270 L170 150 L280 230 L360 170 L480 270 Z' fill='%2359677a'/%3E%3C/svg%3E" alt="폭설로 멈춘 버스">
  <h3>폭설 주의보</h3>
  <dl>
    <dt>기자</dt><dd>김하나</dd>
    <dt>날짜</dt><dd>2024-11-05</dd>
  </dl>
</article>
```

```css
.card {
  box-sizing: border-box;
  width: 320px;
  padding: 16px;
  border: 1px solid #d8dfe7;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card img {
  width: 100%;
}
.card h3,
.card dl {
  margin: 0;
}
```

**해설**

카드 하나는 지금까지 배운 것이 다 모이는 자리입니다 — 시맨틱(`article` · `dl`), 박스(`border-box`), Flexbox(`column` + `gap`).
🔴 flex 의 `gap` 은 아이템의 **바깥 여백과 더해집니다**(블록처럼 겹쳐지지 않습니다). `h3` 의 기본 margin 을 0 으로 두지 않으면 간격이 12px 보다 커집니다.

**검사 항목** (7개)

1. article.card 가 하나
2. 사진의 대체 글이 있다
3. 제목 h3 하나 · 정보 dt/dd 두 쌍
4. 카드 폭 320px (테두리까지)
5. 안쪽 여백 16px · 테두리 1px · 둥근 모서리 12px
6. 사진이 카드 안쪽 폭(286px)에 꽉 찬다
7. 사진 → 제목 → 정보, 사이 12px

**흔한 오답** — 「카드 폭 320px (테두리까지)」에서 걸립니다

14번과 같은 함정입니다 — `box-sizing` 이 없으면 카드가 354px 이 됩니다.

```html
<article class="card">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='270'%3E%3Crect width='480' height='270' fill='%23b8c7d3'/%3E%3Ccircle cx='150' cy='110' r='40' fill='%23e5ecf2'/%3E%3Cpath d='M0 270 L170 150 L280 230 L360 170 L480 270 Z' fill='%2359677a'/%3E%3C/svg%3E" alt="폭설로 멈춘 버스">
  <h3>폭설 주의보</h3>
  <dl>
    <dt>기자</dt><dd>김하나</dd>
    <dt>날짜</dt><dd>2024-11-05</dd>
  </dl>
</article>
```

```css
.card {
  width: 320px;
  padding: 16px;
  border: 1px solid #d8dfe7;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card img {
  width: 100%;
}
.card h3,
.card dl {
  margin: 0;
}
```

---

### 문제 35. 안 먹는 스타일 고치기

**문제**

제목은 `#0d6b75` 이어야 하는데 **회색으로 나옵니다**. F12 로 이유를 찾아 CSS 를 고치시오.
- HTML 은 고칠 수 없습니다
- `!important` 는 쓰지 마십시오

**HTML (고정)**

```html
<article id="top-news" class="news">
  <h2 class="title">금리 동결</h2>
  <p>한국은행이 기준금리를 동결했다.</p>
</article>
```

**정답**

```css
#top-news h2 {
  color: #59677a;
}
#top-news .title {
  color: #0d6b75;
  font-size: 22px;
}
```

**해설**

F12 → Styles 를 보면 `.title` 의 color 에 **줄이 그어져** 있고, 위에 `#top-news h2` 가 이기고 있습니다. id 하나 + 태그 하나가 클래스 하나보다 점수가 높기 때문입니다.
고치는 길은 둘입니다 — 이기는 쪽의 점수를 넘기거나(`#top-news .title`: id + 클래스), 이기던 규칙이 필요 없으면 **지우거나**. 어느 쪽이든 결과가 같으면 정답입니다. 크기(22px)는 줄이 안 그어져 있었으니 원래 먹고 있던 것입니다.

**검사 항목** (3개)

1. 제목 글자 색 #0d6b75
2. 제목 글자 크기 22px (그대로)
3. !important 를 쓰지 않았다

**흔한 오답** — 「!important 를 쓰지 않았다」에서 걸립니다

가장 빨리 「먹게」 만드는 방법이라 손이 갑니다. 한 번 쓰면 그 위를 또 `!important` 로 눌러야 해서 점점 손댈 수 없게 됩니다.

```css
#top-news h2 {
  color: #59677a;
}
.title {
  color: #0d6b75 !important;
  font-size: 22px;
}
```

---

### 문제 36. 표 꾸미기

**문제**

표를 이렇게 꾸미시오.
- 칸 사이의 **겹선을 한 줄로**
- 모든 칸(`th` · `td`)에 테두리 `1px` 실선 `#d8dfe7`, 안쪽 여백 위아래 `8px` · 좌우 `12px`
- 머리 칸(`th`) 바탕 `#edf1f5`
- 숫자 칸(`.num`)만 **오른쪽 정렬** (분야 이름은 왼쪽 그대로)

**HTML (고정)**

```html
<table>
  <thead>
    <tr><th>분야</th><th>기사 수</th><th>평균 조회수</th></tr>
  </thead>
  <tbody>
    <tr><td>사회</td><td class="num">121</td><td class="num">1,845</td></tr>
    <tr><td>정치</td><td class="num">115</td><td class="num">2,102</td></tr>
    <tr><td>경제</td><td class="num">88</td><td class="num">1,560</td></tr>
    <tr><td>스포츠</td><td class="num">80</td><td class="num">2,733</td></tr>
  </tbody>
</table>
```

**정답**

```css
table {
  border-collapse: collapse;
}
th, td {
  border: 1px solid #d8dfe7;
  padding: 8px 12px;
}
th {
  background: #edf1f5;
}
.num {
  text-align: right;
}
```

**해설**

표의 칸은 기본으로 **각자 테두리**를 그려 이웃 칸과 두 줄이 됩니다. `border-collapse: collapse` 를 주면 이웃한 테두리를 한 줄로 합칩니다.
숫자는 오른쪽 정렬해야 자릿수가 맞아 크기를 비교하기 쉽습니다. 숫자 칸에만 class(`num`)를 붙여 두면 그 칸만 고를 수 있습니다.

**검사 항목** (6개)

1. 겹선이 한 줄 (border-collapse)
2. 모든 칸 테두리 1px 실선 #d8dfe7
3. 안쪽 여백 8px 12px
4. 숫자 칸은 오른쪽 정렬
5. 분야 이름 칸은 오른쪽 정렬이 아니다
6. 머리 칸 바탕 #edf1f5

**흔한 오답** — 「분야 이름 칸은 오른쪽 정렬이 아니다」에서 걸립니다

숫자만 오른쪽으로 보내려다 `td` 전체를 골라 분야 이름까지 오른쪽으로 갑니다. 그래서 숫자 칸에 class 가 붙어 있습니다.

```css
table {
  border-collapse: collapse;
}
th, td {
  border: 1px solid #d8dfe7;
  padding: 8px 12px;
}
th {
  background: #edf1f5;
}
td {
  text-align: right;
}
```

---

### 문제 37. 미디어 쿼리 없는 반응형

**문제**

**미디어 쿼리 없이**, 카드 폭이 **최소 280px** 을 지키면서 들어갈 만큼 열이 생기게 하시오. 남는 폭은 카드들이 고르게 나눠 가집니다.
(창 1000px → 3열 · 640px → 2열 · 375px → 1열이 됩니다)

**HTML (고정)**

```html
<div class="cards">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
  <div class="card">5</div>
  <div class="card">6</div>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.cards { display: grid; gap: 16px; }
.card { height: 80px; background: #e2f1f3; }
```

**정답**

```css
.cards {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
```

**해설**

`minmax(280px, 1fr)` 은 「최소 280px, 최대 남는 공간의 한 몫」, `repeat(auto-fill, …)` 은 「들어갈 만큼 열을 만든다」입니다. 둘을 합치면 **창 폭에 따라 열 수가 알아서** 바뀝니다.
1000px 이면 280px 짜리가 3장 들어가고(4장은 1168px 필요), 남는 폭을 셋이 나눠 323px 쯤이 됩니다.

**검사 항목** (5개)

1. 창 1000px — 한 줄에 3장 — 창 1000px
2. 창 1000px — 카드 폭이 같고 280px 이상 — 창 1000px
3. 창 640px — 한 줄에 2장 — 창 640px
4. 창 375px — 1열 (카드 폭 375px) — 창 375px
5. 미디어 쿼리를 쓰지 않았다

**흔한 오답** — 「창 375px — 1열 (카드 폭 375px)」에서 걸립니다

넓은 화면만 보고 3열로 고정하면, 휴대폰에서 카드가 100px 남짓으로 쪼그라듭니다.

```css
.cards {
  grid-template-columns: repeat(3, 1fr);
}
```

---

### 문제 38. 페이지 반응형

**문제**

페이지 틀을 이렇게 바꾸시오 (간격 16px 은 고정 CSS 에 있음).
- **넓을 때**(769px 이상): 머리는 위에 가로 전체 · 본문 | 곁 을 **2fr 1fr** 로 나란히 · 바닥은 아래 가로 전체
- **768px 이하**: 한 열로 머리 → 본문 → 곁 → 바닥 차례

**HTML (고정)**

```html
<div class="page">
  <header>머리</header>
  <main>본문</main>
  <aside>곁</aside>
  <footer>바닥</footer>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.page { display: grid; gap: 16px; }
.page > * { min-height: 60px; background: #e2f1f3; }
```

**정답**

```css
.page {
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "header header"
    "main   aside"
    "footer footer";
}
header { grid-area: header; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }
@media (max-width: 768px) {
  .page {
    grid-template-columns: 1fr;
    grid-template-areas: "header" "main" "aside" "footer";
  }
}
```

**해설**

넓은 화면의 배치를 먼저 쓰고, 좁을 때 `grid-template-areas` 그림만 **한 열로 다시 그리면** 됩니다. HTML 은 한 글자도 안 바뀝니다.
「769px 이상」의 반대는 「**768px 이하**」 = `max-width: 768px` 입니다. 경계는 늘 한쪽에만 포함되므로, 경계값 화면(768px)을 직접 넣어 보는 습관이 좋습니다.

**검사 항목** (5개)

1. 창 1000px — 머리가 맨 위 가로 전체 — 창 1000px
2. 창 1000px — 본문 656px | 곁 328px 나란히 — 창 1000px
3. 창 1000px — 바닥이 아래 가로 전체 — 창 1000px
4. 창 769px — 아직 본문 | 곁 나란히 — 창 769px
5. 창 768px — 한 열로 머리 → 본문 → 곁 → 바닥 — 창 768px

**흔한 오답** — 「창 768px — 한 열로 머리 → 본문 → 곁 → 바닥」에서 걸립니다

「769px 이상이 넓은 화면」을 거꾸로 옮기다 경계를 하나 어긋나게 쓴 경우입니다. 정확히 768px 인 화면(태블릿 세로)에서 틀립니다.

```css
.page {
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "header header"
    "main   aside"
    "footer footer";
}
header { grid-area: header; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }
@media (max-width: 767px) {
  .page {
    grid-template-columns: 1fr;
    grid-template-areas: "header" "main" "aside" "footer";
  }
}
```

---

### 문제 39. 어두운 화면 — 값만 바꾸기

**문제**

시작 코드는 밝은 화면입니다. 이 코드는 그대로 두고 **규칙을 더해서**, `<html data-theme="dark">` 일 때 **변수 값만 바꿔** 어두운 화면이 되게 하시오.
- 바탕 `#0e1418` · 카드 `#161f26` · 글자 `#e5ecf2`
- 흐린 글자(`--muted`)는 **카드 바탕 위에서 대비 4.5 : 1 이상**이 되는 색을 직접 고르시오
- 어두운 화면 규칙에는 **변수만** 적습니다 (`background` · `color` 를 다시 쓰지 말 것)
(채점할 때 검사가 `data-theme="dark"` 를 붙여 봅니다)

**HTML (고정)**

```html
<article class="card">
  <h3>금리 동결</h3>
  <p class="meta">김하나 · 11/05</p>
</article>
```

**정답**

```css
:root {
  --bg: #ffffff;
  --surface: #f3f5f7;
  --text: #16202a;
  --muted: #59677a;
}
:root[data-theme="dark"] {
  --bg: #0e1418;
  --surface: #161f26;
  --text: #e5ecf2;
  --muted: #93a2b2;
}
body {
  margin: 0;
  padding: 16px;
  background: var(--bg);
  color: var(--text);
}
.card {
  background: var(--surface);
  padding: 16px;
  border-radius: 8px;
}
.meta {
  color: var(--muted);
}
```

**해설**

색을 변수로 모아 두었으니, 어두운 화면은 **변수 네 개만** 다시 정하면 됩니다. `:root[data-theme="dark"]` 는 `:root` 보다 점수가 높아(속성 선택자 하나 더) 그 값이 이깁니다.
🔴 «값만 바꾸기»가 통하려면 **같은 뜻에만 같은 변수**를 써야 합니다. 흐린 글자처럼 바탕이 바뀌면 대비가 무너지는 색은 **재서** 고릅니다 — #93a2b2 는 카드 바탕 위에서 6.4 : 1 입니다.

**검사 항목** (5개)

1. 밝은 화면은 그대로 (바탕 #ffffff · 카드 #f3f5f7)
2. 어두운 화면 — 바탕 #0e1418 · 카드 #161f26
3. 어두운 화면 — 글자 #e5ecf2
4. 어두운 화면 — 흐린 글자 대비 4.5 : 1 이상
5. 어두운 화면 규칙에는 변수만 있다

**흔한 오답** — 「어두운 화면 — 흐린 글자 대비 4.5 : 1 이상」에서 걸립니다

바탕 · 글자만 바꾸고 흐린 글자를 잊은 경우입니다. 밝은 화면용 회색(#59677a)이 어두운 카드 위에서 2.9 : 1 로 거의 안 보입니다.

```css
:root {
  --bg: #ffffff;
  --surface: #f3f5f7;
  --text: #16202a;
  --muted: #59677a;
}
:root[data-theme="dark"] {
  --bg: #0e1418;
  --surface: #161f26;
  --text: #e5ecf2;
}
body {
  margin: 0;
  padding: 16px;
  background: var(--bg);
  color: var(--text);
}
.card {
  background: var(--surface);
  padding: 16px;
  border-radius: 8px;
}
.meta {
  color: var(--muted);
}
```

---

### 문제 40. 뉴스 목록 화면

**문제**

6일차에 만든 뉴스 목록 화면의 축소판을 HTML 과 CSS 로 만드시오.
- **머리**(`header`): 로고(`h1`, `오늘의 뉴스`)와 메뉴(`nav` 안의 링크 3개 — 정치 · 경제 · 사회). 로고는 머리 안쪽의 왼쪽 끝, 메뉴는 오른쪽 끝, 메뉴 링크는 한 줄
- **본문**(`main`): `ul.list` 안에 카드 `li.card` 4개 — 각 카드에 제목 `h3` 와 정보 `p.meta`
  - 금리 동결 / 김하나 · 11/05 · 신작 개봉 / 이도윤 · 11/05 · 폭설 주의보 / 박서준 · 11/04 · 야구 개막 / 최지우 · 11/04
- 목록의 점은 없앱니다
- 카드 목록: **넓을 때 2열**(사이 `16px`), **600px 이하에서 1열**
- 375px 화면에서 가로 스크롤이 없을 것

**CSS (고정)**

```css
body { margin: 0; font-family: sans-serif; }
```

**정답**

```html
<header class="top">
  <h1 class="logo">오늘의 뉴스</h1>
  <nav class="menu">
    <a href="#">정치</a>
    <a href="#">경제</a>
    <a href="#">사회</a>
  </nav>
</header>
<main>
  <ul class="list">
    <li class="card"><h3>금리 동결</h3><p class="meta">김하나 · 11/05</p></li>
    <li class="card"><h3>신작 개봉</h3><p class="meta">이도윤 · 11/05</p></li>
    <li class="card"><h3>폭설 주의보</h3><p class="meta">박서준 · 11/04</p></li>
    <li class="card"><h3>야구 개막</h3><p class="meta">최지우 · 11/04</p></li>
  </ul>
</main>
```

```css
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
}
.logo {
  margin: 0;
  font-size: 22px;
}
.menu {
  display: flex;
  gap: 12px;
}
.list {
  list-style: none;
  margin: 0;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.card {
  border: 1px solid #d8dfe7;
  border-radius: 8px;
  padding: 12px;
}
.card h3 {
  margin: 0 0 4px;
}
.meta {
  margin: 0;
  color: #59677a;
}
@media (max-width: 600px) {
  .list {
    grid-template-columns: 1fr;
  }
}
```

**해설**

이 화면은 JS 9일차 · React 10일차가 그대로 다시 씁니다. 머리는 **Flexbox**(한 줄 · 양 끝), 카드 목록은 **Grid**(판), 좁은 화면은 **미디어 쿼리** — 「한 줄은 Flex, 판은 Grid」입니다.
`ul` 은 기본 안쪽 여백(왼쪽 40px)과 바깥 여백이 있어서, 카드 목록으로 쓸 때는 점과 함께 여백도 정리합니다.

**검사 항목** (8개)

1. 구조 — 머리의 로고 h1 · 메뉴 링크 3개 · 카드 4장(제목 · 정보)
2. 로고는 머리 안쪽 왼쪽 끝, 메뉴는 오른쪽 끝 — 창 1000px
3. 메뉴 링크가 한 줄 — 창 1000px
4. 목록의 점이 없다
5. 창 1000px — 2열, 사이 16px — 창 1000px
6. 창 600px — 1열 — 창 600px
7. 창 601px — 아직 2열 — 창 601px
8. 창 375px — 가로 스크롤이 없다 — 창 375px

**흔한 오답** — 「창 600px — 1열」에서 걸립니다

넓은 화면을 다 맞추고 좁은 화면을 잊은 경우입니다. 600px 에서도 2열이라 카드가 좁아집니다.

```html
<header class="top">
  <h1 class="logo">오늘의 뉴스</h1>
  <nav class="menu">
    <a href="#">정치</a>
    <a href="#">경제</a>
    <a href="#">사회</a>
  </nav>
</header>
<main>
  <ul class="list">
    <li class="card"><h3>금리 동결</h3><p class="meta">김하나 · 11/05</p></li>
    <li class="card"><h3>신작 개봉</h3><p class="meta">이도윤 · 11/05</p></li>
    <li class="card"><h3>폭설 주의보</h3><p class="meta">박서준 · 11/04</p></li>
    <li class="card"><h3>야구 개막</h3><p class="meta">최지우 · 11/04</p></li>
  </ul>
</main>
```

```css
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
}
.logo {
  margin: 0;
  font-size: 22px;
}
.menu {
  display: flex;
  gap: 12px;
}
.list {
  list-style: none;
  margin: 0;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.card {
  border: 1px solid #d8dfe7;
  border-radius: 8px;
  padding: 12px;
}
.card h3 {
  margin: 0 0 4px;
}
.meta {
  margin: 0;
  color: #59677a;
}
```

---
