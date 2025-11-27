"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const response_interceptor_1 = require("./common/http/response/response.interceptor");
const http_exception_interseptor_1 = require("./common/exception/http-exception.interseptor");
const common_1 = require("@nestjs/common");
const request_interceptor_1 = require("./common/http/request/request.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    app.useGlobalFilters(new http_exception_interseptor_1.AllExceptionsFilter(new common_1.Logger()));
    app.useGlobalInterceptors(new request_interceptor_1.LoggingInterceptor(new common_1.Logger()));
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map