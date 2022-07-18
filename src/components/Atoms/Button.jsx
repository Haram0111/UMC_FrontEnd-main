import React from 'react';
import { Btn } from './ButtonStyle';

// Button을 사용하는 컴포넌트에서 각종 정보를 props로 가져와 그에 맞는 버튼의 형태를
// return 하게끔 재사용성을 고려하여 구현한다. 그러기 위해선 ButtonStyle에서 props를 받아 가공해야 한다.
// ex) Button에 color(="tomato")를 props로 받아오면 Button의 background-color를 "tomato"로 바꿔 return 한다.
export default function Button(props){
    return(
        <Btn onChnage = {props.onChange} { ...props }>
            { props.children }
        </Btn>
    );
}