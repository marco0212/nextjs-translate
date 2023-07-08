# React Essentials

Next.js를 사용해 웹 어플리케이션을 구현할 때, React의 새로운 기능인 서버 컴포넌트를 잘 이해하는 것은 도움이 됩니다. 이 페이지에서는 서버 컴포넌트와 클라이언트 컴포넌트를 언제 사용할지 차이점과 권장되는 패턴에 대해 알아봅니다.

만약 React에 입문자라면 [공식 문서](https://react.dev/learn)를 참고하기를 권장합니다. 그 외에 아래에 훌륭한 자료들이 있습니다.
- [React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Learn React](https://react.dev/learn/describing-the-ui)
[]()
---

## Server Components

서버 컴포넌트와 클라이언트 컴포넌트를 통해 풍성한 상호작용이 가능한 클라이언트 사이드 앱과 성능이 준수한 서버 사이드 렌더링을 모두 활용하며 웹 어플리케이션을 구축할 수 있습니다. 

### Thinking in Server Components

React가 UI 구축에 대한 우리의 사고를 바꾼 것과 유사하게 React Server Component(RSC)는 서버와 클라이언트의 이점을 활용하는 새로운 mental model을 제시했습니다.

클라이언트 사이드에서 전체 앱을 렌더링하는 대신에 React는 목적에 따라 어느 곳에서 컴포넌트를 렌더링할 지에 대해 선택할 수 있는 유연성을 제공합니다.

예를 들어 아래와 같은 페이지의 어플리케이션이 있다고 가정합시다.

![image](https://github.com/marco0212/nextjs-translate/assets/50050459/7bf2776f-d8b2-40cb-98fd-03618fc02903)

만약 페이지 컴포넌트를 작은 단위로 분리했다면 대부분의 컴포넌트는 상호작용을 필요로 하지 않고 서버에서 렌더링될 수 있다는 것을 알 수 있을 것이다. 몇몇의 상호작용을 포함한 작은 컴포넌트들은 클라이언트에서 렌더링할 수 있다. 이것이 Next.js의 server-first 접근 방식이다.

### Why Server Components?

`그럼 왜 서버 컴포넌트인가?` 라는 생각이 들지도 모르겠다. 클라이언트 컴포넌트를 사용하는 것과 비교해 어떤 이점이 있을까?

서버 컴포넌트는 서버의 인프라를 더 적극적으로 활용할 수 있게 한다. 얘를 들어 데이터 패치를 데이터베이스와 더 가까운 서버 쪽으로 옮길 수 있다. 또한 이전에 자바스크립트 번들 사이즈에 영향을 줬던 크기가 큰 의존성들을 서버측에 유지시킬 수 있다. 이를 통해 성능 개선을 일으킬 수 있다. 서버 컴포넌트는 마치 PHP나 Ruby on Rails처럼 느껴질 수 있지만 React의 컴포넌트 모델의 유연성과 강력함이 함께 있다.

서버 컴포넌트를 사용하면 초기 페이지의 로드는 더 빨리지고 클라이언트 자바스크립트의 번들 크기는 줄어든다. 클라이언트 측 런타임은 캐싱이 가능하고 크기가 예측할 수 있으며 어플리케이션이 커져도 증가하지 않습니다. 추가 자바스크립트는 컴포넌트에 상호작용이 있는 경우에만 추가된다.

When a route is loaded with Next.js, the initial HTML is rendered on the server. This HTML is then progressively enhanced in the browser, allowing the client to take over the application and add interactivity, by asynchronously loading the Next.js and React client-side runtime.

서버 컴포넌트로의 전환을 좀 더 쉽게 하기 위해 앱 router 내부의 모든 컴포넌트는 기본적으로 서버 컴포넌트입니다. 이는 적용시키기 위해 따로 처리할 작업이 없으며 훌륭한 퍼포먼스 성능을 성취할 수 있게 합니다. 물론 `'use client'` 지시자를 사용해 클라이언트 컴포넌트를 사용할 수도 있습니다.

https://nextjs.org/docs/getting-started/react-essentials#client-components
