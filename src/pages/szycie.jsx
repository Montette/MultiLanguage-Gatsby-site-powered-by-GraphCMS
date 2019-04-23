import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Link from '../components/Link';

const Szycie = () => (
<main className="main">
    <h1>Przykładowa część realizowanego u nas asortymentu</h1>
    <ul>
        <li>
            Szycie Odzieży reklamowej
        </li>
        <li>
        Szycie odzieży specjalnej
        </li>
        <li>
        Akcesoria łowieckie
        </li>
    </ul>
</main>
);

const customProps = {
  localeKey: 'Szycie',
};

export default withLayout(customProps)(Szycie);
