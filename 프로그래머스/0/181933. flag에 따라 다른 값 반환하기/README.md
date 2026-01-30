# [level 0] flag에 따라 다른 값 반환하기 - 181933 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181933?language=javascript) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 30일 18:24:27

### 문제 설명

<p>두 정수 <code>a</code>, <code>b</code>와 boolean 변수 <code>flag</code>가 매개변수로 주어질 때, <code>flag</code>가 true면 <code>a</code> + <code>b</code>를 false면 <code>a</code> - <code>b</code>를 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>-1,000 ≤ <code>a</code>, <code>b</code> ≤ 1,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>a</th>
<th>b</th>
<th>flag</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>-4</td>
<td>7</td>
<td>true</td>
<td>3</td>
</tr>
<tr>
<td>-4</td>
<td>7</td>
<td>false</td>
<td>-11</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번에서 <code>flag</code>가 true이므로 <code>a</code> + <code>b</code> = (-4) + 7 = 3을 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>예제 2번에서 <code>flag</code>가 false이므로 <code>a</code> - <code>b</code> = (-4) - 7 = -11을 return 합니다.</li>
</ul>

---

## 💡 학습 노트: flag에 따라 다른 값 반환하기

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Boolean_Flag`, `#Conditional_Branching`, `#Ternary_Operator`
- **문제의 본질**: 불리언 타입의 매개변수(`flag`)를 판별하여 서로 다른 산술 연산($a+b$ 또는 $a-b$)을 동적으로 수행하기.

### 2. 작동 원리 및 설계
1. **조건 판별**: `flag` 변수의 진리값(Truthiness)을 확인.
2. **분기 처리**: 
   - `flag`가 `true`인 경우: 덧셈 연산 수행.
   - `flag`가 `false`인 경우: 뺄셈 연산 수행.
3. **결과 반환**: 연산된 최종값을 함수 외부로 전달.

### 3. 주요 기술 포인트
- **불리언 직접 참조**: `if (flag === true)` 대신 `if (flag)`를 사용하여 코드의 간결성 확보.
- **삼항 연산자 활용**: 단순한 이분법적 조건 분기 시 삼항 연산자를 사용하여 가독성과 생산성을 동시에 높임.

### 4. 시행착오 및 깨달은 점
- **플래그(Flag) 변수의 역할**: 프로그램의 상태를 제어하거나 특정 로직의 실행 여부를 결정하는 불리언 변수의 중요성을 이해함.
- **클린 코드(Clean Code)**: 불필요한 임시 변수(`answer`) 선언을 줄이고 즉시 `return`하는 방식이 메모리 효율과 가독성 측면에서 더 유리할 수 있음을 인지함.

### 5. 참고 자료
- [MDN - Boolean](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [MDN - Conditional (ternary) operator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
