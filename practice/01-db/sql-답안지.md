# SQL 연습 답안지 (해설 포함)

> 총 **110문제**의 정답 쿼리, 해설, 실행 결과입니다. 문제를 먼저 풀어 본 뒤 확인하세요.  
> 같은 결과를 내는 다른 쿼리도 정답입니다. 채점은 **결과 값** 기준이며(컬럼명은 무관), 정렬을 요구한 문제만 행 순서까지 비교합니다.

## 빠른 찾기

- **초급**: 1~40번
- **중급**: 41~90번
- **고급**: 91~110번

---

## 초급

### 문제 1. SELECT 기본

**문제**  
`departments` 테이블의 모든 컬럼, 모든 행을 조회하시오.

**정답**

```sql
SELECT * FROM departments;
```

**해설**

`*`는 모든 컬럼을 의미합니다. 실무에서는 필요한 컬럼만 명시하는 것이 좋지만, 테이블 구조를 처음 확인할 때는 `SELECT *`가 편리합니다.

**실행 결과** (6행)

| dept_id | dept_name | location |
|---|---|---|
| 1 | 개발팀 | 서울 |
| 2 | 영업팀 | 부산 |
| 3 | 인사팀 | 서울 |
| 4 | 마케팅팀 | 대전 |
| 5 | 기획팀 | 서울 |
| 6 | 법무팀 | 부산 |

---

### 문제 2. 컬럼 선택

**문제**  
`employees` 테이블에서 이름, 직책, 급여만 조회하시오.  
(컬럼 순서: emp_name, job_title, salary)

**정답**

```sql
SELECT emp_name, job_title, salary FROM employees;
```

**해설**

SELECT 뒤에 컬럼을 쉼표로 나열하면 해당 컬럼만, 나열한 순서대로 조회됩니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_name | job_title | salary |
|---|---|---|
| 김대표 | 대표이사 | 12000000 |
| 이개발 | 개발팀장 | 8500000 |
| 박서버 | 선임개발자 | 6500000 |
| 최프론 | 개발자 | 5200000 |
| 정백엔 | 개발자 | 5000000 |
| 한신입 | 사원 | 3800000 |
| 오영업 | 영업팀장 | 7800000 |
| 서영업 | 대리 | 4800000 |

---

### 문제 3. 별칭(AS)

**문제**  
`customers` 테이블에서 name은 `고객명`, city는 `도시`라는 별칭으로 조회하시오.

**정답**

```sql
SELECT name AS 고객명, city AS 도시 FROM customers;
```

**해설**

`AS`로 결과 컬럼에 별칭을 붙입니다. `AS`는 생략할 수 있으며, 공백이 포함된 별칭은 따옴표로 감쌉니다.

**실행 결과** (총 15행 중 8행 표시)

| 고객명 | 도시 |
|---|---|
| 김민수 | 서울 |
| 이서연 | 부산 |
| 박지훈 | 서울 |
| 최유나 | 대구 |
| 정우진 | 인천 |
| 한소희 | 서울 |
| 오태양 | 광주 |
| 서지민 | 부산 |

---

### 문제 4. DISTINCT

**문제**  
`products` 테이블에서 중복 없이 카테고리 목록을 조회하시오.  
(컬럼: category)

**정답**

```sql
SELECT DISTINCT category FROM products;
```

**해설**

`DISTINCT`는 SELECT 결과에서 중복된 행을 제거합니다. 여러 컬럼에 적용하면 컬럼 조합이 같은 행이 중복으로 처리됩니다.

**실행 결과** (4행)

| category |
|---|
| 전자기기 |
| 액세서리 |
| 도서 |
| 가구 |

---

### 문제 5. WHERE 비교

**문제**  
급여가 5,000,000 이상인 직원의 이름과 급여를 조회하시오.  
(컬럼: emp_name, salary)

**정답**

```sql
SELECT emp_name, salary FROM employees WHERE salary >= 5000000;
```

**해설**

WHERE는 행을 필터링합니다. 비교 연산자는 `=, <>(또는 !=), <, <=, >, >=`를 사용합니다.

**실행 결과** (총 12행 중 8행 표시)

| emp_name | salary |
|---|---|
| 김대표 | 12000000 |
| 이개발 | 8500000 |
| 박서버 | 6500000 |
| 최프론 | 5200000 |
| 정백엔 | 5000000 |
| 오영업 | 7800000 |
| 임인사 | 7200000 |
| 장마케 | 7500000 |

---

### 문제 6. WHERE 동등 비교

**문제**  
부서번호(dept_id)가 1인 직원의 이름과 직책을 조회하시오.  
(컬럼: emp_name, job_title)

**정답**

```sql
SELECT emp_name, job_title FROM employees WHERE dept_id = 1;
```

**해설**

SQL의 동등 비교는 `=` 하나입니다(`==` 아님). 문자열 값은 작은따옴표로 감싸지만 숫자는 그대로 씁니다.

**실행 결과** (6행)

| emp_name | job_title |
|---|---|
| 이개발 | 개발팀장 |
| 박서버 | 선임개발자 |
| 최프론 | 개발자 |
| 정백엔 | 개발자 |
| 한신입 | 사원 |
| 홍개발 | 개발자 |

---

### 문제 7. AND

**문제**  
서울에 사는 고객 중 등급이 `BRONZE`인 고객의 이름을 조회하시오.  
(컬럼: name)

**정답**

```sql
SELECT name FROM customers WHERE city = '서울' AND grade = 'BRONZE';
```

**해설**

`AND`는 두 조건을 모두 만족하는 행만 남깁니다. 문자열 리터럴은 작은따옴표를 사용합니다.

**실행 결과** (3행)

| name |
|---|
| 박지훈 |
| 장민재 |
| 신예린 |

---

### 문제 8. OR

**문제**  
부산 또는 대구에 사는 고객의 이름과 도시를 조회하시오.  
(컬럼: name, city)

**정답**

```sql
SELECT name, city FROM customers WHERE city = '부산' OR city = '대구';
```

**해설**

`OR`는 둘 중 하나라도 만족하면 포함됩니다. AND와 함께 쓸 때는 AND가 먼저 계산되므로 괄호로 우선순위를 명확히 하세요.

**실행 결과** (5행)

| name | city |
|---|---|
| 이서연 | 부산 |
| 최유나 | 대구 |
| 서지민 | 부산 |
| 임도현 | 대구 |
| 배수빈 | 부산 |

---

### 문제 9. IN

**문제**  
등급이 `GOLD` 또는 `VIP`인 고객의 이름과 등급을 `IN`을 사용해 조회하시오.  
(컬럼: name, grade)

**정답**

```sql
SELECT name, grade FROM customers WHERE grade IN ('GOLD', 'VIP');
```

**해설**

`IN (...)`은 여러 개의 OR 비교를 간결하게 표현합니다. `col = a OR col = b`와 같은 의미입니다.

**실행 결과** (5행)

| name | grade |
|---|---|
| 김민수 | GOLD |
| 최유나 | VIP |
| 서지민 | GOLD |
| 윤서아 | VIP |
| 배수빈 | GOLD |

---

### 문제 10. BETWEEN

**문제**  
가격이 30,000원 이상 60,000원 이하인 상품의 이름과 가격을 조회하시오.  
(컬럼: product_name, price)

**정답**

```sql
SELECT product_name, price FROM products WHERE price BETWEEN 30000 AND 60000;
```

**해설**

`BETWEEN a AND b`는 양 끝 값을 **포함**하는 범위 조건입니다. `price >= 30000 AND price <= 60000`과 같습니다.

**실행 결과** (7행)

| product_name | price |
|---|---|
| 노트북 거치대 | 35000 |
| 모니터 암 | 59000 |
| 웹캠 | 49000 |
| 파이썬 완벽 가이드 | 32000 |
| 자바 프로그래밍 | 35000 |
| 알고리즘 문제집 | 30000 |
| LED 스탠드 | 39000 |

---

### 문제 11. 부정 비교

**문제**  
카테고리가 `도서`가 아닌 상품의 이름과 카테고리를 조회하시오.  
(컬럼: product_name, category)

**정답**

```sql
SELECT product_name, category FROM products WHERE category <> '도서';
```

**해설**

`<>`(또는 `!=`)는 '같지 않다'를 의미합니다. `NOT category = '도서'`로도 쓸 수 있습니다.

**실행 결과** (총 11행 중 8행 표시)

| product_name | category |
|---|---|
| 무선 마우스 | 전자기기 |
| 기계식 키보드 | 전자기기 |
| 27인치 모니터 | 전자기기 |
| USB 허브 | 전자기기 |
| 노트북 거치대 | 액세서리 |
| 모니터 암 | 액세서리 |
| 마우스 패드 | 액세서리 |
| 웹캠 | 전자기기 |

---

### 문제 12. LIKE (시작 문자열)

**문제**  
이메일이 `s`로 시작하는 고객의 이름과 이메일을 조회하시오.  
(컬럼: name, email)

**정답**

```sql
SELECT name, email FROM customers WHERE email LIKE 's%';
```

**해설**

`LIKE`의 `%`는 0개 이상의 임의 문자, `_`는 정확히 1개의 문자를 의미합니다. `'s%'`는 's'로 시작하는 모든 문자열입니다. NULL 값은 비교 결과가 NULL이므로 자동으로 제외됩니다.

**실행 결과** (4행)

| name | email |
|---|---|
| 이서연 | seoyeon@example.com |
| 한소희 | sohee@example.com |
| 윤서아 | seoa@example.com |
| 배수빈 | subin@example.com |

---

### 문제 13. LIKE (끝 문자열)

**문제**  
직책(job_title)이 `팀장`으로 끝나는 직원의 이름과 직책을 조회하시오.  
(컬럼: emp_name, job_title)

**정답**

```sql
SELECT emp_name, job_title FROM employees WHERE job_title LIKE '%팀장';
```

**해설**

`'%팀장'`은 앞에 무엇이 오든 '팀장'으로 끝나는 문자열입니다. 앞에 `%`가 있는 LIKE는 일반적으로 인덱스를 활용하지 못해 대용량에서는 느릴 수 있습니다.

**실행 결과** (5행)

| emp_name | job_title |
|---|---|
| 이개발 | 개발팀장 |
| 오영업 | 영업팀장 |
| 임인사 | 인사팀장 |
| 장마케 | 마케팅팀장 |
| 신기획 | 기획팀장 |

---

### 문제 14. IS NULL

**문제**  
부서가 배정되지 않은(dept_id가 NULL인) 직원의 이름을 조회하시오.  
(컬럼: emp_name)

**정답**

```sql
SELECT emp_name FROM employees WHERE dept_id IS NULL;
```

**해설**

NULL은 '값이 없음'을 의미하므로 `= NULL`로는 비교할 수 없고(결과가 항상 NULL), 반드시 `IS NULL` / `IS NOT NULL`을 사용합니다.

**실행 결과** (2행)

| emp_name |
|---|
| 김대표 |
| 송연구 |

---

### 문제 15. IS NOT NULL

**문제**  
이메일이 등록된(NULL이 아닌) 고객의 이름과 이메일을 조회하시오.  
(컬럼: name, email)

**정답**

```sql
SELECT name, email FROM customers WHERE email IS NOT NULL;
```

**해설**

`IS NOT NULL`은 값이 존재하는 행만 남깁니다. `email <> NULL` 같은 표현은 항상 거짓/NULL이 되어 결과가 비어 버리니 주의하세요.

**실행 결과** (총 12행 중 8행 표시)

| name | email |
|---|---|
| 김민수 | minsu@example.com |
| 이서연 | seoyeon@example.com |
| 최유나 | yuna@example.com |
| 정우진 | woojin@example.com |
| 한소희 | sohee@example.com |
| 서지민 | jimin@example.com |
| 강하늘 | haneul@example.com |
| 윤서아 | seoa@example.com |

---

### 문제 16. ORDER BY (오름차순)

**문제**  
상품을 가격이 낮은 순으로 조회하시오. 가격이 같으면 product_id 오름차순으로 정렬합니다.  
(컬럼: product_name, price)

**정답**

```sql
SELECT product_name, price FROM products ORDER BY price ASC, product_id ASC;
```

**해설**

`ORDER BY`의 기본은 오름차순(ASC)입니다. 쉼표로 여러 기준을 나열하면 앞 기준이 같을 때 다음 기준을 적용합니다.

**실행 결과** (총 15행 중 8행 표시)

| product_name | price |
|---|---|
| 마우스 패드 | 9000 |
| USB 허브 | 19000 |
| 무선 마우스 | 25000 |
| SQL 입문서 | 28000 |
| 알고리즘 문제집 | 30000 |
| 파이썬 완벽 가이드 | 32000 |
| 노트북 거치대 | 35000 |
| 자바 프로그래밍 | 35000 |

---

### 문제 17. ORDER BY (내림차순)

**문제**  
직원을 급여가 높은 순으로 조회하시오. 급여가 같으면 emp_id 오름차순입니다.  
(컬럼: emp_name, salary)

**정답**

```sql
SELECT emp_name, salary FROM employees ORDER BY salary DESC, emp_id ASC;
```

**해설**

`DESC`는 내림차순입니다. 정렬 기준이 동점일 때 결과 순서는 DB가 보장하지 않으므로 항상 보조 정렬 기준(tie-breaker)을 두는 습관이 좋습니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_name | salary |
|---|---|
| 김대표 | 12000000 |
| 이개발 | 8500000 |
| 오영업 | 7800000 |
| 신기획 | 7600000 |
| 장마케 | 7500000 |
| 임인사 | 7200000 |
| 박서버 | 6500000 |
| 권기획 | 5800000 |

---

### 문제 18. 다중 정렬

**문제**  
직원을 부서번호(dept_id) 오름차순, 같은 부서 안에서는 급여 내림차순, 급여도 같으면 emp_id 오름차순으로 조회하시오.  
(컬럼: emp_name, dept_id, salary)

**정답**

```sql
SELECT emp_name, dept_id, salary FROM employees
ORDER BY dept_id ASC, salary DESC, emp_id ASC;
```

**해설**

정렬 기준마다 ASC/DESC를 따로 지정할 수 있습니다. SQLite에서 NULL은 오름차순일 때 가장 먼저 나옵니다(DB마다 다름).

**실행 결과** (총 20행 중 8행 표시)

| emp_name | dept_id | salary |
|---|---|---|
| 김대표 | NULL | 12000000 |
| 송연구 | NULL | 5500000 |
| 이개발 | 1 | 8500000 |
| 박서버 | 1 | 6500000 |
| 최프론 | 1 | 5200000 |
| 홍개발 | 1 | 5200000 |
| 정백엔 | 1 | 5000000 |
| 한신입 | 1 | 3800000 |

---

### 문제 19. LIMIT

**문제**  
급여가 가장 높은 직원 3명의 이름과 급여를 조회하시오.  
(컬럼: emp_name, salary)

**정답**

```sql
SELECT emp_name, salary FROM employees ORDER BY salary DESC LIMIT 3;
```

**해설**

`LIMIT n`은 결과 행 수를 n개로 제한합니다. 'Top-N' 조회는 **정렬 후 LIMIT** 조합으로 구현합니다. (MySQL/SQLite의 LIMIT, SQL Server는 TOP, Oracle은 FETCH FIRST)

**실행 결과** (3행)

| emp_name | salary |
|---|---|
| 김대표 | 12000000 |
| 이개발 | 8500000 |
| 오영업 | 7800000 |

---

### 문제 20. LIMIT OFFSET

**문제**  
가격이 높은 순으로 정렬했을 때 4위~6위 상품의 이름과 가격을 조회하시오.  
(컬럼: product_name, price)

**정답**

```sql
SELECT product_name, price FROM products ORDER BY price DESC LIMIT 3 OFFSET 3;
```

**해설**

`OFFSET n`은 앞의 n개 행을 건너뜁니다. 4위부터 3개를 가져오려면 `LIMIT 3 OFFSET 3`입니다. 페이징 구현의 기본 패턴입니다: `LIMIT 페이지크기 OFFSET (페이지-1)*페이지크기`.

**실행 결과** (3행)

| product_name | price |
|---|---|
| 기계식 키보드 | 89000 |
| 모니터 암 | 59000 |
| 웹캠 | 49000 |

---

### 문제 21. 산술 연산

**문제**  
직원의 이름과 연봉(월급 × 12)을 조회하시오. 연봉 컬럼의 별칭은 `annual_salary`입니다.  
(컬럼: emp_name, annual_salary)

**정답**

```sql
SELECT emp_name, salary * 12 AS annual_salary FROM employees;
```

**해설**

SELECT 절에서 컬럼끼리, 또는 컬럼과 상수 간 산술(`+ - * /`)이 가능합니다. 계산 결과 컬럼에는 별칭을 붙여 의미를 분명히 합니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_name | annual_salary |
|---|---|
| 김대표 | 144000000 |
| 이개발 | 102000000 |
| 박서버 | 78000000 |
| 최프론 | 62400000 |
| 정백엔 | 60000000 |
| 한신입 | 45600000 |
| 오영업 | 93600000 |
| 서영업 | 57600000 |

---

### 문제 22. 계산 컬럼

**문제**  
상품별 재고 금액(price × stock)을 구하시오. 별칭은 `stock_value`입니다.  
(컬럼: product_name, stock_value)

**정답**

```sql
SELECT product_name, price * stock AS stock_value FROM products;
```

**해설**

행 단위로 계산되는 표현식입니다. 재고가 0인 상품은 재고 금액이 0이 됩니다.

**실행 결과** (총 15행 중 8행 표시)

| product_name | stock_value |
|---|---|
| 무선 마우스 | 3000000 |
| 기계식 키보드 | 4005000 |
| 27인치 모니터 | 5780000 |
| USB 허브 | 3800000 |
| 노트북 거치대 | 2800000 |
| 모니터 암 | 0 |
| 마우스 패드 | 2700000 |
| 웹캠 | 1715000 |

---

### 문제 23. 문자열 연결

**문제**  
직원 이름과 직책을 `이름(직책)` 형태로 합쳐 `title` 컬럼으로 조회하시오. 예: `이개발(개발팀장)`  
(컬럼: title)

**정답**

```sql
SELECT emp_name || '(' || job_title || ')' AS title FROM employees;
```

**해설**

SQLite·표준 SQL에서 문자열 연결은 `||` 연산자입니다. MySQL은 `CONCAT()`을 사용합니다.

**실행 결과** (총 20행 중 8행 표시)

| title |
|---|
| 김대표(대표이사) |
| 이개발(개발팀장) |
| 박서버(선임개발자) |
| 최프론(개발자) |
| 정백엔(개발자) |
| 한신입(사원) |
| 오영업(영업팀장) |
| 서영업(대리) |

---

### 문제 24. 날짜 비교

**문제**  
2022년 1월 1일 이후에 입사한 직원의 이름과 입사일을 조회하시오.  
(컬럼: emp_name, hire_date)

**정답**

```sql
SELECT emp_name, hire_date FROM employees WHERE hire_date >= '2022-01-01';
```

**해설**

날짜를 `YYYY-MM-DD` 형식의 문자열로 저장하면 문자열 비교가 곧 날짜 비교가 됩니다. 이 형식을 지키는 것이 중요합니다.

**실행 결과** (5행)

| emp_name | hire_date |
|---|---|
| 한신입 | 2023-03-02 |
| 강영업 | 2022-06-13 |
| 조인사 | 2022-01-17 |
| 배마케 | 2023-07-10 |
| 황기획 | 2024-01-08 |

---

### 문제 25. COUNT(*)

**문제**  
전체 직원 수를 구하시오. 별칭은 `cnt`입니다.  
(컬럼: cnt)

**정답**

```sql
SELECT COUNT(*) AS cnt FROM employees;
```

**해설**

`COUNT(*)`는 NULL 여부와 상관없이 행의 개수를 셉니다. 집계 함수만 쓰면 결과는 항상 한 행입니다.

**실행 결과** (1행)

| cnt |
|---|
| 20 |

---

### 문제 26. COUNT(컬럼)

**문제**  
이메일이 등록된 고객 수를 구하시오. 별칭은 `cnt`입니다.  
(컬럼: cnt)

**정답**

```sql
SELECT COUNT(email) AS cnt FROM customers;
```

**해설**

`COUNT(컬럼)`은 **NULL이 아닌 값만** 셉니다. 전체 15명 중 이메일이 NULL인 3명이 제외되어 12가 됩니다. `COUNT(*)`와의 차이를 기억하세요.

**실행 결과** (1행)

| cnt |
|---|
| 12 |

---

### 문제 27. SUM

**문제**  
전체 상품의 재고 수량 합계를 구하시오. 별칭은 `total_stock`입니다.  
(컬럼: total_stock)

**정답**

```sql
SELECT SUM(stock) AS total_stock FROM products;
```

**해설**

`SUM`은 NULL을 제외한 값들의 합계를 구합니다. 대상 행이 없으면 0이 아니라 NULL을 반환한다는 점도 알아 두세요.

**실행 결과** (1행)

| total_stock |
|---|
| 1048 |

---

### 문제 28. AVG

**문제**  
직원 평균 급여를 정수로 반올림하여 구하시오. 별칭은 `avg_salary`입니다.  
(컬럼: avg_salary)

**정답**

```sql
SELECT ROUND(AVG(salary)) AS avg_salary FROM employees;
```

**해설**

`AVG`는 평균, `ROUND(x, n)`은 소수 n자리 반올림(n 생략 시 0)입니다. AVG도 NULL은 분모에서 제외합니다.

**실행 결과** (1행)

| avg_salary |
|---|
| 5835000.0 |

---

### 문제 29. MIN / MAX

**문제**  
가장 싼 상품 가격과 가장 비싼 상품 가격을 한 번에 구하시오. 별칭은 `min_price`, `max_price`입니다.  
(컬럼: min_price, max_price)

**정답**

```sql
SELECT MIN(price) AS min_price, MAX(price) AS max_price FROM products;
```

**해설**

여러 집계 함수를 한 SELECT에서 함께 사용할 수 있습니다. MIN/MAX는 숫자뿐 아니라 문자열·날짜에도 사용할 수 있습니다.

**실행 결과** (1행)

| min_price | max_price |
|---|---|
| 9000 | 289000 |

---

### 문제 30. WHERE + 집계

**문제**  
개발팀(dept_id = 1) 직원의 평균 급여를 정수로 반올림하여 구하시오. 별칭은 `avg_salary`입니다.  
(컬럼: avg_salary)

**정답**

```sql
SELECT ROUND(AVG(salary)) AS avg_salary FROM employees WHERE dept_id = 1;
```

**해설**

WHERE는 집계 **이전**에 행을 걸러냅니다. 따라서 개발팀 직원만 대상으로 평균이 계산됩니다.

**실행 결과** (1행)

| avg_salary |
|---|
| 5700000.0 |

---

### 문제 31. COUNT(DISTINCT)

**문제**  
고객들이 거주하는 도시의 개수(중복 제외)를 구하시오. 별칭은 `city_cnt`입니다.  
(컬럼: city_cnt)

**정답**

```sql
SELECT COUNT(DISTINCT city) AS city_cnt FROM customers;
```

**해설**

`COUNT(DISTINCT 컬럼)`은 중복을 제거한 뒤 개수를 셉니다. 서울·부산·대구·인천·광주·대전 6개입니다.

**실행 결과** (1행)

| city_cnt |
|---|
| 6 |

---

### 문제 32. GROUP BY

**문제**  
부서(dept_id)별 직원 수를 구하시오. 직원 수의 별칭은 `cnt`입니다. 부서가 없는(NULL) 직원도 하나의 그룹으로 포함됩니다.  
(컬럼: dept_id, cnt)

**정답**

```sql
SELECT dept_id, COUNT(*) AS cnt FROM employees GROUP BY dept_id;
```

**해설**

`GROUP BY`는 같은 값을 가진 행들을 묶어 그룹마다 집계합니다. SELECT에는 GROUP BY 컬럼과 집계 함수만 올 수 있습니다. NULL 값끼리도 하나의 그룹이 됩니다.

**실행 결과** (6행)

| dept_id | cnt |
|---|---|
| NULL | 2 |
| 1 | 6 |
| 2 | 4 |
| 3 | 2 |
| 4 | 3 |
| 5 | 3 |

---

### 문제 33. GROUP BY 다중 집계

**문제**  
상품 카테고리별 상품 수와 평균 가격(정수 반올림)을 구하시오. 별칭은 `cnt`, `avg_price`입니다.  
(컬럼: category, cnt, avg_price)

**정답**

```sql
SELECT category, COUNT(*) AS cnt, ROUND(AVG(price)) AS avg_price
FROM products
GROUP BY category;
```

**해설**

그룹마다 여러 집계 함수를 동시에 계산할 수 있습니다.

**실행 결과** (4행)

| category | cnt | avg_price |
|---|---|---|
| 가구 | 3 | 162333.0 |
| 도서 | 4 | 31250.0 |
| 액세서리 | 3 | 34333.0 |
| 전자기기 | 5 | 94200.0 |

---

### 문제 34. GROUP BY 등급

**문제**  
고객 등급(grade)별 고객 수를 구하시오. 별칭은 `cnt`입니다.  
(컬럼: grade, cnt)

**정답**

```sql
SELECT grade, COUNT(*) AS cnt FROM customers GROUP BY grade;
```

**해설**

범주형 컬럼으로 그룹을 만드는 가장 기본적인 집계 패턴입니다.

**실행 결과** (4행)

| grade | cnt |
|---|---|
| BRONZE | 6 |
| GOLD | 3 |
| SILVER | 4 |
| VIP | 2 |

---

### 문제 35. HAVING

**문제**  
직원이 3명 이상인 부서의 부서번호와 직원 수를 구하시오(부서 NULL 제외). 별칭은 `cnt`입니다.  
(컬럼: dept_id, cnt)

**정답**

```sql
SELECT dept_id, COUNT(*) AS cnt
FROM employees
WHERE dept_id IS NOT NULL
GROUP BY dept_id
HAVING COUNT(*) >= 3;
```

**해설**

`WHERE`는 그룹화 **전** 행 필터, `HAVING`은 그룹화 **후** 그룹 필터입니다. 집계 함수 조건은 WHERE에 쓸 수 없고 HAVING에 써야 합니다.

실행 순서: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT

**실행 결과** (4행)

| dept_id | cnt |
|---|---|
| 1 | 6 |
| 2 | 4 |
| 4 | 3 |
| 5 | 3 |

---

### 문제 36. INSERT (전체 컬럼)

**문제**  
`departments` 테이블에 부서번호 7, 부서명 `디자인팀`, 위치 `서울`인 행을 추가하시오.

**정답**

```sql
INSERT INTO departments VALUES (7, '디자인팀', '서울');
```

**해설**

`INSERT INTO 테이블 VALUES (...)`는 테이블에 정의된 컬럼 순서대로 모든 값을 지정해야 합니다. 컬럼 순서가 바뀌면 오류가 나기 쉬워 실무에서는 다음 문제처럼 컬럼 목록을 명시합니다.

**실행 후 확인 쿼리 결과** (1행)

확인 쿼리:
```sql
SELECT * FROM departments WHERE dept_id = 7;
```

| dept_id | dept_name | location |
|---|---|---|
| 7 | 디자인팀 | 서울 |

---

### 문제 37. INSERT (컬럼 지정)

**문제**  
`customers` 테이블에 컬럼 목록을 명시하여 새 고객을 추가하시오. (customer_id=16, name=`노하윤`, city=`제주`, grade=`BRONZE`, joined_date=`2024-11-01`) email은 입력하지 않습니다.

**정답**

```sql
INSERT INTO customers (customer_id, name, city, grade, joined_date)
VALUES (16, '노하윤', '제주', 'BRONZE', '2024-11-01');
```

**해설**

컬럼 목록을 명시하면 지정하지 않은 컬럼(email)은 기본값 또는 NULL이 들어갑니다. NOT NULL 컬럼을 빠뜨리면 오류가 납니다.

**실행 후 확인 쿼리 결과** (1행)

확인 쿼리:
```sql
SELECT * FROM customers WHERE customer_id = 16;
```

| customer_id | name | city | grade | joined_date | email |
|---|---|---|---|---|---|
| 16 | 노하윤 | 제주 | BRONZE | 2024-11-01 | NULL |

---

### 문제 38. UPDATE

**문제**  
상품번호 6번(`모니터 암`)의 재고(stock)를 30으로 수정하시오.

**정답**

```sql
UPDATE products SET stock = 30 WHERE product_id = 6;
```

**해설**

`UPDATE ... SET ... WHERE ...` 구조입니다. **WHERE를 빠뜨리면 모든 행이 수정**되므로 실행 전 항상 조건을 확인하세요.

**실행 후 확인 쿼리 결과** (1행)

확인 쿼리:
```sql
SELECT product_id, stock FROM products WHERE product_id = 6;
```

| product_id | stock |
|---|---|
| 6 | 30 |

---

### 문제 39. UPDATE (여러 행)

**문제**  
카테고리가 `도서`인 모든 상품의 가격을 1,000원씩 인상하시오.

**정답**

```sql
UPDATE products SET price = price + 1000 WHERE category = '도서';
```

**해설**

SET에서 기존 컬럼 값을 이용한 계산(`price + 1000`)이 가능합니다. WHERE 조건에 해당하는 모든 행에 적용됩니다.

**실행 후 확인 쿼리 결과** (4행)

확인 쿼리:
```sql
SELECT product_id, price FROM products WHERE category = '도서' ORDER BY product_id;
```

| product_id | price |
|---|---|
| 9 | 29000 |
| 10 | 33000 |
| 11 | 36000 |
| 12 | 31000 |

---

### 문제 40. DELETE

**문제**  
고객번호 15번 고객을 `customers` 테이블에서 삭제하시오.

**정답**

```sql
DELETE FROM customers WHERE customer_id = 15;
```

**해설**

`DELETE FROM 테이블 WHERE 조건`입니다. UPDATE와 마찬가지로 WHERE가 없으면 전체 행이 삭제됩니다. 실무에서는 삭제 전 같은 WHERE로 SELECT를 먼저 실행해 대상 행을 확인하세요.

**실행 후 확인 쿼리 결과** (1행)

확인 쿼리:
```sql
SELECT COUNT(*) AS cnt FROM customers;
```

| cnt |
|---|
| 14 |

---

## 중급

### 문제 41. INNER JOIN

**문제**  
직원의 이름과 소속 부서명을 조회하시오. 부서가 없는 직원은 제외하고, emp_id 순으로 정렬합니다.  
(컬럼: emp_name, dept_name)

**정답**

```sql
SELECT e.emp_name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id
ORDER BY e.emp_id;
```

**해설**

`INNER JOIN`은 ON 조건이 일치하는 행만 결합합니다. 부서가 NULL인 직원(김대표, 송연구)은 짝이 없어 제외되어 18행이 됩니다. 테이블 별칭(e, d)을 쓰면 쿼리가 간결해집니다.

**실행 결과** (총 18행 중 8행 표시)

| emp_name | dept_name |
|---|---|
| 이개발 | 개발팀 |
| 박서버 | 개발팀 |
| 최프론 | 개발팀 |
| 정백엔 | 개발팀 |
| 한신입 | 개발팀 |
| 오영업 | 영업팀 |
| 서영업 | 영업팀 |
| 강영업 | 영업팀 |

---

### 문제 42. LEFT JOIN

**문제**  
모든 직원의 이름과 부서명을 조회하시오. 부서가 없는 직원은 부서명이 NULL로 나와야 합니다. emp_id 순으로 정렬합니다.  
(컬럼: emp_name, dept_name)

**정답**

```sql
SELECT e.emp_name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id
ORDER BY e.emp_id;
```

**해설**

`LEFT JOIN`은 왼쪽 테이블의 모든 행을 유지하고, 오른쪽에 짝이 없으면 NULL로 채웁니다. 20행 전체가 조회됩니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_name | dept_name |
|---|---|
| 김대표 | NULL |
| 이개발 | 개발팀 |
| 박서버 | 개발팀 |
| 최프론 | 개발팀 |
| 정백엔 | 개발팀 |
| 한신입 | 개발팀 |
| 오영업 | 영업팀 |
| 서영업 | 영업팀 |

---

### 문제 43. LEFT JOIN + IS NULL (안티 조인)

**문제**  
소속 직원이 한 명도 없는 부서의 이름을 조회하시오.  
(컬럼: dept_name)

**정답**

```sql
SELECT d.dept_name
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
WHERE e.emp_id IS NULL;
```

**해설**

LEFT JOIN 후 오른쪽 테이블의 기본키가 NULL인 행만 남기면 '짝이 없는 행'을 찾을 수 있습니다. 이를 **안티 조인(anti join)** 패턴이라 부릅니다.

**실행 결과** (1행)

| dept_name |
|---|
| 법무팀 |

---

### 문제 44. JOIN (주문+고객)

**문제**  
모든 주문의 주문번호, 고객 이름, 주문일, 상태를 order_id 순으로 조회하시오.  
(컬럼: order_id, name, order_date, status)

**정답**

```sql
SELECT o.order_id, c.name, o.order_date, o.status
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
ORDER BY o.order_id;
```

**해설**

`JOIN`만 쓰면 `INNER JOIN`과 같습니다. 외래키(orders.customer_id) = 기본키(customers.customer_id)로 연결하는 가장 전형적인 조인입니다.

**실행 결과** (총 30행 중 8행 표시)

| order_id | name | order_date | status |
|---|---|---|---|
| 1 | 김민수 | 2024-01-10 | DELIVERED |
| 2 | 이서연 | 2024-01-25 | DELIVERED |
| 3 | 김민수 | 2024-02-14 | DELIVERED |
| 4 | 최유나 | 2024-02-20 | DELIVERED |
| 5 | 박지훈 | 2024-03-03 | CANCELLED |
| 6 | 정우진 | 2024-03-18 | DELIVERED |
| 7 | 서지민 | 2024-03-29 | DELIVERED |
| 8 | 윤서아 | 2024-04-05 | DELIVERED |

---

### 문제 45. 3개 테이블 JOIN

**문제**  
11번 주문에 포함된 상품명과 수량을 item_id 순으로 조회하시오.  
(컬럼: product_name, quantity)

**정답**

```sql
SELECT p.product_name, oi.quantity
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
WHERE oi.order_id = 11
ORDER BY oi.item_id;
```

**해설**

주문상세(order_items)는 주문과 상품 사이의 N:M 관계를 풀어 주는 연결 테이블입니다. 상품명을 얻으려면 products와 조인해야 합니다.

**실행 결과** (3행)

| product_name | quantity |
|---|---|
| 파이썬 완벽 가이드 | 1 |
| 자바 프로그래밍 | 1 |
| SQL 입문서 | 1 |

---

### 문제 46. 4개 테이블 JOIN

**문제**  
고객 `김민수`가 구매한 모든 상품의 주문일, 상품명, 수량을 주문일, item_id 순으로 조회하시오.  
(컬럼: order_date, product_name, quantity)

**정답**

```sql
SELECT o.order_date, p.product_name, oi.quantity
FROM customers c
JOIN orders o       ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p     ON oi.product_id = p.product_id
WHERE c.name = '김민수'
ORDER BY o.order_date, oi.item_id;
```

**해설**

여러 테이블 조인은 FK 관계를 따라 하나씩 이어 붙입니다: customers → orders → order_items → products. 각 JOIN마다 ON 조건을 빠뜨리지 마세요(빠뜨리면 카르테시안 곱이 발생).

**실행 결과** (8행)

| order_date | product_name | quantity |
|---|---|---|
| 2024-01-10 | 무선 마우스 | 2 |
| 2024-01-10 | 마우스 패드 | 1 |
| 2024-02-14 | 27인치 모니터 | 1 |
| 2024-06-28 | 무선 마우스 | 1 |
| 2024-06-28 | USB 허브 | 2 |
| 2024-11-05 | 사무용 의자 | 1 |
| 2024-11-05 | LED 스탠드 | 1 |
| 2024-11-05 | USB 허브 | 1 |

---

### 문제 47. JOIN + 계산 + GROUP BY

**문제**  
주문별 합계 금액(quantity × unit_price)을 order_id 순으로 구하시오. 별칭은 `total`입니다.  
(컬럼: order_id, total)

**정답**

```sql
SELECT order_id, SUM(quantity * unit_price) AS total
FROM order_items
GROUP BY order_id
ORDER BY order_id;
```

**해설**

집계 함수 안에 계산식을 넣을 수 있습니다. 이 문제는 order_items에 unit_price가 있어 조인 없이도 해결됩니다.

**실행 결과** (총 30행 중 8행 표시)

| order_id | total |
|---|---|
| 1 | 59000 |
| 2 | 60000 |
| 3 | 289000 |
| 4 | 228000 |
| 5 | 89000 |
| 6 | 75000 |
| 7 | 70000 |
| 8 | 132000 |

---

### 문제 48. 고객별 구매 금액

**문제**  
취소(CANCELLED)되지 않은 주문만을 대상으로 고객별 총 구매금액을 구하시오. 총액 큰 순, 같으면 이름 오름차순으로 정렬합니다. 별칭은 `total`입니다.  
(컬럼: name, total)

**정답**

```sql
SELECT c.name, SUM(oi.quantity * oi.unit_price) AS total
FROM customers c
JOIN orders o       ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status <> 'CANCELLED'
GROUP BY c.customer_id, c.name
ORDER BY total DESC, c.name;
```

**해설**

WHERE로 취소 주문을 먼저 제거한 뒤 고객별로 묶어 합산합니다. 동명이인을 구분하려면 `GROUP BY`에 기본키(customer_id)를 포함하는 것이 안전합니다. `ORDER BY`에서는 SELECT의 별칭을 사용할 수 있습니다.

**실행 결과** (총 11행 중 8행 표시)

| name | total |
|---|---|
| 최유나 | 1423000 |
| 윤서아 | 704000 |
| 김민수 | 658000 |
| 서지민 | 479000 |
| 배수빈 | 241000 |
| 이서연 | 231000 |
| 한소희 | 213000 |
| 강하늘 | 152000 |

---

### 문제 49. 상품별 판매 수량

**문제**  
한 번이라도 팔린 상품에 대해 상품별 총 판매 수량을 구하시오. 수량 많은 순, 같으면 product_id 순으로 정렬합니다. 별칭은 `qty`입니다.  
(컬럼: product_name, qty)

**정답**

```sql
SELECT p.product_name, SUM(oi.quantity) AS qty
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name
ORDER BY qty DESC, p.product_id;
```

**해설**

INNER JOIN이므로 주문 내역이 없는 상품은 자동으로 제외됩니다.

**실행 결과** (총 13행 중 8행 표시)

| product_name | qty |
|---|---|
| 무선 마우스 | 10 |
| 마우스 패드 | 8 |
| USB 허브 | 7 |
| 파이썬 완벽 가이드 | 7 |
| 기계식 키보드 | 6 |
| SQL 입문서 | 6 |
| 27인치 모니터 | 5 |
| 노트북 거치대 | 5 |

---

### 문제 50. 주문 없는 고객

**문제**  
한 번도 주문하지 않은 고객의 이름을 조회하시오.  
(컬럼: name)

**정답**

```sql
SELECT c.name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

**해설**

안티 조인 패턴입니다. 오태양, 장민재, 신예린이 해당합니다. 취소된 주문만 있는 고객(박지훈)은 주문 행이 존재하므로 포함되지 않습니다.

**실행 결과** (3행)

| name |
|---|
| 오태양 |
| 장민재 |
| 신예린 |

---

### 문제 51. 팔린 적 없는 상품

**문제**  
한 번도 주문되지 않은 상품의 이름을 조회하시오.  
(컬럼: product_name)

**정답**

```sql
SELECT p.product_name
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
WHERE oi.item_id IS NULL;
```

**해설**

'알고리즘 문제집'과 '높이조절 책상'이 해당합니다. 오른쪽 테이블의 NOT NULL 컬럼(기본키)으로 NULL 여부를 확인해야 정확합니다.

**실행 결과** (2행)

| product_name |
|---|
| 알고리즘 문제집 |
| 높이조절 책상 |

---

### 문제 52. SELF JOIN

**문제**  
직원의 이름과 직속 상사의 이름을 emp_id 순으로 조회하시오. 상사가 없으면 NULL입니다. 상사 이름의 별칭은 `manager_name`입니다.  
(컬럼: emp_name, manager_name)

**정답**

```sql
SELECT e.emp_name, m.emp_name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id
ORDER BY e.emp_id;
```

**해설**

같은 테이블을 두 번 사용하는 **셀프 조인**입니다. 별칭(e, m)으로 두 역할(직원/상사)을 구분합니다. 최상위자(김대표)는 manager_id가 NULL이라 LEFT JOIN으로 유지합니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_name | manager_name |
|---|---|
| 김대표 | NULL |
| 이개발 | 김대표 |
| 박서버 | 이개발 |
| 최프론 | 이개발 |
| 정백엔 | 이개발 |
| 한신입 | 박서버 |
| 오영업 | 김대표 |
| 서영업 | 오영업 |

---

### 문제 53. SELF JOIN (쌍 찾기)

**문제**  
급여가 같은 서로 다른 두 직원의 이름 쌍을 조회하시오. 같은 쌍이 두 번 나오지 않도록 하세요.  
(컬럼: name1, name2)

**정답**

```sql
SELECT a.emp_name AS name1, b.emp_name AS name2
FROM employees a
JOIN employees b
  ON a.salary = b.salary AND a.emp_id < b.emp_id;
```

**해설**

`a.emp_id < b.emp_id` 조건으로 자기 자신과의 비교와 (A,B)/(B,A) 중복을 동시에 제거합니다. 최프론과 홍개발(급여 5,200,000)이 결과입니다.

**실행 결과** (1행)

| name1 | name2 |
|---|---|
| 최프론 | 홍개발 |

---

### 문제 54. CROSS JOIN

**문제**  
상품 카테고리 종류와 주문 상태 종류의 모든 조합이 몇 개인지 구하시오. 별칭은 `combos`입니다.  
(컬럼: combos)

**정답**

```sql
SELECT COUNT(*) AS combos
FROM (SELECT DISTINCT category FROM products)
CROSS JOIN (SELECT DISTINCT status FROM orders);
```

**해설**

`CROSS JOIN`은 두 집합의 모든 조합(카르테시안 곱)을 만듭니다. 카테고리 4종 × 상태 4종 = 16입니다. FROM 절에 서브쿼리(인라인 뷰)를 쓸 수 있다는 점도 확인하세요.

**실행 결과** (1행)

| combos |
|---|
| 16 |

---

### 문제 55. 스칼라 서브쿼리

**문제**  
전체 평균 급여보다 급여가 높은 직원의 이름과 급여를 조회하시오.  
(컬럼: emp_name, salary)

**정답**

```sql
SELECT emp_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

**해설**

괄호 안의 서브쿼리가 단일 값(스칼라)을 반환하면 비교 연산자의 피연산자로 쓸 수 있습니다. 집계 함수는 WHERE에 직접 쓸 수 없으므로 서브쿼리가 필요합니다.

**실행 결과** (7행)

| emp_name | salary |
|---|---|
| 김대표 | 12000000 |
| 이개발 | 8500000 |
| 박서버 | 6500000 |
| 오영업 | 7800000 |
| 임인사 | 7200000 |
| 장마케 | 7500000 |
| 신기획 | 7600000 |

---

### 문제 56. IN 서브쿼리

**문제**  
주문 이력이 있는 고객의 이름을 `IN` 서브쿼리로 조회하시오.  
(컬럼: name)

**정답**

```sql
SELECT name
FROM customers
WHERE customer_id IN (SELECT customer_id FROM orders);
```

**해설**

서브쿼리가 여러 값을 반환하면 `IN`으로 비교합니다. 결과는 JOIN 방식과 같지만 중복 행이 생기지 않는다는 장점이 있습니다.

**실행 결과** (총 12행 중 8행 표시)

| name |
|---|
| 김민수 |
| 이서연 |
| 박지훈 |
| 최유나 |
| 정우진 |
| 한소희 |
| 서지민 |
| 강하늘 |

---

### 문제 57. NOT IN 서브쿼리

**문제**  
주문 이력이 없는 고객의 이름을 `NOT IN` 서브쿼리로 조회하시오.  
(컬럼: name)

**정답**

```sql
SELECT name
FROM customers
WHERE customer_id NOT IN (SELECT customer_id FROM orders);
```

**해설**

주의: 서브쿼리 결과에 NULL이 하나라도 있으면 `NOT IN`은 전체가 UNKNOWN이 되어 결과가 비어 버립니다. orders.customer_id는 NOT NULL이라 안전하지만, NULL 가능성이 있으면 `NOT EXISTS`나 LEFT JOIN 방식을 쓰세요.

**실행 결과** (3행)

| name |
|---|
| 오태양 |
| 장민재 |
| 신예린 |

---

### 문제 58. EXISTS

**문제**  
취소(CANCELLED) 주문이 있는 고객의 이름을 `EXISTS`로 조회하시오.  
(컬럼: name)

**정답**

```sql
SELECT c.name
FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o
  WHERE o.customer_id = c.customer_id AND o.status = 'CANCELLED'
);
```

**해설**

`EXISTS`는 서브쿼리가 한 행이라도 반환하면 참입니다. 바깥 쿼리의 c를 참조하므로 **상관 서브쿼리**이며, 행을 찾는 즉시 중단되어 효율적입니다. SELECT 목록(`1`)은 의미가 없습니다.

**실행 결과** (2행)

| name |
|---|
| 박지훈 |
| 조은지 |

---

### 문제 59. 상관 서브쿼리

**문제**  
자기 부서의 평균 급여보다 급여가 높은 직원의 이름, 부서번호, 급여를 조회하시오(부서 NULL 직원 제외).  
(컬럼: emp_name, dept_id, salary)

**정답**

```sql
SELECT e.emp_name, e.dept_id, e.salary
FROM employees e
WHERE e.salary > (
  SELECT AVG(s.salary) FROM employees s WHERE s.dept_id = e.dept_id
);
```

**해설**

서브쿼리가 바깥 행의 값(e.dept_id)을 참조하여 행마다 다시 계산됩니다. dept_id가 NULL인 직원은 `s.dept_id = NULL`이 참이 될 수 없어 자동으로 제외됩니다.

**실행 결과** (7행)

| emp_name | dept_id | salary |
|---|---|---|
| 이개발 | 1 | 8500000 |
| 박서버 | 1 | 6500000 |
| 오영업 | 2 | 7800000 |
| 임인사 | 3 | 7200000 |
| 장마케 | 4 | 7500000 |
| 신기획 | 5 | 7600000 |
| 권기획 | 5 | 5800000 |

---

### 문제 60. MAX 서브쿼리

**문제**  
가장 비싼 상품의 이름과 가격을 조회하시오. `ORDER BY`/`LIMIT`이 아닌 서브쿼리로 풀이합니다.  
(컬럼: product_name, price)

**정답**

```sql
SELECT product_name, price
FROM products
WHERE price = (SELECT MAX(price) FROM products);
```

**해설**

`ORDER BY price DESC LIMIT 1`은 동점이 있어도 1개만 반환하지만, 서브쿼리 방식은 최댓값이 같은 상품을 **모두** 반환합니다. 요구사항에 따라 선택하세요.

**실행 결과** (1행)

| product_name | price |
|---|---|
| 27인치 모니터 | 289000 |

---

### 문제 61. CASE 식

**문제**  
급여가 7,000,000 이상이면 `상`, 4,500,000 이상이면 `중`, 그 외 `하`로 구분한 `salary_level` 컬럼을 만들어 emp_id 순으로 조회하시오.  
(컬럼: emp_name, salary, salary_level)

**정답**

```sql
SELECT emp_name, salary,
  CASE
    WHEN salary >= 7000000 THEN '상'
    WHEN salary >= 4500000 THEN '중'
    ELSE '하'
  END AS salary_level
FROM employees
ORDER BY emp_id;
```

**해설**

`CASE WHEN`은 SQL의 if-else입니다. 위에서부터 평가하여 처음 참인 분기의 값을 반환하므로 **조건의 순서**가 중요합니다. ELSE를 생략하면 NULL이 반환됩니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_name | salary | salary_level |
|---|---|---|
| 김대표 | 12000000 | 상 |
| 이개발 | 8500000 | 상 |
| 박서버 | 6500000 | 중 |
| 최프론 | 5200000 | 중 |
| 정백엔 | 5000000 | 중 |
| 한신입 | 3800000 | 하 |
| 오영업 | 7800000 | 상 |
| 서영업 | 4800000 | 중 |

---

### 문제 62. 조건부 집계

**문제**  
주문 상태별 건수를 한 행에 가로로 보이도록 구하시오. 별칭은 `paid`, `shipped`, `delivered`, `cancelled`입니다.  
(컬럼: paid, shipped, delivered, cancelled)

**정답**

```sql
SELECT
  SUM(CASE WHEN status = 'PAID' THEN 1 ELSE 0 END)      AS paid,
  SUM(CASE WHEN status = 'SHIPPED' THEN 1 ELSE 0 END)   AS shipped,
  SUM(CASE WHEN status = 'DELIVERED' THEN 1 ELSE 0 END) AS delivered,
  SUM(CASE WHEN status = 'CANCELLED' THEN 1 ELSE 0 END) AS cancelled
FROM orders;
```

**해설**

`SUM(CASE WHEN 조건 THEN 1 ELSE 0 END)`는 조건에 맞는 행 수를 세는 **피벗(행→열) 패턴**입니다. 리포트용 쿼리에서 매우 자주 쓰입니다.

**실행 결과** (1행)

| paid | shipped | delivered | cancelled |
|---|---|---|---|
| 8 | 3 | 17 | 2 |

---

### 문제 63. COALESCE (NULL 대체)

**문제**  
고객의 이름과 이메일을 customer_id 순으로 조회하되, 이메일이 NULL이면 `미등록`으로 표시하시오. 이메일 컬럼의 별칭은 `email`입니다.  
(컬럼: name, email)

**정답**

```sql
SELECT name, COALESCE(email, '미등록') AS email
FROM customers
ORDER BY customer_id;
```

**해설**

`COALESCE(a, b, ...)`는 왼쪽부터 처음으로 NULL이 아닌 값을 반환합니다. (SQLite의 `IFNULL(a, b)`, MySQL의 `IFNULL`, Oracle의 `NVL`과 유사)

**실행 결과** (총 15행 중 8행 표시)

| name | email |
|---|---|
| 김민수 | minsu@example.com |
| 이서연 | seoyeon@example.com |
| 박지훈 | 미등록 |
| 최유나 | yuna@example.com |
| 정우진 | woojin@example.com |
| 한소희 | sohee@example.com |
| 오태양 | 미등록 |
| 서지민 | jimin@example.com |

---

### 문제 64. LEFT JOIN + COALESCE

**문제**  
모든 직원의 이름과 부서명을 emp_id 순으로 조회하되, 부서가 없으면 `미배정`으로 표시하시오. 부서명 컬럼의 별칭은 `dept_name`입니다.  
(컬럼: emp_name, dept_name)

**정답**

```sql
SELECT e.emp_name, COALESCE(d.dept_name, '미배정') AS dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id
ORDER BY e.emp_id;
```

**해설**

OUTER JOIN 결과의 NULL을 사용자 친화적인 값으로 바꿔 보여 주는 패턴입니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_name | dept_name |
|---|---|
| 김대표 | 미배정 |
| 이개발 | 개발팀 |
| 박서버 | 개발팀 |
| 최프론 | 개발팀 |
| 정백엔 | 개발팀 |
| 한신입 | 개발팀 |
| 오영업 | 영업팀 |
| 서영업 | 영업팀 |

---

### 문제 65. 날짜 함수 (월별 집계)

**문제**  
월별(`YYYY-MM`) 주문 건수를 월 오름차순으로 구하시오. 별칭은 `ym`, `cnt`입니다.  
(컬럼: ym, cnt)

**정답**

```sql
SELECT strftime('%Y-%m', order_date) AS ym, COUNT(*) AS cnt
FROM orders
GROUP BY ym
ORDER BY ym;
```

**해설**

SQLite의 `strftime(형식, 날짜)`로 날짜의 일부를 추출합니다. (MySQL: `DATE_FORMAT`, PostgreSQL: `TO_CHAR`) `GROUP BY`에 SELECT의 별칭을 쓸 수 있는지는 DB마다 다릅니다.

**실행 결과** (총 12행 중 8행 표시)

| ym | cnt |
|---|---|
| 2024-01 | 2 |
| 2024-02 | 2 |
| 2024-03 | 3 |
| 2024-04 | 2 |
| 2024-05 | 2 |
| 2024-06 | 2 |
| 2024-07 | 2 |
| 2024-08 | 2 |

---

### 문제 66. 연도별 집계

**문제**  
입사 연도별 직원 수를 연도 오름차순으로 구하시오. 별칭은 `hire_year`, `cnt`입니다.  
(컬럼: hire_year, cnt)

**정답**

```sql
SELECT strftime('%Y', hire_date) AS hire_year, COUNT(*) AS cnt
FROM employees
GROUP BY hire_year
ORDER BY hire_year;
```

**해설**

`strftime('%Y', ...)`은 연도를 문자열로 반환합니다. 날짜 컬럼을 가공해서 그룹화하는 전형적인 패턴입니다.

**실행 결과** (총 10행 중 8행 표시)

| hire_year | cnt |
|---|---|
| 2015 | 1 |
| 2016 | 3 |
| 2017 | 2 |
| 2018 | 2 |
| 2019 | 2 |
| 2020 | 3 |
| 2021 | 2 |
| 2022 | 2 |

---

### 문제 67. 근속 연수

**문제**  
기준일 `2024-12-31`을 기준으로 직원의 근속 연수(기준 연도 − 입사 연도)를 구해 emp_id 순으로 조회하시오. 별칭은 `years`입니다.  
(컬럼: emp_name, years)

**정답**

```sql
SELECT emp_name,
  CAST(strftime('%Y', '2024-12-31') AS INTEGER) - CAST(strftime('%Y', hire_date) AS INTEGER) AS years
FROM employees
ORDER BY emp_id;
```

**해설**

`strftime`의 결과는 문자열이므로 `CAST(... AS INTEGER)`로 숫자 변환 후 계산합니다. 실제 만 근속 연수를 구하려면 월·일까지 비교하거나 `julianday` 차이를 이용합니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_name | years |
|---|---|
| 김대표 | 9 |
| 이개발 | 8 |
| 박서버 | 6 |
| 최프론 | 4 |
| 정백엔 | 3 |
| 한신입 | 1 |
| 오영업 | 8 |
| 서영업 | 5 |

---

### 문제 68. 문자열 함수 (SUBSTR/INSTR)

**문제**  
이메일이 있는 고객의 이메일 아이디(`@` 앞부분)를 customer_id 순으로 조회하시오. 별칭은 `email_id`입니다.  
(컬럼: name, email_id)

**정답**

```sql
SELECT name, SUBSTR(email, 1, INSTR(email, '@') - 1) AS email_id
FROM customers
WHERE email IS NOT NULL
ORDER BY customer_id;
```

**해설**

`INSTR(문자열, 찾을값)`은 위치(1부터)를, `SUBSTR(문자열, 시작, 길이)`는 부분 문자열을 반환합니다. '@' 위치 − 1이 아이디의 길이입니다.

**실행 결과** (총 12행 중 8행 표시)

| name | email_id |
|---|---|
| 김민수 | minsu |
| 이서연 | seoyeon |
| 최유나 | yuna |
| 정우진 | woojin |
| 한소희 | sohee |
| 서지민 | jimin |
| 강하늘 | haneul |
| 윤서아 | seoa |

---

### 문제 69. LENGTH

**문제**  
상품명이 6글자 이상인 상품의 이름과 글자 수를 product_id 순으로 조회하시오. 글자 수 별칭은 `len`입니다.  
(컬럼: product_name, len)

**정답**

```sql
SELECT product_name, LENGTH(product_name) AS len
FROM products
WHERE LENGTH(product_name) >= 6
ORDER BY product_id;
```

**해설**

SQLite의 `LENGTH`는 문자열 길이를 글자 수 기준으로 반환합니다. MySQL에서는 `CHAR_LENGTH`(글자 수)와 `LENGTH`(바이트 수)가 다르므로 주의하세요.

**실행 결과** (총 13행 중 8행 표시)

| product_name | len |
|---|---|
| 무선 마우스 | 6 |
| 기계식 키보드 | 7 |
| 27인치 모니터 | 8 |
| USB 허브 | 6 |
| 노트북 거치대 | 7 |
| 마우스 패드 | 6 |
| SQL 입문서 | 7 |
| 파이썬 완벽 가이드 | 10 |

---

### 문제 70. 부서별 급여 통계

**문제**  
부서별(부서 NULL 제외) 평균(정수 반올림)·최고·최저 급여를 dept_id 순으로 구하시오. 별칭은 `avg_sal`, `max_sal`, `min_sal`입니다.  
(컬럼: dept_id, avg_sal, max_sal, min_sal)

**정답**

```sql
SELECT dept_id, ROUND(AVG(salary)) AS avg_sal, MAX(salary) AS max_sal, MIN(salary) AS min_sal
FROM employees
WHERE dept_id IS NOT NULL
GROUP BY dept_id
ORDER BY dept_id;
```

**해설**

한 번의 GROUP BY로 여러 통계를 동시에 계산합니다.

**실행 결과** (5행)

| dept_id | avg_sal | max_sal | min_sal |
|---|---|---|---|
| 1 | 5700000.0 | 8500000 | 3800000 |
| 2 | 5225000.0 | 7800000 | 3600000 |
| 3 | 5350000.0 | 7200000 | 3500000 |
| 4 | 5366667.0 | 7500000 | 3700000 |
| 5 | 5766667.0 | 7600000 | 3900000 |

---

### 문제 71. HAVING (합계 조건)

**문제**  
카테고리별 재고 합계가 200 이상인 카테고리와 재고 합계를 구하시오. 별칭은 `total_stock`입니다.  
(컬럼: category, total_stock)

**정답**

```sql
SELECT category, SUM(stock) AS total_stock
FROM products
GROUP BY category
HAVING SUM(stock) >= 200;
```

**해설**

집계 결과에 대한 조건은 HAVING에 씁니다. 전자기기(420)와 액세서리(380)가 조건을 만족합니다.

**실행 결과** (2행)

| category | total_stock |
|---|---|
| 액세서리 | 380 |
| 전자기기 | 420 |

---

### 문제 72. JOIN + HAVING

**문제**  
주문(취소 포함)을 3건 이상 한 고객의 이름과 주문 건수를 건수 내림차순, 이름 오름차순으로 조회하시오. 별칭은 `order_cnt`입니다.  
(컬럼: name, order_cnt)

**정답**

```sql
SELECT c.name, COUNT(*) AS order_cnt
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name
HAVING COUNT(*) >= 3
ORDER BY order_cnt DESC, c.name;
```

**해설**

조인 후 그룹화하고, 그룹의 행 수 조건을 HAVING으로 필터링합니다.

**실행 결과** (5행)

| name | order_cnt |
|---|---|
| 김민수 | 4 |
| 윤서아 | 4 |
| 최유나 | 4 |
| 서지민 | 3 |
| 이서연 | 3 |

---

### 문제 73. UNION ALL

**문제**  
`VIP` 등급 고객의 이름과 직책이 `팀장`으로 끝나는 직원의 이름을 하나의 목록으로 합치시오. 구분용 컬럼 `type`에는 각각 `고객`, `직원`을 표시합니다.  
(컬럼: name, type)

**정답**

```sql
SELECT name, '고객' AS type FROM customers WHERE grade = 'VIP'
UNION ALL
SELECT emp_name, '직원' FROM employees WHERE job_title LIKE '%팀장';
```

**해설**

`UNION ALL`은 중복 제거 없이 결과를 위아래로 붙입니다. 두 SELECT의 컬럼 개수와 타입이 호환되어야 하며, 컬럼명은 첫 번째 SELECT를 따릅니다. 중복 제거가 필요 없다면 UNION보다 UNION ALL이 빠릅니다.

**실행 결과** (7행)

| name | type |
|---|---|
| 최유나 | 고객 |
| 윤서아 | 고객 |
| 이개발 | 직원 |
| 오영업 | 직원 |
| 임인사 | 직원 |
| 장마케 | 직원 |
| 신기획 | 직원 |

---

### 문제 74. UNION

**문제**  
고객이 사는 도시와 부서 위치를 합쳐 중복 없는 도시 목록을 구하시오.  
(컬럼: city)

**정답**

```sql
SELECT city FROM customers
UNION
SELECT location FROM departments;
```

**해설**

`UNION`은 합친 뒤 중복을 제거합니다(내부적으로 정렬/해시가 필요해 UNION ALL보다 비용이 큼).

**실행 결과** (6행)

| city |
|---|
| 광주 |
| 대구 |
| 대전 |
| 부산 |
| 서울 |
| 인천 |

---

### 문제 75. INTERSECT

**문제**  
고객이 사는 도시 중 부서 위치에도 존재하는 도시를 구하시오.  
(컬럼: city)

**정답**

```sql
SELECT city FROM customers
INTERSECT
SELECT location FROM departments;
```

**해설**

`INTERSECT`는 두 결과의 교집합(중복 제거)입니다. 서울, 부산, 대전이 해당합니다. MySQL 8.0.31 이전 버전은 지원하지 않습니다.

**실행 결과** (3행)

| city |
|---|
| 대전 |
| 부산 |
| 서울 |

---

### 문제 76. EXCEPT

**문제**  
고객이 사는 도시 중 부서 위치에는 없는 도시를 구하시오.  
(컬럼: city)

**정답**

```sql
SELECT city FROM customers
EXCEPT
SELECT location FROM departments;
```

**해설**

`EXCEPT`는 차집합(A − B)입니다. Oracle에서는 `MINUS`라고 부릅니다. 대구, 인천, 광주가 해당합니다.

**실행 결과** (3행)

| city |
|---|
| 광주 |
| 대구 |
| 인천 |

---

### 문제 77. UPDATE + 서브쿼리

**문제**  
부서명이 `개발팀`인 부서 소속 직원 모두의 급여를 300,000원씩 인상하시오. 부서번호를 직접 쓰지 않고 서브쿼리로 찾습니다.

**정답**

```sql
UPDATE employees
SET salary = salary + 300000
WHERE dept_id = (SELECT dept_id FROM departments WHERE dept_name = '개발팀');
```

**해설**

WHERE의 서브쿼리로 부서번호를 조회해 사용합니다. 부서번호가 바뀌어도 쿼리가 깨지지 않는 장점이 있습니다.

**실행 후 확인 쿼리 결과** (6행)

확인 쿼리:
```sql
SELECT emp_id, salary FROM employees WHERE dept_id = 1 ORDER BY emp_id;
```

| emp_id | salary |
|---|---|
| 2 | 8800000 |
| 3 | 6800000 |
| 4 | 5500000 |
| 5 | 5300000 |
| 6 | 4100000 |
| 20 | 5500000 |

---

### 문제 78. DELETE + 서브쿼리

**문제**  
한 번도 주문되지 않은 상품(order_items에 없는 상품)을 `products` 테이블에서 삭제하시오.

**정답**

```sql
DELETE FROM products
WHERE product_id NOT IN (SELECT product_id FROM order_items);
```

**해설**

서브쿼리로 삭제 대상을 선별합니다. 실행 전에 같은 WHERE로 SELECT를 먼저 실행해 대상(알고리즘 문제집, 높이조절 책상)을 확인하는 습관을 들이세요.

**실행 후 확인 쿼리 결과** (총 13행 중 8행 표시)

확인 쿼리:
```sql
SELECT product_id, product_name FROM products ORDER BY product_id;
```

| product_id | product_name |
|---|---|
| 1 | 무선 마우스 |
| 2 | 기계식 키보드 |
| 3 | 27인치 모니터 |
| 4 | USB 허브 |
| 5 | 노트북 거치대 |
| 6 | 모니터 암 |
| 7 | 마우스 패드 |
| 8 | 웹캠 |

---

### 문제 79. UPDATE + CASE

**문제**  
상품 재고가 100개 이상이면 가격을 10% 할인(`price * 9 / 10`)하고, 나머지는 가격을 그대로 두도록 한 번의 UPDATE로 처리하시오.

**정답**

```sql
UPDATE products
SET price = CASE WHEN stock >= 100 THEN price * 9 / 10 ELSE price END;
```

**해설**

UPDATE의 SET에서 CASE를 사용하면 행마다 다른 값을 한 번에 갱신할 수 있습니다. 정수 나눗셈이라 값이 정수로 유지됩니다(25000→22500, 19000→17100, 9000→8100).

**실행 후 확인 쿼리 결과** (총 15행 중 8행 표시)

확인 쿼리:
```sql
SELECT product_id, price FROM products ORDER BY product_id;
```

| product_id | price |
|---|---|
| 1 | 22500 |
| 2 | 89000 |
| 3 | 289000 |
| 4 | 17100 |
| 5 | 35000 |
| 6 | 59000 |
| 7 | 8100 |
| 8 | 49000 |

---

### 문제 80. CREATE TABLE AS SELECT

**문제**  
VIP 등급 고객의 customer_id, name을 복사하여 `vip_customers` 테이블을 새로 만드시오.

**정답**

```sql
CREATE TABLE vip_customers AS
SELECT customer_id, name FROM customers WHERE grade = 'VIP';
```

**해설**

`CREATE TABLE ... AS SELECT`(CTAS)는 조회 결과로 새 테이블을 만듭니다. 컬럼 타입은 결과에서 유추되며 PK, 제약조건, 인덱스는 복사되지 않습니다.

**실행 후 확인 쿼리 결과** (2행)

확인 쿼리:
```sql
SELECT * FROM vip_customers ORDER BY customer_id;
```

| customer_id | name |
|---|---|
| 4 | 최유나 |
| 10 | 윤서아 |

---

### 문제 81. CREATE TABLE (제약조건)

**문제**  
다음 구조의 `notices` 테이블을 생성하시오.  
- notice_id: INTEGER, 기본키  
- title: TEXT, NOT NULL  
- content: TEXT  
- created_at: TEXT

**정답**

```sql
CREATE TABLE notices (
  notice_id  INTEGER PRIMARY KEY,
  title      TEXT NOT NULL,
  content    TEXT,
  created_at TEXT
);
```

**해설**

`PRIMARY KEY`는 행을 유일하게 식별하며(NOT NULL + UNIQUE), `NOT NULL`은 빈 값을 막습니다. 그 밖에 `UNIQUE`, `DEFAULT`, `CHECK`, `FOREIGN KEY` 제약조건이 있습니다.

**실행 후 확인 쿼리 결과** (4행)

확인 쿼리:
```sql
SELECT name, type, "notnull" AS not_null, pk FROM pragma_table_info('notices') ORDER BY cid;
```

| name | type | not_null | pk |
|---|---|---|---|
| notice_id | INTEGER | 0 | 1 |
| title | TEXT | 1 | 0 |
| content | TEXT | 0 | 0 |
| created_at | TEXT | 0 | 0 |

---

### 문제 82. ALTER TABLE

**문제**  
`employees` 테이블에 TEXT 타입의 `phone` 컬럼을 추가하시오.

**정답**

```sql
ALTER TABLE employees ADD COLUMN phone TEXT;
```

**해설**

`ALTER TABLE ... ADD COLUMN`으로 기존 테이블에 컬럼을 추가합니다. 기존 행의 새 컬럼 값은 NULL(또는 DEFAULT)입니다.

**실행 후 확인 쿼리 결과** (8행)

확인 쿼리:
```sql
SELECT name, type FROM pragma_table_info('employees') ORDER BY cid;
```

| name | type |
|---|---|
| emp_id | INTEGER |
| emp_name | TEXT |
| dept_id | INTEGER |
| job_title | TEXT |
| salary | INTEGER |
| hire_date | TEXT |
| manager_id | INTEGER |
| phone | TEXT |

---

### 문제 83. CREATE VIEW

**문제**  
직원 이름과 부서명을 보여 주는 뷰 `v_emp_dept`를 만드시오(부서가 있는 직원만, 컬럼: emp_name, dept_name).

**정답**

```sql
CREATE VIEW v_emp_dept AS
SELECT e.emp_name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;
```

**해설**

뷰는 저장된 SELECT문으로, 복잡한 조인을 숨기고 재사용하게 해 줍니다. 데이터를 복사하지 않으며 조회할 때마다 원본 테이블을 읽습니다.

**실행 후 확인 쿼리 결과** (총 18행 중 8행 표시)

확인 쿼리:
```sql
SELECT * FROM v_emp_dept ORDER BY emp_name;
```

| emp_name | dept_name |
|---|---|
| 강영업 | 영업팀 |
| 권기획 | 기획팀 |
| 문마케 | 마케팅팀 |
| 박서버 | 개발팀 |
| 배마케 | 마케팅팀 |
| 서영업 | 영업팀 |
| 신기획 | 기획팀 |
| 오영업 | 영업팀 |

---

### 문제 84. CREATE INDEX

**문제**  
`orders` 테이블의 `customer_id` 컬럼에 `idx_orders_customer`라는 이름의 인덱스를 생성하시오.

**정답**

```sql
CREATE INDEX idx_orders_customer ON orders(customer_id);
```

**해설**

인덱스는 WHERE/JOIN에 자주 쓰이는 컬럼의 검색 속도를 높이지만, 쓰기(INSERT/UPDATE/DELETE) 비용과 저장 공간이 늘어납니다. 외래키 컬럼에는 보통 인덱스를 만듭니다.

**실행 후 확인 쿼리 결과** (1행)

확인 쿼리:
```sql
SELECT name, tbl_name FROM sqlite_master WHERE type = 'index' AND name = 'idx_orders_customer';
```

| name | tbl_name |
|---|---|
| idx_orders_customer | orders |

---

### 문제 85. 가장 큰 주문

**문제**  
주문 합계 금액이 가장 큰 주문의 주문번호와 합계를 구하시오. 합계 별칭은 `total`입니다.  
(컬럼: order_id, total)

**정답**

```sql
SELECT order_id, SUM(quantity * unit_price) AS total
FROM order_items
GROUP BY order_id
ORDER BY total DESC
LIMIT 1;
```

**해설**

집계 결과를 기준으로 정렬한 뒤 LIMIT 1로 최댓값을 가진 행을 가져옵니다. 동점을 모두 구해야 한다면 서브쿼리나 윈도 함수를 사용해야 합니다.

**실행 결과** (1행)

| order_id | total |
|---|---|
| 10 | 578000 |

---

### 문제 86. 등급별 매출

**문제**  
취소 주문을 제외하고 고객 등급별 총 구매금액을 내림차순으로 구하시오. 별칭은 `total`입니다.  
(컬럼: grade, total)

**정답**

```sql
SELECT c.grade, SUM(oi.quantity * oi.unit_price) AS total
FROM customers c
JOIN orders o       ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status <> 'CANCELLED'
GROUP BY c.grade
ORDER BY total DESC;
```

**해설**

고객 속성(grade)으로 그룹화하려면 customers까지 조인해야 합니다.

**실행 결과** (4행)

| grade | total |
|---|---|
| VIP | 2127000 |
| GOLD | 1378000 |
| SILVER | 685000 |
| BRONZE | 194000 |

---

### 문제 87. 도시별 매출

**문제**  
취소 주문을 제외하고 고객 거주 도시별 총 구매금액을 내림차순으로 구하시오. 별칭은 `total`입니다.  
(컬럼: city, total)

**정답**

```sql
SELECT c.city, SUM(oi.quantity * oi.unit_price) AS total
FROM customers c
JOIN orders o       ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status <> 'CANCELLED'
GROUP BY c.city
ORDER BY total DESC;
```

**해설**

앞 문제와 같은 구조에서 그룹 기준만 city로 바뀝니다. 같은 JOIN 골격을 재사용하는 연습입니다.

**실행 결과** (5행)

| city | total |
|---|---|
| 서울 | 1575000 |
| 대구 | 1498000 |
| 부산 | 951000 |
| 인천 | 208000 |
| 대전 | 152000 |

---

### 문제 88. 카테고리별 매출

**문제**  
취소 주문을 제외하고 상품 카테고리별 총 매출을 내림차순으로 구하시오. 별칭은 `revenue`입니다.  
(컬럼: category, revenue)

**정답**

```sql
SELECT p.category, SUM(oi.quantity * oi.unit_price) AS revenue
FROM order_items oi
JOIN orders o   ON oi.order_id = o.order_id
JOIN products p ON oi.product_id = p.product_id
WHERE o.status <> 'CANCELLED'
GROUP BY p.category
ORDER BY revenue DESC;
```

**해설**

주문 상태는 orders에, 카테고리는 products에 있으므로 order_items를 중심으로 양쪽을 조인합니다.

**실행 결과** (4행)

| category | revenue |
|---|---|
| 전자기기 | 2371000 |
| 가구 | 1140000 |
| 도서 | 567000 |
| 액세서리 | 306000 |

---

### 문제 89. 월별 매출

**문제**  
취소 주문을 제외하고 월별(`YYYY-MM`) 매출 합계를 월 오름차순으로 구하시오. 별칭은 `ym`, `revenue`입니다.  
(컬럼: ym, revenue)

**정답**

```sql
SELECT strftime('%Y-%m', o.order_date) AS ym,
       SUM(oi.quantity * oi.unit_price) AS revenue
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
WHERE o.status <> 'CANCELLED'
GROUP BY ym
ORDER BY ym;
```

**해설**

날짜 가공 + 조인 + 집계를 결합한 대표적인 리포트 쿼리입니다. 이 결과는 고급 문제(누적합, 전월 대비)의 기반이 됩니다.

**실행 결과** (총 12행 중 8행 표시)

| ym | revenue |
|---|---|
| 2024-01 | 119000 |
| 2024-02 | 517000 |
| 2024-03 | 145000 |
| 2024-04 | 216000 |
| 2024-05 | 673000 |
| 2024-06 | 141000 |
| 2024-07 | 378000 |
| 2024-08 | 301000 |

---

### 문제 90. LEFT JOIN + 집계 (0 포함)

**문제**  
모든 부서(직원이 없는 부서 포함)의 부서명, 직원 수, 급여 합계를 dept_id 순으로 구하시오. 직원이 없는 부서는 직원 수 0, 급여 합계 0으로 표시합니다. 별칭은 `emp_cnt`, `total_salary`입니다.  
(컬럼: dept_name, emp_cnt, total_salary)

**정답**

```sql
SELECT d.dept_name,
       COUNT(e.emp_id) AS emp_cnt,
       COALESCE(SUM(e.salary), 0) AS total_salary
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_id, d.dept_name
ORDER BY d.dept_id;
```

**해설**

`COUNT(*)`를 쓰면 짝이 없는 부서도 1로 세어지는 함정이 있습니다. `COUNT(e.emp_id)`는 NULL을 세지 않아 0이 됩니다. SUM은 대상이 없으면 NULL이므로 COALESCE로 0 처리합니다.

**실행 결과** (6행)

| dept_name | emp_cnt | total_salary |
|---|---|---|
| 개발팀 | 6 | 34200000 |
| 영업팀 | 4 | 20900000 |
| 인사팀 | 2 | 10700000 |
| 마케팅팀 | 3 | 16100000 |
| 기획팀 | 3 | 17300000 |
| 법무팀 | 0 | 0 |

---

## 고급

### 문제 91. ROW_NUMBER

**문제**  
부서별(부서 NULL 제외)로 급여가 높은 순서대로 순번을 매기시오. 급여가 같으면 emp_id가 작은 직원이 먼저입니다. dept_id, 순번 순으로 정렬합니다. 순번 별칭은 `rn`입니다.  
(컬럼: dept_id, emp_name, salary, rn)

**정답**

```sql
SELECT dept_id, emp_name, salary,
       ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC, emp_id) AS rn
FROM employees
WHERE dept_id IS NOT NULL
ORDER BY dept_id, rn;
```

**해설**

윈도 함수는 행을 합치지 않고 각 행 옆에 계산 결과를 붙입니다. `PARTITION BY`는 그룹 나누기, `OVER 안의 ORDER BY`는 그룹 내 정렬 기준입니다. `ROW_NUMBER`는 동점이어도 항상 서로 다른 번호를 부여합니다.

**실행 결과** (총 18행 중 8행 표시)

| dept_id | emp_name | salary | rn |
|---|---|---|---|
| 1 | 이개발 | 8500000 | 1 |
| 1 | 박서버 | 6500000 | 2 |
| 1 | 최프론 | 5200000 | 3 |
| 1 | 홍개발 | 5200000 | 4 |
| 1 | 정백엔 | 5000000 | 5 |
| 1 | 한신입 | 3800000 | 6 |
| 2 | 오영업 | 7800000 | 1 |
| 2 | 서영업 | 4800000 | 2 |

---

### 문제 92. RANK / DENSE_RANK

**문제**  
전체 직원의 급여 순위를 `RANK`(동점이면 같은 순위, 다음 순위는 건너뜀)로 구하시오. 순위, emp_id 순으로 정렬합니다. 별칭은 `rnk`입니다.  
(컬럼: emp_name, salary, rnk)

**정답**

```sql
SELECT emp_name, salary,
       RANK() OVER (ORDER BY salary DESC) AS rnk
FROM employees
ORDER BY rnk, emp_id;
```

**해설**

`RANK`: 1,2,2,4 처럼 동점 뒤 순위를 건너뜁니다. `DENSE_RANK`: 1,2,2,3 처럼 건너뛰지 않습니다. `ROW_NUMBER`: 1,2,3,4 로 항상 유일합니다. 최프론·홍개발(5,200,000)이 같은 순위가 됩니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_name | salary | rnk |
|---|---|---|
| 김대표 | 12000000 | 1 |
| 이개발 | 8500000 | 2 |
| 오영업 | 7800000 | 3 |
| 신기획 | 7600000 | 4 |
| 장마케 | 7500000 | 5 |
| 임인사 | 7200000 | 6 |
| 박서버 | 6500000 | 7 |
| 권기획 | 5800000 | 8 |

---

### 문제 93. 부서별 최고 급여자

**문제**  
각 부서(부서 NULL 제외)에서 급여가 가장 높은 직원의 이름과 급여를 dept_id 순으로 구하시오.  
(컬럼: dept_id, emp_name, salary)

**정답**

```sql
WITH ranked AS (
  SELECT dept_id, emp_name, salary,
         ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rn
  FROM employees
  WHERE dept_id IS NOT NULL
)
SELECT dept_id, emp_name, salary
FROM ranked
WHERE rn = 1
ORDER BY dept_id;
```

**해설**

**그룹별 Top-1** 패턴입니다. 윈도 함수 결과는 같은 SELECT의 WHERE에서 쓸 수 없으므로, CTE(WITH)나 서브쿼리로 감싼 뒤 바깥에서 `rn = 1`로 필터링합니다. 각 부서의 최고 급여가 유일해서 `ROW_NUMBER`로 충분합니다.

**실행 결과** (5행)

| dept_id | emp_name | salary |
|---|---|---|
| 1 | 이개발 | 8500000 |
| 2 | 오영업 | 7800000 |
| 3 | 임인사 | 7200000 |
| 4 | 장마케 | 7500000 |
| 5 | 신기획 | 7600000 |

---

### 문제 94. LAG (전월 대비)

**문제**  
취소 주문을 제외한 월별 매출과 전월 매출, 전월 대비 증감액을 구하시오. 첫 달의 전월 값과 증감액은 NULL입니다. 월 오름차순으로 정렬하고, 별칭은 `revenue`, `prev_revenue`, `diff`입니다.  
(컬럼: ym, revenue, prev_revenue, diff)

**정답**

```sql
WITH monthly AS (
  SELECT strftime('%Y-%m', o.order_date) AS ym,
         SUM(oi.quantity * oi.unit_price) AS revenue
  FROM orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  WHERE o.status <> 'CANCELLED'
  GROUP BY ym
)
SELECT ym, revenue,
       LAG(revenue) OVER (ORDER BY ym) AS prev_revenue,
       revenue - LAG(revenue) OVER (ORDER BY ym) AS diff
FROM monthly
ORDER BY ym;
```

**해설**

`LAG(컬럼, n)`은 n행 앞(기본 1)의 값을, `LEAD`는 n행 뒤의 값을 가져옵니다. 이전 행이 없으면 NULL이므로 첫 달의 diff도 NULL입니다. 먼저 월별 집계를 CTE로 만든 뒤 윈도 함수를 적용하는 2단계 구조에 익숙해지세요.

**실행 결과** (총 12행 중 8행 표시)

| ym | revenue | prev_revenue | diff |
|---|---|---|---|
| 2024-01 | 119000 | NULL | NULL |
| 2024-02 | 517000 | 119000 | 398000 |
| 2024-03 | 145000 | 517000 | -372000 |
| 2024-04 | 216000 | 145000 | 71000 |
| 2024-05 | 673000 | 216000 | 457000 |
| 2024-06 | 141000 | 673000 | -532000 |
| 2024-07 | 378000 | 141000 | 237000 |
| 2024-08 | 301000 | 378000 | -77000 |

---

### 문제 95. 누적 합계

**문제**  
월별 매출(취소 제외)과 해당 월까지의 누적 매출을 구하시오. 월 오름차순, 별칭은 `revenue`, `running_total`입니다.  
(컬럼: ym, revenue, running_total)

**정답**

```sql
WITH monthly AS (
  SELECT strftime('%Y-%m', o.order_date) AS ym,
         SUM(oi.quantity * oi.unit_price) AS revenue
  FROM orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  WHERE o.status <> 'CANCELLED'
  GROUP BY ym
)
SELECT ym, revenue,
       SUM(revenue) OVER (ORDER BY ym) AS running_total
FROM monthly
ORDER BY ym;
```

**해설**

집계 함수에 `OVER (ORDER BY ...)`를 붙이면 **처음부터 현재 행까지의 누적값**이 됩니다(기본 프레임: `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`).

**실행 결과** (총 12행 중 8행 표시)

| ym | revenue | running_total |
|---|---|---|
| 2024-01 | 119000 | 119000 |
| 2024-02 | 517000 | 636000 |
| 2024-03 | 145000 | 781000 |
| 2024-04 | 216000 | 997000 |
| 2024-05 | 673000 | 1670000 |
| 2024-06 | 141000 | 1811000 |
| 2024-07 | 378000 | 2189000 |
| 2024-08 | 301000 | 2490000 |

---

### 문제 96. 이동 평균 (윈도 프레임)

**문제**  
월별 매출(취소 제외)과 현재 월을 포함한 최근 3개월 이동 평균(정수 반올림)을 구하시오. 3개월이 안 되는 초반에는 있는 데이터만으로 평균을 냅니다. 월 오름차순, 별칭은 `revenue`, `moving_avg`입니다.  
(컬럼: ym, revenue, moving_avg)

**정답**

```sql
WITH monthly AS (
  SELECT strftime('%Y-%m', o.order_date) AS ym,
         SUM(oi.quantity * oi.unit_price) AS revenue
  FROM orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  WHERE o.status <> 'CANCELLED'
  GROUP BY ym
)
SELECT ym, revenue,
       ROUND(AVG(revenue) OVER (
         ORDER BY ym ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       )) AS moving_avg
FROM monthly
ORDER BY ym;
```

**해설**

`ROWS BETWEEN 2 PRECEDING AND CURRENT ROW`는 현재 행과 앞의 2행, 최대 3행을 윈도 프레임으로 지정합니다. 프레임을 직접 지정하면 이동 평균·이동 합계를 구할 수 있습니다.

**실행 결과** (총 12행 중 8행 표시)

| ym | revenue | moving_avg |
|---|---|---|
| 2024-01 | 119000 | 119000.0 |
| 2024-02 | 517000 | 318000.0 |
| 2024-03 | 145000 | 260333.0 |
| 2024-04 | 216000 | 292667.0 |
| 2024-05 | 673000 | 344667.0 |
| 2024-06 | 141000 | 343333.0 |
| 2024-07 | 378000 | 397333.0 |
| 2024-08 | 301000 | 273333.0 |

---

### 문제 97. NTILE (분위수)

**문제**  
상품을 가격 오름차순(같으면 product_id 순)으로 정렬해 4개 구간으로 나눈 구간 번호를 구하시오. product_id 순서가 아닌 가격 순서로 정렬합니다. 별칭은 `quartile`입니다.  
(컬럼: product_name, price, quartile)

**정답**

```sql
SELECT product_name, price,
       NTILE(4) OVER (ORDER BY price, product_id) AS quartile
FROM products
ORDER BY price, product_id;
```

**해설**

`NTILE(n)`은 정렬된 행을 n개 그룹으로 거의 균등하게 나눕니다. 15행이면 4, 4, 4, 3개씩으로 나뉘며 남는 행은 앞 그룹에 하나씩 배분됩니다.

**실행 결과** (총 15행 중 8행 표시)

| product_name | price | quartile |
|---|---|---|
| 마우스 패드 | 9000 | 1 |
| USB 허브 | 19000 | 1 |
| 무선 마우스 | 25000 | 1 |
| SQL 입문서 | 28000 | 1 |
| 알고리즘 문제집 | 30000 | 2 |
| 파이썬 완벽 가이드 | 32000 | 2 |
| 노트북 거치대 | 35000 | 2 |
| 자바 프로그래밍 | 35000 | 2 |

---

### 문제 98. 재귀 CTE (숫자 생성)

**문제**  
재귀 CTE를 사용하여 1부터 10까지의 숫자를 생성하시오.  
(컬럼: n)

**정답**

```sql
WITH RECURSIVE seq(n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1 FROM seq WHERE n < 10
)
SELECT n FROM seq;
```

**해설**

재귀 CTE는 ① 시작 행(anchor) ② `UNION ALL` ③ 자기 자신을 참조하는 재귀 부분으로 구성됩니다. 재귀 부분이 새 행을 만들지 못할 때(`n < 10`이 거짓) 종료되므로 **종료 조건**이 필수입니다.

**실행 결과** (총 10행 중 8행 표시)

| n |
|---|
| 1 |
| 2 |
| 3 |
| 4 |
| 5 |
| 6 |
| 7 |
| 8 |

---

### 문제 99. 재귀 CTE (조직도 레벨)

**문제**  
최상위자(manager_id가 NULL)를 레벨 1로 하여 모든 직원의 조직 레벨을 구하시오. 레벨, emp_id 순으로 정렬합니다. 별칭은 `level`입니다.  
(컬럼: emp_id, emp_name, level)

**정답**

```sql
WITH RECURSIVE org AS (
  SELECT emp_id, emp_name, 1 AS level
  FROM employees
  WHERE manager_id IS NULL
  UNION ALL
  SELECT e.emp_id, e.emp_name, o.level + 1
  FROM employees e
  JOIN org o ON e.manager_id = o.emp_id
)
SELECT emp_id, emp_name, level
FROM org
ORDER BY level, emp_id;
```

**해설**

자기 참조(계층) 테이블을 탐색하는 대표적인 패턴입니다. 앵커에서 대표(김대표)를 레벨 1로 시작하고, 재귀 부분에서 '상사가 이미 찾은 직원'인 부하 직원을 레벨+1로 이어 붙입니다. 레벨 4는 한신입(상사 체인: 박서버 → 이개발 → 김대표)과 황기획(상사 체인: 권기획 → 신기획 → 김대표)입니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_id | emp_name | level |
|---|---|---|
| 1 | 김대표 | 1 |
| 2 | 이개발 | 2 |
| 7 | 오영업 | 2 |
| 11 | 임인사 | 2 |
| 13 | 장마케 | 2 |
| 16 | 신기획 | 2 |
| 3 | 박서버 | 3 |
| 4 | 최프론 | 3 |

---

### 문제 100. 재귀 CTE (경로 문자열)

**문제**  
모든 직원의 조직 경로를 `김대표 > 이개발 > 박서버` 형태의 문자열로 구하시오. emp_id 순으로 정렬합니다. 별칭은 `path`입니다.  
(컬럼: emp_id, path)

**정답**

```sql
WITH RECURSIVE org AS (
  SELECT emp_id, emp_name AS path
  FROM employees
  WHERE manager_id IS NULL
  UNION ALL
  SELECT e.emp_id, o.path || ' > ' || e.emp_name
  FROM employees e
  JOIN org o ON e.manager_id = o.emp_id
)
SELECT emp_id, path
FROM org
ORDER BY emp_id;
```

**해설**

재귀 단계마다 상사의 경로(`o.path`)에 `' > ' || 자기이름`을 이어 붙여 루트부터의 경로를 누적합니다. 카테고리·댓글·조직도 같은 트리 구조에서 자주 쓰입니다.

**실행 결과** (총 20행 중 8행 표시)

| emp_id | path |
|---|---|
| 1 | 김대표 |
| 2 | 김대표 > 이개발 |
| 3 | 김대표 > 이개발 > 박서버 |
| 4 | 김대표 > 이개발 > 최프론 |
| 5 | 김대표 > 이개발 > 정백엔 |
| 6 | 김대표 > 이개발 > 박서버 > 한신입 |
| 7 | 김대표 > 오영업 |
| 8 | 김대표 > 오영업 > 서영업 |

---

### 문제 101. 고객별 최근 주문

**문제**  
주문 이력이 있는 각 고객의 가장 최근 주문(취소 포함)의 주문번호와 주문일을 customer_id 순으로 구하시오. 같은 날 주문은 없습니다.  
(컬럼: name, order_id, order_date)

**정답**

```sql
WITH ranked AS (
  SELECT c.customer_id, c.name, o.order_id, o.order_date,
         ROW_NUMBER() OVER (
           PARTITION BY c.customer_id ORDER BY o.order_date DESC
         ) AS rn
  FROM customers c
  JOIN orders o ON c.customer_id = o.customer_id
)
SELECT name, order_id, order_date
FROM ranked
WHERE rn = 1
ORDER BY customer_id;
```

**해설**

'그룹별 최신 1건' 패턴입니다. 파티션을 고객으로 하고 주문일 내림차순으로 순번을 매긴 뒤 `rn = 1`만 남깁니다. `MAX(order_date)`로 그룹화하면 order_id를 함께 가져오기 어려워 윈도 함수가 유리합니다.

**실행 결과** (총 12행 중 8행 표시)

| name | order_id | order_date |
|---|---|---|
| 김민수 | 22 | 2024-11-05 |
| 이서연 | 23 | 2024-11-22 |
| 박지훈 | 5 | 2024-03-03 |
| 최유나 | 29 | 2024-12-28 |
| 정우진 | 26 | 2024-12-15 |
| 한소희 | 20 | 2024-10-04 |
| 서지민 | 28 | 2024-12-24 |
| 강하늘 | 25 | 2024-12-10 |

---

### 문제 102. 전체 대비 비율

**문제**  
취소 주문을 제외한 고객별 총 구매금액과 전체 구매금액 대비 비율(%, 소수 첫째 자리 반올림)을 구하시오. 금액 큰 순, 같으면 name 순으로 정렬합니다. 별칭은 `total`, `pct`입니다.  
(컬럼: name, total, pct)

**정답**

```sql
WITH cust AS (
  SELECT c.name, SUM(oi.quantity * oi.unit_price) AS total
  FROM customers c
  JOIN orders o       ON c.customer_id = o.customer_id
  JOIN order_items oi ON o.order_id = oi.order_id
  WHERE o.status <> 'CANCELLED'
  GROUP BY c.customer_id, c.name
)
SELECT name, total,
       ROUND(100.0 * total / SUM(total) OVER (), 1) AS pct
FROM cust
ORDER BY total DESC, name;
```

**해설**

`SUM(total) OVER ()`는 파티션 없이 **전체 합계**를 모든 행에 붙입니다. 이를 이용하면 서브쿼리 없이 비율을 계산할 수 있습니다. `100.0`을 곱해 정수 나눗셈을 피하는 점도 중요합니다.

**실행 결과** (총 11행 중 8행 표시)

| name | total | pct |
|---|---|---|
| 최유나 | 1423000 | 32.5 |
| 윤서아 | 704000 | 16.1 |
| 김민수 | 658000 | 15.0 |
| 서지민 | 479000 | 10.9 |
| 배수빈 | 241000 | 5.5 |
| 이서연 | 231000 | 5.3 |
| 한소희 | 213000 | 4.9 |
| 강하늘 | 152000 | 3.5 |

---

### 문제 103. 카테고리별 최고가 상품

**문제**  
카테고리별로 가격이 가장 비싼 상품의 이름과 가격을 카테고리 이름 순으로 구하시오.  
(컬럼: category, product_name, price)

**정답**

```sql
SELECT category, product_name, price
FROM (
  SELECT category, product_name, price,
         RANK() OVER (PARTITION BY category ORDER BY price DESC) AS rnk
  FROM products
)
WHERE rnk = 1
ORDER BY category;
```

**해설**

동점 최고가를 모두 포함하려면 `ROW_NUMBER`보다 `RANK`가 적합합니다. 상관 서브쿼리 `WHERE price = (SELECT MAX(price) FROM products WHERE category = p.category)`로도 풀 수 있으니 두 방식을 비교해 보세요.

**실행 결과** (4행)

| category | product_name | price |
|---|---|---|
| 가구 | 높이조절 책상 | 259000 |
| 도서 | 자바 프로그래밍 | 35000 |
| 액세서리 | 모니터 암 | 59000 |
| 전자기기 | 27인치 모니터 | 289000 |

---

### 문제 104. 직전 주문과의 간격

**문제**  
취소 주문을 제외하고, 고객별로 직전 주문과의 간격(일)을 구하시오. 직전 주문이 없는 첫 주문은 제외하며, customer_id, 주문일 순으로 정렬합니다. 별칭은 `days_since_prev`입니다.  
(컬럼: customer_id, order_id, order_date, days_since_prev)

**정답**

```sql
WITH t AS (
  SELECT customer_id, order_id, order_date,
         CAST(julianday(order_date) - julianday(
           LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)
         ) AS INTEGER) AS days_since_prev
  FROM orders
  WHERE status <> 'CANCELLED'
)
SELECT customer_id, order_id, order_date, days_since_prev
FROM t
WHERE days_since_prev IS NOT NULL
ORDER BY customer_id, order_date;
```

**해설**

`LAG`에 `PARTITION BY customer_id`를 주면 고객별로 직전 주문일을 가져옵니다. `julianday`는 날짜를 일 단위 숫자로 바꿔 차이를 계산하게 해 줍니다. 첫 주문은 LAG가 NULL이라 필터링으로 제외합니다.

**실행 결과** (총 17행 중 8행 표시)

| customer_id | order_id | order_date | days_since_prev |
|---|---|---|---|
| 1 | 3 | 2024-02-14 | 35 |
| 1 | 13 | 2024-06-28 | 135 |
| 1 | 22 | 2024-11-05 | 130 |
| 2 | 11 | 2024-05-21 | 117 |
| 2 | 23 | 2024-11-22 | 185 |
| 4 | 10 | 2024-05-02 | 72 |
| 4 | 19 | 2024-09-20 | 141 |
| 4 | 29 | 2024-12-28 | 99 |

---

### 문제 105. 피벗 (등급 × 상태)

**문제**  
고객 등급별로 주문 상태(`PAID`, `SHIPPED`, `DELIVERED`, `CANCELLED`)별 주문 건수를 가로로 펼쳐 보이시오. 등급 오름차순, 별칭은 `paid`, `shipped`, `delivered`, `cancelled`입니다. 주문이 없는 등급은 나오지 않아도 됩니다.  
(컬럼: grade, paid, shipped, delivered, cancelled)

**정답**

```sql
SELECT c.grade,
  SUM(CASE WHEN o.status = 'PAID'      THEN 1 ELSE 0 END) AS paid,
  SUM(CASE WHEN o.status = 'SHIPPED'   THEN 1 ELSE 0 END) AS shipped,
  SUM(CASE WHEN o.status = 'DELIVERED' THEN 1 ELSE 0 END) AS delivered,
  SUM(CASE WHEN o.status = 'CANCELLED' THEN 1 ELSE 0 END) AS cancelled
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.grade
ORDER BY c.grade;
```

**해설**

행으로 있던 상태 값을 열로 펼치는 피벗(교차 집계)입니다. `GROUP BY`(행 기준) + `SUM(CASE ...)`(열 기준)의 조합이 표준적인 방법입니다.

**실행 결과** (4행)

| grade | paid | shipped | delivered | cancelled |
|---|---|---|---|---|
| BRONZE | 1 | 0 | 2 | 1 |
| GOLD | 2 | 1 | 6 | 0 |
| SILVER | 3 | 1 | 4 | 1 |
| VIP | 2 | 1 | 5 | 0 |

---

### 문제 106. 함께 구매된 상품 쌍

**문제**  
같은 주문에 함께 담긴 서로 다른 두 상품의 쌍 중, 2개 이상의 주문에서 함께 등장한 쌍과 그 주문 수를 구하시오. 같은 쌍이 (A,B), (B,A)로 중복되지 않게 하고, 주문 수 내림차순, product1 오름차순, product2 오름차순으로 정렬합니다. 별칭은 `product1`, `product2`, `order_cnt`입니다.  
(컬럼: product1, product2, order_cnt)

**정답**

```sql
SELECT p1.product_name AS product1, p2.product_name AS product2,
       COUNT(*) AS order_cnt
FROM order_items a
JOIN order_items b ON a.order_id = b.order_id AND a.product_id < b.product_id
JOIN products p1 ON a.product_id = p1.product_id
JOIN products p2 ON b.product_id = p2.product_id
GROUP BY a.product_id, b.product_id, p1.product_name, p2.product_name
HAVING COUNT(*) >= 2
ORDER BY order_cnt DESC, product1, product2;
```

**해설**

order_items를 같은 주문번호로 셀프 조인하고 `a.product_id < b.product_id`로 순서쌍 중복을 제거합니다. 장바구니 분석(연관 규칙)의 기초 쿼리입니다.

**실행 결과** (6행)

| product1 | product2 | order_cnt |
|---|---|---|
| SQL 입문서 | 파이썬 완벽 가이드 | 4 |
| 파이썬 완벽 가이드 | 자바 프로그래밍 | 3 |
| SQL 입문서 | 자바 프로그래밍 | 2 |
| 무선 마우스 | USB 허브 | 2 |
| 무선 마우스 | 마우스 패드 | 2 |
| 사무용 의자 | LED 스탠드 | 2 |

---

### 문제 107. 관계 나눗셈 (NOT EXISTS)

**문제**  
모든 상품 카테고리(전자기기, 액세서리, 도서, 가구)의 상품을 각각 한 번 이상 구매한 고객의 이름을 구하시오(취소 주문 제외).  
(컬럼: name)

**정답**

```sql
SELECT c.name
FROM customers c
WHERE NOT EXISTS (
  SELECT 1 FROM (SELECT DISTINCT category FROM products) cat
  WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    JOIN order_items oi ON o.order_id = oi.order_id
    JOIN products p     ON oi.product_id = p.product_id
    WHERE o.customer_id = c.customer_id
      AND o.status <> 'CANCELLED'
      AND p.category = cat.category
  )
);
```

**해설**

'모든 ~를 만족하는' 조건은 **이중 NOT EXISTS**로 표현합니다: '고객이 구매하지 않은 카테고리가 하나도 없다'. 또는 `GROUP BY c.customer_id HAVING COUNT(DISTINCT p.category) = (SELECT COUNT(DISTINCT category) FROM products)`로도 풀 수 있습니다.

**실행 결과** (1행)

| name |
|---|
| 윤서아 |

---

### 문제 108. 중앙값

**문제**  
전체 직원 급여의 중앙값을 구하시오(짝수 개이면 가운데 두 값의 평균). 별칭은 `median_salary`입니다.  
(컬럼: median_salary)

**정답**

```sql
WITH t AS (
  SELECT salary,
         ROW_NUMBER() OVER (ORDER BY salary) AS rn,
         COUNT(*) OVER () AS cnt
  FROM employees
)
SELECT AVG(salary) AS median_salary
FROM t
WHERE rn IN ((cnt + 1) / 2, (cnt + 2) / 2);
```

**해설**

순번(rn)과 전체 건수(cnt)를 구한 뒤, 홀수 개이면 가운데 1행, 짝수 개이면 가운데 2행을 골라 평균을 냅니다. `(cnt+1)/2`와 `(cnt+2)/2`가 정수 나눗셈으로 홀수일 땐 같은 값, 짝수일 땐 연속한 두 값이 됩니다. 대부분의 DB가 MEDIAN 함수를 기본 제공하지 않아 자주 출제되는 문제입니다.

**실행 결과** (1행)

| median_salary |
|---|
| 5200000.0 |

---

### 문제 109. 카테고리별 매출 상위 2개 상품

**문제**  
취소 주문을 제외하고, 카테고리별로 매출액이 높은 상위 2개 상품을 구하시오. 동점은 없다고 가정하고 `ROW_NUMBER`를 사용합니다. category, 순위 순으로 정렬하며 별칭은 `revenue`, `rn`입니다.  
(컬럼: category, product_name, revenue, rn)

**정답**

```sql
WITH sales AS (
  SELECT p.category, p.product_name,
         SUM(oi.quantity * oi.unit_price) AS revenue
  FROM order_items oi
  JOIN orders o   ON oi.order_id = o.order_id
  JOIN products p ON oi.product_id = p.product_id
  WHERE o.status <> 'CANCELLED'
  GROUP BY p.product_id, p.category, p.product_name
), ranked AS (
  SELECT category, product_name, revenue,
         ROW_NUMBER() OVER (PARTITION BY category ORDER BY revenue DESC) AS rn
  FROM sales
)
SELECT category, product_name, revenue, rn
FROM ranked
WHERE rn <= 2
ORDER BY category, rn;
```

**해설**

CTE를 여러 개 이어(`WITH a AS (...), b AS (...)`) 단계별로 가공하는 방식입니다. ① 상품별 매출 집계 ② 카테고리 내 순위 부여 ③ 상위 N 필터. 복잡한 쿼리를 단계로 나누면 읽기 쉽고 디버깅하기 쉽습니다.

**실행 결과** (8행)

| category | product_name | revenue | rn |
|---|---|---|---|
| 가구 | 사무용 의자 | 945000 | 1 |
| 가구 | LED 스탠드 | 195000 | 2 |
| 도서 | 파이썬 완벽 가이드 | 224000 | 1 |
| 도서 | 자바 프로그래밍 | 175000 | 2 |
| 액세서리 | 노트북 거치대 | 175000 | 1 |
| 액세서리 | 마우스 패드 | 72000 | 2 |
| 전자기기 | 27인치 모니터 | 1445000 | 1 |
| 전자기기 | 기계식 키보드 | 445000 | 2 |

---

### 문제 110. 누적 구매액이 처음 50만 원을 넘은 주문

**문제**  
취소 주문을 제외하고, 고객별로 주문일 순으로 구매 금액을 누적했을 때 누적액이 처음으로 500,000원 이상이 되는 주문의 고객번호, 주문번호, 주문일, 누적액을 customer_id 순으로 구하시오. 같은 날 주문은 없습니다. 누적액이 500,000원에 도달하지 못한 고객은 제외합니다. 별칭은 `running_total`입니다.  
(컬럼: customer_id, order_id, order_date, running_total)

**정답**

```sql
WITH order_total AS (
  SELECT o.customer_id, o.order_id, o.order_date,
         SUM(oi.quantity * oi.unit_price) AS total
  FROM orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  WHERE o.status <> 'CANCELLED'
  GROUP BY o.order_id, o.customer_id, o.order_date
), running AS (
  SELECT customer_id, order_id, order_date,
         SUM(total) OVER (
           PARTITION BY customer_id ORDER BY order_date
         ) AS running_total
  FROM order_total
), hit AS (
  SELECT *,
         ROW_NUMBER() OVER (
           PARTITION BY customer_id ORDER BY order_date
         ) AS rn
  FROM running
  WHERE running_total >= 500000
)
SELECT customer_id, order_id, order_date, running_total
FROM hit
WHERE rn = 1
ORDER BY customer_id;
```

**해설**

종합 문제입니다. ① 주문 단위 금액 집계 → ② 고객별 누적합(윈도 함수) → ③ 임계값을 넘긴 행 중 첫 번째만 선택(ROW_NUMBER). 마일리지 등급 승급 시점, 첫 목표 달성일 같은 분석에서 흔히 쓰이는 패턴입니다.

**실행 결과** (3행)

| customer_id | order_id | order_date | running_total |
|---|---|---|---|
| 1 | 22 | 2024-11-05 | 658000 |
| 4 | 10 | 2024-05-02 | 806000 |
| 10 | 14 | 2024-07-07 | 510000 |

---
