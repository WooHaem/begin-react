import React from "react";

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            { isSpecial ? <b>*</b> : null }
            안녕하세요 {name}
        </div>
    );
}


Hello.defaultProps = {  // 헬로에 함수가 없다면 기본값으로 '이름없음' 을 삽입.
    name: '이름없음'
}
export default Hello;