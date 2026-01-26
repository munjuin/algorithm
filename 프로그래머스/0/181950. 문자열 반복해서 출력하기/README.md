# [level 0] 문자열 반복해서 출력하기 - 181950 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181950) 

### 성능 요약

메모리: 32 MB, 시간: 41.62 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 26일 11:42:04

### 문제 설명

<p>문자열 <code>str</code>과 정수 <code>n</code>이 주어집니다.<br>
<code>str</code>이 <code>n</code>번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>str</code>의 길이 ≤ 10</li>
<li>1 ≤ <code>n</code> ≤ 5</li>
</ul>

<hr>

<h5>입출력 예</h5>

<p>입력 #1</p>
<div class="highlight"><pre class="codehilite"><code>string 5
</code></pre></div>
<p>출력 #1</p>
<div class="highlight"><pre class="codehilite"><code>stringstringstringstringstring
</code></pre></div>

---

## 💡 학습 노트: 문자열 반복해서 출력하기

### 1. 문제 핵심 요약
- **핵심 키워드**: `#String.prototype.repeat()`, `#Type_Conversion`, `#fs_module`
- **문제의 본질**: 입력받은 문자열을 특정 횟수(n)만큼 반복하여 하나의 문자열로 합쳐 출력하기.

### 2. 작동 원리 및 설계
1. **입력 데이터 분리**: `input.split(' ')`을 통해 문자열(`str`)과 반복 횟수(`n`)를 배열로 분리.
2. **타입 안정성 확보**: 문자열 상태인 `n`을 `Number(n)`을 통해 숫자형으로 명시적 변환.
3. **문자열 반복**: `str.repeat(count)` 메서드를 활용하여 반복된 결과 생성.


### 3. 시행착오 및 깨달은 점
- **데이터 타입의 중요성**: `input.split`의 결과는 항상 문자열 배열이므로, 산술 연산이나 반복 횟수로 사용할 때는 숫자로 변환하는 과정이 필요함을 재확인함.
- **문법적 실수**: `n.Number`와 같은 잘못된 접근 대신 전역 함수인 `Number()`를 사용하는 올바른 문법을 학습함.


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
