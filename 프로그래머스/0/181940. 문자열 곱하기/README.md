# [level 0] 문자열 곱하기 - 181940 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181940) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 01월 29일 12:14:36

### 문제 설명

<p>문자열 <code>my_string</code>과 정수 <code>k</code>가 주어질 때, <code>my_string</code>을 <code>k</code>번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>my_string</code>의 길이 ≤ 100</li>
<li><code>my_string</code>은 영소문자로만 이루어져 있습니다.</li>
<li>1 ≤ <code>k</code> ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>k</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"string"</td>
<td>3</td>
<td>"stringstringstring"</td>
</tr>
<tr>
<td>"love"</td>
<td>10</td>
<td>"lovelovelovelovelovelovelovelovelovelove"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번의 <code>my_string</code>은 "string"이고 이를 3번 반복한 문자열은 "stringstringstring"이므로 이를 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>예제 2번의 <code>my_string</code>은 "love"이고 이를 10번 반복한 문자열은 "lovelovelovelovelovelovelovelovelovelove"이므로 이를 return 합니다.</li>
</ul>

---

## 💡 학습 노트: 문자열 곱하기 (Repetition)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#String.prototype.repeat()`, `#Array.prototype.fill()`, `#Array.prototype.join()`
- **문제의 본질**: 주어진 문자열을 특정 정수 $k$만큼 반복하여 새로운 결합 문자열 생성하기.

### 2. 두 가지 해결 전략 (Comparison)

#### 전략 A: `repeat()` 내장 메서드 사용
- **특징**: 문자열 객체에 내장된 전용 메서드를 활용한 선언적 프로그래밍.
- **장점**: 코드의 의도가 명확하며 실행 속도가 빠름 ($O(k)$).

#### 전략 B: `Array(k).fill().join()` 응용
- **특징**: 배열의 생성과 가공을 통한 명령형/함수형 조합 방식.
- **프로세스**: 
  1. `Array(k)`: 크기가 $k$인 희소 배열 생성.
  2. `.fill(string)`: 배열의 모든 요소를 대상 문자열로 초기화.
  3. `.join('')`: 배열 요소를 공백 없이 병합하여 문자열로 변환.

### 3. 주요 기술 포인트
- **메모리 할당**: 두 방식 모두 최종적으로 $k \times \text{length}$ 크기의 새로운 문자열 공간을 메모리에 할당함.
- **불변성 유지**: 원본 문자열을 수정하지 않고 연산 결과로 새로운 문자열을 반환하는 함수형 사고방식을 적용함.

### 4. 시행착오 및 깨달은 점
- **메서드 선택의 기준**: 단순 문자열 반복에는 `repeat()`이 효율적이지만, 반복되는 요소가 매번 변하거나 복잡한 로직이 개입될 경우 `Array.from()`이나 `fill()` 방식이 더 유연한 대안이 될 수 있음을 인지함.
- **가독성 vs 유연성**: 백엔드 개발 시 팀의 컨벤션과 요구 사항의 복잡도에 따라 적절한 도구를 선택하는 안목을 기름.

### 5. 참고 자료
- [MDN - String.prototype.repeat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
- [MDN - Array.prototype.fill()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
