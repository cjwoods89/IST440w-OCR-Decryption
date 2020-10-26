(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/containers/customers.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/containers/customers.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"white px-4 section-header\">\r\n  <h3>Customers list</h3>\r\n  <p class=\"grey-text pt-3\">Manage your customers list</p>\r\n</div>\r\n\r\n<div class=\"container-fluid pt-5 pb-5\">\r\n  <div class=\"pt-3 pb-5\">\r\n    <button mdbBtn color=\"primary\" (click)=\"onAddCustomer()\">Add new customer</button>\r\n\r\n    <div *ngIf=\"customers\" class=\"mt-4 white\">\r\n      <app-customers-list [customers]=\"customers\" (customerEdited)=\"onCustomerEdit($event)\" (customerDeleted)=\"onCustomerDelete($event)\"></app-customers-list>\r\n    </div>\r\n\r\n    <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/customers/containers/customers.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/customers/containers/customers.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jb250YWluZXJzL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/customers/containers/customers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/customers/containers/customers.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../store/customers.actions */ "./src/app/customers/store/customers.actions.ts");
/* harmony import */ var _store_customers_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/customers.selectors */ "./src/app/customers/store/customers.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _shared_components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/customers-modal/customers-modal.component */ "./src/app/shared/components/customers-modal/customers-modal.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
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









var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(modalService, store, afAuth) {
        this.modalService = modalService;
        this.store = store;
        this.afAuth = afAuth;
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading$ = this.store.select(_store_customers_selectors__WEBPACK_IMPORTED_MODULE_4__["getIsLoading"]);
        this.customersSub = this.store.select(_store_customers_selectors__WEBPACK_IMPORTED_MODULE_4__["getCustomers"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (customers) {
            if (_this.user && !customers) {
                _this.store.dispatch(new _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersQuery"]());
            }
            return customers;
        }))
            .subscribe(function (customers) {
            if (customers && customers.length !== 0) {
                var index = Number(customers[customers.length - 1].id);
                _this.lastCustomerIndex = index;
            }
            else {
                _this.lastCustomerIndex = 0;
            }
            _this.customers = customers;
        });
    };
    Object.defineProperty(CustomersComponent.prototype, "user", {
        get: function () {
            return this.afAuth.auth.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    CustomersComponent.prototype.ngOnDestroy = function () {
        if (this.customersSub) {
            this.customersSub.unsubscribe();
        }
    };
    CustomersComponent.prototype.onAddCustomer = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_7__["CustomersModalComponent"], this.modalConfig);
        this.modalRef.content.heading = 'Add new customer';
        this.modalRef.content.customer.id = this.lastCustomerIndex + 1;
        this.modalRef.content.customerData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (customerData) {
            _this.store.dispatch(new _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersAdded"]({ customer: customerData }));
        });
    };
    CustomersComponent.prototype.openEditCustomerModal = function (customer) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_7__["CustomersModalComponent"], this.modalConfig);
        this.modalRef.content.heading = 'Edit customer';
        var customerCopy = {
            key: customer.key,
            id: customer.id || null,
            name: customer.name || null,
            description: customer.description || null
        };
        this.modalRef.content.customer = customerCopy;
        this.modalRef.content.customerData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (customerData) {
            _this.store.dispatch(new _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersEdited"]({ customer: customerData }));
        });
    };
    CustomersComponent.prototype.openConfirmModal = function (customer) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersDeleted"]({ customer: customer }));
            }
        });
    };
    CustomersComponent.prototype.onCustomerEdit = function (customer) {
        this.openEditCustomerModal(customer);
    };
    CustomersComponent.prototype.onCustomerDelete = function (customer) {
        this.openConfirmModal(customer);
    };
    CustomersComponent.ctorParameters = function () { return [
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] }
    ]; };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __importDefault(__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/containers/customers.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./customers.component.scss */ "./src/app/customers/containers/customers.component.scss")).default]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/customers.component */ "./src/app/customers/containers/customers.component.ts");
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
    { path: '', component: _containers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"] }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/customers.component */ "./src/app/customers/containers/customers.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _store_customers_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/customers.reducer */ "./src/app/customers/store/customers.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_customers_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/customers.effects */ "./src/app/customers/store/customers.effects.ts");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/customers/customers-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _customers_routing_module__WEBPACK_IMPORTED_MODULE_9__["CustomersRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('customers', _store_customers_reducer__WEBPACK_IMPORTED_MODULE_5__["customersReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_customers_effects__WEBPACK_IMPORTED_MODULE_8__["CustomersEffects"]])
            ],
            declarations: [_containers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"]],
            exports: [_containers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"]],
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/customers/store/customers.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/store/customers.actions.ts ***!
  \******************************************************/
/*! exports provided: CustomersActionTypes, CustomersQuery, CustomersLoaded, CustomersAdded, CustomersEdited, CustomersDeleted, CustomersError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersActionTypes", function() { return CustomersActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersQuery", function() { return CustomersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersLoaded", function() { return CustomersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersAdded", function() { return CustomersAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersEdited", function() { return CustomersEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersDeleted", function() { return CustomersDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersError", function() { return CustomersError; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var CustomersActionTypes;
(function (CustomersActionTypes) {
    CustomersActionTypes["CUSTOMERS_QUERY"] = "[Customers] Query";
    CustomersActionTypes["CUSTOMERS_LOADED"] = "[Customers] Fetched";
    CustomersActionTypes["CUSTOMERS_ADDED"] = "[Customers] Added";
    CustomersActionTypes["CUSTOMERS_EDITED"] = "[Customers] Edited";
    CustomersActionTypes["CUSTOMERS_DELETED"] = "[Customers] Deleted";
    CustomersActionTypes["CUSTOMERS_ERROR"] = "[Customers] Error";
})(CustomersActionTypes || (CustomersActionTypes = {}));
var CustomersQuery = /** @class */ (function () {
    function CustomersQuery() {
        this.type = CustomersActionTypes.CUSTOMERS_QUERY;
    }
    return CustomersQuery;
}());

var CustomersLoaded = /** @class */ (function () {
    function CustomersLoaded(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_LOADED;
    }
    return CustomersLoaded;
}());

var CustomersAdded = /** @class */ (function () {
    function CustomersAdded(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_ADDED;
    }
    return CustomersAdded;
}());

var CustomersEdited = /** @class */ (function () {
    function CustomersEdited(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_EDITED;
    }
    return CustomersEdited;
}());

var CustomersDeleted = /** @class */ (function () {
    function CustomersDeleted(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_DELETED;
    }
    return CustomersDeleted;
}());

var CustomersError = /** @class */ (function () {
    function CustomersError(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_ERROR;
    }
    return CustomersError;
}());



/***/ }),

/***/ "./src/app/customers/store/customers.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/store/customers.effects.ts ***!
  \******************************************************/
/*! exports provided: CustomersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersEffects", function() { return CustomersEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customers.service */ "./src/app/customers/services/customers.service.ts");
/* harmony import */ var _customers_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.actions */ "./src/app/customers/store/customers.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
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









var CustomersEffects = /** @class */ (function () {
    function CustomersEffects(actions$, customersService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.customersService = customersService;
        this.store = store;
        this.query$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersActionTypes"].CUSTOMERS_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var user = _a[1];
            return _this.customersService.get(user.uid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                var customersData = data.map(function (res) {
                    var key = res.payload.key;
                    var customer = res.payload.val();
                    return {
                        key: key,
                        id: customer.id,
                        name: customer.name,
                        description: customer.description
                    };
                });
                return (new _customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersLoaded"]({ customers: customersData }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersError"]({ error: error }));
            }));
        }));
        this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersActionTypes"].CUSTOMERS_ADDED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.customersService.add(payload.customer, user.uid);
        }));
        this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersActionTypes"].CUSTOMERS_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.customersService.update(payload.customer, user.uid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersError"]({ error: error }));
            }));
        }));
        this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersActionTypes"].CUSTOMERS_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.customersService.delete(payload.customer, user.uid);
        }));
    }
    CustomersEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
        { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], CustomersEffects.prototype, "query$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], CustomersEffects.prototype, "added$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], CustomersEffects.prototype, "edit$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], CustomersEffects.prototype, "delete$", void 0);
    CustomersEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], CustomersEffects);
    return CustomersEffects;
}());



/***/ }),

/***/ "./src/app/customers/store/customers.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/store/customers.reducer.ts ***!
  \******************************************************/
/*! exports provided: customersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersReducer", function() { return customersReducer; });
/* harmony import */ var _customers_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.state */ "./src/app/customers/store/customers.state.ts");
/* harmony import */ var _customers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.actions */ "./src/app/customers/store/customers.actions.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function customersReducer(state, action) {
    if (state === void 0) { state = _customers_state__WEBPACK_IMPORTED_MODULE_0__["customersInitialState"]; }
    switch (action.type) {
        case _customers_actions__WEBPACK_IMPORTED_MODULE_1__["CustomersActionTypes"].CUSTOMERS_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _customers_actions__WEBPACK_IMPORTED_MODULE_1__["CustomersActionTypes"].CUSTOMERS_LOADED: {
            return Object.assign({}, state, {
                customers: action.payload.customers,
                isLoading: false,
            });
        }
        case _customers_actions__WEBPACK_IMPORTED_MODULE_1__["CustomersActionTypes"].CUSTOMERS_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/customers/store/customers.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/customers/store/customers.selectors.ts ***!
  \********************************************************/
/*! exports provided: getCustomersState, getCustomers, getIsLoading, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomersState", function() { return getCustomersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomers", function() { return getCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getCustomersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('customers');
var getCustomers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomersState, function (customers) { return customers.customers; });
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomersState, function (customers) { return customers.isLoading; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomersState, function (customers) { return customers.error; });


/***/ }),

/***/ "./src/app/customers/store/customers.state.ts":
/*!****************************************************!*\
  !*** ./src/app/customers/store/customers.state.ts ***!
  \****************************************************/
/*! exports provided: customersInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersInitialState", function() { return customersInitialState; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var customersInitialState = {
    customers: null,
    isLoading: true,
    error: null
};


/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map