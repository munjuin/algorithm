# [level 0] 마지막 두 원소 - 181927 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181927) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 02월 12일 10:54:17

### 문제 설명

<p>정수 리스트 <code>num_list</code>가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>num_list</code>의 길이 ≤ 10</li>
<li>1 ≤ <code>num_list</code>의 원소 ≤ 9</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>num_list</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[2, 1, 6]</td>
<td>[2, 1, 6, 5]</td>
</tr>
<tr>
<td>[5, 2, 1, 7, 5]</td>
<td>[5, 2, 1, 7, 5, 10]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>마지막 원소인 6이 그전 원소인 1보다 크기 때문에 6 - 1인 5를 추가해 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 5의 두 배인 10을 추가해 return합니다.</li>
</ul>

---

## 💡 학습 노트: 마지막 두 원소 (Array Tail Access)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Array_Indexing`, `#push_method`, `#at_method`
- **문제의 본질**: 배열의 끝단 데이터를 비교하여 동적인 규칙에 따라 새로운 원소를 생성하고 배열을 확장하기.

### 2. 작동 원리 및 설계
1. **끝단 데이터 접근**: `length - 1`, `length - 2` 인덱스를 사용하여 비교 대상 추출.
2. **조건부 연산**:
   - $last > prev \Rightarrow last - prev$
   - $last \le prev \Rightarrow last \times 2$
3. **배열 확장**: `push()` 메서드를 통해 원본 배열의 끝에 연산 결과 삽입.

### 3. 주요 기술 포인트
- **인덱스 접근법**: `array[array.length - 1]` 방식과 현대적인 `array.at(-1)` 방식의 차이 이해.
- **메서드 대상 구분**: 메서드가 배열에 작용하는지(Array method) 데이터 값에 작용하는지 명확히 구분.

### 4. 깨달은 점
- **배열 조작의 안정성**: 원본 배열을 직접 수정하는 `push()`와 같은 메서드 사용 시, 반환값(`return`)이 수정된 배열 자체인지 확인하는 습관이 중요함을 인지함.
- **변수 추상화**: `last`, `prev`와 같은 변수명을 사용하면 복잡한 인덱스 계산식보다 로직 파악이 훨씬 빠르다는 점을 배움.

### 5. 참고 자료
- [MDN - Array.prototype.at()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [MDN - Array.prototype.push()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
