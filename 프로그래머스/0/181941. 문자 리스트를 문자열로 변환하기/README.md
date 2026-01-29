# [level 0] 문자 리스트를 문자열로 변환하기 - 181941 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181941) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.03 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 29일 12:07:01

### 문제 설명

<p>문자들이 담겨있는 배열 <code>arr</code>가 주어집니다. <code>arr</code>의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>arr</code>의 길이 ≤ 200

<ul>
<li><code>arr</code>의 원소는 전부 알파벳 소문자로 이루어진 길이가 1인 문자열입니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["a","b","c"]</td>
<td>"abc"</td>
</tr>
</tbody>
      </table>

---

## 💡 학습 노트: join() 메서드 정복

### 1. 개념 요약
- **정의**: 배열의 모든 요소를 연결하여 하나의 문자열로 반환하는 메서드.
- **특징**: 원본 배열은 변하지 않으며(Immutable), 새로운 문자열을 생성함.

### 2. 주요 활용 패턴
- **`join('')`**: 구분자 없이 배열 요소를 이어 붙여 단어/문장 생성 (코딩 테스트 빈출).
- **`join(', ')`**: 배열 데이터를 가독성 좋은 리스트 형태의 문자열로 변환.

### 3. 기술적 통찰
- **메모리 최적화**: 반복문 내에서 문자열 `+` 연산을 수행하는 것보다 `Array.push()` 후 `join()`을 사용하는 것이 메모리 할당 측면에서 유리함.
- **역연산 구조**: `String.split()`과 `Array.join()`의 관계를 이해함으로써 데이터 타입 간의 자유로운 전환이 가능해짐.

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
