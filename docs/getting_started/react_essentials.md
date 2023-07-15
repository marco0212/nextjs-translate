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

## Client Components

클라이언트 컴포넌트를 사용해 어플리케이션에 클라이언트 사이드의 상호작용을 추가할 수 있다. Next.js에서 이것들은 서버에서 pre-rendered되고 클라이언트에서 hydrated될 것입니다. 클라이언트 컴포넌트를 여태 사용해왔던 page router에서 동작하던 컴포넌트로 생각해도 무방합니다.

### The "use client" directive

"use client" 지시작는 서버 컴포넌트와 클라이언트 컴포넌트 사이 경계를 선언하기 위한 컨벤션이다.

```tsx
'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```
`"use client"`는 서버 컴포넌트 사이 클라이언트 컴포넌트 코드에 자리한다. 이것은 import 문 상단, 파일의 맨 윗 부분에 위치하여 서버 컴포넌트에서 클라이언트 파트의 point를 cut-off 위해 선언된다. 한번 `"use client"`가 선언되면 자식 컴포넌트를 포함해 import되는 모든 모듈은 클라이언트 번들로 여겨진다.

서버 컴포넌트가 기본 동작이기 때문에 `"use client"` 지시자가 없는 모든 컴포넌트들은 서버 컴포넌트이다.

> Good to know
>
> - 서버 컴포넌트에 종속되어 있는 컴포넌트들은 서버에서 렌더링이 보장됩니다
> - 클라이언트에 종속되어 있는 컴포넌트들은 우선적으로 클라이언트에서 렌더링됩니다. 하지만 Next.js에서는 서버에서 pre-rendering이 되고 클라이언트에서 hydration이 진행됩니다
> - `"use client"`는 import 문 상단에 선언되어야 합니다.
> - `"use client"`는 모든 파일에서 선언될 필요는 없습니다. 클라이언트 범위의 모둘에서만 한번 선언되면 됩니다. 진입점에서 선언되면 내부 컴포넌트들은 클라이언트 컴포넌트로 간주됩니다.

## When to use Server and Client Components?

서버 컴포넌트와 클라이언트 컴포넌트의 결정을 단순화하려면 클라이언트 컴포넌트의 use case가 존재할 때까지 서버 컴포넌트를 사용하는 것이 권장됩니다.

아래 테이블은 각 컴포넌트들의 use case의 차이점을 요약한 것입니다.

| What do you need to do?                                                    | Server Component | Client Component |
| -------------------------------------------------------------------------- | ---------------- | ---------------- |
| Fetch data                                                                 | ✅               | ❌               |
| Assess backend resources (directly)                                        | ✅               | ❌               |
| Keep sensitive information on the server (access tokens, API keys, etc)    | ✅               | ❌               |
| Keep large dependencies on the server / Reduce client-side Javascript      | ✅               | ❌               |
| Add interactivity and event listener (`onClick()`, `onChange()`, etc)      | ❌               | ✅               |
| Use State and Lifecycle Effects (`useState()`, `useEffect()`, etc)         | ❌               | ✅               |
| Use browser-only APIs                                                      | ❌               | ✅               |
| Use custom hooks that depend on state, effects, or browser-only APIs       | ❌               | ✅               |
| Use React Class components                                                 | ❌               | ✅               |

## Patterns

### Moving Client Components to the Leaves

어플리케이션의 성능을 향상 시키기 위해서 클라이언트 컴포넌트를 컴포넌트 트리의 최하단으로 이동시키는 것을 권장한다.

예를 들어 정적인 요소와 상호작용을 가진 검색바 컴포넌트를 포함하는 레이아웃 컴포넌트가 있다고 했을 떄, 전체 레이아웃 컴포넌트를 클라이언트 컴포넌트로 만드는 대신에, 상호작용 관련된 로직을 클라이언트 컴포넌트로 이동시키고(e.g. `<SearchBar />`) 레이아웃 컴포넌트는 서버 컴포넌트로 유지하는 방식이다. 이를 통해 모든 컴포넌트의 자바스크립트 번들을 클라이언트로 전달하지 않아도 되게 된다.

```tsx
// SearchBar is a Client Component
import SearchBar from './searchbar'
// Logo is a Server Component
import Logo from './logo'
 
// Layout is a Server Component by default
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Logo />
        <SearchBar />
      </nav>
      <main>{children}</main>
    </>
  )
}
```

### Composing Client and Server Components

서버 컴포넌트와 클라이언트 컴포넌트는 같은 컴포넌트 트리에서 조합될 수 있다.

뒷단에서 React는 아래와 같은 순서로 렌더링을 다루게 된다.

- 클라이언트로 결과물을 보내기 이전에 서버에서 React는 모든 서버 컴포넌트를 렌더링한다.
  - 여기에는 클라이언트 컴포넌트에 중첩되어 있는 서버 컴포넌트들도 모두 포함된다.
  - 이 과정에서 발생된 클라이언트 컴포넌트는 모두 생략된다.
- React는 클라이언트에서 서버 컴포넌트의 렌더링된 결과와 클라이언트 컴포넌트 및 슬롯을 렌더링하여 수행된 작업을 모두 병합한다.
  - 서버 컴포넌트가 클라이언트 컴포넌트 내부에 중첩된 경우 클라이언트 컴포넌트 내에 올바르게 배치된다.
 
> Good to know
>
> Next.js에서 초기 페이지 로드 시에 클라이언트와 서버 모두의 결과물은 서버에 의해 pre-render되어 HTML이 된다. 이는 초기 페이지 로드를 더 빠르게 제공한다.

### Nesting Server Components inside Client Components

위에 설명한 렌더링 흐름을 고려할 때 서버 컴포넌트를 클라이언트 컴포넌트로 가져오는 것은 제한이 있습니다. 이런 접근 방식에는 추가 서버 round trip이 필요하기 때문입니다.

```tsx
'use client'
 
// This pattern will **not** work!
// You cannot import a Server Component into a Client Component.
import ExampleServerComponent from './example-server-component'
 
export default function ExampleClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
 
      <ExampleServerComponent />
    </>
  )
}
```

**권장되는 패턴: 서버 컴포넌트를 클라이언트 컴포넌트의 Prop으로 전달**

클라이언트 컴포넌트를 설계할 때 React Prop을 서버 컴포넌트를 전달하기 위한 slot으로 사용할 수 있다.

서버 컴포넌트는 서버에서 렌더링되고 클라이언트 컴포넌트는 클라이언트에서 렌더링될 때 slot은 서버 컴포넌트의 렌더링된 결과로 채워진다.

일반적으로 children prop을 사용해 slot을 만든다. 위 코드에서는 children prop을 전달 받고 `<ExampleClientComponent />` 컴포넌트를 상위 부모 컴포넌트로 이동시키는 것이다.

```tsx
'use client'
 
import { useState } from 'react'
 
export default function ExampleClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
 
      {children}
    </>
  )
}
```

이제 `<ExampleClientComponent />`는 children이 무엇인지 알지 못한다. children이 서버 컴포넌트의 결과물로 채워질 것이라는 사실을 모른다.

`<ExampleClientComponent />` 컴포넌트의 유일한 책임은 자식 컴포넌트가 배치될 위치를 결정하는 것입니다.

서버 컴포넌트에서는 클라이언트 컴포넌트와 서버 컴포넌트를 모두 import할 수 있습니다. 그리고 서버 컴포넌트를 클라이언트 컴포넌트의 자식으로 전달할 수 있습니다.

```tsx
// This pattern works:
// You can pass a Server Component as a child or prop of a
// Client Component.
import ExampleClientComponent from './example-client-component'
import ExampleServerComponent from './example-server-component'
 
// Pages in Next.js are Server Components by default
export default function Page() {
  return (
    <ExampleClientComponent>
      <ExampleServerComponent />
    </ExampleClientComponent>
  )
}
```

이러한 접근 방식으로 인해 `<ExampleClientComponent />`, `<ExampleServerComponent />`는 디커플될 수 있고 독립적으로 각각의 환경에서 렌더링될 수 있습니다.

> Good to know
>
> - 이러한 패턴은 이미 layout과 pages에 적용되어 있기 때문에 추가적인 wrapper 컴포넌트를 만들 필요는 없습니다.
> - React 컴포넌트를 다른 컴포넌트에게 전달하는 것은 새로운 개념이 아닌 항상 적용되왔던 Composition의 일부입니다.
> - 이러한 composition 전략은 컴포넌트가 Prop으로 어떤 값을 전달 받을지 알지 못하기 때문에 서버 컴포넌트와 클라이언트 컴포넌트에서 잘 동작합니다. 오직 전달된 것을 어디에 두어야 할지에 대해서만 책임을 가지고 있습니다.
>   - 이렇게 하면 클라이언트 구성 요소가 클라이언트에서 렌더링되기 훨씬 전에 서버에서 전달된 prop을 독립적으로 렌더링할 수 있습니다.
>   - The very same strategy of "lifting content up" has been used to avoid state changes in a parent component re-rendering an imported nested child component
> - prop이 꼭 children이어야 하는 것은 아닙니다. 어떤 prop이든 JSX를 전달할 수 있습니다.

### Passing props from server to Client Components (Serialization)

서버 컴포넌트에서 클라이언트 컴포넌트로 전달되는 Prop은 직렬화가 가능해야 한다. 이는 함수, Date와 같은 것들은 클라이언트 컴포넌트로 바로 전달될 수 없음을 의미한다.

> Where is the Network Boundary?
>
> App 라우터에서 네트워크 경계는 서버 컴포넌트와 클라이언트 컴포넌트의 사이이다. 이것은 경계가 getStaticProps/getServerSideProps와 페이지 컴포넌트 사이에 있던 것과 다르다. 서버 컴포넌트 내부에서 가져온 데이터는 클라이언트 컴포넌트로 전달되지 않는 한 네트워크 경계를 넘지 않기 때문에 직렬화할 필요가 없다. 서버 컴포넌트를 사용한 데이터 가져오기에 대해 자세히 알아봐라

### Keeping Server-Only Code out of Client Components (Poisoning)

자바스크립트 모듈은 서버 컴포넌트와 클라이언트 컴포넌트 모두에서 공유될 수 있기 때문에 서버에서만 실행되도록 의도된 코드가 클라이언트에 몰래 전달될 수 있다.

예를 들어 아래 코드를 살펴보자.

```tsx
export async function getData() {
 const res = await fetch('https://external-service.com/data', {
  headers: {
   authorization: process.env.API_KEY 
  }
 });

  return res.json();
}
```

얼필 보면 getData가 서버와 클라이언트 모두에서 작동하는 것처럼 보인다. 하지만 환경 변수 API_KEY는 NEXT_PUBLIC 접두사가 없기 때문에 서버에서만 접근할 수 있는 비공개 변수다. Next.js는 보안 정보 유출을 방지하기 위해 클라이언트 코드에서 개인 환경 변수를 빈 문자열로 바꾼다.

결과적으로 `getData()`는 클라이언트에서 import되고 호출될 수 있지만 이것은 예상한 대로 동작하지 않는다. 그리고 변수를 공개하면 함수가 클라이언트에서 작성하지만 정보가 유출될 수 있다.

그렇기 때문에 이 함수는 서버에서만 호출되어야 하는 의도로 작성된 코드이다.

### The "Server only" package

위와 같은 의도치 않은 서버 패키지를 클라이언트에서 호출하는 것을 막기 위해 `server-only` 패키지를 사용할 수 있다. 이를 통해 다른 개발자에게 이런 모듈을 클라이언트에서 사용하려고 할 때 빌드 타임에 에러를 줄 수 있다.

server-only를 사용하기 위해 먼저 패키지를 설치해야 한다

```
npm install server-only
```

그리곤 패키지를 import한다.

```tsx
import 'server-only';

export async function getData() {
 const res = await fetch('https://external-service.com/data', {
  headers: {
   authorization: process.env.API_KEY 
  }
 });

  return res.json();
}
```

이제 `getData()`를 import 한 클라이언트 컴포넌트는 빌드 타임 에러를 전달 받을 수 있다.

`client-only` 패키지는 클라이언트 코드에ㅔ 표시하기 위한 용도로 사용될 수 있다. 예를 들면 window 객체를 사용하는 코드 같은 것에


https://nextjs.org/docs/getting-started/react-essentials#data-fetching
