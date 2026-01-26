# [level 0] 대소문자 바꿔서 출력하기 - 181949 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181949) 

### 성능 요약

메모리: 31.9 MB, 시간: 46.33 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 26일 11:57:04

### 문제 설명

<p>영어 알파벳으로 이루어진 문자열 <code>str</code>이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>str</code>의 길이 ≤ 20

<ul>
<li><code>str</code>은 알파벳으로 이루어진 문자열입니다.</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>

<p>입력 #1</p>
<div class="highlight"><pre class="codehilite"><code>aBcDeFg
</code></pre></div>
<p>출력 #1</p>
<div class="highlight"><pre class="codehilite"><code>AbCdEfG
</code></pre></div>
<hr>

<p>※2023년 05월 03일 제한사항이 수정되었습니다.</p>

---

## 💡 학습 노트: 대소문자 바꿔서 출력하기

### 1. 문제 핵심 요약
- **핵심 키워드**: `#String_Methods`, `#Array.prototype.map()`, `#Conditional_Logic`
- **문제의 본질**: 문자열 내 개별 문자의 대소문자 여부를 판별하고 상반된 케이스로 치환하기.

### 2. 작동 원리 및 설계
1. **분해**: 문자열을 `split('')`을 통해 글자 단위 배열로 분해.
2. **순회 및 판별**: `map` 메서드로 배열을 순회하며 `alphabet === alphabet.toUpperCase()` 조건식을 통해 대문자 여부 확인.
3. **치환**: 조건에 따라 `toLowerCase()` 또는 `toUpperCase()` 실행.
4. **결합**: `join('')`을 사용하여 가공된 배열을 다시 문자열로 병합 후 출력.

### 3. 시행착오 및 깨달은 점
- **판별 원리**: 별도의 대문자 리스트 없이 `toUpperCase()` 메서드 결과와 비교하는 방식이 코드의 간결성을 높인다는 점을 학습함.
- **불변성(Immutability)**: 자바스크립트의 문자열은 직접 수정할 수 없으므로, 배열로 변환하여 가공 후 다시 합치는 과정이 필요함을 인지함.


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
