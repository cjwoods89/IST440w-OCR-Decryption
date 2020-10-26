(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/containers/projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/containers/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"white px-4 section-header\">\r\n  <h3>Projects list</h3>\r\n  <p class=\"grey-text pt-3\">Add, edit and delete your projects</p>\r\n</div>\r\n\r\n<div class=\"container-fluid pb-5\">\r\n  <div class=\"py-5\">\r\n      <button mdbBtn color=\"primary\" class=\"ml-3\" (click)=\"openAddProjectModal()\">Add new project</button>\r\n      <app-projects-list [projects]=\"projects$ | async\" (projectDeleted)=\"onProjectDelete($event)\" (projectEdited)=\"onProjectEdit($event)\"></app-projects-list>\r\n\r\n    <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/projects/containers/projects.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/projects/containers/projects.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2NvbnRhaW5lcnMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/projects/containers/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/projects/containers/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../store/projects.actions */ "./src/app/projects/store/projects.actions.ts");
/* harmony import */ var _store_projects_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/projects.selectors */ "./src/app/projects/store/projects.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _shared_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/project-modal/project-modal.component */ "./src/app/shared/components/project-modal/project-modal.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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









var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(store, modalService, afAuth) {
        this.store = store;
        this.modalService = modalService;
        this.afAuth = afAuth;
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading$ = this.store.select(_store_projects_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllLoaded"]);
        this.projects$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_projects_selectors__WEBPACK_IMPORTED_MODULE_4__["getProjects"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (projects) {
            if (_this.user && !projects) {
                _this.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectsQuery"]());
            }
            return projects;
        }));
    };
    Object.defineProperty(ProjectsComponent.prototype, "user", {
        get: function () {
            return this.afAuth.auth.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    ProjectsComponent.prototype.openAddProjectModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProjectModalComponent"], this.modalConfig);
        this.modalRef.content.heading = 'Add new project';
        this.modalRef.content.projectData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (projectData) {
            _this.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectAdded"]({ project: projectData }));
        });
    };
    ProjectsComponent.prototype.openEditProjectModal = function (project) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProjectModalComponent"], this.modalConfig);
        this.modalRef.content.heading = 'Edit project';
        var projectCopy = __assign({}, project);
        this.modalRef.content.project = projectCopy;
        this.modalRef.content.projectData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (projectData) {
            _this.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectEdited"]({ project: projectData }));
        });
    };
    ProjectsComponent.prototype.openConfirmModal = function (project) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectDeleted"]({ project: project }));
            }
        });
    };
    ProjectsComponent.prototype.onProjectDelete = function (project) {
        this.openConfirmModal(project);
    };
    ProjectsComponent.prototype.onProjectEdit = function (project) {
        this.openEditProjectModal(project);
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] }
    ]; };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __importDefault(__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/containers/projects.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/containers/projects.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/projects.component */ "./src/app/projects/containers/projects.component.ts");
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
    { path: '', component: _containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/projects.component */ "./src/app/projects/containers/projects.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _store_projects_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/projects.reducer */ "./src/app/projects/store/projects.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_projects_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/projects.effects */ "./src/app/projects/store/projects.effects.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/projects/projects-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('projects', _store_projects_reducer__WEBPACK_IMPORTED_MODULE_6__["projectsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_projects_effects__WEBPACK_IMPORTED_MODULE_8__["ProjectsEffects"]])
            ],
            declarations: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]],
            exports: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]],
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/projects/store/projects.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/projects/store/projects.actions.ts ***!
  \****************************************************/
/*! exports provided: ProjectsActionTypes, ProjectsQuery, ProjectsLoaded, ProjectAdded, ProjectEdited, ProjectDeleted, ProjectsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsActionTypes", function() { return ProjectsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsQuery", function() { return ProjectsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsLoaded", function() { return ProjectsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAdded", function() { return ProjectAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEdited", function() { return ProjectEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDeleted", function() { return ProjectDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsError", function() { return ProjectsError; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ProjectsActionTypes;
(function (ProjectsActionTypes) {
    ProjectsActionTypes["PROJECTS_QUERY"] = "[Projects] Projects query";
    ProjectsActionTypes["PROJECTS_LOADED"] = "[Projects] Projects loaded";
    ProjectsActionTypes["PROJECT_ADDED"] = "[Projects] Project added";
    ProjectsActionTypes["PROJECT_EDITED"] = "[Projects] Project edited";
    ProjectsActionTypes["PROJECT_DELETED"] = "[Projects] Project deleted";
    ProjectsActionTypes["PROJECTS_ERROR"] = "[Projects] Projects error";
})(ProjectsActionTypes || (ProjectsActionTypes = {}));
var ProjectsQuery = /** @class */ (function () {
    function ProjectsQuery() {
        this.type = ProjectsActionTypes.PROJECTS_QUERY;
    }
    return ProjectsQuery;
}());

var ProjectsLoaded = /** @class */ (function () {
    function ProjectsLoaded(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECTS_LOADED;
    }
    return ProjectsLoaded;
}());

var ProjectAdded = /** @class */ (function () {
    function ProjectAdded(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECT_ADDED;
    }
    return ProjectAdded;
}());

var ProjectEdited = /** @class */ (function () {
    function ProjectEdited(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECT_EDITED;
    }
    return ProjectEdited;
}());

var ProjectDeleted = /** @class */ (function () {
    function ProjectDeleted(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECT_DELETED;
    }
    return ProjectDeleted;
}());

var ProjectsError = /** @class */ (function () {
    function ProjectsError(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECTS_ERROR;
    }
    return ProjectsError;
}());



/***/ }),

/***/ "./src/app/projects/store/projects.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/projects/store/projects.effects.ts ***!
  \****************************************************/
/*! exports provided: ProjectsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsEffects", function() { return ProjectsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _projects_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.actions */ "./src/app/projects/store/projects.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/projects.service */ "./src/app/projects/services/projects.service.ts");
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









var ProjectsEffects = /** @class */ (function () {
    function ProjectsEffects(actions$, projectsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.projectsService = projectsService;
        this.store = store;
        this.query$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECTS_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var user = _a[1];
            return _this.projectsService.get(user.uid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                var projectsData = data.map(function (res) {
                    var key = res.payload.key;
                    var project = res.payload.val();
                    return {
                        key: key || null,
                        title: project.title || null,
                        description: project.description || null,
                        photoUrl: project.photoUrl || null
                    };
                });
                return (new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsLoaded"]({ projects: projectsData }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsError"]({ error: error })); }));
        }));
        this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECT_ADDED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.projectsService.add(payload.project, user.uid);
        }));
        this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECT_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.projectsService.delete(payload.project, user.uid);
        }));
        this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECT_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.projectsService.update(payload.project, user.uid);
        }));
    }
    ProjectsEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
        { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ProjectsEffects.prototype, "query$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], ProjectsEffects.prototype, "added$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], ProjectsEffects.prototype, "delete$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], ProjectsEffects.prototype, "edit$", void 0);
    ProjectsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ProjectsEffects);
    return ProjectsEffects;
}());



/***/ }),

/***/ "./src/app/projects/store/projects.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/projects/store/projects.reducer.ts ***!
  \****************************************************/
/*! exports provided: projectsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsReducer", function() { return projectsReducer; });
/* harmony import */ var _projects_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.actions */ "./src/app/projects/store/projects.actions.ts");
/* harmony import */ var _projects_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.state */ "./src/app/projects/store/projects.state.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function projectsReducer(state, action) {
    if (state === void 0) { state = _projects_state__WEBPACK_IMPORTED_MODULE_1__["projectsInitialState"]; }
    switch (action.type) {
        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_QUERY: {
            return Object.assign({}, state, {
                loading: true,
            });
        }
        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_LOADED: {
            return Object.assign({}, state, {
                projects: action.payload.projects,
                loading: false,
            });
        }
        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_ERROR: {
            return Object.assign({}, state, {
                loading: false,
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/projects/store/projects.selectors.ts":
/*!******************************************************!*\
  !*** ./src/app/projects/store/projects.selectors.ts ***!
  \******************************************************/
/*! exports provided: getProjectsState, getProjects, getAllLoaded, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectsState", function() { return getProjectsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLoaded", function() { return getAllLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getProjectsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('projects');
var getProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, function (projects) { return projects.projects; });
var getAllLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, function (projects) { return projects.loading; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, function (projects) { return projects.error; });


/***/ }),

/***/ "./src/app/projects/store/projects.state.ts":
/*!**************************************************!*\
  !*** ./src/app/projects/store/projects.state.ts ***!
  \**************************************************/
/*! exports provided: projectsInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsInitialState", function() { return projectsInitialState; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var projectsInitialState = {
    projects: null,
    loading: false,
    error: null
};


/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map