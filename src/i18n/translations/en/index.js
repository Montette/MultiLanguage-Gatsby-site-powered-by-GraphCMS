import flatten from 'flat';

import error404 from './404';
import home from './home';
import nav from './nav';
import portfolio from './portfolio';
import page2 from './page-2';
import about from './about';
import cookies from './cookies'

const message = { error404, home, page2, nav, portfolio, about, cookies };

export default flatten(message);
