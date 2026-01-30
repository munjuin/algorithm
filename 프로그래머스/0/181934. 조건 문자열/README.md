# [level 0] 조건 문자열 - 181934 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181934) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.15 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 30일 18:08:46

### 문제 설명

<p>문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.  </p>

<ul>
<li>두 수가 <code>n</code>과 <code>m</code>이라면

<ul>
<li>"&gt;", "=" : <code>n</code> &gt;= <code>m</code></li>
<li>"&lt;", "=" : <code>n</code> &lt;= <code>m</code></li>
<li>"&gt;", "!" : <code>n</code> &gt; <code>m</code></li>
<li>"&lt;", "!" : <code>n</code> &lt; <code>m</code> </li>
</ul></li>
</ul>

<p>두 문자열 <code>ineq</code>와 <code>eq</code>가 주어집니다. <code>ineq</code>는 "&lt;"와 "&gt;"중 하나고, <code>eq</code>는 "="와 "!"중 하나입니다. 그리고 두 정수 <code>n</code>과 <code>m</code>이 주어질 때, <code>n</code>과 <code>m</code>이 <code>ineq</code>와 <code>eq</code>의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한 사항</h5>

<ul>
<li>1 ≤ <code>n</code>, <code>m</code> ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>ineq</th>
<th>eq</th>
<th>n</th>
<th>m</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"&lt;"</td>
<td>"="</td>
<td>20</td>
<td>50</td>
<td>1</td>
</tr>
<tr>
<td>"&gt;"</td>
<td>"!"</td>
<td>41</td>
<td>78</td>
<td>0</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>20 &lt;= 50은 참이기 때문에 1을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>41 &gt; 78은 거짓이기 때문에 0을 return합니다.</li>
</ul>

<hr>

<p>※ 2023.05.31 테스트 케이스가 수정되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.</p>

---

## 💡 학습 노트: 조건 문자열 (Conditional Strings)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Conditional_Logic`, `#String_Combination`, `#Mapping`
- **문제의 본질**: 문자열로 주어진 연산 조건을 분석하여 동적으로 수치 비교 로직을 실행하기.

### 2. 작동 원리 및 설계
1. **조건 결합**: 입력된 `ineq`와 `eq` 문자열을 조합하여 4가지 비교 케이스 생성.
2. **분기 처리**: 
   - 중첩 삼항 연산자 또는 `if-else` 문을 통해 각 조건에 맞는 비교식 실행.
   - 불리언(Boolean) 결과를 문제 요구 사양인 정수(1 또는 0)로 치환.

### 3. 주요 기술 포인트
- **동적 연산 결정**: 자바스크립트는 문자열을 바로 연산자로 바꿀 수 없으므로(eval 제외), 명시적인 매핑 로직이 필요함.
- **객체 매핑(Object Mapping)**: 복잡한 `if`문을 대신해 `key: value` 구조로 로직을 관리하면 가독성과 확장성이 좋아짐.

### 4. 시행착오 및 깨달은 점
- **문자열 결합의 순서**: `ineq + eq` 순서에 따라 키값이 달라지므로 설계 단계에서의 정규화가 중요함을 인지함.
- **타입 변환의 간결함**: `condition ? 1 : 0` 외에도 `Number(condition)`을 사용하면 불리언을 즉시 숫자로 바꿀 수 있음을 복습함.

### 5. 참고 자료
- [MDN - 비교 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- [MDN - 객체로의 접근](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
