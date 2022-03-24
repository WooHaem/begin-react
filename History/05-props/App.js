import React from 'react';
import Hello from './Hello';
{/* Wrapper라는 컴포넌트를 추가로 불러온다. */}
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      {/* name과 color props를 Hello.js에서 가져온다. */}
      <Hello name="react" color="red" /> 
      {/* name props는 가져오지 않아 Hello.js에 정의된 기본값 name 객체변수를 사용하게 된다. (색상은 핑크) */}
      <Hello color="pink" />
    </Wrapper>
    );
}

export default App;
