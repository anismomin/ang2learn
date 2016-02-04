System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var HttpTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HttpTestService = (function () {
                function HttpTestService(http) {
                    this.http = http;
                }
                HttpTestService.prototype.getCurrentTime = function () {
                    return this.http.get('http://date.jsontest.com')
                        .map(function (res) { return res.json(); });
                };
                HttpTestService.prototype.postJSON = function () {
                    var json = JSON.stringify({ var1: 'testing', var2: 55 });
                    var params = 'json=' + json;
                    var headers = new http_1.Headers();
                    headers.append('content-type', 'application/x-www-form-urlencoded');
                    return this.http.post('http://validate.jsontest.com', params, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); });
                };
                HttpTestService.prototype.getRandomQuote = function () {
                    return this.http.get('http://localhost:4000/api/random-quote')
                        .map(function (res) { return res.text(); });
                };
                HttpTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpTestService);
                return HttpTestService;
            })();
            exports_1("HttpTestService", HttpTestService);
        }
    }
});

//# sourceMappingURL=http-test.service.js.map