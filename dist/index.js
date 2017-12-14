'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const body_1 = require("./lib/body");
exports.Body = body_1.Body;
exports.JsonBody = body_1.JsonBody;
exports.StreamBody = body_1.StreamBody;
exports.DataBody = body_1.DataBody;
const headers_1 = require("./lib/headers");
exports.Headers = headers_1.Headers;
const request_1 = require("./lib/request");
exports.Request = request_1.Request;
const response_1 = require("./lib/response");
exports.Response = response_1.Response;
const core_1 = require("./lib/core");
exports.AbortError = core_1.AbortError;
exports.TimeoutError = core_1.TimeoutError;
const context_1 = require("./lib/context");
const defaultContext = new context_1.Context();
const setup = (opts) => defaultContext.setup(opts);
const fetch = (input, init) => defaultContext.fetch(input, init);
exports.fetch = fetch;
const disconnect = (url) => defaultContext.disconnect(url);
exports.disconnect = disconnect;
const disconnectAll = () => defaultContext.disconnectAll();
exports.disconnectAll = disconnectAll;
const onPush = (handler) => defaultContext.onPush(handler);
exports.onPush = onPush;
function context(opts) {
    const ctx = new context_1.Context(opts);
    return {
        setup: ctx.setup.bind(ctx),
        fetch: ctx.fetch.bind(ctx),
        disconnect: ctx.disconnect.bind(ctx),
        disconnectAll: ctx.disconnectAll.bind(ctx),
        onPush: ctx.onPush.bind(ctx),
    };
}
exports.context = context;
//# sourceMappingURL=index.js.map