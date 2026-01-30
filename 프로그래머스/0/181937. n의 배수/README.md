# [level 0] n의 배수 - 181937 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181937) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 30일 17:42:43

### 문제 설명

<p>정수 <code>num</code>과 <code>n</code>이 매개 변수로 주어질 때, <code>num</code>이 <code>n</code>의 배수이면 1을 return <code>n</code>의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>num</code> ≤ 100</li>
<li>2 ≤ <code>n</code> ≤ 9</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>num</th>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>98</td>
<td>2</td>
<td>1</td>
</tr>
<tr>
<td>34</td>
<td>3</td>
<td>0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>98은 2의 배수이므로 1을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>32는 3의 배수가 아니므로 0을 return합니다.</li>
</ul>

---

## 💡 학습 노트: n의 배수 판별

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Modulo_Operator`, `#Arithmetic_Logic`, `#Ternary_Operator`
- **문제의 본질**: 산술 연산자 중 나머지 연산($\%$)을 활용하여 특정 수의 배수 관계($num \equiv 0 \pmod n$)를 증명하기.

### 2. 작동 원리 및 설계
1. **나머지 연산($\%$)**: `num`을 `n`으로 나누었을 때 남는 값을 계산함.
2. **배수의 정의**: 나머지가 $0$이라는 것은 `num`이 `n`에 의해 나누어떨어진다는 의미이며, 이는 곧 `num`이 `n`의 배수임을 뜻함.
3. **조건부 반환**:
   - `num % n === 0` → `true`인 경우 `1` 반환.
   - `num % n !== 0` → `false`인 경우 `0` 반환.

### 3. 주요 기술 포인트
- **삼항 연산자(Ternary Operator)**: `if...else` 문을 한 줄로 축약하여 코드의 가독성을 높이고, 함수형 프로그래밍에 가까운 간결한 표현을 지향함.
- **불리언 형변환(Truthiness)**: 자바스크립트에서 `0`은 `falsy`한 값임을 이해하고, 명시적인 비교 연산(`=== 0`)을 통해 논리적 명확성을 확보함.

### 4. 시행착오 및 깨달은 점
- **변수 활용의 중요성**: 하드코딩된 값(예: `2`) 대신 문제에서 주어진 변수(`n`)를 정확히 타겟팅해야 범용적인 로직 설계가 가능함을 확인함.
- **나머지 연산의 확장성**: 홀짝 판별 뿐만 아니라 주기성 계산, 배수 판별 등 다양한 알고리즘의 기초가 됨을 인지함.

### 5. 참고 자료
- [MDN - 나머지 연산자 (%)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Remainder)
- [MDN - 조건 연산자 (삼항 연산자)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
