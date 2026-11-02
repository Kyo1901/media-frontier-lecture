
# HTML 태그 정리

> **★ 표시 = 우리 수업에서 직접 다루는 것**입니다. 뒤의 숫자는 HTML/CSS 몇 일차인지입니다.
> ★ 이 없는 것은 **필요할 때 찾아보는 용도**입니다 — 지금 몰라도 됩니다.
> 수업 슬라이드와 이 문서가 다르게 말하는 것 같으면 **슬라이드가 우선**입니다. 물어봐 주십시오.

## 목차
1. [문서 구조](#문서-구조)
2. [텍스트 서식](#텍스트-서식)
3. [목록](#목록)
4. [링크와 이미지](#링크와-이미지)
5. [테이블](#테이블)
6. [폼](#폼)
7. [시맨틱 요소](#시맨틱-요소)
8. [멀티미디어](#멀티미디어)

---

## 문서 구조

### `<!DOCTYPE html>` ★ 1일차
「이 문서는 HTML 이다」라는 선언 — 맨 위에 한 줄 (지금 표준은 번호 없는 HTML Living Standard)
```html
<!DOCTYPE html>
```

### `<html>` ★ 1일차
HTML 문서의 루트(최상위) 요소
- **주요 속성**: `lang` (언어 지정)
```html
<html lang="ko">
</html>
```

### `<head>` ★ 1일차
문서의 메타데이터를 포함하는 영역
```html
<head>
  <meta charset="UTF-8">
  <title>페이지 제목</title>
</head>
```

### `<meta>` ★ 1일차
문서의 메타데이터를 정의
- **주요 속성**: `charset`, `name`, `content`
- 🔴 `viewport` 는 속성이 아니라 `name="viewport"` 의 **값**입니다 — 휴대폰에서 화면 폭을 기기에 맞추라는 뜻
```html
<meta charset="UTF-8">
<meta name="description" content="페이지 설명">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### `<title>` ★ 1일차
브라우저 탭에 표시되는 문서의 제목
```html
<title>웹 페이지 제목</title>
```

### `<link>` ★ 3일차
외부 리소스(주로 CSS)를 연결
- **주요 속성**: `rel`, `href`, `type`
```html
<link rel="stylesheet" href="style.css">
<link rel="icon" href="favicon.ico">
```

### `<style>` ★ 3일차
내부 CSS 스타일을 정의
```html
<style>
  body { background-color: #f0f0f0; }
</style>
```

### `<script>` ★ JS 1일차
JavaScript 코드를 포함하거나 외부 스크립트를 연결
- **주요 속성**: `src`, `type`, `defer`, `async`
```html
<script src="script.js"></script>
<script>
  console.log('Hello World');
</script>
```

### `<body>` ★ 1일차
문서의 본문 내용을 포함
```html
<body>
  
</body>
```

---

## 텍스트 서식

### `<h1>` ~ `<h6>` ★ 1·2일차
제목(Heading) 태그 (h1이 가장 중요, h6이 가장 덜 중요)
```html
<h1>가장 중요한 제목</h1>
<h2>두 번째 제목</h2>
<h3>세 번째 제목</h3>
```

### `<p>` ★ 1일차
단락(Paragraph)을 정의
```html
<p>이것은 하나의 단락입니다.</p>
```

### `<br>` ★ 2일차
줄 바꿈 (빈 태그)
```html
첫 번째 줄<br>
두 번째 줄
```

### `<hr>` ★ 2일차
수평선을 삽입 (주제의 구분)
```html
<p>첫 번째 섹션</p>
<hr>
<p>두 번째 섹션</p>
```

### `<strong>` ★ 2일차
중요한 텍스트 (굵게 표시)
```html
<strong>중요한 내용</strong>
```

### `<b>` ★ 2일차
단순히 굵은 텍스트 (시각적 효과만)
```html
<b>굵은 글씨</b>
```

### `<em>` ★ 2일차
강조된 텍스트 (기울임)
```html
<em>강조된 내용</em>
```

### `<i>` ★ 2일차
단순히 기울임 텍스트 (시각적 효과만)
```html
<i>기울임 글씨</i>
```

### `<mark>`
하이라이트된 텍스트
```html
<mark>강조 표시</mark>
```

### `<small>`
작은 텍스트
```html
<small>작은 글씨</small>
```

### `<del>`
삭제된 텍스트 (취소선)
```html
<del>삭제된 내용</del>
```

### `<ins>`
삽입된 텍스트 (밑줄)
```html
<ins>추가된 내용</ins>
```

### `<sub>`
아래 첨자
```html
H<sub>2</sub>O
```

### `<sup>`
위 첨자
```html
X<sup>2</sup>
```

### `<code>`
코드 조각을 표시
```html
<code>console.log('Hello');</code>
```

### `<pre>`
미리 서식이 지정된 텍스트 (공백과 줄바꿈 유지)
```html
<pre>
  function hello() {
    console.log('Hello');
  }
</pre>
```

### `<blockquote>`
인용 블록
- **주요 속성**: `cite` (출처 URL)
```html
<blockquote cite="https://example.com">
  인용된 내용입니다.
</blockquote>
```

### `<span>` ★ 6일차
인라인 컨테이너 (스타일링 목적)
```html
<p>이것은 <span class="highlight">강조할 부분</span> 입니다.</p>

```

### `<div>` ★ 1일차
블록 레벨 컨테이너 (그룹화 및 레이아웃)
```html
<div class="container">
  <p>컨텐츠</p>
</div>
```

---

## 목록

### `<ul>` ★ 2일차
순서 없는 목록 (Unordered List)
```html
<ul>
  <li>첫 번째 항목</li>
  <li>두 번째 항목</li>
</ul>
```

### `<ol>` ★ 2일차
순서 있는 목록 (Ordered List)
- **주요 속성**: `type`, `start`, `reversed`
```html
<ol>
  <li>첫 번째</li>
  <li>두 번째</li>
</ol>
```

### `<li>` ★ 2일차
목록 항목 (List Item)
```html
<ul>
  <li>항목</li>
</ul>
```

### `<dl>` ★ 2일차
설명 목록 (Description List)
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

### `<dt>` ★ 2일차
설명 목록의 용어 (Description Term)

### `<dd>` ★ 2일차
설명 목록의 정의 (Description Definition)

---

## 링크와 이미지

### `<a>` ★ 2일차
하이퍼링크를 생성
- **주요 속성**: `href`, `target`, `download`, `rel`
```html
<a href="https://example.com">링크 텍스트</a>
<a href="page.html" target="_blank">새 탭에서 열기</a>
<a href="mailto:email@example.com">이메일 보내기</a>
<a href="tel:010-1234-5678">전화 걸기</a>
```

### `<img>` ★ 2일차
이미지를 삽입 (빈 태그)
- **주요 속성**: `src`, `alt`, `width`, `height`
```html
<img src="image.jpg" alt="이미지 설명" width="300">
<img src="divider.png" alt="">  
```

### `<figure>`
독립적인 콘텐츠를 그룹화 (이미지, 다이어그램 등)
```html
<figure>
  <img src="photo.jpg" alt="사진">
  <figcaption>사진 설명</figcaption>
</figure>
```

### `<figcaption>`
figure 요소의 캡션

---

## 테이블

### `<table>` ★ 2일차
테이블을 정의
```html
<table>
  <thead>
    <tr>
      <th>이름</th>
      <th>나이</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>홍길동</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

### `<thead>` ★ 2일차
테이블의 헤더 그룹

### `<tbody>` ★ 2일차
테이블의 본문 그룹

### `<tfoot>`
테이블의 푸터 그룹

### `<tr>` ★ 2일차
테이블의 행 (Table Row)

### `<th>` ★ 2일차
테이블의 헤더 셀
- **주요 속성**: `colspan`, `rowspan`, `scope`
```html
<th colspan="2">병합된 헤더</th>
```

### `<td>` ★ 2일차
테이블의 데이터 셀
- **주요 속성**: `colspan`, `rowspan`
```html
<td rowspan="2">세로로 병합</td>
```

---

## 폼

### `<form>` ★ 2일차
사용자 입력을 받는 폼을 정의
- **주요 속성**: `action`, `method`, `enctype`
```html
<form action="/submit" method="POST">
  
</form>
```

### `<input>` ★ 2일차
다양한 입력 필드 (빈 태그)
- **주요 속성**: `type`, `name`, `value`, `placeholder`, `required`
- **type 종류**: text, password, email, number, tel, url, date, checkbox, radio, file, submit, button 등
```html
<input type="text" name="username" placeholder="이름 입력">
<input type="email" name="email" required>
<input type="checkbox" name="agree" value="yes">
<input type="radio" name="gender" value="male">
```

### `<textarea>`
여러 줄의 텍스트 입력
- **주요 속성**: `rows`, `cols`, `placeholder`
```html
<textarea rows="4" cols="50" placeholder="내용을 입력하세요"></textarea>
```

### `<button>` ★ 2일차
클릭 가능한 버튼
- **주요 속성**: `type` (submit, reset, button)
```html
<button type="submit">제출</button>
<button type="button">클릭</button>

```

### `<select>` ★ 2일차
드롭다운 목록
- **주요 속성**: `name`, `multiple`
```html
<select name="city">
  <option value="">선택하세요</option>
  <option value="seoul">서울</option>
  <option value="busan">부산</option>
</select>
```

### `<option>` ★ 2일차
select의 옵션 항목
- **주요 속성**: `value`, `selected`

### `<label>` ★ 2일차
입력 요소의 레이블
- **주요 속성**: `for` (연결할 input의 id)
```html
<label for="username">이름:</label>
<input type="text" id="username" name="username">
```

### `<fieldset>`
관련된 폼 요소들을 그룹화
```html
<fieldset>
  <legend>개인정보</legend>
  <input type="text" name="name">
</fieldset>
```

### `<legend>`
fieldset의 제목

---

## 시맨틱 요소

### `<header>` ★ 1일차
문서나 섹션의 헤더 영역
```html
<header>
  <h1>사이트 제목</h1>
  <nav>...</nav>
</header>
```

### `<nav>` ★ 1일차
네비게이션 링크 영역
```html
<nav>
  <ul>
    <li><a href="/">홈</a></li>
    <li><a href="/about">소개</a></li>
  </ul>
</nav>
```

### `<main>` ★ 1일차
문서의 주요 콘텐츠 (페이지당 하나만 사용)
```html
<main>
  <article>...</article>
</main>
```

### `<section>` ★ 1일차
문서의 섹션 (주제별 그룹)
```html
<section>
  <h2>섹션 제목</h2>
  <p>내용...</p>
</section>
```

### `<article>` ★ 1일차
독립적인 콘텐츠 (블로그 글, 뉴스 기사 등)
```html
<article>
  <h2>기사 제목</h2>
  <p>기사 내용...</p>
</article>
```

### `<aside>` ★ 5일차
사이드바나 부가 정보
```html
<aside>
  <h3>관련 링크</h3>
  <ul>...</ul>
</aside>
```

### `<time>` ★ 1일차 과제
날짜·시각 — 사람이 읽는 글자와 기계가 읽는 값을 함께 적는다
- **주요 속성**: `datetime`
```html
<time datetime="2026-09-07T10:35">2026-09-07 10:35</time>
```

### `<footer>` ★ 1일차
문서나 섹션의 푸터 영역
```html
<footer>
  <p>&copy; 2026 회사명. All rights reserved.</p>
</footer>
```

---

## 멀티미디어

### `<video>`
비디오를 삽입
- **주요 속성**: `src`, `controls`, `autoplay`, `loop`, `muted`, `width`, `height`
```html
<video src="video.mp4" controls width="640">
  브라우저가 비디오를 지원하지 않습니다.
</video>


<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
</video>
```

### `<audio>`
오디오를 삽입
- **주요 속성**: `src`, `controls`, `autoplay`, `loop`
```html
<audio src="audio.mp3" controls>
  브라우저가 오디오를 지원하지 않습니다.
</audio>
```

### `<source>`
video나 audio의 미디어 소스를 지정
- **주요 속성**: `src`, `type`

### `<iframe>`
다른 HTML 페이지를 삽입
- **주요 속성**: `src`, `width`, `height`, `title`(무엇을 담았는지 — 스크린 리더가 읽는다)
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" width="560" height="315" title="영상 제목"></iframe>

```

---

## 부록: 자주 사용하는 특수 문자 (HTML Entity)

| 표시 | HTML Entity | 설명 |
|------|-------------|------|
| < | `&lt;` | Less than |
| > | `&gt;` | Greater than |
| & | `&amp;` | Ampersand |
| " | `&quot;` | Quotation mark |
| ' | `&apos;` | Apostrophe |
| 공백 | `&nbsp;` | Non-breaking space |
| © | `&copy;` | Copyright |
| ® | `&reg;` | Registered |
| ™ | `&trade;` | Trademark |

---

## 추가 참고사항

### 블록 레벨 요소 vs 인라인 요소 ★ 4일차

**블록 레벨 요소**
- 새로운 줄에서 시작하고 전체 너비를 차지
- 예: `<div>`, `<p>`, `<h1>`, `<ul>`, `<section>`, `<header>` 등

**인라인 요소**
- 줄 바꿈 없이 내용만큼의 공간만 차지
- 예: `<span>`, `<a>`, `<strong>`, `<img>`, `<input>` 등

### 좋은 HTML 작성 습관

1. **시맨틱 태그 사용**: 의미에 맞는 태그를 사용 (`<div>` 대신 `<header>`, `<nav>`, `<main>` 등)
2. **들여쓰기와 가독성**: 코드를 읽기 쉽게 정리
3. **alt 속성**: 모든 이미지에 alt 속성 추가 (접근성)
4. **닫는 태그**: 모든 태그를 올바르게 닫기
5. **소문자 사용**: 태그와 속성은 소문자로 작성
6. **속성 값 따옴표**: 속성 값은 큰따옴표로 감싸기
