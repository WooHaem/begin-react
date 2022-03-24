import React from 'react';

function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            {/* 객체 구조화를 통해 필요한 하위 자식요소 children 함수 삽입 */}
            {children}
        </div>
    )
}

export default Wrapper;