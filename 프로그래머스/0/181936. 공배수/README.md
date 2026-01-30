# [level 0] 공배수 - 181936 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181936) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 30일 17:46:01

### 문제 설명

<p>정수 <code>number</code>와 <code>n</code>, <code>m</code>이 주어집니다. <code>number</code>가 <code>n</code>의 배수이면서 <code>m</code>의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>10 ≤ <code>number</code> ≤ 100</li>
<li>2 ≤ <code>n</code>, <code>m</code> &lt; 10</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>number</th>
<th>n</th>
<th>m</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>60</td>
<td>2</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>55</td>
<td>10</td>
<td>5</td>
<td>0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>60은 2의 배수이면서 3의 배수이기 때문에 1을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>55는 5의 배수이지만 10의 배수가 아니기 때문에 0을 return합니다.</li>
</ul>

---

## 💡 학습 노트: 공배수 판별 (Common Multiple)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Logical_AND_Operator`, `#Common_Multiple`, `#Optimization`
- **문제의 본질**: 정수 `number`가 두 개의 제수(`n`, `m`)에 대해 동시에 나누어떨어지는지(공배수 관계) 검증하기.

### 2. 작동 원리 및 설계
1. **조건 결합**: `number % n === 0`과 `number % m === 0`이라는 두 개의 독립적인 논리식을 생성.
2. **논리곱(AND) 연산**: `&&` 연산자를 사용하여 두 조건이 모두 `true`인 경우에만 전체 식을 `true`로 판단하도록 설계.
3. **결과 반환**: 삼항 연산자를 통해 `true`일 경우 `1`, `false`일 경우 `0`을 반환.

### 3. 주요 기술 포인트
- **논리 연산자(`&&`)의 효율성**: 중첩 `if`문을 사용하는 것보다 코드의 가로 길이를 줄이고 의도를 명확하게 전달함.
- **Short-circuit Evaluation**: 자바스크립트 엔진은 첫 번째 조건(`number % n === 0`)이 `false`이면 두 번째 조건은 확인하지 않고 바로 `false`를 반환하여 성능을 최적화함.

### 4. 시행착오 및 깨달은 점
- **가독성 향상**: 복잡한 조건 분기일수록 논리 연산자를 활용하여 Depth를 줄이는 것이 클린 코드 작성의 핵심임을 인지함.
- **타입 일관성**: 변수를 초기화할 때 최종 반환될 데이터 타입(숫자형)에 맞춰 선언하는 습관이 런타임 에러를 방지함을 깨달음.

### 5. 참고 자료
- [MDN - 논리 연산자 (Logical Operators)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [MDN - 삼항 조건 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
