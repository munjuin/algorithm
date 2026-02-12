# [level 0] 수 조작하기 1 - 181926 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181926) 

### 성능 요약

메모리: 36.4 MB, 시간: 7.58 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 02월 12일 11:16:24

### 문제 설명

<p>정수 <code>n</code>과 문자열 <code>control</code>이 주어집니다. <code>control</code>은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, <code>control</code>의 앞에서부터 순서대로 문자에 따라 <code>n</code>의 값을 바꿉니다.</p>

<ul>
<li>"w" : <code>n</code>이 1 커집니다.</li>
<li>"s" : <code>n</code>이 1 작아집니다.</li>
<li>"d" : <code>n</code>이 10 커집니다.</li>
<li>"a" : <code>n</code>이 10 작아집니다.</li>
</ul>

<p>위 규칙에 따라 <code>n</code>을 바꿨을 때 가장 마지막에 나오는 <code>n</code>의 값을 return 하는 solution 함수를 완성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>-100,000 ≤ <code>n</code> ≤ 100,000</li>
<li>1 ≤ <code>control</code>의 길이 ≤ 100,000

<ul>
<li><code>control</code>은 알파벳 소문자 "w", "a", "s", "d"로 이루어진 문자열입니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>control</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>0</td>
<td>"wsdawsdassw"</td>
<td>-1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>수 <code>n</code>은 <code>control</code>에 따라 다음과 같은 순서로 변하게 됩니다.</li>
<li>0 → 1 → 0 → 10 → 0 → 1 → 0 → 10 → 0 → -1 → -2 → -1</li>
<li>따라서 -1을 return 합니다.</li>
</ul>

---

## 💡 학습 노트: 수 조작하기 1 (Command Pattern)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Switch_Statement`, `#Object_Mapping`, `#Reduce_Method`
- **문제의 본질**: 입력된 문자열 커맨드에 따라 변수 $n$의 상태를 동적으로 변경하는 로직 구현.

### 2. 작동 원리 및 설계
1. **커맨드 정의**: 각 문자("w", "a", "s", "d")에 대응하는 수치 변화량 정의.
2. **배열화**: 문자열 `control`을 전개 연산자(`[...]`)를 사용하여 문자 배열로 변환.
3. **상태 누적**: `reduce` 함수를 사용하여 초기값 $n$에 각 커맨드의 변화량을 순차적으로 가산.

### 3. 주요 기술 포인트
- **객체 리터럴 매핑**: `if-else` 분기문을 객체의 키-값(Key-Value) 구조로 대체하여 코드 가독성 및 유지보수성 향상.
- **고차 함수 활용**: `forEach` 또는 `reduce`를 사용하여 명령형 프로그래밍을 선언적 프로그래밍 스타일로 전환.

### 4. 깨달은 점
- **확장성 있는 구조**: 새로운 명령어(예: "x"를 누르면 $n \times 2$)가 추가되더라도 매핑 객체만 수정하면 되는 유연한 구조의 중요성을 인지함.
- **초기값의 역할**: `reduce`의 두 번째 인자로 시작값 $n$을 전달하여 연산의 연속성을 보장함.

### 5. 참고 자료
- [MDN - Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [자바스크립트 객체를 이용한 조건문 제거](https://ko.javascript.info/object)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
