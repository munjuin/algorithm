# [level 0] 문자열 겹쳐쓰기 - 181943 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181943) 

### 성능 요약

메모리: 33.7 MB, 시간: 0.17 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 28일 11:40:30

### 문제 설명

<p>문자열 <code>my_string</code>, <code>overwrite_string</code>과 정수 <code>s</code>가 주어집니다. 문자열 <code>my_string</code>의 인덱스 <code>s</code>부터 <code>overwrite_string</code>의 길이만큼을 문자열 <code>overwrite_string</code>으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li><code>my_string</code>와 <code>overwrite_string</code>은 숫자와 알파벳으로 이루어져 있습니다.</li>
<li>1 ≤ <code>overwrite_string</code>의 길이 ≤ <code>my_string</code>의 길이 ≤ 1,000</li>
<li>0 ≤ <code>s</code> ≤ <code>my_string</code>의 길이 - <code>overwrite_string</code>의 길이</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>overwrite_string</th>
<th>s</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"He11oWor1d"</td>
<td>"lloWorl"</td>
<td>2</td>
<td>"HelloWorld"</td>
</tr>
<tr>
<td>"Program29b8UYP"</td>
<td>"merS123"</td>
<td>7</td>
<td>"ProgrammerS123"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번의 <code>my_string</code>에서 인덱스 2부터 <code>overwrite_string</code>의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>예제 2번의 <code>my_string</code>에서 인덱스 7부터 <code>overwrite_string</code>의 길이만큼에 해당하는 부분은 "29b8UYP"이고 이를 "merS123"로 바꾼 "ProgrammerS123"를 return 합니다.</li>
</ul>

---

## 💡 학습 노트: 문자열 겹쳐쓰기 (Array Manipulation)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Immutability`, `#Array.prototype.splice()`, `#Spread_Operator(...)`
- **문제의 본질**: 불변(Immutable)인 문자열을 수정 가능한(Mutable) 배열로 변환하여 특정 구간을 정교하게 교체하기.

### 2. 작동 원리 및 설계 (The "Splice" Strategy)
1. **가변성 확보**: `split('')`을 통해 문자열을 배열로 변환하여 개별 요소 수정이 가능한 상태로 만듦.
2. **정밀 타격 및 교체 (`splice`)**:
   - 시작 지점(`s`) 설정.
   - 덮어쓸 문자열의 길이만큼 기존 요소 삭제.
   - **전개 구문(`...`)**을 사용하여 새 문자열을 낱개 문자로 펼쳐서 삽입.
3. **복구**: `join('')`으로 가공된 배열을 다시 하나의 문자열로 병합.

### 3. 주요 기술 포인트
- **전개 구문(Spread Operator)**: 문자열 덩어리를 개별 인자로 분산시켜 `splice` 메서드의 가변 인자 슬롯에 적절히 배치함.
- **배열의 효율성**: 인덱스 계산을 통해 문자열을 자르고 붙이는(`slice`) 방식보다, "특정 위치를 교체한다"는 의도를 코드에 더 직관적으로 드러낼 수 있음.

### 4. 깨달은 점
- **문자열의 불변성**: 자바스크립트에서 문자열은 직접 수정이 불가능하므로, 배열로의 타입 캐스팅이 강력한 우회 전략이 될 수 있음을 학습함.
- **메서드 체이닝과 데이터 흐름**: `split -> splice -> join`으로 이어지는 파이프라인이 데이터 가공의 정석임을 이해함.

### 5. 참고 자료
- [MDN - Array.prototype.splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [MDN - Spread syntax (...)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
