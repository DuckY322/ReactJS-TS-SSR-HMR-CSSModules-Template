import express from 'express';
import ReactDOM from 'react-dom/server';
import { Example } from '../shared/example';
import { indexTemplate } from './indexTemplate';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(Example())),
    );
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000')
});