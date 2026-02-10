# [level 0] 등차수열의 특정한 항만 더하기 - 181931 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181931) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 02월 10일 11:23:16

### 문제 설명

<p>두 정수 <code>a</code>, <code>d</code>와 길이가 n인 boolean 배열 <code>included</code>가 주어집니다. 첫째항이 <code>a</code>, 공차가 <code>d</code>인 등차수열에서 <code>included[i]</code>가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 <code>included</code>가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>a</code> ≤ 100</li>
<li>1 ≤ <code>d</code> ≤ 100</li>
<li>1 ≤ <code>included</code>의 길이 ≤ 100</li>
<li><code>included</code>에는 true가 적어도 하나 존재합니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>a</th>
<th>d</th>
<th>included</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>4</td>
<td>[true, false, false, true, true]</td>
<td>37</td>
</tr>
<tr>
<td>7</td>
<td>1</td>
<td>[false, false, false, true, false, false, false]</td>
<td>10</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번은 <code>a</code>와 <code>d</code>가 각각 3, 4이고 <code>included</code>의 길이가 5입니다. 이를 표로 나타내면 다음과 같습니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th></th>
<th>1항</th>
<th>2항</th>
<th>3항</th>
<th>4항</th>
<th>5항</th>
</tr>
</thead>
        <tbody><tr>
<td>등차수열</td>
<td>3</td>
<td>7</td>
<td>11</td>
<td>15</td>
<td>19</td>
</tr>
<tr>
<td>included</td>
<td>true</td>
<td>false</td>
<td>false</td>
<td>true</td>
<td>true</td>
</tr>
</tbody>
      </table><div class="highlight"><pre class="codehilite"><code>따라서 true에 해당하는 1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.
</code></pre></div>
<p>입출력 예 #2</p>

<ul>
<li>예제 2번은 <code>a</code>와 <code>d</code>가 각각 7, 1이고 <code>included</code>의 길이가 7입니다. 이를 표로 나타내면 다음과 같습니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th></th>
<th>1항</th>
<th>2항</th>
<th>3항</th>
<th>4항</th>
<th>5항</th>
<th>6항</th>
<th>7항</th>
</tr>
</thead>
        <tbody><tr>
<td>등차수열</td>
<td>7</td>
<td>8</td>
<td>9</td>
<td>10</td>
<td>11</td>
<td>12</td>
<td>13</td>
</tr>
<tr>
<td>included</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td>true</td>
<td>false</td>
<td>false</td>
<td>false</td>
</tr>
</tbody>
      </table><div class="highlight"><pre class="codehilite"><code>따라서 4항만 true이므로 10을 return 합니다.
</code></pre></div>

---

## 💡 학습 노트: 등차수열의 특정한 항만 더하기

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Arithmetic_Progression`, `#Array_Indexing`, `#Conditional_Summation`
- **문제의 본질**: 등차수열의 일반항 생성 규칙을 이해하고, 불리언 배열의 상태에 따라 선별적으로 값을 합산하기.

### 2. 작동 원리 및 설계
1. **수열 생성 로직**: $i$번째 항의 값을 계산하는 식 $a + (i \times d)$을 도출.
2. **조건부 필터링**: `included[i]`의 진리값(Truthiness)을 확인하여 연산 여부 결정.
3. **누적 합산**: `true`인 항들만 추출하여 `answer` 변수에 가산.

### 3. 수학적 공식 (General Term)
- 등차수열의 $i$번째 항 ($i \ge 0$):
  $$f(i) = a + (i \cdot d)$$

### 4. 주요 기술 포인트
- **인덱스 동기화**: `included` 배열의 인덱스 `i`와 등차수열의 순서 `i`가 정확히 1:1 대응되도록 루프를 설계함.
- **성능 최적화**: 별도의 수열 배열을 만들지 않고, 루프 내에서 즉석(On-the-fly)으로 항의 값을 계산하여 메모리 효율을 높임.

### 5. 깨달은 점
- **비즈니스 로직의 결합**: 수학적 공식과 필터링 조건이 결합되었을 때, 이를 개별 단계로 나누어 생각하면 코드가 훨씬 단순해짐을 경험함.
- **배열 접근 전략**: `included.length`를 활용하여 동적으로 변화하는 입력 데이터 크기에 유연하게 대응함.

### 6. 참고 자료
- [MDN - For Loops](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)
- [위키백과 - 등차수열](https://ko.wikipedia.org/wiki/등차수열)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
