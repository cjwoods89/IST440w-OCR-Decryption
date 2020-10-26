(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/main-profile/main-profile.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/main-profile/main-profile.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-card>\r\n  <mdb-card-body>\r\n    <h3 class=\"h2-responsive mb-4\">\r\n      <strong>Edit profile</strong>\r\n    </h3>\r\n\r\n    <!--Body-->\r\n    <form [formGroup]=\"updateProfileForm\">\r\n      <h5 class=\"h5-responsive\">Display name</h5>\r\n      <div class=\"md-form\">\r\n        <i class=\"fa fa-user prefix\"></i>\r\n        <input type=\"text\" id=\"form1\" class=\"form-control\" mdbInput formControlName=\"displayName\" />\r\n        <label for=\"form1\">Display name</label>\r\n      </div>\r\n\r\n      <h5 class=\"h5-responsive\">Photo Url</h5>\r\n      <div class=\"md-form\">\r\n        <i class=\"fa fa-user prefix\"></i>\r\n        <input type=\"text\" id=\"form2\" class=\"form-control\" mdbInput formControlName=\"photoUrl\" />\r\n        <label for=\"form2\">Photo Url</label>\r\n      </div>\r\n\r\n      <div class=\"text-right\">\r\n        <button type=\"button\" mdbBtn color=\"primary\" (click)=\"onProfileUpdate()\">Update profile</button>\r\n      </div>\r\n    </form>\r\n  </mdb-card-body>\r\n</mdb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/profile-user/profile-user.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/profile-user/profile-user.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-card>\r\n  <mdb-card-body>\r\n    <div class=\"text-center\">\r\n      <div class=\"avatar\" style=\"margin-top: -60px\">\r\n          <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"96\" width=\"96\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\r\n      </div>\r\n\r\n      <h3 *ngIf=\"user.displayName\" class=\"mt-4\">{{ user.displayName }}</h3>\r\n      <h3 *ngIf=\"!user.displayName\" class=\"mt-4\">Anonymous user</h3>\r\n\r\n      <a mdbBtn class=\"mt-3\" color=\"primary\" (click)=\"onLogout()\">\r\n        <i class=\"fa fa-sign-out\"></i>\r\n        Logout\r\n      </a>\r\n    </div>\r\n  </mdb-card-body>\r\n</mdb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/containers/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/containers/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"white px-4 section-header\">\r\n  <h3>Profile</h3>\r\n  <p class=\"grey-text pt-3\">Change your personal information</p>\r\n</div>\r\n\r\n<div class=\"container py-5\">\r\n  <div class=\"row mx-auto py-5\">\r\n    <div class=\"col-md-4 mt-3\">\r\n      <app-profile-user [user]=\"user$ | async\" (logout)=\"logoutUser($event)\"></app-profile-user>\r\n    </div>\r\n    <div class=\"col-md-8 mt-3\">\r\n        <app-main-profile [user]=\"user$ | async\" (profileUpdate)=\"updateProfile($event)\"></app-main-profile>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/profile/components/main-profile/main-profile.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/profile/components/main-profile/main-profile.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29tcG9uZW50cy9tYWluLXByb2ZpbGUvbWFpbi1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/components/main-profile/main-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/main-profile/main-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProfileComponent", function() { return MainProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MainProfileComponent = /** @class */ (function () {
    function MainProfileComponent() {
        this.profileUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MainProfileComponent.prototype.ngOnInit = function () {
        this.updateProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.displayName),
            photoUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.photoUrl)
        });
    };
    MainProfileComponent.prototype.onProfileUpdate = function () {
        this.profileUpdate.emit(this.updateProfileForm.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MainProfileComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MainProfileComponent.prototype, "profileUpdate", void 0);
    MainProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/main-profile/main-profile.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./main-profile.component.scss */ "./src/app/profile/components/main-profile/main-profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MainProfileComponent);
    return MainProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/profile-user/profile-user.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/profile/components/profile-user/profile-user.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29tcG9uZW50cy9wcm9maWxlLXVzZXIvcHJvZmlsZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/components/profile-user/profile-user.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/profile-user/profile-user.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUserComponent", function() { return ProfileUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileUserComponent = /** @class */ (function () {
    function ProfileUserComponent() {
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProfileUserComponent.prototype.ngOnInit = function () {
    };
    ProfileUserComponent.prototype.onLogout = function () {
        this.logout.emit(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileUserComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProfileUserComponent.prototype, "logout", void 0);
    ProfileUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/profile-user/profile-user.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./profile-user.component.scss */ "./src/app/profile/components/profile-user/profile-user.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileUserComponent);
    return ProfileUserComponent;
}());



/***/ }),

/***/ "./src/app/profile/containers/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/profile/containers/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFpbmVycy9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/containers/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/containers/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(store) {
        this.store = store;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]);
    };
    ProfileComponent.prototype.updateProfile = function (userData) {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProfile"](userData));
    };
    ProfileComponent.prototype.logoutUser = function (user) {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogoutRequested"]({ user: user }));
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/containers/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/containers/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/profile.component */ "./src/app/profile/containers/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    { path: '', component: _containers_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _containers_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/profile.component */ "./src/app/profile/containers/profile.component.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _components_main_profile_main_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-profile/main-profile.component */ "./src/app/profile/components/main-profile/main-profile.component.ts");
/* harmony import */ var _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile-user/profile-user.component */ "./src/app/profile/components/profile-user/profile-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_containers_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _components_main_profile_main_profile_component__WEBPACK_IMPORTED_MODULE_6__["MainProfileComponent"], _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_7__["ProfileUserComponent"]],
            exports: [_containers_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map