# 정리

### useState

```jsx
import React, { useState } from "react";

function App() {
  const [state, setState] = useState < number > 0;

  function minusState() {
    setState((before) => before - 1);
  }

  return (
    <div>
      <h1>hello dogvelopers</h1>
      <h2>{state}</h2>
      <button onClick={minusState}>minus</button>
    </div>
  );
}

export default App;
```

### useEffect

컴포넌트 life cycle (생애주기), 즉 컴포넌트가 마운트, 업데이트, 언마운트될 때

```jsx
// useEffect(실행되는 코드, 변화를 감지하는 것)
useEffect(() => {}, []);
```

### Mock Server

```npm
yarn add axios
```

axios는 자바스크립트의 fetch를 편하게 쓰기 위해 사용한다.

fetch란 다른 서버에 데이터를 요청하는 메소드다.

개발자 도구의 헤더에서 어떤 데이터를 받아왔는지, 응답에서 무슨 데이터를 받아왔는지를 볼 수 있다.