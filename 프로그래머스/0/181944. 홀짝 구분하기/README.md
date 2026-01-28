# [level 0] 홀짝 구분하기 - 181944 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181944) 

### 성능 요약

메모리: 31.9 MB, 시간: 41.81 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 28일 11:26:37

### 문제 설명

<p>자연수 <code>n</code>이 입력으로 주어졌을 때 만약 <code>n</code>이 짝수이면 "<code>n</code> is even"을, 홀수이면 "<code>n</code> is odd"를 출력하는 코드를 작성해 보세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 1,000</li>
</ul>

<hr>

<h5>입출력 예</h5>

<p>입력 #1</p>
<div class="highlight"><pre class="codehilite"><code>100
</code></pre></div>
<p>출력 #1</p>
<div class="highlight"><pre class="codehilite"><code>100 is even
</code></pre></div>
<p>입력 #2</p>
<div class="highlight"><pre class="codehilite"><code>1
</code></pre></div>
<p>출력 #2</p>
<div class="highlight"><pre class="codehilite"><code>1 is odd
</code></pre></div>
<p>※ 2023년 05월 15일 지문이 수정되었습니다.</p>

---

## 💡 학습 노트: 홀짝 구분하기

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Modulo_Operator`, `#Explicit_Type_Conversion`, `#Conditional_Statement`
- **문제의 본질**: 정수 $n$의 패리티(Parity, 홀짝성)를 판별하여 조건에 맞는 문자열 포맷으로 출력하기.

### 2. 작동 원리 및 설계 (Logic Flow)
1. **입력 데이터 처리**: `fs.readFileSync(0)`로 받은 문자열 데이터를 `Number()` 함수를 통해 숫자형으로 명시적 변환하여 산술 연산의 안정성 확보.
2. **패리티 판별 (Modulo Operation)**:
   - 숫자 $n$을 2로 나눈 나머지($n \pmod 2$)가 0이면 **짝수(Even)**.
   - 나머지($n \pmod 2$)가 1이면 **홀수(Odd)**.
3. **분기 처리**: `if...else` 문을 사용하여 판별 결과에 따라 각기 다른 템플릿 리터럴 출력.



### 3. 주요 기술 포인트
- **명시적 형변환 (Explicit Coercion)**: 자바스크립트의 암시적 형변환에 의존하지 않고 `Number(input)`를 사용하여 변수 `num`의 타입을 정의함. 이는 협업 및 유지보수 시 데이터 흐름을 명확하게 파악할 수 있게 함.
- **나머지 연산자 (`%`)**: 정수론의 합동식(Congruence) 원리를 프로그래밍에 적용한 사례로, 짝수와 홀수라는 이진 분류(Binary Classification)를 수행하는 가장 효율적인 방법임.

### 4. 시행착오 및 깨달은 점
- **타입 안정성**: 단순히 `input % 2`를 해도 자바스크립트는 동작하지만, 백엔드 로직에서는 데이터가 숫자인지 확인하는 절차(`Number()`)가 예기치 못한 런타임 에러(예: 더하기 연산 시 문자열 결합)를 방지하는 핵심임을 재확인함.
- **템플릿 리터럴의 효율성**: `${num} is even`과 같이 변수와 문자열을 결합할 때, 가독성이 높고 오타 확률이 적은 템플릿 리터럴 방식의 우수성을 체감함.

### 5. 참고 자료
- [MDN - 나머지 연산자 (%)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Remainder)
- [MDN - Number 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
