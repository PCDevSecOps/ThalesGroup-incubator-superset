webpackJsonp(["main"],{

/***/ "./apps/app/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"@dd/login-routing": [
		"./libs/login-routing/src/login-routing.module.ts",
		"login-routing.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./apps/app/src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./apps/app/src/app/+state/application.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_USER_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_USER_COUNT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_USER_COUNT_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FetachUserCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FetachUserCountSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FetachUserCountFail; });
var FETCH_USER_COUNT = '[Application] fetch user count';
var FETCH_USER_COUNT_SUCCESS = '[Application] fetch user count success';
var FETCH_USER_COUNT_FAIL = '[Application] fetch user count fail';
var FetachUserCount = /** @class */ (function () {
    function FetachUserCount(config) {
        this.config = config;
        this.type = FETCH_USER_COUNT;
    }
    return FetachUserCount;
}());

var FetachUserCountSuccess = /** @class */ (function () {
    function FetachUserCountSuccess(userCount) {
        this.userCount = userCount;
        this.type = FETCH_USER_COUNT_SUCCESS;
    }
    return FetachUserCountSuccess;
}());

var FetachUserCountFail = /** @class */ (function () {
    function FetachUserCountFail() {
        this.type = FETCH_USER_COUNT_FAIL;
    }
    return FetachUserCountFail;
}());



/***/ }),

/***/ "./apps/app/src/app/+state/application.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_screen_user_count_service__ = __webpack_require__("./apps/app/src/app/landing-screen/user-count.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__state_application_actions__ = __webpack_require__("./apps/app/src/app/+state/application.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_screen_landing_screen_service_config__ = __webpack_require__("./apps/app/src/app/landing-screen/landing-screen-service-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ApplicationEffects = /** @class */ (function () {
    function ApplicationEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.getUserCount$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__state_application_actions__["a" /* FETCH_USER_COUNT */])
            .switchMap(function (action) { return _this.service.fetch(__WEBPACK_IMPORTED_MODULE_8__landing_screen_landing_screen_service_config__["a" /* GET_USERS_COUNT_REQUEST */].method, action.config)
            .map(function (response) {
            console.log(response.count);
            return new __WEBPACK_IMPORTED_MODULE_7__state_application_actions__["f" /* FetachUserCountSuccess */](response.count);
        })
            .catch(function (exception) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_7__state_application_actions__["e" /* FetachUserCountFail */]()); }); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ApplicationEffects.prototype, "getUserCount$", void 0);
    ApplicationEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_6__landing_screen_user_count_service__["a" /* UserCountServcie */]])
    ], ApplicationEffects);
    return ApplicationEffects;
}());



/***/ }),

/***/ "./apps/app/src/app/+state/application.init.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCountStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return applicationInitialState; });
var UserCountStatus;
(function (UserCountStatus) {
    UserCountStatus[UserCountStatus["INPROGRESS"] = 0] = "INPROGRESS";
    UserCountStatus[UserCountStatus["SUCCESSFULL"] = 1] = "SUCCESSFULL";
    UserCountStatus[UserCountStatus["FAILURE"] = 2] = "FAILURE";
})(UserCountStatus || (UserCountStatus = {}));
var applicationInitialState = {
    // fill it initial state here
    count: undefined,
    status: undefined,
};


/***/ }),

/***/ "./apps/app/src/app/+state/application.interfaces.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application_reducer__ = __webpack_require__("./apps/app/src/app/+state/application.reducer.ts");

var reducers = {
    application: __WEBPACK_IMPORTED_MODULE_0__application_reducer__["a" /* applicationReducer */]
};
// storeFreeze prevents state from being mutated. When mutation occurs, an exception
// will be thrown. Only for development mode.
var metaReducers = [];


/***/ }),

/***/ "./apps/app/src/app/+state/application.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applicationReducer;
/* unused harmony export getRootStateSelector */
/* unused harmony export getApplicationStateSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUserCountSelector; });
/* unused harmony export getUserCountStatusSelector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application_init__ = __webpack_require__("./apps/app/src/app/+state/application.init.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_application_actions__ = __webpack_require__("./apps/app/src/app/+state/application.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function applicationReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_1__application_init__["b" /* applicationInitialState */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__state_application_actions__["a" /* FETCH_USER_COUNT */]: {
            return __assign({}, state, { status: __WEBPACK_IMPORTED_MODULE_1__application_init__["a" /* UserCountStatus */].INPROGRESS });
        }
        case __WEBPACK_IMPORTED_MODULE_2__state_application_actions__["c" /* FETCH_USER_COUNT_SUCCESS */]: {
            return __assign({}, state, { status: __WEBPACK_IMPORTED_MODULE_1__application_init__["a" /* UserCountStatus */].SUCCESSFULL, count: action.userCount });
        }
        case __WEBPACK_IMPORTED_MODULE_2__state_application_actions__["b" /* FETCH_USER_COUNT_FAIL */]: {
            return __assign({}, state, { status: __WEBPACK_IMPORTED_MODULE_1__application_init__["a" /* UserCountStatus */].FAILURE });
        }
        default: {
            return state;
        }
    }
}
//parent state selector
var getRootStateSelector = function (state) { return state ? state : null; };
// application state selector
var getApplicationStateSelector = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getRootStateSelector, function (state) { return state ? state.application : null; });
var getUserCountSelector = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getApplicationStateSelector, function (state) { return state.count; });
var getUserCountStatusSelector = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getApplicationStateSelector, function (state) { return state.status; });


/***/ }),

/***/ "./apps/app/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-div\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./apps/app/src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./apps/app/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dd_common__ = __webpack_require__("./libs/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guavus_ui_kit_core__ = __webpack_require__("./node_modules/@guavus/ui-kit-core/dist/guavus-ui-kit-core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, router, favicon) {
        this.titleService = titleService;
        this.router = router;
        this.favicon = favicon;
    }
    AppComponent.prototype.ngOnInit = function () {
        var icon = this.getFavicon();
        this.favicon.activate(icon);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle(this.getAppTitle());
        this.removeNode('loadingIcon');
        //initial navigation after  APP_INITIALZER finishes
        this.router.initialNavigation();
    };
    AppComponent.prototype.getFavicon = function () {
        return (__WEBPACK_IMPORTED_MODULE_3__dd_common__["l" /* appConfig */].project && __WEBPACK_IMPORTED_MODULE_3__dd_common__["l" /* appConfig */].project.favicon) || 'default';
    };
    AppComponent.prototype.getAppTitle = function () {
        return __WEBPACK_IMPORTED_MODULE_3__dd_common__["l" /* appConfig */].project && __WEBPACK_IMPORTED_MODULE_3__dd_common__["l" /* appConfig */].project.appName ? __WEBPACK_IMPORTED_MODULE_3__dd_common__["l" /* appConfig */].project.appName : '';
    };
    AppComponent.prototype.removeNode = function (tag) {
        var element = document.getElementById(tag);
        if (element) {
            var parent_1 = element.parentNode;
            parent_1.removeChild(element);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dd-root',
            template: __webpack_require__("./apps/app/src/app/app.component.html"),
            styles: [__webpack_require__("./apps/app/src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Title */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_4__guavus_ui_kit_core__["d" /* FaviconService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./apps/app/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FAVICONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export appInitializerFactory */
/* unused harmony export projectFactory */
/* unused harmony export aboutAPPFactory */
/* unused harmony export errorHandlerFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guavus_ui_kit_auth__ = __webpack_require__("./node_modules/@guavus/ui-kit-auth/dist/guavus-ui-kit-auth.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guavus_ui_kit_auth_interceptor__ = __webpack_require__("./node_modules/@guavus/ui-kit-auth-interceptor/dist/guavus-ui-kit-auth-interceptor.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guavus_ui_kit_components__ = __webpack_require__("./node_modules/@guavus/ui-kit-components/dist/guavus-ui-kit-components.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__ = __webpack_require__("./node_modules/@guavus/ui-kit-core/dist/guavus-ui-kit-core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dd_common__ = __webpack_require__("./libs/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dd_login__ = __webpack_require__("./libs/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_router_store__ = __webpack_require__("./node_modules/@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__ = __webpack_require__("./node_modules/@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nrwl_nx__ = __webpack_require__("./node_modules/@nrwl/nx/esm5/nrwl-nx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("./apps/app/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routes__ = __webpack_require__("./apps/app/src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__authorization_guard__ = __webpack_require__("./apps/app/src/app/authorization-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__configuration_initializer__ = __webpack_require__("./apps/app/src/app/configuration-initializer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__landing_page_auth_info_resolver__ = __webpack_require__("./apps/app/src/app/landing-page/auth-info-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__landing_page_landing_page_component__ = __webpack_require__("./apps/app/src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__landing_screen_landing_screen_component__ = __webpack_require__("./apps/app/src/app/landing-screen/landing-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__landing_screen_user_count_service__ = __webpack_require__("./apps/app/src/app/landing-screen/user-count.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__environments_environment__ = __webpack_require__("./apps/app/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__state_application_effects__ = __webpack_require__("./apps/app/src/app/+state/application.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__state_application_interfaces__ = __webpack_require__("./apps/app/src/app/+state/application.interfaces.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var FAVICONS = {
    cacheBusting: true,
    icons: {
        default: { href: 'default.ico', type: 'image/x-icon' },
        profile: { href: 'profile.ico', type: 'image/x-icon' },
        alert: { href: 'assets/images/alert_png.png', type: 'image/png' }
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__dd_common__["b" /* ApplicationCommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__guavus_ui_kit_components__["c" /* ComponentsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__dd_login__["d" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__nrwl_nx__["a" /* NxModule */].forRoot(),
                // initial navigation is disabled as routings starts before  APP_INITIALZER finishes
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_routes__["a" /* applicationRoutes */], { enableTracing: __WEBPACK_IMPORTED_MODULE_9__dd_common__["j" /* TRACE_ROUTES */], initialNavigation: 'disabled' }),
                __WEBPACK_IMPORTED_MODULE_13__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_27__state_application_interfaces__["b" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_27__state_application_interfaces__["a" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_26__state_application_effects__["a" /* ApplicationEffects */]]),
                !__WEBPACK_IMPORTED_MODULE_24__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
                __WEBPACK_IMPORTED_MODULE_12__ngrx_router_store__["b" /* StoreRouterConnectingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_21__landing_page_landing_page_component__["a" /* LandingPageComponent */], __WEBPACK_IMPORTED_MODULE_22__landing_screen_landing_screen_component__["a" /* LandingScreenComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]],
            providers: [
                // Initalization providers
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], useValue: {} },
                __WEBPACK_IMPORTED_MODULE_19__configuration_initializer__["a" /* ConfigurationInitializer */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */],
                    useFactory: appInitializerFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_19__configuration_initializer__["a" /* ConfigurationInitializer */], __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["c" /* HttpClientModule */]],
                    multi: true
                },
                // project level configrations
                { provide: __WEBPACK_IMPORTED_MODULE_9__dd_common__["a" /* APP_PROJECT_CONFIG */], useFactory: projectFactory, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_7__guavus_ui_kit_components__["a" /* ABOUT_APP */], useFactory: aboutAPPFactory, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* APP_INITIALIZER */]] },
                // screen level providers
                __WEBPACK_IMPORTED_MODULE_23__landing_screen_user_count_service__["a" /* UserCountServcie */],
                //helpers
                { provide: __WEBPACK_IMPORTED_MODULE_9__dd_common__["k" /* UrlBuilder */], useClass: __WEBPACK_IMPORTED_MODULE_9__dd_common__["k" /* UrlBuilder */], deps: [__WEBPACK_IMPORTED_MODULE_9__dd_common__["a" /* APP_PROJECT_CONFIG */]] },
                //offline intercepting providers
                { provide: __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["e" /* IS_OFFLINE */], useValue: __WEBPACK_IMPORTED_MODULE_9__dd_common__["e" /* ISOFFLINE */] },
                { provide: __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["a" /* HTTP_INTERCEPTORS */], multi: true, useClass: __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["g" /* OfflineInterceptor */], deps: [__WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["e" /* IS_OFFLINE */], __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["h" /* OfflineUtils */]] },
                // error interceptor for new http client request
                { provide: __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["a" /* HTTP_INTERCEPTORS */], multi: true, useClass: __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["b" /* ErrorInterceptor */] },
                { provide: __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["f" /* OfflineDataGenerator */], useClass: __WEBPACK_IMPORTED_MODULE_9__dd_common__["h" /* OfflineDataGeneratorService */] },
                __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["h" /* OfflineUtils */],
                // auth
                __WEBPACK_IMPORTED_MODULE_18__authorization_guard__["a" /* AuthorizationGuard */],
                __WEBPACK_IMPORTED_MODULE_20__landing_page_auth_info_resolver__["a" /* AuthInfoResolver */],
                // application state mangment
                // Favicons,
                __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["d" /* FaviconService */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["c" /* FAVICONS_CONFIG */], useValue: FAVICONS },
                // autorization interceptor
                { provide: __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["a" /* HTTP_INTERCEPTORS */], multi: true, useClass: __WEBPACK_IMPORTED_MODULE_6__guavus_ui_kit_auth_interceptor__["a" /* AuthInterceptor */] },
                __WEBPACK_IMPORTED_MODULE_6__guavus_ui_kit_auth_interceptor__["b" /* AuthTokenService */],
                // error message provider
                { provide: __WEBPACK_IMPORTED_MODULE_9__dd_common__["d" /* ERROR_MESSAGES */], useValue: __WEBPACK_IMPORTED_MODULE_9__dd_common__["l" /* appConfig */].errorMessages },
                // error handler
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["a" /* ErrorHandler */], useFactory: errorHandlerFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_13__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_9__dd_common__["d" /* ERROR_MESSAGES */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]],
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

function appInitializerFactory(initializer) {
    return function () { return initializer.run(); };
}
function projectFactory() {
    return __WEBPACK_IMPORTED_MODULE_9__dd_common__["l" /* appConfig */].project;
}
function aboutAPPFactory() {
    return Object.assign({}, __WEBPACK_IMPORTED_MODULE_9__dd_common__["l" /* appConfig */].build_info, __WEBPACK_IMPORTED_MODULE_9__dd_common__["l" /* appConfig */].about);
}
function errorHandlerFactory(store, messages, dialog) {
    var errorHandler = new __WEBPACK_IMPORTED_MODULE_8__guavus_ui_kit_core__["a" /* ErrorHandler */](messages, dialog);
    var DEFAULT_ERROR_MESSAGE = 'Error in retrieving data';
    errorHandler.setLogoutHandler(function () {
        var logoutConfig = {
            url: __WEBPACK_IMPORTED_MODULE_9__dd_common__["i" /* RequestBuilder */].getUrl(__WEBPACK_IMPORTED_MODULE_10__dd_login__["c" /* LOGOUT_REQUEST */], __WEBPACK_IMPORTED_MODULE_9__dd_common__["l" /* appConfig */].project),
            headers: __WEBPACK_IMPORTED_MODULE_10__dd_login__["c" /* LOGOUT_REQUEST */].headers,
            payload: undefined
        };
        store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__guavus_ui_kit_auth__["j" /* Logout */](logoutConfig));
    });
    errorHandler.setInvalidTokenHandler(function () {
        (__WEBPACK_IMPORTED_MODULE_9__dd_common__["l" /* appConfig */].loginConfig['logoutRedirectUrl'] === 'self') ?
            window.open(document.baseURI, '_self') :
            window.open(__WEBPACK_IMPORTED_MODULE_9__dd_common__["l" /* appConfig */].loginConfig['logoutRedirectUrl'], '_self');
    });
    errorHandler.setDefaultErrorMessage(DEFAULT_ERROR_MESSAGE);
    errorHandler.setErrorPopup(__WEBPACK_IMPORTED_MODULE_7__guavus_ui_kit_components__["e" /* MatAlertComponent */]);
    return errorHandler;
}


/***/ }),

/***/ "./apps/app/src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applicationRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dd_common__ = __webpack_require__("./libs/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_page_landing_page_routes__ = __webpack_require__("./apps/app/src/app/landing-page/landing-page.routes.ts");


var routes = __WEBPACK_IMPORTED_MODULE_1__landing_page_landing_page_routes__["a" /* LandingPageRoutes */].concat([
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: '**', redirectTo: 'app' }
]);
var loginRoutes = [
    {
        path: 'login',
        loadChildren: '@dd/login-routing#LoginRoutingModule'
    }
].concat(routes);
var applicationRoutes = (__WEBPACK_IMPORTED_MODULE_0__dd_common__["f" /* OAUTH_LOGIN_PAGE_ENABLED */]) ? routes : loginRoutes;


/***/ }),

/***/ "./apps/app/src/app/authorization-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dd_common__ = __webpack_require__("./libs/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dd_login__ = __webpack_require__("./libs/login/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorizationGuard = /** @class */ (function () {
    function AuthorizationGuard(router, service) {
        this.router = router;
        this.service = service;
    }
    AuthorizationGuard.prototype.canActivate = function (route, state) {
        return this.authenticate$(route, state);
    };
    AuthorizationGuard.prototype.authenticate$ = function (route, state) {
        var _this = this;
        var isAutenticated = this.service.isAuthenticated();
        if (isAutenticated) {
            return true;
        }
        var isAuthenticated$ = this.service.authenticate$(state.url, __WEBPACK_IMPORTED_MODULE_2__dd_common__["l" /* appConfig */].auth_info);
        isAuthenticated$.subscribe(function (value) {
            if (value === false)
                _this.service.navigateToLogin(document.baseURI);
        });
        return isAuthenticated$;
    };
    AuthorizationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_3__dd_login__["f" /* LoginService */]])
    ], AuthorizationGuard);
    return AuthorizationGuard;
}());



/***/ }),

/***/ "./apps/app/src/app/configuration-initializer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationInitializer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dd_common__ = __webpack_require__("./libs/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigurationInitializer = /** @class */ (function () {
    function ConfigurationInitializer(http) {
        this.http = http;
        this.files = ['about.json', 'build_info.json', 'config.json', 'login_config.json', 'auth_info.json', 'app_switcher.json'];
    }
    ConfigurationInitializer.prototype.run = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__dd_common__["e" /* ISOFFLINE */]) {
            this.files.push('login.json');
        }
        var promises = [];
        var _loop_1 = function (file) {
            var filepath = this_1.getFilePath(file);
            var promise = this_1.http
                .get(filepath)
                .toPromise()
                .then(function (value) {
                _this.onResolved(file, value);
            });
            promises.push(promise);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            _loop_1(file);
        }
        return Promise.all(promises);
    };
    ConfigurationInitializer.prototype.getFilePath = function (file) {
        return file === 'login.json' ? './data/login.json' : "./config/" + file;
    };
    ConfigurationInitializer.prototype.onResolved = function (file, value) {
        var key = file.split('.')[0];
        switch (key) {
            case 'config':
                var projectConfig = value;
                projectConfig.offline = __WEBPACK_IMPORTED_MODULE_2__dd_common__["e" /* ISOFFLINE */];
                __WEBPACK_IMPORTED_MODULE_2__dd_common__["l" /* appConfig */].project = projectConfig;
                break;
            case 'login':
                __WEBPACK_IMPORTED_MODULE_2__dd_common__["g" /* OFFLINE_LOGIN_DATA */].data = value;
                break;
            default:
                __WEBPACK_IMPORTED_MODULE_2__dd_common__["l" /* appConfig */][key] = value;
        }
    };
    ConfigurationInitializer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ConfigurationInitializer);
    return ConfigurationInitializer;
}());



/***/ }),

/***/ "./apps/app/src/app/landing-page/auth-info-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInfoResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__ = __webpack_require__("./node_modules/@guavus/ui-kit-auth/dist/guavus-ui-kit-auth.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dd_common__ = __webpack_require__("./libs/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInfoResolver = /** @class */ (function () {
    function AuthInfoResolver(store) {
        this.store = store;
    }
    AuthInfoResolver.prototype.resolve = function (route, routerState) {
        var user;
        var loginStore = this.store.select(function (state) { return state.login; });
        loginStore.select(__WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["m" /* selectUserState */]).subscribe(function (_user) { return user = _user; });
        var status$ = loginStore.select(__WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["l" /* selectStatusState */]);
        if (__WEBPACK_IMPORTED_MODULE_3__dd_common__["e" /* ISOFFLINE */] && user) {
            user.userId = __WEBPACK_IMPORTED_MODULE_3__dd_common__["g" /* OFFLINE_LOGIN_DATA */].username;
        }
        return { user: user, status$: status$ };
    };
    AuthInfoResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], AuthInfoResolver);
    return AuthInfoResolver;
}());



/***/ }),

/***/ "./apps/app/src/app/landing-page/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applicationConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./apps/app/src/app/landing-page/constants.ts");

//In header options set  modules as  Array of ModuleItem from @guavus/ui-kit-components
var applicationConfig = {
    options: {
        header: {
            options: {
                showSingleModule: false,
                modules: new Array(0),
                rightMenu: [
                    {
                        label: 'admin',
                        labelStyle: 'none',
                        imgStyle: 'img-circle',
                        img: 'assets/images/profile.png',
                        groupStyle: 'dropDown',
                        minWidth: '160px',
                        menu: [
                            {
                                id: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* CHANGE_PASSWORD_MENUITEM_ID */],
                                style: 'none',
                                label: 'Change Password'
                            },
                            {
                                id: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOGOUT_MENUITEM_ID */],
                                style: 'none',
                                label: 'Logout'
                            }
                        ]
                    },
                    {
                        img: 'assets/images/help_Up.svg',
                        minWidth: '71px',
                        menu: [
                            {
                                id: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* HELP_MENUITEM_ID */],
                                label: 'Help',
                                data: 'HELP',
                                url: '/help'
                            },
                            {
                                id: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ABOUT_MENUITEM_ID */],
                                label: 'About',
                                data: 'SHOW_ABOUT'
                            }
                        ]
                    }
                ]
            }
        }
    }
};


/***/ }),

/***/ "./apps/app/src/app/landing-page/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_PASSWORD_MENUITEM_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGOUT_MENUITEM_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HELP_MENUITEM_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABOUT_MENUITEM_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return POPUP_SUCCESS_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PASSWORD_CHANGE_MESSAGE; });
var CHANGE_PASSWORD_MENUITEM_ID = 'change_password_menuitem';
var LOGOUT_MENUITEM_ID = 'logout_menuitem';
var HELP_MENUITEM_ID = 'help_menuitem';
var ABOUT_MENUITEM_ID = 'about_menuitem';
// popup messages
var POPUP_SUCCESS_TITLE = 'Success';
var PASSWORD_CHANGE_MESSAGE = 'Password is changed successfully. Log into the application again.';


/***/ }),

/***/ "./apps/app/src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"landingPageContainer\">\n\n  <!--app header   -->\n  <gvs-header (onModuleChange)=\"moduleChangeHandler($event)\" (onMenuItemSelect)=\"menuItemSelectHandler($event)\" [logo]=\"logo\"\n    [appName]=\"appName\" [modules]=\"modules\" [showSingleModule]=\"showSingleModule\" [rightMenu]=\"rightMenu\" [appSwitcherData]=\"appSwitcherData\"></gvs-header>\n\n  <!-- app body-->\n  <div class=\"modulebody\">\n    <router-outlet></router-outlet>\n  </div>\n\n  <!--app footer -->\n  <gvs-footer [leftText]=\"leftText\" [rightText]=\"rightText\"></gvs-footer>\n\n</div>\n"

/***/ }),

/***/ "./apps/app/src/app/landing-page/landing-page.component.less":
/***/ (function(module, exports) {

module.exports = ".modulebody {\n  height: calc(100% - 30px);\n  width: 100%;\n  padding: 10px;\n}\n.landingPageContainer {\n  overflow: hidden;\n  height: 100vh;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./apps/app/src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__ = __webpack_require__("./node_modules/@guavus/ui-kit-auth/dist/guavus-ui-kit-auth.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_components__ = __webpack_require__("./node_modules/@guavus/ui-kit-components/dist/guavus-ui-kit-components.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dd_common__ = __webpack_require__("./libs/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dd_login__ = __webpack_require__("./libs/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__("./apps/app/src/app/landing-page/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants__ = __webpack_require__("./apps/app/src/app/landing-page/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router, route, store, urlbuilder, dialog) {
        this.router = router;
        this.route = route;
        this.store = store;
        this.urlbuilder = urlbuilder;
        this.dialog = dialog;
        // header pros
        this.logo = undefined;
        this.appName = undefined;
        this.modules = new Array(0);
        this.showSingleModule = false;
        this.rightMenu = new Array(0);
        this.appSwitcherData = undefined;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.setBackgroundColor();
        // set header props
        this.setHeaderProps(__WEBPACK_IMPORTED_MODULE_5__dd_common__["l" /* appConfig */].project);
        // set footer props
        this.setFooterProps(__WEBPACK_IMPORTED_MODULE_5__dd_common__["l" /* appConfig */].project);
        this.addSubscriptions();
    };
    LandingPageComponent.prototype.setBackgroundColor = function () {
        document.body.style.backgroundColor = 'transparent';
    };
    LandingPageComponent.prototype.setHeaderProps = function (projectconfig) {
        var headerConfig = Object.assign({}, this.getAppConfig().header.options);
        this.logo = projectconfig ? projectconfig.short_logo : '';
        this.appName = projectconfig.appName;
        this.showSingleModule = headerConfig.showSingleModule;
        this.modules = headerConfig.modules;
        this.rightMenu = headerConfig.rightMenu;
        this.appSwitcherData = __WEBPACK_IMPORTED_MODULE_5__dd_common__["l" /* appConfig */].app_switcher;
    };
    LandingPageComponent.prototype.setFooterProps = function (projectconfig) {
        this.leftText = projectconfig.timezone;
        this.rightText = this.getCopyrightText(projectconfig);
    };
    LandingPageComponent.prototype.getCopyrightText = function (projectconfig) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_components__["g" /* updateYear */])(projectconfig ? projectconfig.copyright : '', __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_components__["f" /* YEAR_IDENTIFIER */]);
    };
    LandingPageComponent.prototype.addSubscriptions = function () {
        this.dataChangeSubscription = this.route.data.subscribe(this.onDataChange.bind(this));
    };
    LandingPageComponent.prototype.onDataChange = function (data) {
        if (data && data.auth) {
            this.onUserChange(data.auth.user);
            this.onAuthStatusChange(data.auth.status$);
        }
    };
    LandingPageComponent.prototype.onAuthStatusChange = function (status$) {
        var _this = this;
        if (status$) {
            this.statusChangeSubscription = status$.subscribe(function (status) { return _this.onStatusChange(status); });
        }
    };
    LandingPageComponent.prototype.onUserChange = function (user) {
        if (Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["isNil"])(user)) {
            return;
        }
        this.username = (user && user.userId) ? user.userId : '';
        this.user = user;
        // update footer props
        this.leftText = this.user.timezone;
        // update header props
        this.rightMenu[0].label = this.getUserName(user);
    };
    LandingPageComponent.prototype.getUserName = function (userDetails) {
        var name = '';
        if (userDetails) {
            // By default first name and last name will never be empty but still.
            var firstName = (userDetails.firstName === undefined || userDetails.firstName === null) ? '' : userDetails.firstName;
            var lastName = (userDetails.lastName === undefined || userDetails.lastName === null) ? '' : userDetails.lastName;
            name = firstName === lastName ? firstName.trim() : (firstName + ' ' + lastName).trim();
            name = (name !== '') ? name : userDetails.userId;
        }
        return name;
    };
    LandingPageComponent.prototype.onStatusChange = function (status) {
        switch (status) {
            case __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["k" /* UserStatus */].PASSWORD_CHANGED: {
                this.changePassword();
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["k" /* UserStatus */].UN_AUTHENTICATED: {
                this.onLogoutSuccess();
                break;
            }
        }
    };
    LandingPageComponent.prototype.moduleChangeHandler = function (event) {
        var state = event.data.state;
        this.router.navigateByUrl(state);
    };
    LandingPageComponent.prototype.showAlert = function (message, title) {
        var _this = this;
        if (this.alertPopupSubscription) {
            this.alertPopupSubscription.unsubscribe();
        }
        var alertConfig = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogConfig */]();
        alertConfig.width = '400px';
        alertConfig.autoFocus = false;
        alertConfig.data = {
            title: title,
            message: message,
        };
        this.alertDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_components__["e" /* MatAlertComponent */], alertConfig);
        this.alertPopupSubscription = this.alertDialogRef.afterClosed().subscribe(function () { return _this.doLogout(); });
    };
    LandingPageComponent.prototype.menuItemSelectHandler = function (event) {
        if (event === undefined || event.data === undefined) {
            this.showAlert('Invalid Option. Please contact Support.');
            return;
        }
        switch (event.data.id) {
            case __WEBPACK_IMPORTED_MODULE_10__constants__["b" /* CHANGE_PASSWORD_MENUITEM_ID */]:
                this.openChangePassword();
                break;
            case __WEBPACK_IMPORTED_MODULE_10__constants__["a" /* ABOUT_MENUITEM_ID */]:
                this.openAbout();
                break;
            case __WEBPACK_IMPORTED_MODULE_10__constants__["d" /* LOGOUT_MENUITEM_ID */]:
                this.doLogout();
                break;
            case __WEBPACK_IMPORTED_MODULE_10__constants__["c" /* HELP_MENUITEM_ID */]:
                this.openHelp();
                break;
            default:
                this.showAlert('Invalid Option. Please contact Support.');
        }
    };
    LandingPageComponent.prototype.openChangePassword = function () {
        var _this = this;
        var changePasswordDialogConfig = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogConfig */]();
        changePasswordDialogConfig.width = '350px';
        changePasswordDialogConfig.autoFocus = false;
        changePasswordDialogConfig.data = {
            title: 'Change Password',
            username: this.username,
        };
        this.changePwdDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["h" /* ChangePasswordComponent */], changePasswordDialogConfig);
        this.changePwdDialogSubscription = this.changePwdDialogRef.componentInstance.submitted.subscribe(function (data) {
            _this.onChangePasswordClick(data);
        });
    };
    LandingPageComponent.prototype.openAbout = function () {
        var aboutUsDialogConfig = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogConfig */]();
        aboutUsDialogConfig.width = '500px';
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_components__["b" /* AboutAppComponent */], aboutUsDialogConfig);
    };
    LandingPageComponent.prototype.openHelp = function () {
        window.open('/help/index.html');
    };
    LandingPageComponent.prototype.changePassword = function () {
        this.changePwdDialogRef.componentInstance.closeModal();
        this.showAlert(__WEBPACK_IMPORTED_MODULE_10__constants__["e" /* PASSWORD_CHANGE_MESSAGE */], __WEBPACK_IMPORTED_MODULE_10__constants__["f" /* POPUP_SUCCESS_TITLE */]);
    };
    LandingPageComponent.prototype.onLogoutSuccess = function () {
        window.open(document.baseURI, '_self');
    };
    LandingPageComponent.prototype.onLogoutFail = function (err) {
        this.showAlert(err, 'Error');
    };
    LandingPageComponent.prototype.getAppConfig = function () {
        return __WEBPACK_IMPORTED_MODULE_9__config__["a" /* applicationConfig */].options;
    };
    LandingPageComponent.prototype.doLogout = function () {
        // I thought to not use logout action here but decied against it. Adding and action to just dispatch this action on applicatipn level is overkill
        // We are not gaining any decoupling as we are moving all this dep in effects/reducers
        var logoutConfig = Object(__WEBPACK_IMPORTED_MODULE_5__dd_common__["m" /* getRequestConfig */])(__WEBPACK_IMPORTED_MODULE_6__dd_login__["c" /* LOGOUT_REQUEST */], this.urlbuilder);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["j" /* Logout */](logoutConfig));
    };
    LandingPageComponent.prototype.onChangePasswordClick = function (data) {
        var baseconfig = Object(__WEBPACK_IMPORTED_MODULE_5__dd_common__["m" /* getRequestConfig */])(__WEBPACK_IMPORTED_MODULE_6__dd_login__["a" /* CHANGE_PASSWORD_REQUEST */], this.urlbuilder);
        var config = { url: baseconfig.url, headers: baseconfig.headers };
        config.url = __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["e" /* AuthUtils */].getChangePasswordUrl(this.user.id, config.url);
        config.payload = __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["e" /* AuthUtils */].getChangePasswordPayload(data.password, data.newPassword);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["g" /* ChangePassword */](config));
    };
    LandingPageComponent.prototype.removeSubscriptions = function () {
        if (this.dataChangeSubscription) {
            this.dataChangeSubscription.unsubscribe();
        }
        if (this.statusChangeSubscription) {
            this.statusChangeSubscription.unsubscribe();
        }
        if (this.alertPopupSubscription) {
            this.alertPopupSubscription.unsubscribe();
        }
        if (this.changePwdDialogSubscription) {
            this.changePwdDialogSubscription.unsubscribe();
        }
    };
    LandingPageComponent.prototype.ngOnDestroy = function () {
        this.removeSubscriptions();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_components__["d" /* HeaderComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_components__["d" /* HeaderComponent */])
    ], LandingPageComponent.prototype, "header", void 0);
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dd-landing-page',
            template: __webpack_require__("./apps/app/src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("./apps/app/src/app/landing-page/landing-page.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__dd_common__["k" /* UrlBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatDialog */]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./apps/app/src/app/landing-page/landing-page.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_info_resolver__ = __webpack_require__("./apps/app/src/app/landing-page/auth-info-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_page_component__ = __webpack_require__("./apps/app/src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorization_guard__ = __webpack_require__("./apps/app/src/app/authorization-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_screen_landing_screen_component__ = __webpack_require__("./apps/app/src/app/landing-screen/landing-screen.component.ts");




var LandingPageRoutes = [
    {
        path: 'app',
        component: __WEBPACK_IMPORTED_MODULE_1__landing_page_component__["a" /* LandingPageComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__landing_screen_landing_screen_component__["a" /* LandingScreenComponent */],
                pathMatch: 'full'
            }
        ],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__authorization_guard__["a" /* AuthorizationGuard */]],
        resolve: { auth: __WEBPACK_IMPORTED_MODULE_0__auth_info_resolver__["a" /* AuthInfoResolver */] }
    }
];


/***/ }),

/***/ "./apps/app/src/app/landing-screen/landing-screen-service-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_USERS_COUNT_REQUEST; });
var GET_USERS_COUNT_REQUEST = {
    method: 'GET',
    apiName: 'getUsersCount',
    baseUrl: '/',
    headers: {
        'content-type': 'application/json'
    }
};


/***/ }),

/***/ "./apps/app/src/app/landing-screen/landing-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div>Hitting the <b>getUsersCount</b> API, showing the User Count through http service call</div>\n<div>The response for the above call is <b>{{userCount}}</b></div>\n"

/***/ }),

/***/ "./apps/app/src/app/landing-screen/landing-screen.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./apps/app/src/app/landing-screen/landing-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dd_common__ = __webpack_require__("./libs/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_application_actions__ = __webpack_require__("./apps/app/src/app/+state/application.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_application_reducer__ = __webpack_require__("./apps/app/src/app/+state/application.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_screen_service_config__ = __webpack_require__("./apps/app/src/app/landing-screen/landing-screen-service-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingScreenComponent = /** @class */ (function () {
    function LandingScreenComponent(store, urlbuilder) {
        this.store = store;
        this.urlbuilder = urlbuilder;
    }
    LandingScreenComponent.prototype.ngOnInit = function () {
        this.usersCount$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__state_application_reducer__["b" /* getUserCountSelector */]);
        this.usersCount$.subscribe(this.onUserCountChange.bind(this));
        this.getUsersCount();
    };
    LandingScreenComponent.prototype.getUsersCount = function () {
        var requestConfig = Object(__WEBPACK_IMPORTED_MODULE_2__dd_common__["m" /* getRequestConfig */])(__WEBPACK_IMPORTED_MODULE_5__landing_screen_service_config__["a" /* GET_USERS_COUNT_REQUEST */], this.urlbuilder);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__state_application_actions__["d" /* FetachUserCount */](requestConfig));
    };
    LandingScreenComponent.prototype.onUserCountChange = function (userCount) {
        if (userCount) {
            this.userCount = userCount;
        }
        else {
            this.userCount = undefined;
        }
    };
    LandingScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dd-landing-screen',
            template: __webpack_require__("./apps/app/src/app/landing-screen/landing-screen.component.html"),
            styles: [__webpack_require__("./apps/app/src/app/landing-screen/landing-screen.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_2__dd_common__["k" /* UrlBuilder */]])
    ], LandingScreenComponent);
    return LandingScreenComponent;
}());



/***/ }),

/***/ "./apps/app/src/app/landing-screen/user-count.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCountServcie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dd_common__ = __webpack_require__("./libs/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserCountServcie = /** @class */ (function () {
    function UserCountServcie(dataService) {
        this.dataService = dataService;
    }
    UserCountServcie.prototype.fetch = function (method, requestConfig) {
        var responseType = { type: 'json' };
        return this.dataService.executeRequest(method, requestConfig, responseType, {});
    };
    UserCountServcie = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dd_common__["c" /* DataService */]])
    ], UserCountServcie);
    return UserCountServcie;
}());



/***/ }),

/***/ "./apps/app/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./apps/app/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./apps/app/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./apps/app/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./libs/common/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_common_module__ = __webpack_require__("./libs/common/src/common.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_common_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_offline_data_generator_service__ = __webpack_require__("./libs/common/src/offline-data-generator.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__src_offline_data_generator_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_app_config__ = __webpack_require__("./libs/common/src/app-config.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__src_app_config__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__src_app_config__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__src_app_config__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__src_app_config__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__src_app_config__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_data_service__ = __webpack_require__("./libs/common/src/data.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__src_data_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_url_builder__ = __webpack_require__("./libs/common/src/url-builder.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__src_url_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_utils__ = __webpack_require__("./libs/common/src/utils.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__src_utils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_project_config__ = __webpack_require__("./libs/common/src/project-config.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__src_project_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_error_message_token__ = __webpack_require__("./libs/common/src/error-message-token.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__src_error_message_token__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_request_builder__ = __webpack_require__("./libs/common/src/request-builder.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__src_request_builder__["a"]; });











/***/ }),

/***/ "./libs/common/src/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ISOFFLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TRACE_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OFFLINE_LOGIN_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return appConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OAUTH_LOGIN_PAGE_ENABLED; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errorMessages__ = __webpack_require__("./libs/common/src/errorMessages.ts");

var ISOFFLINE = true;
var TRACE_ROUTES = true;
var OFFLINE_LOGIN_DATA = { data: undefined, username: '' };
var appConfig = {
    errorMessages: __WEBPACK_IMPORTED_MODULE_0__errorMessages__["a" /* ERROR_MESSEGES */]
};
var OAUTH_LOGIN_PAGE_ENABLED = false;


/***/ }),

/***/ "./libs/common/src/common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./libs/common/src/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplicationCommonModule = /** @class */ (function () {
    function ApplicationCommonModule() {
    }
    ApplicationCommonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]
            ],
        })
    ], ApplicationCommonModule);
    return ApplicationCommonModule;
}());



/***/ }),

/***/ "./libs/common/src/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HTTP_OBSERVE_TYPE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HTTP_OBSERVE_TYPE = 'body';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.executeRequest = function (method, config, responseType, body) {
        var httpHeaders = config.headers ? new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */](config.headers) : undefined;
        var url = config.url;
        return this.http.request(method, url, {
            headers: httpHeaders,
            body: body,
            observe: HTTP_OBSERVE_TYPE,
            responseType: responseType.type
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./libs/common/src/error-message-token.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR_MESSAGES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var ERROR_MESSAGES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('ERROR_MESSAGES');


/***/ }),

/***/ "./libs/common/src/errorMessages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR_MESSEGES; });
var DEF_INVALID_CREDENTIALS_ERROR_MESSAGE = "Invalid credentials, please enter correct username and password.";
var DEF_AUTHORIZATION_FAILED_ERROR_MESSAGE = "Access denied, please contact administrator.";
var ERROR_MESSEGES = {
    "USER_NOT_PRESENT": DEF_INVALID_CREDENTIALS_ERROR_MESSAGE,
    "USER_DISABLED": "User disabled, please contact support.",
    "INVALID_CREDENTIALS": DEF_INVALID_CREDENTIALS_ERROR_MESSAGE,
    "INVALID_SESSION": "Session has timed out, please login again.",
    "LOGIN_FAILED": "Login Failed, please try again.",
    "CHANGE_PASSWORD_PROMPT": "Please set new password.",
    "PASSWORD_EXPIRED": "Password expired, please set new password.",
    "PASSWORD_HISTORY_MATCHED": "New password cannot be same as last",
    "PASSWORD_STRING": " password",
    "NET_CONNECTION_ERROR": " Service call failed due to network connection, please contact support.",
    "PASSWORD_RESET_FAILED": " Password reset failed, please contact support.",
    "INVALID_USER": "User does not exist.",
    "USER_EXISTS": "Username already exists.",
    "GROUP_EXISTS": "Group name already exists.",
    "INVALID_GROUP": "Group <xyz> does not exist.",
    "USER_CONCURRENT_MODIFICATION": "Update failed due to internal error, please try again.",
    "GROUP_CONCURRENT_MODIFICATION": "Update failed due to internal error, please try again.",
    "AUTHENTICATION_FAILED": "User name or password is incorrect.",
    "AUTHORIZATION_FAILED": DEF_AUTHORIZATION_FAILED_ERROR_MESSAGE,
    "USER_NOT_AUTHORIZED": DEF_AUTHORIZATION_FAILED_ERROR_MESSAGE,
    "DEFAULT_MESSAGE": "Error in retrieving data, please contact support.",
    "SESSION_EXPIRED": "Session has expired, please login again.",
    "SESSION_EXPIRED_FOR_APP": "Session has expired, closing application.",
    "MODULE_LOAD_ERROR_GENERIC": "Error in loading module due to session expired or network problem, Closing Application.",
    "DEFAULT_MESSAGE_2": "Login failed due to system error. Please contact system administrator.",
    "PASSWORD_CHANGE_SUCCESS": "Password changed successfully, Logged out.",
    "INVALID_SESSION_LOGOUT": "Logged out due to invalid session.",
    "WRONG_PASSWORD": "Password is wrong.",
    "SAME_OLD_AND_NEW_PASSWORD": "Old Password and New Password should be different.",
    "PASSWORD_MISMATCH": "Confirm Password must match with the New Password.",
    "NO_DATA_EXCEPTION": "System initializing. Please login after sometime.",
    "MISSING_CREDENTIALS": "Session has expired, please login again.",
    "CLUSTER_SHUTDOWN_IN_PROGRESS": "Sorry, there seems to be a temporary outage. Please retry after some time. In case the problem persists, please contact the system administrator.",
    "CACHE_PRELOAD_IN_PROGRESS": "Sorry, there seems to be a temporary outage. Please retry after some time. In case the problem persists, please contact the system administrator.",
    "BELOW_MINIMUM_CLUSTER": "Sorry, there seems to be an unexpected error. Please contact the system administrator.",
    "USER_DOES_NOT_EXIST": DEF_INVALID_CREDENTIALS_ERROR_MESSAGE,
    "NO_PERMISSION_ERROR_UI": DEF_AUTHORIZATION_FAILED_ERROR_MESSAGE,
};


/***/ }),

/***/ "./libs/common/src/offline-data-generator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineDataGeneratorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_core__ = __webpack_require__("./node_modules/@guavus/ui-kit-core/dist/guavus-ui-kit-core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("./libs/common/src/app-config.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfflineDataGeneratorService = /** @class */ (function (_super) {
    __extends(OfflineDataGeneratorService, _super);
    function OfflineDataGeneratorService() {
        var _this = _super.call(this, undefined) || this;
        _this.LOGIN_REQUEST = {
            method: 'POST',
            apiName: 'createToken',
            urlId: 'auth',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };
        return _this;
    }
    OfflineDataGeneratorService.prototype.getFilePath = function (request) {
        var fragment = this.getFragment(request.method, request.url);
        if (!fragment.endsWith('json') && fragment.indexOf(this.LOGIN_REQUEST.apiName) !== -1) {
            var body = request.body.toString();
            return this.createLoginResponseFilePath(body);
        }
        return _super.prototype.getFilePath.call(this, request);
    };
    OfflineDataGeneratorService.prototype.createLoginResponseFilePath = function (queryString) {
        var users = __WEBPACK_IMPORTED_MODULE_3__app_config__["c" /* OFFLINE_LOGIN_DATA */].data || [];
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpParams */]({ fromString: queryString });
        var username = params.get('username');
        var password = params.get('password');
        var isExists = users.some(function (user) { return user.userName === username && user.password === password; });
        return isExists ? './data/login/default.json' : './data/login/error.json';
    };
    OfflineDataGeneratorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], OfflineDataGeneratorService);
    return OfflineDataGeneratorService;
}(__WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_core__["f" /* OfflineDataGenerator */]));



/***/ }),

/***/ "./libs/common/src/project-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_PROJECT_CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var APP_PROJECT_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('APP_PROJECT_CONFIG');


/***/ }),

/***/ "./libs/common/src/request-builder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestBuilder; });
var RequestBuilder;
(function (RequestBuilder) {
    function getUrl(endPointConfig, projectConfig) {
        var serviceRoot = endPointConfig.serviceRoot;
        var baseURL = '';
        var baseUrlFromUrlId = '';
        var urls = projectConfig.urls || { base: projectConfig.baseUrl };
        var urlId = endPointConfig.urlId || 'base';
        baseUrlFromUrlId = urls[urlId] || projectConfig.baseUrl;
        baseURL = endPointConfig.baseUrl || baseUrlFromUrlId;
        var contextRoot = endPointConfig.contextRoot || projectConfig.contextRoot;
        var authToken = endPointConfig.authToken;
        var url = baseURL + contextRoot;
        if (serviceRoot !== undefined) {
            url += serviceRoot;
        }
        var api = endPointConfig.apiName;
        if (api !== undefined) {
            url += api;
        }
        if (authToken !== undefined) {
            url += authToken;
        }
        return url;
    }
    RequestBuilder.getUrl = getUrl;
})(RequestBuilder || (RequestBuilder = {}));


/***/ }),

/***/ "./libs/common/src/url-builder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_config__ = __webpack_require__("./libs/common/src/project-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_builder__ = __webpack_require__("./libs/common/src/request-builder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UrlBuilder = /** @class */ (function () {
    function UrlBuilder(config) {
        this.config = config;
    }
    UrlBuilder.prototype.getUrl = function (config) {
        return __WEBPACK_IMPORTED_MODULE_1__request_builder__["a" /* RequestBuilder */].getUrl(config, this.config);
    };
    UrlBuilder = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__project_config__["a" /* APP_PROJECT_CONFIG */])),
        __metadata("design:paramtypes", [Object])
    ], UrlBuilder);
    return UrlBuilder;
}());



/***/ }),

/***/ "./libs/common/src/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRequestConfig;
function getRequestConfig(endPointConfig, urlbuilder) {
    return {
        url: urlbuilder ? urlbuilder.getUrl(endPointConfig) : endPointConfig.baseUrl + endPointConfig.apiName,
        headers: endPointConfig.headers,
        payload: undefined
    };
}


/***/ }),

/***/ "./libs/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_login_module__ = __webpack_require__("./libs/login/src/login.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_login_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_login_service__ = __webpack_require__("./libs/login/src/login.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__src_login_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_login_page_login_page_component__ = __webpack_require__("./libs/login/src/login-page/login-page.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__src_login_page_login_page_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_config_resolver__ = __webpack_require__("./libs/login/src/config-resolver.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__src_config_resolver__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_service_configs__ = __webpack_require__("./libs/login/src/service-configs.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__src_service_configs__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__src_service_configs__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_state_selectors__ = __webpack_require__("./libs/login/src/+state/selectors.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_login_constants__ = __webpack_require__("./libs/login/src/login-constants.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_href_token_util__ = __webpack_require__("./libs/login/src/href-token-util.ts");
/* unused harmony namespace reexport */










/***/ }),

/***/ "./libs/login/src/+state/login.init.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginInitialState; });
var loginInitialState = {};


/***/ }),

/***/ "./libs/login/src/+state/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectLoginFeature */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectAuthStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");

var selectLoginFeature = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('login');
var selectAuthStatus = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(selectLoginFeature, function (state) { return state.auth.status; });


/***/ }),

/***/ "./libs/login/src/config-resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dd_common__ = __webpack_require__("./libs/common/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfigResolver = /** @class */ (function () {
    function ConfigResolver() {
    }
    ConfigResolver.prototype.resolve = function (route, state) {
        var config = __WEBPACK_IMPORTED_MODULE_1__dd_common__["l" /* appConfig */].login_config;
        config.authClient = __WEBPACK_IMPORTED_MODULE_1__dd_common__["l" /* appConfig */].auth_info;
        return config;
    };
    ConfigResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ConfigResolver);
    return ConfigResolver;
}());



/***/ }),

/***/ "./libs/login/src/href-token-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACCESS_TOKEN */
/* harmony export (immutable) */ __webpack_exports__["a"] = getTokenFromHref;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var ACCESS_TOKEN = 'access_token';
function getTokenFromHref(href) {
    var token = null;
    var params = toHttpParam(href);
    params.keys().forEach(function (key) {
        if (key.includes(ACCESS_TOKEN)) {
            token = params.get(key);
        }
    });
    return token;
}
/**
 * Extracts query parameters from the url.
 * @param url url with token in it.
 */
function toHttpParam(url) {
    // Regex to seprate out the query params.
    // In case the url is http://localhost:8080/dd#access_token=<token-string> then is
    // Creates a query params with value as Token and key as "dd#access_token"
    var regex = url.match(/[a-zA-Z0-9_]/);
    return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpParams */]({
        fromString: (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"])(regex)) ? url.substring(regex.index) : url,
    });
}


/***/ }),

/***/ "./libs/login/src/login-constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INVALID_CREDENTIALS; });
var INVALID_CREDENTIALS = 'Enter valid Credentials';


/***/ }),

/***/ "./libs/login/src/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <gvs-login-component [logo]=\"logo\" \n    [copyright]=\"copyright\" \n    [disclaimer]=\"disclaimer\" \n    [errorMessage]=\"errorMessage\"\n    (signIn)=\"onSignIn($event)\"></gvs-login-component>\n</div>\n"

/***/ }),

/***/ "./libs/login/src/login-page/login-page.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./libs/login/src/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth__ = __webpack_require__("./node_modules/@guavus/ui-kit-auth/dist/guavus-ui-kit-auth.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dd_common__ = __webpack_require__("./libs/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_configs__ = __webpack_require__("./libs/login/src/service-configs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_selectors__ = __webpack_require__("./libs/login/src/+state/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_constants__ = __webpack_require__("./libs/login/src/login-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, route, store, urlbuilder) {
        this.router = router;
        this.route = route;
        this.store = store;
        this.urlbuilder = urlbuilder;
        this.errorMessage = '';
        this.showLoginError = false;
        this.route.data.subscribe(this.updateLoginInfo.bind(this));
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__state_selectors__["a" /* selectAuthStatus */]).subscribe(this.onUserStatusChange.bind(this));
    };
    LoginPageComponent.prototype.onUserStatusChange = function (status) {
        if (status === __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth__["k" /* UserStatus */].AUTHENTICATED) {
            this.router.navigate(['/']);
        }
        else if (this.showLoginError && status === __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth__["k" /* UserStatus */].UN_AUTHENTICATED) {
            this.errorMessage = __WEBPACK_IMPORTED_MODULE_7__login_constants__["a" /* INVALID_CREDENTIALS */];
        }
    };
    LoginPageComponent.prototype.updateLoginInfo = function (data) {
        if (data && data.config) {
            this.config = data.config;
            this.logo = this.config.logo;
            this.copyright = this.config.rightsText;
            this.disclaimer = this.config.disclaimerText;
            this.clientDetails = this.config.authClient;
        }
    };
    LoginPageComponent.prototype.onSignIn = function (credentials) {
        this.showLoginError = true;
        this.errorMessage = '';
        var config = Object(__WEBPACK_IMPORTED_MODULE_4__dd_common__["m" /* getRequestConfig */])(__WEBPACK_IMPORTED_MODULE_5__service_configs__["b" /* LOGIN_REQUEST */], this.urlbuilder);
        __WEBPACK_IMPORTED_MODULE_4__dd_common__["g" /* OFFLINE_LOGIN_DATA */].username = credentials.username.trim();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth__["i" /* Login */](credentials.username.trim(), credentials.password, config, this.clientDetails));
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-page',
            template: __webpack_require__("./libs/login/src/login-page/login-page.component.html"),
            styles: [__webpack_require__("./libs/login/src/login-page/login-page.component.less")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__dd_common__["k" /* UrlBuilder */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./libs/login/src/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export noopReducer */
/* unused harmony export reducers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__ = __webpack_require__("./node_modules/@guavus/ui-kit-auth/dist/guavus-ui-kit-auth.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth_interceptor__ = __webpack_require__("./node_modules/@guavus/ui-kit-auth-interceptor/dist/guavus-ui-kit-auth-interceptor.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_resolver__ = __webpack_require__("./libs/login/src/config-resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_page_login_page_component__ = __webpack_require__("./libs/login/src/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_service__ = __webpack_require__("./libs/login/src/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__state_login_init__ = __webpack_require__("./libs/login/src/+state/login.init.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function noopReducer(state, action) {
    return state;
}
var reducers = {
    login: noopReducer,
    auth: __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["c" /* AuthReducer */]
};
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["b" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["j" /* StoreModule */].forFeature('login', reducers, { initialState: __WEBPACK_IMPORTED_MODULE_9__state_login_init__["a" /* loginInitialState */] }),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["a" /* AuthEffects */]])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["b" /* AuthModule */]],
            providers: [
                // Auth module
                __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth_interceptor__["b" /* AuthTokenService */],
                __WEBPACK_IMPORTED_MODULE_2__guavus_ui_kit_auth__["d" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_6__config_resolver__["a" /* ConfigResolver */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__login_page_login_page_component__["a" /* LoginPageComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./libs/login/src/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth__ = __webpack_require__("./node_modules/@guavus/ui-kit-auth/dist/guavus-ui-kit-auth.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guavus_ui_kit_auth_interceptor__ = __webpack_require__("./node_modules/@guavus/ui-kit-auth-interceptor/dist/guavus-ui-kit-auth-interceptor.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dd_common__ = __webpack_require__("./libs/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__href_token_util__ = __webpack_require__("./libs/login/src/href-token-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_configs__ = __webpack_require__("./libs/login/src/service-configs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__state_selectors__ = __webpack_require__("./libs/login/src/+state/selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














var LoginService = /** @class */ (function () {
    function LoginService(router, store, tokenService, urlbuilder) {
        this.router = router;
        this.store = store;
        this.tokenService = tokenService;
        this.urlbuilder = urlbuilder;
    }
    LoginService.prototype.isAuthenticated = function () {
        var isAutenenticated;
        this.store
            .select(__WEBPACK_IMPORTED_MODULE_13__state_selectors__["a" /* selectAuthStatus */])
            .map(function (status) { return status === __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth__["k" /* UserStatus */].AUTHENTICATED; })
            .first()
            .subscribe(function (status) { return (isAutenenticated = status); });
        return isAutenenticated;
    };
    LoginService.prototype.authenticate$ = function (href, clientDetails) {
        // In case application is redirected from Oauth's login page, extract
        // the token from url.
        var token = Object(__WEBPACK_IMPORTED_MODULE_11__href_token_util__["a" /* getTokenFromHref */])(href);
        if (!Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["isNil"])(token)) {
            this.storeToken(token);
            // After redirection from oauth page, url contains access token as well as other
            // user details. So once token is saved routing the app to '/dd/' to make
            // the url neet and clean.
            this.router.navigate(['/app'], { skipLocationChange: false });
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth__["f" /* Authenticate */](Object(__WEBPACK_IMPORTED_MODULE_5__dd_common__["m" /* getRequestConfig */])(__WEBPACK_IMPORTED_MODULE_12__service_configs__["e" /* VALIDATE_SESSION_REQUEST */], this.urlbuilder), clientDetails));
        return this.store
            .select(__WEBPACK_IMPORTED_MODULE_13__state_selectors__["a" /* selectAuthStatus */])
            .filter(function (status) { return status !== __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth__["k" /* UserStatus */].PROCESSING; })
            .map(function (status) { return status === __WEBPACK_IMPORTED_MODULE_3__guavus_ui_kit_auth__["k" /* UserStatus */].AUTHENTICATED; });
    };
    LoginService.prototype.storeToken = function (token) {
        this.tokenService.setToken(token);
    };
    /**PP
     * Navigates to oauth's login page.
     */
    LoginService.prototype.navigateToLogin = function (redirectUrl) {
        if (__WEBPACK_IMPORTED_MODULE_5__dd_common__["f" /* OAUTH_LOGIN_PAGE_ENABLED */]) {
            var oauthLoginUrl = this.urlbuilder.getUrl(__WEBPACK_IMPORTED_MODULE_12__service_configs__["d" /* OAUTH_LOGIN_REQUEST */]);
            var queryParams = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["f" /* HttpParams */]()
                .set('response_type', 'token')
                .set('client_id', __WEBPACK_IMPORTED_MODULE_5__dd_common__["l" /* appConfig */].auth_info.client_id)
                .set('redirect_uri', redirectUrl);
            window.open(oauthLoginUrl + "?" + queryParams.toString(), '_self');
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_4__guavus_ui_kit_auth_interceptor__["b" /* AuthTokenService */], __WEBPACK_IMPORTED_MODULE_5__dd_common__["k" /* UrlBuilder */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./libs/login/src/service-configs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_PASSWORD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VALIDATE_SESSION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OAUTH_LOGIN_REQUEST; });
var CHANGE_PASSWORD_REQUEST = {
    method: 'POST',
    apiName: 'users',
    urlId: 'um',
    headers: {
        'content-type': 'application/json'
    }
};
var VALIDATE_SESSION_REQUEST = {
    method: 'POST',
    apiName: 'checkToken',
    urlId: 'auth',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'generate-error': 'true',
        'show-popup': 'false',
        'use-file': 'false'
    }
};
var LOGOUT_REQUEST = {
    method: 'GET',
    apiName: 'logout',
    urlId: 'auth',
    headers: {
        'content-type': 'application/json'
    }
};
var LOGIN_REQUEST = {
    method: 'POST',
    apiName: 'createToken',
    urlId: 'auth',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'show-popup': 'false',
    }
};
var OAUTH_LOGIN_REQUEST = {
    method: 'POST',
    apiName: 'login/authorize',
    urlId: 'auth',
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./apps/app/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map