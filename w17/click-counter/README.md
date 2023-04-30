## Click Counter

<b>시작하기</b>

1. npm install

2. 디렉토리에 .env 파일 생성 후 개인 설정에 맞게 DATABASE_URL 환경변수 작성  
   ex. DATABASE_URL="사용하는 DB://유저명:비밀번호@접속주소/DB명"

3. DB 연결 후 prisma migration 으로 테이블 생성  
   ex. npx prisma migrate dev --name 이름  

4. Prisma seed로 데이터베이스 초기값 설정
   ex. npx prisma db seed  

5. next app 실행 / npm run dev

localhost:3000으로 열립니다~ 🌻
