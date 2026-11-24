# HTML/CSS 연습 문제지

> 총 **40문제** — 초급 13 · 중급 18 · 고급 9 · 번호가 커질수록 어려워집니다
> 유형: 개념 확인 5 · 결과 예측 4 · 빈칸 채우기 3 · 오류 고치기 8 · 고쳐 쓰기 2 · 코드 작성 16 · 종합 구현 2
> 풀이 페이지(**HTML/CSS 연습장**)에서 바로 그려 보고 채점할 수 있습니다. 정답과 해설은 `htmlcss-답안지.md` 에 있습니다.

## 채점은 이렇게 합니다

- 여러분의 코드를 화면에 **그려 놓고 결과를 잽니다** — 계산된 스타일(F12 의 Computed 에 보이는 값) · 상자의 위치와 크기 · 태그 구조. **쓰는 방법은 자유**입니다. 같은 화면이 나오면 정답입니다.
- 「창 375px」처럼 폭이 적힌 검사는 **그 창 폭으로 다시 그려서** 잽니다. 미디어 쿼리가 그 폭으로 동작합니다.
- **고정**이라고 적힌 코드는 고칠 수 없고, 여러분의 코드가 그 위에 얹힙니다(고정 CSS 가 먼저, 내 CSS 가 나중).
- `:hover` · `:focus-visible` 은 그 상태를 **켠 것처럼** 바꿔 그려서 잽니다.
- 틀리면 **어느 검사에서 걸렸는지**와 잰 값이 나옵니다 — 그것이 힌트입니다.
- **Flexbox 문제는 Flexbox 로** 풀어야 합니다. 같은 화면이라도 Grid · 바깥 여백으로 흉내 내면 마지막 검사(「Flexbox 로 풀었다」)에서 걸립니다.
- 코드를 쓰지 않는 문제도 있습니다 — **하나 고르기** · **모두 고르기**(맞는 것을 빠짐없이) · **답 적기**(숫자나 경로를 적는다). 「빈칸 채우기」 · 「오류 고치기」는 시작 코드를 고쳐서 냅니다.

## 목차

- **초급** (1~13번, 13문제): 시맨틱 · 목록 · 문서 뼈대 · 링크 · 경로 · 폼 · 표 · 선택자 · 글자 · 박스 모델
- **중급** (14~31번, 18문제): border-box 계산 · 우선순위 · 상속 · display · Flexbox · Grid · 표 꾸미기 · CSS 변수
- **고급** (32~40번, 9문제): 미디어 쿼리 · 반응형 사진 · auto-fill · 포커스 표시 · 우선순위 디버깅 · 카드 · 어두운 화면 · 요금제 화면

## 초급 (13문제)

### 문제 1. 이름 있는 상자 고르기

*개념 확인 · 모두 고르기*

화면에서는 모두 「아무 모양 없는 상자」로 보이지만, **이름에 뜻이 있는 상자**(시맨틱 태그)가 있습니다.
다음 중 시맨틱 태그를 **모두** 고르시오.

(맞는 것을 **모두** 고르시오)

① `<div>`  
② `<nav>`  
③ `<span>`  
④ `<article>`  
⑤ `<footer>`  
⑥ `<section>`

### 문제 2. strong 과 b

*개념 확인 · 하나 고르기*

기사 본문에서 「**오늘 오후 3시부터 운행 중단**」은 독자가 꼭 알아야 할 **중요한 내용**이라 굵게 보이게 하려 합니다. 가장 알맞은 것은?

① `<b>` — 굵게 보이기만 하면 된다  
② `<strong>` — 「중요하다」는 뜻을 담는다  
③ `<h3>` — 크고 굵게 보인다  
④ `<br>` 으로 앞뒤를 끊어 눈에 띄게 한다

### 문제 3. 순위 목록

*코드 작성 · HTML (body 안에 들어갈 내용)*

「많이 본 기사」 1~3위를 **순서가 있는 목록**으로 만드시오. 항목은 차례대로 `금리 동결`, `신작 개봉`, `폭설 주의보` 입니다.

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html

```

### 문제 4. 이름–값 목록

*코드 작성 · HTML (body 안에 들어갈 내용)*

영화 「겨울 항구」의 정보를 **이름–값 목록**(`dl`)으로 만드시오.
- 감독 — 서유진
- 개봉 — 2024-12-18
- 출연 — 한도윤, 이서아 (**이름 하나에 값 둘** — 값마다 `dd` 를 따로)

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html

```

### 문제 5. 문서 뼈대

*코드 작성 · HTML 문서 전체*

다음 조건을 지키는 HTML 문서를 **처음부터** 작성하시오.
- 문서 형식 선언(`<!DOCTYPE html>`) · 언어는 한국어(`lang="ko"`) · 문자 인코딩은 UTF-8
- 탭에 보이는 제목은 `주간 편성표`
- 같은 폴더의 `css` 폴더 안에 있는 `style.css` 를 **이어 붙일 것**
- 본문에 `h1` 하나: `주간 편성표`

**작성할 것 — HTML 문서 전체**

```html

```

### 문제 6. 링크 안의 사진

*코드 작성 · HTML (body 안에 들어갈 내용)*

기사 사진 `photo.jpg` 를 누르면 `detail.html` 로 가도록 만드시오. 사진의 대체 글은 `폭설로 멈춘 버스` 입니다.
(미리보기에는 사진 파일이 없어 대체 글이 보입니다 — 그게 정상입니다)

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html

```

### 문제 7. 두 단계 위로 — 경로

*개념 확인 · 답 적기*

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

**답 적기** — 따옴표 없이 경로만: `______`

### 문제 8. 이어지지 않은 글자표

*오류 고치기 · HTML (body 안에 들어갈 내용)*

공연 예매 오픈 알림을 신청하는 폼입니다. 그런데 글자표 「이름」「이메일」을 눌러도 **칸에 커서가 가지 않습니다**.
- 두 글자표가 **각자 자기 칸과 이어지게** 고치시오
- 이메일 칸은 이메일 형식 칸(`type="email"`)으로 바꾸시오
(미리보기에서 버튼을 눌러도 아무 데도 보내지 않습니다)

**작성할 것 — HTML (body 안에 들어갈 내용)**

```html
<form>
  <label for="name">이름</label>
  <input type="text" id="username">
  <label>이메일</label>
  <input type="text" id="mail">
  <button type="submit">알림 신청</button>
</form>
```

### 문제 9. 머리 줄이 섞인 표

*오류 고치기 · HTML (body 안에 들어갈 내용)*

팟캐스트 회차 표에 잘못된 곳이 **두 군데** 있습니다. 고치시오.
- 머리 줄(회차 · 제목 · 재생 수)이 몸통(`tbody`) 안에 들어가 있다 → 머리 줄은 `thead` 로
- 13회 줄은 칸이 하나 모자란다 → 13회의 재생 수는 `7,302`

**작성할 것 — HTML (body 안에 들어갈 내용)**

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

### 문제 10. 클래스 선택자

*빈칸 채우기 · CSS*

기사 제목(`title` 클래스)만 글자 색을 `#0d6b75` 로 바꾸려 합니다. 「많이 본 기사」 제목은 그대로 둡니다.
빈칸(`___`)에 알맞은 **선택자**를 채우시오.

**HTML (고정)**

```html
<h2 class="title">금리 동결</h2>
<p>한국은행이 기준금리를 동결했다.</p>
<h2>많이 본 기사</h2>
<h2 class="title">신작 개봉</h2>
```

**작성할 것 — CSS**

```css
___ {
  color: #0d6b75;
}
```

### 문제 11. 자손 선택자

*코드 작성 · CSS*

**회차 목록(`.episodes`) 안의 링크만** 밑줄을 없애시오. 아래 「유튜브」 구독 링크는 밑줄이 그대로 있어야 합니다.

**HTML (고정)**

```html
<ul class="episodes">
  <li><a href="#">12회 첫 출근 브이로그</a></li>
  <li><a href="#">13회 편집실의 하루</a></li>
</ul>
<p class="sns">구독하기: <a href="#">유튜브</a></p>
```

**작성할 것 — CSS**

```css

```

### 문제 12. 글자 꾸미기

*코드 작성 · CSS*

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

### 문제 13. 안쪽과 바깥쪽

*오류 고치기 · CSS*

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

**작성할 것 — CSS**

```css
.card {
  margin: 16px;
  border: 1px solid #d8dfe7;
}
```

## 중급 (18문제)

### 문제 14. div 를 이름 있는 상자로

*고쳐 쓰기 · HTML (body 안에 들어갈 내용)*

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

### 문제 15. border-box 상자가 차지하는 자리

*결과 예측 · 답 적기*

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

**답 적기** — 숫자만 (단위: px): `______`

### 문제 16. 글이 놓이는 폭 맞추기

*코드 작성 · CSS*

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

**작성할 것 — CSS**

```css

```

### 문제 17. 점수가 같을 때 · 다를 때

*결과 예측 · 하나 고르기*

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

### 문제 18. 우선순위 ②

*개념 확인 · 하나 고르기*

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

### 문제 19. 단추는 글꼴을 물려받지 않는다

*고쳐 쓰기 · CSS*

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

**작성할 것 — CSS**

```css
button {
  font-family: Georgia, serif;
  font-size: 18px;
}
```

### 문제 20. inline-block

*코드 작성 · CSS*

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

### 문제 21. 오른쪽 끝에 모으기

*빈칸 채우기 · CSS*

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

**작성할 것 — CSS**

```css
.bar {
  display: ___;
  justify-content: ___;
  gap: 8px;
}
```

### 문제 22. 양 끝 정렬

*코드 작성 · CSS*

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

**작성할 것 — CSS**

```css

```

### 문제 23. 세로 가운데

*오류 고치기 · CSS*

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

**작성할 것 — CSS**

```css
.txt {
  vertical-align: middle;
}
```

### 문제 24. gap

*오류 고치기 · CSS*

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

**작성할 것 — CSS**

```css
.card {
  margin: 0 8px;
}
```

### 문제 25. flex-wrap

*코드 작성 · CSS*

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

**작성할 것 — CSS**

```css

```

### 문제 26. flex-direction

*코드 작성 · CSS*

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

**작성할 것 — CSS**

```css

```

### 문제 27. 고정 열과 fr 이 섞일 때

*결과 예측 · 답 적기*

다음 판에서 **가운데 열**의 폭은 몇 px 입니까?
```css
.grid {
  display: grid;
  width: 840px;
  grid-template-columns: 200px 1fr 1fr;
  gap: 20px;
}
```

**답 적기** — 숫자만 (단위: px): `______`

### 문제 28. fr 비율

*빈칸 채우기 · CSS*

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

**작성할 것 — CSS**

```css
.page {
  display: grid;
  grid-template-columns: ___;
  gap: ___;
}
```

### 문제 29. grid-template-areas

*코드 작성 · CSS*

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

### 문제 30. 표 꾸미기

*코드 작성 · CSS*

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

**작성할 것 — CSS**

```css

```

### 문제 31. 변수로 묶어도 되는 것

*개념 확인 · 모두 고르기*

공연 예매 사이트에서 보라색 `#6b3fa0` 이 다섯 군데에 쓰였습니다. 이 색을 `:root { --brand: #6b3fa0; }` 하나로 묶으려 합니다.
**브랜드 색을 바꾸는 날 함께 바뀌어야 하는 것**만 `var(--brand)` 로 묶어야 합니다. 묶어도 되는 것을 **모두** 고르시오.

(맞는 것을 **모두** 고르시오)

① 로고 글자 색  
② 「예매하기」 단추의 바탕색  
③ 선택한 좌석의 테두리 색  
④ 「매진 임박」 경고 글자 색 — 남은 좌석이 적다는 알림  
⑤ 메뉴에서 «지금 보는 곳»을 표시하는 밑줄 색

## 고급 (9문제)

### 문제 32. 미디어 쿼리

*코드 작성 · CSS*

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

### 문제 33. 사진이 넘칠 때

*코드 작성 · CSS*

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

### 문제 34. auto-fill 은 몇 열이 될까

*결과 예측 · 답 적기*

카드 6장이 들어 있는 다음 판에서, **한 줄에 카드가 몇 장** 놓입니까?
```css
.cards {
  display: grid;
  width: 900px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}
```

**답 적기** — 숫자만 (단위: 장): `______`

### 문제 35. 지워진 포커스 표시

*오류 고치기 · CSS*

디자이너가 「누를 때마다 테두리가 번쩍여서 보기 싫다」며 마지막 규칙(`.play:focus`)을 넣었습니다. 그 뒤로 **키보드(Tab)로 다니는 사람**은 지금 어디에 있는지 알 수 없게 되었습니다.
- 마우스로 누를 때는 지금처럼 바깥선이 **보이지 않게**
- **Tab 으로 왔을 때만** 굵기 `3px` 의 바깥선(`outline`)이 보이게 (색은 자유)
- 평소 · 마우스를 올렸을 때의 바탕색은 그대로
(채점은 마우스를 올린 상태 · 마우스로 누른 상태 · Tab 으로 온 상태를 켠 것처럼 바꿔 그려서 잽니다)

**HTML (고정)**

```html
<p>새 회차가 올라왔습니다. <a class="play" href="#ep14">14회 듣기</a></p>
```

**작성할 것 — CSS**

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

### 문제 36. 안 먹는 스타일 고치기

*오류 고치기 · CSS*

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

### 문제 37. 안 먹는 미디어 쿼리

*오류 고치기 · CSS*

영화 리뷰 화면입니다. 창이 **700px 이하**이면 평점 상자가 리뷰 **아래로** 내려가야(한 열) 하는데, 창을 아무리 줄여도 두 열 그대로입니다.
시작 코드에 실수가 **두 군데** 있습니다. 찾아서 고치시오. (넓을 때: 리뷰 | 평점 300px, 사이 16px)

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

**작성할 것 — CSS**

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

### 문제 38. 공연 카드 한 장

*종합 구현 · HTML + CSS*

공연 소개 카드 한 장을 HTML 과 CSS 로 만드시오. 사진 주소는 시작 코드에 들어 있습니다.
- `article.card` 안에 사진(`img`, 대체 글 있음) · 제목(`h3`) · 정보 목록(`dl` — 장소 · 날짜 두 쌍)
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

### 문제 39. 어두운 화면 — 값만 바꾸기

*코드 작성 · CSS*

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

### 문제 40. 구독 요금제 화면

*종합 구현 · HTML + CSS*

팟캐스트 앱의 **구독 요금제** 화면을 HTML 과 CSS 로 만드시오.
- `section.plans` 안에 카드 `article.plan` 3장. 카드마다 요금제 이름 `h3` · 가격 `p.price` · 혜택 목록 `ul` · 「구독」 링크 `a.btn`
  - 베이직 / 월 4,900원 / 광고 없는 재생 · 기기 1대
  - 스탠다드 / 월 7,900원 / 광고 없는 재생 · 기기 2대 · 오프라인 저장 — **추천 요금제**: `class="plan best"`
  - 프리미엄 / 월 10,900원 / 광고 없는 재생 · 기기 4대 · 오프라인 저장 · 고음질
- 카드 테두리 `1px` 실선 `#d8dfe7`, **추천 카드만** `2px` 실선 `#6b3fa0`
- 가격 글자 크기 `28px` · 혜택 목록의 점은 없앰
- 카드 판: **넓을 때 3열**(사이 `20px`), **700px 이하에서 1열**
- 세 카드의 **높이가 같을 것**(혜택이 가장 많은 카드에 맞춰) · 375px 화면에서 가로 스크롤이 없을 것

**CSS (고정)**

```css
body { margin: 0; font-family: sans-serif; }
```

**작성할 것 — HTML + CSS**

```html

```

```css

```
