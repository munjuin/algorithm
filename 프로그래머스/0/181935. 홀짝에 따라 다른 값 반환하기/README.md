# [level 0] 홀짝에 따라 다른 값 반환하기 - 181935 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181935) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.16 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 30일 18:00:24

### 문제 설명

<p>양의 정수 <code>n</code>이 매개변수로 주어질 때, <code>n</code>이 홀수라면 <code>n</code> 이하의 홀수인 모든 양의 정수의 합을 return 하고 <code>n</code>이 짝수라면 <code>n</code> 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>n</code> ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>7</td>
<td>16</td>
</tr>
<tr>
<td>10</td>
<td>220</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번의 <code>n</code>은 7로 홀수입니다. 7 이하의 모든 양의 홀수는 1, 3, 5, 7이고 이들의 합인 1 + 3 + 5 + 7 = 16을 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>예제 2번의 <code>n</code>은 10으로 짝수입니다. 10 이하의 모든 양의 짝수는 2, 4, 6, 8, 10이고 이들의 제곱의 합인 2<sup>2</sup> + 4<sup>2</sup> + 6<sup>2</sup> + 8<sup>2</sup> + 10<sup>2</sup> = 4 + 16 + 36 + 64 + 100 = 220을 return 합니다.</li>
</ul>

---

## 💡 학습 노트: 홀짝에 따라 다른 값 반환하기

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Conditionals`, `#Iterative_Summation`, `#Exponentiation_Operator`
- **문제의 본질**: 주어진 수 $n$의 패리티(Parity)에 따라 서로 다른 수열의 합을 구하는 비즈니스 로직 구현.

### 2. 수학적 원리 (Formula)
- **홀수($n \equiv 1 \pmod 2$)**:
  $$\sum_{i=1, 3, \dots}^{n} i$$
- **짝수($n \equiv 0 \pmod 2$)**:
  $$\sum_{i=2, 4, \dots}^{n} i^2$$

### 3. 주요 기술 포인트
- **제곱 연산자 (`**`)**: 자바스크립트의 거듭제곱 연산자를 사용하여 $i$의 제곱값을 산출함. (`Math.pow(i, 2)`로도 대체 가능)
- **증감식 최적화**: `i++` 대신 `i += 2`를 사용하여 불필요한 연산 횟수를 절반으로 줄임.

### 4. 시행착오 및 깨달은 점
- **누적 변수의 초기화**: 합산 결과를 담는 `answer` 변수를 반드시 `0`으로 초기화해야 연산 오류를 방지할 수 있음을 인지함.
- **로직의 분리**: 하나의 루프 안에서 복잡하게 조건을 따지는 것보다, 바깥에서 조건을 한 번 거른 뒤 각기 다른 루프를 타게 하는 것이 가독성과 성능 면에서 우수할 수 있음을 배움.

### 5. 참고 자료
- [MDN - 거듭제곱 연산자 ( ** )](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [MDN - for 문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
