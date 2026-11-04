
# CSS 정리

> **★ 표시 = 우리 수업에서 직접 다루는 것**입니다. 뒤의 숫자는 HTML/CSS 몇 일차인지입니다.
> ★ 이 없는 것은 **필요할 때 찾아보는 용도**입니다 — 지금 몰라도 됩니다.
> 수업 슬라이드와 이 문서가 다르게 말하는 것 같으면 **슬라이드가 우선**입니다. 물어봐 주십시오.

## 목차
1. [CSS 기본](#css-기본)
2. [선택자](#선택자)
3. [가시성](#가시성)
4. [크기와 단위](#크기와-단위)
5. [박스 모델](#박스-모델)
6. [테두리와 그림자](#테두리와-그림자)
7. [배경](#배경)
8. [텍스트](#텍스트)
9. [레이아웃](#레이아웃)
10. [Flexbox](#flexbox)
11. [Grid](#grid)
12. [변형과 전환](#변형과-전환)
13. [애니메이션](#애니메이션)
14. [반응형 디자인](#반응형-디자인)
15. [모범 사례](#모범-사례)

---

## CSS 기본

### CSS란? ★ 3일차
**CSS (Cascading Style Sheets)**: HTML 요소의 스타일을 정의하는 언어

### CSS 적용 방법 ★ 3일차

#### 1. 인라인 스타일
```html
<p style="color: red; font-size: 16px;">텍스트</p>
```

#### 2. 내부 스타일시트
```html
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
```

#### 3. 외부 스타일시트 (권장)
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

```css
/* style.css */
p {
  color: green;
  font-size: 16px;
}
```

### CSS 기본 문법 ★ 3일차
```css
선택자 {
  속성: 값;
  속성: 값;
}
```

### 주석
```css
/* 한 줄 주석 */

/*
  여러 줄
  주석
*/
```

---

## 선택자

### 선택자 종합 표

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>이름</th>
      <th>의미</th>
      <th>형태</th>
      <th>예시</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4">기본 선택자</td>
      <td>전체 선택자 ★</td>
      <td>모든 요소 선택</td>
      <td>*</td>
      <td><code>* { margin: 0; }</code></td>
    </tr>
    <tr>
      <td>요소(태그) 선택자 ★</td>
      <td>특정 태그 요소 선택</td>
      <td>태그명</td>
      <td><code>p { color: black; }</code></td>
    </tr>
    <tr>
      <td>클래스 선택자 ★</td>
      <td>특정 클래스를 가진 요소 선택</td>
      <td>.클래스명</td>
      <td><code>.btn { padding: 10px; }</code></td>
    </tr>
    <tr>
      <td>ID 선택자 ★</td>
      <td>특정 ID를 가진 요소 선택</td>
      <td>#아이디명</td>
      <td><code>#header { background: #333; }</code></td>
    </tr>
    <tr>
      <td rowspan="5">복합 선택자</td>
      <td>그룹 선택자 ★</td>
      <td>여러 요소를 한 번에 선택</td>
      <td>선택자, 선택자</td>
      <td><code>h1, h2, h3 { font-family: Arial; }</code></td>
    </tr>
    <tr>
      <td>자손 선택자 ★</td>
      <td>특정 요소의 모든 하위 요소 선택</td>
      <td>선택자 선택자 (공백)</td>
      <td><code>div p { color: blue; }</code></td>
    </tr>
    <tr>
      <td>자식 선택자 ★</td>
      <td>특정 요소의 직계 자식 요소만 선택</td>
      <td>선택자 > 선택자</td>
      <td><code>div > p { color: red; }</code></td>
    </tr>
    <tr>
      <td>인접 형제 선택자</td>
      <td>바로 다음에 오는 형제 요소 선택</td>
      <td>선택자 + 선택자</td>
      <td><code>h1 + p { font-weight: bold; }</code></td>
    </tr>
    <tr>
      <td>일반 형제 선택자</td>
      <td>이후의 모든 형제 요소 선택</td>
      <td>선택자 ~ 선택자</td>
      <td><code>h1 ~ p { margin-top: 10px; }</code></td>
    </tr>
    <tr>
      <td rowspan="5">속성 선택자</td>
      <td>속성 존재 선택자</td>
      <td>특정 속성을 가진 요소 선택</td>
      <td>[속성]</td>
      <td><code>a[href] { color: blue; }</code></td>
    </tr>
    <tr>
      <td>속성 값 일치 선택자</td>
      <td>속성 값이 정확히 일치하는 요소 선택</td>
      <td>[속성="값"]</td>
      <td><code>a[href="https://example.com"] { color: green; }</code></td>
    </tr>
    <tr>
      <td>속성 값 포함 선택자</td>
      <td>속성 값에 특정 문자열이 포함된 요소 선택</td>
      <td>[속성*="값"]</td>
      <td><code>a[href*="google"] { color: red; }</code></td>
    </tr>
    <tr>
      <td>속성 값 시작 선택자</td>
      <td>속성 값이 특정 문자열로 시작하는 요소 선택</td>
      <td>[속성^="값"]</td>
      <td><code>a[href^="https"] { font-weight: bold; }</code></td>
    </tr>
    <tr>
      <td>속성 값 끝 선택자</td>
      <td>속성 값이 특정 문자열로 끝나는 요소 선택</td>
      <td>[속성$="값"]</td>
      <td><code>a[href$=".pdf"] { background: url(pdf-icon.png); }</code></td>
    </tr>
    <tr>
      <td rowspan="11">가상 클래스 선택자</td>
      <td>:hover ★</td>
      <td>마우스를 올렸을 때</td>
      <td>선택자:hover</td>
      <td><code>a:hover { color: red; }</code></td>
    </tr>
    <tr>
      <td>:active</td>
      <td>클릭하고 있을 때</td>
      <td>선택자:active</td>
      <td><code>a:active { color: blue; }</code></td>
    </tr>
    <tr>
      <td>:visited</td>
      <td>방문한 링크</td>
      <td>선택자:visited</td>
      <td><code>a:visited { color: purple; }</code></td>
    </tr>
    <tr>
      <td>:focus</td>
      <td>포커스를 받았을 때</td>
      <td>선택자:focus</td>
      <td><code>input:focus { border: 2px solid blue; }</code></td>
    </tr>
    <tr>
      <td>:focus-visible ★</td>
      <td>키보드로 포커스를 받았을 때만</td>
      <td>선택자:focus-visible</td>
      <td><code>a:focus-visible { outline: 2px solid; }</code></td>
    </tr>
    <tr>
      <td>:first-child</td>
      <td>첫 번째 자식 요소</td>
      <td>선택자:first-child</td>
      <td><code>li:first-child { font-weight: bold; }</code></td>
    </tr>
    <tr>
      <td>:last-child ★</td>
      <td>마지막 자식 요소</td>
      <td>선택자:last-child</td>
      <td><code>li:last-child { border-bottom: none; }</code></td>
    </tr>
    <tr>
      <td>:nth-child(n)</td>
      <td>n번째 자식 요소</td>
      <td>선택자:nth-child(n)</td>
      <td><code>li:nth-child(2) { color: red; }</code></td>
    </tr>
    <tr>
      <td>:nth-child(odd)</td>
      <td>홀수 번째 자식 요소</td>
      <td>선택자:nth-child(odd)</td>
      <td><code>li:nth-child(odd) { background: #f0f0f0; }</code></td>
    </tr>
    <tr>
      <td>:nth-child(even)</td>
      <td>짝수 번째 자식 요소</td>
      <td>선택자:nth-child(even)</td>
      <td><code>li:nth-child(even) { background: #fff; }</code></td>
    </tr>
    <tr>
      <td>:not(선택자)</td>
      <td>특정 선택자를 제외한 요소</td>
      <td>선택자:not(제외할선택자)</td>
      <td><code>p:not(.intro) { font-size: 14px; }</code></td>
    </tr>
    <tr>
      <td rowspan="5">가상 요소 선택자</td>
      <td>::first-letter</td>
      <td>첫 글자 선택</td>
      <td>선택자::first-letter</td>
      <td><code>p::first-letter { font-size: 2em; }</code></td>
    </tr>
    <tr>
      <td>::first-line</td>
      <td>첫 줄 선택</td>
      <td>선택자::first-line</td>
      <td><code>p::first-line { color: blue; }</code></td>
    </tr>
    <tr>
      <td>::before</td>
      <td>요소 앞에 내용 추가</td>
      <td>선택자::before</td>
      <td><code>h1::before { content: "📌 "; }</code></td>
    </tr>
    <tr>
      <td>::after</td>
      <td>요소 뒤에 내용 추가</td>
      <td>선택자::after</td>
      <td><code>h1::after { content: " ✓"; }</code></td>
    </tr>
    <tr>
      <td>::selection</td>
      <td>사용자가 선택한 텍스트</td>
      <td>::selection</td>
      <td><code>::selection { background: yellow; }</code></td>
    </tr>
  </tbody>
</table>

### 기본 선택자

#### 전체 선택자 ★ 3일차
```css
* {
  margin: 0;
  padding: 0;
}
```

#### 요소(태그) 선택자 ★ 3일차
```css
p {
  color: black;
}

h1 {
  font-size: 32px;
}
```

#### 클래스 선택자 ★ 3일차
```css
.container {
  width: 100%;
}

.btn {
  padding: 10px 20px;
}
```

```html
<div class="container">...</div>
<button class="btn">버튼</button>
```

#### ID 선택자 ★ 3일차
```css
#header {
  background-color: #333;
}

#main-content {
  padding: 20px;
}
```

```html
<div id="header">...</div>
<div id="main-content">...</div>
```

### 복합 선택자

#### 그룹 선택자 ★ 6일차
```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```

#### 자손 선택자 (공백) ★ 3일차
```css
/* div 안의 모든 p 요소 */
div p {
  color: blue;
}
```

#### 자식 선택자 (>) ★ 3일차
```css
/* div의 직계 자식 p 요소만 */
div > p {
  color: red;
}
```

#### 인접 형제 선택자 (+)
```css
/* h1 바로 다음에 오는 p 요소 */
h1 + p {
  font-weight: bold;
}
```

#### 일반 형제 선택자 (~)
```css
/* h1 이후의 모든 p 형제 요소 */
h1 ~ p {
  margin-top: 10px;
}
```

### 속성 선택자

```css
/* href 속성을 가진 a 요소 */
a[href] {
  color: blue;
}

/* href가 정확히 일치 */
a[href="https://example.com"] {
  color: green;
}

/* href에 "google"이 포함 */
a[href*="google"] {
  color: red;
}

/* href가 "https"로 시작 */
a[href^="https"] {
  font-weight: bold;
}

/* href가 ".pdf"로 끝남 */
a[href$=".pdf"] {
  background: url(pdf-icon.png);
}
```

### 가상 클래스 선택자 ★ 3·4·6일차 — :hover · :last-child · :focus-visible

```css
/* 마우스 오버 */
a:hover {
  color: red;
}

/* 활성화 (클릭) */
a:active {
  color: blue;
}

/* 방문한 링크 */
a:visited {
  color: purple;
}

/* 포커스 */
input:focus {
  border: 2px solid blue;
}

/* 키보드로 다닐 때만 포커스 표시 (마우스 클릭엔 안 뜬다) — 6일차 */
a:focus-visible {
  outline: 2px solid blue;
  outline-offset: 2px;
}

/* 첫 번째 자식 */
li:first-child {
  font-weight: bold;
}

/* 마지막 자식 */
li:last-child {
  border-bottom: none;
}

/* n번째 자식 */
li:nth-child(2) {
  color: red;
}

/* 홀수 번째 */
li:nth-child(odd) {
  background: #f0f0f0;
}

/* 짝수 번째 */
li:nth-child(even) {
  background: #ffffff;
}
```

### 가상 요소 선택자

```css
/* 첫 글자 */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
}

/* 첫 줄 */
p::first-line {
  color: blue;
}

/* 요소 앞에 내용 추가 */
h1::before {
  content: "📌 ";
}

/* 요소 뒤에 내용 추가 */
h1::after {
  content: " ✓";
}

/* 선택된 텍스트 */
::selection {
  background: yellow;
  color: black;
}
```

---

## 가시성

### `display` ★ 4일차
요소의 표시 방식
```css
div {
  display: block;        /* 블록 요소 */
  display: inline;       /* 인라인 요소 */
  display: inline-block; /* 인라인 + 블록 특성 */
  display: none;         /* 숨김 (공간도 차지 안함) */
  display: flex;         /* Flexbox */
  display: grid;         /* Grid */
}
```

#### 블록 레벨 요소 vs 인라인 요소

**블록 레벨 요소**
- 새로운 줄에서 시작하고 전체 너비를 차지
- 예: `<div>`, `<p>`, `<h1>`, `<ul>`, `<section>`, `<header>` 등

**인라인 요소**
- 줄 바꿈 없이 내용만큼의 공간만 차지
- 예: `<span>`, `<a>`, `<strong>`, `<img>`, `<input>` 등

### `visibility`
요소 표시/숨김
```css
div {
  visibility: visible; /* 보임 */
  visibility: hidden;  /* 숨김 (공간은 차지함) */
}
```

### `opacity`
투명도
```css
div {
  opacity: 1;   /* 불투명 */
  opacity: 0.5; /* 반투명 */
  opacity: 0;   /* 완전 투명 */
}
```

---

## 크기와 단위

### 절대 단위 ★ 3일차 — px
```css
div {
  width: 100px;  /* 픽셀 */
  width: 1cm;    /* 센티미터 */
  width: 1in;    /* 인치 */
  width: 1pt;    /* 포인트 */
}
```

### 상대 단위

#### `%`
부모 요소 기준
```css
.child {
  width: 50%; /* 부모의 50% */
}
```

#### `em`
`font-size` 에 쓰면 **부모**의 글자 크기 기준, 그 밖의 속성(`padding` 등)에 쓰면 **자기** 글자 크기 기준
```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 2em;   /* 32px */
  padding: 1em;     /* 32px — 자기 font-size(32px) 기준 */
}
```

#### `rem`
루트(html) 요소의 font-size 기준
```css
html {
  font-size: 16px;
}

div {
  font-size: 2rem;  /* 32px */
  padding: 1rem;    /* 16px */
}
```

#### `vw` / `vh`
뷰포트(브라우저 창) 크기 기준
```css
div {
  width: 50vw;   /* 뷰포트 너비의 50% */
  height: 100vh; /* 뷰포트 높이의 100% */
}
```

#### `ch` ★ 6일차
`0` 한 글자의 폭 — **글줄 길이**를 정할 때 (한글은 1ch 에 약 0.65자)
```css
.article p {
  max-width: 62ch; /* 한글로 40자쯤 — 6일차에 재 본 값 */
}
```

#### `vmin` / `vmax`
뷰포트의 작은/큰 쪽 기준
```css
div {
  width: 50vmin;  /* vw와 vh 중 작은 값의 50% */
  height: 50vmax; /* vw와 vh 중 큰 값의 50% */
}
```

---

## 박스 모델

모든 HTML 요소는 박스로 구성됨: **Content → Padding → Border → Margin**

```
+------------------ margin ------------------+
|  +--------------- border ---------------+  |
|  |  +------------ padding ------------+ |  |
|  |  |                                 | |  |
|  |  |            content              | |  |
|  |  |                                 | |  |
|  |  +---------------------------------+ |  |
|  +--------------------------------------+  |
+--------------------------------------------+
```

### `width` / `height` ★ 3일차
요소의 너비와 높이
```css
div {
  width: 300px;
  height: 200px;
  width: 50%;
  height: auto;

  /* 최소/최대 크기 */
  min-width: 200px;
  max-width: 1200px;
  min-height: 100px;
  max-height: 500px;
}
```

### `padding` ★ 3일차
내부 여백 (Content와 Border 사이)
```css
div {
  /* 전체 */
  padding: 20px;

  /* 상하 좌우 */
  padding: 10px 20px;

  /* 상 좌우 하 */
  padding: 10px 20px 30px;

  /* 상 우 하 좌 (시계방향) */
  padding: 10px 20px 30px 40px;

  /* 개별 지정 */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

### `margin` ★ 3일차
외부 여백 (Border 바깥)
```css
div {
  /* padding과 동일한 방식 */
  margin: 20px;
  margin: 10px 20px;
  margin: 10px 20px 30px 40px;

  /* 개별 지정 */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;

  /* 가로 중앙 정렬 */
  margin: 0 auto;
}
```

### `border` ★ 3일차
테두리
```css
div {
  /* width style color */
  border: 2px solid black;

  /* 개별 지정 */
  border-width: 2px;
  border-style: solid; /* solid, dashed, dotted, double, none */
  border-color: black;

  /* 방향별 */
  border-top: 1px solid red;
  border-right: 2px dashed blue;
  border-bottom: 3px dotted green;
  border-left: 4px double orange;
}
```

### `box-sizing` ★ 3일차
박스 크기 계산 방식
```css
* {
  /* width/height에 padding과 border 포함 (권장) */
  box-sizing: border-box;

  /* width/height가 content만 의미 (기본값) */
  box-sizing: content-box;
}
```

---

## 테두리와 그림자

### `border-radius` ★ 6일차
모서리 둥글게
```css
div {
  border-radius: 10px;           /* 전체 */
  border-radius: 50%;            /* 원형 */
  border-radius: 10px 20px;      /* 대각선 */
  border-radius: 10px 20px 30px 40px; /* 개별 */

  /* 개별 모서리 */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
```

### `box-shadow`
박스 그림자
```css
div {
  /* x y blur spread color */
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);

  /* 내부 그림자 */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);

  /* 여러 그림자 */
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.3),
    -2px -2px 5px rgba(255, 255, 255, 0.5);
}
```

### `outline` ★ 6일차
외곽선 (레이아웃에 영향 안줌)
```css
input:focus {
  outline: 2px solid blue;
  outline-offset: 2px; /* 간격 */
}

/* 🔴 outline: none 으로 지우지 마십시오 — 키보드로 다니는 사람이 지금 어디인지 못 봅니다.
   마우스 클릭 때 테두리가 거슬리면 :focus-visible 로 «키보드일 때만» 보이게 합니다 (6일차) */
button:focus-visible {
  outline: 2px solid blue;
  outline-offset: 2px;
}
```

---

## 배경

### 색상 표현 방식 ★ 3일차 — HEX

```css
.element {
  /* 색상 이름 */
  color: red;

  /* HEX */
  color: #ff0000;
  color: #f00; /* 단축형 */

  /* RGB */
  color: rgb(255, 0, 0);

  /* RGBA (투명도) */
  color: rgba(255, 0, 0, 0.5);

  /* HSL */
  color: hsl(0, 100%, 50%);

  /* HSLA */
  color: hsla(0, 100%, 50%, 0.5);
}
```

### `background-color` ★ 3일차
배경 색상
```css
div {
  background-color: #f0f0f0;
  background-color: rgba(0, 0, 0, 0.1);
}
```

### `background-image`
배경 이미지
```css
div {
  background-image: url('image.jpg');
  background-image: linear-gradient(to right, red, blue);
}
```

### `background-repeat`
배경 반복
```css
div {
  background-repeat: repeat;    /* 반복 (기본값) */
  background-repeat: no-repeat; /* 반복 안함 */
  background-repeat: repeat-x;  /* 가로만 반복 */
  background-repeat: repeat-y;  /* 세로만 반복 */
}
```

### `background-position`
배경 위치
```css
div {
  background-position: center;
  background-position: top right;
  background-position: 50% 50%;
  background-position: 10px 20px;
}
```

### `background-size`
배경 크기
```css
div {
  background-size: auto;         /* 원본 크기 */
  background-size: cover;        /* 요소를 꽉 채움 */
  background-size: contain;      /* 요소 안에 이미지 전체 표시 */
  background-size: 100px 200px;  /* 직접 지정 */
  background-size: 50%;          /* 비율 */
}
```

### `background-attachment`
배경 고정
```css
div {
  background-attachment: scroll; /* 스크롤 (기본값) */
  background-attachment: fixed;  /* 고정 */
}
```

### `background` (단축 속성)
```css
div {
  background: #f0f0f0 url('bg.jpg') no-repeat center/cover;
}
```

### 그라디언트

#### 선형 그라디언트
```css
div {
  background: linear-gradient(to right, red, blue);
  background: linear-gradient(45deg, red, yellow, green);
  background: linear-gradient(to bottom, red 0%, blue 50%, green 100%);
}
```

#### 방사형 그라디언트
```css
div {
  background: radial-gradient(circle, red, blue);
  background: radial-gradient(ellipse at center, red, yellow, green);
}
```

---

## 텍스트

### 폰트 관련

#### `font-family` ★ 3일차
폰트 종류 지정
```css
p {
  font-family: Arial, "Helvetica Neue", sans-serif;
}

/* 웹 폰트 사용 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

body {
  font-family: 'Noto Sans KR', sans-serif;
}
```

#### `font-size` ★ 3일차
글자 크기
```css
p {
  font-size: 16px;
  font-size: 1em;
  font-size: 1rem;
  font-size: 100%;
}
```

#### `font-weight` ★ 3일차
글자 굵기
- 값: normal(400), bold(700), 100~900
```css
p {
  font-weight: normal;
  font-weight: bold;
  font-weight: 700;
}
```

#### `font-style`
글자 스타일
```css
p {
  font-style: normal;
  font-style: italic;
  font-style: oblique;
}
```

#### `font` (단축 속성)
```css
p {
  /* style weight size/line-height family */
  font: italic bold 16px/1.5 Arial, sans-serif;
}
```

### 텍스트 정렬 및 장식

#### `color` ★ 3일차
글자 색상
```css
p {
  color: red;
  color: #ff0000;
  color: rgb(255, 0, 0);
  color: rgba(255, 0, 0, 0.5);
}
```

#### `text-align`
텍스트 정렬
```css
p {
  text-align: left;    /* 왼쪽 */
  text-align: right;   /* 오른쪽 */
  text-align: center;  /* 가운데 */
  text-align: justify; /* 양쪽 정렬 */
}
```

#### `text-decoration` ★ 3일차
텍스트 장식
```css
a {
  text-decoration: none;         /* 없음 */
  text-decoration: underline;    /* 밑줄 */
  text-decoration: overline;     /* 윗줄 */
  text-decoration: line-through; /* 취소선 */
}
```

#### `text-transform`
대소문자 변환
```css
p {
  text-transform: uppercase;  /* 대문자 */
  text-transform: lowercase;  /* 소문자 */
  text-transform: capitalize; /* 첫 글자만 대문자 */
}
```

#### `line-height` ★ 3일차
줄 높이
```css
p {
  line-height: 1.5;
  line-height: 24px;
  line-height: 150%;
}
```

#### `letter-spacing`
글자 간격
```css
p {
  letter-spacing: 1px;
  letter-spacing: 0.1em;
}
```

#### `word-spacing`
단어 간격
```css
p {
  word-spacing: 5px;
}
```

#### `text-indent`
첫 줄 들여쓰기
```css
p {
  text-indent: 20px;
}
```

#### `text-shadow`
텍스트 그림자
```css
h1 {
  /* x-offset y-offset blur color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
```

#### `white-space`
공백 처리
```css
p {
  white-space: normal;   /* 기본값 */
  white-space: nowrap;   /* 줄바꿈 안함 */
  white-space: pre;      /* 공백 그대로 유지 */
  white-space: pre-wrap; /* 공백 유지 + 자동 줄바꿈 */
}
```

#### `overflow-wrap` / `word-break`
긴 단어 줄바꿈
```css
p {
  overflow-wrap: break-word;
  word-break: break-all;
}
```

---

## 레이아웃

### `position`
요소의 위치 지정 방식

#### `static` (기본값)
```css
div {
  position: static; /* 기본 흐름대로 배치 */
}
```

#### `relative`
상대 위치
```css
div {
  position: relative;
  top: 10px;    /* 원래 위치에서 아래로 10px */
  left: 20px;   /* 원래 위치에서 오른쪽으로 20px */
}
```

#### `absolute`
절대 위치 (가장 가까운 position이 있는 부모 기준)
```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

#### `fixed`
고정 위치 (viewport 기준)
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

#### `sticky`
스크롤 시 고정
```css
.nav {
  position: sticky;
  top: 0;
}
```

### `z-index`
요소의 쌓임 순서 (position이 있어야 작동)
```css
div {
  position: relative;
  z-index: 10; /* 값이 클수록 위에 표시 */
}
```

### `float`
요소를 띄움 (주로 텍스트 감싸기에 사용)
```css
img {
  float: left;
  float: right;
  float: none;
}

/* float 해제 */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### `overflow`
내용이 넘칠 때 처리
```css
div {
  overflow: visible; /* 넘침 (기본값) */
  overflow: hidden;  /* 숨김 */
  overflow: scroll;  /* 스크롤바 항상 표시 */
  overflow: auto;    /* 필요시 스크롤바 표시 */

  /* 개별 지정 */
  overflow-x: auto;
  overflow-y: hidden;
}
```

### 유용한 레이아웃 속성

#### `cursor` ★ 6일차
마우스 커서 모양
```css
button {
  cursor: pointer;     /* 손가락 */
  cursor: default;     /* 기본 화살표 */
  cursor: text;        /* 텍스트 커서 */
  cursor: move;        /* 이동 */
  cursor: not-allowed; /* 금지 */
  cursor: wait;        /* 대기 */
}
```

#### `list-style` ★ 3일차
목록 스타일
```css
ul {
  list-style: none;   /* 마커 없음 */
  list-style: disc;   /* 채운 원 */
  list-style: circle; /* 빈 원 */
  list-style: square; /* 사각형 */
}

ol {
  list-style: decimal;     /* 1, 2, 3... */
  list-style: lower-alpha; /* a, b, c... */
  list-style: upper-roman; /* I, II, III... */
}
```

#### `user-select`
텍스트 선택 제어
```css
div {
  user-select: none; /* 선택 불가 */
  user-select: text; /* 선택 가능 */
  user-select: all;  /* 클릭시 전체 선택 */
}
```

#### `pointer-events`
마우스 이벤트 제어
```css
div {
  pointer-events: none; /* 마우스 이벤트 무시 */
  pointer-events: auto; /* 기본값 */
}
```

#### `object-fit`
이미지/비디오 맞춤
```css
img {
  width: 100%;
  height: 300px;
  object-fit: cover;   /* 비율 유지하며 채움 */
  object-fit: contain; /* 비율 유지하며 전체 표시 */
  object-fit: fill;    /* 늘려서 채움 */
}
```

#### `filter`
필터 효과
```css
img {
  filter: blur(5px);
  filter: brightness(150%);
  filter: contrast(200%);
  filter: grayscale(100%);
  filter: sepia(100%);
  filter: saturate(200%);
  filter: hue-rotate(90deg);
  filter: invert(100%);

  /* 여러 필터 조합 */
  filter: brightness(110%) contrast(120%) saturate(130%);
}
```

---

## Flexbox

부모 요소에 `display: flex` 적용

### 부모 컨테이너 속성

#### `display: flex` ★ 4일차
```css
.container {
  display: flex;
}
```

#### `flex-direction` ★ 4일차
주축 방향
```css
.container {
  flex-direction: row;         /* 가로 (기본값) */
  flex-direction: row-reverse; /* 가로 역순 */
  flex-direction: column;      /* 세로 */
  flex-direction: column-reverse; /* 세로 역순 */
}
```

#### `justify-content` ★ 4일차
주축 정렬
```css
.container {
  justify-content: flex-start;    /* 시작점 */
  justify-content: flex-end;      /* 끝점 */
  justify-content: center;        /* 가운데 */
  justify-content: space-between; /* 양쪽 끝 배치 + 균등 간격 */
  justify-content: space-around;  /* 양쪽 여백 포함 균등 간격 */
  justify-content: space-evenly;  /* 완전 균등 간격 */
}
```

#### `align-items` ★ 4일차
교차축 정렬
```css
.container {
  align-items: stretch;    /* 늘림 (기본값) */
  align-items: flex-start; /* 시작점 */
  align-items: flex-end;   /* 끝점 */
  align-items: center;     /* 가운데 */
  align-items: baseline;   /* 텍스트 기준선 */
}
```

#### `flex-wrap` ★ 4일차
줄바꿈
```css
.container {
  flex-wrap: nowrap;       /* 줄바꿈 안함 (기본값) */
  flex-wrap: wrap;         /* 줄바꿈 */
  flex-wrap: wrap-reverse; /* 역순 줄바꿈 */
}
```

#### `align-content`
여러 줄 정렬 (flex-wrap: wrap과 함께 사용)
```css
.container {
  align-content: stretch;       /* 늘림 */
  align-content: flex-start;    /* 시작점 */
  align-content: flex-end;      /* 끝점 */
  align-content: center;        /* 가운데 */
  align-content: space-between; /* 균등 분배 */
  align-content: space-around;  /* 여백 포함 균등 */
}
```

#### `gap` ★ 4일차
항목 간 간격
```css
.container {
  gap: 20px;           /* 가로세로 간격 */
  gap: 10px 20px;      /* 세로 가로 */
  row-gap: 10px;       /* 세로 간격 */
  column-gap: 20px;    /* 가로 간격 */
}
```

### 자식 아이템 속성

#### `flex-grow`
남은 공간을 차지하는 비율
```css
.item {
  flex-grow: 0; /* 기본값 */
  flex-grow: 1; /* 남은 공간을 균등하게 */
  flex-grow: 2; /* 다른 아이템의 2배 */
}
```

#### `flex-shrink`
공간이 부족할 때 줄어드는 비율
```css
.item {
  flex-shrink: 1; /* 기본값 */
  flex-shrink: 0; /* 줄어들지 않음 */
}
```

#### `flex-basis`
기본 크기
```css
.item {
  flex-basis: auto;  /* 기본값 */
  flex-basis: 200px;
  flex-basis: 50%;
}
```

#### `flex` (단축 속성)
```css
.item {
  /* grow shrink basis */
  flex: 1;           /* flex: 1 1 0% */
  flex: 0 1 auto;    /* 기본값 */
  flex: 1 0 200px;
}
```

#### `align-self`
개별 아이템의 교차축 정렬
```css
.item {
  align-self: auto;
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: stretch;
}
```

#### `order`
아이템 순서
```css
.item {
  order: 0;  /* 기본값 */
  order: -1; /* 앞으로 */
  order: 1;  /* 뒤로 */
}
```

---

## Grid

부모 요소에 `display: grid` 적용

### 부모 컨테이너 속성

#### `display: grid` ★ 5일차
```css
.container {
  display: grid;
}
```

#### `grid-template-columns` ★ 5일차
열(column) 정의
```css
.container {
  /* 3개 열 (200px씩) */
  grid-template-columns: 200px 200px 200px;

  /* 3개 열 (균등 분할) */
  grid-template-columns: 1fr 1fr 1fr;

  /* 단축형 */
  grid-template-columns: repeat(3, 1fr);

  /* 다양한 크기 */
  grid-template-columns: 200px 1fr 2fr;

  /* 자동 채우기 */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

#### `grid-template-rows`
행(row) 정의
```css
.container {
  grid-template-rows: 100px 200px 100px;
  grid-template-rows: repeat(3, 1fr);
}
```

#### `grid-template-areas` ★ 5일차
영역 이름으로 레이아웃 정의
```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

#### `gap` ★ 5일차
간격
```css
.container {
  gap: 20px;           /* 가로세로 간격 */
  gap: 10px 20px;      /* 세로 가로 */
  row-gap: 10px;
  column-gap: 20px;
}
```

#### `justify-items`
셀 내부 가로 정렬
```css
.container {
  justify-items: start;
  justify-items: end;
  justify-items: center;
  justify-items: stretch; /* 기본값 */
}
```

#### `align-items`
셀 내부 세로 정렬
```css
.container {
  align-items: start;
  align-items: end;
  align-items: center;
  align-items: stretch; /* 기본값 */
}
```

#### `justify-content`
전체 그리드 가로 정렬
```css
.container {
  justify-content: start;
  justify-content: end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

#### `align-content`
전체 그리드 세로 정렬
```css
.container {
  align-content: start;
  align-content: end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
}
```

### 자식 아이템 속성

#### `grid-column`
열 위치와 크기
```css
.item {
  /* 1번 열부터 3번 열까지 */
  grid-column: 1 / 3;

  /* 1번 열부터 2칸 차지 */
  grid-column: 1 / span 2;

  /* 단축 */
  grid-column-start: 1;
  grid-column-end: 3;
}
```

#### `grid-row`
행 위치와 크기
```css
.item {
  grid-row: 1 / 3;
  grid-row: 2 / span 2;

  grid-row-start: 1;
  grid-row-end: 3;
}
```

#### `grid-area` ★ 5일차
영역 이름 또는 위치
```css
.item {
  /* 이름 */
  grid-area: header;

  /* row-start / col-start / row-end / col-end */
  grid-area: 1 / 1 / 3 / 3;
}
```

#### `justify-self`
개별 아이템 가로 정렬
```css
.item {
  justify-self: start;
  justify-self: end;
  justify-self: center;
  justify-self: stretch;
}
```

#### `align-self`
개별 아이템 세로 정렬
```css
.item {
  align-self: start;
  align-self: end;
  align-self: center;
  align-self: stretch;
}
```

---

## 변형과 전환

### `transform`
요소 변형

#### 2D 변형
```css
div {
  /* 이동 */
  transform: translate(50px, 100px);
  transform: translateX(50px);
  transform: translateY(100px);

  /* 회전 */
  transform: rotate(45deg);

  /* 크기 변경 */
  transform: scale(1.5);
  transform: scale(2, 0.5);
  transform: scaleX(2);
  transform: scaleY(0.5);

  /* 기울이기 */
  transform: skew(10deg, 20deg);
  transform: skewX(10deg);
  transform: skewY(20deg);

  /* 여러 변형 조합 */
  transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}
```

#### 3D 변형
```css
div {
  transform: translateZ(50px);
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: rotateZ(45deg);
  transform: perspective(500px) rotateY(45deg);
}
```

#### `transform-origin`
변형 기준점
```css
div {
  transform-origin: center;      /* 기본값 */
  transform-origin: top left;
  transform-origin: 50% 50%;
  transform-origin: 0 0;
}
```

### `transition`
전환 효과 (애니메이션)

```css
div {
  /* property duration timing-function delay */
  transition: all 0.3s ease 0s;

  /* 개별 속성 */
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease; /* ease, linear, ease-in, ease-out, ease-in-out */
  transition-delay: 0s;

  /* 여러 속성 */
  transition:
    background-color 0.3s ease,
    transform 0.5s ease-in-out;
}

div:hover {
  background-color: blue;
  transform: scale(1.1);
}
```

---

## 애니메이션

### `@keyframes`
애니메이션 정의
```css
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

/* 또는 */
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(100px);
  }
}
```

### `animation`
애니메이션 적용
```css
div {
  /* name duration timing-function delay iteration-count direction fill-mode */
  animation: slide 2s ease-in-out 0s infinite alternate both;

  /* 개별 속성 */
  animation-name: slide;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: infinite; /* 무한 반복 또는 숫자 */
  animation-direction: normal;         /* normal, reverse, alternate, alternate-reverse */
  animation-fill-mode: both;           /* none, forwards, backwards, both */
  animation-play-state: running;       /* running, paused */
}
```

### 예시: 회전 애니메이션
```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  animation: spin 1s linear infinite;
}
```

### 예시: 페이드 인
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}
```

---

## 반응형 디자인

### 미디어 쿼리 `@media` ★ 5일차

```css
/* 기본 스타일 (모바일 우선) */
.container {
  width: 100%;
  padding: 10px;
}

/* 태블릿 이상 (768px 이상) */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}

/* 데스크톱 이상 (1024px 이상) */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}

/* 대형 데스크톱 (1200px 이상) */
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
```

### 다양한 미디어 쿼리 조건 ★ 5·6일차

```css
/* 최대 너비 */
@media (max-width: 767px) {
  /* 모바일 전용 */
}

/* 범위 */
@media (min-width: 768px) and (max-width: 1023px) {
  /* 태블릿 전용 */
}

/* 세로/가로 모드 */
@media (orientation: portrait) {
  /* 세로 모드 */
}

@media (orientation: landscape) {
  /* 가로 모드 */
}

/* 고해상도 디스플레이 */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
  /* Retina 디스플레이 */
}

/* 인쇄 */
@media print {
  /* 인쇄용 스타일 */
}

/* 사용자가 어두운 화면을 쓸 때 — 6일차 */
@media (prefers-color-scheme: dark) {
  :root { --bg: #16202a; --text: #e8eef3; }
}
```

### 반응형 단위 활용
```css
/* 뷰포트 기반 */
.hero {
  height: 100vh;
  font-size: 5vw;
}

/* rem 기반 (루트 font-size 조절) */
html {
  font-size: 14px;
}

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 18px;
  }
}
```

### 반응형 이미지 ★ 5일차
```css
img {
  max-width: 100%;
  height: auto;
}
```

---

## 모범 사례

### 1. 명명 규칙
```css
/* BEM (Block Element Modifier) */
.card { }
.card__title { }
.card__button { }
.card--featured { }

/* 또는 케밥 케이스 */
.main-header { }
.user-profile { }
```

### 2. 선택자 우선순위 ★ 3일차
- 인라인 스타일(`style="..."`): 1000점
- ID 선택자: 100점
- 클래스/속성/가상클래스: 10점
- 요소/가상요소: 1점

```css
/* 우선순위 낮음 */
div { color: red; }

/* 우선순위 중간 */
.text { color: blue; }

/* 우선순위 높음 */
#title { color: green; }

/* 최고 우선순위 — 🔴 쓰지 마십시오. 이기려고 또 쓰게 됩니다 (3일차) */
div { color: purple !important; }
```

### 3. CSS 리셋 ★ 3일차
```css
/* 간단한 리셋 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 4. CSS 변수 (Custom Properties) ★ 6일차
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-base: 16px;
  --spacing-unit: 8px;
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
  padding: calc(var(--spacing-unit) * 2);
}
```

### 5. 가독성 있는 코드
```css
/* 좋은 예 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
}

/* 나쁜 예 */
.header{display:flex;justify-content:space-between;align-items:center;padding:20px;background-color:#fff;}
```
