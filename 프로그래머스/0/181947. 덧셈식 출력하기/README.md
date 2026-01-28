# [level 0] 덧셈식 출력하기 - 181947 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181947) 

### 성능 요약

메모리: 31.7 MB, 시간: 42.09 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 28일 11:00:51

### 문제 설명

<p>두 정수 <code>a</code>, <code>b</code>가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.</p>
<div class="highlight"><pre class="codehilite"><code>a + b = c
</code></pre></div>
<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>a</code>, <code>b</code> ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>

<p>입력 #1</p>
<div class="highlight"><pre class="codehilite"><code>4 5
</code></pre></div>
<p>출력 #1</p>
<div class="highlight"><pre class="codehilite"><code>4 + 5 = 9
</code></pre></div>

---

## 💡 학습 노트: 덧셈식 출력하기 (Refactored)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#fs_module`, `#Destructuring`, `#map`, `#Template_Literals`
- **문제의 본질**: 입력 데이터를 구조 분해 할당을 통해 효율적으로 관리하고, 템플릿 리터럴을 활용해 요구된 문자열 포맷을 정확히 생성하기.

### 2. 작동 원리 및 설계 (Step-by-Step)
1. **Raw 데이터 확보**: `fs.readFileSync(0)`로 시스템 콜을 호출하여 표준 입력을 버퍼 형태로 가져온 후 문자열로 변환.
2. **데이터 파이프라인**:
   - `split(' ')`: 공백 기준 문자열 분리.
   - `map(item => Number(item))`: 각 요소를 순회하며 숫자형으로 명시적 변환.
3. **구조 분해 할당(Destructuring)**: 변환된 배열에서 `[a, b]` 형태로 값을 즉시 추출하여 가독성 확보.
   
4. **포맷팅**: 템플릿 리터럴(Backtick)을 사용하여 변수와 연산 결과를 결합한 최종 문자열 생성.

### 3. 주요 기술 포인트
- **구조 분해 할당**: `numbering[0]`, `numbering[1]`과 같이 인덱스로 접근하는 대신, `a`와 `b`라는 명확한 변수명을 부여함으로써 코드의 의도를 분명히 함.
- **자동 형변환 (String Interpolation)**: 템플릿 리터럴 내부의 `${a + b}` 연산 결과는 문자열로 자동 캐스팅되어 결합됨.

### 4. 시행착오 및 깨달은 점
- **공백 엄격성 준수**: 기댓값 `"4 + 5 = 9"`와 정확히 일치시키기 위해 연산 기호(`+`, `=`) 앞뒤의 공백을 정밀하게 조정함. 
- **타입 추적의 중요성**: `Number(item)` 과정을 거치지 않으면 `a + b`가 `"45"`(문자열 결합)가 될 수 있음을 인지하고, 연산 전 타입 변환을 설계에 반드시 포함시킴.

### 5. 참고 자료
- [MDN - 구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN - Template literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
