# [level 0] 주사위 게임 2 - 181930 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181930) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.07 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 02월 10일 11:34:05

### 문제 설명

<p>1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 <code>a</code>, <code>b</code>, <code>c</code>라고 했을 때 얻는 점수는 다음과 같습니다.</p>

<ul>
<li>세 숫자가 모두 다르다면 <code>a</code> + <code>b</code> + <code>c</code> 점을 얻습니다.</li>
<li>세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (<code>a</code> + <code>b</code> + <code>c</code>) × (<code>a</code><sup>2</sup> + <code>b</code><sup>2</sup> + <code>c</code><sup>2</sup> )점을 얻습니다.</li>
<li>세 숫자가 모두 같다면 (<code>a</code> + <code>b</code> + <code>c</code>) × (<code>a</code><sup>2</sup> + <code>b</code><sup>2</sup> + <code>c</code><sup>2</sup> ) × (<code>a</code><sup>3</sup> + <code>b</code><sup>3</sup> + <code>c</code><sup>3</sup> )점을 얻습니다.</li>
</ul>

<p>세 정수 <code>a</code>, <code>b</code>, <code>c</code>가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>a</code>, <code>b</code>, <code>c</code>는 1이상 6이하의 정수입니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>a</th>
<th>b</th>
<th>c</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>2</td>
<td>6</td>
<td>1</td>
<td>9</td>
</tr>
<tr>
<td>5</td>
<td>3</td>
<td>3</td>
<td>473</td>
</tr>
<tr>
<td>4</td>
<td>4</td>
<td>4</td>
<td>110592</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번에서 세 주사위 숫자가 모두 다르므로 2 + 6 + 1 = 9점을 얻습니다. 따라서 9를 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>예제 2번에서 두 주사위 숫자만 같으므로 (5 + 3 + 3) × (5<sup>2</sup> + 3<sup>2</sup> + 3<sup>2</sup> ) = 11 × 43 = 473점을 얻습니다. 따라서 473을 return 합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>예제 3번에서 세 주사위 숫자가 모두 같으므로 (4 + 4 + 4) × (4<sup>2</sup> + 4<sup>2</sup> + 4<sup>2</sup> ) × (4<sup>3</sup> + 4<sup>3</sup> + 4<sup>3</sup> ) = 12 × 48 × 192 = 110,592점을 얻습니다. 따라서 110592를 return 합니다.</li>
</ul>

---

## 💡 학습 노트: 주사위 게임 2 (Power & Conditionals)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Conditional_Branching`, `#Exponentiation_Operator`, `#Accumulated_Formulas`
- **문제의 본질**: 세 개의 변수 간의 동등 관계(Equality)를 판별하여 단계별로 확장되는 수학적 공식을 적용하기.

### 2. 작동 원리 및 설계 (Branching Strategy)
1. **변수 선언**: 각 단계에서 공통적으로 쓰이는 합계(Sum), 제곱의 합(Sum of Squares), 세제곱의 합(Sum of Cubes)을 미리 상수로 선언하여 코드 중복 제거.
2. **조건 우선순위**: 
   - 가장 까다로운 조건인 "모두 같음"(`a === b && b === c`)을 먼저 판별.
   - 이후 "두 개만 같음"(`a === b || b === c || a === c`)을 판별.
   - 나머지는 "모두 다름"으로 처리.

### 3. 수학적 공식 (Formulas)
- **Case 3 (All Same)**:
  $$(a + b + c) \cdot (a^2 + b^2 + c^2) \cdot (a^3 + b^3 + c^3)$$

### 4. 주요 기술 포인트
- **거듭제곱 연산자 (`**`)**: `Math.pow()` 대신 가독성이 뛰어난 지수 연산자를 사용하여 수식을 직관적으로 표현.
- **논리 연산자의 조합**: `&&`(AND)와 `||`(OR)를 적절히 배치하여 비교 횟수를 최적화함.

### 5. 깨달은 점
- **데이터 캐싱**: `sum1`, `sum2`, `sum3`를 루프나 조건문 밖에서 미리 계산해두는 것이 중복 연산을 방지하는 백엔드적 사고임을 다시 확인.
- **계층적 로직**: 조건의 범위를 가장 좁은 것(모두 같음)부터 넓은 것(모두 다름) 순으로 배치하는 것이 `if-else`문의 효율적인 설계 방식임을 학습함.

### 6. 참고 자료
- [MDN - 거듭제곱 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
