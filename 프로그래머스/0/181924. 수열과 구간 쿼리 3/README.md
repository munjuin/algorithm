# [level 0] 수열과 구간 쿼리 3 - 181924 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181924?language=javascript) 

### 성능 요약

메모리: 34 MB, 시간: 0.59 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 03월 05일 13:17:04

### 문제 설명

<p>정수 배열 <code>arr</code>와 2차원 정수 배열 <code>queries</code>이 주어집니다. <code>queries</code>의 원소는 각각 하나의 <code>query</code>를 나타내며, <code>[i, j]</code> 꼴입니다.</p>

<p>각 <code>query</code>마다 순서대로 <code>arr[i]</code>의 값과 <code>arr[j]</code>의 값을 서로 바꿉니다.</p>

<p>위 규칙에 따라 <code>queries</code>를 처리한 이후의 <code>arr</code>를 return 하는 solution 함수를 완성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>arr</code>의 길이 ≤ 1,000

<ul>
<li>0 ≤ <code>arr</code>의 원소 ≤ 1,000,000</li>
</ul></li>
<li>1 ≤ <code>queries</code>의 길이 ≤ 1,000

<ul>
<li>0 ≤ <code>i</code> &lt; <code>j</code> &lt; <code>arr</code>의 길이</li>
</ul></li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>queries</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[0, 1, 2, 3, 4]</td>
<td>[[0, 3],[1, 2],[1, 4]]</td>
<td>[3, 4, 1, 0, 2]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>각 쿼리에 따라 <code>arr</code>가 다음과 같이 변합니다.</li>
</ul>
<table class="table">
        <thead><tr>
<th>arr</th>
</tr>
</thead>
        <tbody><tr>
<td>[0, 1, 2, 3, 4]</td>
</tr>
<tr>
<td>[3, 1, 2, 0, 4]</td>
</tr>
<tr>
<td>[3, 2, 1, 0, 4]</td>
</tr>
<tr>
<td>[3, 4, 1, 0, 2]</td>
</tr>
</tbody>
      </table>
<ul>
<li>따라서 [3, 4, 1, 0, 2]를 return 합니다.</li>
</ul>

---

## 💡 학습 노트: 수열과 구간 쿼리 3 (Swap Logic)

### 1. 문제 핵심 요약
- **핵심 키워드**: `#Array_Swap`, `#2D_Array_Iteration`, `#Destructuring`
- **문제의 본질**: 쿼리 리스트를 순차적으로 처리하며 배열 내 요소의 위치를 동적으로 변경하는 '참조형 데이터 조작' 익히기.

### 2. 작동 원리
- **입력**: 원본 데이터(`arr`)와 명령 리스트(`queries`).
- **프로세스**: 쿼리마다 명시된 두 인덱스의 값을 서로 맞교환.
- **결과**: 모든 교환이 누적 적용된 최종 배열 반환.

### 3. 주요 기술 포인트
- **구조 분해 할당(Destructuring)**: `[a, b] = [b, a]` 패턴을 통해 가독성 높은 Swap 로직 구현.
- **배열의 가변성(Mutability)**: 함수 인자로 전달된 배열이 직접 수정되어 반환되는 자바스크립트의 참조 특성 활용.

### 4. 깨달은 점
- **복잡도 관리**: 2차원 배열이 주어져도 '명령어 하나'의 로직에만 집중하여 문제를 쪼개면 훨씬 단순해짐을 인지함.
- **시각화의 힘**: 인덱스의 변화를 손으로 그려보는 과정이 코드 작성보다 선행되어야 함을 배움.

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
