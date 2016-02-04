System.register(['angular2/core', './http-test.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_test_service_1;
    var HttpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HttpComponent = (function () {
                function HttpComponent(_httpService) {
                    this._httpService = _httpService;
                }
                HttpComponent.prototype.testGetReq = function () {
                    var _this = this;
                    this._httpService.getCurrentTime()
                        .subscribe(function (data) { return _this.getResponse = JSON.stringify(data); }, function (error) { return console.log(error); }, function () { return console.log('FINISH'); });
                };
                HttpComponent.prototype.testPostReq = function () {
                    var _this = this;
                    this._httpService.postJSON()
                        .subscribe(function (data) { return _this.postResponse = JSON.stringify(data); }, function (error) { return _this.logError(error); }, function () { return console.log('FINISH'); });
                };
                HttpComponent.prototype.getRandomQuotes = function () {
                    var _this = this;
                    this._httpService.getRandomQuote()
                        .subscribe(function (data) { return _this.QuoteResponse = data; }, function (error) { return _this.logError(error); }, function () { return console.log('FINISH'); });
                };
                HttpComponent.prototype.logError = function (error) {
                    console.log(error);
                };
                HttpComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n\t\t<button (click)=\"testGetReq()\" class=\"btn btn-default\">button</button>\n\t\t<p>Get Respose: {{ getResponse }}</p>\n\t\t\n\t\t<button (click)=\"testPostReq()\" class=\"btn btn-default\">button</button>\n\t\t<p>Get Respose: {{ postResponse }}</p>\n\n\t\t<button (click)=\"getRandomQuotes()\" class=\"btn btn-default\">Get random Quotes</button>\n\t\t<p>Quote Respose: {{ QuoteResponse }}</p>\n\t",
                        providers: [http_test_service_1.HttpTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HttpTestService])
                ], HttpComponent);
                return HttpComponent;
            })();
            exports_1("HttpComponent", HttpComponent);
        }
    }
});

//# sourceMappingURL=http.component.js.map
