# HTML/CSS 연습 문제지

> 총 **40문제** — 초급 15 · 중급 17 · 고급 8 (코드 작성 35 · 고르기 5)
> 풀이 페이지(**HTML/CSS 연습장**)에서 바로 그려 보고 채점할 수 있습니다. 정답과 해설은 `htmlcss-답안지.md` 에 있습니다.

## 채점은 이렇게 합니다

- 여러분의 코드를 화면에 **그려 놓고 결과를 잽니다** — 계산된 스타일(F12 의 Computed 에 보이는 값) · 상자의 위치와 크기 · 태그 구조. **쓰는 방법은 자유**입니다. 같은 화면이 나오면 정답입니다.
- 「창 375px」처럼 폭이 적힌 검사는 **그 창 폭으로 다시 그려서** 잽니다. 미디어 쿼리가 그 폭으로 동작합니다.
- **고정**이라고 적힌 코드는 고칠 수 없고, 여러분의 코드가 그 위에 얹힙니다(고정 CSS 가 먼저, 내 CSS 가 나중).
- `:hover` · `:focus-visible` 은 그 상태를 **켠 것처럼** 바꿔 그려서 잽니다.
- 틀리면 **어느 검사에서 걸렸는지**와 잰 값이 나옵니다 — 그것이 힌트입니다.

## 목차

- **초급** (1~15번, 15문제): HTML 뼈대 · 시맨틱 · 목록 · 링크 · 경로 · 표 · 폼 · 선택자 · 글자 · 박스 모델
- **중급** (16~32번, 17문제): 상속 · 우선순위 · display · Flexbox · Grid · 미디어 쿼리 · CSS 변수 · 상태(:hover · :focus-visible)
- **고급** (33~40번, 8문제): 종합 — 시맨틱 고치기 · 카드 · 우선순위 디버깅 · 표 · 반응형 · 어두운 화면 · 목록 화면

## 초급 (15문제)

### 문제 1. 문서 뼈대

다음 조건을 지키는 HTML 문서를 **처음부터** 작성하시오.
- 문서 형식 선언(`<!DOCTYPE html>`)
- 언어는 한국어(`lang="ko"`)
- 문자 인코딩은 UTF-8
- 탭에 보이는 제목은 `오늘의 뉴스`
- 본문에 `h1` 하나: `오늘의 뉴스`

**작성할 것 — HTML 문서 전체**

```html

```

### 문제 2. 시맨틱 배치

뉴스 사이트의 큰 틀을 **이름이 있는 상자**(시맨틱 태그)로 만드시오.
- `body` 바로 아래에 차례대로 **머리 · 메뉴 · 본문 · 바닥** 네 상자
- 상자마다 안에 글자를 아무거나 넣을 것 (예: `오늘의 뉴스`, `정치 경제 사회`, `기사 목록`, `© 오늘의 뉴스`)

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html

```

### 문제 3. strong 과 b

기사 본문에서 「**오늘 오후 3시부터 운행 중단**」은 독자가 꼭 알아야 할 **중요한 내용**이라 굵게 보이게 하려 합니다. 가장 알맞은 것은?

① `<b>` — 굵게 보이기만 하면 된다  
② `<strong>` — 「중요하다」는 뜻을 담는다  
③ `<h3>` — 크고 굵게 보인다  
④ `<br>` 으로 앞뒤를 끊어 눈에 띄게 한다

### 문제 4. 순위 목록

「많이 본 기사」 1~3위를 **순서가 있는 목록**으로 만드시오. 항목은 차례대로 `금리 동결`, `신작 개봉`, `폭설 주의보` 입니다.

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html

```

### 문제 5. 이름–값 목록

기사 정보 세 가지를 **이름–값 목록**(`dl`)으로 만드시오.
- 기자 — 김하나
- 날짜 — 2024-11-05
- 조회수 — 1,204

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html

```

### 문제 6. 링크 안의 사진

기사 사진 `photo.jpg` 를 누르면 `detail.html` 로 가도록 만드시오. 사진의 대체 글은 `폭설로 멈춘 버스` 입니다.
(미리보기에는 사진 파일이 없어 대체 글이 보입니다 — 그게 정상입니다)

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html

```

### 문제 7. 경로

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

### 문제 8. 표

분야별 기사 수를 **표**로 만드시오. 머리 줄(`thead`)과 몸통(`tbody`)을 나눕니다.

| 분야 | 기사 수 | 비율 |
| --- | --- | --- |
| 사회 | 121 | 24.2% |
| 정치 | 115 | 23.0% |
| 경제 | 88 | 17.6% |
| 스포츠 | 80 | 16.0% |

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html

```

### 문제 9. 폼

뉴스레터 신청 폼을 만드시오.
- 「이메일」 글자표(`label`)와 **이메일 형식** 입력 칸 — 글자표를 누르면 칸에 커서가 가도록 **이어 붙일 것**
- 「신청」 버튼
(미리보기에서 버튼을 눌러도 아무 데도 보내지 않습니다)

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html

```

### 문제 10. 클래스 선택자

기사 제목(`title` 클래스)만 글자 색을 `#0d6b75` 로 바꾸시오. 「많이 본 기사」 제목은 그대로 둡니다.

**HTML (고정)**

```html
<h2 class="title">금리 동결</h2>
<p>한국은행이 기준금리를 동결했다.</p>
<h2>많이 본 기사</h2>
<h2 class="title">신작 개봉</h2>
```

**작성할 것 — CSS**

```css

```

### 문제 11. 자손 선택자

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

**작성할 것 — CSS**

```css

```

### 문제 12. 글자 꾸미기

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

**작성할 것 — CSS**

```css

```

### 문제 13. 박스 네 겹

카드(`.card`)를 이렇게 꾸미시오.
- 안쪽 여백 `16px` (네 방향 모두)
- 테두리 `1px` 실선, 색 `#d8dfe7`
- 카드 사이 간격 `12px` (아래쪽 바깥 여백)

**HTML (고정)**

```html
<div class="card">첫 번째 카드</div>
<div class="card">두 번째 카드</div>
```

**작성할 것 — CSS**

```css

```

### 문제 14. box-sizing

상자(`.box`)에 폭 `300px`, 안쪽 여백 `20px`, 테두리 `2px` 실선을 주시오. 단, **화면에 보이는 상자의 폭이 정확히 300px** 이어야 합니다.

**HTML (고정)**

```html
<div class="box">상자</div>
```

**CSS (고정)**

```css
body { margin: 0; }
```

**작성할 것 — CSS**

```css

```

### 문제 15. 우선순위 ①

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

## 중급 (17문제)

### 문제 16. 상속

기사(`.news`)의 글자 색을 `#333333` 으로 주면 문단은 그 색을 **물려받지만**, 링크는 파란색 그대로입니다.
링크도 **둘러싼 글자의 색을 물려받게** 하시오. 링크에 색 값(`#333333`)을 다시 쓰지 말 것 — 기사 색을 나중에 바꾸면 링크도 따라 바뀌어야 합니다.

**HTML (고정)**

```html
<article class="news">
  <p>폭설로 버스 운행이 멈췄다. <a href="#">관련 기사</a>도 함께 보십시오.</p>
</article>
```

**작성할 것 — CSS**

```css

```

### 문제 17. 우선순위 ②

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

### 문제 18. inline-block

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

**작성할 것 — CSS**

```css

```

### 문제 19. 메뉴를 가로로

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

**작성할 것 — CSS**

```css

```

### 문제 20. 양 끝 정렬

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

**작성할 것 — CSS**

```css

```

### 문제 21. 세로 가운데

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

**작성할 것 — CSS**

```css

```

### 문제 22. gap

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

**작성할 것 — CSS**

```css

```

### 문제 23. flex-wrap

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

**작성할 것 — CSS**

```css

```

### 문제 24. flex-direction

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

**작성할 것 — CSS**

```css

```

### 문제 25. Grid 3열

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

**작성할 것 — CSS**

```css

```

### 문제 26. fr 비율

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

**작성할 것 — CSS**

```css

```

### 문제 27. grid-template-areas

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

**작성할 것 — CSS**

```css

```

### 문제 28. 미디어 쿼리

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

**작성할 것 — CSS**

```css

```

### 문제 29. 사진이 넘칠 때

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

**작성할 것 — CSS**

```css

```

### 문제 30. CSS 변수

브랜드 색 `#0d6b75` 를 `:root` 에 변수 `--brand` 로 정의하고, **제목 글자 색**(`.brand`)과 **배지 바탕색**(`.badge`)이 그 변수를 쓰게 하시오. 배지 글자는 흰색입니다.

**HTML (고정)**

```html
<h1 class="brand">오늘의 뉴스</h1>
<span class="badge">속보</span>
```

**작성할 것 — CSS**

```css

```

### 문제 31. 상태 — :hover · :focus-visible

버튼(`.btn`)을 이렇게 꾸미시오.
- 평소: 바탕 `#0d6b75`, 글자 흰색
- 마우스를 올리면: 바탕 `#0a5058`
- **키보드(Tab)로 왔을 때**: 굵기 `3px` 의 바깥선(`outline`)이 보이게 (색은 자유 — 바탕과 대비가 나는 색)
(채점은 마우스를 올린 상태 · Tab 으로 온 상태를 켠 것처럼 바꿔 그려서 잽니다)

**HTML (고정)**

```html
<button class="btn" type="button">구독하기</button>
```

**작성할 것 — CSS**

```css

```

### 문제 32. 박스 계산

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

## 고급 (8문제)

### 문제 33. div 를 이름 있는 상자로

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

**작성할 것 — HTML (body 안에 들어갈 내용)**

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

### 문제 34. 뉴스 카드 한 장

뉴스 카드 한 장을 HTML 과 CSS 로 만드시오. 사진 주소는 시작 코드에 들어 있습니다.
- `article.card` 안에 사진(`img`, 대체 글 있음) · 제목(`h3`) · 정보 목록(`dl` — 기자 · 날짜 두 쌍)
- 카드: 폭 `320px`(테두리까지), 안쪽 여백 `16px`, 테두리 `1px` 실선 `#d8dfe7`, 둥근 모서리 `12px`
- 카드 안의 요소는 **위에서 아래로**, 사이 간격 `12px` (Flexbox) — 제목 · 정보 목록의 기본 바깥 여백은 `0`
- 사진은 카드 안쪽 폭에 꽉 차게 (`286px` — 320 − 안쪽 여백 16×2 − 테두리 1×2)

**CSS (고정)**

```css
body { margin: 0; padding: 16px; font-family: sans-serif; }
```

**작성할 것 — HTML + CSS**

```html
<article class="card">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='270'%3E%3Crect width='480' height='270' fill='%23b8c7d3'/%3E%3Ccircle cx='150' cy='110' r='40' fill='%23e5ecf2'/%3E%3Cpath d='M0 270 L170 150 L280 230 L360 170 L480 270 Z' fill='%2359677a'/%3E%3C/svg%3E" alt="">
</article>
```

```css

```

### 문제 35. 안 먹는 스타일 고치기

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

**작성할 것 — CSS**

```css
#top-news h2 {
  color: #59677a;
}
.title {
  color: #0d6b75;
  font-size: 22px;
}
```

### 문제 36. 표 꾸미기

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

**작성할 것 — CSS**

```css

```

### 문제 37. 미디어 쿼리 없는 반응형

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

**작성할 것 — CSS**

```css

```

### 문제 38. 페이지 반응형

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

**작성할 것 — CSS**

```css

```

### 문제 39. 어두운 화면 — 값만 바꾸기

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

**작성할 것 — CSS**

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

### 문제 40. 뉴스 목록 화면

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

**작성할 것 — HTML + CSS**

```html

```

```css

```
