# [level 0] 문자열 섞기 - 181942 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181942) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 29일 12:00:30

### 문제 설명

<p>길이가 같은 두 문자열 <code>str1</code>과 <code>str2</code>가 주어집니다.</p>

<p>두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>str1</code>의 길이 = <code>str2</code>의 길이 ≤ 10

<ul>
<li><code>str1</code>과 <code>str2</code>는 알파벳 소문자로 이루어진 문자열입니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>str1</th>
<th>str2</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"aaaaa"</td>
<td>"bbbbb"</td>
<td>"ababababab"</td>
</tr>
</tbody>
      </table>

      ---

## 💡 학습 노트: 문자열 섞기

### 1. 문제 핵심 요약
- **핵심 키워드**: `#String_Indexing`, `#Iterative_Concatenation`, `#split_vs_splice`
- **문제의 본질**: 길이가 같은 두 문자열을 인덱스 순서에 따라 교차적으로 결합하여 새로운 문자열 생성하기.

### 2. 작동 원리 및 설계
1. **단일 루프 설계**: 두 문자열의 길이가 동일하므로, $O(n)$의 시간 복잡도를 갖는 단일 `for` 루프를 설계함.
2. **동시 참조**: 루프의 인덱스 `i`를 활용하여 `str1[i]`와 `str2[i]`에 순차적으로 접근.
3. **복합 대입 연산**: `+=` 연산자를 사용하여 비어있는 결과 문자열(`answer`)에 각 문자를 순서대로 병합.

### 3. 주요 기술 포인트
- **문자열 인덱싱**: 자바스크립트에서 문자열은 배열처럼 인덱스(`str[i]`)로 각 문자에 직접 접근이 가능함.
- **메서드 오해 정정**: 
  - `split()`: 문자열 → 배열 (분할)
  - `splice()`: 배열 내 요소 수정 (치환/삭제)
  - 본 문제에서는 인덱스 접근이 가능하므로 굳이 배열로 변환하지 않는 것이 메모리 효율 측면에서 유리함.

### 4. 시행착오 및 깨달은 점
- **중첩 루프의 오용**: 두 데이터를 1:1로 매칭해야 하는 상황에서 중첩 루프(Nested Loop)를 사용할 경우 $O(n^2)$의 연산과 의도치 않은 조합(Combination)이 발생함을 인지함.
- **문자열 결합 방식**: `String()` 생성자를 반복 호출하는 것보다, 문자열 리터럴 상태에서 `+` 연산자로 결합하는 것이 더 직관적이고 표준적인 방식임을 학습함.

### 5. 참고 자료
- [MDN - String.prototype.charAt() / Bracket notation](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#문자_접근)
- [MDN - 문자열 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#문자열_연산자)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
