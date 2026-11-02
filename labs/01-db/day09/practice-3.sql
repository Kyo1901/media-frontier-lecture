-- ============================================================
--  9일차 실습 ③ — JSON
-- ============================================================
--
--  🔴 키 이름은 항상 큰따옴표로 감싸세요.  $."출처"  ← 이렇게.
--     감싸지 않으면 함수에 따라 오류가 납니다.


-- [1] 표를 만들고 채웁니다. **아래 문장을 그대로 실행하세요.**
--     (직접 짜는 문제가 아닙니다 — 오늘의 소재를 만드는 것뿐입니다)

CREATE TABLE article_meta (
    article_id INT PRIMARY KEY,
    meta       JSON NOT NULL
);

INSERT INTO article_meta (article_id, meta)
SELECT id,
       JSON_MERGE_PATCH(
         JSON_OBJECT(
           '출처', CASE id % 3 WHEN 0 THEN '자체' WHEN 1 THEN '제휴' ELSE '통신사' END,
           '사진', id % 13,
           '태그', JSON_ARRAY(section, SUBSTRING_INDEX(title, ' ', 1))
         ),
         CASE section
           WHEN '스포츠' THEN JSON_OBJECT('경기', JSON_OBJECT('홈', '서울', '원정', '부산'))
           WHEN '경제'   THEN JSON_OBJECT('지표', JSON_OBJECT('이름', '코스피',
                                          '변동률', ROUND((id % 700) / 100 - 3.5, 2)))
           ELSE JSON_OBJECT()
         END)
FROM articles;


-- [2] 잘 들어갔는지 눈으로 보세요. 세 줄이면 충분합니다.
--     힌트: JSON_PRETTY(meta) 로 보면 읽기 좋습니다.
--     🔴 1번(정치)·2번(경제)·6번(스포츠) 을 보면 모양이 다릅니다.




-- [3] 사진이 **3장 이상**인 기사가 몇 건입니까?
--     🔴 함정이 있습니다. ->> 로 꺼낸 값은 **글자**입니다.
--        글자로 비교하면 '10' < '3' 이라 10·11·12 가 통째로 빠집니다.
--        🔴 CAST 를 쓴 답과 안 쓴 답을 **둘 다** 구해서 몇 건 차이인지 적으세요.
--        CAST 씀: ___ 건    안 씀: ___ 건




-- [4] `태그` 배열에 **자기 섹션 이름**이 들어 있는 기사는 몇 건입니까?
--     힌트: JSON_CONTAINS(meta->'$."태그"', JSON_QUOTE(section))
--     🔴 여기서는 -> 를 씁니다(->> 가 아닙니다). 배열을 JSON 인 채로 넘겨야 합니다.
--     전부일까요? 먼저 예상해 보세요.  예상: ___ 건




-- ★ [5] 어제와 이어지는 문항입니다.
--     ① 먼저 EXPLAIN 을 떠보세요.
--          EXPLAIN SELECT COUNT(*) FROM article_meta WHERE meta->>'$."출처"' = '자체';
--        type 이 무엇입니까?  ___
--
--     ② 출처를 생성 열로 빼고 인덱스를 거세요.
--          ALTER TABLE article_meta
--            ADD COLUMN 출처 VARCHAR(10) AS (meta->>'$."출처"') STORED;
--          CREATE INDEX ...
--
--     ③ ①과 **똑같은 EXPLAIN** 을 다시 떠보세요. type 이 바뀌었습니까?
--        답:




-- ★★ 더 해볼 사람에게
--     경제 기사의 `변동률` 이 0 보다 큰 기사는 몇 건입니까?
--     중첩된 값을 꺼내야 합니다 — $."지표"."변동률"
