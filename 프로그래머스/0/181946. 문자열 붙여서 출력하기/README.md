# [level 0] 문자열 붙여서 출력하기 - 181946 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181946) 

### 성능 요약

메모리: 31.8 MB, 시간: 43.92 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 28일 11:06:27

### 문제 설명

<p>두 개의 문자열 <code>str1</code>, <code>str2</code>가 공백으로 구분되어 입력으로 주어집니다.<br>
입출력 예와 같이 <code>str1</code>과 <code>str2</code>을 이어서 출력하는 코드를 작성해 보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>str1</code>, <code>str2</code>의 길이 ≤ 10</li>
</ul>

<hr>

<h5>입출력 예</h5>

<p>입력 #1</p>
<div class="highlight"><pre class="codehilite"><code>apple pen
</code></pre></div>
<p>출력 #1</p>
<div class="highlight"><pre class="codehilite"><code>applepen
</code></pre></div>
<p>입력 #2</p>
<div class="highlight"><pre class="codehilite"><code>Hello World!
</code></pre></div>
<p>출력 #2</p>
<div class="highlight"><pre class="codehilite"><code>HelloWorld!
</code></pre></div>

---

## 💡 학습 노트: 문자열 붙여서 출력하기

### 1. 문제 핵심 요약
- **핵심 키워드**: `#String_Concatenation`, `#fs_module`, `#Destructuring`
- **문제의 본질**: 공백으로 구분되어 입력된 두 개의 독립된 문자열 데이터를 수집하고, 이를 물리적 공백 없이 하나의 연속된 데이터 스트림으로 결합하여 출력하기.

### 2. 작동 원리 및 설계 (Data Flow)
1. **데이터 수집**: `fs.readFileSync(0)`를 통해 표준 입력(stdin)에서 데이터를 읽어옴. `.trim()`을 사용하여 입력 데이터 끝의 개행 문자(`\n`)를 사전에 제거하여 데이터 순수성 확보.
2. **데이터 분리**: `split(' ')` 메서드를 사용하여 공백(White Space)을 기준으로 배열 형태의 문자열 조각 생성.
3. **구조 분해 할당**: 생성된 배열의 각 요소를 `str1`, `str2` 변수에 즉시 바인딩하여 데이터 접근성 향상.
4. **결합 및 출력**: `+` 연산자를 사용하여 두 문자열을 메모리 상에서 연결(Concatenation)한 후 표준 출력으로 내보냄.

### 3. 주요 기술 포인트
- **문자열 연결 연산자 (`+`)**: 자바스크립트에서 `+` 연산자는 피연산자가 문자열일 경우 산술 덧셈이 아닌 '문자열 결합'으로 동작함. 이는 새로운 문자열 객체를 생성하는 과정임.
- **제한사항에 대한 이해**: 문제에서 주어진 문자열 길이 제한(1~10)은 입력 데이터의 안정성을 보장하므로, 별도의 밸리데이션(Validation) 로직 없이 핵심 비즈니스 로직에 집중함.

### 4. 시행착오 및 깨달은 점
- **입력 정제의 중요성**: `trim()` 처리가 누락될 경우, 마지막 입력값 뒤에 숨겨진 엔터값이 포함되어 출력 형식이 깨질 수 있음을 인지함.
- **가독성 향상**: `input.split(' ')[0]`과 같이 인덱스로 접근하는 것보다 구조 분해 할당을 사용하는 것이 변수의 의미를 명확히 전달하며, 백엔드 코드의 유지보수성을 높이는 방법임을 확인 함.

### 5. 참고 자료
- [MDN - 표현식과 연산자 (문자열 연산자)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#문자열_연산자)
- [Node.js Documentation - File System (Synchronous API)](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
