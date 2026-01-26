# [level 0] 문자열 출력하기 - 181952 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181952) 

### 성능 요약

메모리: 31.8 MB, 시간: 43.33 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 26일 10:16:46

### 문제 설명

<p>문자열 <code>str</code>이 주어질 때, <code>str</code>을 출력하는 코드를 작성해 보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>str</code>의 길이 ≤ 1,000,000</li>
<li><code>str</code>에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>

<p>입력 #1</p>
<div class="highlight"><pre class="codehilite"><code>HelloWorld!
</code></pre></div>
<p>출력 #1</p>
<div class="highlight"><pre class="codehilite"><code>HelloWorld!
</code></pre></div>

---

## 💡 학습 노트

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Node.js_입출력`, `#fs_module`, `#readline_module`
- **문제의 본질**: 표준 입력(stdin)으로부터 들어온 문자열 데이터를 가공 없이 표준 출력(stdout)으로 내보내는 입출력의 기초 시스템 이해.

### 2. 작동 원리 및 설계 (readline vs fs)
- **방안 A: readline (이벤트 기반)**
  - `readline` 모듈은 내부적으로 **이벤트 루프(Event Loop)**를 활용함.
  - 사용자가 엔터를 칠 때마다 `'line'` 이벤트를 발생시켜 비동기적으로 데이터를 처리함.
  - 메모리를 적게 사용하지만, 이벤트 발생 시마다 발생하는 오버헤드로 인해 속도가 상대적으로 느림.
- **방안 B: fs (동기적 스트림)**
  - `fs.readFileSync(0)`은 파일 서술자(File Descriptor) `0`(표준 입력)으로부터 데이터를 직접 읽어옴.
  - 데이터를 통째로 **Buffer**에 담아 한 번에 처리하므로 시스템 콜 횟수가 적어 압도적으로 빠름 O(n).
  - 본 풀이에서는 성능 최적화를 위해 `fs` 방식을 최종 선택함.

### 3. 주요 메서드 및 원리 분석
- `fs.readFileSync(0)`: 입력 스트림의 모든 데이터를 한 번에 읽어오는 동기 메서드.
- `.toString()`: Buffer 객체로 들어온 데이터를 사람이 읽을 수 있는 문자열로 변환.
- `.trim()`: 입력 끝에 포함될 수 있는 줄바꿈 기호(`\n`) 등 불필요한 공백을 제거하여 순수 데이터만 추출.

### 4. 시행착오 및 깨달은 점
- **시행착오**: 처음에는 `readline`의 비동기 콜백 안에서 출력 문구를 섞어 썼으나, 코딩 테스트는 **순수 출력값**의 일치 여부만 본다는 것을 깨달음.
- **깨달은 점**: 
  - `fs` 모듈은 동기적으로 작동하므로 코드가 직관적이지만, 대용량 데이터 처리 시 메모리 점유율을 고려해야 함.
  - 반면 `readline`은 대화형 CLI나 메모리가 제한된 환경에서 유리하다는 차이점을 명확히 인지함.

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
