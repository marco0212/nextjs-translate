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

### Essential Javascript for React

javascript와 React를 동시에 배울 수도 있지만 javascript와 친숙해지는 것이 React를 배우는데 더 수월할 수 있다.

다음 섹션에서 React의 핵심 개념에 대해 이야기할 것이다. 추후에 언급될 자바스크립트의 토픽은 아래와 같다.

- Function and Arrow Function
- Objects
- Array and array methods
- Descructuring
- Template literals
- Ternary Operators
- [Es Modules and Import /Export Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

이번 과정에서 Jvascript에 깊게 들어가지는 않지만 자바스크립트의 최신 버전을 유지하는 것은 도움이 될 것이다. 하지만 자바스크립트에 능숙하지 않다면 React를 이용해 웹을 만드는 것에 방해가 되지 않도록 해라.

---

### React Core Concepts

React를 활용해 웹 어플리케이션을 구현하는데 꼭 이해해야 하는 코어 개념이 몇가지 있다.

- Components
- Props
- State

다음 섹션에서 위의 개념들을 훑고 계속 이어 학습할 수 있을 자료들을 제공하겠다.

---

### Building UI with Components

UI는 컴포넌트라고 불리는 작은 블록으로 쪼개질 수 있다.

컴포넌트는 self-contained 되고, 재사용가능한 코드 snippet이다. 만약 컴포넌트를 레고 조각이라고 생각한다면 개별 요소를 더 큰 구조로 조합할 수 있다. 만약 UI 업데이트가 필요하면 특정 컴포넌트를 변경해 처리할 수 있다.

<img width="668" alt="image" src="https://user-images.githubusercontent.com/50050459/216778503-2e811a33-2caa-4085-afb3-4d3e9d0567c3.png">

이러한 모듈화는 프로젝트가 커짐에 따라 추가 및 수정에 다른 요소들의 touch 없이 더 쉽게 대응할 수 있다.

React 컴포넌트의 좋은 점은 모든 컴포넌트는 단지 Javascript 라는 점이다. Javascript 관점에서 React 컴포넌트를 어떻게 작성할 수 있는지 알아보자.

### Creating components

React에서 컴포넌트는 그저 함수이다. script 태그 안에 Header하는 함수를 작성할 수 있다.

```html
<script type="text/jsx">
  const app = document.getElementById("app")


  function header() {
  }

  ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
</script>
```

컴포넌트는 UI 엘리먼트를 반환하는 함수다. 함수의 반환문에 JSX를 작성할 수 있다.

```html
<script type="text/jsx">
  const app = document.getElementById("app")

  function header() {
     return (<h1>Develop. Preview. Ship. 🚀</h1>)
   }

  ReactDOM.render(, app)
</script>
```

DOM에 컴포넌트를 렌더링하기 위해서는 ReactDOM.render() 함수에 첫 번째 인자로 전달할 수 있다.

```html
<script type="text/jsx">

  const app = document.getElementById("app")

  function header() {
     return (<h1>Develop. Preview. Ship. 🚀</h1>)
   }


   ReactDOM.render(header, app)
</script>
```

하지만 위 코드를 브라우저에서 실행하면 에러를 확인할 수 있다. 이를 실행하기 위해서는 먼저 해야 할 것들이 있다.

먼저 React 컴포넌트는 plain한 html와 구별하기 위해 첫 문자를 대문자로 작성해야 한다.

```html
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

// Capitalize the React Component
ReactDOM.render(Header, app);
```

둘째, 일반적인 html 사용처럼 꺽세 괄호를 사용해야 한다.

```html
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

ReactDOM.render(<Header />, app);
```

### Nesting Components

어플리케이션은 일반적으로 하나 이상의 컴포넌트를 포함한다. HTML 엘리먼트 안에 다른 요소를 포함하듯 React 엘리먼트를 중첩할 수 있다.

이 예에서 HomePage 컴포넌트를 만들어보자.

```html
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}

ReactDOM.render(<Header />, app);
```

### Component Tree

아래처럼 form 컴포넌트 트리를 중첩시킬 수 있다.

<img width="670" alt="image" src="https://user-images.githubusercontent.com/50050459/216779050-45cc6e90-03fd-4ed4-b60c-6ee0da93e0c4.png">

예에서 보듯이 HomePage 컴포넌트는 Header, Article, Footer 컴포넌트를 포함할 수 있다. 그리고 각 컴포넌트는 자신의 자식 컴포넌트를 차례로 가질 수 있다. 예로 Header 컴포넌트는 Logo, Title, Navigation 컴포넌트를 포함하고 있다.

이런 모듈 형태는 어플리케이션 안의 다른 곳에서 재사용할 수 있도록 도와준다.

프로젝트에서 HomePage는 Top level 컴포넌트이므로 ReactDom.render 메서드에 전달될 수 있다.

```html
unction Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<HomePage />, app);
```

다음 섹션에서 prop과 이를 사용해 서로 다른 컴포넌트 간 데이터 전달이 어떻게 되는지 알아보도록 하자.

---

### Displaying Data with Props

만일 Header 컴포넌트를 재사용한다면 이것은 같은 컨텐츠를 동시에 보여줄 것이다.

```html
function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
      <Header />
    </div>
  );
}
```

하지만 만일 다른 텍스트를 전달하고 싶거나 데이터를 외부에서 fetch 하기 때문에 어떤 데이터가 들어올지 미리 알 수 없다면 어쩔 것인가?

일반적인 HTML 엘리먼트에서는 요소의 행동을 변경시킬 수 있는 attribute라는 data를 전달할 수 있다. 예를 들어 img 엘리먼트에 src 속성을 변경하므로 보이는 이미지를 변경할 수 있다. a 태그에 href를 변경하므로써 링크의 목적지를 변경할 수도 있다.

이와 같게 React 컴포넌트에는 prop이라고 불리는 속성에 data를 전달할 수 있다.

<img width="674" alt="image" src="https://user-images.githubusercontent.com/50050459/216779515-27885596-0b9a-4ec5-8597-f39eac11bccf.png">

Javascript 함수와 유사하게 컴포넌트의 동작을 바꾸거나 스크린에 렌더링될 때 어떤 것이 보여야 할지에 대한 커스텀한 인자 컴포넌트를 설계할 수 있다.

> Note
> React에서 데이터 흐름은 컴포넌트 트리의 아래로 흐른다. 이를 단방향 데이터 흐름이라고 부른다. 상태는 부모 컴포넌트에서 prop으로 자식 요소들에게 전달된다.


### Using props

HomePage 컴포넌트에서 title 속성을 Header 컴포넌트에게 전달할 수 있다.

```html
// function Header() {
//   return <h1>Develop. Preview. Ship. 🚀</h1>
// }

function HomePage() {
  return (
    <div>
      <Header title="React 💙" />
    </div>
  );
}

// ReactDOM.render(<HomePage />, app)
```

자식 요소인 Header 컴포넌트는 함수의 첫 번째 인자 prop으로 받을 수 있다.

```html
function Header(props) {
//   return <h1>Develop. Preview. Ship. 🚀</h1>
// }

// function HomePage() {
//   return (
//     <div>
//       <Header title="React 💙" />
//     </div>
//   )
// }

// ReactDOM.render(<HomePage />, app)
```

만약 prop을 console.log로 찍어본다면 title 속성을 가진 객체를 확인할 수 있을 것이다.

```html
function Header(props) {
    console.log(props) // { title: "React 💙" }
//   return <h1>React 💙</h1>
// }

// function HomePage() {
//   return (
//     <div>
//       <Header title="React 💙" />
//     </div>
//   )
// }

// ReactDOM.render(<HomePage />, app)
```

Prop은 객체이기 때문에 이름을 명시적으로 보이게 하기 위해서 함수의 인자안에서 object descructuring할 수 있다.

```html
function Header({ title }) {
    console.log(title) // "React 💙"
//  return <h1>React 💙</h1>
// }

// function HomePage() {
//   return (
//     <div>
//       <Header title="React 💙" />
//     </div>
//   )
// }

// ReactDOM.render(<HomePage />, app)
```

그리고 title을 h1 태그로 변환할 수 있다.

```html
function Header({ title }) {
  console.log(title);
  return <h1>title</h1>;
}
```

만일 브라우저에서 프로젝트를 연다면 title이라는 실제 단어가 보이는 것을 확인할 수 있을 것이다. 왜나하면 React는 plain 텍스트를 렌더링하는 것을 의도로 파악했을 것이기 때문이다.

React에게 Javascript 변수를 표시할 방법이 필요한다.

### Using Variables JSX

선언한 변수를 사용하기 위해서는 javascript를 jsx 안에서 바로 사용할 수 있도록 하는 특별한 JSX 문법 중괄호를 사용해야 한다.

```js
// function Header({title}) {
//  console.log(title)
return <h1>{title}</h1>;
// }
```

중괄호를 JSX land에서 Javascript land에 들어가는 길이라고 생각해도 된다. 이 안에 Javascript 문 어떤 것이든 넣을 수 있다.

1. dot notation을 사용한 객체의 속성

```js
function Header(props) {
  return <h1>{props.title}</h1>;
}
```

2. 템플릿 리터럴

```js
function Header({ title }) {
  return <h1>{`Cool ${title}`}</h1>;
}
```

3. 함수의 반환값

```js
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}

function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}
```

4. 삼항 연산자

```js
function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
```

title prop으로 어떤 문자열도 전달할 수 있게 되었다. 물론 삼항 연산자를 통해 default 케이스도 대응했기 때문에 아무런 prop을 전달하지 않아도 된다.

```js
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

컴포넌트는 이제 어플리케이션에서 다르게 재사용될 수 있도록 하는 Prop을 받을 수 있게 되었다.

```html
function HomePage() {
  return (
    <div>
      <Header title="React 💙" />
      <Header title="A new title" />
    </div>
  );
}
```

### Iterating through lists

데이터를 목록 형태로 보여주는 것은 일반적인 케이스이다. 배열 메서드를 이용해서 데이터를 가공하거나 동일한 스타일이지만 다른 정보를 포함하고 있는 UI 요소를 생성하는 것을 할 수 있다.

> Note: React는 데이터 패칭에 대해서는 unopinionated 하기 때문에 당신에게 적합한 최적의 솔루션을 선택하도록 한다. 추후에 next.js의 데이터 fetching에 대해 논의할 것이다. 하지만 지금은 간단한 배열 데이터를 사용할 것이다.

이름을 가진 배열을 HomePage 컴포넌트에 추가하자.

```js
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
    </div>
  );
}
```

array.map() 메서드를 활용해서 이름 요소를 list item으로 매핑할 수 있다.

```js
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

중괄호를 사용해서 javascript와 jsx land를 어떻게 오갔는지 확인해라.

만약 이 코드를 실행시킨다면 React는 key prop이 없다고 경고할 것이다. 왜냐하면 React는 업데이트할 list item의 알기 위해 유일한 식별할 수 있는 것을 필요로 하기 때문이다.

지금의 경우에는 모두 유일한 값이기 때문에 name을 사용해도 괜찮지만 item의 id와 같은 유일함이 보장되는 값을 사용하는 것을 권장한다.

```js
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

다음 Section에서 상태에 대해서 알아보고 어떻게 유저 이벤트를 listen하는지 알아보자.

---

### Adding Interactivity with State

React가 어떻게 상호작용을 도와주는지 알아보자.

HomePage 컴포넌트 안에 like button을 추가해보자. 먼저 return 문 안에 button 엘리먼트를 추가하자.

```js
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button>Like</button>
    </div>
  );
}
```

### Listening to Events

클릭할 때 무언가를 하게 만들기 위해서 onClick 이벤트를 만들 수 있다.

```js
function HomePage() {
  // ...
  return (
    <div>
      {/* ... */}
      <button onClick={}>Like</button>
    </div>
  );
}
```

리엑트에서 이벤트 이름은 카멜 케이스다. onClick 이벤트는 UI에서 반응할 수 있도록 하는 많은 이벤트 중 하나이다. input의 onChange나 form의 onSubmit 과 같이 말이야.

### Handling Events

이벤트가 trigger 될 때 호출될 핸들러 함수를 정의할 수 있다. return 문 이전에 handleClick 함수를 만들어보자.

```js
function HomePage() {
  //    ...
  function handleClick() {
    console.log('increment like count');
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Like</button>
    </div>
  );
}
```

### State and Hooks

React는 Hook이라는 함수를 제공한다. Hook은 상태와 같은 로직을 추가할 수 있도록 한다. 상태는 UI에 있는 상태로 일반적으로 유저의 상호작용에 의해 시간이 지남에 따라 변경된다. 

<img width="673" alt="image" src="https://user-images.githubusercontent.com/50050459/216797894-a30e2956-85bc-417b-841d-5a5e1efe67de.png">

상태는 값을 저장하고 유저가 like 버튼을 클릭한 횟수를 올릴 수 있도록 사용될 수 있다. 상태를 관리할 수 있는 React Hook은 useState로 호출될 수 있다.

```js
function HomePage() {
  React.useState();
}
```

useState는 배열을 반환한다. 그리고 배열의 각 요소는 배열 destructuring을 통해 컴포넌트 안에서 접근 및 사용될 수 있다.

```js
function HomePage() {
  const [] = React.useState();

  // ...
}
```

배열의 첫번째 요소는 상태값이다. 이름은 어떤 것이든 될 수 있다. 다만 서술적으로 짓기를 권장한다.

```js
function HomePage() {
  const [likes] = React.useState();

  // ...
}
```

두번째 아이템은 update하는 함수이다. 이것 또한 이름을 아무렇게 지어도 되지만 업데이트하려는 변수의 이름 앞에 prefix로 set을 붙이는 것이 일반적이다.

```js
function HomePage() {
  const [likes, setLikes] = React.useState();

  // ...
}
```

또한 like의 초기 상태값을 0으로 설정할 수 있다.

```js
function HomePage() {
  const [likes, setLikes] = React.useState(0);
}
```

그리고는 상태가 잘 동작하는지 컴포넌트 안에서 값을 사용해볼 수 있다.

```js
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);

  return (
    // ...
    <button onClick={handleClick}>Like({likes})</button>
  );
}
```

state update 함수를 호출할 수 있기 때문에 이전에 정의했던 handleClick 함수에 이를 추가할 수 있다.

```js
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
```

버튼을 클릭하게 되면 setLikes 함수에 현재 like + 1 이 인자로 전달되어 handleClick 함수를 실행하게 된다.

> Note: 컴포넌트 함수의 첫번째 인자로 전달되는 Prop과는 다르게 상태는 컴포넌트 안에서 초기화되고 사용된다. 상태를 자식 컴포넌트에게 prop으로 전달할 수 있지만 상태를 업데이트 하는 로직은 초기화된 컴포넌트에 유지되어야 한다.

### Managing State

이는 상태에 대한 소개에 불과하다. 상태를 관리하고 데이터 흐름을 관리하는 것에 대해 학습할 수 있는 것은 매우 많이 있다. 더 나가가기 위해서 react 문서의 Adding [interactivity](https://beta.reactjs.org/learn/adding-interactivity)와 [Managing State](https://beta.reactjs.org/learn/managing-state)로 가보기를 추천한다




