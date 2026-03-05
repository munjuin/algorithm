# [level 0] 수열과 구간 쿼리 2 - 181923 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181923) 

### 성능 요약

메모리: 36.8 MB, 시간: 3.97 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 03월 05일 13:19:59

### 문제 설명

<p>정수 배열 <code>arr</code>와 2차원 정수 배열 <code>queries</code>이 주어집니다. <code>queries</code>의 원소는 각각 하나의 <code>query</code>를 나타내며, <code>[s, e, k]</code> 꼴입니다.</p>

<p>각 <code>query</code>마다 순서대로 <code>s</code> ≤ <code>i</code> ≤ <code>e</code>인 모든 <code>i</code>에 대해 <code>k</code>보다 크면서 가장 작은 <code>arr[i]</code>를 찾습니다.</p>

<p>각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.<br>
단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>arr</code>의 길이 ≤ 1,000

<ul>
<li>0 ≤ <code>arr</code>의 원소 ≤ 1,000,000</li>
</ul></li>
<li>1 ≤ <code>queries</code>의 길이 ≤ 1,000

<ul>
<li>0 ≤ <code>s</code> ≤ <code>e</code> &lt; <code>arr</code>의 길이</li>
<li>0 ≤ <code>k</code> ≤ 1,000,000</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>queries</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[0, 1, 2, 4, 3]</td>
<td>[[0, 4, 2],[0, 3, 2],[0, 2, 2]]</td>
<td>[3, 4, -1]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>첫 번째 쿼리의 범위에는 0, 1, 2, 4, 3이 있으며 이 중 2보다 크면서 가장 작은 값은 3입니다.</li>
<li>두 번째 쿼리의 범위에는 0, 1, 2, 4가 있으며 이 중 2보다 크면서 가장 작은 값은 4입니다.</li>
<li>세 번째 쿼리의 범위에는 0, 1, 2가 있으며 여기에는 2보다 큰 값이 없습니다.</li>
<li>따라서 [3, 4, -1]을 return 합니다.</li>
</ul>

---

## 💡 학습 노트: 수열과 구간 쿼리 2 (Filtered Search)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Range_Query`, `#Conditional_Minimum`, `#Infinity_Initial_Value`
- **문제의 본질**: 주어진 범위($s \le i \le e$) 내에서 특정 임계값($k$)을 초과하는 요소들을 필터링하고, 그 중 최솟값을 추출하는 알고리즘 구현.

### 2. 작동 원리
1. **쿼리 변환**: `map`을 사용하여 각 쿼리 `[s, e, k]`를 결과값으로 변환.
2. **범위 탐색**: 루프 변수를 `s`부터 `e`까지 설정하여 해당 구간의 `arr` 요소에 접근.
3. **최솟값 갱신**: `arr[i] > k` 조건을 만족할 때만 현재의 `minVal`과 비교하여 더 작은 값을 저장.
4. **예외 처리**: 조건을 만족하는 값이 없을 경우 `-1`을 반환하도록 설계.

### 3. 주요 기술 포인트
- **초기값 설정 전략**: `Infinity`를 최솟값 비교의 시작점으로 활용하여 첫 비교 시 무조건 갱신되도록 유도.
- **분할 정복적 사고**: 전체 배열이 아닌 특정 인덱스 범위만 잘라서 생각하는 인덱스 제어 기술 습득.

### 4. 깨달은 점
- **로직의 복합성**: 반복문 안에 조건문이 들어가고, 그 안에 다시 최솟값 비교가 들어가는 '중첩 로직'의 흐름을 제어하는 법을 익힘.
- **상태 관리**: `found` 변수(flag)를 활용하여 검색 결과 유무를 효율적으로 판단하는 법을 배움.

### 5. 참고 자료
- [MDN - Array.prototype.map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [자바스크립트 최솟값/최댓값 구하기](https://ko.javascript.info/number#ref-1774)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
