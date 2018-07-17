webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul-->\n<app-navbar></app-navbar>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/components/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ardc_ardc_component__ = __webpack_require__("../../../../../src/app/components/ardc/ardc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_howcan_howcan_component__ = __webpack_require__("../../../../../src/app/components/howcan/howcan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_story_story_component__ = __webpack_require__("../../../../../src/app/components/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_moreinfo_moreinfo_component__ = __webpack_require__("../../../../../src/app/components/moreinfo/moreinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_aboutheart_aboutheart_component__ = __webpack_require__("../../../../../src/app/components/aboutheart/aboutheart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_aboutarvd_aboutarvd_component__ = __webpack_require__("../../../../../src/app/components/aboutarvd/aboutarvd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_symptoms_symptoms_component__ = __webpack_require__("../../../../../src/app/components/symptoms/symptoms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_treatment_treatment_component__ = __webpack_require__("../../../../../src/app/components/treatment/treatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_living_living_component__ = __webpack_require__("../../../../../src/app/components/living/living.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_johnhopkins_johnhopkins_component__ = __webpack_require__("../../../../../src/app/components/johnhopkins/johnhopkins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_donate_donate_component__ = __webpack_require__("../../../../../src/app/components/donate/donate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'aboutus',
        component: __WEBPACK_IMPORTED_MODULE_6__components_aboutus_aboutus_component__["a" /* AboutusComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_7__components_contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: 'howcan',
        component: __WEBPACK_IMPORTED_MODULE_9__components_howcan_howcan_component__["a" /* HowcanComponent */]
    },
    {
        path: 'story',
        component: __WEBPACK_IMPORTED_MODULE_10__components_story_story_component__["a" /* StoryComponent */]
    },
    {
        path: 'ardc',
        component: __WEBPACK_IMPORTED_MODULE_8__components_ardc_ardc_component__["a" /* ArdcComponent */]
    },
    {
        path: 'moreinfo',
        component: __WEBPACK_IMPORTED_MODULE_11__components_moreinfo_moreinfo_component__["a" /* MoreinfoComponent */]
    },
    {
        path: 'heart',
        component: __WEBPACK_IMPORTED_MODULE_12__components_aboutheart_aboutheart_component__["a" /* AboutheartComponent */]
    },
    {
        path: 'arvd',
        component: __WEBPACK_IMPORTED_MODULE_13__components_aboutarvd_aboutarvd_component__["a" /* AboutarvdComponent */]
    },
    {
        path: 'symptom',
        component: __WEBPACK_IMPORTED_MODULE_14__components_symptoms_symptoms_component__["a" /* SymptomsComponent */]
    },
    {
        path: 'treatment',
        component: __WEBPACK_IMPORTED_MODULE_15__components_treatment_treatment_component__["a" /* TreatmentComponent */]
    },
    {
        path: 'living',
        component: __WEBPACK_IMPORTED_MODULE_16__components_living_living_component__["a" /* LivingComponent */]
    },
    {
        path: 'hopkins',
        component: __WEBPACK_IMPORTED_MODULE_17__components_johnhopkins_johnhopkins_component__["a" /* JohnhopkinsComponent */]
    },
    {
        path: 'donate',
        component: __WEBPACK_IMPORTED_MODULE_18__components_donate_donate_component__["a" /* DonateComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_aboutus_aboutus_component__["a" /* AboutusComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_ardc_ardc_component__["a" /* ArdcComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_howcan_howcan_component__["a" /* HowcanComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_story_story_component__["a" /* StoryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_moreinfo_moreinfo_component__["a" /* MoreinfoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_aboutheart_aboutheart_component__["a" /* AboutheartComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_aboutarvd_aboutarvd_component__["a" /* AboutarvdComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_symptoms_symptoms_component__["a" /* SymptomsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_treatment_treatment_component__["a" /* TreatmentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_living_living_component__["a" /* LivingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_johnhopkins_johnhopkins_component__["a" /* JohnhopkinsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_donate_donate_component__["a" /* DonateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, {
                enableTracing: true
            }),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/aboutarvd/aboutarvd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/aboutarvd/aboutarvd.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>What is AC?</h1>\n<p>\nArrhythmogenic right ventricular dysplasia/cardiomyopathy (AC) is a disease of the heart muscle (cardiomyopathy). This disease causes fatty/fibrous tissue to replace the normally functioning heart muscle of the right ventricle (RV). The disease causes right ventricle to dilate and contract poorly, and weakens the heart’s ability to pump blood. It also interrupts normal electrical signals in the heart, weakens the heart over time, can lead to heart failure, and potentially cause irregular, life-threatening heart rhythms. These rhythms increase the risk of sudden cardiac arrest/death. AC is a fairly rare genetic disease, and usually starts between the ages of 10 and 50 years old. The severity of the disease varies a great deal between people.\n</p>\n<p>\n  This heart disease affects men, women, and children of all races. While it is most commonly diagnosed in adults in their 30s and 40s, both young adults and older people have been diagnosed with this disease. It’s extremely rare to find signs or symptoms of AC before 12 years of age or to develop signs/symptoms of AC after the age of 60.\n</p>\n<p>\nAC accounts for as many as 20% of sudden cardiac deaths in patients under 35 years of age.\n</p>\n<p>\n  It may affect far more people due to its somewhat hidden nature and the difficulty in recognizing this heart disease; however, big advancements have been made in recognizing and diagnosing AC earlier in patients. It’s possible to have this disease without knowing it. Although AC is a genetic, heritable disease, genetics may not be the only factor. Other factors such as exposure to certain viruses and/or an athletic lifestyle can determine whether a person is clinically affected with AC. This is an area of active research.\n</p>\n<p>\nThe specific cause of AC is unknown. It occurs in about 1 in 5,000 people. It can occur with no family history, but it is shown to run in families (~30-50% of cases).\n</p>\n<p>\nAC typically begins in a small part of the right ventricle. As time progresses, it slowly begins to affect more of the right ventricle, and sometimes even the left ventricle as well. Since the heart can’t pump as much blood forward as it normally would, blood backs up in the circulatory system. This results in the build up of fluid in the soft tissues or lungs, leading to swelling (edema) and/or shortness of breath.\n</p>\n<p>\n  AC is caused by mutations in genes that encode desmosomal proteins. These proteins are involved with cell-to-cell adhesion (think of a bridge between two pieces of land). Typically, this abnormality causes a disruption of the normal structure and function of specific desmosomal proteins and this bridge pulls apart and the heart cells die. Over time, this “pulling apart” of the heart cells starts the process of scar/ fat replacement. The loss of heart muscle cells results in fewer muscle cells than normal, and the wall of the ventricles may be thin. Often, the ventricles may become enlarged and don’t squeeze as strongly as they should. This important observation helps explain why AC is more common in athletes, and the delayed onset of the disease. As athletes exercise, it puts strain on their heart to work harder, accelerating the onset and symptoms of the disease.\n</p>\n<p>\nFour stages of AC:\n</p>\n<ol>\n  <li>\n    Patients don’t exhibit symptoms of AC. It may not be possible to diagnose AC during this early “concealed phase.”\n  </li>\n  <li>\n    Characterized by ventricular arrhythmias/irregular heartbeats. Patients in this phase often experience palpitations, ventricular tachycardia, syncope or fainting, or sudden cardiac death. In some patients, ventricular arrhythmias may develop before observable evidence of structural heart disease is present. Diagnosing AC in this situation is particularly challenging.\n  </li>\n  <li>\n    The electrical and structural abnormalities of AC can be assessed by the ECG, echocardiogram, and cardiac MRI with emphasis on the structure and function of the right ventricle.\n  </li>\n  <li>\n    The degenerative process results in both left and right ventricle involvement. Patients may experience palpitations, lightheadedness, fainting, or sudden death.\n  </li>\n</ol>\n<p>\n  Researchers have found two patterns of inheritance for AC:\n</p>\n<ul>\n  <li>\n    <font><b>Autosomal dominant</b></font> - When one parent has ARVD. Studies show that in these families, the family members have a 50 percent chance of inheriting the condition, although the symptoms and age of onset may be different between family members. ARVD is more prevalent in some geographic locations, such as Italy.\n  </li>\n  <li>\n    <font><b>Autosomal recessive</b></font> - (Naxos disease) associated with a thickening of the outer layer of skin on the palms of the hands and soles of the feet (hyperkeratosis) and thick, \"wool-like\" hair.\n  </li>\n</ul>\n<p>\n  Several, but not all, specific genes have been identified as causes of AC. Researchers have been attempting to identify the specific gene mutations as well as the locations of chromosomes associated with AC. The condition may also have non-genetic causes, such as RV congenital abnormalities and viral/inflammatory myocarditis.\n</p>\n<p>\n  Genetic testing for AC is available in the United States, and usually requires submitting a small blood sample.\n</p>\n<p>\n  AC may be present in otherwise young and healthy people. Unfortunately, it has taken the lives of some young people before they could be diagnosed and treated to help protect them. However, with the right treatment, many AC patients can live normal lives.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/aboutarvd/aboutarvd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutarvdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutarvdComponent = (function () {
    function AboutarvdComponent() {
    }
    AboutarvdComponent.prototype.ngOnInit = function () {
    };
    return AboutarvdComponent;
}());
AboutarvdComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-aboutarvd',
        template: __webpack_require__("../../../../../src/app/components/aboutarvd/aboutarvd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/aboutarvd/aboutarvd.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutarvdComponent);

//# sourceMappingURL=aboutarvd.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/aboutheart/aboutheart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imgcss {\r\n  margin-right:40px;\r\n  margin-bottom:100px;\r\n}\r\n\r\n.list\r\n{\r\n  position: absolute;\r\n  left: 150px;\r\n  margin-top: 527px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/aboutheart/aboutheart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>About the Human Heart</h1>\n<p>\n  The human heart is roughly the size of a large fist and weighs between about 10 to 12 ounces (280 to 340 grams) in men and 8 to 10 ounces (230 to 280 grams) in women. Its primary function is to pump blood throughout the body (circulatory system), supply oxygen and nutrients to tissue around the body, and remove carbon dioxide and other wastes. The heart circulates blood through two pathways: the pulmonary circuit and the systemic circuit. In the pulmonary circuit, deoxygenated blood leaves the right ventricle of the heart through the pulmonary artery and travels to the lungs, then returns as oxygenated blood to the left atrium of the heart through the pulmonary vein. In the systemic circuit, oxygenated blood leaves the body through the left ventricle to the aorta, and from there enters the arteries and capillaries where it supplies the body's tissues with oxygen. Deoxygenated blood returns through veins to the venae cavae, re-entering the heart's right atrium. The cardiovascular system circulates blood from the heart to the lungs and around the body via blood vessels. After the blood leaves the heart through the aortic valve, two sets of arteries bring oxygenated blood to feed the heart muscle. The left main coronary artery, on one side of the aorta, branches into the left anterior descending artery and the left circumflex artery. The right coronary artery branches out on the right side of the aorta.\n</p>\n\n\n<img align=\"left\" class=\"imgcss\" src=\"../../assets/heart.png\" style=\"width:670px;height:527px;\">\n  <ul align=\"left\" class=\"list\">\n    <li>\n      Conducting cells: carry the heart’s electrical signal.\n    </li>\n    <li>\n      Muscle cells: enable the heart's chambers to contract\n    </li>\n  </ul>\n\n\n\n  <p>\n  The human heart has four chambers: two upper chambers (the atria, fill with the blood returning to the heart from the body and lungs) and two lower ones (the ventricles, squirt out the blood to the body and lungs). A wall of muscle called the septum separates the two sides of the heart. A double-walled sac called the pericardium encases the heart, which protects it and maintains its position inside the chest. Between the outer layer, the parietal pericardium, and the inner layer, the serous pericardium, runs pericardial fluid, which lubricates the heart during contractions and movements of the lungs and diaphragm. The heart's outer wall consists of three layers. The outermost wall layer (epicardium) is the inner wall of the pericardium.  The middle layer (myocardium) contains the muscle that contracts. The inner layer (endocardium) is the lining that contacts the blood. The tricuspid valve and the mitral valve make up the atrioventricular (AV) valves, which connect the atria and the ventricles. The pulmonary semi-lunar valve separates the right ventricle from the pulmonary artery, and the aortic valve separates the left ventricle from the aorta. The heartstrings (chordae tendinae) anchor the valves to heart muscles. The sinoatrial node produces the electrical pulses that drive heart contractions.\n  </p>\n\n\n<p>\nThe human heart has four chambers: two upper chambers (the atria, fill with the blood returning to the heart from the body and lungs) and two lower ones (the ventricles, squirt out the blood to the body and lungs). A wall of muscle called the septum separates the two sides of the heart. A double-walled sac called the pericardium encases the heart, which protects it and maintains its position inside the chest. Between the outer layer, the parietal pericardium, and the inner layer, the serous pericardium, runs pericardial fluid, which lubricates the heart during contractions and movements of the lungs and diaphragm. The heart's outer wall consists of three layers. The outermost wall layer (epicardium) is the inner wall of the pericardium.  The middle layer (myocardium) contains the muscle that contracts. The inner layer (endocardium) is the lining that contacts the blood. The tricuspid valve and the mitral valve make up the atrioventricular (AV) valves, which connect the atria and the ventricles. The pulmonary semi-lunar valve separates the right ventricle from the pulmonary artery, and the aortic valve separates the left ventricle from the aorta. The heartstrings (chordae tendinae) anchor the valves to heart muscles. The sinoatrial node produces the electrical pulses that drive heart contractions.\n</p>\n\n\n<p>\nYour heart muscle is made of tiny cells. Your heart's electrical system controls the timing of your heartbeat by sending an electrical signal through these cells.Two different types of cells in your heart enable the electrical signal to control your heartbeat:\n</p>\n<p>\nThe electrical signal travels through the network of conducting cell \"pathways,\" which stimulates your upper chambers (atria) and lower chambers (ventricles) to contract. The signal is able to travel along these pathways by means of a complex reaction that allows each cell to activate one next to it, stimulating it to \"pass along\" the electrical signal in an orderly manner. As cell after cell rapidly transmits the electrical charge, the entire heart contracts in one coordinated motion, creating a heartbeat. First, the SA node (called the pacemaker of the heart) sends out an electrical impulse. Then, the upper heart chambers (atria) contract. The AV node then sends an impulse into the ventricles. Following this, the lower heart chambers (ventricles) contract or pump. Finally, the SA node sends another signal to the atria to contract, which starts the cycle over again. This cycle of an electrical signal followed by a contraction is one heartbeat.\n</p>\n\n<!--div>\n  <table>\n    <tr>\n      <td>\n<img align=\"left\" class=\"imgcss\" src=\"../../assets/heart.png\" style=\"width:670px;height:527px;\">\n<hr><hr>\n<ul align=\"left\">\n  <li>\n    Conducting cells: carry the heart’s electrical signal.\n  </li>\n  <li>\n    Muscle cells: enable the heart's chambers to contract\n  </li>\n</ul>\n</td>\n<td>\n  <p>\n  The human heart has four chambers: two upper chambers (the atria, fill with the blood returning to the heart from the body and lungs) and two lower ones (the ventricles, squirt out the blood to the body and lungs). A wall of muscle called the septum separates the two sides of the heart. A double-walled sac called the pericardium encases the heart, which protects it and maintains its position inside the chest. Between the outer layer, the parietal pericardium, and the inner layer, the serous pericardium, runs pericardial fluid, which lubricates the heart during contractions and movements of the lungs and diaphragm. The heart's outer wall consists of three layers. The outermost wall layer (epicardium) is the inner wall of the pericardium.  The middle layer (myocardium) contains the muscle that contracts. The inner layer (endocardium) is the lining that contacts the blood. The tricuspid valve and the mitral valve make up the atrioventricular (AV) valves, which connect the atria and the ventricles. The pulmonary semi-lunar valve separates the right ventricle from the pulmonary artery, and the aortic valve separates the left ventricle from the aorta. The heartstrings (chordae tendinae) anchor the valves to heart muscles. The sinoatrial node produces the electrical pulses that drive heart contractions.\n  </p>\n</td>\n</tr>\n</table>\n</div-->\n"

/***/ }),

/***/ "../../../../../src/app/components/aboutheart/aboutheart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutheartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutheartComponent = (function () {
    function AboutheartComponent() {
    }
    AboutheartComponent.prototype.ngOnInit = function () {
    };
    return AboutheartComponent;
}());
AboutheartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-aboutheart',
        template: __webpack_require__("../../../../../src/app/components/aboutheart/aboutheart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/aboutheart/aboutheart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutheartComponent);

//# sourceMappingURL=aboutheart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/aboutus/aboutus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    return AboutusComponent;
}());
AboutusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-aboutus',
        template: __webpack_require__("../../../../../src/app/components/aboutus/aboutus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/aboutus/aboutus.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);

//# sourceMappingURL=aboutus.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/ardc/ardc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ardc/ardc.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>What is ARVD/C?</h1>\n<p>\nAC is a rare form of cardiomyopathy in which the heart muscle of the right ventricle (RV) is replaced by fat and/or fibrous tissue. The right ventricle is dilated and contracts poorly. As a result, the ability of the heart to pump blood is usually weakened. Patients with ARVD often have arrhythmias (abnormal heart rhythms), which can increase the risk of sudden cardiac arrest or death. The cause of ARVD is unknown. It occurs in about 1 in 5,000 people. ARVD can occur with no family history, although often it runs in families. A family history of ARVD is present in at least 30 to 50 percent of cases. Researchers have found two patterns of inheritance for ARVD:\n</p>\n<ul>\n  <li>\n    <font><b>Autosomal dominant</b></font> - When one parent has ARVD. Studies show that in these families, the family members have a 50 percent chance of inheriting the condition, although the symptoms and age of onset may be different between family members. ARVD is more prevalent in some geographic locations, such as Italy.\n  </li>\n  <li>\n    <font><b>Autosomal recessive</b></font> - (Naxos disease) associated with a thickening of the outer layer of skin on the palms of the hands and soles of the feet (hyperkeratosis) and thick, \"wool-like\" hair.\n  </li>\n</ul>\n<p>\nNot all the specific genes have been identified as a cause for ARVD. Researchers are attempting to identify the specific gene mutations and locations of chromosomes associated with ARVD. ARVD may also be related to non-genetic causes such as congenital abnormalities (affecting the right ventricle), viral or inflammatory myocarditis.\n</p>\n<p>\n\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/ardc/ardc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArdcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArdcComponent = (function () {
    function ArdcComponent() {
    }
    ArdcComponent.prototype.ngOnInit = function () {
    };
    return ArdcComponent;
}());
ArdcComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ardc',
        template: __webpack_require__("../../../../../src/app/components/ardc/ardc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/ardc/ardc.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ArdcComponent);

//# sourceMappingURL=ardc.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Contact Us</h1>\n<p>\nTo contact us at The Superman Foundation, please email <strong><b>thesupermanfoundation@yahoo.com</b></strong> with any of your comments, questions, suggestions, or your own personal stories. Please leave your name, contact email/phone number, and we will get back to you as soon as we can!\n</p>\n<p>\n  Thank you for visiting The Superman Foundation website! We hope the information is beneficial to you!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/donate/donate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/donate/donate.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Donate</h1>\n<p>\n  To make a donation to Johns Hopkins, please follow the link below:\n</p>\n<ul>\n  <li>\n<a href=\"https://www.hopkinsmedicine.org/heart_vascular_institute/clinical_services/centers_excellence/arvd/gift/index.html \" target=\"_blank\">John Hopkins Donation Link</a>\n</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/donate/donate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonateComponent = (function () {
    function DonateComponent() {
    }
    DonateComponent.prototype.ngOnInit = function () {
    };
    return DonateComponent;
}());
DonateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-donate',
        template: __webpack_require__("../../../../../src/app/components/donate/donate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/donate/donate.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DonateComponent);

//# sourceMappingURL=donate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1.xxl {\r\n   line-height: .8;\r\n    color:red;\r\n    font-weight: bold;\r\n    font-family: inherit;\r\n    font-style: normal;\r\n    font-display: auto;\r\n    text-align: center;\r\n}\r\n\r\n.bg\r\n{\r\n    /* The image used */\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/1453148715_Human_Heart_Anatomy.jpg")) + ");\r\n\r\n    /* Full height */\r\n    /*height: 100%;*/\r\n\r\n\r\n    /* Center and scale the image nicely */\r\n\r\n    position:absolute;\r\n\r\n    top:200px;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size:auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome</h1>\n<p>\n  Welcome! The Superman Foundation was created in 2018 in order to help raise awareness of ARVD/C heart disease and to support the AC research program at Johns Hopkins University in Baltimore, MD, to develop new ARVD / ARVC treatments, improve screening and diagnosis of ARVD / ARVC, educate patients and physicians about ARVD / ARVC, and investigate efficacy of new medications and therapies.\n</p>\n<br>\n<h2>OUR MISSION: </h2>\n<ul>\n  <li>\n    Increasing awareness of ARVD/C heart disease\n  </li>\n  <li>\n    Supporting the ARVD/C the  research program at Johns Hopkins University in Baltimore, Maryland, that works to gain a better understanding of ARVD/C, and develop better ways of managing it.\n  </li>\n  <li>\n    Acting as an online source for those directly involved with ARVD/C can obtain helpful, current information about this heart disease.\n  </li>\n  <li>\n    Paying tribute to Jack Dowd, an amazing son, brother, and friend who passed away in 2017.\n  </li>\n  <li>\n    To advocate for placement of AEDs (automated external defibrillators) and mandatory heart testing for athletes (of all levels) to help prevent sudden cardiac death in children and adults.\n  </li>\n</ul>\n<p>\n  ARVC/D is a genetic, progressive, and extremely rare form of heart disease in which the muscular tissue of the right/left ventricle is replaced by fibrous/fatty tissue, which can cause abnormal heart rhythms. Although it is a relatively uncommon cause of sudden cardiac death, it accounts for up to one fifth of sudden cardiac death in people under 35 years of age.\n</p>\n<!--div class=\"container-fluid\">\n  <img align=\"center\" class=\"imgcss\" src=\"../../assets/1453148715_Human_Heart_Anatomy.jpg\" style=\"width:850px;height:630px;\"/>\n\n</div-->\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/howcan/howcan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/howcan/howcan.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  howcan works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/howcan/howcan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowcanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowcanComponent = (function () {
    function HowcanComponent() {
    }
    HowcanComponent.prototype.ngOnInit = function () {
    };
    return HowcanComponent;
}());
HowcanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-howcan',
        template: __webpack_require__("../../../../../src/app/components/howcan/howcan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/howcan/howcan.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HowcanComponent);

//# sourceMappingURL=howcan.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/johnhopkins/johnhopkins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imgcss {\r\n  margin-left:30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/johnhopkins/johnhopkins.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>About Johns Hopkins</h1>\n<h2>Why AC Research is Important</h2>\n<p>\nLittle is known about AC, and a lot needs to be done. Following the first descriptions and findings of AC in 1982, significant advances have been made in our understanding of all aspects of this disease. Continuing research is of paramount importance to improving treatment, life quality, and saving lives of those affected by AC. Research depends upon funding, and the competition for funding among various programs is intense and it is difficult to receive funding for a rare disease like AC. In short, there are insufficient funds available for AC programs to continue their research.\n</p>\n<h2>Why AC Research is Important</h2>\n<p>\n  Little is known about AC,\n  <img align=\"right\" class=\"imgcss\" src=\"../../assets/johnhopkins.png\" style=\"width:600px;height:400px;\">\n  and a lot needs to be done. Following the first descriptions and findings of AC in 1982, significant advances have been made in our understanding of all aspects of this disease. Continuing research is of paramount importance to improving treatment, life quality, and saving lives of those affected by AC. Research depends upon funding, and the competition for funding among various programs is intense and it is difficult to receive funding for a rare disease like AC. In short, there are insufficient funds available for AC programs to continue their research.\n</p>\n<h2>Why support AC?</h2>\n<p>\n  The progression of research and success of new developments of the AC research program at Johns Hopkins University is limited by the lack of funding. Private, individual donors are critical in keeping AC research alive on this often fatal disease. New clinical procedures, devices and medications are extending and saving lives, offering patients hope that was not available as much as a decade ago. Research on curative treatments are still in the preliminary stages despite the increase in knowledge of AC over the past few decades. By supporting research, you are partnering with other private donors/entities to help the battle against AC. You can be part of the group that ensures the progression of research goals and breakthroughs.\n</p>\n<p>\nA message from Hopkins:\n</p>\n<p>\n<i>The ARVD/C Program at the Johns Hopkins Heart and Vascular Institute. The Johns Hopkins Heart and Vascular Institute has the top ARVD/C Program in the country and is a world leader in the diagnosis, treatment, and research of this condition. Under the direction of Drs. Hugh Calkins and Hari Tandri, the program has seen over 2250 patients since its start in 1999. These patients and their families travel from all over the world to Johns Hopkins to receive an accurate diagnosis, treatment, genetic counseling, and family screening. Many return on a regular basis for lifelong care.\n</i>\n</p>\n<p>\n<i>\nCurrent research priorities for ARVD/C include: gene identification for the 30% of families with an elusive genetic mutation; further understanding the impact of exercise on disease progression and exploring whether there are safe levels of exercise that can be recommended; disease prevention for families who are at risk; and developing more advanced treatment regimens. Support the Johns Hopkins ARVD/C Program\n</i>\n</p>\n<p>\n  <i>\nIn spite of the international reputation of the Johns Hopkins ARVD/C Program, it is extremely challenging to acquire funding for this work. As a rare disease, large grants from public sources like the NIH are few and far between. Private philanthropy is vital to our success, but because the disease only affects a small portion of the population, there are few grateful patients and families able to make major contributions. We hope you will consider partnering with us as we seek new and improved treatments for our patients and, ultimately, a cure for ARVD/C. Your donation to our efforts will truly make a difference.\n</i>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/johnhopkins/johnhopkins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JohnhopkinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JohnhopkinsComponent = (function () {
    function JohnhopkinsComponent() {
    }
    JohnhopkinsComponent.prototype.ngOnInit = function () {
    };
    return JohnhopkinsComponent;
}());
JohnhopkinsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-johnhopkins',
        template: __webpack_require__("../../../../../src/app/components/johnhopkins/johnhopkins.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/johnhopkins/johnhopkins.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JohnhopkinsComponent);

//# sourceMappingURL=johnhopkins.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/living/living.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/living/living.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Living with AC</h1>\n<h2>AC and exercise</h2>\n<p>\nAn important recommendation for individuals with AC is exercise restriction. In some patients, exercise has been known to provoke arrhythmias, and sometimes can even lead to sudden cardiac death. Exercise, depending on the intensity and duration, as well as the progression of the disease in a particular patient, may accelerate progression (this is based on experimental data and clinical observations). It is not yet known what intensity of exercise is safe, and there appears to be an increased incidence of AC in young, very athletic individuals, especially men. Exercise is assumed to place additional strain on heart muscle connections that are already weak. So, it is recommended that competitive athletics and endurance sports should be restricted in patients with AC, and that patients should focus on mild aerobic exercise such as walking or playing golf. If higher levels of exercise are performed, depending on what your doctor says, it should be limited in duration and intensity as much as possible. It’s best to talk to your doctor about what types of exercise are right for you.\n</p>\n<h2>The Effects of Stimulants</h2>\n<p>\n  Patients who are prone to arrhythmias are generally advised to avoid stimulants of all kinds, such as nicotine and caffeine, Sudafed (pseudoephedrine), found in cold/flu medications.\n</p>\n<p>\n  <strong>\n    People with AC can get arrhythmias without taking stimulants or exposure to alcohol.\n  </strong>\n</p>\n<h2>Pregnancy and Gene Testing</h2>\n<p>\n  The decision of persons with AC to conceive a child is difficult and should be made on a case-by-case basis.\n</p>\n<p>\n  Although there is little information on pregnancy on patients with AC, women have had uncomplicated pregnancies, even with those who have an ICD or are taking medications. However, there are some medications that can harm the baby as it develops, so you will need to talk to your doctor to see if he/she would recommend that you switch medications temporarily. Pregnancy does put extra strain on the heart. If you are planning a pregnancy, or become pregnant, you should consult your cardiologist and obstetrician as soon as possible, and ask about medication options/delivery options, as well as monitoring of your heart during labor.\n</p>\n<p>\n  Once you have the mutation, there is a 50% chance that the mutation will be passed to a child.\n</p>\n<p>\n  Genetic testing is possible for a fetus. Some couples may request pre-natal diagnosis through amniocentesis at the beginning of the pregnancy to determine the genetic status of the fetus Some also consider terminating the pregnancy if the gene mutation is present, but ethical and legal issues apply in these situations. According to geneticists, even if a genetic test is positive in the fetus, it will not tell you the severity of the disease for the child. The gene may be present without doing damage or it could cause signs and/or symptoms of AC in the person once they get older.\n</p>\n<p>\n  Adoption, artificial insemination using donated mature eggs or sperm, and pre-implantation genetic diagnosis are alternatives/options.\n</p>\n<h2>Flu Vaccinations</h2>\n<p>\n  Patients who have a chronic health condition such as heart disease are more at risk for complications from the flu. Doctors usually recommend being vaccinated for both the seasonal flu swine flu (H1N1). These are separate vaccinations. If you have heart disease, get the shot, not the inhaled mist vaccine, as the shot contains killed virus (can’t make you sick), whereas the mist form contains a living, but weakened, live virus. You should also receive both vaccinations to reduce the odds getting an AC patient at risk if you are a family member/caregiver of the AC patient. Speak with your doctor immediately if you think you may be coming down with the flu. Seek emergency treatment if you have any of the following:\n</p>\n<ul>\n  <li>\n    Difficulty breathing/shortness of breath\n  </li>\n  <li>\n    Temperature over 101°F\n  </li>\n  <li>\n    Pain/pressure in the chest/abdomen\n  </li>\n  <li>\n    Sudden dizziness/confusion\n  </li>\n  <li>\n    Persistent/severe vomiting\n  </li>\n</ul>\n<h2>Long Term</h2>\n<p>\n  AC patients usually inquire about what will happen to their heart. Some patients will have bouts with arrhythmias that require changes in medications, procedures and/or ablations. The majority of people who stop doing strenuous exercise early on in the course of their AC diagnosis do quite well. Once arrhythmias are controlled, very few patients in the U.S. die from AC. The ICD offers protection from sudden cardiac death, and it is the most common form of treatment (currently).\n</p>\n<p>\nPatients may eventually develop heart failure and might require heart transplantation, but is extremely rare.\n</p>\n<p>\nThe progression of AC is usually slow. Currently, it is difficult to determine the progression of the disease in specific patients, which makes additional research extremely necessary, so that it will be possible to determine which AC patients are at high risk, or likely to be, for sudden cardiac arrest.\n</p>\n<p>\nThe long-term outlook for most AC patients is good. Individuals are currently being diagnosed with AC in a much earlier stage of the disease’s progression thanks to Thanks to improved cardiac imaging and genetic testing. Huge advances have been made in the understanding this disease since the first clinical diagnosis in 1982.\n</p>\n<p>\nToday, doctors believe that most people who die from AC weren’t diagnosed before their death. The diagnosis of AC cam come as surprise to some, and as an “ah-ha” moment for others, as these people have had a long history of symptoms that they were never able to understand. Either way, patients and their families may feel a sudden loss of well-being, as with any diagnosis of something of the sort, it takes time to adjust to the lifestyle, physical, emotional, and mental changes that accompany AC heart disease. People learn to deal with these issues and cope with the disease through exploring AC and learning that with proper medical care and a few lifestyle adjustments, they can live healthy and productive lives.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/living/living.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LivingComponent = (function () {
    function LivingComponent() {
    }
    LivingComponent.prototype.ngOnInit = function () {
    };
    return LivingComponent;
}());
LivingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-living',
        template: __webpack_require__("../../../../../src/app/components/living/living.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/living/living.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LivingComponent);

//# sourceMappingURL=living.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/moreinfo/moreinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".extlink\r\n{\r\n  color:darkblue;\r\n  font-size: 25px;\r\n}\r\n\r\n.extlinkspan {\r\n    line-height: 1.6;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/moreinfo/moreinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Learn More</h1>\n<br>\n<div class=\"container-fluid\">\n  <div class=\"row\" *ngFor=\"let externallink of extLinkList\">\n    <div class=\"col-lg-12\">\n      <span class=\"extlink\">\n        <a href=\"{{externallink.url}}\" target=\"_blank\">{{externallink.description}}</a>\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/moreinfo/moreinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreinfoComponent = (function () {
    function MoreinfoComponent() {
        this.externalLinkList = [
            "http://www.nrofoundation.org/contact.html",
            "https://www.councilofnonprofits.org/tools-resources/how-start-nonprofit-step-1-research",
            "http://smallbusiness.chron.com/differences-between-501c3-other-nonprofit-organizations-60190.html",
            "https://www.thebalance.com/why-do-i-need-a-business-plan-for-nonprofit-2502272 ",
            "https://www.bizfilings.com/toolkit/research-topics/incorporating-your-business/best-state-to-incorporate",
            "http://nonprofithub.org/starting-a-nonprofit/how-to-write-a-nonprofit-mission-statement",
            "https://www.nolo.com/legal-encyclopedia/form-nonprofit-eight-steps-29484.html",
            "https://www.njportal.com/DOR/BusinessFormation/CompanyInformation/BusinessName",
        ];
        this.extLinkList = [
            { description: 'Johns Hopkins - search ARVD/C', url: 'https://www.hopkinsmedicine.org' },
            { description: 'Sarver Heart Center at the University of Arizona - search ARVD/C', url: 'https://heart.arizona.edu' },
            { description: 'Organization in Colorado', url: 'http://arvdheart.org/arvd' },
            { description: 'ICD Information', url: 'http://www.medtronic.com/us-en/index.html/' },
            { description: 'Cleveland Clinic - Info about ARVD/C', url: 'https://my.clevelandclinic.org/health/diseases/16752-arrhythmogenic-right-ventricular-dysplasia-arvd' },
            { description: 'Cedars Sinai - Info about ARVD/C', url: 'ttps://www.cedars-sinai.org/health-library/diseases-and-conditions/a/arrhythmogenic-right-ventricular-dysplasia.html' },
        ];
    }
    MoreinfoComponent.prototype.ngOnInit = function () {
    };
    return MoreinfoComponent;
}());
MoreinfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-moreinfo',
        template: __webpack_require__("../../../../../src/app/components/moreinfo/moreinfo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/moreinfo/moreinfo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MoreinfoComponent);

//# sourceMappingURL=moreinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ndiv.around\r\n {\r\n   position: absolute;\r\n   top:20px;\r\n   left: 0;\r\n   right:0;\r\n  }\r\n\r\n\r\n\r\n.redcolor\r\n{\r\n  color:red;\r\n  font-weight: bold;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row;\r\n          flex-flow: row;\r\n  font-size: 90px;\r\n}\r\n\r\n\r\n\r\nspan\r\n{\r\n  font-family:sans-serif;\r\n  font-size:20px;\r\n}\r\n\r\n\r\n\r\na\r\n{\r\n  font-family:sans-serif;\r\n  font-size:25px;\r\n}\r\n\r\n\r\n\r\n.navfont\r\n{\r\n\r\n  font-family: 'Encode Sans Condensed', sans-serif;\r\n  font-size:25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid around w-75 p-3\" style=\"background-color:rgb(248, 248, 255);\">\n  <div class=\"container-fluid\">\n    <h1 align=\"center\" class=\"redcolor\"><font  face=\"Monotype Corsiva\">The Superman Fo</font><font  face=\"Monotype Corsiva\">undation</font></h1>\n    <!--i class=\"fab fa-gratipay\" style=\"font-size:100px;\"></i-->\n  </div>\n  <div class=\"container-fluid\">\n    <nav class=\"navbar navbar-light\" style=\"background-color:rgb(248, 248, 255);\">\n      <ul class=\"nav nav-pills nav-fill\" *ngFor=\"let navbarItem of navbarItemList\">\n        <li class=\"nav-item\" *ngIf=\"!navbarItem.dropdown\">\n          <a class=\"nav-link\" href=\"javascript:;\" routerLink=\"{{navbarItem.path}}\" routerLinkActive=\"active\">\n            <span class=\"mb-2 h5 navfont\">{{navbarItem.name}}</span>\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\n           <a class=\"nav-link dropdown-toggle\" *ngIf=\"navbarItem.dropdown\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n             {{navbarItem.name}}\n           </a>\n           <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n             <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let dropitem of navbarItem.dropdown\" routerLink=\"{{dropitem.path}}\">{{dropitem.name}}</a>\n           </div>\n         </li>\n      </ul>\n    </nav>\n    <div class=\"margincss\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.navbarItemList = [
            { name: "Home", path: "home" },
            { name: "About AC", path: "aboutus", dropdown: [
                    { name: "About the Human Heart", path: "heart" },
                    { name: "What is AC?", path: "arvd" },
                    { name: "Symptoms and Diagnosis", path: "symptom" },
                    { name: "Treatment", path: "treatment" },
                    { name: "Living with AC", path: "living" },
                ]
            },
            { name: "About Johns Hopkins", path: "ardc", dropdown: [
                    { name: "About Hopkins Research", path: "hopkins" },
                    { name: "Donate", path: "donate" },
                ]
            },
            //{name : "Donate", path : "howcan"},
            { name: "Jack's Story", path: "story" },
            { name: "Contact Us", path: "contact" },
            { name: "Learn More", path: "moreinfo" }
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var now = new Date();
        this.currentDate = now.toDateString();
        //this.navbarItemList[this.navbarItemList.length-1].name = this.currentDate;
        console.log(this.currentDate);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/story/story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".h1color {\r\n  color: #428bca;\r\n}\r\n\r\n.imgcss {\r\n  margin-left:30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/story/story.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div class=\"container-fluid\" style=\"background-color:rgb(248, 248, 255);\"-->\n  <h1>Jack's Story</h1>\n  <p>\n    Jack Bailey Clarence Dowd, <img align=\"right\" class=\"imgcss\" src=\"../../assets/JackCandid.PNG\" style=\"width:412px;height:537px;\">a 16 year old from Holmdel, New Jersey, passed away suddenly on September 17, 2017.\n    He was a student at Holmdel High School in his junior year. Jack was an amazing, smart, talented, athletic, and funny individual. He had a beautiful smile that could light up any room, and could somehow turn any bad situation into something positive and funny. He lived an extremely healthy lifestyle, which he worked very hard for on a daily basis. Throughout his high school career, he played on the football and lacrosse teams, and previously ran track as well.\n  </p>\n  <p>\n    Despite Jack’s active and healthy lifestyle, his heart disease claimed his life. His autopsy found that he had an undiagnosed heart condition called ARVD (arrhythmogenic right ventricular dysplasia.) The condition never manifested itself, and Jack’s heart condition went unnoticed. During a lacrosse game at Rutgers University, he collapsed on the field; his heart had given up.\n  </p>\n  <p>\n    Jack was my best friend. From first grade to junior year, having him as a neighbor had a huge impact on my life. He made me a better person, a better athlete, and a better friend. The memories I share with him compare to no others. My family and I had a strong connection with Jack, as if he was part of our family. I, being an only child, considered him like a brother.\n  </p>\n  <p>\n    The community of Holmdel is so thankful for the time we had with Jack. But, it was not long enough. My life has been forever changed since that day and I knew I had to do something. Jack had desires, hopes, and dreams he wanted to reach. He wanted to get accepted into prestigious colleges. He wanted to play on the varsity lacrosse team. He wanted to excel in school. He wanted to live just the way any kid wants to. I do not want Jack’s death be in vain; I want to keep his memory alive forever. I want to learn as much as I can about ARVC/D, and use this knowledge to help people and their families who suffer from ARVC/D. The hope is that no family or community has to endure the pain we have endured in Jack’s loss.\n  </p>\n<!--/div-->\n"

/***/ }),

/***/ "../../../../../src/app/components/story/story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoryComponent = (function () {
    function StoryComponent() {
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    return StoryComponent;
}());
StoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-story',
        template: __webpack_require__("../../../../../src/app/components/story/story.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/story/story.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StoryComponent);

//# sourceMappingURL=story.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/symptoms/symptoms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/symptoms/symptoms.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Symptoms and Diagnosis of AC</h1>\n<p>\n  The symptoms of AC are usually a result of an arrhythmia, or abnormal heart rhythm. Arrhythmias can be short or long lasting. In fact, many people don’t ever realize they have an arrhythmia.\n</p>\n<p>\n  There are a variety of symptoms signaling an abnormal heart rhythm; sometimes, people without AC can exhibit these symptoms. Some of these symptoms include racing/skipping and fluttering sensations (palpitations) in the chest and throat. Sometimes, lightheadedness and fainting (syncope) can occur if the change in rhythm is so fast that it makes it difficult for the heart to pump blood. An arrhythmia can also result in sudden death if the heart is excessively rapid (ventricular fibrillation) so that it cannot pump enough blood to its own muscle and to the lungs and body.\n</p>\n<p>\n  AC patients can develop symptoms of heart failure, in which the heart isn’t pumping enough blood, resulting in a backup of fluid in the body. Heart Failure symptoms include swelling of the legs, feet and abdomen, shortness of breath while lying down and/or exercising, as well as feelings of extreme fatigue, nausea or dizziness. These symptoms can vary from person to person. Some people may exhibit very few symptoms while others need medication/medical procedures to control the symptoms.\n</p>\n<p>\n  Besides arrhythmias/heart failure, other common symptoms of AC include:\n</p>\n<ul>\n  <li>\n    Premature Ventricular Contractions (PVC) – extra or irregular heartbeats that occur when the electrical signal starts in the lower chamber of the heart (the ventricle).\n  </li>\n  <li>\n    Ventricular Tachycardia (VT) – a series of rapid heartbeats, originating in the ventricle. This may last only a few beats or may continue and lead to life-threatening arrhythmias. VT can cause weakness, nausea, vomiting, and lightheadedness, as well as feeling a racing or skipping heart.\n  </li>\n  <li>\n    Syncope – Fainting or a sudden loss of consciousness.\n  </li>\n  <li>\n    Sudden cardiac arrest – Uncommonly, the first sign of ARVC/D is sudden cardiac arrest (SCA) where the heart stops beating and pumping blood to the rest of the body’s organs. This can result in death if not treated within minutes.\n  </li>\n</ul>\n<p>\nAC diagnosis is based on meeting a set of specific criteria that take into account electrocardiogram (ECG) abnormalities, arrhythmias, structural abnormalities and tissue characteristics, as well as family history and genetics. In 1994, an international task force proposed criteria for the clinical diagnosis of AC, based on these various categories. These criteria were very specific to AC, and were revised in 2010 and now incorporate advances in both technology and genetics. Information from ECGs, signal-averaged ECGs, exercise stress tests, Holter monitors, echocardiograms, MRIs, family history and genetic testing is important when applying the diagnostic criteria.\n</p>\n<p>\n  To see a comparison between the diagnosis procedure in 1994 and 2010, follow the link below:\n</p>\n<ul>\n  <li>\n<a href=\"https://www.hopkinsmedicine.org/heart_vascular_institute/clinical_services/centers_excellence/arvd/_pdf/arvd_checklist_comparison.pdf\" target=\"_blank\">AC Checklist Comparison</a>\n</li>\n</ul>\n<p>\n  AC is usually diagnosed at a young age (usually less than 40 years).\n</p>\n<p>\n  Despite new technological/genetics advancements, AC is often difficult to diagnose and usually requires several different tests. There is no single test that can determine whether an individual has AC. The initial evaluation of all patients suspected of having AC includes a physical exam, a detailed clinical history of arrhythmias or sudden death, and a number of cardiac tests to make a diagnosis.\n</p>\n<p>\n  Some initial non-invasive cardiac tests for AC include:\n</p>\n<ul>\n  <li>\n    Electrocardiogram (ECG)\n  </li>\n  <li>\n    Signal-Averaged Electrocardiogram (SAECG)\n</li>\n  <li>\n    24-hour Holter Monitor to detect abnormal heart rhythms\n  </li>\n  <li>\n    Echocardiogram of both ventricles\n  </li>\n  <li>\n    Exercise stress test\n  </li>\n  <li>\n    Cardiac Magnetic Resonance Imaging (Cardiac MRI) of both ventricles\n  </li>\n  <li>\n    Electrophysiology Study\n  </li>\n  <li>\n    Genetic Testing\n  </li>\n  <li>\n    Cardiac Computed Tomography (CT)\n  </li>\n  <li>\n    Right Ventriculogram (RV angiogram)\n  </li>\n  <li>\n    Cardiac Biopsy\n  </li>\n</ul>\n<p>\n  If non-invasive tests suggest AC but the diagnosis is still inconclusive, invasive cardiac testing such as an electrophysiology study, (EP study or test), contrast ventriculography, angiography, and/or a heart biopsy may be needed to confirm the diagnosis of AC. A cardiologist will evaluate the need for such tests to make a proper diagnosis.\n</p>\n<p>\n  It is recommended that all first-degree relatives (parents, siblings, and children of the individual with AC) of a person diagnosed with AC undergo non-invasive cardiac tests to check for signs of the disease. Genetic testing should also be considered. Second-degree relatives (grandparents, uncles, aunts, and cousins) don’t need cardiac testing unless they have symptoms.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/symptoms/symptoms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SymptomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SymptomsComponent = (function () {
    function SymptomsComponent() {
    }
    SymptomsComponent.prototype.ngOnInit = function () {
    };
    return SymptomsComponent;
}());
SymptomsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-symptoms',
        template: __webpack_require__("../../../../../src/app/components/symptoms/symptoms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/symptoms/symptoms.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SymptomsComponent);

//# sourceMappingURL=symptoms.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/treatment/treatment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/treatment/treatment.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Treatment for AC</h1>\n<h2>Medications</h2>\n<p>\n  Medications can be used to decrease the number of episodes and the severity of an arrhythmia, and alter the electrical properties of the heart in one of two ways:\n</p>\n<ol>\n  <li>\n    <strong>Directly:</strong> The medications affect the electrical currents in the heart.\n  </li>\n  <li>\n    <strong>Indirectly:</strong> Medications (beta blockers) block the effects of adrenaline or improve blood flow to the heart.\n  </li>\n</ol>\n<p>\n  Drugs used in AC treatment such as beta-blockers and antiarrhythmogenic agents (sotalol and amiodarone) are commonly used to reduce arrhythmias. Beta-blockers are sometimes used to slow the heart rate, blood pressure, and counter the effects of adrenaline, which seem to play a part in causing abnormal heart rhythms. Sotalol appears to be the most effective antiarrhythmic drug to prevent ventricular tachycardia in patients with AC. Amiodarone alone or in combination with beta-blocking drugs may be an alternative for those patients not responding to other drug therapies, but frequent side effects of amiodarone during long-term therapy in young patients limit this particular treatment. Beta-blockers and ACE­ Inhibitors are also used, as they have shown useful to slowing disease progression in other heart diseases. However, evidence of their effectiveness with AC is lacking. You must keep a close (professional) relationship with your doctor to monitor the effectiveness of your medications in controlling your arrhythmias.\n</p>\n\n<p>\n  <strong><i>\n  “Please keep in mind that all medications can cause side effects and that new medications are being developed every year.”\n</i></strong>\n</p>\n<h2>ICDs/Implantation</h2>\n<p>\n  Implantable cardioverter defibrillators (ICDs) are commonly used to treat AC patients. These devices continuously monitor the heartbeat and automatically deliver a small electrical shock to the heart if an irregular heartbeat or rapid sustained heart rhythm occurs. This may cause a momentary discomfort, which is described by some patients as being “kicked in the chest.”\n</p>\n<p>\n  ICDs also can function as pacemakers to treat both slow and fast rhythms. If for some reason a decision is made not to implant an ICD, very close monitoring and frequent checkups are needed for those individuals experiencing symptoms of AC.\n</p>\n<p>\n  Fun Fact: The implantation of ICDs for prevention of sudden death is more common in the\tUnited States than Europe.\n</p>\n<p>\n  The ICD is surgically implanted by making a 2-inch incision beneath the collarbone and creating a “pocket” for the device. Wires (leads) that are attached to the device are inserted into veins that lead to the heart. Doctors tests the effectiveness of an implanted ICD by triggering an  artificial abnormal heart rhythm to ensure that the ICD will detect and stop the abnormal heart rhythm. The surgery is done either as an outpatient surgery or an overnight surgery, and heavily depends on the age of the patient and the severity of their condition.\n</p>\n<p>\n  For a few days to weeks after surgery, you may experience pain, swelling, and/or tenderness in the area where the ICD was implanted. Your doctor will help you decide how soon you can resume your normal activities and what pain medications to take. Most people return to their normal activities within a few days of their surgery. Many patients note that they feel much more assurance and safety that the ICD will correct any abnormal rhythms if needed, and return to the lifestyle they enjoyed before surgery. Generally speaking, work, hobbies, non-strenuous exercise and travel are possible after ICD surgery.\n</p>\n<p>\n  ICDs should be checked every 3-6 months and usually replaced every 4-10 years, or if any complications arise. It’s extremely important to follow your doctor’s instructions after surgery. Since each person’s medical case is different, it’s best to discuss with your doctor if an ICD is the best treatment for you.\n</p>\n<h2>MRI’s for AC patients with ICDs</h2>\n<p>\n  A MRI can be used to detect many diseases such as cancer, orthopedic injuries, and more. Until recently, patients with ICDs were unable to have a MRI because of the risk of the MRI’s heat, vibrations and magnetic field causing the ICD to malfunction. Precautions can now be made by programming the ICD into a “safe” mode for the MRI. In case of any problems, the ICD is consistently monitored throughout the procedure. Following the MRI, the ICD is checked to make sure it’s working properly again.\n</p>\n<p><strong>\n  Many people can undergo the MRI safely, but more data is needed to make sure it would be safe for everyone.\n</strong></p>\n<p>\n  MRI’s are being performed in patients with ICDs in academic centers at present. Guidelines are being written so that non-academic centers will be able to conform in the future.\n</p>\n<h2>Catheter Ablation</h2>\n<p>\n  To treat AC with catheter ablation, the areas of the heart causing arrhythmias are located and cauterized (burned) to destroy the tissue. This invasive procedure is performed in an electrophysiology laboratory and potentially will reduce the frequency of arrhythmic episodes.\n</p>\n<p>\n  Traditional (endocardial) catheter ablation treats the muscle in the inside surface of the heart. An arhythmic area is pinpointed and cauterized by sending catheters through veins in the legs and followed up into the heart. Catheter ablation can help reduce the need for ICD therapy.\n</p>\n<p>\n  Recently, a promising ablation technique called epicardial ablation has been developed. In this technique, the outside of the heart is treated. Many AC arrhythmias come from the outside of the heart. This procedure is done by maneuvering the catheter under the breast bone and into the sac around the heart. Although this can be very effective at treating arrhythmias in ARVD/C patients, this is a complicated procedure.\n</p>\n<p>\n  Catheter ablation is not a final cure for AC due to its progressive nature. It is important for patients to have a careful discussion with their physicians about the risks and benefits of catheter ablation before undergoing this procedure.\n</p>\n<h2>Failure to Treat</h2>\n<p>\n  A minority of AC patients may need a heart transplant due to progressive loss of heart muscle, uncontrollable arrhythmias, and no other treatment is successful.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/treatment/treatment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreatmentComponent = (function () {
    function TreatmentComponent() {
    }
    TreatmentComponent.prototype.ngOnInit = function () {
    };
    return TreatmentComponent;
}());
TreatmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-treatment',
        template: __webpack_require__("../../../../../src/app/components/treatment/treatment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/treatment/treatment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TreatmentComponent);

//# sourceMappingURL=treatment.component.js.map

/***/ }),

/***/ "../../../../../src/assets/1453148715_Human_Heart_Anatomy.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1453148715_Human_Heart_Anatomy.d24c923993f75a193450.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map