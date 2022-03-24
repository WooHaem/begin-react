import React from "react";

function Hello({ color, name }) { // 비구조화 할당이 들어감. 원래는 중괄호{,}를 제외하고 props를 기재
    
    // 비구조화 할당을 제외한 기존 props 방식
    // return <div style={{ props.color }}>안녕하세요 {props.name}</div>

    return <div style={{ color }}>안녕하세요 {name}</div> // 비구조화 할당을 적용한 코드. props. 을 제외
}


Hello.defaultProps = {  // 헬로에 함수가 없다면 기본값으로 '이름없음' 을 삽입.
    name: '이름없음'
}
export default Hello;