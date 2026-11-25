# HTML/CSS 연습 답안지 (해설 포함)

> 총 **40문제** — 초급 13 · 중급 18 · 고급 9 · 번호가 커질수록 어려워집니다
> 유형: 개념 확인 5 · 결과 예측 4 · 빈칸 채우기 3 · 오류 고치기 8 · 고쳐 쓰기 2 · 코드 작성 16 · 종합 구현 2
>
> 같은 화면을 그리는 다른 코드도 정답입니다. 채점은 쓴 방법이 아니라 **그려진 결과**(계산된 스타일 · 위치와 크기 · 구조)를 잽니다.
> 아래 정답은 모두 실제 Chrome 에서 검사를 전부 통과하고, 「흔한 오답」은 적힌 검사에서 실제로 걸리는 것을 확인한 것입니다.

## 빠른 찾기

- **초급**: 1~13번
- **중급**: 14~31번
- **고급**: 32~40번

---

## 초급

### 문제 1. 이름 있는 상자 고르기

*개념 확인 · 모두 고르기*

**문제**

화면에서는 모두 「아무 모양 없는 상자」로 보이지만, **이름에 뜻이 있는 상자**(시맨틱 태그)가 있습니다.
다음 중 시맨틱 태그를 **모두** 고르시오.

① `<div>`  
② `<nav>`  
③ `<span>`  
④ `<article>`  
⑤ `<footer>`  
⑥ `<section>`

**정답** — ② ④ ⑤ ⑥

**해설**

`nav`(메뉴) · `article`(혼자 떼어 내도 말이 되는 글 한 편) · `footer`(바닥) · `section`(주제로 묶인 구역)은 **태그 이름이 곧 뜻**입니다. 화면 읽기 프로그램 · 검색 엔진이 이 이름을 읽습니다.
`div` 는 구역(블록), `span` 은 글자 줄 안(인라인)의 **뜻 없는** 상자입니다. 모양을 잡으려고 묶을 때만 씁니다.

**흔한 오답** — ① ② ④ ⑤ ⑥

`div` 도 「구역을 나누는 상자」라 함께 고르기 쉽습니다. 하지만 `div` 는 이름에 아무 뜻이 없는 상자입니다 — 그래서 뜻이 없을 때 쓰는 «마지막 수단»입니다.

---

### 문제 2. strong 과 b

*개념 확인 · 하나 고르기*

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

### 문제 3. 순위 목록

*코드 작성 · HTML (body 안에 들어갈 내용)*

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

### 문제 4. 이름–값 목록

*코드 작성 · HTML (body 안에 들어갈 내용)*

**문제**

영화 「겨울 항구」의 정보를 **이름–값 목록**(`dl`)으로 만드시오.
- 감독 — 서유진
- 개봉 — 2024-12-18
- 출연 — 한도윤, 이서아 (**이름 하나에 값 둘** — 값마다 `dd` 를 따로)

**정답**

```html
<dl>
  <dt>감독</dt><dd>서유진</dd>
  <dt>개봉</dt><dd>2024-12-18</dd>
  <dt>출연</dt>
  <dd>한도윤</dd>
  <dd>이서아</dd>
</dl>
```

**해설**

`dl` 안에 `dt`(이름)와 `dd`(값)를 차례로 씁니다. 이름 하나에 값이 여럿이면 **`dd` 를 이어서 여러 개** 둡니다 — 반대로 값 하나에 이름이 여럿(`dt` 둘 다음 `dd` 하나)도 됩니다.
쉼표로 한 칸에 몰아 쓰면 화면은 비슷해도 「값이 둘」이라는 정보가 사라집니다.

**검사 항목** (4개)

1. dl 이 하나 있다
2. dt 3개 · dd 4개
3. 감독=서유진 · 개봉=2024-12-18
4. 출연 다음에 값(dd)이 둘 — 한도윤 / 이서아

**흔한 오답** — 「출연 다음에 값(dd)이 둘 — 한도윤 / 이서아」에서 걸립니다

`dt` 와 `dd` 는 꼭 한 쌍씩이라고 생각하기 쉽습니다. 값이 여럿이면 `dd` 를 여럿 둘 수 있고, 그래야 「출연자가 두 명」이라는 것이 태그로 드러납니다.

```html
<dl>
  <dt>감독</dt><dd>서유진</dd>
  <dt>개봉</dt><dd>2024-12-18</dd>
  <dt>출연</dt><dd>한도윤, 이서아</dd>
</dl>
```

---

### 문제 5. 문서 뼈대

*코드 작성 · HTML 문서 전체*

**문제**

다음 조건을 지키는 HTML 문서를 **처음부터** 작성하시오.
- 문서 형식 선언(`<!DOCTYPE html>`) · 언어는 한국어(`lang="ko"`) · 문자 인코딩은 UTF-8
- 탭에 보이는 제목은 `주간 편성표`
- 같은 폴더의 `css` 폴더 안에 있는 `style.css` 를 **이어 붙일 것**
- 본문에 `h1` 하나: `주간 편성표`

**정답**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>주간 편성표</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>주간 편성표</h1>
</body>
</html>
```

**해설**

`<link rel="stylesheet" href="…">` 는 `<head>` 안에 둡니다. `rel` 은 「이 파일은 스타일 시트다」, `href` 는 「어디에 있나」입니다 — 둘 중 하나만 틀려도 **아무 오류 없이** CSS 가 안 먹습니다(F12 의 Network 탭에서 확인).
`<!DOCTYPE html>` 을 빠뜨리면 브라우저가 **호환 모드**로 그려 표 안의 글자 크기 · 줄 높이 같은 것이 옛 브라우저 방식으로 바뀝니다. 글자는 똑같이 보여서 알아차리기 어렵습니다.

**검사 항목** (5개)

1. 맨 첫 줄이 문서 형식 선언(<!DOCTYPE html>)
2. html 의 lang 이 ko · meta charset 이 utf-8
3. 탭 제목이 「주간 편성표」
4. 본문의 h1 이 「주간 편성표」 하나
5. head 안에 css/style.css 를 잇는 link (rel="stylesheet")

**흔한 오답** — 「head 안에 css/style.css 를 잇는 link (rel="stylesheet")」에서 걸립니다

주소(`href`)만 맞으면 될 것 같지만, `rel="stylesheet"` 가 없으면 브라우저가 «무엇을» 잇는지 몰라 CSS 를 통째로 무시합니다. 오류도 안 납니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>주간 편성표</title>
  <link href="css/style.css">
</head>
<body>
  <h1>주간 편성표</h1>
</body>
</html>
```

---

### 문제 6. 링크 안의 사진

*코드 작성 · HTML (body 안에 들어갈 내용)*

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

**이렇게 써도 정답**

`./` 는 「이 파일이 있는 폴더」라는 뜻이라 `./detail.html` 과 `detail.html` 은 같은 파일입니다.

```html
<a href="./detail.html">
  <img src="./photo.jpg" alt="폭설로 멈춘 버스">
</a>
```

---

### 문제 7. 두 단계 위로 — 경로

*개념 확인 · 답 적기*

**문제**

폴더가 이렇게 되어 있습니다.
```text
site/
├─ assets/
│   └─ cover.png
└─ shows/
    └─ 2024/
        └─ ep01.html
```
`shows/2024/ep01.html` 에서 표지 그림을 띄우려 합니다. `<img src="?">` 의 `?` 에 쓸 **상대 경로**를 적으시오.

**정답** — `../../assets/cover.png` (`./../../assets/cover.png` 도 정답)

**해설**

경로는 **그 HTML 파일이 있는 폴더**(`shows/2024/`)에서 출발합니다. `../` 한 번에 한 칸씩 올라갑니다.
`../` → `shows/`, `../../` → `site/`, 거기서 `assets/cover.png` 로 내려갑니다. 그래서 `../../assets/cover.png` 입니다.

**흔한 오답** — `../assets/cover.png`

`../` 를 한 번만 쓰면 `shows/` 까지만 올라가서 `shows/assets/cover.png` 를 찾습니다. 파일이 «두 겹» 안에 있다는 것을 세지 않은 경우입니다.

---

### 문제 8. 이어지지 않은 글자표

*오류 고치기 · HTML (body 안에 들어갈 내용)*

**문제**

공연 예매 오픈 알림을 신청하는 폼입니다. 그런데 글자표 「이름」「이메일」을 눌러도 **칸에 커서가 가지 않습니다**.
- 두 글자표가 **각자 자기 칸과 이어지게** 고치시오
- 이메일 칸은 이메일 형식 칸(`type="email"`)으로 바꾸시오
(미리보기에서 버튼을 눌러도 아무 데도 보내지 않습니다)

**시작 코드**

```html
<form>
  <label for="name">이름</label>
  <input type="text" id="username">
  <label>이메일</label>
  <input type="text" id="mail">
  <button type="submit">알림 신청</button>
</form>
```

**정답**

```html
<form>
  <label for="name">이름</label>
  <input type="text" id="name">
  <label for="mail">이메일</label>
  <input type="email" id="mail">
  <button type="submit">알림 신청</button>
</form>
```

**해설**

`label` 의 `for` 와 `input` 의 `id` 가 **글자까지 같아야** 이어집니다(`name` ≠ `username`). 이어지면 글자표를 눌러도 칸이 선택되고, 화면 읽기 프로그램이 칸의 이름을 읽어 줍니다.
`type="email"` 은 제출할 때 「@」가 없으면 막아 주고, 휴대폰에서는 @ 가 있는 자판을 띄웁니다. `<label>이메일 <input …></label>` 처럼 감싸도 이어집니다.

**검사 항목** (4개)

1. 「이름」 글자표가 칸과 이어져 있다
2. 「이메일」 글자표가 칸과 이어져 있다
3. 「이메일」 칸이 이메일 형식(type=email)
4. form 안에 「알림 신청」 버튼

**흔한 오답** — 「「이메일」 글자표가 칸과 이어져 있다」에서 걸립니다

「이름」만 고치고 나면 다 된 것 같습니다. `for` 가 아예 없는 「이메일」 글자표는 칸 바로 옆에 있어도 남남입니다 — 글자표를 하나씩 눌러 보면 압니다.

```html
<form>
  <label for="name">이름</label>
  <input type="text" id="name">
  <label>이메일</label>
  <input type="email" id="mail">
  <button type="submit">알림 신청</button>
</form>
```

---

### 문제 9. 머리 줄이 섞인 표

*오류 고치기 · HTML (body 안에 들어갈 내용)*

**문제**

팟캐스트 회차 표에 잘못된 곳이 **두 군데** 있습니다. 고치시오.
- 머리 줄(회차 · 제목 · 재생 수)이 몸통(`tbody`) 안에 들어가 있다 → 머리 줄은 `thead` 로
- 13회 줄은 칸이 하나 모자란다 → 13회의 재생 수는 `7,302`

**시작 코드**

```html
<table>
  <tbody>
    <tr><th>회차</th><th>제목</th><th>재생 수</th></tr>
    <tr><td>12</td><td>첫 출근 브이로그</td><td>8,420</td></tr>
    <tr><td>13</td><td>편집실의 하루</td></tr>
    <tr><td>14</td><td>라이브 뒷이야기</td><td>6,915</td></tr>
  </tbody>
</table>
```

**정답**

```html
<table>
  <thead>
    <tr><th>회차</th><th>제목</th><th>재생 수</th></tr>
  </thead>
  <tbody>
    <tr><td>12</td><td>첫 출근 브이로그</td><td>8,420</td></tr>
    <tr><td>13</td><td>편집실의 하루</td><td>7,302</td></tr>
    <tr><td>14</td><td>라이브 뒷이야기</td><td>6,915</td></tr>
  </tbody>
</table>
```

**해설**

`thead` 를 안 쓰면 브라우저가 **몰래 `tbody` 하나에 모든 줄을 넣습니다**(F12 의 Elements 에 보입니다). 그러면 「어느 줄이 머리인가」가 태그로 드러나지 않고, 머리 줄만 꾸미기도 어렵습니다.
줄마다 칸 수가 다르면 표가 들쭉날쭉해집니다. 브라우저는 오류를 내지 않으므로 **세어 보는 수밖에** 없습니다.

**검사 항목** (4개)

1. 머리 줄(thead)에 칸(th) 3개
2. 몸통(tbody)에는 회차 3줄만
3. 몸통 줄마다 칸이 3개
4. 13회 줄의 재생 수가 7,302

**흔한 오답** — 「몸통 줄마다 칸이 3개」에서 걸립니다

칸이 모자란 줄도 브라우저는 오류 없이 그립니다 — 오른쪽 끝이 비어 있을 뿐이라 눈에 잘 안 띕니다. 줄마다 칸 수를 세어 보는 습관이 필요합니다.

```html
<table>
  <thead>
    <tr><th>회차</th><th>제목</th><th>재생 수</th></tr>
  </thead>
  <tbody>
    <tr><td>12</td><td>첫 출근 브이로그</td><td>8,420</td></tr>
    <tr><td>13</td><td>편집실의 하루</td></tr>
    <tr><td>14</td><td>라이브 뒷이야기</td><td>6,915</td></tr>
  </tbody>
</table>
```

---

### 문제 10. 클래스 선택자

*빈칸 채우기 · CSS*

**문제**

기사 제목(`title` 클래스)만 글자 색을 `#0d6b75` 로 바꾸려 합니다. 「많이 본 기사」 제목은 그대로 둡니다.
빈칸(`___`)에 알맞은 **선택자**를 채우시오.

**HTML (고정)**

```html
<h2 class="title">금리 동결</h2>
<p>한국은행이 기준금리를 동결했다.</p>
<h2>많이 본 기사</h2>
<h2 class="title">신작 개봉</h2>
```

**시작 코드**

```css
___ {
  color: #0d6b75;
}
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

*코드 작성 · CSS*

**문제**

**회차 목록(`.episodes`) 안의 링크만** 밑줄을 없애시오. 아래 「유튜브」 구독 링크는 밑줄이 그대로 있어야 합니다.

**HTML (고정)**

```html
<ul class="episodes">
  <li><a href="#">12회 첫 출근 브이로그</a></li>
  <li><a href="#">13회 편집실의 하루</a></li>
</ul>
<p class="sns">구독하기: <a href="#">유튜브</a></p>
```

**정답**

```css
.episodes a {
  text-decoration: none;
}
```

**해설**

선택자 사이의 **띄어쓰기**는 「안에 있는」이라는 뜻입니다. `.episodes a` 는 「class="episodes" 안에 있는 a」만 고릅니다. 바로 아래 자식이 아니라 `li` 를 한 겹 거쳐 있어도 고릅니다(바로 아래만 고르려면 `>`).

**검사 항목** (2개)

1. 회차 목록 안 링크의 밑줄이 없다
2. 구독 링크의 밑줄은 그대로

**흔한 오답** — 「구독 링크의 밑줄은 그대로」에서 걸립니다

`a` 하나로 쓰면 짧고 회차 목록도 잘 바뀌어서, 아래 구독 링크까지 바뀐 것을 못 보고 넘어갑니다.

```css
a {
  text-decoration: none;
}
```

---

### 문제 12. 글자 꾸미기

*코드 작성 · CSS*

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

다른 속성처럼 단위를 붙이는 습관 때문에 `1.6px` 로 쓰기 쉽습니다. 그러면 줄 간격이 1.6px 이 되어 줄이 완전히 겹칩니다.

```css
.news p {
  font-size: 18px;
  line-height: 1.6px;
  color: #333333;
}
```

---

### 문제 13. 안쪽과 바깥쪽

*오류 고치기 · CSS*

**문제**

카드 글자가 **테두리에 딱 붙어** 있고, 카드끼리는 너무 벌어져 있습니다. 아래처럼 되게 고치시오.
- 글자와 테두리 사이(안쪽 여백) `16px` — 네 방향 모두
- 카드 사이 간격 `12px`
- 테두리(`1px` 실선 `#d8dfe7`)는 그대로

**HTML (고정)**

```html
<div class="card">첫 번째 카드</div>
<div class="card">두 번째 카드</div>
```

**CSS (고정)**

```css
body { margin: 0; }
```

**시작 코드**

```css
.card {
  margin: 16px;
  border: 1px solid #d8dfe7;
}
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

상자는 안에서부터 **내용 → 안쪽 여백(padding) → 테두리(border) → 바깥 여백(margin)** 네 겹입니다. 글자가 테두리에 붙은 것은 안쪽 여백이 없어서, 카드가 벌어진 것은 바깥 여백 때문입니다.
위아래로 맞닿은 두 바깥 여백은 **더해지지 않고 큰 쪽 하나만** 남습니다(16 + 16 이 아니라 16). F12 의 Computed 탭 상자 그림으로 네 겹을 숫자로 볼 수 있습니다.

**검사 항목** (3개)

1. 안쪽 여백 16px
2. 테두리 1px 실선 #d8dfe7
3. 두 카드 사이 간격 12px

**흔한 오답** — 「두 카드 사이 간격 12px」에서 걸립니다

안쪽 여백을 더하고 나면 다 고친 것 같지만, 원래 있던 `margin: 16px` 이 남아 카드 사이가 여전히 16px 입니다.

```css
.card {
  margin: 16px;
  padding: 16px;
  border: 1px solid #d8dfe7;
}
```

---

## 중급

### 문제 14. div 를 이름 있는 상자로

*고쳐 쓰기 · HTML (body 안에 들어갈 내용)*

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

**시작 코드**

```html
<div class="header">
  <div class="logo">오늘의 뉴스</div>
  <div class="menu"><a href="#">정치</a><a href="#">경제</a></div>
</div>
<div class="main">
  <div class="news">
    <div class="title">금리 동결</div>
    <div class="body">한국은행이 기준금리를 동결했다.</div>
  </div>
</div>
<div class="footer">© 오늘의 뉴스</div>
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

### 문제 15. border-box 상자가 차지하는 자리

*결과 예측 · 답 적기*

**문제**

다음 상자가 가로로 **차지하는 자리**(바깥 여백까지 포함)는 몇 px 입니까?
```css
.box {
  box-sizing: border-box;
  width: 240px;
  padding: 20px;
  border: 4px solid #16202a;
  margin: 10px;
}
```

**정답** — `260` px — 실제 Chrome 에서 그려 재서 확인한 값

**해설**

`border-box` 에서 `width: 240px` 은 **테두리까지 포함한** 폭이라 보이는 상자가 240px 입니다(글이 놓이는 폭은 240 − 20×2 − 4×2 = 192px).
바깥 여백은 테두리 밖이라 따로 더합니다 — 240 + 10×2 = **260px**. 보이는 폭(240)과 차지하는 자리(260)를 구별하십시오.

**흔한 오답** — `308`

기본값(content-box)처럼 계산해 240 + 20×2 + 4×2 + 10×2 = 308 로 답한 경우입니다. `border-box` 에서는 width 가 이미 테두리까지 포함합니다.

---

### 문제 16. 글이 놓이는 폭 맞추기

*코드 작성 · CSS*

**문제**

모든 상자가 `border-box` 입니다(고정 CSS). 안내 상자 `.note` 를 이렇게 만드시오.
- **글이 놓이는 폭**(내용 폭)이 정확히 `200px`
- 안쪽 여백 `16px`(네 방향), 테두리 `2px` 실선 `#d8dfe7`

**HTML (고정)**

```html
<div class="note">편성 안내 — 이번 주 금요일은 특집 생방송으로 정규 방송을 쉽니다.</div>
```

**CSS (고정)**

```css
body { margin: 0; }
*, *::before, *::after { box-sizing: border-box; }
```

**정답**

```css
.note {
  width: 236px;
  padding: 16px;
  border: 2px solid #d8dfe7;
}
```

**해설**

`border-box` 의 `width` = 내용 + 안쪽 여백 + 테두리 입니다. 거꾸로 풀면 200 + 16×2 + 2×2 = **236px**.
이 상자만 `box-sizing: content-box` 로 되돌리고 `width: 200px` 로 써도 같은 화면이라 정답입니다 — 채점은 그려진 결과를 잽니다.

**검사 항목** (3개)

1. 글이 놓이는 폭 200px
2. 안쪽 여백 16px
3. 테두리 2px 실선 #d8dfe7

**흔한 오답** — 「글이 놓이는 폭 200px」에서 걸립니다

「200px 이면 width: 200px」 이라고 쓰기 쉽습니다. border-box 에서는 그 200 안에서 안쪽 여백 · 테두리를 빼므로 글 폭은 164px 밖에 안 됩니다.

```css
.note {
  width: 200px;
  padding: 16px;
  border: 2px solid #d8dfe7;
}
```

---

### 문제 17. 점수가 같을 때 · 다를 때

*결과 예측 · 하나 고르기*

**문제**

다음에서 「별점 4.5」의 글자 색은 무엇입니까?
```html
<section class="review">
  <p class="score">별점 4.5</p>
</section>
```
```css
.review p { color: green; }
p.score   { color: blue; }
.score    { color: red; }
```

① 초록 (green)  
② 파랑 (blue)  
③ 빨강 (red)  
④ 검정 — 셋이 부딪혀 아무것도 안 먹는다

**정답** — ② 파랑 (blue)

**해설**

먼저 **점수**를 셉니다. `.review p` 는 클래스 1 + 태그 1, `p.score` 도 클래스 1 + 태그 1 — **같은 점수**입니다. `.score` 는 클래스 1 뿐이라 가장 낮습니다.
가장 높은 점수가 둘이므로 그 둘 중 **나중에 적힌** `p.score` 가 이깁니다 — 파랑. `.score` 는 맨 뒤에 있어도 점수에서 졌습니다.

**흔한 오답** — ③

「맨 나중에 쓴 것이 이긴다」만 기억하면 빨강을 고릅니다. 순서는 **점수가 같을 때만** 따집니다 — `.score` 는 점수가 가장 낮습니다.

---

### 문제 18. 우선순위 ②

*개념 확인 · 하나 고르기*

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

### 문제 19. 단추는 글꼴을 물려받지 않는다

*고쳐 쓰기 · CSS*

**문제**

문단은 둘러싼 `.sub` 의 글꼴(Georgia · 18px)을 물려받는데, **단추는 물려받지 않아서** 누군가 시작 코드처럼 값을 다시 적어 맞춰 두었습니다.
지금 화면은 맞지만, `.sub` 의 글꼴을 바꾸는 날 단추만 옛 글꼴로 남습니다. 단추가 **둘러싼 글꼴을 물려받게** 고치시오. 단추 규칙에 글꼴 이름 · 크기 값을 직접 쓰지 말 것.

**HTML (고정)**

```html
<section class="sub">
  <p>매주 금요일, 새 회차 알림을 받아 보세요.</p>
  <button type="button">구독하기</button>
</section>
```

**CSS (고정)**

```css
.sub { font-family: Georgia, serif; font-size: 18px; }
```

**시작 코드**

```css
button {
  font-family: Georgia, serif;
  font-size: 18px;
}
```

**정답**

```css
button {
  font-family: inherit;
  font-size: inherit;
}
```

**해설**

글꼴 · 글자 색 같은 «글자» 속성은 보통 안쪽 요소가 물려받지만, **폼 요소(`button` · `input` · `select`)는 브라우저가 자기 글꼴을 따로** 정해 두어서 물려받지 않습니다(링크가 파란색을 따로 갖는 것과 같은 이치).
`inherit` 는 「둘러싼 요소의 값을 그대로」입니다. `font: inherit;` 한 줄로 글꼴 · 크기 · 굵기를 한꺼번에 물려받게 할 수도 있습니다.

**검사 항목** (3개)

1. 단추 글자 크기 18px
2. 단추 글꼴이 문단과 같다
3. .sub 의 글꼴을 바꾸면 단추도 따라 바뀐다

**흔한 오답** — 「.sub 의 글꼴을 바꾸면 단추도 따라 바뀐다」에서 걸립니다

시작 코드 그대로입니다. 지금 화면은 정답과 똑같아서 고칠 이유를 못 느끼지만, 값이 두 곳에 있어 한쪽만 바뀌는 날 어긋납니다.

```css
button {
  font-family: Georgia, serif;
  font-size: 18px;
}
```

---

### 문제 20. inline-block

*코드 작성 · CSS*

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

### 문제 21. 오른쪽 끝에 모으기

*빈칸 채우기 · CSS*

**문제**

공연 예매 화면 아래의 단추 줄입니다. 두 단추를 한 줄에 나란히(사이 `8px`) 두고 **오른쪽 끝**에 모으려 합니다. **Flexbox 로** — 빈칸(`___`) 두 곳을 채우시오.

**HTML (고정)**

```html
<div class="bar">
  <button type="button">취소</button>
  <button type="button">좌석 선택 완료</button>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.bar { width: 600px; padding: 8px; background: #edf1f5; box-sizing: border-box; }
button { margin: 0; }
```

**시작 코드**

```css
.bar {
  display: ___;
  justify-content: ___;
  gap: 8px;
}
```

**정답**

```css
.bar {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
```

**해설**

`justify-content` 는 **주축(가로)** 에서 아이템을 어디로 모을지 정합니다. `flex-start`(기본 — 왼쪽) · `center` · `flex-end`(오른쪽) · `space-between`(양 끝).
확인 · 다음 같은 «앞으로 가는» 단추를 오른쪽 끝에 두는 것은 흔한 화면 관례입니다.

**검사 항목** (4개)

1. 두 단추가 한 줄
2. 「좌석 선택 완료」가 줄의 오른쪽 끝
3. 단추 사이 8px
4. Flexbox 로 풀었다 (.bar 가 flex 상자)

**흔한 오답** — 「「좌석 선택 완료」가 줄의 오른쪽 끝」에서 걸립니다

`justify-content` 만 맞게 쓰고 `display` 를 그대로 두면 아무 오류 없이 **무시됩니다**. 이 속성은 flex(또는 grid) 상자에서만 일합니다.

```css
.bar {
  display: block;
  justify-content: flex-end;
  gap: 8px;
}
```

**화면은 같아도 오답** — 「Flexbox 로 풀었다 (.bar 가 flex 상자)」에서 걸립니다

Grid 로도 같은 화면이 나오지만 이 문제는 Flexbox 의 `justify-content` 를 묻습니다.

```css
.bar {
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  gap: 8px;
}
```

---

### 문제 22. 양 끝 정렬

*코드 작성 · CSS*

**문제**

머리(`.top`, 폭 800px · 이미 flex)에서 **로고는 왼쪽 끝, 메뉴는 오른쪽 끝**에 놓으시오. Flexbox 로 풉니다(머리의 `display` 는 바꾸지 말 것).

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

**검사 항목** (4개)

1. 로고가 머리의 왼쪽 끝
2. 메뉴가 머리의 오른쪽 끝
3. 로고와 메뉴가 한 줄
4. Flexbox 로 풀었다 (.top 가 flex 상자)

**흔한 오답** — 「로고가 머리의 왼쪽 끝」에서 걸립니다

「가운데로 벌린다」와 「양 끝으로 민다」를 헷갈리는 경우입니다.

```css
.top {
  justify-content: center;
}
```

**화면은 같아도 오답** — 「Flexbox 로 풀었다 (.top 가 flex 상자)」에서 걸립니다

머리를 Grid 로 바꿔도 양 끝에 놓이지만, 이미 flex 인 상자에서 `justify-content` 하나로 끝나는 문제입니다.

```css
.top {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
}
```

---

### 문제 23. 세로 가운데

*오류 고치기 · CSS*

**문제**

사진(`.thumb`, 높이 80px)과 제목(`.txt`)을 **세로 가운데**로 맞추려고 시작 코드처럼 썼는데 **아무 일도 일어나지 않습니다**. 고치시오.
제목 상자가 사진 높이만큼 늘어나지 않아야 합니다. `.row` 는 flex 상자 그대로 둡니다(Flexbox 로 풀 것).

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

**시작 코드**

```css
.txt {
  vertical-align: middle;
}
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

**검사 항목** (3개)

1. 제목 상자가 80px 까지 늘어나지 않았다
2. 사진과 제목의 세로 중심이 같다
3. Flexbox 로 풀었다 (.row 가 flex 상자)

**흔한 오답** — 「제목 상자가 80px 까지 늘어나지 않았다」에서 걸립니다

`vertical-align` 은 글자 줄 안에서만 쓰는 속성이라 flex 아이템에는 아무 일도 안 합니다. 이름 때문에 가장 먼저 떠올리기 쉽습니다.

```css
.txt {
  vertical-align: middle;
}
```

**화면은 같아도 오답** — 「Flexbox 로 풀었다 (.row 가 flex 상자)」에서 걸립니다

Grid 로 바꿔 `align-items: center` 를 줘도 화면은 같지만, flex 상자 그대로 고치는 문제입니다.

```css
.row {
  display: grid;
  grid-template-columns: 80px auto;
  justify-content: start;
  align-items: center;
}
```

---

### 문제 24. gap

*오류 고치기 · CSS*

**문제**

카드 **사이**를 `16px` 로 벌리려고 시작 코드처럼 썼더니, 사이는 16px 이 되었지만 **첫 카드가 왼쪽 끝에서 8px 떨어졌습니다**.
첫 카드는 왼쪽 끝에 붙고, 카드 사이만 16px 이 되게 고치시오. `.cards` 는 flex 상자 그대로 둡니다.

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

**시작 코드**

```css
.card {
  margin: 0 8px;
}
```

**정답**

```css
.cards {
  gap: 16px;
}
```

**해설**

`gap` 은 아이템 **사이에만** 간격을 둡니다. 바깥 양 끝에는 안 생기므로 margin 으로 끝을 따로 처리할 필요가 없습니다. 줄이 바뀌면(`flex-wrap`) 줄 사이에도 같은 간격이 생깁니다.

**검사 항목** (4개)

1. 첫 카드가 왼쪽 끝
2. 1번과 2번 사이 16px
3. 2번과 3번 사이 16px
4. Flexbox 로 풀었다 (.cards 가 flex 상자)

**흔한 오답** — 「첫 카드가 왼쪽 끝」에서 걸립니다

시작 코드 그대로입니다. 카드마다 양쪽 8px 이면 사이는 16px 이 맞지만, 첫 카드 왼쪽 · 마지막 카드 오른쪽에도 8px 이 생깁니다.

```css
.card {
  margin: 0 8px;
}
```

**화면은 같아도 오답** — 「Flexbox 로 풀었다 (.cards 가 flex 상자)」에서 걸립니다

Grid 로 바꿔도 사이 16px 이 되지만, flex 상자 그대로 간격을 고치는 문제입니다.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 16px;
}
```

---

### 문제 25. flex-wrap

*코드 작성 · CSS*

**문제**

폭 540px 상자에 250px 카드 네 장이 한 줄로 **우겨 들어가 줄어들었습니다**. 카드 폭(250px)은 그대로 두고, 넘치는 카드는 **다음 줄로** 넘기시오 (한 줄에 2장씩 2줄). `.cards` 는 flex 상자 그대로 — Flexbox 로 풉니다.

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

**검사 항목** (3개)

1. 카드 폭이 모두 250px
2. 한 줄에 2장씩 2줄
3. Flexbox 로 풀었다 (.cards 가 flex 상자)

**흔한 오답** — 「한 줄에 2장씩 2줄」에서 걸립니다

줄어들지 않게 막으면 폭은 250px 이 되지만, 한 줄로 그대로 있어 상자 밖으로 삐져나갑니다.

```css
.card {
  flex-shrink: 0;
}
```

**화면은 같아도 오답** — 「Flexbox 로 풀었다 (.cards 가 flex 상자)」에서 걸립니다

Grid 로 2열을 직접 그리면 같은 화면이지만, 「넘치면 다음 줄로」 를 Flexbox 로 하는 문제입니다.

```css
.cards {
  display: grid;
  grid-template-columns: 250px 250px;
}
```

---

### 문제 26. flex-direction

*코드 작성 · CSS*

**문제**

영화 포스터 카드(`.poster`, 이미 flex) 안의 세 요소(포스터 · 제목 · 정보)가 **위에서 아래로** 쌓이고, 사이 간격이 `8px` 이 되게 하시오. 포스터는 카드 폭에 꽉 차야 합니다.

**HTML (고정)**

```html
<article class="poster">
  <div class="pic"></div>
  <h3>겨울 항구</h3>
  <p class="meta">드라마 · 118분</p>
</article>
```

**CSS (고정)**

```css
body { margin: 0; }
.poster { display: flex; width: 300px; }
.pic { height: 120px; background: #b8c7d3; }
h3, p { margin: 0; }
```

**정답**

```css
.poster {
  flex-direction: column;
  gap: 8px;
}
```

**해설**

`flex-direction: column` 은 **주축을 세로로** 바꿉니다. 이제 아이템이 위에서 아래로 놓이고, `gap` 은 세로 간격이 됩니다.
축이 바뀌면 `justify-content`(주축)와 `align-items`(교차축)의 방향도 같이 바뀝니다 — 기본 `stretch` 가 이번엔 **가로로** 늘려서 포스터가 300px 에 꽉 찹니다.

**검사 항목** (4개)

1. 포스터가 카드 폭(300px)에 꽉 찬다
2. 포스터 아래 8px 에 제목
3. 제목 아래 8px 에 정보
4. Flexbox 로 풀었다 (.poster 가 flex 상자 · flex-direction: column)

**흔한 오답** — 「포스터가 카드 폭(300px)에 꽉 찬다」에서 걸립니다

간격만 주면 셋이 여전히 가로로 놓입니다. 폭을 안 준 포스터는 가로 줄에서 폭이 0 이 되어 아예 안 보입니다.

```css
.poster {
  gap: 8px;
}
```

**화면은 같아도 오답** — 「Flexbox 로 풀었다 (.poster 가 flex 상자 · flex-direction: column)」에서 걸립니다

flex 를 꺼서 블록으로 쌓고 바깥 여백으로 간격을 맞추면 화면은 같습니다. 이 문제는 Flexbox 의 **축을 바꾸는** 문제입니다.

```css
.poster {
  display: block;
}
h3, .meta {
  margin-top: 8px;
}
```

---

### 문제 27. 고정 열과 fr 이 섞일 때

*결과 예측 · 답 적기*

**문제**

다음 판에서 **가운데 열**의 폭은 몇 px 입니까?
```css
.grid {
  display: grid;
  width: 840px;
  grid-template-columns: 200px 1fr 1fr;
  gap: 20px;
}
```

**정답** — `300` px — 실제 Chrome 에서 그려 재서 확인한 값

**해설**

`fr` 은 **고정된 것과 간격을 모두 빼고 남은 공간**을 나눕니다. 840 − 200(고정 열) − 20×2(간격 둘) = 600, 그것을 `1fr 1fr` 로 반씩 — **300px** 입니다.

**흔한 오답** — `320`

고정 열 200px 만 빼고 (840 − 200) ÷ 2 = 320 으로 나눈 경우입니다. 열이 셋이면 **간격도 둘**이라 그것도 먼저 빼야 합니다.

---

### 문제 28. fr 비율

*빈칸 채우기 · CSS*

**문제**

Grid 로 본문(`main`)과 곁(`aside`)의 폭을 **2 : 1** 로 나누고 사이 간격을 `24px` 로 하려 합니다. 빈칸(`___`) 두 곳을 채우시오.

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

**시작 코드**

```css
.page {
  display: grid;
  grid-template-columns: ___;
  gap: ___;
}
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

**검사 항목** (4개)

1. 본문 폭 624px ((960 − 24) × 2/3)
2. 곁 폭 312px
3. 나란히, 사이 24px
4. Grid 로 풀었다 (.page 가 grid 상자)

**흔한 오답** — 「본문 폭 624px ((960 − 24) × 2/3)」에서 걸립니다

2 : 1 을 퍼센트(66% · 33%)로 옮긴 경우입니다. 퍼센트는 간격을 모르고 나눠서, 간격 24px 이 더해져 판을 넘칩니다.

```css
.page {
  display: grid;
  grid-template-columns: 66% 33%;
  gap: 24px;
}
```

**화면은 같아도 오답** — 「Grid 로 풀었다 (.page 가 grid 상자)」에서 걸립니다

Flexbox 의 `flex: 2` · `flex: 1` 로도 2 : 1 이 되지만, 이 문제는 Grid 의 `fr` 을 묻습니다.

```css
.page {
  display: flex;
  gap: 24px;
}
main {
  flex: 2;
}
aside {
  flex: 1;
}
```

---

### 문제 29. grid-template-areas

*코드 작성 · CSS*

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

**검사 항목** (6개)

1. 머리가 맨 위, 폭 1000px
2. 메뉴가 머리 바로 아래, 폭 1000px
3. 본문이 메뉴 아래 왼쪽, 폭 750px
4. 곁이 본문 오른쪽, 폭 250px
5. 바닥이 맨 아래, 폭 1000px
6. Grid 의 grid-template-areas 로 풀었다

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

**화면은 같아도 오답** — 「Grid 의 grid-template-areas 로 풀었다」에서 걸립니다

줄 번호(`grid-column: 1 / -1`)로도 같은 배치가 나오지만, 이 문제는 `grid-template-areas` 로 **그림처럼** 그리는 것을 묻습니다.

```css
.page {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
header, nav, footer {
  grid-column: 1 / -1;
}
```

---

### 문제 30. 표 꾸미기

*코드 작성 · CSS*

**문제**

표를 이렇게 꾸미시오.
- 칸 사이의 **겹선을 한 줄로**
- 모든 칸(`th` · `td`)에 테두리 `1px` 실선 `#d8dfe7`, 안쪽 여백 위아래 `8px` · 좌우 `12px`
- 머리 칸(`th`) 바탕 `#edf1f5`
- 숫자 칸(`.num`)만 **오른쪽 정렬** (회차 제목은 왼쪽 그대로)

**HTML (고정)**

```html
<table>
  <thead>
    <tr><th>제목</th><th>재생 수</th><th>평균 청취(분)</th></tr>
  </thead>
  <tbody>
    <tr><td>첫 출근 브이로그</td><td class="num">8,420</td><td class="num">31</td></tr>
    <tr><td>편집실의 하루</td><td class="num">7,302</td><td class="num">27</td></tr>
    <tr><td>라이브 뒷이야기</td><td class="num">6,915</td><td class="num">42</td></tr>
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
5. 제목 칸은 오른쪽 정렬이 아니다
6. 머리 칸 바탕 #edf1f5

**흔한 오답** — 「제목 칸은 오른쪽 정렬이 아니다」에서 걸립니다

숫자만 오른쪽으로 보내려다 `td` 전체를 골라 제목까지 오른쪽으로 갑니다. 그래서 숫자 칸에 class 가 붙어 있습니다.

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

### 문제 31. 변수로 묶어도 되는 것

*개념 확인 · 모두 고르기*

**문제**

공연 예매 사이트에서 보라색 `#6b3fa0` 이 다섯 군데에 쓰였습니다. 이 색을 `:root { --brand: #6b3fa0; }` 하나로 묶으려 합니다.
**브랜드 색을 바꾸는 날 함께 바뀌어야 하는 것**만 `var(--brand)` 로 묶어야 합니다. 묶어도 되는 것을 **모두** 고르시오.

① 로고 글자 색  
② 「예매하기」 단추의 바탕색  
③ 선택한 좌석의 테두리 색  
④ 「매진 임박」 경고 글자 색 — 남은 좌석이 적다는 알림  
⑤ 메뉴에서 «지금 보는 곳»을 표시하는 밑줄 색

**정답** — ① ② ③ ⑤

**해설**

변수는 **같은 숫자가 아니라 같은 뜻**을 묶습니다. 로고 · 예매 단추 · 선택한 좌석 · 지금 보는 곳 표시는 모두 「우리 브랜드」라는 뜻이라 함께 바뀌어야 합니다.
「매진 임박」은 **경고**라는 다른 뜻인데 지금 우연히 같은 색일 뿐입니다. `--warn` 같은 다른 이름으로 따로 두어야 브랜드 색을 바꿔도 경고는 경고로 남습니다.

**흔한 오답** — ① ② ③ ④ ⑤

값이 지금 똑같이 `#6b3fa0` 이라 다섯 개를 다 묶기 쉽습니다. 그러면 브랜드 색을 초록으로 바꾸는 날 「매진 임박」 경고까지 초록이 되어 경고로 안 보입니다.

---

## 고급

### 문제 32. 미디어 쿼리

*코드 작성 · CSS*

**문제**

창이 **넓으면 3열**, 창 폭이 **600px 이하면 1열**이 되게 하시오. (601px 이면 3열입니다.) `.grid` 는 이미 grid 상자입니다 — Grid 의 열로 푸십시오.
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

**검사 항목** (5개)

1. 창 1000px — 한 줄에 3칸 — 창 1000px
2. 창 1000px — 칸 폭 320px — 창 1000px
3. 창 601px — 아직 3칸 — 창 601px
4. 창 600px — 1열 (칸 폭 600px) — 창 600px
5. Grid 로 풀었다 (.grid 가 grid 상자)

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

**화면은 같아도 오답** — 「Grid 로 풀었다 (.grid 가 grid 상자)」에서 걸립니다

Flexbox 로 바꾸고 폭을 calc 로 계산해도 같은 화면이지만, `.grid` 는 이미 grid 상자 — 열 정의 하나만 바꾸면 되는 문제입니다.

```css
.grid {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: calc((100% - 40px) / 3);
}
@media (max-width: 600px) {
  .item {
    width: 100%;
  }
}
```

---

### 문제 33. 사진이 넘칠 때

*코드 작성 · CSS*

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

### 문제 34. auto-fill 은 몇 열이 될까

*결과 예측 · 답 적기*

**문제**

카드 6장이 들어 있는 다음 판에서, **한 줄에 카드가 몇 장** 놓입니까?
```css
.cards {
  display: grid;
  width: 900px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}
```

**정답** — `3` 장 — 실제 Chrome 에서 그려 재서 확인한 값

**해설**

`auto-fill` 은 「최소 폭(220px)을 지키며 **간격까지 넣어서** 들어갈 만큼」 열을 만듭니다. 4장: 220×4 + 20×3 = 940px > 900px — 안 들어갑니다. 3장: 220×3 + 20×2 = 700px — 들어갑니다.
그래서 **3열**이고, 남는 200px 은 `1fr` 이 셋에게 나눠 주어 카드 폭은 (900 − 40) ÷ 3 ≈ 287px 이 됩니다.

**흔한 오답** — `4`

900 ÷ 220 ≈ 4.09 라 4장이 들어갈 것 같지만, 4장이면 **사이 간격 셋**(60px)이 더해져 940px 이 필요합니다.

---

### 문제 35. 지워진 포커스 표시

*오류 고치기 · CSS*

**문제**

디자이너가 「누를 때마다 테두리가 번쩍여서 보기 싫다」며 마지막 규칙(`.play:focus`)을 넣었습니다. 그 뒤로 **키보드(Tab)로 다니는 사람**은 지금 어디에 있는지 알 수 없게 되었습니다.
- 마우스로 누를 때는 지금처럼 바깥선이 **보이지 않게**
- **Tab 으로 왔을 때만** 굵기 `3px` 의 바깥선(`outline`)이 보이게 (색은 자유)
- 평소 · 마우스를 올렸을 때의 바탕색은 그대로
(채점은 마우스를 올린 상태 · 마우스로 누른 상태 · Tab 으로 온 상태를 켠 것처럼 바꿔 그려서 잽니다)

**HTML (고정)**

```html
<p>새 회차가 올라왔습니다. <a class="play" href="#ep14">14회 듣기</a></p>
```

**시작 코드**

```css
.play {
  background: #1f6f4a;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
}
.play:hover {
  background: #17573a;
}
.play:focus {
  outline: none;
}
```

**정답**

```css
.play {
  background: #1f6f4a;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
}
.play:hover {
  background: #17573a;
}
.play:focus-visible {
  outline: 3px solid #16202a;
  outline-offset: 2px;
}
```

**해설**

`:focus` 는 «어떻게 왔든» 선택된 동안, `:focus-visible` 은 **키보드로 와서** 선택된 동안(브라우저가 「표시가 필요하다」고 판단할 때)입니다. 그래서 바깥선은 `:focus-visible` 에 줍니다.
🔴 `outline: none` 으로 **지우기만** 하는 것은 키보드 사용자의 «커서»를 없애는 것과 같습니다. 남겨 둔다면 `:focus-visible` 규칙보다 **앞에** 두어야 합니다 — 둘 다 점수가 같아 뒤에 쓴 쪽이 이깁니다.

**검사 항목** (4개)

1. 평소 바탕 #1f6f4a
2. 마우스를 올리면 바탕 #17573a
3. Tab 으로 왔을 때 3px 바깥선
4. 마우스로 눌렀을 때는 바깥선이 없다

**흔한 오답** — 「마우스로 눌렀을 때는 바깥선이 없다」에서 걸립니다

`none` 을 `3px` 로 바꾸기만 하면 Tab 사용자는 해결됩니다. 하지만 `:focus` 는 **마우스로 눌러도** 켜져서, 디자이너가 싫어한 「누를 때마다 번쩍임」이 그대로 돌아옵니다.

```css
.play {
  background: #1f6f4a;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
}
.play:hover {
  background: #17573a;
}
.play:focus {
  outline: 3px solid #16202a;
}
```

---

### 문제 36. 안 먹는 스타일 고치기

*오류 고치기 · CSS*

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

**시작 코드**

```css
#top-news h2 {
  color: #59677a;
}
.title {
  color: #0d6b75;
  font-size: 22px;
}
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

**이렇게 써도 정답**

주석에 `!important` 라는 글자가 있어도 상관없습니다 — 검사는 글자가 아니라 브라우저가 읽어 들인 규칙을 봅니다.

```css
/* !important 는 쓰지 않는다 — 점수로 이긴다 */
#top-news h2 {
  color: #59677a;
}
#top-news .title {
  color: #0d6b75;
  font-size: 22px;
}
```

**이렇게 써도 정답**

이기던 규칙(`#top-news h2`)이 필요 없다면 **지우는 것**도 답입니다.

```css
.title {
  color: #0d6b75;
  font-size: 22px;
}
```

---

### 문제 37. 안 먹는 미디어 쿼리

*오류 고치기 · CSS*

**문제**

영화 리뷰 화면입니다. 창이 **700px 이하**이면 평점 상자가 리뷰 **아래로** 내려가야(한 열) 하는데, 창을 아무리 줄여도 두 열 그대로입니다.
시작 코드에 실수가 **두 군데** 있습니다. 찾아서 고치시오. (넓을 때: 리뷰 | 평점 300px, 사이 16px) Grid 로 짠 판은 그대로 두고 고칩니다.

**HTML (고정)**

```html
<div class="layout">
  <article class="review">리뷰 본문</article>
  <aside class="score">평점 4.5</aside>
</div>
```

**CSS (고정)**

```css
body { margin: 0; }
.layout > * { min-height: 80px; background: #e2f1f3; }
```

**시작 코드**

```css
@media (max-width: 700) {
  .layout {
    grid-template-columns: 1fr;
  }
}
.layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 16px;
}
```

**정답**

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 16px;
}
@media (max-width: 700px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

**해설**

① **`700` 에 단위가 없습니다.** 미디어 쿼리의 폭은 `700px` 처럼 단위가 있어야 합니다. 단위가 없으면 그 조건은 통째로 «틀린 조건»이 되어 **절대 켜지지 않습니다**(오류도 안 납니다).
② **순서가 거꾸로입니다.** 미디어 쿼리는 점수를 올려 주지 않습니다 — `.layout` 과 `.layout` 은 같은 점수라 **나중에 적힌 쪽**이 이깁니다. 그래서 좁을 때 덮어쓸 규칙은 기본 규칙 **뒤에** 둡니다.

**검사 항목** (4개)

1. 창 1000px — 리뷰 | 평점 300px 나란히, 사이 16px — 창 1000px
2. 창 701px — 아직 두 열 — 창 701px
3. 창 700px — 한 열 (평점이 리뷰 아래, 폭 700px) — 창 700px
4. Grid 로 풀었다 (.layout 가 grid 상자)

**흔한 오답** — 「창 700px — 한 열 (평점이 리뷰 아래, 폭 700px)」에서 걸립니다

단위(`px`)만 고치면 미디어 쿼리는 이제 «켜지지만», 그 뒤에 오는 기본 규칙이 같은 점수로 **덮어써서** 여전히 두 열입니다.

```css
@media (max-width: 700px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
.layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 16px;
}
```

**화면은 같아도 오답** — 「Grid 로 풀었다 (.layout 가 grid 상자)」에서 걸립니다

Flexbox 로 새로 짜면 같은 화면이 나오지만, 이 문제는 Grid 판은 그대로 두고 «두 실수»를 찾는 문제입니다.

```css
.layout {
  display: flex;
  gap: 16px;
}
.review {
  flex: 1;
}
.score {
  flex: 0 0 300px;
}
@media (max-width: 700px) {
  .layout {
    flex-direction: column;
  }
}
```

---

### 문제 38. 공연 카드 한 장

*종합 구현 · HTML + CSS*

**문제**

공연 소개 카드 한 장을 HTML 과 CSS 로 만드시오. 사진 주소는 시작 코드에 들어 있습니다.
- `article.card` 안에 사진(`img`, 대체 글 있음) · 제목(`h3`) · 정보 목록(`dl` — 장소 · 날짜 두 쌍)
- 카드: 폭 `320px`(테두리까지), 안쪽 여백 `16px`, 테두리 `1px` 실선 `#d8dfe7`, 둥근 모서리 `12px`
- 카드 안의 요소는 **위에서 아래로**, 사이 간격 `12px` (Flexbox) — 제목 · 정보 목록의 기본 바깥 여백은 `0`
- 사진은 카드 안쪽 폭에 꽉 차게 (`286px` — 320 − 안쪽 여백 16×2 − 테두리 1×2)

**CSS (고정)**

```css
body { margin: 0; padding: 16px; font-family: sans-serif; }
```

**시작 코드**

```html
<article class="card">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='270'%3E%3Crect width='480' height='270' fill='%23b8c7d3'/%3E%3Ccircle cx='150' cy='110' r='40' fill='%23e5ecf2'/%3E%3Cpath d='M0 270 L170 150 L280 230 L360 170 L480 270 Z' fill='%2359677a'/%3E%3C/svg%3E" alt="">
</article>
```

```css

```

**정답**

```html
<article class="card">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='270'%3E%3Crect width='480' height='270' fill='%23b8c7d3'/%3E%3Ccircle cx='150' cy='110' r='40' fill='%23e5ecf2'/%3E%3Cpath d='M0 270 L170 150 L280 230 L360 170 L480 270 Z' fill='%2359677a'/%3E%3C/svg%3E" alt="야외 무대의 재즈 밴드">
  <h3>여름밤 재즈</h3>
  <dl>
    <dt>장소</dt><dd>한강 야외무대</dd>
    <dt>날짜</dt><dd>2025-07-19</dd>
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

**검사 항목** (8개)

1. article.card 가 하나
2. 사진의 대체 글이 있다
3. 제목 h3 하나 · 정보 dt/dd 두 쌍
4. 카드 폭 320px (테두리까지)
5. 안쪽 여백 16px · 테두리 1px · 둥근 모서리 12px
6. 사진이 카드 안쪽 폭(286px)에 꽉 찬다
7. 사진 → 제목 → 정보, 사이 12px
8. Flexbox 로 풀었다 (.card 가 flex 상자 · flex-direction: column)

**흔한 오답** — 「카드 폭 320px (테두리까지)」에서 걸립니다

14번과 같은 함정입니다 — `box-sizing` 이 없으면 카드가 354px 이 됩니다.

```html
<article class="card">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='270'%3E%3Crect width='480' height='270' fill='%23b8c7d3'/%3E%3Ccircle cx='150' cy='110' r='40' fill='%23e5ecf2'/%3E%3Cpath d='M0 270 L170 150 L280 230 L360 170 L480 270 Z' fill='%2359677a'/%3E%3C/svg%3E" alt="야외 무대의 재즈 밴드">
  <h3>여름밤 재즈</h3>
  <dl>
    <dt>장소</dt><dd>한강 야외무대</dd>
    <dt>날짜</dt><dd>2025-07-19</dd>
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

**화면은 같아도 오답** — 「Flexbox 로 풀었다 (.card 가 flex 상자 · flex-direction: column)」에서 걸립니다

블록으로 쌓고 바깥 여백 12px 로 간격을 맞추면 화면은 같지만, 문제가 Flexbox(`column` + `gap`)로 쌓기를 요구합니다.

```css
.card {
  box-sizing: border-box;
  width: 320px;
  padding: 16px;
  border: 1px solid #d8dfe7;
  border-radius: 12px;
}
.card img {
  display: block;
  width: 100%;
}
.card h3,
.card dl {
  margin: 12px 0 0;
}
```

---

### 문제 39. 어두운 화면 — 값만 바꾸기

*코드 작성 · CSS*

**문제**

시작 코드는 밝은 화면입니다. 이 코드는 그대로 두고 **규칙을 더해서**, `<html data-theme="dark">` 일 때 **변수 값만 바꿔** 어두운 화면이 되게 하시오.
- 바탕 `#0e1418` · 카드 `#161f26` · 글자 `#e5ecf2`
- 흐린 글자(`--muted`)는 **카드 바탕 위에서 대비 4.5 : 1 이상**이 되는 색을 직접 고르시오
- 어두운 화면 규칙에는 **변수만** 적습니다 (`background` · `color` 를 다시 쓰지 말 것)
- 힌트: `<html data-theme="dark">` 를 고르는 선택자는 `:root[data-theme="dark"]` 입니다 — `[이름="값"]` 은 「그 속성이 그 값인 요소」를 고르는 **속성 선택자**입니다
(채점할 때 검사가 `data-theme="dark"` 를 붙여 봅니다)

**HTML (고정)**

```html
<article class="card">
  <h3>금리 동결</h3>
  <p class="meta">김하나 · 11/05</p>
</article>
```

**시작 코드**

```css
:root {
  --bg: #ffffff;
  --surface: #f3f5f7;
  --text: #16202a;
  --muted: #59677a;
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

### 문제 40. 구독 요금제 화면

*종합 구현 · HTML + CSS*

**문제**

팟캐스트 앱의 **구독 요금제** 화면을 HTML 과 CSS 로 만드시오.
- `section.plans` 안에 카드 `article.plan` 3장. 카드마다 요금제 이름 `h3` · 가격 `p.price` · 혜택 목록 `ul` · 「구독」 링크 `a.btn`
  - 베이직 / 월 4,900원 / 광고 없는 재생 · 기기 1대
  - 스탠다드 / 월 7,900원 / 광고 없는 재생 · 기기 2대 · 오프라인 저장 — **추천 요금제**: `class="plan best"`
  - 프리미엄 / 월 10,900원 / 광고 없는 재생 · 기기 4대 · 오프라인 저장 · 고음질
- 카드 테두리 `1px` 실선 `#d8dfe7`, **추천 카드만** `2px` 실선 `#6b3fa0`
- 가격 글자 크기 `28px` · 혜택 목록의 점은 없앰
- 카드 판은 **Grid 로**: **넓을 때 3열**(사이 `20px`), **700px 이하에서 1열**
- 세 카드의 **높이가 같을 것**(혜택이 가장 많은 카드에 맞춰) · 375px 화면에서 가로 스크롤이 없을 것

**CSS (고정)**

```css
body { margin: 0; font-family: sans-serif; }
```

**정답**

```html
<section class="plans">
  <article class="plan">
    <h3>베이직</h3>
    <p class="price">월 4,900원</p>
    <ul>
      <li>광고 없는 재생</li>
      <li>기기 1대</li>
    </ul>
    <a class="btn" href="#">구독</a>
  </article>
  <article class="plan best">
    <h3>스탠다드</h3>
    <p class="price">월 7,900원</p>
    <ul>
      <li>광고 없는 재생</li>
      <li>기기 2대</li>
      <li>오프라인 저장</li>
    </ul>
    <a class="btn" href="#">구독</a>
  </article>
  <article class="plan">
    <h3>프리미엄</h3>
    <p class="price">월 10,900원</p>
    <ul>
      <li>광고 없는 재생</li>
      <li>기기 4대</li>
      <li>오프라인 저장</li>
      <li>고음질</li>
    </ul>
    <a class="btn" href="#">구독</a>
  </article>
</section>
```

```css
.plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}
.plan {
  padding: 20px;
  border: 1px solid #d8dfe7;
  border-radius: 12px;
}
.plan.best {
  border: 2px solid #6b3fa0;
}
.plan h3 {
  margin: 0;
}
.price {
  font-size: 28px;
  margin: 8px 0;
}
.plan ul {
  list-style: none;
  padding: 0;
}
.btn {
  display: inline-block;
  padding: 8px 16px;
  background: #6b3fa0;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
}
@media (max-width: 700px) {
  .plans {
    grid-template-columns: 1fr;
  }
}
```

**해설**

판은 **Grid**(`repeat(3, 1fr)` + `gap`), 좁은 화면은 **미디어 쿼리**로 한 열 — 기본 규칙 «뒤에» 둡니다.
카드 높이는 따로 맞출 필요가 없습니다. Grid(와 Flex)의 아이템은 기본값 `stretch` 로 **그 줄에서 가장 높은 아이템에 맞춰 늘어나기** 때문입니다. 추천 카드는 `.plan.best`(클래스 둘 — 점수가 더 높음)로 테두리만 덮어씁니다.

**검사 항목** (10개)

1. 구조 — 카드 3장, 카드마다 h3 · p.price · ul · a.btn
2. 추천 카드(.best)는 「스탠다드」 하나
3. 테두리 — 보통 카드 1px #d8dfe7 · 추천 카드 2px #6b3fa0
4. 가격 28px · 혜택 목록의 점이 없다
5. 창 1000px — 3열, 폭이 같고 사이 20px — 창 1000px
6. 창 1000px — 세 카드의 높이가 같다 — 창 1000px
7. 창 700px — 1열 (위에서 아래로) — 창 700px
8. 창 701px — 아직 3열 — 창 701px
9. 창 375px — 가로 스크롤이 없다 — 창 375px
10. Grid 로 풀었다 (.plans 가 grid 상자)

**흔한 오답** — 「창 700px — 1열 (위에서 아래로)」에서 걸립니다

넓은 화면을 다 맞추고 좁은 화면을 잊은 경우입니다. 700px 에서도 3열이라 카드 한 장이 200px 남짓으로 좁아집니다.

```html
<section class="plans">
  <article class="plan">
    <h3>베이직</h3>
    <p class="price">월 4,900원</p>
    <ul>
      <li>광고 없는 재생</li>
      <li>기기 1대</li>
    </ul>
    <a class="btn" href="#">구독</a>
  </article>
  <article class="plan best">
    <h3>스탠다드</h3>
    <p class="price">월 7,900원</p>
    <ul>
      <li>광고 없는 재생</li>
      <li>기기 2대</li>
      <li>오프라인 저장</li>
    </ul>
    <a class="btn" href="#">구독</a>
  </article>
  <article class="plan">
    <h3>프리미엄</h3>
    <p class="price">월 10,900원</p>
    <ul>
      <li>광고 없는 재생</li>
      <li>기기 4대</li>
      <li>오프라인 저장</li>
      <li>고음질</li>
    </ul>
    <a class="btn" href="#">구독</a>
  </article>
</section>
```

```css
.plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}
.plan {
  padding: 20px;
  border: 1px solid #d8dfe7;
  border-radius: 12px;
}
.plan.best {
  border: 2px solid #6b3fa0;
}
.plan h3 {
  margin: 0;
}
.price {
  font-size: 28px;
  margin: 8px 0;
}
.plan ul {
  list-style: none;
  padding: 0;
}
.btn {
  display: inline-block;
  padding: 8px 16px;
  background: #6b3fa0;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
}
```

**화면은 같아도 오답** — 「Grid 로 풀었다 (.plans 가 grid 상자)」에서 걸립니다

Flexbox(`wrap` + calc 폭)로도 같은 판이 나오지만, 「한 줄은 Flex, 판은 Grid」 — 카드 판은 Grid 로 짜라는 문제입니다.

```css
.plans {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}
.plan {
  box-sizing: border-box;
  width: calc((100% - 40px) / 3);
  padding: 20px;
  border: 1px solid #d8dfe7;
  border-radius: 12px;
}
.plan.best {
  border: 2px solid #6b3fa0;
}
.plan h3 {
  margin: 0;
}
.price {
  font-size: 28px;
  margin: 8px 0;
}
.plan ul {
  list-style: none;
  padding: 0;
}
.btn {
  display: inline-block;
  padding: 8px 16px;
  background: #6b3fa0;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
}
@media (max-width: 700px) {
  .plan {
    width: 100%;
  }
}
```

---
