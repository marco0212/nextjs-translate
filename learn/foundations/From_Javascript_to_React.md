# From Javascript to React

## Rendering User Interfaces

React의 동작을 이해하기 위해 어떻게 브라우저가 UI를 그리기 위해 우리의 코드를 해석하는지 기본 동작을 이해할 필요가 있다.

유저가 웹 페이지에 접근하면 서버는 HTML 파일을 브라우저에게 전달한다.

![image](https://user-images.githubusercontent.com/50050459/215126065-ccb8d9cf-46d6-4e3c-9b99-78dddeb1ec30.png)

브라우저는 HTML을 읽고 Document Object Model(DOM)을 생성한다.

## What is the DOM?

DOM은 HTML 요소를 표현하는 객체다. 코드와 UI 사이에 브릿지 역할을 하고 부모와 자식 요소가 있는 트리 자료구조 형태를 띄고 있다.

![image](https://user-images.githubusercontent.com/50050459/215126508-f643ae02-c863-4a3c-9fdc-8549d41af09c.png)

DOM 메서드와 Javascript와 같은 프로그램 언어를 사용해 유저 이벤트를 listen하도록 할 수 있고, 특정 UI 요소를 선택, 추가, 수정, 삭제해 DOM을 가공할 수도 있다. DOM 가공은 특정 요소의 스타일이나 내용도 수정할 수 있다.

다음 섹션에서 어떻게 이를 사용할 수 있는지 알아보자.

[Next Lesson]()
