import express from 'express';
export const app = express();
import {Parser} from './parser';

app.get('/', (req, res) => {
    res.status(200).send(Parser.parseRequest(req));
});