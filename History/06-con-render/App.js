import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial /> {/* props값을 생략한 'isSpecial'만 넣어도 isSpecial={true}와 동일  */}
      <Hello color="pink" />
    </Wrapper>
    );
}

export default App;
