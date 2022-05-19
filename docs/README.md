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

### 과제

배열의 값을 변경할 때에는 <b>불변성</b>을 지켜주어야 한다.

배열의 push, splice, sort 등의 함수를 사용하면 안되고 불변성을 지키기 위해선 spread 연산자와 concat 함수를 이용해야 한다.

```jsx
setState(state.concat(state.length));
```

공통되는 css는 한 클래스로 묶어서 사용 가능하다.

```css
.someButton {
  all: unset;
  text-align: center;
  font-weight: bolder;
  width: 60px;
  height: 60px;
}

.increase {
  background-color: #7ed6df;
  margin-right: 15px;
}

.decrease {
  background-color: #badc58;
}
```

```jsx
<button className={'someButton increase'} onClick={increaseState}>+</button>
<button className={'someButton decrease'}  onClick={decreaseState}>-</button>
```

setState는 비동기적으로 동작하기 때문에 이전 상태를 참조하는 것이 안전성이 높다.

```jsx
setState((state) => state.concat(state.length));
```

### 구구단

선언과 동시에 원하는 숫자부터 n까지 선언할 수 있다.

[참고](https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n)

### Submit과 Change

```jsx
<form>
  <input type="text" />
  <button type="submit">확인</button>
</form>
```

form 태그 안의 버튼은 type="submit"이 기본으로 들어가있고, input은 type="text"가 기본으로 되어있기 때문에 생략 가능하다.

```jsx
<form>
  <input />
  <button>확인</button>
</form>
```


```jsx
  <label htmlFor="">아이디: </label>
                <input value={textValue} onChange={onChangeInput} />
```

웹 표준을 지키기 위해 label과 input을 같이쓰며 html에서는 for을 쓰지만 jsx에서는 htmlFor을 사용한다.

### htmlFor

```jsx
<label htmlFor="check1">이걸 눌러도 체크가능</label>
<input id="check1" type="checkbox" />
```

```css
#check{
  appearance: none;
}
```

시각장애인을 위한 리더기에 display: none은 표시가 되기 때문에 appearance: none으로 써야한다.