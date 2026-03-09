-- 12세이하인 
-- 환자 이름, 번호 코드 나이 전화번호 조회
-- 전화번호 없으면 none
-- 나이기준 DESC
-- 나이 같으면 이름기준 ASC

SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO, 'NONE') AS TLNO
FROM PATIENT
WHERE AGE <= 12
    AND GEND_CD = 'W'
ORDER BY AGE DESC, PT_NAME ASC