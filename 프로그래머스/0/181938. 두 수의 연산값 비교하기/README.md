# [level 0] 두 수의 연산값 비교하기 - 181938 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181938) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 29일 12:30:04

### 문제 설명

<p>연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.</p>

<ul>
<li>12 ⊕ 3 = 123</li>
<li>3 ⊕ 12 = 312</li>
</ul>

<p>양의 정수 <code>a</code>와 <code>b</code>가 주어졌을 때, <code>a</code> ⊕ <code>b</code>와 <code>2 * a * b</code> 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.</p>

<p>단, <code>a</code> ⊕ <code>b</code>와 <code>2 * a * b</code>가 같으면  <code>a</code> ⊕ <code>b</code>를 return 합니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>a</code>, <code>b</code> &lt; 10,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>a</th>
<th>b</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>2</td>
<td>91</td>
<td>364</td>
</tr>
<tr>
<td>91</td>
<td>2</td>
<td>912</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>a</code> ⊕ <code>b</code> = 291 이고, <code>2 * a * b</code> = 364 입니다. 둘 중 더 큰 값은 364 이므로 364를 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>a</code> ⊕ <code>b</code> = 912 이고, <code>2 * a * b</code> = 364 입니다. 둘 중 더 큰 값은 912 이므로 912를 return 합니다.</li>
</ul>

<hr>

<p>※ 2023년 04월 27일 입출력 예 설명이 수정되었습니다.</p>

---

## 💡 학습 노트: 두 수의 연산값 비교하기

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Math.max()`, `#Implicit_Coercion`, `#Arithmetic_vs_Concatenation`
- **문제의 본질**: 문자열 결합 기반의 연산($a \oplus b$)과 일반 산술 연산($2 \times a \times b$)의 결과를 비교하여 최댓값 산출하기.

### 2. 작동 원리 및 설계
1. **결합 연산**: 템플릿 리터럴을 사용하여 두 정수를 문자열로 이어 붙인 후, `Number()`를 통해 정수형으로 변환.
2. **산술 연산**: 문제에서 주어진 수식($2 \times a \times b$)에 따라 연산 수행.
3. **최댓값 판별**: `Math.max()`를 사용하여 두 결과값 중 큰 값을 선택. (값이 같을 경우 문제 요구사항에 따라 결합 연산 값이 자연스럽게 반환됨)

### 3. 주요 기술 포인트
- **암시적 형변환의 이해**: `Math.max()` 내부에서 발생하는 타입 캐스팅 원리를 파악함. 
- **연산 우선순위**: `${2 * a * b}`와 같이 템플릿 리터럴 내부에서 산술 연산이 먼저 수행된 후 문자열로 변환되는 과정을 이해함.

### 4. 시행착오 및 깨달은 점
- **가독성 vs 간결함**: `Math.max`가 문자열을 숫자로 바꿔주더라도, 백엔드 로직의 명확성을 위해 타입을 명시적으로 맞추어 비교하는 것이 유지보수 측면에서 유리함을 인지함.
- **예외 상황 처리**: 두 연산 결과가 같을 때의 처리 조건을 확인하고, `Math.max`가 동일한 값을 반환하는 특성을 이용해 코드를 간소화함.

### 5. 참고 자료
- [MDN - Math.max()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
- [자바스크립트의 형변환 가이드](https://ko.javascript.info/type-conversions)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
