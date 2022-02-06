"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var auth_service_1 = require("../auth/auth.service");
/**
 * Prepara um objeto para uma pesquisa get com parâmetros
 */
exports.objToSearchParams = function (obj) {
    var params = new http_1.URLSearchParams();
    for (var k in obj) {
        if (obj[k]) {
            params.append(k, obj[k]);
        }
    }
    return params;
};
/**
 * Result para uma consulta paginada
 */
var PageResult = (function () {
    function PageResult() {
        this.currentPage = 0;
        this.totalElements = 0;
        this.totalPages = 0;
        this.size = 10;
        this.content = [];
    }
    PageResult.prototype.reload = function () {
        this.currentPage = 0;
        this.totalElements = 0;
        this.totalPages = 0;
        this.content = [];
    };
    return PageResult;
}());
exports.PageResult = PageResult;
/**
 * Result para uma consulta paginada
 */
var SearchParams = (function () {
    function SearchParams() {
        this.sorting = {};
        this.filters = {};
    }
    SearchParams.prototype.reloadPage = function () {
        this.page = 0;
    };
    return SearchParams;
}());
exports.SearchParams = SearchParams;
/**
 * @author Felipe Leonhardt
 * http://www.vision-ti.com.br
 */
var GenericService = (function () {
    function GenericService(_http, _message, baseUrl) {
        this._http = _http;
        this._message = _message;
        this.baseUrl = baseUrl;
        this.pageResult = new PageResult();
    }
    GenericService.prototype.getRequestOptions = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        if (this.authToken()) {
            headers.append('Authorization', 'Bearer ' + this.authToken());
        }
        return new http_1.RequestOptions({ headers: headers });
    };
    GenericService.prototype.authToken = function () {
        var token = localStorage.getItem('authToken');
        if (token && new auth_service_1.JwtHelper().isTokenExpired(token)) {
            localStorage.removeItem('authToken');
            token = '';
        }
        return token;
    };
    /**
     * post
     */
    GenericService.prototype.post = function (param, url) {
        var _this = this;
        if (url === void 0) { url = ''; }
        var body = JSON.stringify(param);
        return this._http.post(this.baseUrl + "/" + url, body, this.getRequestOptions())
            .catch(function (err) { return _this.handleError(err); });
    };
    /**
     * pesquisa paginada
     */
    GenericService.prototype.search = function (url, search) {
        var _this = this;
        return this.post(search, url ? url : '')
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    /**
     * retorna apenas um objeto pela cliente-api
     * @param id
     * @returns {Observable<R>}
     */
    GenericService.prototype.findOne = function (id) {
        return this.get({ url: 'findOne/' + id }).map(function (res) {
            var body = res._body;
            if (!body || (0 === body.length)) {
                return undefined;
            }
            else {
                return res.json();
            }
        });
    };
    /**
     * get
     */
    GenericService.prototype.get = function (config) {
        var _this = this;
        if (config === void 0) { config = { url: '', params: undefined }; }
        config.url = config.url ? config.url : '';
        var requestOptions = this.getRequestOptions();
        requestOptions.body = {};
        if (config.params) {
            requestOptions.search = exports.objToSearchParams(config.params);
            return this._http.get(this.baseUrl + "/" + config.url, requestOptions)
                .catch(function (err) { return _this.handleError(err); });
        }
        else {
            return this._http.get(this.baseUrl + "/" + config.url, requestOptions)
                .catch(function (err) { return _this.handleError(err); });
        }
    };
    /**
     * delete
     */
    GenericService.prototype.delete = function (id) {
        var _this = this;
        return this._http.delete(this.baseUrl + "/" + id, this.getRequestOptions())
            .catch(function (err) { return _this.handleError(err); });
    };
    /**
     * put
     */
    GenericService.prototype.put = function (url, body) {
        var _this = this;
        return this._http.put(this.baseUrl + "/" + url, body, this.getRequestOptions())
            .catch(function (err) { return _this.handleError(err); });
    };
    /**
     * Tratando os erros vindos do back-end
     */
    GenericService.prototype.handleError = function (error) {
        // TODO tratar o status 404
        var customError = error.json();
        if (error.status === 422) {
            if (customError.exception.indexOf("BusinessException") >= 0) {
                this._message.info(customError.message);
            }
        }
        else if (error.status === 403) {
            this._message.info('Acesso não autorizado');
        }
        else if (error.status === 500) {
            if (customError.exception.indexOf("InvalidTokenException") >= 0) {
                localStorage.removeItem("authToken");
                this._message.error(customError.message);
            }
            else if (customError.exception.indexOf('UnauthorizedAcessException') >= 0) {
                this._message.info(customError.message);
            }
            else {
                this._message.error("N\u00E3o foi poss\u00EDvel executar esta solicita\u00E7\u00E3o por algum problema interno. Estamos trabalhando nisto..");
            }
        }
        return Rx_1.Observable.empty();
    };
    GenericService.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(params[i], files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response !== '' ? JSON.parse(xhr.response) : xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', _this.baseUrl + "/" + url, true);
            _this.setAuthToken(xhr);
            xhr.send(formData);
        });
    };
    GenericService.prototype.makeFileFromUrlRequest = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            // Ask for the result as an ArrayBuffer.
            xhr.responseType = 'arraybuffer';
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(new Uint8Array(this.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('GET', _this.baseUrl + "/" + url, true);
            _this.setAuthToken(xhr);
            xhr.send(formData);
        });
    };
    GenericService.prototype.setAuthToken = function (xhr) {
        if (this.authToken()) {
            xhr.setRequestHeader('Authorization', "Bearer " + this.authToken());
        }
    };
    /**
     * Método generico pra criar um objeto ou salvar um existente, no backend
     * @param obj
     * @returns {Observable<R>}
     */
    GenericService.prototype.save = function (obj) {
        return this.post(obj, 'save');
    };
    return GenericService;
}());
exports.GenericService = GenericService;
var ResponseError = (function () {
    function ResponseError() {
    }
    return ResponseError;
}());
