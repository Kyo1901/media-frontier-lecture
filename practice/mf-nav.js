/**
 * 연습장 공용 머리 — 「← 강의 자료 처음으로」 링크와 «다른 연습장으로 가기» 드롭다운.
 *
 * 풀이 페이지의 머리에 이것만 두면 된다:
 *   <a class="home" href="../../index.html">← 강의 자료 처음으로</a>
 *   <select id="setPick" class="set-pick" aria-label="다른 연습장으로 가기"><option>지금 연습장 이름</option></select>
 *   <script src="../mf-sets.js"></script><script src="../mf-nav.js"></script>
 *
 * - 목록(window.MF_SETS)은 🔴 publish.js 가 배포할 때 만든다(practice/mf-sets.js) — «공개된» 연습장만 들어간다.
 *   저장소에는 없으므로 로컬에서 열면 드롭다운에 지금 연습장 하나만 보인다(정상).
 * - 지금 연습장은 주소에서 안다: practice/<과목>/<세트>.html → "<과목>/<세트>"
 */
(function () {
  "use strict";
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function init() {
    var sel = document.getElementById("setPick");
    if (!sel) return;
    var parts = decodeURIComponent(location.pathname).split("/");
    var cur = parts.slice(-2).join("/").replace(/\.html$/, "");
    var sets = (window.MF_SETS || []).slice();
    if (!sets.some(function (s) { return s.id === cur; })) {
      sets.unshift({ id: cur, title: (sel.options[0] && sel.options[0].text) || document.title, subj: "", n: 0 });
    }
    sel.innerHTML = sets.map(function (s) {
      var label = s.title + (s.n ? " · " + s.n + "문제" : "");
      return '<option value="' + esc(s.id) + '"' + (s.id === cur ? " selected" : "") + ">" + esc(label) + "</option>";
    }).join("");
    /* 🔴 폭은 «재서» 준다 — 브라우저에 맡기면 제목 끝 글자가 잘렸다(2026-11-24 실측: 칸 234px · 글자 211px + 여백 30px).
       웹 글꼴(IBM Plex)이 늦게 오면 그때 한 번 더 잰다 */
    var fit = function () {
      try {
        var cs = getComputedStyle(sel), c = document.createElement("canvas").getContext("2d");
        c.font = cs.fontWeight + " " + cs.fontSize + " " + cs.fontFamily;
        var w = c.measureText(sel.selectedOptions[0] ? sel.selectedOptions[0].text : "").width;
        sel.style.width = Math.ceil(w + parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight) + parseFloat(cs.borderLeftWidth) * 2 + 4) + "px";
      } catch (e) { /* 그냥 둔다 */ }
    };
    fit();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    sel.disabled = sets.length < 2;
    sel.title = sets.length < 2 ? "다른 연습장이 아직 없습니다" : "다른 연습장으로 가기";
    sel.addEventListener("change", function () {
      if (sel.value === cur) return;
      /* 이 페이지는 practice/<과목>/ 안에 있다 → ../<과목>/<세트>.html */
      location.href = "../" + sel.value.split("/").map(encodeURIComponent).join("/") + ".html";
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
