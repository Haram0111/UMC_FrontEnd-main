// 현재 폴더에 있는 모든 페이지를 import 한다
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

// import한 페이지를 Pages와 export에 모두 입력한다.
// 앞으로 다른 페이지/컴포넌트에서 현재 폴더의 파일을 불러올 때
// import { Page1, Page2, Page3 } from '~/Board'로 명명하면 된다.
const Pages = {
    Page1, Page2, Page3, 
};

export default Pages;

export { Page1, Page2, Page3, };