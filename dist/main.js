(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/christian/MIT/Lux/src/main.ts */"zUnb");


/***/ }),

/***/ "1Jqw":
/*!*************************************************!*\
  !*** ./src/app/main-component/main.services.ts ***!
  \*************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


const API = {
    usersAdd: '/api/usersAdd/',
    usersGet: '/api/usersGet/',
    storyAdd: '/api/storyAdd',
    storyGet: '/api/storyGet',
    storyGetAll: '/api/storyGetAll',
    userAnnotationAdd: '/api/userAnnotationAdd',
    userAnnotationGet: '/api/userAnnotationGet',
    userAnnotationGetAllUsers: '/api/userAnnotationGetAllUsers',
    telemetryAdd: '/api/telemetryAdd'
};
class MainService {
    constructor(http) {
        this.http = http;
    }
    usersAdd(user) {
        return this.http.post(API.usersAdd, { 'data': user });
    }
    usersGet() {
        return this.http.post(API.usersGet, {});
    }
    storyAdd(story) {
        return this.http.post(API.storyAdd, { 'data': story });
    }
    storyGet(storyNum) {
        return this.http.post(API.storyGet, { 'data': storyNum });
    }
    storyGetAll() {
        return this.http.post(API.storyGetAll, {});
    }
    userAnnotationAdd(user, storyNum, jsonGraph) {
        return this.http.post(API.userAnnotationAdd, { 'user': user, 'storyNum': storyNum, 'data': jsonGraph });
    }
    userAnnotationGet(user, storyNum) {
        return this.http.post(API.userAnnotationGet, { 'user': user, 'storyNum': storyNum });
    }
    userAnnotationGetAllUsers(storyNum) {
        return this.http.post(API.userAnnotationGetAllUsers, { 'storyNum': storyNum });
    }
    telemetryAdd(user, data) {
        return this.http.post(API.telemetryAdd, { 'user': user, 'data': data });
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "J2qu":
/*!**************************************************!*\
  !*** ./src/app/main-component/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mermaid_utils */ "qPkg");
/* harmony import */ var _ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngrx/main.reducer */ "x+dD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _main_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main.services */ "1Jqw");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _utils_autofocus_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/autofocus.directive */ "ynzx");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/panel */ "7CaW");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "Jjks");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");






















const _c0 = ["mermaid"];
const _c1 = ["edgeDialogInp2"];
const _c2 = ["storyRow"];
const _c3 = function () { return { "margin-right": "8px" }; };
function MainComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_15_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.username_confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
} }
function MainComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_21_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.toolbar_raneme_confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_21_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.dialogues.rename.display = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c3));
} }
function MainComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_31_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.toolbar_new_node_confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_31_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.dialogues.newNode.display = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c3));
} }
function MainComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_42_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.toolbar_new_edge_confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_42_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.dialogues.newEdge.display = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c3));
} }
function MainComponent_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_ng_template_88_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.dialogues.help.display = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
} }
const _c4 = function () { return { "margin-left": "8px" }; };
const _c5 = function () { return { "padding-right": "16px" }; };
const _c6 = function () { return { "margin-right": "16px" }; };
const _c7 = function () { return { width: "25vw" }; };
const _c8 = function () { return { width: "35vw" }; };
const _c9 = function (a0) { return { "sidenav-visible": a0 }; };
const _c10 = function () { return { "margin-right": "5px" }; };
class MainComponent {
    constructor(cdr, router, route, activatedRoute, messageService, confirmationService, store, mainService) {
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.store = store;
        this.mainService = mainService;
        this.ngDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.username = null;
        this.selectedStory = null;
        this.sidenavVisible = true;
        this.keyboardCaptureElement = null; // prevent KB shortcuts if selected element
        this.dialogues = {
            username: {
                display: true,
                input: null
            },
            rename: {
                display: false,
                input: null,
                node: null,
            },
            newNode: {
                display: false,
                input: null,
                connectedNode: null,
                physical: true,
                hypothetical: false,
            },
            newEdge: {
                display: false,
                node1: null,
                node2: null,
                physical: true,
            },
            help: {
                display: false,
            }
        };
        this.allStories = null;
        // [
        //   {
        //     key: 1,
        //     text: 'hello2hello2hello2hello2hello2hello2hello2hello2',
        //     completed: true,
        //   },
        // ];
        this.graph = {
            // node_names: ['Start', 'Is it', 'End'],
            // edges: [[0, 1], [1, 2]],
            //node_names: [],
            node_names: [{
                    name: '',
                    phsyical: true,
                    hypothetical: false,
                }],
            edges: [{
                    edge: [],
                    physical: true,
                }],
            comments: '',
            confusing: false,
        };
        this.graphSinceLastSave = {};
        this.graphStyle = {
            clicked: null,
            LR: true,
        };
        this.keyboardMem = { inp: '', time: Date.now() };
        // this.userName = 'TEMPUSER';
    }
    ngAfterViewInit() {
        window['app'] = this;
        window['mermaid_utils'] = _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"];
        _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].init();
        this.update();
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["selectSideNavStatus"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroyed$))
            .subscribe(status => {
            this.sidenavVisible = status;
            this.cdr.detectChanges();
        });
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["selectAllStories"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroyed$))
            .subscribe(v => this.allStories = v);
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["selectMainState"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroyed$))
            .subscribe(state => {
            var _a;
            switch (state.action) {
                case _ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setKeyboardFocudEle.type:
                    this.onFocusKeyboardElement(state.payload);
                    break;
                case _ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setSelectedStory.type:
                    if (!this.username || (!!state.selectedStory && state.selectedStory.key == ((_a = this.selectedStory) === null || _a === void 0 ? void 0 : _a.key))) {
                        break;
                    }
                    this.setSelectedStory(state.selectedStory);
                    break;
                default:
                    break;
            }
        });
        setTimeout(() => {
            this.check_params_username();
        }, 0);
    }
    onViewModeButton() {
        this.router.navigate(['/view'], {
            relativeTo: this.activatedRoute,
            queryParamsHandling: 'preserve'
        });
    }
    check_params_username() {
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((params) => {
            if (!!params.username) { // username found in url parameters, login
                this.dialogues.username.input = params.username;
                this.username_confirm();
            }
        });
    }
    username_confirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialogues.username.input = this.dialogues.username.input.toLowerCase();
            this.dialogues.username.input = this.dialogues.username.input.replaceAll(/[^a-z0-9]*/g, '');
            if (this.dialogues.username.input.length == 0) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Username invalid.' });
                return;
            }
            this.username = this.dialogues.username.input;
            this.dialogues.username.display = false;
            if (!this.allStories) { // FETCH STORIES
                this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].PushLoader());
                this.mainService.telemetryAdd(this.username, 'login').subscribe((resp) => { });
                let res = yield this.mainService.storyGetAll().toPromise();
                let arr = res['resp'];
                const result = [];
                Object.entries(arr).forEach(entry => {
                    let key = entry[0];
                    let story = entry[1];
                    result.push({
                        text: story,
                        key: key
                    });
                });
                this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setAllStories({ allStories: result }));
                this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].PopLoader());
            }
            // set username in url
            setTimeout(() => {
                this.router.navigate([], {
                    relativeTo: this.activatedRoute,
                    queryParams: { username: this.username },
                    queryParamsHandling: 'merge'
                });
            }, 0);
            // fetch storyid from url
            this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((params) => {
                if (!!params.storyId) {
                    const id = params.storyId;
                    const match = this.allStories.filter(s => s.key == id);
                    if (match.length > 0)
                        this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setSelectedStory({ selectedStory: match[0] }));
                }
            });
        });
    }
    toolbar_new_node() {
        let conn = null;
        if (!!this.graphStyle.clicked) {
            conn = Number(this.graphStyle.clicked) + 1;
            this.setClickedNode(null);
            this.update();
        }
        this.dialogues.newNode.input = '';
        this.dialogues.newNode.connectedNode = !!conn ? conn : '';
        this.dialogues.newNode.physical = true;
        this.dialogues.newNode.hypothetical = false;
        this.dialogues.newNode.display = true;
    }
    toolbar_new_edge() {
        let conn = null;
        if (!!this.graphStyle.clicked) {
            conn = Number(this.graphStyle.clicked) + 1;
            this.setClickedNode(null);
            this.update();
            setTimeout(() => {
                this.edgeDialogInp2.nativeElement.focus();
            }, 50);
        }
        this.dialogues.newEdge.node1 = !!conn ? conn : '';
        this.dialogues.newEdge.node2 = '';
        this.dialogues.newEdge.physical = true;
        this.dialogues.newEdge.display = true;
    }
    toolbar_rename() {
        if (!this.graphStyle.clicked) {
            return;
        }
        let conn = Number(this.graphStyle.clicked);
        this.setClickedNode(null);
        this.update();
        const current_node_name = this.graph.node_names[conn].name;
        this.dialogues.rename.input = current_node_name;
        this.dialogues.rename.display = true;
        this.dialogues.rename.node = conn;
    }
    sanitize_input(node_name) {
        const reg = '0-9 a-z A-Z' + // alphanumeric
            '\-' + // dashes (must not have space after dash)
            '\/ \& \' . ,'; // other characters
        const matchReg = new RegExp('^[' + reg + ']+$');
        const replaceReg = new RegExp('[^' + reg + ']', 'g');
        if (!node_name.match(matchReg)) {
            this.messageService.add({ severity: 'warn', summary: 'Name Sanitized', detail: 'Name contains invalid characters that were removed' });
            node_name = node_name.replaceAll(replaceReg, '');
        }
        return node_name;
    }
    toolbar_raneme_confirm() {
        this.dialogues.rename.display = false;
        this.dialogues.rename.input = this.sanitize_input(this.dialogues.rename.input);
        this.graph.node_names[this.dialogues.rename.node].name = this.dialogues.rename.input;
        this.save_and_update();
    }
    toolbar_new_node_confirm() {
        this.dialogues.newNode.display = false;
        this.dialogues.newNode.input = this.sanitize_input(this.dialogues.newNode.input);
        const newNodeId = _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].addNode(this.graph, this.dialogues.newNode.input);
        const conn = Number(this.dialogues.newNode.connectedNode + '') - 1;
        if (conn >= 0) {
            this.addEdge(conn, newNodeId);
        }
        else if (newNodeId >= 1) { // connect to last new node unless its the only node in the graph
            this.addEdge(newNodeId - 1, newNodeId);
        }
        this.save_and_update();
    }
    toolbar_new_edge_confirm(event, gotonext) {
        if (!!gotonext) { // go to next input box
            event.srcElement.parentElement.nextElementSibling.firstChild.focus();
            return;
        }
        this.dialogues.newEdge.display = false;
        const node1 = Number(this.dialogues.newEdge.node1 + '') - 1;
        const node2 = Number(this.dialogues.newEdge.node2 + '') - 1;
        const succ = this.addEdge(node1, node2);
        if (succ) {
            this.save_and_update();
        }
    }
    toolbar_delete_node() {
        if (!!this.graphStyle.clicked) {
            _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].deleteNode(this.graph, this.graphStyle.clicked);
            this.setClickedNode(null);
            this.save_and_update();
        }
    }
    toolbar_clear_node_edges() {
        if (!!this.graphStyle.clicked) {
            _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].deleteNodeEdges(this.graph, this.graphStyle.clicked);
            this.setClickedNode(null);
            this.save_and_update();
        }
    }
    toolbar_clear_graph() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to clear the current graph?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.clearGraph();
                this.save_and_update();
            },
            reject: () => { }
        });
    }
    toolbar_flip_graph_style() {
        this.graphStyle.LR = !this.graphStyle.LR;
        this.update();
    }
    toolbar_flag_confusing() {
        this.setClickedNode(null);
        this.graph.confusing = !this.graph.confusing;
        this.save_and_update();
    }
    keydown(event) {
        // EXIT IF DIALOGUE OPEN OR TYPING IN A SELECTED ELEMENT
        if (!!this.keyboardCaptureElement
            || !!this.dialogues.newNode.display
            || !!this.dialogues.newEdge.display
            || !!this.dialogues.rename.display
            || !!this.dialogues.username.display) {
            return;
        }
        const key = event.key.toLowerCase();
        const keyCode = key.charCodeAt(0);
        if (key == '?') { // HELP MENU
            this.dialogues.help.display = true;
        }
        else if (key == '[' || key == ']') { // previous/next story
            const dx = key == '[' ? -1 : 1;
            const curIndex = this.allStories.findIndex(v => { var _a; return v.key == ((_a = this.selectedStory) === null || _a === void 0 ? void 0 : _a.key); });
            let newIndex = curIndex + dx;
            newIndex = newIndex % this.allStories.length;
            newIndex = newIndex >= 0 ? newIndex : newIndex + this.allStories.length;
            const story = this.allStories[newIndex];
            if (story !== undefined) {
                this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setSelectedStory({ selectedStory: story }));
            }
        }
        // EXIT IF NO STORY SELECTED
        if (!this.selectedStory) {
            return;
        }
        if (key == 'c') { //TOGGLE CONFUSING STORY
            this.graph.confusing = !this.graph.confusing;
        }
        if (this.graph.confusing) { //DISABLE HOTKEYS IF CONFUSING STORY
            return;
        }
        if (key == 'n') { // NEW NODE
            this.toolbar_new_node();
        }
        else if (key == 'e') { // NEW EDGE
            this.toolbar_new_edge();
        }
        else if (key == 'r') { // RENAME
            if (!!this.graphStyle.clicked) {
                this.toolbar_rename();
            }
        }
        else if (keyCode >= '0'.charCodeAt(0) && keyCode <= '9'.charCodeAt(0)) { // 0-9 select char
            if (Date.now() - this.keyboardMem.time > 500) {
                this.keyboardMem.inp = '';
            }
            this.keyboardMem.inp += key;
            this.keyboardMem.time = Date.now();
            const node = Number(this.keyboardMem.inp) - 1;
            const nodeSingle = Number(key) - 1;
            if (Number.isInteger(node) && node >= 0 && node < this.graph.node_names.length) {
                this.setClickedNode(node + '');
                this.update();
            }
            else {
                this.keyboardMem.inp = '';
                if (Number.isInteger(nodeSingle) && nodeSingle >= 0 && nodeSingle < this.graph.node_names.length) {
                    this.setClickedNode(nodeSingle + '');
                    this.update();
                }
            }
        }
    }
    onEscapeKey(event) {
        this.setClickedNode(null);
        this.update();
    }
    onFocusKeyboardElement(event) {
        if (event) {
            this.keyboardCaptureElement = event.target;
        }
        else {
            this.keyboardCaptureElement = null;
        }
    }
    toggleSidenav() {
        this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setSideNavVisible({ status: !this.sidenavVisible }));
    }
    setSelectedStory(story) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].PushLoader());
            let backendSave = Promise.resolve();
            if (!!this.selectedStory) {
                backendSave = this.save_current_story_backend(this.selectedStory.key, this.graph, this.graphSinceLastSave);
                this.selectedStory = null;
                this.clearGraph();
                this.update();
            }
            if (!story) {
                this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].PopLoader());
                return;
            }
            this.mainService.telemetryAdd(this.username, 'get ' + story.key).subscribe((resp) => { });
            let res = yield this.mainService.userAnnotationGet(this.username, story.key).toPromise();
            yield backendSave;
            this.selectedStory = story;
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: { storyId: story.key },
                queryParamsHandling: 'merge',
            });
            // PARSE RESPONSE
            if (!!res['resp']) {
                var json = JSON.parse(res['resp']);
                // FIX OLD GRAPH VERSION
                if (!json.node_names[0].hasOwnProperty('name')) {
                    this.graph.node_names.pop();
                    for (let i in json.node_names) {
                        var node_names = {
                            name: json.node_names[i],
                            phsyical: true,
                            hypothetical: false,
                        };
                        this.graph.node_names.push(node_names);
                    }
                }
                else {
                    this.graph.node_names = json.node_names;
                }
                // FIX OLD GRAPH VERSION
                if (!json.edges[0].hasOwnProperty('edge')) {
                    this.graph.edges.pop();
                    for (let i in json.edges) {
                        var edges = {
                            edge: json.edges[i],
                            physical: true,
                        };
                        this.graph.edges.push(edges);
                    }
                }
                else {
                    this.graph.edges = json.edges;
                }
                this.graph.comments = json.comments;
                this.graph.confusing = json.confusing;
            }
            else {
                this.graph.node_names = [];
                this.graph.edges = [];
                this.graph.comments = '';
                this.graph.confusing = false;
            }
            this.graphSinceLastSave = JSON.parse(JSON.stringify(this.graph)); // duplicate graph
            this.update();
            this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].PopLoader());
        });
    }
    setClickedNode(nodeClicked) {
        this.graphStyle.clicked = nodeClicked;
    }
    addEdge(node1, node2) {
        node1 = Number(node1);
        node2 = Number(node2);
        const validInputs = Number.isInteger(node1) && node1 >= 0 && node1 < this.graph.node_names.length
            && Number.isInteger(node2) && node2 >= 0 && node2 < this.graph.node_names.length;
        if (!validInputs) {
            this.messageService.add({ severity: 'error', summary: 'Edge Error', detail: 'Error adding edge.' });
            return false;
        }
        // check new edge is a duplicate
        const isDup = this.graph.edges.some(pair => Number(pair[0]) == node1 && Number(pair[1]) == node2);
        if (isDup) {
            this.messageService.add({ severity: 'error', summary: 'Edge Error', detail: 'Duplicate edge not allowed.' });
            return false;
        }
        // check new edge will cause cycle
        const willCycle = _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].willBeCyclic(this.graph, node1, node2);
        if (willCycle) {
            this.messageService.add({ severity: 'error', summary: 'Edge Cycle Error', detail: 'Error adding edge. Cycle detected.' });
            return false;
        }
        var edge = {
            edge: [node1, node2],
            physical: true,
        };
        _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].addEdge(this.graph, edge);
        return true;
    }
    clearGraph() {
        this.graph.node_names = [];
        this.graph.edges = [];
        this.graph.comments = '';
        this.graph.confusing = false;
        this.setClickedNode(null);
    }
    save_current_story_backend(storyKey, graph, graphSinceLastSave) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].isEqual(graph, graphSinceLastSave)) {
                console.log('skipping save, is dup');
                return;
            }
            console.log('saving...');
            graph = JSON.stringify(graph);
            let res = yield this.mainService.userAnnotationAdd(this.username, storyKey, graph).toPromise();
            this.mainService.telemetryAdd(this.username, 'edit ' + storyKey).subscribe((resp) => { });
            return res;
        });
    }
    save_and_update() {
        this.save_current_story_backend(this.selectedStory.key, this.graph, this.graphSinceLastSave).then((resp) => {
            this.graphSinceLastSave = JSON.parse(JSON.stringify(this.graph)); // duplicate graph
            this.update();
        });
    }
    callback(nodeClicked) {
        if (this.graphStyle.clicked == nodeClicked) { // same node clicked twice
            // this.toolbar_rename()
            this.setClickedNode(null);
            this.update();
            return;
        }
        if (!this.graphStyle.clicked) { // set node as clicked
            this.setClickedNode(nodeClicked);
            this.update();
        }
        else { // two nodes clicked, add edge
            this.addEdge(this.graphStyle.clicked, nodeClicked);
            this.setClickedNode(null);
            this.save_and_update();
        }
    }
    update() {
        const element = this.mermaidDiv.nativeElement;
        const graph_str = _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].obj_to_graph_str(this.graph, this.graphStyle);
        _mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].render(element, graph_str, this.callback.bind(this));
    }
    ngOnDestroy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.saveBeforeUnload();
            this.ngDestroyed$.next();
            this.ngDestroyed$.complete();
        });
    }
    saveBeforeUnload() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('test', 1 + Number(localStorage.getItem('test')) + '');
            if (!!this.selectedStory) {
                const backendSave = this.save_current_story_backend(this.selectedStory.key, this.graph, this.graphSinceLastSave);
                this.selectedStory = null;
                yield backendSave;
            }
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_main_services__WEBPACK_IMPORTED_MODULE_9__["MainService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["main-root"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mermaidDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.edgeDialogInp2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rowElement = _t);
    } }, hostBindings: function MainComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MainComponent_keydown_HostBindingHandler($event) { return ctx.keydown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("keydown.escape", function MainComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeKey($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("beforeunload", function MainComponent_beforeunload_HostBindingHandler() { return ctx.saveBeforeUnload(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("unload", function MainComponent_unload_HostBindingHandler($event) { return ctx.saveBeforeUnload($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 118, vars: 80, consts: [["role", "banner", 1, "toolbar"], ["pTooltip", "Open/Close sidebar", 3, "icon", "ngStyle", "onClick"], ["width", "110", "alt", "Logo", "src", "assets/dag.png"], [1, "spacer"], [3, "ngStyle"], ["icon", "pi pi-question-circle", 3, "ngStyle", "click"], ["icon", "fa-solid fa-binoculars", 3, "ngStyle", "click"], ["header", "Username", 3, "visible", "modal", "closeOnEscape", "closable", "baseZIndex", "visibleChange"], [1, "p-float-label"], ["id", "float-input", "type", "text", "pInputText", "", "autofocus", "", 3, "ngModel", "ngModelChange", "keydown.enter"], ["for", "float-input"], ["pTemplate", "footer"], ["header", "Node Name", 3, "visible", "baseZIndex", "visibleChange"], ["id", "float-input", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange", "keydown.enter"], ["header", "New Edge", 3, "visible", "baseZIndex", "visibleChange"], ["edgeDialogInp2", ""], ["header", "Help Menu", 3, "visible", "modal", "baseZIndex", "visibleChange"], ["header", "Keyboard Shortcuts", 1, "helpDialogue"], [1, "boxedText"], [1, "helpText"], ["role", "main", 1, "content", 3, "ngClass"], ["styleClass", "graphToolbar"], [1, "p-toolbar-group-left"], ["icon", "pi pi-plus", "label", "N\u0332ode", 3, "ngStyle", "disabled", "onClick"], ["icon", "pi pi-plus", "label", "E\u0332dge", 3, "ngStyle", "disabled", "onClick"], ["icon", "pi pi-pencil", "styleClass", "p-button-warning ui-button", "label", "R\u0332ename", 3, "ngStyle", "disabled", "onClick"], ["icon", "pi pi-times", "styleClass", "p-button-help ui-button", "label", "Node", 3, "ngStyle", "disabled", "onClick"], ["icon", "pi pi-times", "styleClass", "p-button-help ui-button", "label", "Edge", 3, "ngStyle", "disabled", "onClick"], ["styleClass", "p-button-help ui-button", 3, "icon", "ngStyle", "disabled", "onClick"], [1, "p-toolbar-group-right"], ["icon", "pi pi-question", "label", "Confusing", 3, "ngStyle", "disabled", "onClick"], ["icon", "pi pi-times", "styleClass", "p-button-danger ui-button", "label", "Clear Graph", 3, "ngStyle", "disabled", "onClick"], [1, "scrollableContent"], [1, "storyarea"], ["pInputTextarea", "", "autoResize", "autoResize", "disabled", "true", 3, "rows", "ngModel"], [1, "commentarea"], ["pInputTextarea", "", "id", "float-input", "autoResize", "autoResize", 3, "rows", "ngModel", "disabled", "ngModelChange", "focus", "blur"], ["mermaid", ""], ["id", "clouds", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], ["icon", "pi pi-check", "label", "Login", 3, "ngStyle", "click"], ["icon", "pi pi-check", "label", "Confirm", 3, "ngStyle", "click"], ["icon", "pi pi-times", "label", "Cancel", "styleClass", "p-button-text ui-button", 3, "ngStyle", "click"], ["icon", "pi pi-check", "label", "Close", 3, "ngStyle", "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_1_listener() { return ctx.toggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Lux");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_p_button_click_8_listener() { return ctx.dialogues.help.display = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_p_button_click_9_listener() { return ctx.onViewModeButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-dialog", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MainComponent_Template_p_dialog_visibleChange_10_listener($event) { return ctx.dialogues.username.display = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_12_listener($event) { return ctx.dialogues.username.input = $event; })("keydown.enter", function MainComponent_Template_input_keydown_enter_12_listener() { return ctx.username_confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MainComponent_ng_template_15_Template, 1, 2, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p-dialog", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MainComponent_Template_p_dialog_visibleChange_16_listener($event) { return ctx.dialogues.rename.display = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_18_listener($event) { return ctx.dialogues.rename.input = $event; })("keydown.enter", function MainComponent_Template_input_keydown_enter_18_listener() { return ctx.toolbar_raneme_confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "New Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MainComponent_ng_template_21_Template, 2, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p-dialog", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MainComponent_Template_p_dialog_visibleChange_22_listener($event) { return ctx.dialogues.newNode.display = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_24_listener($event) { return ctx.dialogues.newNode.input = $event; })("keydown.enter", function MainComponent_Template_input_keydown_enter_24_listener() { return ctx.toolbar_new_node_confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "New Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_28_listener($event) { return ctx.dialogues.newNode.connectedNode = $event; })("keydown.enter", function MainComponent_Template_input_keydown_enter_28_listener() { return ctx.toolbar_new_node_confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Connected Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MainComponent_ng_template_31_Template, 2, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p-dialog", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MainComponent_Template_p_dialog_visibleChange_32_listener($event) { return ctx.dialogues.newEdge.display = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_34_listener($event) { return ctx.dialogues.newEdge.node1 = $event; })("keydown.enter", function MainComponent_Template_input_keydown_enter_34_listener($event) { return ctx.toolbar_new_edge_confirm($event, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Node 1 ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 13, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_38_listener($event) { return ctx.dialogues.newEdge.node2 = $event; })("keydown.enter", function MainComponent_Template_input_keydown_enter_38_listener($event) { return ctx.toolbar_new_edge_confirm($event, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Node 2 ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, MainComponent_ng_template_42_Template, 2, 4, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p-dialog", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function MainComponent_Template_p_dialog_visibleChange_43_listener($event) { return ctx.dialogues.help.display = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p-panel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Show Help Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Toggle Confusing Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "New node");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Rename node (while node is selected)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "New edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Previous story");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Next story");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "0-9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Highlight Nodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, MainComponent_ng_template_88_Template, 1, 2, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p-toolbar", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_94_listener() { return ctx.toolbar_new_node(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_95_listener() { return ctx.toolbar_new_edge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_96_listener() { return ctx.toolbar_rename(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_97_listener() { return ctx.toolbar_delete_node(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_98_listener() { return ctx.toolbar_clear_node_edges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_99_listener() { return ctx.toolbar_flip_graph_style(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_101_listener() { return ctx.toolbar_flag_confusing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "p-button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function MainComponent_Template_p_button_onClick_102_listener() { return ctx.toolbar_clear_graph(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_textarea_ngModelChange_108_listener($event) { return ctx.graph.comments = $event; })("focus", function MainComponent_Template_textarea_focus_108_listener($event) { return ctx.onFocusKeyboardElement($event); })("blur", function MainComponent_Template_textarea_blur_108_listener() { return ctx.onFocusKeyboardElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "div", null, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Gray Clouds Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", !!ctx.sidenavVisible ? "pi pi-arrow-left" : "pi pi-arrow-right")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](61, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](62, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Username: ", ctx.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](63, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](64, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](65, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.dialogues.username.display)("modal", true)("closeOnEscape", false)("closable", false)("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dialogues.username.input);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](66, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.dialogues.rename.display)("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dialogues.rename.input);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](67, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.dialogues.newNode.display)("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dialogues.newNode.input);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dialogues.newNode.connectedNode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](68, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.dialogues.newEdge.display)("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dialogues.newEdge.node1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dialogues.newEdge.node2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](69, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.dialogues.help.display)("modal", true)("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](70, _c9, ctx.sidenavVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](72, _c10))("disabled", !ctx.selectedStory || (ctx.graph == null ? null : ctx.graph.confusing));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](73, _c10))("disabled", !ctx.selectedStory || (ctx.graph == null ? null : ctx.graph.confusing));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](74, _c10))("disabled", !ctx.graphStyle.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](75, _c10))("disabled", !ctx.graphStyle.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](76, _c10))("disabled", !ctx.graphStyle.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", !!(ctx.graphStyle == null ? null : ctx.graphStyle.LR) ? "pi pi-arrows-h" : "pi pi-arrows-v")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](77, _c10))("disabled", !ctx.selectedStory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](78, _c3))("disabled", !ctx.selectedStory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](79, _c3))("disabled", !ctx.selectedStory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", 5)("ngModel", !!ctx.selectedStory ? ctx.selectedStory == null ? null : ctx.selectedStory.text : "No story selected.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", 3)("ngModel", ctx.graph.comments)("disabled", !ctx.selectedStory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](!!(ctx.graph == null ? null : ctx.graph.confusing) ? "graphObscured noclick" : "graph");
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_10__["Button"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["Dialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__["InputText"], _utils_autofocus_directive__WEBPACK_IMPORTED_MODULE_16__["AutofocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], primeng_panel__WEBPACK_IMPORTED_MODULE_17__["Panel"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_19__["Toolbar"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_20__["InputTextarea"]], styles: ["@charset \"UTF-8\";\n.boxedText[_ngcontent-%COMP%] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 4px;\n  padding-right: 4px;\n  border-radius: 3px;\n  border-bottom-color: #bbb;\n  font-family: monospace;\n  font-size: 11px;\n  background-color: #1d1d1f;\n  border: solid 1px black;\n  box-shadow: none;\n  color: white;\n}\n.helpDialogue[_ngcontent-%COMP%]   .helpText[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n}\n[_nghost-%COMP%]     .graphToolbar {\n  padding: 10px;\n  height: 60px;\n}\n.scrollableContent[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: calc(100vh - 120px);\n}\n.storyarea[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  opacity: 1;\n  width: 100%;\n}\n.commentarea[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  opacity: 1;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 60px auto 32px;\n  flex-direction: column;\n  align-items: stretch;\n  transition: margin-left 0.5s;\n  margin-left: 0px;\n}\n.content.sidenav-visible[_ngcontent-%COMP%] {\n  margin-left: 250px;\n}\n.graph[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n.graphObscured[_ngcontent-%COMP%] {\n  border: 10px solid #f00;\n  opacity: 0.5;\n  min-height: 220px;\n}\n.noclick[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBT0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxKO0FBU0k7RUFDSSxnQkFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtBQU5SO0FBMkJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUF4Qko7QUEyQkE7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7QUF4Qko7QUE0Qkk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQXpCUjtBQThCSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBM0JSO0FBK0JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsc0JBQUE7RUFDQSxvQkFBQTtFQUVBLDRCQUFBO0VBRUEsZ0JBQUE7QUEvQko7QUFnQ0k7RUFDSSxrQkFBQTtBQTlCUjtBQWtDQTtFQUNJLGlCQUFBO0FBL0JKO0FBa0NBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUEvQko7QUFrQ0E7RUFDSSxvQkFBQTtBQS9CSjtBQTZEQTtFQUNJLDBKQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUExREo7QUE2REE7RUFDQSxPQUFBO0FBMURBO0FBNkRBO0VBQ0ksZUFBQTtBQTFESjtBQTZEQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBMURBO0FBNkRBO0VBQ0EsY0FBQTtBQTFEQTtBQTZEQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBMURBO0FBNkRBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUExREE7QUE2REE7O0VBRUEsWUFBQTtBQTFEQTtBQTZEQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMURBO0FBNkRBO0VBQ0EsaUJBQUE7QUExREE7QUE2REE7RUFDQSxVQUFBO0FBMURBO0FBNkRBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBMURBO0FBNkRBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQTFEQTtBQTZEQTtFQUNBLGVBQUE7QUExREE7QUE2REE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTFEQTtBQTZEQTtFQUNBLGVBQUE7QUExREE7QUE2REE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0FBMURBO0FBNkRBO0VBQ0EsYUFBQTtBQTFEQTtBQTZEQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUExREE7QUE2REE7RUFDQSxpQkFBQTtBQTFEQTtBQTZEQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBMURBO0FBNkRBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTFEQTtBQTZEQTs7O0VBR0EsY0FBQTtFQUNBLHFCQUFBO0FBMURBO0FBNkRBO0VBQ0EsY0FBQTtBQTFEQTtBQTZEQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBMURBO0FBNkRBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBMURBO0FBNkRBO0VBQ0Esd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBMURBO0FBNkRBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7RUFDQSx1QkFBQTtBQTFEQTtBQTZEQTtFQUNBLCtCQUFBO0VBQ0EsMkNBQUE7QUExREE7QUE2REE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUExREE7QUE2REE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUExREE7QUE2REE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBJQUFBO0FBMURBO0FBNkRBO0VBQ0EsZ0VBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBMURBO0FBNkRBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTFEQTtBQTZEQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBMURBO0FBOERBLHNCQUFBO0FBQ0E7RUFFQTs7SUFFSSxXQUFBO0VBNURGOztFQStERjtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBNURGOztFQStERjtJQUNJLGlCQUFBO0VBNURGOztFQStERjtJQUNJLFlBQUE7SUFDQSx3QkFBQTtFQTVERjtBQUNGO0FBK0RBO0VBQ0E7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7RUE3REY7QUFDRiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveGVkVGV4dCB7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNiYmI7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG5cclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsMjQzLDI0Myk7XHJcbiAgICAvLyBjb2xvcjogcmdiKDMzLDMzLDMzKTtcclxuICAgIC8vIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjYmJiO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWY7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWxwRGlhbG9ndWUge1xyXG4gICAgLmhlbHBUZXh0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gLmJveGVkVGV4dCB7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbi8vICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjYmJiO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWY7XHJcbi8vICAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuLy8gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuZ3JhcGhUb29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlQ29udGVudCB7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTIwcHgpOyAvLyA2MHB4IGZvciBoZWFkZXIgYW5kIDcwcHggZm9yIGdyYXBodG9vbGJhclxyXG59XHJcblxyXG4uc3RvcnlhcmVhIHtcclxuICAgIC5wLWlucHV0dGV4dCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbW1lbnRhcmVhIHtcclxuICAgIC5wLWlucHV0dGV4dCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvIDMycHg7XHJcbiAgICAvLyBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgLjVzO1xyXG4gICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAmLnNpZGVuYXYtdmlzaWJsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ3JhcGgge1xyXG4gICAgbWluLWhlaWdodDogMjIwcHg7XHJcbn1cclxuXHJcbi5ncmFwaE9ic2N1cmVkIHtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZjAwO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgbWluLWhlaWdodDogMjIwcHg7XHJcbn1cclxuXHJcbi5ub2NsaWNrIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG46aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG5mbGV4OiAxO1xyXG59XHJcblxyXG4udG9vbGJhciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxucmlnaHQ6IDA7XHJcbmhlaWdodDogNjBweDtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuY29sb3I6IHdoaXRlO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG5tYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbmhlaWdodDogNDBweDtcclxubWFyZ2luOiAwIDhweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3lvdXR1YmUtbG9nbyB7XHJcbmhlaWdodDogNDBweDtcclxubWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIsXHJcbi50b29sYmFyICN5b3V0dWJlLWxvZ286aG92ZXIge1xyXG5vcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbmhlaWdodDogMjRweDtcclxud2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxubWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC13cmFwOiB3cmFwO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxubWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbmhlaWdodDogNDBweDtcclxud2lkdGg6IDIwMHB4O1xyXG5tYXJnaW46IDAgOHB4IDE2cHg7XHJcbnBhZGRpbmc6IDE2cHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxubGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxubWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuaGVpZ2h0OiAxNnB4O1xyXG53aWR0aDogMTY4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG5ib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbmZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG5jb2xvcjogd2hpdGU7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmJvcmRlcjogbm9uZTtcclxud2lkdGg6IGF1dG87XHJcbm1pbi13aWR0aDogMzAlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbm1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0IHtcclxud2lkdGg6IDgwcHg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogLTEwcHg7XHJcbnRvcDogLTI0cHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQtc21va2Uge1xyXG5oZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDEwcHg7XHJcbnJpZ2h0OiAxODBweDtcclxuei1pbmRleDogLTEwO1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIge1xyXG5jb2xvcjogIzE5NzZkMjtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IDgwJTtcclxubWF4LXdpZHRoOiA2MDBweDtcclxuYm9yZGVyLXJhZGl1czogNnB4O1xyXG5wYWRkaW5nLXRvcDogNDVweDtcclxubWFyZ2luLXRvcDogOHB4O1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxuaGVpZ2h0OiA0cHg7XHJcbmJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuY29sb3I6ICNjMmMzYzQ7XHJcbndpZHRoOiAxMDAlO1xyXG5mb250LXNpemU6IDJyZW07XHJcbmxpbmUtaGVpZ2h0OiAwO1xyXG5wYWRkaW5nOiAxNHB4IDA7XHJcbnRleHQtaW5kZW50OiA0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBwcmUge1xyXG5mb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuY29sb3I6IHdoaXRlO1xyXG5wYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbmsge1xyXG5oZWlnaHQ6IDQwcHg7XHJcbndpZHRoOiA0MHB4O1xyXG5ib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5tYXJnaW46IDhweDtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxudHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluazpob3ZlciB7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbmJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbm1hcmdpbi10b3A6IDhweDtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxubGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuY29sb3I6ICMyNDI5MmU7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxucGFkZGluZzogM3B4IDEwcHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG5ib3JkZXItcmFkaXVzOiAzcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG5tYXJnaW4tbGVmdDogNHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcclxuYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuaGVpZ2h0OiAxNnB4O1xyXG53aWR0aDogMTZweDtcclxubWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbmJvdHRvbTogLTE2MHB4O1xyXG5sZWZ0OiAtMjMwcHg7XHJcbnotaW5kZXg6IC0xMDtcclxud2lkdGg6IDE5MjBweDtcclxufVxyXG5cclxuXHJcbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4uY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuLnRlcm1pbmFsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG4uY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIHJpZ2h0OiAxMjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Jjks":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrx/main.reducer */ "x+dD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");







function SidenavComponent_ng_template_3_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.selectedStoryIndex + 1, "/", ctx_r2.allStories.length, "");
} }
function SidenavComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Story");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidenavComponent_ng_template_3_th_3_Template, 2, 2, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selectedStoryIndex >= 0);
} }
const _c0 = function (a0, a1) { return { "selected": a0, "completed": a1 }; };
function SidenavComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_ng_template_4_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const story_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.sidebarClickStory(story_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r3 = ctx.$implicit;
    const rowIndex_r4 = ctx.rowIndex;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, story_r3.key == (ctx_r1.selectedStory == null ? null : ctx_r1.selectedStory.key), !!story_r3.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", rowIndex_r4 + 1, ":", story_r3.text, " ");
} }
const _c1 = function (a0) { return { "sidenav-visible": a0 }; };
class SidenavComponent {
    constructor(cdr, store) {
        this.cdr = cdr;
        this.store = store;
        this.allStories = null;
        this.filteredStories = null;
        this.selectedStory = null;
        this.selectedStoryIndex = -1;
        this.sidenavVisible = null;
    }
    ngOnInit() {
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_0__["selectAllStories"]).subscribe(v => {
            this.allStories = v;
            this.filteredStories = v;
        });
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_0__["selectSideNavStatus"]).subscribe(status => {
            this.sidenavVisible = status;
            this.cdr.detectChanges();
        });
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_0__["selectSelectedStory"]).subscribe(v => {
            this.selectedStory = v;
            if (!this.allStories)
                return;
            this.selectedStoryIndex = this.allStories.findIndex(v2 => (v === null || v === void 0 ? void 0 : v.key) == v2.key);
        });
    }
    onFocusKeyboardElement(event) {
        this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_0__["mainActions"].setKeyboardFocudEle({ payload: event }));
    }
    sidebarClickStory(story) {
        this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_0__["mainActions"].setSelectedStory({ selectedStory: story }));
    }
    sidenavSearchInput(searchText, enterKey) {
        if (searchText.length == 0) {
            this.filteredStories = this.allStories;
        }
        else if (enterKey) {
            searchText = searchText.toLowerCase();
            this.filteredStories = this.allStories.filter((story) => {
                return story.text.toLowerCase().indexOf(searchText) > -1;
            });
        }
    }
    paginate(event) {
        console.log(event);
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 5, vars: 5, consts: [["id", "mySidenav", 1, "sidenav", 3, "ngClass"], ["type", "text", "pInputText", "", 3, "input", "keyup.enter", "focus", "blur"], ["scrollHeight", "calc(100vh - 155px)", 3, "value", "scrollable", "onPageChange"], ["pTemplate", "header"], ["pTemplate", "body"], [2, "max-width", "50px"], ["style", "text-align: right", 4, "ngIf"], [2, "text-align", "right"], [3, "click"], ["storyRow", ""], [1, "storyrow", 3, "ngClass"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SidenavComponent_Template_input_input_1_listener($event) { return ctx.sidenavSearchInput($event.target.value, false); })("keyup.enter", function SidenavComponent_Template_input_keyup_enter_1_listener($event) { return ctx.sidenavSearchInput($event.target.value, true); })("focus", function SidenavComponent_Template_input_focus_1_listener($event) { return ctx.onFocusKeyboardElement($event); })("blur", function SidenavComponent_Template_input_blur_1_listener() { return ctx.onFocusKeyboardElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onPageChange", function SidenavComponent_Template_p_table_onPageChange_2_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidenavComponent_ng_template_3_Template, 4, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidenavComponent_ng_template_4_Template, 4, 6, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx.sidenavVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.filteredStories)("scrollable", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  position: fixed;\n  \n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  \n  transition: 0.5s;\n  \n  width: 0px;\n}\n.sidenav.sidenav-visible[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.sidenav[_ngcontent-%COMP%]     .p-toolbar {\n  padding: 0rem;\n  justify-content: flex-start;\n}\n.storyrow[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.storyrow.selected[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n.storyrow.completed[_ngcontent-%COMP%] {\n  background-color: #0c4e3d;\n}\n.storyrow.selected.completed[_ngcontent-%COMP%] {\n  background-color: #12916f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkJBQUE7QUFDQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUFpQixrQkFBQTtFQUdqQixPQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUFvQiw4QkFBQTtFQUVwQixnQkFBQTtFQUFrQix5REFBQTtFQUVsQixVQUFBO0FBREo7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FBRFI7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSUk7RUFDSSx5QkFBQTtBQUZSO0FBSUk7RUFDSSx5QkFBQTtBQUZSO0FBSUk7RUFDSSx5QkFBQTtBQUZSIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogVGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51ICovXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpOyAvLyA2MHB4IGZvciBoZWFkZXIgYW5kIDkgZm9yID8/PyB0byBtYWtlIGl0IGxvb2sgcmlnaHRcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgLy8gei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cclxuICAgIC8vIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDYwcHg7IC8qIFBsYWNlIGNvbnRlbnQgNjBweCBmcm9tIHRoZSB0b3AgKi9cclxuICAgIHRyYW5zaXRpb246IDAuNXM7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cclxuXHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgJi5zaWRlbmF2LXZpc2libGUge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLnAtdG9vbGJhciB7XHJcbiAgICAgICAgcGFkZGluZzogMHJlbTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdG9yeXJvdyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICB9XHJcbiAgICAmLmNvbXBsZXRlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGUzZDtcclxuICAgIH1cclxuICAgICYuc2VsZWN0ZWQuY29tcGxldGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI5MTZmO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx/main.reducer */ "x+dD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/blockui */ "0LTx");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AppComponent {
    constructor(cdr, store) {
        this.cdr = cdr;
        this.store = store;
        this.loader = false;
    }
    ngOnInit() {
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_0__["selectLoaderTasks"]).subscribe(loadingTasks => {
            this.loader = loadingTasks > 0;
            // console.log(this.loader)
            this.cdr.detectChanges();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [[3, "blocked"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-blockUI", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-progressSpinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blocked", ctx.loader);
    } }, directives: [primeng_blockui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_4__["ProgressSpinner"], primeng_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "WJr1":
/*!******************************************************!*\
  !*** ./src/app/viewer-component/viewer.component.ts ***!
  \******************************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _main_component_mermaid_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-component/mermaid_utils */ "qPkg");
/* harmony import */ var _ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngrx/main.reducer */ "x+dD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _main_component_main_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../main-component/main.services */ "1Jqw");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "Jjks");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tabview */ "dPl2");



















const _c0 = ["mermaid"];
const _c1 = ["storyRow"];
function ViewerComponent_p_tabView_15_p_tabPanel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-tabPanel", 24);
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", key_r3)("headerStyleClass", key_r3 == ctx_r2.username ? "userStory" : "not");
} }
function ViewerComponent_p_tabView_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-tabView", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function ViewerComponent_p_tabView_15_Template_p_tabView_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.updateTabView($event.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewerComponent_p_tabView_15_p_tabPanel_1_Template, 1, 2, "p-tabPanel", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeIndex", ctx_r0.tabViewIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.allGraphs.keys);
} }
const _c2 = function () { return { "margin-left": "8px" }; };
const _c3 = function () { return { "padding-right": "16px" }; };
const _c4 = function () { return { "margin-right": "16px" }; };
const _c5 = function (a0) { return { "sidenav-visible": a0 }; };
const _c6 = function () { return { "margin-right": "5px" }; };
class ViewerComponent {
    constructor(cdr, router, route, activatedRoute, messageService, confirmationService, store, mainService) {
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.store = store;
        this.mainService = mainService;
        this.ngDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.username = null;
        this.selectedStory = null;
        this.sidenavVisible = true;
        this.keyboardCaptureElement = null; // prevent KB shortcuts if selected element
        this.allStories = null;
        this.allGraphs = { data: [], keys: [] };
        this.tabViewIndex = 0;
        this.graph = {
            node_names: [],
            edges: [],
            comments: '',
        };
        this.graphStyle = {
            clicked: null,
            LR: true,
        };
        // this.userName = 'TEMPUSER';
    }
    ngOnDestroy() {
        this.ngDestroyed$.next();
        this.ngDestroyed$.complete();
    }
    ngAfterViewInit() {
        window['app'] = this;
        window['mermaid_utils'] = _main_component_mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"];
        _main_component_mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].init();
        this.update();
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["selectSideNavStatus"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroyed$))
            .subscribe(status => {
            this.sidenavVisible = status;
            this.cdr.detectChanges();
        });
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["selectAllStories"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroyed$))
            .subscribe(v => this.allStories = v);
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["selectSelectedStory"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroyed$))
            .subscribe(v => {
            var _a;
            if (!v || v.key == ((_a = this.selectedStory) === null || _a === void 0 ? void 0 : _a.key)) {
                return;
            }
            this.setSelectedStory(v);
        });
        this.store.select(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["selectMainState"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroyed$))
            .subscribe(state => {
            switch (state.action) {
                case _ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setKeyboardFocudEle.type:
                    this.onFocusKeyboardElement(state.payload);
                    break;
                default:
                    break;
            }
        });
        // this.store.select(selectAllStories).subscribe(v => this.allStories = v)
        this.fetchStories().then(() => {
            this.checkParamsUsername();
        });
    }
    onEditModeButton() {
        this.router.navigate(['/home'], {
            relativeTo: this.activatedRoute,
            queryParamsHandling: 'preserve'
        });
    }
    fetchStories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!!this.allStories && this.allStories.length > 0) {
                return;
            }
            this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].PushLoader());
            let res = yield this.mainService.storyGetAll().toPromise();
            let arr = res['resp'];
            const result = [];
            Object.entries(arr).forEach(entry => {
                let key = entry[0];
                let story = entry[1];
                result.push({
                    text: story,
                    key: key
                });
            });
            this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setAllStories({ allStories: result }));
            this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].PopLoader());
        });
    }
    checkParamsUsername() {
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((params) => {
            var _a;
            if (!!params.storyId && params.storyId != ((_a = this.selectedStory) === null || _a === void 0 ? void 0 : _a.key)) {
                const id = params.storyId;
                const match = this.allStories.filter(s => s.key == id);
                if (match.length > 0)
                    this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setSelectedStory({ selectedStory: match[0] }));
            }
            if (!!params.username) { // username found in url parameters, login
                this.username = params.username;
            }
        });
    }
    toolbar_flip_graph_style() {
        this.graphStyle.LR = !this.graphStyle.LR;
        this.update();
    }
    keydown(event) {
        // EXIT IF DIALOGUE OPEN OR TYPING IN A SELECTED ELEMENT
        if (!!this.keyboardCaptureElement) {
            return;
        }
        const key = event.key.toLowerCase();
        if (key == '[' || key == ']') { // previous/next story
            const dx = key == '[' ? -1 : 1;
            const curIndex = this.allStories.findIndex(v => { var _a; return v.key == ((_a = this.selectedStory) === null || _a === void 0 ? void 0 : _a.key); });
            let newIndex = curIndex + dx;
            newIndex = newIndex % this.allStories.length;
            newIndex = newIndex >= 0 ? newIndex : newIndex + this.allStories.length;
            const story = this.allStories[newIndex];
            if (story !== undefined) {
                this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setSelectedStory({ selectedStory: story }));
            }
        }
    }
    onFocusKeyboardElement(event) {
        if (event) {
            this.keyboardCaptureElement = event.target;
        }
        else {
            this.keyboardCaptureElement = null;
        }
    }
    toggleSidenav() {
        this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].setSideNavVisible({ status: !this.sidenavVisible }));
    }
    setSelectedStory(story) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].PushLoader());
            let res = yield this.mainService.userAnnotationGetAllUsers(story.key).toPromise();
            this.allGraphs = res;
            let keys = res.keys;
            let data = res.data.map(v => JSON.parse(v));
            const indicesToRemove = data.map((v, i) => _main_component_mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].isEmpty(v) ? i : -1); // remove empty stories
            const suffixLen = (':' + story.key).length; // remove suffix :#id
            keys = keys.filter((v, i) => !indicesToRemove.includes(i)).map(v => v.substring(0, v.length - suffixLen));
            data = data.filter((v, i) => !indicesToRemove.includes(i));
            // sort in pairs
            const pair = keys.map((_, i) => ({ key: keys[i], data: data[i] }));
            pair.sort((a, b) => (a.key < b.key) ? -1 : ((a.key == b.key) ? 0 : 1));
            // final result
            this.allGraphs.keys = pair.map((_, i) => pair[i].key);
            this.allGraphs.data = pair.map((_, i) => pair[i].data);
            this.selectedStory = story;
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: { storyId: story.key },
                queryParamsHandling: 'merge',
            });
            const curUserKey = this.allGraphs.keys.findIndex((v) => this.username == v);
            this.tabViewIndex = curUserKey >= 0 ? curUserKey : 0;
            this.updateTabView(this.tabViewIndex);
            this.store.dispatch(_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_4__["mainActions"].PopLoader());
        });
    }
    updateTabView(newIndex) {
        if (newIndex !== undefined) {
            const some_other_index_to_fix_bug = newIndex !== 0 ? 0 : 1;
            this.tabViewIndex = some_other_index_to_fix_bug;
            this.cdr.detectChanges();
            this.tabViewIndex = newIndex;
            this.cdr.detectChanges();
        }
        this.graph = !!this.allGraphs.data[this.tabViewIndex] ? this.allGraphs.data[this.tabViewIndex] : {};
        this.graph.node_names = !!this.graph.node_names ? this.graph.node_names : [];
        this.graph.edges = !!this.graph.edges ? this.graph.edges : [];
        this.graph.comments = !!this.graph.comments ? this.graph.comments : '';
        setTimeout(() => {
            this.update();
        }, 0);
    }
    callback(nodeClicked) {
    }
    update() {
        const element = this.mermaidDiv.nativeElement;
        const graph_str = _main_component_mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].obj_to_graph_str(this.graph, this.graphStyle);
        // console.log(graph_str)
        _main_component_mermaid_utils__WEBPACK_IMPORTED_MODULE_3__["mermaid_utils"].render(element, graph_str, this.callback.bind(this));
    }
}
ViewerComponent.ɵfac = function ViewerComponent_Factory(t) { return new (t || ViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_main_component_main_services__WEBPACK_IMPORTED_MODULE_9__["MainService"])); };
ViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewerComponent, selectors: [["app-viewer"]], viewQuery: function ViewerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mermaidDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rowElement = _t);
    } }, hostBindings: function ViewerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ViewerComponent_keydown_HostBindingHandler($event) { return ctx.keydown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 31, vars: 19, consts: [["role", "banner", 1, "toolbar"], ["pTooltip", "Open/Close sidebar", 3, "icon", "ngStyle", "onClick"], ["width", "110", "alt", "Logo", "src", "assets/dag.png"], [1, "spacer"], [3, "ngStyle"], ["icon", "fa-solid fa-pencil", 3, "ngStyle", "click"], ["role", "main", 1, "content", 3, "ngClass"], ["styleClass", "graphToolbar"], [1, "p-toolbar-group-left"], ["styleClass", "p-button-help ui-button", 3, "icon", "ngStyle", "disabled", "onClick"], ["styleClass", "graphTabView", 3, "activeIndex", "onChange", 4, "ngIf"], [1, "scrollableContent"], [1, "storyarea"], ["pInputTextarea", "", "autoResize", "autoResize", "disabled", "true", 3, "rows", "ngModel"], [1, "commentarea"], [1, "p-float-label"], ["pInputTextarea", "", "id", "float-input", "autoResize", "autoResize", "disabled", "true", 3, "rows", "ngModel"], ["for", "float-input"], [1, "graph"], ["mermaid", ""], ["id", "clouds", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], ["styleClass", "graphTabView", 3, "activeIndex", "onChange"], [3, "header", "headerStyleClass", 4, "ngFor", "ngForOf"], [3, "header", "headerStyleClass"]], template: function ViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function ViewerComponent_Template_p_button_onClick_1_listener() { return ctx.toggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Lux");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " View Mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewerComponent_Template_p_button_click_8_listener() { return ctx.onEditModeButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function ViewerComponent_Template_p_button_onClick_14_listener() { return ctx.toolbar_flip_graph_style(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ViewerComponent_p_tabView_15_Template, 2, 2, "p-tabView", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Gray Clouds Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", !!ctx.sidenavVisible ? "pi pi-arrow-left" : "pi pi-arrow-right")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c5, ctx.sidenavVisible));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", !!(ctx.graphStyle == null ? null : ctx.graphStyle.LR) ? "pi pi-arrows-h" : "pi pi-arrows-v")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c6))("disabled", !ctx.selectedStory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx.allGraphs && !!ctx.allGraphs.keys);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", 5)("ngModel", !!ctx.selectedStory ? ctx.selectedStory == null ? null : ctx.selectedStory.text : "No story selected.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", 3)("ngModel", ctx.graph.comments);
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_10__["Button"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_13__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__["Toolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextarea"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], primeng_tabview__WEBPACK_IMPORTED_MODULE_17__["TabView"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], primeng_tabview__WEBPACK_IMPORTED_MODULE_17__["TabPanel"]], styles: ["@charset \"UTF-8\";\n.boxedText[_ngcontent-%COMP%] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n  padding-left: 4px;\n  padding-right: 4px;\n  border-radius: 3px;\n  border-bottom-color: #bbb;\n  font-family: monospace;\n  font-size: 11px;\n  background-color: #1d1d1f;\n  border: solid 1px black;\n  box-shadow: none;\n  color: white;\n}\n.helpDialogue[_ngcontent-%COMP%]   .helpText[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n}\n[_nghost-%COMP%]     .graphToolbar {\n  padding: 10px;\n  height: 60px;\n}\n[_nghost-%COMP%]     .graphTabView {\n  background: #1e1e1e;\n  height: 50px;\n}\n[_nghost-%COMP%]     .userStory.userStory.userStory > a {\n  background-color: #142e33;\n}\n.scrollableContent[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: calc(100vh - 170px);\n}\n.storyarea[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  opacity: 1;\n  width: 100%;\n}\n.commentarea[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  opacity: 1;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 60px auto 32px;\n  flex-direction: column;\n  align-items: stretch;\n  transition: margin-left 0.5s;\n  margin-left: 0px;\n}\n.content.sidenav-visible[_ngcontent-%COMP%] {\n  margin-left: 250px;\n}\n.graph[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFPQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEo7QUFTSTtFQUNJLGdCQUFBO0VBQ0EsMkRBQUE7RUFDQSxlQUFBO0FBTlI7QUEyQkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQXhCSjtBQTJCQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQXhCSjtBQTBCQTtFQUNJLHlCQUFBO0FBdkJKO0FBMEJBO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0FBdkJKO0FBMkJJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUF4QlI7QUE2Qkk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQTFCUjtBQThCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLHNCQUFBO0VBQ0Esb0JBQUE7RUFFQSw0QkFBQTtFQUVBLGdCQUFBO0FBOUJKO0FBK0JJO0VBQ0ksa0JBQUE7QUE3QlI7QUFpQ0E7RUFDSSxpQkFBQTtBQTlCSjtBQTREQTtFQUNJLDBKQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUF6REo7QUE0REE7RUFDQSxPQUFBO0FBekRBO0FBNERBO0VBQ0ksZUFBQTtBQXpESjtBQTREQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBekRBO0FBNERBO0VBQ0EsY0FBQTtBQXpEQTtBQTREQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBekRBO0FBNERBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUF6REE7QUE0REE7O0VBRUEsWUFBQTtBQXpEQTtBQTREQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBekRBO0FBNERBO0VBQ0EsaUJBQUE7QUF6REE7QUE0REE7RUFDQSxVQUFBO0FBekRBO0FBNERBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBekRBO0FBNERBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQXpEQTtBQTREQTtFQUNBLGVBQUE7QUF6REE7QUE0REE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXpEQTtBQTREQTtFQUNBLGVBQUE7QUF6REE7QUE0REE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0FBekRBO0FBNERBO0VBQ0EsYUFBQTtBQXpEQTtBQTREQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUF6REE7QUE0REE7RUFDQSxpQkFBQTtBQXpEQTtBQTREQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBekRBO0FBNERBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXpEQTtBQTREQTs7O0VBR0EsY0FBQTtFQUNBLHFCQUFBO0FBekRBO0FBNERBO0VBQ0EsY0FBQTtBQXpEQTtBQTREQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBekRBO0FBNERBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBekRBO0FBNERBO0VBQ0Esd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBekRBO0FBNERBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7RUFDQSx1QkFBQTtBQXpEQTtBQTREQTtFQUNBLCtCQUFBO0VBQ0EsMkNBQUE7QUF6REE7QUE0REE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUF6REE7QUE0REE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF6REE7QUE0REE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBJQUFBO0FBekRBO0FBNERBO0VBQ0EsZ0VBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBekRBO0FBNERBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXpEQTtBQTREQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBekRBO0FBNkRBLHNCQUFBO0FBQ0E7RUFFQTs7SUFFSSxXQUFBO0VBM0RGOztFQThERjtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBM0RGOztFQThERjtJQUNJLGlCQUFBO0VBM0RGOztFQThERjtJQUNJLFlBQUE7SUFDQSx3QkFBQTtFQTNERjtBQUNGO0FBOERBO0VBQ0E7SUFDSSxhQUFBO0lBQ0Esa0JBQUE7RUE1REY7QUFDRiIsImZpbGUiOiJ2aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94ZWRUZXh0IHtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2JiYjtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcblxyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywyNDMsMjQzKTtcclxuICAgIC8vIGNvbG9yOiByZ2IoMzMsMzMsMzMpO1xyXG4gICAgLy8gYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICNiYmI7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlbHBEaWFsb2d1ZSB7XHJcbiAgICAuaGVscFRleHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyAuYm94ZWRUZXh0IHtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNiYmI7XHJcbi8vICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZjtcclxuLy8gICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG4vLyAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ncmFwaFRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ncmFwaFRhYlZpZXcge1xyXG4gICAgYmFja2dyb3VuZDogIzFlMWUxZTtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnVzZXJTdG9yeS51c2VyU3RvcnkudXNlclN0b3J5ID4gYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyZTMzXHJcbn1cclxuXHJcbi5zY3JvbGxhYmxlQ29udGVudCB7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTcwcHgpOyAvLyA2MHB4IGZvciBoZWFkZXIgYW5kIDYwcHggZm9yIGdyYXBodG9vbGJhciA1MHB4IGZvciB0YWJ2aWV3XHJcbn1cclxuXHJcbi5zdG9yeWFyZWEge1xyXG4gICAgLnAtaW5wdXR0ZXh0IHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29tbWVudGFyZWEge1xyXG4gICAgLnAtaW5wdXR0ZXh0IHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gMzJweDtcclxuICAgIC8vIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAuNXM7XHJcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICYuc2lkZW5hdi12aXNpYmxlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ncmFwaCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuZmxleDogMTtcclxufVxyXG5cclxuLnRvb2xiYXIgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDA7XHJcbmxlZnQ6IDA7XHJcbnJpZ2h0OiAwO1xyXG5oZWlnaHQ6IDYwcHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbmNvbG9yOiB3aGl0ZTtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxubWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xyXG5oZWlnaHQ6IDQwcHg7XHJcbm1hcmdpbjogMCA4cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN5b3V0dWJlLWxvZ28ge1xyXG5oZWlnaHQ6IDQwcHg7XHJcbm1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyLFxyXG4udG9vbGJhciAjeW91dHViZS1sb2dvOmhvdmVyIHtcclxub3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xyXG5oZWlnaHQ6IDI0cHg7XHJcbndpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbm1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbmZpbGw6ICM4ODg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtd3JhcDogd3JhcDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbm1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG5oZWlnaHQ6IDQwcHg7XHJcbndpZHRoOiAyMDBweDtcclxubWFyZ2luOiAwIDhweCAxNnB4O1xyXG5wYWRkaW5nOiAxNnB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogcm93O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxudHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbmxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbm1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1zbWFsbCB7XHJcbmhlaWdodDogMTZweDtcclxud2lkdGg6IDE2OHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG5maWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuY29sb3I6IHdoaXRlO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5ib3JkZXI6IG5vbmU7XHJcbndpZHRoOiBhdXRvO1xyXG5taW4td2lkdGg6IDMwJTtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG5tYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5cclxuc3ZnI3JvY2tldCB7XHJcbndpZHRoOiA4MHB4O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IC0xMHB4O1xyXG50b3A6IC0yNHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAxMHB4O1xyXG5yaWdodDogMTgwcHg7XHJcbnotaW5kZXg6IC0xMDtcclxufVxyXG5cclxuYSxcclxuYTp2aXNpdGVkLFxyXG5hOmhvdmVyIHtcclxuY29sb3I6ICMxOTc2ZDI7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbmNvbG9yOiAjMTI1Njk5O1xyXG59XHJcblxyXG4udGVybWluYWwge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbndpZHRoOiA4MCU7XHJcbm1heC13aWR0aDogNjAwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDZweDtcclxucGFkZGluZy10b3A6IDQ1cHg7XHJcbm1hcmdpbi10b3A6IDhweDtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xyXG59XHJcblxyXG4udGVybWluYWw6OmJlZm9yZSB7XHJcbmNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDA7XHJcbmxlZnQ6IDA7XHJcbmhlaWdodDogNHB4O1xyXG5iYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbmNvbG9yOiAjYzJjM2M0O1xyXG53aWR0aDogMTAwJTtcclxuZm9udC1zaXplOiAycmVtO1xyXG5saW5lLWhlaWdodDogMDtcclxucGFkZGluZzogMTRweCAwO1xyXG50ZXh0LWluZGVudDogNHB4O1xyXG59XHJcblxyXG4udGVybWluYWwgcHJlIHtcclxuZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XHJcbmNvbG9yOiB3aGl0ZTtcclxucGFkZGluZzogMCAxcmVtIDFyZW07XHJcbm1hcmdpbjogMDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rIHtcclxuaGVpZ2h0OiA0MHB4O1xyXG53aWR0aDogNDBweDtcclxuYm9yZGVyLXJhZGl1czogNDBweDtcclxubWFyZ2luOiA4cHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbnRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbms6aG92ZXIge1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG5ib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG5tYXJnaW4tdG9wOiA4cHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZSB7XHJcbmNvbG9yOiAjMjQyOTJlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5mb250LXNpemU6IDEycHg7XHJcbnBhZGRpbmc6IDNweCAxMHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcclxuYm9yZGVyLXJhZGl1czogM3B4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcclxubWFyZ2luLWxlZnQ6IDRweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbmJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbmhlaWdodDogMTZweDtcclxud2lkdGg6IDE2cHg7XHJcbm1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG5zdmcjY2xvdWRzIHtcclxucG9zaXRpb246IGZpeGVkO1xyXG5ib3R0b206IC0xNjBweDtcclxubGVmdDogLTIzMHB4O1xyXG56LWluZGV4OiAtMTA7XHJcbndpZHRoOiAxOTIwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbi50ZXJtaW5hbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcclxufVxyXG5cclxuc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICByaWdodDogMTIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/splitbutton */ "Wq6t");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/contextmenu */ "yNBN");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/blockui */ "0LTx");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/panel */ "7CaW");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ngrx/main.reducer */ "x+dD");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _main_component_main_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main-component/main.component */ "J2qu");
/* harmony import */ var _main_component_main_services__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main-component/main.services */ "1Jqw");
/* harmony import */ var _utils_autofocus_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/autofocus.directive */ "ynzx");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./viewer-component/viewer.component */ "WJr1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ "fXoL");































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"],
        _main_component_main_services__WEBPACK_IMPORTED_MODULE_25__["MainService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_20__["StoreModule"].forRoot({ [_ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_21__["mainFeatureKey"]]: _ngrx_main_reducer__WEBPACK_IMPORTED_MODULE_21__["mainReducer"] }),
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__["ToolbarModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__["SplitButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"],
            primeng_blockui__WEBPACK_IMPORTED_MODULE_16__["BlockUIModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__["ProgressSpinnerModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_18__["PanelModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_19__["TabViewModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
        _main_component_main_component__WEBPACK_IMPORTED_MODULE_24__["MainComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_27__["SidenavComponent"],
        _utils_autofocus_directive__WEBPACK_IMPORTED_MODULE_26__["AutofocusDirective"],
        _viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_28__["ViewerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_20__["StoreRootModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_4__["ToolbarModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__["SplitButtonModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"],
        primeng_blockui__WEBPACK_IMPORTED_MODULE_16__["BlockUIModule"],
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__["ProgressSpinnerModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_18__["PanelModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_19__["TabViewModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_23__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "qPkg":
/*!*************************************************!*\
  !*** ./src/app/main-component/mermaid_utils.ts ***!
  \*************************************************/
/*! exports provided: mermaid_utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mermaid_utils", function() { return mermaid_utils; });
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mermaid */ "my1g");

class mermaid_utils {
    static init() {
        const config = {
            startOnLoad: true,
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'cardinal',
            },
            securityLevel: 'loose',
        };
        mermaid__WEBPACK_IMPORTED_MODULE_0__["default"].initialize(config);
    }
    static isEmpty(graph) {
        var _a, _b;
        const hasData = ((_a = graph.node_names) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = graph.comments) === null || _b === void 0 ? void 0 : _b.length) > 0;
        return !hasData;
    }
    static isEqual(graph1, graph2) {
        var _a, _b, _c, _d, _e, _f;
        if (((_a = graph1.node_names) === null || _a === void 0 ? void 0 : _a.length) !== ((_b = graph2.node_names) === null || _b === void 0 ? void 0 : _b.length)
            || ((_c = graph1.edges) === null || _c === void 0 ? void 0 : _c.length) !== ((_d = graph2.edges) === null || _d === void 0 ? void 0 : _d.length)
            || ((_e = graph1.comments) === null || _e === void 0 ? void 0 : _e.length) !== ((_f = graph2.comments) === null || _f === void 0 ? void 0 : _f.length)
            || graph1.confusing !== graph2.confusing) {
            return false;
        }
        if (graph1.comments !== graph2.comments)
            return false;
        for (let i in graph1.node_names) {
            if (graph1.node_names[i].name !== graph2.node_names[i].name)
                return false;
            if (graph1.node_names[i].physical !== graph2.node_names[i].physical)
                return false;
            if (graph1.node_names[i].hypothetical !== graph2.node_names[i].hypothetical)
                return false;
        }
        for (let i in graph1.edges) {
            if (graph1.edges[i].edge[0] !== graph2.edges[i].edge[0] || graph1.edges[i].edge[1] !== graph2.edges[i].edge[1])
                return false;
            if (graph1.edges[i].physical !== graph2.edges[i].physical)
                return false;
        }
        return true;
    }
    static addNode(graph, node) {
        graph.node_names.push(node);
        return graph.node_names.length - 1;
    }
    static addEdge(graph, edge) {
        graph.edges.push(edge);
    }
    static sortEdges(graph) {
        const N = graph.node_names.length;
        graph.edges.sort((a, b) => (a[0] - b[0]) * N + (a[1] - b[1]));
    }
    static deleteNodeEdges(graph, i) {
        graph.edges = graph.edges.filter(edge => edge[0] != i && edge[1] != i);
    }
    static deleteNode(graph, i) {
        this.deleteNodeEdges(graph, i);
        graph.node_names.splice(i, 1); // remove i-th node
        // fix edge numbers after removing edge i
        graph.edges.forEach(edge => {
            if (edge[0] >= i)
                edge[0] -= 1;
            if (edge[1] >= i)
                edge[1] -= 1;
        });
    }
    static sanatizeName(name) {
        const brokenWords = ['interpolate', 'call', 'click'];
        const regexstr = brokenWords.map(w => '[^a-zA-Z](' + w + ')[^a-zA-Z]').join('|');
        const regex = new RegExp(regexstr, 'g');
        if (name.match(regex)) {
            name = name.replaceAll(regex, (w) => { return w.substring(0, w.length - 1) + '_' + w.substring(w.length - 1); });
            console.warn('Name sanatized', name);
        }
        return name;
    }
    static addNewLineToName(name) {
        const newLine = '<br/>';
        let lastNewLine = -1;
        for (let i = 0; i < name.length; i++) {
            lastNewLine++;
            if (lastNewLine < 50) {
                continue;
            }
            //need new line at first space
            const cur = name.charAt(i);
            if (cur == ' ') {
                name = name.substring(0, i) + newLine + name.substring(i + 1);
                i += (newLine.length - 1);
                lastNewLine = 0;
            }
        }
        return name;
    }
    static obj_to_graph_str(graph, graphStyle) {
        let result = 'graph ';
        if ((graphStyle === null || graphStyle === void 0 ? void 0 : graphStyle.LR) == false) {
            result += 'TD';
        }
        else {
            result += 'LR';
        }
        result += ' \n';
        graph.node_names.forEach((node, i) => {
            const nodename = i;
            var name = this.sanatizeName(node.name);
            name = (i + 1) + ': ' + name;
            name = this.addNewLineToName(name);
            const line = nodename + '([' + name + '])';
            const callbackLine = 'click ' + nodename + ' callBackFnForMermaidJS';
            result += line + '\n';
            result += callbackLine + '\n';
        });
        graph.edges.forEach((edge) => {
            var line = edge.edge[0] + ' --> ' + edge.edge[1];
            if (!edge.physical) {
                line = edge.edge[0] + ' -.-> ' + edge.edge[1];
            }
            result += line + '\n';
        });
        if (!!graphStyle) {
            if (!!graphStyle.clicked) {
                result += 'style ' + graphStyle.clicked + ' fill:#f9f,stroke:#333,stroke-width:2px' + '\n';
            }
        }
        return result;
    }
    /**
     * Renders the graph on screen given the HTML element and the string representation of the graph
     * callback is called whenever a node is clicked
     */
    static render(element, graph_str, callback) {
        mermaid__WEBPACK_IMPORTED_MODULE_0__["default"].render("graphDiv", graph_str, (svgCode, bindFunctions) => {
            element.innerHTML = svgCode;
            bindFunctions(element);
        });
        if (!callback) {
            callback = (nodeId) => {
                console.log('Hit graph callback function that was left empty', nodeId);
            };
        }
        ;
        window.callBackFnForMermaidJS = callback;
    }
    static willBeCyclic(graph, node1, node2) {
        const adj = [...graph.edges, [node1, node2]];
        const V = graph.node_names.length;
        /**
         * Returns true if the graph contains a
         * cycle, else false.
         * This function is a variation of DFS() in
         * https://www.geeksforgeeks.org/archives/18212
         */
        // This function is a variation of DFSUtil() in
        // https://www.geeksforgeeks.org/archives/18212
        const isCyclicUtil = (i, visited, visitedDirty) => {
            if (visitedDirty[i])
                return true;
            if (visited[i])
                return false;
            // Mark the current node as visited and part of recursion stack
            visited[i] = true;
            visitedDirty[i] = true;
            let children = adj.filter((pair) => pair[0] == i).map((pair) => pair[1]);
            for (let c = 0; c < children.length; c++)
                if (isCyclicUtil(children[c], visited, visitedDirty))
                    return true;
            visitedDirty[i] = false;
            return false;
        };
        // Mark all the vertices as not visited and not dirty
        let visited = Array(V).fill(false);
        let visitedDirty = Array(V).fill(false);
        // Call the recursive helper function to detect cycle in different DFS trees
        for (let i = 0; i < V; i++)
            if (isCyclicUtil(i, visited, visitedDirty))
                return true;
        return false;
    }
    static decode_google_sheet_copy(text) {
        let res = [];
        let inseideQuote = false;
        let currentCellIndex = 0;
        for (let i = 0; i < text.length; i++) {
            let cur = text.charAt(i);
            if (currentCellIndex >= res.length) {
                res.push("");
                if (cur == '"') { // check if quoted cell
                    inseideQuote = true;
                    continue;
                }
            }
            if (cur != '\n' && cur != '\t' && cur != '"') {
                res[currentCellIndex] += cur;
            }
            else if (cur == '\n' || cur == '\t') {
                if (inseideQuote) { // in quoted cell, new lines and tabs appear as is
                    res[currentCellIndex] += cur;
                }
                else { // new line in unquoted cell, ends cell
                    inseideQuote = false;
                    currentCellIndex += 1;
                }
            }
            else if (cur == '"') {
                if (inseideQuote) {
                    let nextChar = (i + 1) >= text.length ? '\n' : text.charAt(i + 1);
                    if (nextChar == '"') { // double quote inside quoted cell, puts single quote in result
                        res[currentCellIndex] += '"';
                        i++; // skip the double quote
                    }
                    else if (nextChar == '\n' || nextChar == '\t') { // single quote in quoted cell, end quoted cell
                        inseideQuote = false;
                        currentCellIndex += 1;
                        i++; // skip newline afterwards
                    }
                    else if (nextChar == '\r') { // single quote in quoted cell, end quoted cell
                        inseideQuote = false;
                        currentCellIndex += 1;
                        i += 2; // skip \r and newline afterwards
                    }
                    else {
                        console.error('UNEXPECTED STATE PARSING FROM GOOGLE SHEETS AT INDEX', i, currentCellIndex, inseideQuote, cur, nextChar);
                    }
                }
                else { // in unquoted cell, quotations appear as is
                    res[currentCellIndex] += cur;
                }
            }
        }
        return res;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_component_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-component/main.component */ "J2qu");
/* harmony import */ var _viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer-component/viewer.component */ "WJr1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'home', component: _main_component_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], },
    { path: 'view', component: _viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_2__["ViewerComponent"], },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x+dD":
/*!**************************************!*\
  !*** ./src/app/ngrx/main.reducer.ts ***!
  \**************************************/
/*! exports provided: mainActions, mainReducer, mainFeatureKey, selectMainState, selectAllStories, selectSelectedStory, selectLoaderTasks, selectSideNavStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainActions", function() { return mainActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainReducer", function() { return mainReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainFeatureKey", function() { return mainFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMainState", function() { return selectMainState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllStories", function() { return selectAllStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSelectedStory", function() { return selectSelectedStory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoaderTasks", function() { return selectLoaderTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSideNavStatus", function() { return selectSideNavStatus; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// ACTIONS
const mainActions = {
    PushLoader: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Main Action] PushLoader'),
    PopLoader: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Main Action] PopLoader'),
    setSideNavVisible: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Main Action] setSideNavVisible', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    setKeyboardFocudEle: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Main Action] setKeyboardFocudEle', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    setAllStories: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Main Action] setAllStories', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
    setSelectedStory: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Main Action] setSelectedStory', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
};
const initialState = {
    allStories: null,
    selectedStory: null,
    loaderTasks: 0,
    sideNavStatus: true,
    payload: null,
    action: null,
};
// REDUCER
const mainReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(mainActions.PushLoader, (state) => (Object.assign(Object.assign({}, state), { action: mainActions.PushLoader.type, loaderTasks: state.loaderTasks + 1 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(mainActions.PopLoader, (state) => (Object.assign(Object.assign({}, state), { action: mainActions.PopLoader.type, loaderTasks: state.loaderTasks - 1 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(mainActions.setAllStories, (state, { allStories }) => (Object.assign(Object.assign({}, state), { action: mainActions.setAllStories.type, allStories: allStories }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(mainActions.setSelectedStory, (state, { selectedStory }) => (Object.assign(Object.assign({}, state), { action: mainActions.setSelectedStory.type, selectedStory: selectedStory }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(mainActions.setSideNavVisible, (state, { status }) => (Object.assign(Object.assign({}, state), { action: mainActions.setSideNavVisible.type, sideNavStatus: status }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(mainActions.setKeyboardFocudEle, (state, { payload }) => (Object.assign(Object.assign({}, state), { action: mainActions.setKeyboardFocudEle.type, payload: payload }))));
const mainFeatureKey = 'mainFeatureKey';
const selectMainState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(mainFeatureKey);
const selectAllStories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMainState, (state) => state.allStories);
const selectSelectedStory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMainState, (state) => state.selectedStory);
const selectLoaderTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMainState, (state) => state.loaderTasks);
const selectSideNavStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMainState, (state) => state.sideNavStatus);


/***/ }),

/***/ "ynzx":
/*!**********************************************!*\
  !*** ./src/app/utils/autofocus.directive.ts ***!
  \**********************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AutofocusDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
    }
    set autofocus(condition) {
        const cond = condition != false;
        if (cond && !this.focus) {
            setTimeout(() => {
                this.el.nativeElement.focus();
            }, 0);
        }
        this.focus = cond;
    }
}
AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutofocusDirective, selectors: [["", "autofocus", ""]], inputs: { autofocus: "autofocus" } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map