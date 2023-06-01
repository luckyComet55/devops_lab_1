import {Handler} from "express";

export const baseHandler: Handler = (req, res) => {
    res.type('application/json');
    res.status(200);
    res.send({
        msg: 'Hello!',
    })
}