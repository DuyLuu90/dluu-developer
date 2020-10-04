import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter}  from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import App from './App';

import {
  faUserNinja,
  faPlane,
  faSchool,
  faCode,
  faEnvelope,
  faCopyright,
  faBars, 
  faHamburger,
  faThumbsDown,
  faThumbsUp,
  faEdit,
  faTrash,
  faUserLock,
  faFolderOpen,
  faArrowRight,
  faBookOpen,
  faComment,
  faGift, // logo
  faGlobeAmericas,// style: news
  faListOl, // style: howto
  faListUl, // style: listicle
  faPenAlt, // style: interview
  
  
} from '@fortawesome/free-solid-svg-icons'

library.add(
  
  faUserNinja,
  faPlane,
  faSchool,
  faCode,
  faEnvelope,
  faCopyright,
  faBars, 
  faHamburger,
  faThumbsDown,
  faThumbsUp,
  faEdit,
  faTrash,
  faUserLock,
  faFolderOpen,
  faArrowRight,
  faBookOpen,
  faComment,
  faGift, // logo
  faGlobeAmericas,// style: news
  faListOl, // style: howto
  faListUl, // style: listicle
  faPenAlt, // style: interview
)

ReactDOM.render(
<BrowserRouter>
  <App/>
</BrowserRouter>,document.getElementById('root'));




