/**
 * 연습장 공용 편집기 — Monaco(VS Code 의 편집기). SQL · HTML/CSS 연습장이 함께 쓴다(이후 JS · React · Node 도).
 *
 *   MFEditor.create(host, { key, language, value, ariaLabel, autoCloseTags, onChange(value, key), onSubmit() })
 *     → Promise<편집기> — { kind: "monaco"|"textarea", open(key, value, language), get(key), set(key, value),
 *                          setAutoClose(bool), focus(), hasFocus(), dispose() }
 *
 * - Monaco 는 jsDelivr 에서 받는다(버전 고정 · 너무 커서 페이지에 못 넣는다). 한 번 받으면 브라우저에 저장되어
 *   다른 연습장으로 넘어가도 다시 받지 않는다(같은 주소).
 * - 🔴 못 받으면(인터넷 · 15초) · 휴대폰이면(Monaco 는 모바일을 지원하지 않는다) «평범한 입력칸»으로 연다 — 같은 모양의 API 라 채점은 그대로.
 * - 🔴 HTML 끝 태그 자동 닫기는 Monaco 기본 기능이 아니다(VS Code 의 HTML 확장 기능). 아래 closeTag 가 한다:
 *   `>` 를 쳐서 여는 태그가 끝나면 바로 뒤에 `</태그>` 를 넣고 커서는 그 사이에 둔다. 빈 요소(br · img · input …)는 안 닫는다.
 *   태그 사이에서 Enter 를 치면 들여쓰기는 Monaco 의 HTML 규칙(onEnterRules)이 맞춘다.
 * - 검사: verify-practice.js 가 실제 Chrome 에서 한 글자씩 쳐 보고 Enter 를 눌러 결과를 대조한다.
 */
(function () {
  "use strict";
  var VER = "0.52.2";
  var BASE = "https://cdn.jsdelivr.net/npm/monaco-editor@" + VER + "/min";
  var VOID = { area: 1, base: 1, br: 1, col: 1, embed: 1, hr: 1, img: 1, input: 1, link: 1, meta: 1, source: 1, track: 1, wbr: 1 };
  var loading = null;

  function mobile() {
    try { return matchMedia("(pointer: coarse)").matches && !matchMedia("(pointer: fine)").matches; } catch (e) { return false; }
  }
  function dark() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    try { return matchMedia("(prefers-color-scheme: dark)").matches; } catch (e) { return false; }
  }

  /** Monaco 를 한 번만 받는다. 못 받으면 null */
  function load() {
    if (loading) return loading;
    loading = new Promise(function (resolve) {
      if (window.MF_NO_MONACO || mobile()) { resolve(null); return; }
      var settled = false;
      var done = function (m) { if (settled) return; settled = true; clearTimeout(timer); resolve(m || null); };
      var timer = setTimeout(function () { done(null); }, 15000);
      /* 작업 스레드(worker)는 다른 출처(CDN)에서 바로 못 띄운다 — 같은 출처의 blob 이 CDN 의 것을 불러오게 한다 */
      window.MonacoEnvironment = {
        getWorkerUrl: function () {
          var src = "self.MonacoEnvironment={baseUrl:'" + BASE + "/'};importScripts('" + BASE + "/vs/base/worker/workerMain.js');";
          return URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
        },
      };
      var s = document.createElement("script");
      s.src = BASE + "/vs/loader.js";
      s.onerror = function () { done(null); };
      s.onload = function () {
        try {
          window.require.config({ paths: { vs: BASE + "/vs" }, "vs/nls": { availableLanguages: { "*": "ko" } } });
          window.require(["vs/editor/editor.main"], function () { done(window.monaco); }, function () { done(null); });
        } catch (e) { done(null); }
      };
      document.head.appendChild(s);
    });
    return loading;
  }

  function monacoEditor(monaco, host, o) {
    host.textContent = "";
    var ed = monaco.editor.create(host, {
      model: null,
      theme: dark() ? "vs-dark" : "vs",
      automaticLayout: true,
      minimap: { enabled: false },
      fontSize: 14,
      lineHeight: 21,
      tabSize: 2,
      insertSpaces: true,
      detectIndentation: false,
      fontFamily: '"JetBrains Mono", Consolas, "D2Coding", monospace',
      fontLigatures: false,   /* 합자 끔 — >= · === 가 한 글자로 합쳐 보이면 보고 칠 수 없다(Monaco 기본도 false 지만 못박아 둔다) */
      scrollBeyondLastLine: false,
      wordWrap: "on",
      lineNumbersMinChars: 3,
      padding: { top: 8, bottom: 8 },
      fixedOverflowWidgets: true,
      ariaLabel: o.ariaLabel || "코드 편집기",
    });
    var models = {}, cur = null, autoClose = o.autoCloseTags !== false, inner = false;

    /* `>` 로 여는 태그가 끝났으면 뒤에 닫는 태그를 넣는다 */
    function closeTag(e) {
      if (inner || !autoClose || e.isUndoing || e.isRedoing || e.isFlush) return;
      var model = ed.getModel();
      if (!model || model.getLanguageId() !== "html" || e.changes.length !== 1 || e.changes[0].text !== ">") return;
      var r = e.changes[0].range, line = r.startLineNumber, col = r.startColumn + 1;      // `>` 바로 뒤
      var before = model.getValueInRange({ startLineNumber: Math.max(1, line - 30), startColumn: 1, endLineNumber: line, endColumn: col });
      var m = /<([a-zA-Z][\w-]*)(?:\s(?:[^<>"']|"[^"]*"|'[^']*')*)?>$/.exec(before);
      if (!m || /\/>$/.test(m[0]) || VOID[m[1].toLowerCase()]) return;
      var after = model.getLineContent(line).slice(col - 1);
      if (after.indexOf("</" + m[1]) === 0) return;                                      // 이미 닫혀 있다
      var close = "</" + m[1] + ">";
      setTimeout(function () {
        if (ed.getModel() !== model) return;
        inner = true;
        try {
          ed.executeEdits("mf-close-tag", [{ range: new monaco.Range(line, col, line, col), text: close, forceMoveMarkers: false }],
            [new monaco.Selection(line, col, line, col)]);
        } finally { inner = false; }
      }, 0);
    }
    ed.onDidChangeModelContent(function (e) {
      closeTag(e);
      if (o.onChange) o.onChange(ed.getValue(), cur);
    });
    ed.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, function () { if (o.onSubmit) o.onSubmit(); });

    var mq = null, onTheme = function () { monaco.editor.setTheme(dark() ? "vs-dark" : "vs"); };
    try { mq = matchMedia("(prefers-color-scheme: dark)"); mq.addEventListener("change", onTheme); } catch (e) { mq = null; }

    var api = {
      kind: "monaco",
      open: function (key, value, language) {
        if (!models[key]) {
          models[key] = monaco.editor.createModel(value || "", language || o.language || "plaintext");
          models[key].setEOL(monaco.editor.EndOfLineSequence.LF);   // 🔴 Windows 에서는 기본이 \r\n — 저장 · 채점 · 백업이 \n 이어야 한다
        }
        cur = key;
        ed.setModel(models[key]);
      },
      get: function (key) { var m = models[key === undefined ? cur : key]; return m ? m.getValue() : ""; },
      set: function (key, value) {
        var m = models[key === undefined ? cur : key];
        if (!m) return;
        inner = true;
        try { m.pushEditOperations([], [{ range: m.getFullModelRange(), text: value || "" }], function () { return null; }); }
        finally { inner = false; }
      },
      setAutoClose: function (b) { autoClose = !!b; },
      focus: function () { ed.focus(); },
      hasFocus: function () { return ed.hasTextFocus(); },
      dispose: function () {
        if (mq) mq.removeEventListener("change", onTheme);
        ed.dispose();
        Object.keys(models).forEach(function (k) { models[k].dispose(); });
        models = {};
      },
      raw: ed,
    };
    api.open(o.key || "main", o.value, o.language);
    return api;
  }

  /* Monaco 를 못 띄울 때 — 평범한 입력칸(Tab 은 두 칸 · Ctrl+Enter 는 제출) */
  function textareaEditor(host, o) {
    host.textContent = "";
    var ta = document.createElement("textarea");
    ta.className = "mf-ta";
    ta.spellcheck = false;
    ta.setAttribute("autocomplete", "off");
    ta.setAttribute("autocapitalize", "off");
    ta.setAttribute("aria-label", o.ariaLabel || "코드 입력칸");
    ta.placeholder = "여기에 작성하세요";
    host.appendChild(ta);
    var values = {}, cur = null;
    ta.addEventListener("input", function () { values[cur] = ta.value; if (o.onChange) o.onChange(ta.value, cur); });
    ta.addEventListener("keydown", function (e) {
      if (e.key === "Tab" && !e.shiftKey) { e.preventDefault(); var s = ta.selectionStart; ta.setRangeText("  ", s, ta.selectionEnd, "end"); ta.dispatchEvent(new Event("input")); }
      else if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); if (o.onSubmit) o.onSubmit(); }
    });
    var api = {
      kind: "textarea",
      open: function (key, value) { if (!(key in values)) values[key] = value || ""; cur = key; ta.value = values[key]; },
      get: function (key) { return values[key === undefined ? cur : key] || ""; },
      set: function (key, value) { key = key === undefined ? cur : key; values[key] = value || ""; if (key === cur) ta.value = values[key]; },
      setAutoClose: function () {},
      focus: function () { ta.focus(); },
      hasFocus: function () { return document.activeElement === ta; },
      dispose: function () { ta.remove(); },
    };
    api.open(o.key || "main", o.value, o.language);
    return api;
  }

  /** host 가 그 사이 화면에서 사라졌으면(다른 문제로 넘어감) null */
  function create(host, o) {
    o = o || {};
    host.innerHTML = '<div class="mf-loading">편집기를 불러오는 중…</div>';
    return load().then(function (monaco) {
      if (!host.isConnected) return null;
      if (monaco) { try { return monacoEditor(monaco, host, o); } catch (e) { /* 아래로 */ } }
      return textareaEditor(host, o);
    });
  }

  window.MFEditor = { create: create, load: load, VERSION: VER };
})();
