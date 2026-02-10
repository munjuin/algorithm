# [level 0] 코드 처리하기 - 181932 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181932) 

### 성능 요약

메모리: 39.2 MB, 시간: 11.43 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 02월 10일 10:46:23

### 문제 설명

<p>문자열 <code>code</code>가 주어집니다.<br>
<code>code</code>를 앞에서부터 읽으면서 만약 문자가 "1"이면 <code>mode</code>를 바꿉니다. <code>mode</code>에 따라 <code>code</code>를 읽어가면서 문자열 <code>ret</code>을 만들어냅니다.</p>

<p><code>mode</code>는 0과 1이 있으며, <code>idx</code>를 0 부터 <code>code의 길이 - 1</code> 까지 1씩 키워나가면서 <code>code[idx]</code>의 값에 따라 다음과 같이 행동합니다.</p>

<ul>
<li><code>mode</code>가 0일 때 

<ul>
<li><code>code[idx]</code>가 "1"이 아니면 <code>idx</code>가 짝수일 때만 <code>ret</code>의 맨 뒤에 <code>code[idx]</code>를 추가합니다.</li>
<li><code>code[idx]</code>가 "1"이면 <code>mode</code>를 0에서 1로 바꿉니다.</li>
</ul></li>
<li><code>mode</code>가 1일 때

<ul>
<li><code>code[idx]</code>가 "1"이 아니면 <code>idx</code>가 홀수일 때만 <code>ret</code>의 맨 뒤에 <code>code[idx]</code>를 추가합니다.</li>
<li><code>code[idx]</code>가 "1"이면 <code>mode</code>를 1에서 0으로 바꿉니다.</li>
</ul></li>
</ul>

<p>문자열 <code>code</code>를 통해 만들어진 문자열 <code>ret</code>를 return 하는 solution 함수를 완성해 주세요.</p>

<p>단, 시작할 때 <code>mode</code>는 0이며, return 하려는 <code>ret</code>가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>code</code>의 길이 ≤ 100,000

<ul>
<li><code>code</code>는 알파벳 소문자 또는 "1"로 이루어진 문자열입니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>code</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"abc1abc1abc"</td>
<td>"acbac"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>code</code>의 각 인덱스 <code>i</code>에 따라 다음과 같이 <code>mode</code>와 <code>ret</code>가 변합니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>i</th>
<th>code[i]</th>
<th>mode</th>
<th>ret</th>
</tr>
</thead>
        <tbody><tr>
<td>0</td>
<td>"a"</td>
<td>0</td>
<td>"a"</td>
</tr>
<tr>
<td>1</td>
<td>"b"</td>
<td>0</td>
<td>"a"</td>
</tr>
<tr>
<td>2</td>
<td>"c"</td>
<td>0</td>
<td>"ac"</td>
</tr>
<tr>
<td>3</td>
<td>"1"</td>
<td>1</td>
<td>"ac"</td>
</tr>
<tr>
<td>4</td>
<td>"a"</td>
<td>1</td>
<td>"ac"</td>
</tr>
<tr>
<td>5</td>
<td>"b"</td>
<td>1</td>
<td>"acb"</td>
</tr>
<tr>
<td>6</td>
<td>"c"</td>
<td>1</td>
<td>"acb"</td>
</tr>
<tr>
<td>7</td>
<td>"1"</td>
<td>0</td>
<td>"acb"</td>
</tr>
<tr>
<td>8</td>
<td>"a"</td>
<td>0</td>
<td>"acba"</td>
</tr>
<tr>
<td>9</td>
<td>"b"</td>
<td>0</td>
<td>"acba"</td>
</tr>
<tr>
<td>10</td>
<td>"c"</td>
<td>0</td>
<td>"acbac"</td>
</tr>
</tbody>
      </table>
<p>따라서 "acbac"를 return 합니다.</p>

<p>※ 2023년 05월 18일 지문이 수정되었습니다.</p>

---

## 💡 학습 노트: 코드 처리하기 (State Machine Logic)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#State_Management`, `#Conditional_Branching`, `#Index_Parity`
- **문제의 본질**: 특정 토큰("1")을 기점으로 시스템의 상태(`mode`)를 전환하고, 상태별 필터링 규칙에 따라 데이터를 수집하기.

### 2. 작동 원리 및 설계 (State Flow)
- **상태 정의**: `mode 0` (짝수 인덱스 수집), `mode 1` (홀수 인덱스 수집).
- **상태 전이**: 문자 `"1"` 탐색 시 `mode` 값을 이진 반전 ($0 \leftrightarrow 1$).
- **데이터 필터링**: `idx % 2` 연산 결과와 현재 `mode` 상태의 일치 여부를 판별하여 `ret` 문자열 구성.

### 3. 주요 기술 포인트
- **삼항 연산자를 활용한 상태 반전**: `mode = mode === 0 ? 1 : 0;`와 같이 간결하게 상태를 스위칭함.
- **예외 처리 (Guard Clause)**: 최종 결과값이 빈 문자열일 경우를 대비한 엣지 케이스 처리(`"EMPTY"`).

### 4. 깨달은 점
- **비즈니스 로직의 복잡성 해결**: 복잡한 지문도 '상태'와 '행동'으로 나누어 분석하면 단순한 `if-else` 구조로 치환될 수 있음을 학습함.
- **가독성 있는 코드**: 변수명(`char`, `mode`, `ret`)을 명확히 설정하여 복잡한 조건문 속에서도 데이터의 흐름을 놓치지 않도록 설계함.

### 5. 참고 자료
- [MDN - 삼항 조건 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [자바스크립트 if...else 문 가이드](https://ko.javascript.info/ifelse)


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
