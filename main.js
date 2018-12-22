(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singlepost/singlepost.component */ "./src/app/singlepost/singlepost.component.ts");







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"] },
    { path: 'post', component: _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] },
    { path: 'post/:id', component: _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_6__["SinglepostComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myclass{\r\n    background-color: rgb(138, 207, 207);\r\n}\r\n.red { \r\n    color: rgba(126, 8, 34, 0.651); \r\n }\r\n.thick{ \r\n    font-size:20px; \r\n }\r\n.loader {\r\n    border-top: 16px solid blue;\r\n    border-bottom: 16px solid blue;\r\n  }\r\n.center {\r\n    margin: auto;\r\n    width: 50%;\r\n    border: 3px solid rgb(140, 209, 241);\r\n    padding: 10px;\r\n    /* text-align: center; */\r\n  }\r\n.beech{\r\n      text-align: center;\r\n  }\r\nbutton{\r\n    margin:auto;\r\n    display:block;\r\n  }\r\n.myclass{\r\n   color: white;\r\n   background-color: black;\r\n  \r\n }\r\ntable{\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   border: 4px solid brown;\r\n   padding: 10px;\r\n   width: 900px;\r\n   height: 200px;\r\n   background-color: rgb(127, 225, 255)\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBcUM7Q0FDeEM7QUFDRDtJQUNJLCtCQUErQjtFQUNqQztBQUNEO0lBQ0csZUFBZTtFQUNqQjtBQUNEO0lBQ0csNEJBQTRCO0lBQzVCLCtCQUErQjtHQUNoQztBQUNEO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLHlCQUF5QjtHQUMxQjtBQUNEO01BQ0ksbUJBQW1CO0dBQ3RCO0FBQ0Q7SUFDRSxZQUFZO0lBQ1osY0FBYztHQUNmO0FBQ0Y7R0FDRSxhQUFhO0dBQ2Isd0JBQXdCOztFQUV6QjtBQUNEO0dBQ0Usa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQix3QkFBd0I7R0FDeEIsY0FBYztHQUNkLGFBQWE7R0FDYixjQUFjO0dBQ2Qsb0NBQW9DO0VBQ3JDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXljbGFzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDIwNywgMjA3KTtcclxufVxyXG4ucmVkIHsgXHJcbiAgICBjb2xvcjogcmdiYSgxMjYsIDgsIDM0LCAwLjY1MSk7IFxyXG4gfSBcclxuIC50aGlja3sgXHJcbiAgICBmb250LXNpemU6MjBweDsgXHJcbiB9XHJcbiAubG9hZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgYmx1ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDE2cHggc29saWQgYmx1ZTtcclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE0MCwgMjA5LCAyNDEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICB9XHJcbiAgLmJlZWNoe1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICB9XHJcbiAubXljbGFzc3tcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBcclxuIH1cclxuIHRhYmxle1xyXG4gICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICBib3JkZXI6IDRweCBzb2xpZCBicm93bjtcclxuICAgcGFkZGluZzogMTBweDtcclxuICAgd2lkdGg6IDkwMHB4O1xyXG4gICBoZWlnaHQ6IDIwMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI3LCAyMjUsIDI1NSlcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"myclass center beech\"><b>Let's Get Started</b></h1>\n\n<ul class=\"red thick \" >\n  <li>Home</li>\n  <li>About Us</li>\n  <li>Help</li>\n  <li>Reviews</li>\n</ul>\n<!-- <app-home></app-home> -->\n<!-- <app-header> -->\n  \n<!-- </app-header> -->\n<button class=\"btn btn-primary beech\">Click Here</button>\n<!-- <button class=\"btn btn-success beech\">To verify</button> -->\n<div>\n  <app-header>\n  \n  </app-header>\n</div>\n<br><br>\n<button class =\"btn btn-primary\"[class.myclass]=\"isactive\">Submit data</button>\n<p [style.color]=\"mycolor?'green':' red'\">This is para</p>\n<br>\n <input type=\"text\" [(ngModel)]=\"firstname\">\n<br>\n<div *ngIf=\"showdiv\">This division inside if</div>\n<br>\n<div *ngIf=\"a<b; else elsepart\">a is small</div>\n<ng-template #elsepart>b is small</ng-template>\n<br>\n<br>\n\n<div *ngIf=\"a>b; then ifpart1 else elsepart2\"></div>\n<ng-template #ifpart1>a is great</ng-template>\n<ng-template #elsepart2>b is great</ng-template>\n<br>\n<br>\n\n\n<div *ngIf=\"a>b; then ifpart3 else elsepart3\"></div>\n<ng-template #ifpart3>\n  <ng-container *ngIf=\"a>c; then ifpart2 else elsepart4\">\n\n  </ng-container>\n</ng-template>\n    <ng-template #ifpart2>a is great</ng-template>\n    <ng-template #elsepart4>c is graet</ng-template>\n  \n\n\n<ng-template #elsepart3>\n  <ng-container *ngIf=\"b>c;then ifpartb else elsepartb\"></ng-container>\n</ng-template>\n    <ng-template #ifpartb>b is graet</ng-template>\n    <ng-template #elsepartb>c is grat</ng-template>\n  \n<br>\n<ul *ngFor=\"let x of myarr\">\n  <li>{{x}}</li>\n</ul>\n<br>\n<br>\n\n<div *ngFor=\"let x of myarr\">\n  <h1>{{x}}</h1>\n</div>\n\n<br>\n{{myobj.age}}\n{{myobj.fname}}\n<br>\n<br>\n\n<ul *ngFor=\"let x of myobj1\">\n  <li>{{x.fname}} {{x.lname}}</li>\n</ul>\n<br>\n<hr>\n<div *ngFor=\"let x of myobj1\">\n  <h1>Fname</h1>\n  <h1>{{x.fname}}</h1>\n</div>\n<br>\n<br>\n<hr>\n<p class=\"beech\">TABLE</p>\n<table border=\"\" class=\"beech\">\n  <tr>\n  <th>First name</th>\n  <th>Last name</th>\n  <th>Age</th>\n  <th>City</th>\n  </tr>\n  <tr *ngFor=\"let x of myobj1\">\n    <td>{{x.fname}}</td>\n    <td>{{x.lname}}</td>\n    <td>{{x.age}}</td>\n    <td>{{x.city}}</td>\n  \n  </tr>\n</table>\n<p>Switch</p>\n<div [ngSwitch]=\"f\">\n  <div *ngSwitchCase=\"1\">One</div>\n  <div *ngSwitchCase=\"2\">Two</div>\n  <div *ngSwitchDefault>default</div>\n</div>\n\n<input #day type=\"number\">\n<button class=\"btn btn-primary beech\" (click)=\"getvall(day.value)\">SHOW ME</button>\n<div [ngSwitch]=\"d\">\n    <div *ngSwitchCase=\"1\">Mon</div>\n    <div *ngSwitchCase=\"2\">Tue</div>\n    <div *ngSwitchCase=\"3\">Wed</div>\n    <div *ngSwitchCase=\"4\">Thu</div>\n    <div *ngSwitchCase=\"5\">Fri</div>\n    <div *ngSwitchDefault>default</div>\n\n</div>\n\n<a routerLink=\"home\">Home</a><br>\n\n<a routerLink=\"header\">Header</a>\n<br> \n<a routerLink=\"post\">Post</a>\n<br>\n<!-- <a routerLink=\"singlepost\">Singlepost</a> -->\n\n<br>\n{{\"This is string\"|uppercase}}\n<br>\n{{\"This is string\"|lowercase}}\n<br>\n<br>\n<p>Birthaday of hero  {{birthday|date:\"MM/dd/yy\"}}</p>\n<br>\n<p>The hero's birthday is {{ birthday | date:format }}</p>\n<button (click)=\"toggleFormat()\">Toggle Format</button>\n<br>\n<!-- {{ 50 | percent [ : digitsInfo [ : locale ] ] }} -->\n<br>\n<div>\n  <!--output '26%'-->\n  <p>A: {{a1 | percent}}</p>\n\n  <!--output '0,134.950%'-->\n  <p>B: {{b1 | percent:'4.3-5'}}</p>\n\n  <!--output '0 134,950 %'-->\n  <p>B: {{b1 | percent:'4.3-5':'fr'}}</p>\n</div>\n<br>\n <!-- <h3>{{\"This is string \"|mycustom}}</h3> -->\n <br>\n <p>\n   pipe to display in array\n </p>\n <h3>{{fruits|mycustom}}</h3>\n <app-register [pardata]=\"mydata\"></app-register>\n\n <br>\n <app-register (datasend)=\"parfun($event)\"></app-register>\n {{chdata}}\n\n<br>\n<app-mycomponent>this is the mycomponent</app-mycomponent>\n<br>\n<app-register2>\n  <ng-container class=\"headingpart\">this is heading part</ng-container>\n  <ng-container class=\"bodypart\">this is body part</ng-container>\n</app-register2>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.birthday = new Date(1998, 3, 15);
        this.toggle = true;
        this.a1 = 0.259;
        this.b1 = 1.3495;
        this.title = 'mythirdapp';
        this.isactive = true;
        // mycolor:string="red";
        this.mycolor = true;
        this.showdiv = true;
        this.a = 100;
        this.b = 122;
        this.c = 26;
        this.myarr = [1, 2, 3, 4, 5];
        this.myobj = {
            fname: "xyz",
            lname: "ABC",
            age: 20,
            city: "Ngp"
        };
        this.myobj1 = [{ fname: "hgi",
                lname: "XYZ",
                age: 28,
                city: "DHERADHUN"
            }, { fname: "def",
                lname: "ghi",
                age: 24,
                city: "ghkj"
            },];
        this.f = 1;
        this.d = 0;
        this.fruits = ["a", "b", "c", "s"];
        this.mydata = "Hello,this data sent from parent to child";
        this.chdata = " ";
    }
    Object.defineProperty(AppComponent.prototype, "format", {
        get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
    AppComponent.prototype.getvall = function (y) {
        this.d = y;
    };
    AppComponent.prototype.parfun = function ($event) {
        this.chdata = $event;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./singlepost/singlepost.component */ "./src/app/singlepost/singlepost.component.ts");
/* harmony import */ var _mycustom_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mycustom.pipe */ "./src/app/mycustom.pipe.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _mycomponent_mycomponent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mycomponent/mycomponent.component */ "./src/app/mycomponent/mycomponent.component.ts");
/* harmony import */ var _register2_register2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register2/register2.component */ "./src/app/register2/register2.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                _singlepost_singlepost_component__WEBPACK_IMPORTED_MODULE_10__["SinglepostComponent"],
                _mycustom_pipe__WEBPACK_IMPORTED_MODULE_11__["MycustomPipe"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _mycomponent_mycomponent_component__WEBPACK_IMPORTED_MODULE_13__["MycomponentComponent"],
                _register2_register2_component__WEBPACK_IMPORTED_MODULE_14__["Register2Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"beech\">\n  header works!\n  header here\n</p>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".style{\r\n    font-size: 4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGV7XHJcbiAgICBmb250LXNpemU6IDRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p >\n  home works!\n  Hey\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mycomponent/mycomponent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mycomponent/mycomponent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215Y29tcG9uZW50L215Y29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mycomponent/mycomponent.component.html":
/*!********************************************************!*\
  !*** ./src/app/mycomponent/mycomponent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mycomponent works!\n</p>\n<ng-content></ng-content>\n"

/***/ }),

/***/ "./src/app/mycomponent/mycomponent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mycomponent/mycomponent.component.ts ***!
  \******************************************************/
/*! exports provided: MycomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycomponentComponent", function() { return MycomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MycomponentComponent = /** @class */ (function () {
    function MycomponentComponent() {
    }
    MycomponentComponent.prototype.ngOnInit = function () {
    };
    MycomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mycomponent',
            template: __webpack_require__(/*! ./mycomponent.component.html */ "./src/app/mycomponent/mycomponent.component.html"),
            styles: [__webpack_require__(/*! ./mycomponent.component.css */ "./src/app/mycomponent/mycomponent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MycomponentComponent);
    return MycomponentComponent;
}());



/***/ }),

/***/ "./src/app/mycustom.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/mycustom.pipe.ts ***!
  \**********************************/
/*! exports provided: MycustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycustomPipe", function() { return MycustomPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MycustomPipe = /** @class */ (function () {
    function MycustomPipe() {
        this.text = "";
        this.i = 0;
    }
    MycustomPipe.prototype.transform = function (value, args) {
        for (this.i = 0; this.i < value.length; this.i++) {
            this.text += value[this.i] + " ";
        }
        return this.text;
        // return value.split(' ');
    };
    MycustomPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mycustom'
        })
    ], MycustomPipe);
    return MycustomPipe;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    border: 2px solid aqua;\r\n}\r\ntr{\r\n     border: 2px solid black; \r\n}\r\nth,td{\r\n     border: 2px solid black; \r\n    text-align: center;\r\n}\r\n.color{\r\n    background-color: blanchedalmond;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUI7QUFDRDtLQUNLLHdCQUF3QjtDQUM1QjtBQUNEO0tBQ0ssd0JBQXdCO0lBQ3pCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksaUNBQWlDO0NBQ3BDIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGFxdWE7XHJcbn1cclxudHJ7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IFxyXG59XHJcbnRoLHRke1xyXG4gICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  post works!\n  \n</p>\n<table>\n  <tr>\n    <th class=\"color\">id</th>\n  <th class=\"color\">title</th>\n</tr>\n<tr *ngFor =\"let x of myar\">\n  <td><a routerLink=\"{{x.id}}\">{{x.id}}</a></td>\n  <td>{{x.title}}</td>\n</tr>\n  \n</table>\n<!-- <div *ngFor =\"let x of myar \"><h4>{{x.id}}</h4> -->\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostComponent = /** @class */ (function () {
    function PostComponent() {
        this.myar = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) { return response.json(); })
            .then(function (json) { return _this.myar = json; })
            .catch(function (err) { return console.log("Error comes in post" + err); });
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n  {{pardata}}\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.datasend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.datasend.emit("Data from child to parent");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "pardata", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "datasend", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register2/register2.component.css":
/*!***************************************************!*\
  !*** ./src/app/register2/register2.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyMi9yZWdpc3RlcjIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/register2/register2.component.html":
/*!****************************************************!*\
  !*** ./src/app/register2/register2.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register2 works!\n</p>\n<div class=\"card\">\n  <div class=\"card-header\">\n    <ng-content select=\".headingpart\"></ng-content>\n  </div>\n  <div class=\"card-body\">\n    <ng-content select=\".bodypart\"></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register2/register2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/register2/register2.component.ts ***!
  \**************************************************/
/*! exports provided: Register2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register2Component", function() { return Register2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Register2Component = /** @class */ (function () {
    function Register2Component() {
    }
    Register2Component.prototype.ngOnInit = function () {
    };
    Register2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register2',
            template: __webpack_require__(/*! ./register2.component.html */ "./src/app/register2/register2.component.html"),
            styles: [__webpack_require__(/*! ./register2.component.css */ "./src/app/register2/register2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Register2Component);
    return Register2Component;
}());



/***/ }),

/***/ "./src/app/singlepost/singlepost.component.css":
/*!*****************************************************!*\
  !*** ./src/app/singlepost/singlepost.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZXBvc3Qvc2luZ2xlcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/singlepost/singlepost.component.html":
/*!******************************************************!*\
  !*** ./src/app/singlepost/singlepost.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  singlepost works!\n</p>\n<h2>\n  {{mypost.userid}}\n</h2>\n<h3>\n  {{mypost.title}}\n</h3>\n"

/***/ }),

/***/ "./src/app/singlepost/singlepost.component.ts":
/*!****************************************************!*\
  !*** ./src/app/singlepost/singlepost.component.ts ***!
  \****************************************************/
/*! exports provided: SinglepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepostComponent", function() { return SinglepostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SinglepostComponent = /** @class */ (function () {
    function SinglepostComponent(aroute) {
        this.aroute = aroute;
        this.mypost = [];
        this.id = 0;
    }
    SinglepostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aroute.params.subscribe(function (res) { return _this.id = res.id; });
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
            .then(function (response) { return response.json(); })
            .then(function (json) { return _this.mypost = json; });
    };
    SinglepostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singlepost',
            template: __webpack_require__(/*! ./singlepost.component.html */ "./src/app/singlepost/singlepost.component.html"),
            styles: [__webpack_require__(/*! ./singlepost.component.css */ "./src/app/singlepost/singlepost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SinglepostComponent);
    return SinglepostComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\mythirdapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map