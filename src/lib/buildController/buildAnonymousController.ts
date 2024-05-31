import { Request, Response } from 'express';

export { buildAnonymousController };

function buildAnonymousController<
    paramsT extends Record<string, string>,
    queryT extends Record<string, string>,
    bodyT,
>(controller: (params: { query: queryT; urlParams: paramsT; body: bodyT }) => any | Promise<any>) {
    return async (req: Request, res: Response) => {
        console.log(`${req.method} ${req.originalUrl}`);

        try {
            const result = await controller({
                query: req.query as queryT,
                urlParams: req.params as paramsT,
                body: req.body,
            });
            res.setHeader('Content-Type', 'application/json');
            res.send(result);
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    };
}
