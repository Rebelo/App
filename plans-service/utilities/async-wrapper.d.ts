//we say that the callback is a requestHandler

import {RequestHandler} from 'express';

export function AsyncWrapper(fn: RequestHandler);