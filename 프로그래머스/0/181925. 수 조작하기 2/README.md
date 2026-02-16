# [level 0] 수 조작하기 2 - 181925 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181925) 

### 성능 요약

메모리: 41 MB, 시간: 33.76 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 02월 17일 00:37:41

### 문제 설명

<p>정수 배열 <code>numLog</code>가 주어집니다. 처음에 <code>numLog[0]</code>에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.</p>

<ul>
<li>"w" : 수에 1을 더한다.</li>
<li>"s" : 수에 1을 뺀다.</li>
<li>"d" : 수에 10을 더한다.</li>
<li>"a" : 수에 10을 뺀다.</li>
</ul>

<p>그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 <code>numLog</code>입니다. 즉, <code>numLog[i]</code>는 <code>numLog[0]</code>로부터 총 <code>i</code>번의 조작을 가한 결과가 저장되어 있습니다.</p>

<p>주어진 정수 배열 <code>numLog</code>에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>numLog</code>의 길이 ≤ 100,000

<ul>
<li>-100,000 ≤ <code>numLog[0]</code> ≤ 100,000</li>
<li>1 ≤ <code>i</code> ≤ <code>numLog</code>의 길이인 모든 <code>i</code>에 대해 <code>|numLog[i] - numLog[i - 1]|</code>의 값은 1 또는 10입니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>numLog</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]</td>
<td>"wsdawsdassw"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>result인 "wsdawsdassw"를 따라 <code>numLog[0]</code>에서부터 시작해 조작을 하면 <code>numLog</code>의 값과 순서대로 일치합니다. 따라서 "wsdawsdassw"를 return 합니다.</li>
</ul>

<hr>

<h5>Hint</h5>

<p>"수 조작하기 1" 문제의 <code>n</code>값이 <code>numLog[0]</code>에 해당하며, 이 문제에서 주어진 <code>numLog</code>에 따라 "수 조작하기 1" 문제의 <code>control</code>을 구하는 문제라고 이해할 수 있습니다.</p>

<p>입출력 예 #1은 "수 조작하기 1" 문제의 입출력 예 #1과 같은 예시이므로 참고하시기 바랍니다.</p>

---

## 💡 학습 노트: 수 조작하기 2 (Log Analysis & Inverse Mapping)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Array_Traversal`, `#Difference_Calculation`, `#Reverse_Mapping`
- **문제의 본질**: 연속된 데이터의 변화량(Delta)을 분석하여 원인이 된 입력값(Command)을 역으로 도출하기.

### 2. 작동 원리 및 설계
1. **역매핑 정의**: 수치 변화량($1, -1, 10, -10$)을 키로, 명령어 문자열을 값으로 하는 매핑 객체 생성.
2. **순차 비교**: 루프를 인덱스 1부터 시작하여 $numLog[i]$와 $numLog[i-1]$의 차이 산출.
3. **문자열 결합**: 산출된 차이값을 매핑 객체에서 조회하여 최종 결과 문자열에 누적.

### 3. 주요 기술 포인트
- **인덱스 오프셋 제어**: $i$와 $i-1$을 동시에 참조하기 위해 루프의 시작점을 조절하는 테크닉 활용.
- **객체 키의 문자열 처리**: 자바스크립트 객체의 키는 내부적으로 문자열로 취급되므로, 숫자 연산 결과인 `diff`가 자동으로 매칭됨.

### 4. 깨달은 점
- **데이터 분석의 기초**: 상태값의 변화(State Transition)를 통해 유저의 행동을 추론하는 로직의 기본 원리를 이해함.
- **성능 고려**: 문자열 결합 연산(`+=`)은 문자열이 길어질 경우 성능 저하가 있을 수 있으나, 본 문제의 제한 사항 내에서는 충분히 효율적임을 인지함.

### 5. 참고 자료
- [MDN - 객체 초기화](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [자바스크립트 배열의 slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
