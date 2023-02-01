## From Javascript to React

### Rendering User Interfaces

React의 동작을 이해하기 위해 어떻게 브라우저가 UI를 그리기 위해 우리의 코드를 해석하는지 기본 동작을 이해할 필요가 있다.

유저가 웹 페이지에 접근하면 서버는 HTML 파일을 브라우저에게 전달한다.

![image](https://user-images.githubusercontent.com/50050459/215126065-ccb8d9cf-46d6-4e3c-9b99-78dddeb1ec30.png)

브라우저는 HTML을 읽고 Document Object Model(DOM)을 생성한다.

### What is the DOM?

DOM은 HTML 요소를 표현하는 객체다. 코드와 UI 사이에 브릿지 역할을 하고 부모와 자식 요소가 있는 트리 자료구조 형태를 띄고 있다.

![image](https://user-images.githubusercontent.com/50050459/215126508-f643ae02-c863-4a3c-9fdc-8549d41af09c.png)

DOM 메서드와 Javascript와 같은 프로그램 언어를 사용해 유저 이벤트를 listen하도록 할 수 있고, 특정 UI 요소를 선택, 추가, 수정, 삭제해 DOM을 가공할 수도 있다. DOM 가공은 특정 요소의 스타일이나 내용도 수정할 수 있다.

다음 섹션에서 어떻게 이를 사용할 수 있는지 알아보자.

---

## Updating the UI with Javascript and DOM Methods

DOM 메서드를 활용해 html에 h1 태그를 추가해보자.

에디터를 열고 index.html을 생성한 후 아래 코드를 추가해보자.

```html
<!-- index.html -->
<html>
  <body>
    <div></div>
  </body>
</html>
```

그리고 나중에 요소를 조회할 수 있게 div에 id를 추가하자.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
  </body>
</html>
```

HTML에 javascript를 작성할 수 있도록 script 태그도 추가하자

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript"></script>
  </body>
</html>
```

이제 script 태그 안에 DOM 메서드를 사용할 수 있다. getElementById를 활용해 id를 부여한 div 요소를 선택해보자.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script type="text/javascript">
      const app = document.getElementById('app');
    </script>
  </body>
</html>
```

이어서 DOM 메서드를 활용해서 h1 요소를 새롭게 생성해 추가해보자.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');

      // Create a new H1 element
      const header = document.createElement('h1');

      // Create a new text node for the H1 element
      const headerContent = document.createTextNode(
        'Develop. Preview. Ship. 🚀',
      );

      // Append the text to the H1 element
      header.appendChild(headerContent);

      // Place the H1 element inside the div
      app.appendChild(header);
    </script>
  </body>
</html>
```

잘 동작하는지 확인하기 위해 HTML 파일을 브라우저에서 열어보자. h1 태그에 'Develop. Preview. Ship. 🚀'. 이 보여야 한다.

### HTML vs DOM

브라우저의 개발자 도구를 통해 DOM 요소를 확인한다면 DOM에 h1 요소가 추가된 것을 확인할 수 있다. 브라우저의 DOM은 이전에 생성한 HTML 소스코드와 차이가 있어 보인다.

![image](https://user-images.githubusercontent.com/50050459/215132527-f5b8dd65-56b2-4f57-8bbf-b49e00807ec8.png)

그 이유는 HTML은 초기 페이지 내용을 표현하는 반면 DOM은 Javascript에 의해 변경된 페이지 내용을 표현하기 때문이다.

Javascript를 활용해서 DOM을 수정하는 것은 매우 강력하지만 장황하다. h1 요소에 조금의 텍스트를 추가하기 위해 우리는 아래와 같은 코드를 작성해야 했다.

```html
<!-- index.html -->
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Develop. Preview. Ship. 🚀');
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

만약 앱이나 팀의 규모가 커진다면 이런 방식으로는 매우 어려운 상황에 놓일 것이다.

이런 접근 방식으로 개발자들은 컴퓨터에게 어떻게 보여야 할지를 명령하며 많은 시간을 사용해야 했다. 하지만 어떻게 DOM을 업데이트할지를 컴퓨터가 알아서 하도록 하고 무엇을 보여주고 싶은지를 설명하면 더 좋지 않을까?

### Imperative vs Declarative Programming

위 코드의 예제는 좋은 명령형 프로그래밍의 예시이다. 어떻게 UI를 변경할지를 단계별로 설명하고 있다. 하지만 UI를 구현할 때 있어서 선언적 접근은 꽤 유용하다. 이 방식은 개발 과정을 빠르게 하기 때문이다. DOM 메서드를 작성하는 대신 개발자가 보여주고 싶은 것을 선언할 수 있다면 이는 아주 편할 것이다.

명령형 프로그래밍이란 셰프에게 피자를 만드는데 필요한 각 단계 별 명령을 주는 것이고 선언적 프로그래밍은 피자의 각 단계에 대한 관심없이 피자를 주문하는 것이다.🍕

[React]()는 선언적으로 UI를 만들 수 있게 하는 인기 있는 라이브러리다.

### React: A declarative UI library

개발자는 React에게 UI가 어떻게 되었으면 하는지를 이야기하고 React는 이를 알아서 각 단계별로 DOM을 조작하며 처리한다.

---

### Getting Started with React

리액트를 프로젝트에서 사용하기 위해서는 [unpkg.com]() 라는 외부 사이트에서 React 스크립트를 로드해야 한다.

- react 는 React의 핵심 라이브러리이다.
- react-dom은 DOM에서 react를 사용할 수 있게 특정 메서드를 제공한다

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app');
    </script>
  </body>
</html>
```

순수한 자바스크립트를 사용해 DOM을 조작하는 대신 ReactDOM.render() 메서드를 사용해 react에게 `<h1>` 타이틀을 #app 요소 안에 렌더링하게끔 할 수 있다.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
  </body>
</html>
```

하지만 위 코드를 브라우저에서 실행하면 syntax 에러를 보게 된다.

<img width="544" alt="image" src="https://user-images.githubusercontent.com/50050459/215333291-781c45b6-f1a8-4585-9871-4409be6ace13.png">


왜냐하면 `<h1>...</h1>`은 유효한 자바스크립트 문법이 아니기 때문이다. 이런 코드를 JSX라고 부른다.

### What is JSX?

JSX는 HTML 문법과 유사하게 UI를 작성할 수 있는 자바스크립트의 확장 문법이다. JSX의 장점에 대해서는 다음([three JSX rules](https://beta.reactjs.org/learn/writing-markup-with-jsx#the-rules-of-jsx))를 확인하고, 지금은 HTML과 Javascript의 문법 외에는 학습할 필요가 없다.

브라우저는 JSX를 인지하지 못하기 때문에 바벨 같은 컴파일러를 통해 JSX를 일반 자바스크립트 코드로 변환시켜주어야 한다.

### Adding Babel to your project

프로젝트에 바벨을 추가히기 위해서 아래 코드를 index.html 파일에 붙여넣자.

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

바벨에 어떤 코드로 변환해야 할지 알려주기 위해 script 타입을 `type=text/jsx`로 변경하자.

```html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
  </body>
</html>
```

브라우저에서 제대로 동작하는지 확인해보자.

선언적으로 작성한 React 코드와 명령적으로 작성한 이전 섹션의 코드를 비교해보자.

```html
<script type="text/jsx">
  const app = document.getElementById("app")
  ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
</script>
```

```html
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Develop. Preview. Ship. 🚀');
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

React를 사용해 반복되는 코드가 많이 제거되었음을 확인할 수 있다.

> Note: React가 어떻게 UI를 변경하는지를 알 필요는 없지만 더 잘 이해하고 싶다면 [UI trees](https://beta.reactjs.org/learn/preserving-and-resetting-state#the-ui-tree)와 [render method](https://beta.reactjs.org/reference/react-dom/render)를 확인해보자.

