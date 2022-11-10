(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! M:\MyFiles\Classes\Grad\infolab\mermaidjs\frontend\ui-graph-tool\src\main.ts */"zUnb");


/***/ }),

/***/ "8Kc9":
/*!*********************************!*\
  !*** ./src/app/app.services.ts ***!
  \*********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
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
    telemetryAdd: '/api/telemetryAdd'
};
class AppService {
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
    telemetryAdd(user, data) {
        return this.http.post(API.telemetryAdd, { 'user': user, 'data': data });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });


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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mermaid_utils */ "t91z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.services */ "8Kc9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/contextmenu */ "yNBN");
















const _c0 = ["mermaid"];
const _c1 = function () { return { "margin-right": "8px" }; };
function AppComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_14_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.username_confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function AppComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_20_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.toolbar_raneme_confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_20_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.renameDialogDisplay = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
} }
function AppComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_23_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.sidebar_add_new_stories_confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_23_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.newStoryDialogDisplay = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
} }
function AppComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Story");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1) { return { "selected": a0, "completed": a1 }; };
function AppComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_28_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const i_r15 = ctx.rowIndex; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.sidebar_click_story(i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const story_r14 = ctx.$implicit;
    const i_r15 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c2, i_r15 == ctx_r4.selectedTreeRowIndex, !!story_r14.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](story_r14.text);
} }
const _c3 = function () { return { "padding-right": "30px" }; };
const _c4 = function () { return { width: "25vw" }; };
const _c5 = function () { return { width: "50vw" }; };
const _c6 = function () { return { "width": "100%", "max-width": "100%" }; };
class AppComponent {
    // allUserNames: string[] = null;
    constructor(messageService, confirmationService, appService) {
        // this.appService.storyGetAll().subscribe((res) => {
        //   console.log('getall', res);
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.appService = appService;
        this.BaseContextMenu = [
            { label: "New", command: () => this.toolbar_new_node() },
            { label: "Rename", disabled: () => !this.graphStyle.clicked, command: () => this.toolbar_rename() },
            { label: "Delete Node", disabled: () => !this.graphStyle.clicked, command: () => this.toolbar_delete_node() },
            { label: "Clear Node Edges", disabled: () => !this.graphStyle.clicked, command: () => this.toolbar_clear_node_edges() },
        ];
        this.contextMenu = [...this.BaseContextMenu];
        this.stories = [
        // {
        //   text: 'hello',
        // },
        // {
        //   text: 'hello2hello2hello2hello2hello2hello2hello2hello2',
        //   completed: true,
        // },
        ];
        this.usernameDialogDisplay = true;
        this.usernameDialogInput = null;
        this.renameDialogDisplay = false;
        this.renameDialogInput = null;
        this.renameDialogInNewNodeMode = false;
        this.newStoryDialogDisplay = false;
        this.newStoryDialogInput = null;
        this.selectedTreeRowIndex = -1;
        this.graph = {
            // node_names: ['Start', 'Is it', 'End'],
            // edges: [[0, 1], [1, 2]],
            node_names: [],
            edges: [],
        };
        this.graphStyle = {
            clicked: null
        };
        this.userName = null;
        // })
        // this.userName = 'TEMPUSER';
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window['app'] = this;
            window['mermaid_utils'] = _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__["mermaid_utils"];
            _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__["mermaid_utils"].init();
            this.update();
            // this.allUserNames = (await this.appService.usersGet().toPromise())['resp']
        });
    }
    username_confirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // let loggedIn = false;
            // this.allUserNames.forEach(v => {
            //   if (!loggedIn && this.usernameDialogInput.toLowerCase() == v.toLowerCase()) {
            //     this.userName = v;
            //     this.usernameDialogDisplay = false;
            //     loggedIn = true;
            //     this.appService.telemetryAdd(this.userName, 'login').subscribe((resp) => {})
            //   }
            // });
            this.userName = this.usernameDialogInput.toLowerCase();
            this.usernameDialogDisplay = false;
            this.appService.telemetryAdd(this.userName, 'login').subscribe((resp) => { });
            // if (loggedIn) {
            // LOADING STORIES
            let res = yield this.appService.storyGetAll().toPromise();
            let arr = res['resp'];
            // console.log(arr);
            let keys = Object.keys(arr);
            Object.entries(arr).forEach(entry => {
                let key = entry[0];
                let story = entry[1];
                this.stories.push({
                    text: story,
                    key: key
                });
            });
            // } else {
            //   this.messageService.add({severity:'error', summary:'User not found', detail:'user does not exist in the database'})
            // }
        });
    }
    toolbar_new_node() {
        this.renameDialogInput = '';
        this.renameDialogDisplay = true;
        this.renameDialogInNewNodeMode = true;
    }
    toolbar_rename() {
        if (!!this.graphStyle.clicked) {
            const current_node_name = this.graph.node_names[this.graphStyle.clicked];
            this.renameDialogInput = current_node_name;
            this.renameDialogDisplay = true;
            this.renameDialogInNewNodeMode = false;
        }
    }
    toolbar_raneme_confirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.renameDialogDisplay = false;
            const reg = '0-9 a-z A-Z \- \/ \& \' . ,';
            const matchReg = new RegExp('^[' + reg + ']+$');
            const replaceReg = new RegExp('[^' + reg + ']', 'g');
            if (!this.renameDialogInput.match(matchReg)) {
                // this.messageService.add({severity:'error', summary:'Name Error', detail:'Name contains invalid characters'})
                // return
                this.messageService.add({ severity: 'warn', summary: 'Name Sanitized', detail: 'Name contains invalid characters that were removed' });
                console.log(this.renameDialogInput);
                this.renameDialogInput = this.renameDialogInput.replaceAll(replaceReg, '');
                console.log(this.renameDialogInput);
            }
            if (this.renameDialogInNewNodeMode) {
                _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__["mermaid_utils"].addNode(this.graph, this.renameDialogInput);
            }
            else {
                this.graph.node_names[this.graphStyle.clicked] = this.renameDialogInput;
            }
            this.save_and_update();
        });
    }
    toolbar_delete_node() {
        if (!!this.graphStyle.clicked) {
            _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__["mermaid_utils"].deleteNode(this.graph, this.graphStyle.clicked);
            this.setClickedNode(null);
            this.save_and_update();
        }
    }
    toolbar_clear_node_edges() {
        if (!!this.graphStyle.clicked) {
            _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__["mermaid_utils"].deleteNodeEdges(this.graph, this.graphStyle.clicked);
            this.setClickedNode(null);
            this.save_and_update();
        }
    }
    // toolbar_mark_story() {
    //   this.stories[this.selectedTreeRowIndex].completed = !this.stories[this.selectedTreeRowIndex].completed
    // }
    toolbar_clear_graph() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to clear the current graph?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => { this.clearGraph(); },
            reject: () => { }
        });
    }
    // toolbar_delete_story() {
    //   this.confirmationService.confirm({
    //     message: 'Are you sure you want to delete this story?',
    //     header: 'Delete Story',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //       this.stories.splice(this.selectedTreeRowIndex, 1)
    //       this.selectedTreeRowIndex -= 1;
    //       if (this.selectedTreeRowIndex < 0 && this.stories.length > 0) {
    //         this.selectedTreeRowIndex = 0;
    //       }
    //       this.sidebar_click_story(this.selectedTreeRowIndex)
    //     },
    //   });
    // }
    onEscapeKey(event) {
        this.setClickedNode(null);
        this.update();
    }
    sidebar_click_story(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.selectedTreeRowIndex >= 0) {
                yield this.save_current_story_backend();
            }
            this.selectedTreeRowIndex = index;
            if (this.selectedTreeRowIndex < 0) {
                this.graph = {
                    node_names: [],
                    edges: [],
                };
                this.update();
                return;
            }
            // if(!this.stories[index].graph) {
            //   this.stories[index].graph = {}
            // }
            let storyKey = this.stories[index].key;
            let res = yield this.appService.userAnnotationGet(this.userName, storyKey).toPromise();
            this.graph = !!res['resp'] ? JSON.parse(res['resp']) : {};
            this.graph.node_names = !!this.graph.node_names ? this.graph.node_names : [];
            this.graph.edges = !!this.graph.edges ? this.graph.edges : [];
            this.update();
        });
    }
    sidebar_add_new_stories() {
        this.newStoryDialogInput = '';
        this.newStoryDialogDisplay = true;
    }
    sidebar_add_new_stories_confirm() {
        this.newStoryDialogDisplay = false;
        const addIndex = this.selectedTreeRowIndex >= 0 ? this.selectedTreeRowIndex + 1 : this.stories.length;
        this.stories.splice(addIndex, 0, { text: this.newStoryDialogInput });
        this.sidebar_click_story(addIndex);
    }
    sidebar_load_data_from_clipboard() {
        navigator.clipboard.readText()
            .then(text => {
            const sheet = _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__["mermaid_utils"].decode_google_sheet_copy(text);
            this.confirmationService.confirm({
                message: 'Are you sure you want to load the following stories? <br/> Story Count: <b>' + sheet.length + '</b>',
                header: 'Load from clipboard',
                accept: () => {
                    sheet.forEach((cell) => this.stories.push({ text: cell }));
                },
            });
        })
            .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
    }
    sidebar_load_data_from_file() {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => {
            let file = e.target.files[0];
            // 
            let reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = readerEvent => {
                let content = readerEvent.target.result;
                let loadedStories = JSON.parse(content);
                loadedStories.forEach((cell) => {
                    if (!('text' in cell)) {
                        return;
                    }
                    this.stories.push(cell);
                });
            };
        };
        input.click();
    }
    sidebar_clear_all_stories() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to DELETE ALL DATA?',
            header: 'Delete All Data',
            accept: () => {
                setTimeout(() => {
                    this.confirmationService.confirm({
                        message: 'Are you really sure you want to DELETE ALL DATA?',
                        header: 'Delete All Data',
                        accept: () => {
                            this.stories = [];
                            this.clearGraph();
                            this.selectedTreeRowIndex = -1;
                        },
                    });
                }, 500);
            },
        });
    }
    sidebar_export() {
        var a = document.createElement("a");
        var file = new Blob([JSON.stringify(this.stories)], { type: 'text' });
        a.href = URL.createObjectURL(file);
        a.download = 'export.txt';
        a.click();
    }
    setClickedNode(nodeClicked) {
        this.graphStyle.clicked = nodeClicked;
        this.contextMenu = this.BaseContextMenu.map(m => Object.assign({}, m));
        this.contextMenu.forEach(m => {
            if ('disabled' in m) {
                m['disabled'] = m['disabled']();
            }
        });
    }
    clearGraph() {
        this.graph.node_names = [];
        this.graph.edges = [];
        this.setClickedNode(null);
        this.update();
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
            _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__["mermaid_utils"].addEdge(this.graph, this.graphStyle.clicked, nodeClicked);
            this.setClickedNode(null);
            this.save_and_update();
        }
    }
    save_current_story_backend() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let storyKey = this.stories[this.selectedTreeRowIndex].key;
            let graph = JSON.stringify(this.graph);
            let res = yield this.appService.userAnnotationAdd(this.userName, storyKey, graph).toPromise();
            this.appService.telemetryAdd(this.userName, 'edit ' + storyKey).subscribe((resp) => { });
            return res;
        });
    }
    save_and_update() {
        this.save_current_story_backend().then((resp) => {
            this.update();
        });
    }
    update() {
        const element = this.mermaidDiv.nativeElement;
        const graph_str = _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__["mermaid_utils"].obj_to_graph_str(this.graph, this.graphStyle);
        // console.log(graph_str)
        _mermaid_utils__WEBPACK_IMPORTED_MODULE_1__["mermaid_utils"].render(element, graph_str, this.callback.bind(this));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mermaidDiv = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.escape", function AppComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeKey($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 48, vars: 48, consts: [["role", "banner", 1, "toolbar"], ["width", "110", "alt", "Logo", "src", "assets/dag.png"], [1, "spacer"], [3, "ngStyle"], ["header", "Username", 3, "visible", "modal", "closeOnEscape", "closable", "baseZIndex", "visibleChange"], [1, "p-float-label"], ["id", "float-input", "type", "text", "pInputText", "", "autofocus", "", 3, "ngModel", "ngModelChange", "keydown.enter"], ["for", "float-input"], ["pTemplate", "footer"], ["header", "Node Name", 3, "visible", "baseZIndex", "visibleChange"], ["header", "New Story", 3, "visible", "baseZIndex", "visibleChange"], ["pInputTextarea", "", "autofocus", "", 3, "rows", "ngModel", "ngStyle", "ngModelChange"], ["id", "mySidenav", 1, "sidenav"], ["scrollHeight", "80vh", 3, "value", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], ["id", "contentpush", "role", "main", 1, "content"], [1, "p-toolbar-group-left"], ["icon", "pi pi-plus", "label", "New", 3, "ngStyle", "disabled", "onClick"], ["icon", "pi pi-pencil", "styleClass", "p-button-warning ui-button", "label", "Rename", 3, "ngStyle", "disabled", "onClick"], ["icon", "pi pi-times", "styleClass", "p-button-help ui-button", "label", "Delete Node", 3, "ngStyle", "disabled", "onClick"], ["icon", "pi pi-times", "styleClass", "p-button-help ui-button", "label", "Clear Node Edges", 3, "ngStyle", "disabled", "onClick"], [1, "p-toolbar-group-right"], ["icon", "pi pi-times", "styleClass", "p-button-danger ui-button", "label", "Clear Graph", 3, "ngStyle", "disabled", "onClick"], [3, "target", "model"], [1, "graph"], ["mermaid", ""], [1, "storyarea"], ["pInputTextarea", "", "autoResize", "autoResize", "disabled", "true", 3, "rows", "ngModel"], ["id", "clouds", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], ["icon", "pi pi-check", "label", "Login", 3, "ngStyle", "click"], ["icon", "pi pi-check", "label", "Confirm", 3, "ngStyle", "click"], ["icon", "pi pi-times", "label", "Cancel", "styleClass", "p-button-text ui-button", 3, "ngStyle", "click"], [2, "max-width", "50px"], [3, "click"], [1, "storyrow", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Graph Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p-dialog", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_9_listener($event) { return ctx.usernameDialogDisplay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_11_listener($event) { return ctx.usernameDialogInput = $event; })("keydown.enter", function AppComponent_Template_input_keydown_enter_11_listener() { return ctx.username_confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppComponent_ng_template_14_Template, 1, 2, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p-dialog", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_15_listener($event) { return ctx.renameDialogDisplay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_17_listener($event) { return ctx.renameDialogInput = $event; })("keydown.enter", function AppComponent_Template_input_keydown_enter_17_listener() { return ctx.toolbar_raneme_confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "New Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AppComponent_ng_template_20_Template, 2, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p-dialog", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function AppComponent_Template_p_dialog_visibleChange_21_listener($event) { return ctx.newStoryDialogDisplay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_textarea_ngModelChange_22_listener($event) { return ctx.newStoryDialogInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AppComponent_ng_template_23_Template, 2, 4, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AppComponent_ng_template_27_Template, 3, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AppComponent_ng_template_28_Template, 3, 5, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function AppComponent_Template_p_button_onClick_32_listener() { return ctx.toolbar_new_node(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function AppComponent_Template_p_button_onClick_33_listener() { return ctx.toolbar_rename(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function AppComponent_Template_p_button_onClick_34_listener() { return ctx.toolbar_delete_node(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function AppComponent_Template_p_button_onClick_35_listener() { return ctx.toolbar_clear_node_edges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function AppComponent_Template_p_button_onClick_37_listener() { return ctx.toolbar_clear_graph(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "p-contextMenu", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "div", null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Gray Clouds Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](38, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Username: ", ctx.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](39, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.usernameDialogDisplay)("modal", true)("closeOnEscape", false)("closable", false)("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.usernameDialogInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.renameDialogDisplay)("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.renameDialogInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](41, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", ctx.newStoryDialogDisplay)("baseZIndex", 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", 20)("ngModel", ctx.newStoryDialogInput)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](42, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.stories)("scrollable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](43, _c1))("disabled", ctx.selectedTreeRowIndex < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](44, _c1))("disabled", !ctx.graphStyle.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](45, _c1))("disabled", !ctx.graphStyle.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](46, _c1))("disabled", !ctx.graphStyle.clicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](47, _c1))("disabled", ctx.selectedTreeRowIndex < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("target", _r5)("model", ctx.contextMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rows", 5)("ngModel", ctx.selectedTreeRowIndex >= 0 ? ctx.stories[ctx.selectedTreeRowIndex].text : "No story selected.");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], primeng_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialog"], primeng_dialog__WEBPACK_IMPORTED_MODULE_8__["Dialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__["InputTextarea"], primeng_table__WEBPACK_IMPORTED_MODULE_12__["Table"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_13__["Toolbar"], primeng_button__WEBPACK_IMPORTED_MODULE_14__["Button"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_15__["ContextMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["@charset \"UTF-8\";\n\n.sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  \n  width: 250px;\n  position: fixed;\n  \n  left: 0;\n  background-color: #111;\n  \n  overflow-x: hidden;\n  \n  transition: 0.5s;\n  \n}\n.sidenav[_ngcontent-%COMP%]     .p-toolbar {\n  padding: 0rem;\n  justify-content: flex-start;\n}\n.storyrow[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.storyrow.selected[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n.storyrow.completed[_ngcontent-%COMP%] {\n  background-color: #0c4e3d;\n}\n.storyrow.selected.completed[_ngcontent-%COMP%] {\n  background-color: #12916f;\n}\n.storyarea[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  opacity: 1;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 60px auto 32px;\n  flex-direction: column;\n  align-items: stretch;\n  transition: margin-left 0.5s;\n  margin-left: 240px;\n}\n.graph[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQiw2QkFBQTtBQUNBO0VBQ0ksWUFBQTtFQUFjLHFCQUFBO0VBRWQsWUFBQTtFQUNBLGVBQUE7RUFBaUIsa0JBQUE7RUFHakIsT0FBQTtFQUNBLHNCQUFBO0VBQXdCLFNBQUE7RUFDeEIsa0JBQUE7RUFBb0IsOEJBQUE7RUFFcEIsZ0JBQUE7RUFBa0IseURBQUE7QUFHdEI7QUFESTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQUdSO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUdJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFBUjtBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsc0JBQUE7RUFDQSxvQkFBQTtFQUVBLDRCQUFBO0VBRUEsa0JBQUE7QUFKSjtBQU9BO0VBQ0ksaUJBQUE7QUFKSjtBQU9BO0VBQ0ksMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUpKO0FBT0E7RUFDQSxPQUFBO0FBSkE7QUFPQTtFQUNJLGVBQUE7QUFKSjtBQU9BO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFKQTtBQU9BO0VBQ0EsY0FBQTtBQUpBO0FBT0E7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUpBO0FBT0E7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUpBO0FBT0E7O0VBRUEsWUFBQTtBQUpBO0FBT0E7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpBO0FBT0E7RUFDQSxpQkFBQTtBQUpBO0FBT0E7RUFDQSxVQUFBO0FBSkE7QUFPQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUpBO0FBT0E7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBSkE7QUFPQTtFQUNBLGVBQUE7QUFKQTtBQU9BO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFKQTtBQU9BO0VBQ0EsZUFBQTtBQUpBO0FBT0E7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0FBSkE7QUFPQTtFQUNBLGFBQUE7QUFKQTtBQU9BO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUpBO0FBT0E7RUFDQSxpQkFBQTtBQUpBO0FBT0E7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUpBO0FBT0E7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSkE7QUFPQTs7O0VBR0EsY0FBQTtFQUNBLHFCQUFBO0FBSkE7QUFPQTtFQUNBLGNBQUE7QUFKQTtBQU9BO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFKQTtBQU9BO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSkE7QUFPQTtFQUNBLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQUpBO0FBT0E7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtFQUNBLHVCQUFBO0FBSkE7QUFPQTtFQUNBLCtCQUFBO0VBQ0EsMkNBQUE7QUFKQTtBQU9BO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSkE7QUFPQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUpBO0FBT0E7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBJQUFBO0FBSkE7QUFPQTtFQUNBLGdFQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBQUpBO0FBT0E7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSkE7QUFPQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSkE7QUFRQSxzQkFBQTtBQUNBO0VBRUE7O0lBRUksV0FBQTtFQU5GOztFQVNGO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUFORjs7RUFTRjtJQUNJLGlCQUFBO0VBTkY7O0VBU0Y7SUFDSSxZQUFBO0lBQ0Esd0JBQUE7RUFORjtBQUNGO0FBU0E7RUFDQTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogVGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51ICovXG4uc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xuICB3aWR0aDogMjUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAvKiBCbGFjayovXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXG59XG4uc2lkZW5hdiA6Om5nLWRlZXAgLnAtdG9vbGJhciB7XG4gIHBhZGRpbmc6IDByZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnN0b3J5cm93IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uc3Rvcnlyb3cuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xufVxuLnN0b3J5cm93LmNvbXBsZXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRlM2Q7XG59XG4uc3Rvcnlyb3cuc2VsZWN0ZWQuY29tcGxldGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyOTE2Zjtcbn1cblxuLnN0b3J5YXJlYSAucC1pbnB1dHRleHQge1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDYwcHggYXV0byAzMnB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cztcbiAgbWFyZ2luLWxlZnQ6IDI0MHB4O1xufVxuXG4uZ3JhcGgge1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbn1cblxuOmhvc3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cblxuLnRvb2xiYXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG9vbGJhciBpbWcge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDhweDtcbn1cblxuLnRvb2xiYXIgI3lvdXR1YmUtbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIsXG4udG9vbGJhciAjeW91dHViZS1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5zdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6ICM4ODg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIDhweCAxNnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQuY2FyZC1zbWFsbCB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2OHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiAjNjk2NzY3O1xufVxuXG4uY2FyZC5oaWdobGlnaHQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAzMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbnN2ZyNyb2NrZXQge1xuICB3aWR0aDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTBweDtcbiAgdG9wOiAtMjRweDtcbn1cblxuc3ZnI3JvY2tldC1zbW9rZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDE4MHB4O1xuICB6LWluZGV4OiAtMTA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTI1Njk5O1xufVxuXG4udGVybWluYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYxMDtcbn1cblxuLnRlcm1pbmFsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAouKAouKAolwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XG4gIGNvbG9yOiAjYzJjM2M0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMTRweCAwO1xuICB0ZXh0LWluZGVudDogNHB4O1xufVxuXG4udGVybWluYWwgcHJlIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaXJjbGUtbGluayB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuZm9vdGVyIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xuICBjb2xvcjogIzI0MjkyZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjLCAjZWZmM2Y2IDkwJSk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIDAuMzUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMC41ZW07XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuc3ZnI2Nsb3VkcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTYwcHg7XG4gIGxlZnQ6IC0yMzBweDtcbiAgei1pbmRleDogLTEwO1xuICB3aWR0aDogMTkyMHB4O1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSxcbi50ZXJtaW5hbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59Il19 */"] });


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
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/splitbutton */ "Wq6t");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/contextmenu */ "yNBN");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.services */ "8Kc9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"],
        _app_services__WEBPACK_IMPORTED_MODULE_17__["AppService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__["ToolbarModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_4__["SplitButtonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_2__["ToolbarModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        primeng_splitbutton__WEBPACK_IMPORTED_MODULE_4__["SplitButtonModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_13__["ContextMenuModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__["InputTextareaModule"],
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"]] }); })();


/***/ }),

/***/ "t91z":
/*!**********************************!*\
  !*** ./src/app/mermaid_utils.ts ***!
  \**********************************/
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
    static addNode(graph, name) {
        graph.node_names.push(name);
        return graph.node_names.length - 1;
    }
    static addEdge(graph, i, j) {
        graph.edges.push([i, j]);
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
        const regexstr = brokenWords.map(w => '(' + w + ')').join('|');
        const regex = new RegExp(regexstr, 'g');
        if (name.match(regex)) {
            name = name.replaceAll(regex, (w) => { return w + '_'; });
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
        let result = 'graph LR \n';
        graph.node_names.forEach((name, i) => {
            const nodename = i;
            name = this.sanatizeName(name);
            name = this.addNewLineToName(name);
            const line = nodename + '([' + name + '])';
            const callbackLine = 'click ' + nodename + ' callBackFn';
            result += line + '\n';
            result += callbackLine + '\n';
        });
        graph.edges.forEach((edge) => {
            const line = edge[0] + ' --> ' + edge[1];
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
                console.log('Hit callBackFn', nodeId);
            };
        }
        ;
        window.callBackFn = callback;
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