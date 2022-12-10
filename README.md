# Frontend_Assignment
## Pokemon query (with API)

### 실행 방법
- Git Clone 후, Terminal에 `npm install` 또는 `yarn` 입력 후, `node_modules` 폴더가 생성 되었다면 `npm start` 혹은 `yarn start` 로 실행

### 개발 환경 및 테스트 환경
- 개발 환경
  - Node: v18.4.0
  - React.js: 18.2.0
  - IDE: visual studio code

### 구현 내용
- 기본적인 Design 변경
- `fetch()` 를 통해 API 호출 및 응답 처리 구현
- id를 통한 포켓몬 검색
- 검색 결과를 시각화 함 (포켓몬 이미지, 아이디, 이름)
- 추가적인 구현 내용
  - `Search` 화면 외에도 따로 `Main` 화면 구현 
    - 메인 화면이 있으면 좀 더 완성도 있을 것 같아서 추가적으로 구현하였습니다.   
  - 에러 처리 
    - 존재하지 않는 id 혹은 빈 값, 숫자가 아닌 문자열 등 잘못된 id 값이 들어갈 경우 `fail` 컴포넌트를 따로 제작하여 보여주었습니다.  
    - 짧은 시간 내에 완성도 있는 디자인을 만들어낼 수 있도록 `antd` UI 라이브러리를 사용하였습니다.  
  - 반응형 웹사이트 구현
    - 다양한 기기에서 사용할 수 있도록 반응형으로 추가 구현하였습니다.
- 구현한 화면은 아래 스크린샷을 통해 확인하실 수 있습니다.

### 스크린샷
- 메인 화면 
<img width="800" alt="image" src="https://user-images.githubusercontent.com/65989401/205613929-8cc60244-d0d4-4e8a-be89-def13ba0573e.png" />

- 검색 화면
<img width="800" alt="image" src="https://user-images.githubusercontent.com/65989401/205614622-3a978bce-761c-4199-80f1-0aaad7f7c961.png" />

- 검색 완료 화면 
<img width="800" alt="image" src="https://user-images.githubusercontent.com/65989401/205615111-c7669740-122e-4d0a-8885-5d6a2c03cdc4.png" />
<img width="800" alt="image" src="https://user-images.githubusercontent.com/65989401/205615789-2b544e9b-5a27-4b55-921c-baf12fe6ffa1.png" />


- 검색 실패 화면 
<img width="800" alt="image" src="https://user-images.githubusercontent.com/65989401/205615219-b9bbac00-e063-40d5-a0f7-3e41640f5f7b.png" />

