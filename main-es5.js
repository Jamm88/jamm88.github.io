(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+DhY":
    /*!*****************************************************!*\
      !*** ./src/app/components/about/about.component.ts ***!
      \*****************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function DhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../pipes/birth-day.pipe */
      "wJxl");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 59,
        vars: 3,
        consts: [[1, "about"], [1, "container"], [1, "row"], [1, "col-md"], [1, "blue-color"], [1, "col-md-4"], ["id", "imageProfile", "src", "/assets/img/perfil_jm.JPG", "alt", "J.Eduardo Castillo"], [1, "col-md-8", "bio"], [1, "col-sm-12", "col-md-6"], [1, "bio-details"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "opc_descarga"], ["mat-raised-button", "", "color", "pdf", "href", "https://drive.google.com/file/d/1zbEiDMAxX2yabhesxe-6CMkXrjR7i1pq/view?usp=sharing", "target", "_blank", 1, "download_button"], ["mat-raised-button", "", "color", "word", "href", "https://drive.google.com/file/d/1AgYMG8mrmuYlUCyKzDxzYhRqeHFs037n/view?usp=sharing", "target", "_blank", 1, "download_button"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Programador ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FullStack");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Trabajo desde el 2012 como desarrollador web con distintas tecnologias del backend y frontend. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Poseo habilidades en retoque fotogr\xE1fico y dise\xF1o gr\xE1fico con herramientas como Adobe Photoshop e Illustrator. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Trato de brindar la mayor creatividad a mis proyectos as\xED como la m\xE1xima funcionalidad posible.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Jos\xE9 Angel Martinez");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cumplea\xF1os:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 24/08/1988");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Edad:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "birthDay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Educacion:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Tecnico Superior Informatica");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ciudad:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Edo Miranda");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hobbies: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "sports_basketball");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "sports_esports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "sports_baseball");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Descargar CV ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ".pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Descargar CV ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ".docx");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 1, "1988/08/24"), "");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]],
        pipes: [_pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_3__["BirthDayPipe"]],
        styles: [".about[_ngcontent-%COMP%]{\n    padding: 20px 0 70px;\n}\n\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: bolder;\n}\n\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-weight: bolder;\n    padding-bottom: 10px;\n}\n\n.blue-color[_ngcontent-%COMP%]{\n    color: rgb(200, 108, 0);\n}\n\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: 14px;\n    padding-bottom: 20px;\n}\n\n.about[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\n    font-weight: 600;\n}\n\n#imageProfile[_ngcontent-%COMP%]{\n    width: 100%;\n    margin: auto;\n}\n\n.bio-details[_ngcontent-%COMP%]{\n    list-style: none;\n    padding: 0;\n    font-size: 14px;\n}\n\n.bio-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    padding: 12px 0;\n}\n\n.download_button[_ngcontent-%COMP%]{\n    width: 50%;\n}\n\n.download_button[_ngcontent-%COMP%]:hover{\n    text-decoration: none;\n}\n\n.opc_descarga[_ngcontent-%COMP%]{\n    height: 100%;\n    display: flex;\n    flex-flow: row;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.mat-pdf[_ngcontent-%COMP%]{\n    background-color: rgb(190, 0, 0);\n    color: #fff;\n}\n\n.mat-word[_ngcontent-%COMP%]{\n    background-color: rgb(24, 86, 202);\n    color: #fff;\n}\n\n@media (max-width:600px){\n    .bio-details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n        padding: 2px 0;\n    }\n    .about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n        font-weight: bolder;\n        padding: 15px 0px 0px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIscUJBQXFCO0lBQ3pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXR7XG4gICAgcGFkZGluZzogMjBweCAwIDcwcHg7XG59XG5cbi5hYm91dCAuYmlve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFib3V0IGgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmFib3V0IGgze1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYmx1ZS1jb2xvcntcbiAgICBjb2xvcjogcmdiKDIwMCwgMTA4LCAwKTtcbn1cbi5hYm91dCBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYWJvdXQgc3Ryb25ne1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4jaW1hZ2VQcm9maWxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5iaW8tZGV0YWlsc3tcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJpby1kZXRhaWxzIGxpe1xuICAgIHBhZGRpbmc6IDEycHggMDtcbn1cbi5kb3dubG9hZF9idXR0b257XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5kb3dubG9hZF9idXR0b246aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm9wY19kZXNjYXJnYXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LXBkZntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAwLCAwKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5tYXQtd29yZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDg2LCAyMDIpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCl7XG4gICAgLmJpby1kZXRhaWxzIGxpe1xuICAgICAgICBwYWRkaW5nOiAycHggMDtcbiAgICB9XG4gICAgLmFib3V0IGgze1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDBweCAwcHg7XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "/655":
    /*!***********************************************!*\
      !*** ./src/app/services/portfolio.service.ts ***!
      \***********************************************/

    /*! exports provided: PortfolioService */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioService", function () {
        return PortfolioService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioService = /*#__PURE__*/function () {
        function PortfolioService() {
          _classCallCheck(this, PortfolioService);

          this.proyects = [{
            name: "Topdetodo",
            description: "Página de recomendaciones y análisis sobre los mejores móviles, para que el usuario tenga la mejor decisión de compra.",
            imageUrl: "https://topdetodo.com/wp-content/uploads/2021/09/image.pagina.png",
            repoUrl: "",
            url: "https://topdetodo.com/",
            lenguajes: [{
              name: "PHP",
              version: "8",
              icon: ""
            }, {
              name: "TypeScript",
              version: "3.8",
              icon: ""
            }],
            frameworks: [{
              name: "Angular",
              version: 9,
              percent: 0,
              icon: ""
            }, {
              name: "Bootstrap",
              version: 4,
              percent: 0,
              icon: ""
            }]
          }];
        }

        _createClass(PortfolioService, [{
          key: "getPortfolio",
          value: function getPortfolio() {
            return this.proyects;
          }
        }]);

        return PortfolioService;
      }();

      PortfolioService.ɵfac = function PortfolioService_Factory(t) {
        return new (t || PortfolioService)();
      };

      PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PortfolioService,
        factory: PortfolioService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Family\Downloads\Curriculum\jesuseduaardo.github.io-develop\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "09j4":
    /*!************************************************!*\
      !*** ./src/app/services/habilities.service.ts ***!
      \************************************************/

    /*! exports provided: HabilitiesService */

    /***/
    function j4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HabilitiesService", function () {
        return HabilitiesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HabilitiesService = /*#__PURE__*/function () {
        function HabilitiesService() {
          _classCallCheck(this, HabilitiesService);

          this.java = {
            name: "Java",
            version: 8,
            icon: '../assets/img/pro-icon/icons8-java-50.png'
          };
          this.javaScript = {
            name: "JavaScript",
            version: "ES6",
            icon: '../assets/img/pro-icon/icons8-javascript-50.png'
          };
          this.php = {
            name: "PHP",
            version: 7,
            icon: '../assets/img/pro-icon/icons8-php-logo-50.png'
          };
          this.sql = {
            name: "SQL",
            version: 0,
            icon: '../assets/img/pro-icon/icons8-database-50.png'
          };
          this.html = {
            name: "Html",
            version: 5,
            icon: '../assets/img/pro-icon/icons8-html-5-50.png'
          };
          this.css = {
            name: "Css",
            version: 3,
            icon: '../assets/img/pro-icon/icons8-css3-50.png'
          };
          this.versionado = {
            name: "Versionado",
            version: 0,
            icon: '../assets/img/pro-icon/icons8-code-fork-50.png'
          };
          this.habilities = [{
            language: this.java,
            frameworks: [{
              name: "Java",
              icon: '../assets/img/pro-icon/icons8-java-50.png',
              version: 8,
              percent: 30
            }, {
              name: "SpringMVC",
              icon: '../assets/img/pro-icon/icons8-spring-logo-50.png',
              version: 5,
              percent: 35
            }, {
              name: "SpringBoot",
              icon: '../assets/img/pro-icon/icons8-spring-logo-50.png',
              version: 2,
              percent: 35
            }]
          }, {
            language: this.sql,
            frameworks: [{
              name: "MySql",
              icon: '../assets/img/pro-icon/mysql.png',
              version: 0,
              percent: 60
            }, {
              name: "MS SQL",
              icon: '../assets/img/pro-icon/ms_sql_icon.png',
              version: 0,
              percent: 38
            }, {
              name: "PL/SQL",
              icon: '../assets/img/pro-icon/icons8-oracle-logo-50.png',
              version: 0,
              percent: 26
            }]
          }, {
            language: this.javaScript,
            frameworks: [{
              name: "Javascript",
              icon: '../assets/img/pro-icon/icons8-javascript-50.png',
              version: 6,
              percent: 15
            }, {
              name: "jQuery",
              icon: '../assets/img/pro-icon/jquery.png',
              version: 3,
              percent: 40
            }, {
              name: "Angular",
              icon: '../assets/img/pro-icon/angular.png',
              version: 11,
              percent: 35
            }, {
              name: "Typescript",
              icon: '../assets/img/pro-icon/typescript.svg',
              version: 3,
              percent: 45
            }]
          }, {
            language: this.php,
            frameworks: [{
              name: "Laravel",
              icon: '../assets/img/pro-icon/laravel.png',
              version: 7,
              percent: 35
            }]
          }, {
            language: this.css,
            frameworks: [{
              name: "CSS",
              icon: '../assets/img/pro-icon/icons8-css3-50.png',
              version: 3,
              percent: 70
            }, {
              name: "Bootstrap",
              icon: '../assets/img/pro-icon/icons8-bootstrap-50.png',
              version: 4,
              percent: 65
            }]
          }, {
            language: this.versionado,
            frameworks: [{
              name: "GIT",
              icon: '../assets/img/pro-icon/icons8-git-50.png',
              version: 0,
              percent: 75
            }]
          }];
        }

        _createClass(HabilitiesService, [{
          key: "getHabilities",
          value: function getHabilities() {
            return this.habilities;
          }
        }]);

        return HabilitiesService;
      }();

      HabilitiesService.ɵfac = function HabilitiesService_Factory(t) {
        return new (t || HabilitiesService)();
      };

      HabilitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HabilitiesService,
        factory: HabilitiesService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HabilitiesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "1jp7":
    /*!*****************************************************!*\
      !*** ./src/app/components/skill/skill.component.ts ***!
      \*****************************************************/

    /*! exports provided: SkillComponent */

    /***/
    function jp7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
        return SkillComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SkillComponent_small_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("v.", ctx_r0.hability.language.version, "");
        }
      }

      function SkillComponent_div_5_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var framework_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" v.", framework_r2.version, "");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "width": a0
        };
      };

      function SkillComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillComponent_div_5_span_7_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var framework_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("react-icon", framework_r2.name === "Typescript")("bootstrap-icon", framework_r2.name === "Bootstrap")("javascript-icon", framework_r2.name === "Javascript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", framework_r2.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", framework_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", framework_r2.name + " v." + framework_r2.version + " = " + framework_r2.percent + "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, framework_r2.percent + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](framework_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", framework_r2.version !== 0);
        }
      }

      var SkillComponent = /*#__PURE__*/function () {
        function SkillComponent() {
          _classCallCheck(this, SkillComponent);

          this.tooltipPosition = 'above';
        }

        _createClass(SkillComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillComponent;
      }();

      SkillComponent.ɵfac = function SkillComponent_Factory(t) {
        return new (t || SkillComponent)();
      };

      SkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillComponent,
        selectors: [["app-skill"]],
        inputs: {
          hability: "hability"
        },
        decls: 6,
        vars: 5,
        consts: [[1, "hability-title"], [1, "img-thumbnail", 3, "src", "alt"], [4, "ngIf"], ["class", "framework-info", 4, "ngFor", "ngForOf"], [1, "framework-info"], [1, "progress", "my-1"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 3, "ngStyle", "title"]],
        template: function SkillComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillComponent_small_4_Template, 2, 1, "small", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillComponent_div_5_Template, 8, 14, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.hability.language.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.hability.language.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.hability.language.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hability.language.version !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hability.frameworks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: [".stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin: 0;\n}\n.stats[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n}\n.hability-title[_ngcontent-%COMP%]{\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    justify-content: center;\n}\n.hability-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    margin-left: 5px;\n}\n.hability-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 50px;\n    border:0\n}\n.framework-info[_ngcontent-%COMP%]{\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    width: 100%;\n}\n.framework-info[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{\n    height: 17px;\n    width: 100%;\n    border-radius: 0px 5px 5px 0px;\n}\n.framework-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 35px;\n    height: 35px;\n    border-radius: 5px 0px 0px 5px;\n}\n.react-icon[_ngcontent-%COMP%]{\n    background-color: #007acc;\n}\n.bootstrap-icon[_ngcontent-%COMP%]{\n    background-color: #6039a5;\n}\n.javascript-icon[_ngcontent-%COMP%]{\n    background-color: #ffd600;\n}\n.tooltipInfo[_ngcontent-%COMP%]{\n    background-color: #03a2ff;\n    position: relative;\n    top: 20px;\n    left: 50%;\n    font-size: 14px;\n}\n.info-percent[_ngcontent-%COMP%]{\n    position: absolute;\n    left: 89%;\n    font-size: 28px;\n    font-style: italic;\n    font-family: 'Krona One', sans-serif;\n    color:#d6d6d6\n}\n.progress-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    z-index: 3;\n    margin-bottom: 0;\n}\ni[_ngcontent-%COMP%]{\n    font-size: 30px;\n    padding: 0 10px;\n}\n@media (max-width: 600px) {\n    .info-percent[_ngcontent-%COMP%]{\n        left: 70%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbC9za2lsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDO0FBQ0o7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBRUE7SUFDSTtRQUNJLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9za2lsbC9za2lsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzIHB7XG4gICAgbWFyZ2luOiAwO1xufVxuLnN0YXRze1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5oYWJpbGl0eS10aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oYWJpbGl0eS10aXRsZSBoNXtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaGFiaWxpdHktdGl0bGUgaW1ne1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlcjowXG59XG4uZnJhbWV3b3JrLWluZm97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZnJhbWV3b3JrLWluZm8gLnByb2dyZXNze1xuICAgIGhlaWdodDogMTdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XG59XG5cbi5mcmFtZXdvcmstaW5mbyBpbWd7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbn1cblxuLnJlYWN0LWljb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FjYztcbn1cbi5ib290c3RyYXAtaWNvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjAzOWE1O1xufVxuLmphdmFzY3JpcHQtaWNvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNjAwO1xufVxuXG4udG9vbHRpcEluZm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTJmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uaW5mby1wZXJjZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4OSU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LWZhbWlseTogJ0tyb25hIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6I2Q2ZDZkNlxufVxuXG4ucHJvZ3Jlc3MtYmFyIHB7XG4gICAgei1pbmRleDogMztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pe1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5pbmZvLXBlcmNlbnR7XG4gICAgICAgIGxlZnQ6IDcwJTtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-skill',
            templateUrl: './skill.component.html',
            styleUrls: ['./skill.component.css']
          }]
        }], function () {
          return [];
        }, {
          hability: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "5gzz":
    /*!***************************************************************!*\
      !*** ./src/app/components/experience/experience.component.ts ***!
      \***************************************************************/

    /*! exports provided: ExperienceComponent */

    /***/
    function gzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
        return ExperienceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_experience_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/experience.service */
      "LUFc");
      /* harmony import */


      var _services_habilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/habilities.service */
      "09j4");
      /* harmony import */


      var _education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../education/education.component */
      "F7NT");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _skill_skill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../skill/skill.component */
      "1jp7");

      function ExperienceComponent_mat_expansion_panel_16_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", experience_r2.web, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.web);
        }
      }

      function ExperienceComponent_mat_expansion_panel_16_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Participacion en ", experience_r2.proyectos.length, " proyectos ");
        }
      }

      function ExperienceComponent_mat_expansion_panel_16_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, experience_r2.fechaEgreso, "MMM-y"));
        }
      }

      function ExperienceComponent_mat_expansion_panel_16_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actualidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ExperienceComponent_mat_expansion_panel_16_div_18_li_5_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tecnologia_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tecnologia_r15);
        }
      }

      function ExperienceComponent_mat_expansion_panel_16_div_18_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Conocimientos adquiridos o empleados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_mat_expansion_panel_16_div_18_li_5_li_10_Template, 2, 1, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var proyect_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyect_r13.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyect_r13.resumenProyecto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proyect_r13.tecnologias);
        }
      }

      function ExperienceComponent_mat_expansion_panel_16_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Proyectos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExperienceComponent_mat_expansion_panel_16_div_18_li_5_Template, 11, 3, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r2.proyectos);
        }
      }

      function ExperienceComponent_mat_expansion_panel_16_div_19_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tecnologia_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tecnologia_r18);
        }
      }

      function ExperienceComponent_mat_expansion_panel_16_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Conocimientos adquiridos o empleados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceComponent_mat_expansion_panel_16_div_19_li_7_Template, 2, 1, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.resumenProyecto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r2.tecnologias);
        }
      }

      function ExperienceComponent_mat_expansion_panel_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExperienceComponent_mat_expansion_panel_16_Template_mat_expansion_panel_opened_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.panelOpenState = true;
          })("closed", function ExperienceComponent_mat_expansion_panel_16_Template_mat_expansion_panel_closed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExperienceComponent_mat_expansion_panel_16_p_6_Template, 3, 2, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExperienceComponent_mat_expansion_panel_16_p_9_Template, 2, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-panel-description", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExperienceComponent_mat_expansion_panel_16_span_16_Template, 3, 4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExperienceComponent_mat_expansion_panel_16_span_17_Template, 2, 0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExperienceComponent_mat_expansion_panel_16_div_18_Template, 6, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ExperienceComponent_mat_expansion_panel_16_div_19_Template, 8, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsedHeight", "100px")("expandedHeight", "100px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.empresa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.web);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.puesto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 11, experience_r2.fechaIngreso, "MMM-y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.fechaEgreso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !experience_r2.fechaEgreso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length == 0 && experience_r2.resumenProyecto.length);
        }
      }

      function ExperienceComponent_app_skill_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skill", 28);
        }

        if (rf & 2) {
          var hability_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hability", hability_r23);
        }
      }

      var ExperienceComponent = /*#__PURE__*/function () {
        function ExperienceComponent(_experienceService, _habilitiesService) {
          _classCallCheck(this, ExperienceComponent);

          this._experienceService = _experienceService;
          this._habilitiesService = _habilitiesService;
          this.experiences = [];
          this.habilities = [];
        }

        _createClass(ExperienceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.experiences = this._experienceService.getExperience();
            this.habilities = this._habilitiesService.getHabilities();
          }
        }]);

        return ExperienceComponent;
      }();

      ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
        return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_experience_service__WEBPACK_IMPORTED_MODULE_1__["ExperienceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_habilities_service__WEBPACK_IMPORTED_MODULE_2__["HabilitiesService"]));
      };

      ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExperienceComponent,
        selectors: [["app-experience"]],
        decls: 26,
        vars: 2,
        consts: [[1, "experience"], [1, "container"], [1, "row"], [1, "col-12", "experience-title"], [1, "col-12", "col-md-6"], ["aria-hidden", "false", "aria-label", "empleos"], ["multi", "true"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col-md-12"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "stats"], [3, "hability", 4, "ngFor", "ngForOf"], [3, "opened", "closed"], [3, "collapsedHeight", "expandedHeight"], [1, "company-and-date"], ["class", "company-link", 4, "ngIf"], ["class", "cant-exp", 4, "ngIf"], [1, "fecha-ingreso-egreso"], [4, "ngIf"], ["class", "proyects-list", 4, "ngIf"], [1, "company-link"], ["target", "_blank", 3, "href"], [1, "cant-exp"], [1, "proyects-list"], [1, "proyects"], [4, "ngFor", "ngForOf"], [1, "tecnologies"], [3, "hability"]],
        template: function ExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mi experiencia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ultima actualizaci\xF3n 10/08/2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "keyboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Empleos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-accordion", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExperienceComponent_mat_expansion_panel_16_Template, 20, 14, "mat-expansion-panel", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "emoji_events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Skills Tecnicos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ExperienceComponent_app_skill_25_Template, 1, 1, "app-skill", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.habilities);
          }
        },
        directives: [_education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _skill_skill_component__WEBPACK_IMPORTED_MODULE_8__["SkillComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: [".fecha-ingreso-egreso[_ngcontent-%COMP%]{\n    flex-flow: row-reverse;\n}\n.experience[_ngcontent-%COMP%]{\n    padding: 20px 0 70px;\n}\n.experience-title[_ngcontent-%COMP%]{\n    margin-bottom: 25px;\n}\n.experience-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: bolder;\n}\n.experience-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{\n    display: block;\n    text-align: center;\n    margin: auto;\n}\nhr[_ngcontent-%COMP%]{\n    margin: 0.75em 0 0.75em 0;\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%], .panel-header-description[_ngcontent-%COMP%] {\n    color: rgba(0,0,0,.54);\n}\n.company-and-date[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-family: 'Montserrat', sans-serif;\n}\n.company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .company-and-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n    \n}\n.company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    color: rgb(0, 140, 255);\n}\n.company-and-date[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n    color: #4c4c4c;\n}\n.chronology-list[_ngcontent-%COMP%]{\n    list-style: none;\n    padding: 0;\n}\n.proyects[_ngcontent-%COMP%]{\n    padding-left: 0;\n    list-style: none;\n}\n.proyects-list[_ngcontent-%COMP%]{\n    color: #777777;\n}\n.proyects[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n    color: rgb(0, 140, 255);\n}\n.proyects[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\n    font-size: 14px;\n    text-decoration: underline;\n}\n.proyects[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 14px;\n}\n.proyects[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\n    padding-bottom: 0.5em;\n    margin-bottom: 0.5em;\n    border-bottom: 1px solid #e6e6e6;\n    background: #f5f5f5;\n    padding: 10px;\n}\n.proyects[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child{\n    border-bottom: 0;\n}\n.tecnologies[_ngcontent-%COMP%]{\n    color: #4b4b4b;\n}\n.tecnologies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\n    padding: 0 20px;\n}\n.tecnologies[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    font-family: monospace;\n    margin: 2px;\n}\n.data-card[_ngcontent-%COMP%]{\n    margin: 5px 0;\n}\n.cert[_ngcontent-%COMP%]{\n    width: 95px;\n    margin: auto;\n    display: block;\n}\n.text-muted[_ngcontent-%COMP%]{\n    font-size: 76%;\n}\n.card-body[_ngcontent-%COMP%]{\n    display: flex;\n    flex-flow: column;\n    align-items: flex-start;\n}\n.cant-exp[_ngcontent-%COMP%]{\n    margin-top: 0px;\n    color: #a5a5a5;\n}\n.company-link[_ngcontent-%COMP%]{\n    margin-top: -5px;\n    margin-bottom: 5px !important;\n}\n.company-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 12px;\n    line-height: 0;\n    color: #c5c5c5;\n}\n@-webkit-keyframes scale-up-hor-left {\n    0% {\n      transform: scaleX(0.4);\n      transform-origin: 0% 0%;\n    }\n    100% {\n      transform: scaleX(1);\n      transform-origin: 0% 0%;\n    }\n  }\n@keyframes scale-up-hor-left {\n    0% {\n      transform: scaleX(0.4);\n      transform-origin: 0% 0%;\n    }\n    100% {\n      transform: scaleX(1);\n      transform-origin: 0% 0%;\n    }\n  }\n@media (max-width: 600px) {\n    .mat-expansion-panel-header-title[_ngcontent-%COMP%]{\n        margin-right: 5px !important;\n    }\n    .mat-expansion-panel-header-description[_ngcontent-%COMP%]{\n        margin-right: 5px !important;\n        text-align: right;\n    }\n    .company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n        font-size: 1rem;\n    }\n    .percent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n        font-size: 0.6em;\n    }\n    h3[_ngcontent-%COMP%]{\n        margin: 15px 0;\n    }\n    .card-body[_ngcontent-%COMP%]{\n        text-align: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBRUE7SUFDSTtNQUNFLHNCQUFzQjtNQUN0Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLG9CQUFvQjtNQUNwQix1QkFBdUI7SUFDekI7RUFDRjtBQVRGO0lBQ0k7TUFDRSxzQkFBc0I7TUFDdEIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxvQkFBb0I7TUFDcEIsdUJBQXVCO0lBQ3pCO0VBQ0Y7QUFHRjtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWNoYS1pbmdyZXNvLWVncmVzb3tcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xufVxuLmV4cGVyaWVuY2V7XG4gICAgcGFkZGluZzogMjBweCAwIDcwcHg7XG59XG4uZXhwZXJpZW5jZS10aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmV4cGVyaWVuY2UtdGl0bGUgaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uZXhwZXJpZW5jZS10aXRsZSBlbXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5ocntcbiAgICBtYXJnaW46IDAuNzVlbSAwIDAuNzVlbSAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSwgLnBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcbn1cbi5jb21wYW55LWFuZC1kYXRle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cbi5jb21wYW55LWFuZC1kYXRlIGg1LCAuY29tcGFueS1hbmQtZGF0ZSBwe1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgXG59IFxuLmNvbXBhbnktYW5kLWRhdGUgaDV7XG4gICAgY29sb3I6IHJnYigwLCAxNDAsIDI1NSk7XG59XG5cbi5jb21wYW55LWFuZC1kYXRlIGg2e1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6ICM0YzRjNGM7XG59XG4uY2hyb25vbG9neS1saXN0e1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbn1cbi5wcm95ZWN0c3tcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnByb3llY3RzLWxpc3R7XG4gICAgY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5wcm95ZWN0cyBoNXtcbiAgICBjb2xvcjogcmdiKDAsIDE0MCwgMjU1KTtcbn1cbi5wcm95ZWN0cyBoNntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5wcm95ZWN0cyBwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm95ZWN0cyA+IGxpe1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm95ZWN0cyA+IGxpOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLnRlY25vbG9naWVze1xuICAgIGNvbG9yOiAjNGI0YjRiO1xufVxuLnRlY25vbG9naWVzIHVse1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbn1cbi50ZWNub2xvZ2llcyBsaXtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4uZGF0YS1jYXJke1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5cbi5jZXJ0e1xuICAgIHdpZHRoOiA5NXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi50ZXh0LW11dGVke1xuICAgIGZvbnQtc2l6ZTogNzYlO1xufVxuLmNhcmQtYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY2FudC1leHB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGNvbG9yOiAjYTVhNWE1O1xufVxuLmNvbXBhbnktbGlua3tcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG4uY29tcGFueS1saW5rIGF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGNvbG9yOiAjYzVjNWM1O1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWhvci1sZWZ0IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjQpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgICB9XG4gIH1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5jb21wYW55LWFuZC1kYXRlIGg1e1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5wZXJjZW50IHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgfVxuICAgIGgze1xuICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICB9XG4gICAgLmNhcmQtYm9keXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-experience',
            templateUrl: './experience.component.html',
            styleUrls: ['./experience.component.css']
          }]
        }], function () {
          return [{
            type: _services_experience_service__WEBPACK_IMPORTED_MODULE_1__["ExperienceService"]
          }, {
            type: _services_habilities_service__WEBPACK_IMPORTED_MODULE_2__["HabilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8SzB":
    /*!***********************************************!*\
      !*** ./src/app/services/education.service.ts ***!
      \***********************************************/

    /*! exports provided: EducationService */

    /***/
    function SzB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationService", function () {
        return EducationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EducationService = /*#__PURE__*/function () {
        function EducationService() {
          _classCallCheck(this, EducationService);

          this.educations = [{
            titulo: "Técnico Superior en Informatica (Analista de Sistemas)",
            institucion: "I.U.T.O Mariscal Sucre ",
            fechaInicio: "2007-07-01",
            fechaFin: "2012-07-01",
            certificacionUrl: "https://drive.google.com/open?id=0B_kPEZBn5CtldlYzTzBLOVpmRU0",
            duracion: 0
          }];
        }

        _createClass(EducationService, [{
          key: "getEducation",
          value: function getEducation() {
            return this.educations;
          }
        }]);

        return EducationService;
      }();

      EducationService.ɵfac = function EducationService_Factory(t) {
        return new (t || EducationService)();
      };

      EducationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EducationService,
        factory: EducationService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-typed-js */
      "pRTP");

      var _c0 = function _c0() {
        return ["Backend", "Frontend", "FullStack^3000"];
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 15,
        vars: 5,
        consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-md", "info"], [3, "strings", "typeSpeed", "backSpeed", "loop"], [1, "typing"], ["href", "https://www.linkedin.com/in/josea-martinezm", "target", "_blank"], ["id", "linkedin_icon", "src", "/assets/img/linkedin.svg", "alt", "LinkedIn"], [1, "col-md"], [1, "round-pic"], ["src", "/assets/img/perfil_jm.JPG", "alt", "Jos\xE9 Angel Martinez"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Jos\xE9 Angel Martinez");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-typed-js", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Programador ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("typeSpeed", 100)("backSpeed", 100)("loop", true);
          }
        },
        directives: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__["NgxTypedJsComponent"]],
        styles: [".content[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    padding: 5rem 0;\n}\n.info[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n.round-pic[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.round-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 95px;\n    width: 320px;\n    box-shadow: 3px 3px 3px #dadada, -3px -3px 3px #fafafa;\n}\n.typing[_ngcontent-%COMP%]{\n    color: rgb(200, 108, 0);\n}\n#linkedin_icon[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    width: 30px;\n}\n@media (max-width: 600px) {\n    .info[_ngcontent-%COMP%] {\n        text-align: center;\n        padding-bottom: 30px;\n    }\n    .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 2rem;\n    }\n    .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        font-size: 1.5rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzREFBc0Q7QUFDMUQ7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDVyZW0gMDtcbn1cbi5pbmZve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnJvdW5kLXBpY3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucm91bmQtcGljIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA5NXB4O1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjZGFkYWRhLCAtM3B4IC0zcHggM3B4ICNmYWZhZmE7XG59XG4udHlwaW5ne1xuICAgIGNvbG9yOiByZ2IoMjAwLCAxMDgsIDApO1xufVxuXG4jbGlua2VkaW5faWNvbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaW5mbyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIC5pbmZvIGgxe1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC5pbmZvIGgye1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "F7NT":
    /*!*************************************************************!*\
      !*** ./src/app/components/education/education.component.ts ***!
      \*************************************************************/

    /*! exports provided: EducationComponent */

    /***/
    function F7NT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
        return EducationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_education_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/education.service */
      "8SzB");
      /* harmony import */


      var _services_certifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/certifications.service */
      "bKGs");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EducationComponent_mat_expansion_panel_5_p_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var educ_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duracion: ", educ_r2.duracion, "Hrs");
        }
      }

      function EducationComponent_mat_expansion_panel_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function EducationComponent_mat_expansion_panel_5_Template_mat_expansion_panel_opened_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.panelOpenState = true;
          })("closed", function EducationComponent_mat_expansion_panel_5_Template_mat_expansion_panel_closed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-panel-description", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EducationComponent_mat_expansion_panel_5_p_13_Template, 2, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Ver Certificaci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var educ_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsedHeight", "100px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educ_r2.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educ_r2.institucion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, educ_r2.fechaFin, "MMM-y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", educ_r2.duracion > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", educ_r2.certificacionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function EducationComponent_div_10_p_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cert_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cert_r8.duracion, " horas");
        }
      }

      function EducationComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EducationComponent_div_10_p_11_Template, 3, 1, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cert_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", cert_r8.certificacionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", cert_r8.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", cert_r8.thumbnails, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r8.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r8.institucion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cert_r8.duracion > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r8.fechaFin);
        }
      }

      var EducationComponent = /*#__PURE__*/function () {
        function EducationComponent(_educationService, _certificationService) {
          _classCallCheck(this, EducationComponent);

          this._educationService = _educationService;
          this._certificationService = _certificationService;
          this.education = [];
          this.certifications = [];
        }

        _createClass(EducationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.education = this._educationService.getEducation();
            this.certifications = this._certificationService.getCertifications();
          }
        }]);

        return EducationComponent;
      }();

      EducationComponent.ɵfac = function EducationComponent_Factory(t) {
        return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_certifications_service__WEBPACK_IMPORTED_MODULE_2__["CertificationsService"]));
      };

      EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EducationComponent,
        selectors: [["app-education"]],
        decls: 11,
        vars: 2,
        consts: [["aria-hidden", "false", "aria-label", "Example home icon"], ["multi", "true"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-hidden", "false"], ["class", "card", "style", "max-width: 540px;", 4, "ngFor", "ngForOf"], [3, "opened", "closed"], [3, "collapsedHeight"], [1, "company-and-date"], [1, "fecha-ingreso-egreso"], [4, "ngIf"], ["target", "_blank", 3, "href"], [1, "card", 2, "max-width", "540px"], [1, "row", "no-gutters"], [1, "col-md-3"], ["target", "_blank", "title", "Ver Certificaci\xF3n", 3, "href"], [1, "card-img", "cert", 3, "src", "alt"], [1, "col-md-9"], [1, "card-body", "p-1"], [1, "card-title", "my-0", 2, "font-size", "16px"], [1, "card-text", "my-0", 2, "font-size", "14px"], ["class", "card-text my-0", 4, "ngIf"], [1, "card-text"], [1, "text-muted"], [1, "card-text", "my-0"]],
        template: function EducationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "school");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Educaci\xF3n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EducationComponent_mat_expansion_panel_5_Template, 16, 9, "mat-expansion-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Certificaciones\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EducationComponent_div_10_Template, 15, 7, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certifications);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [".fecha-ingreso-egreso[_ngcontent-%COMP%]{\n    flex-flow: row-reverse;\n}\n.experience[_ngcontent-%COMP%]{\n    padding: 20px 0 70px;\n}\n.experience-title[_ngcontent-%COMP%]{\n    margin-bottom: 25px;\n}\n.experience-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: bolder;\n}\n.experience-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{\n    display: block;\n    text-align: center;\n    margin: auto;\n}\nhr[_ngcontent-%COMP%]{\n    margin: 0.75em 0 0.75em 0;\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%], .panel-header-description[_ngcontent-%COMP%] {\n    color: rgba(0,0,0,.54);\n}\n.data-card[_ngcontent-%COMP%]{\n    margin: 5px 0;\n}\n.cert[_ngcontent-%COMP%]{\n    width: 95px;\n    margin: auto;\n    display: block;\n}\n.text-muted[_ngcontent-%COMP%]{\n    font-size: 76%;\n}\n.card-body[_ngcontent-%COMP%]{\n    display: flex;\n    flex-flow: column;\n    align-items: flex-start;\n}\n@-webkit-keyframes scale-up-hor-left {\n    0% {\n      transform: scaleX(0.4);\n      transform-origin: 0% 0%;\n    }\n    100% {\n      transform: scaleX(1);\n      transform-origin: 0% 0%;\n    }\n  }\n@keyframes scale-up-hor-left {\n    0% {\n      transform: scaleX(0.4);\n      transform-origin: 0% 0%;\n    }\n    100% {\n      transform: scaleX(1);\n      transform-origin: 0% 0%;\n    }\n  }\n@media (max-width: 600px) {\n    .mat-expansion-panel-header-title[_ngcontent-%COMP%]{\n        margin-right: 5px !important;\n    }\n    .mat-expansion-panel-header-description[_ngcontent-%COMP%]{\n        margin-right: 5px !important;\n        text-align: right;\n    }\n    .company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n        font-size: 1rem;\n    }\n    .percent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n        font-size: 0.6em;\n    }\n    h3[_ngcontent-%COMP%]{\n        margin: 15px 0;\n    }\n    .card-body[_ngcontent-%COMP%]{\n        text-align: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSTtNQUNFLHNCQUFzQjtNQUN0Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLG9CQUFvQjtNQUNwQix1QkFBdUI7SUFDekI7RUFDRjtBQVRGO0lBQ0k7TUFDRSxzQkFBc0I7TUFDdEIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxvQkFBb0I7TUFDcEIsdUJBQXVCO0lBQ3pCO0VBQ0Y7QUFHRjtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVjaGEtaW5ncmVzby1lZ3Jlc297XG4gICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcbn1cbi5leHBlcmllbmNle1xuICAgIHBhZGRpbmc6IDIwcHggMCA3MHB4O1xufVxuLmV4cGVyaWVuY2UtdGl0bGV7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5leHBlcmllbmNlLXRpdGxlIGgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmV4cGVyaWVuY2UtdGl0bGUgZW17XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuaHJ7XG4gICAgbWFyZ2luOiAwLjc1ZW0gMCAwLjc1ZW0gMDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0sIC5wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XG59XG5cbi5kYXRhLWNhcmR7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmNlcnR7XG4gICAgd2lkdGg6IDk1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRleHQtbXV0ZWR7XG4gICAgZm9udC1zaXplOiA3NiU7XG59XG4uY2FyZC1ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtdXAtaG9yLWxlZnQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuICAgIH1cbiAgfVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgLmNvbXBhbnktYW5kLWRhdGUgaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLnBlcmNlbnQgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgIH1cbiAgICAuY2FyZC1ib2R5e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-education',
            templateUrl: './education.component.html',
            styleUrls: ['./education.component.css']
          }]
        }], function () {
          return [{
            type: _services_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]
          }, {
            type: _services_certifications_service__WEBPACK_IMPORTED_MODULE_2__["CertificationsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "G2Gn":
    /*!*********************************************************!*\
      !*** ./src/app/components/contact/contact.component.ts ***!
      \*********************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function G2Gn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 27,
        vars: 0,
        consts: [[1, "contact"], [1, "container"], [1, "row"], [1, "col-12"], [1, "blue-color"], [1, "col-md-4", "contact-data"], ["src", "assets/img/geo.svg", "alt", "Ubicacion", "width", "50"], ["src", "assets/img/whatsapp.svg", "alt", "Whatsapp", "width", "50"], ["src", "assets/img/gmail.svg", "alt", "Gmail", "width", "50"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Jos\xE9 Angel Martinez");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Programador ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "FullStack");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Calle Teodosio Angelino, residencias Barcelona");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edo Miranda");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Venezuela");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+58 414 2555398");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "martinezjam.m88@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".contact[_ngcontent-%COMP%]{\n    vertical-align: middle;\n    padding: 20px 0 70px;\n}\n.blue-color[_ngcontent-%COMP%]{\n    color: rgb(200, 108, 0);\n}\n.col-12[_ngcontent-%COMP%]:first-of-type{\n    margin-bottom: 5rem;\n}\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: bolder;\n    padding: 0;\n    margin: 0;\n}\n.contact-data[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: center;\n}\n@media (max-width: 600px) {\n    .contact[_ngcontent-%COMP%]{\n        padding: 1rem 0 2rem;\n    }\n    .col-12[_ngcontent-%COMP%]:first-of-type{\n        margin-bottom: 1.5rem;\n    }\n    .contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n       font-size: 2em;\n    }\n    .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n        font-size: 1.5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtPQUNHLGNBQWM7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0e1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogMjBweCAwIDcwcHg7XG59XG4uYmx1ZS1jb2xvcntcbiAgICBjb2xvcjogcmdiKDIwMCwgMTA4LCAwKTtcbn1cbi5jb2wtMTI6Zmlyc3Qtb2YtdHlwZXtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLmNvbnRhY3QgaDEsIC5jb250YWN0IGgye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFjdC1kYXRhe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jb250YWN0e1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgMnJlbTtcbiAgICB9XG4gICAgLmNvbC0xMjpmaXJzdC1vZi10eXBle1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuICAgIC5jb250YWN0IGgxe1xuICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cbiAgICAuY29udGFjdCBoMntcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LUFc":
    /*!************************************************!*\
      !*** ./src/app/services/experience.service.ts ***!
      \************************************************/

    /*! exports provided: ExperienceService */

    /***/
    function LUFc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceService", function () {
        return ExperienceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExperienceService = /*#__PURE__*/function () {
        function ExperienceService() {
          _classCallCheck(this, ExperienceService);

          this.experience = [{
            empresa: "Arka Consultores",
            puesto: "Analista",
            fechaIngreso: "2019-11-05",
            fechaEgreso: "2020-02-03",
            proyectos: [],
            resumenProyecto: "Verificar y mantener el óptimo funcionamiento de los sistemas instalados, evaluar tendencias de software, garantizar el mantenimiento preventivo de hardware y software.",
            tecnologias: ["Java", "SpringBoot", "Sql", "jQuery"],
            web: ""
          },
          /*{
              empresa:"IT Resources S.A",
              puesto: "Programador Java",
              fechaIngreso: "2019-07-01",
              fechaEgreso: "2020-10-02",
              proyectos:[
                  {
                      nombre:"I+D - Kaiso App",
                      resumenProyecto:"Desarrollo de aplicacion web de soporte para personas con deterioro cognitivo",
                      tecnologias: ["Microsoft Azure Cognitive Services Face service", "JavaEE", "JHipster", "SpringBoot", "MySql", "Bootstrap4", "Angular9", "Git"]
                  },
                  {
                      nombre:"Legal Security",
                      resumenProyecto:"Mantenimiento y desarrollo evolutivo de la aplicacion iSecurity para la Empresa Legal Security",
                      tecnologias: ["JavaEE", "SpringMVC", "MySql", "Bootstrap3", "Javascript/jQuery", "Git/SVN"]
                  },
                  {
                      nombre:"Banco Santander",
                      resumenProyecto:"Desarrollo y mantenimiento de la aplicacion Portal del Banco Santander",
                      tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "jQuery", "Git/SVN"]
                  }
              ],
              resumenProyecto:"",
              tecnologias: [],
              web:"https://www.itrsa.com.ar/"
          },*/

          /*{
              empresa:"Eglam Argentina S.A",
              puesto: "Programador Backend",
              fechaIngreso: "2019-02-01",
              fechaEgreso: "2019-07-01",
              proyectos:[],
              resumenProyecto:"Gestión y desarrollo de modulos para e-commerces basados en Magento",
              tecnologias: ["PHP5", "Magento", "MySql", "Javascript/jQuery", "Git/SVN"],
              web:"https://www.glamit.com.ar/"
          },*/
          {
            empresa: "Hospital Cardiológico Infantil Latinoamericano Dr. Gilberto Rodríguez Ochoa",
            puesto: "Analista",
            fechaIngreso: "2012-09-06",
            fechaEgreso: "2019-10-29",
            proyectos: [],
            resumenProyecto: "Auditoría de sistemas de información, gestión de los sistemas internos, diseño y personalización de logos, sistemas operativos Windows, Linux, Ubuntu",
            tecnologias: ["PHP5", "Saint", "SIGESP", "RENAC"],
            web: ""
          }, {
            empresa: "Ministerio del Poder Popular para el Comercio",
            puesto: "Analista de Sistemas 1",
            fechaIngreso: "2011-04-01",
            fechaEgreso: "2012-06-01",
            proyectos: [],
            resumenProyecto: "Gestión y desarrollo al sistema interno, administración de varios dbms",
            tecnologias: ["PHP5", "MySql", "PostgreSql", "jQuery"],
            web: ""
          }];
        }

        _createClass(ExperienceService, [{
          key: "getExperience",
          value: function getExperience() {
            return this.experience;
          }
        }]);

        return ExperienceService;
      }();

      ExperienceService.ɵfac = function ExperienceService_Factory(t) {
        return new (t || ExperienceService)();
      };

      ExperienceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ExperienceService,
        factory: ExperienceService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RUEf":
    /*!*******************************!*\
      !*** ./src/app/app.routes.ts ***!
      \*******************************/

    /*! exports provided: app_routing */

    /***/
    function RUEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "app_routing", function () {
        return app_routing;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/about/about.component */
      "+DhY");
      /* harmony import */


      var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/experience/experience.component */
      "5gzz");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/portfolio/portfolio.component */
      "kBmi");

      var app_routes = [{
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: {
          animation: 'isRight'
        }
      }, {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        data: {
          animation: 'isLeft'
        }
      }, {
        path: 'experience',
        component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"],
        data: {
          animation: 'isRight'
        }
      }, {
        path: 'portfolio',
        component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"],
        data: {
          animation: 'isLeft'
        }
      }, {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
        data: {
          animation: 'isRight'
        }
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home'
      }];

      var app_routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(app_routes, {
        useHash: true
      });
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../route-animation */
      "qvUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'J. Eduardo CV online';
        }

        _createClass(AppComponent, [{
          key: "prepareRoute",
          value: function prepareRoute(outlet) {
            return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 1,
        consts: [[1, "main"], ["outlet", "outlet"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
        styles: [".main[_ngcontent-%COMP%]{\n    min-height:100vh;\n}\n\n@media(max-width:600px){\n    .main[_ngcontent-%COMP%]{\n        padding-bottom: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAubWFpbntcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxufSJdfQ== */"],
        data: {
          animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["fader"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["fader"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-typed-js */
      "pRTP");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/about/about.component */
      "+DhY");
      /* harmony import */


      var _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pipes/birth-day.pipe */
      "wJxl");
      /* harmony import */


      var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/experience/experience.component */
      "5gzz");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/portfolio/portfolio.component */
      "kBmi");
      /* harmony import */


      var _services_experience_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/experience.service */
      "LUFc");
      /* harmony import */


      var _services_education_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/education.service */
      "8SzB");
      /* harmony import */


      var _services_habilities_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./services/habilities.service */
      "09j4");
      /* harmony import */


      var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/portfolio.service */
      "/655");
      /* harmony import */


      var _app_routes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./app.routes */
      "RUEf");
      /* harmony import */


      var _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/skill/skill.component */
      "1jp7");
      /* harmony import */


      var _components_education_education_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/education/education.component */
      "F7NT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //Servicios
      //Rutas


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_experience_service__WEBPACK_IMPORTED_MODULE_18__["ExperienceService"], _services_education_service__WEBPACK_IMPORTED_MODULE_19__["EducationService"], _services_habilities_service__WEBPACK_IMPORTED_MODULE_20__["HabilitiesService"], _services_portfolio_service__WEBPACK_IMPORTED_MODULE_21__["PortfolioService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__["NgxTypedJsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _app_routes__WEBPACK_IMPORTED_MODULE_22__["app_routing"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_14__["BirthDayPipe"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioComponent"], _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_23__["SkillComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_24__["EducationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__["NgxTypedJsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_14__["BirthDayPipe"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioComponent"], _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_23__["SkillComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_24__["EducationComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__["NgxTypedJsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _app_routes__WEBPACK_IMPORTED_MODULE_22__["app_routing"]],
            providers: [_services_experience_service__WEBPACK_IMPORTED_MODULE_18__["ExperienceService"], _services_education_service__WEBPACK_IMPORTED_MODULE_19__["EducationService"], _services_habilities_service__WEBPACK_IMPORTED_MODULE_20__["HabilitiesService"], _services_portfolio_service__WEBPACK_IMPORTED_MODULE_21__["PortfolioService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bKGs":
    /*!****************************************************!*\
      !*** ./src/app/services/certifications.service.ts ***!
      \****************************************************/

    /*! exports provided: CertificationsService */

    /***/
    function bKGs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificationsService", function () {
        return CertificationsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CertificationsService = /*#__PURE__*/function () {
        function CertificationsService() {
          _classCallCheck(this, CertificationsService);

          this.certifications = [
            /*{
              titulo:"Liquibase Fundamentals Certification",
              institucion:"Liquibase University",
              fechaInicio:"2020-12-18",
              fechaFin:"2021-02-12",
              certificacionUrl:"https://www.credential.net/28060f9f-ebd1-4eea-a916-c5aaf81b67ef#gs.ta2u98",
              duracion:0,
              thumbnails:'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/28715111'
              
            },
            {
              titulo:"Programación Reactiva con Spring Boot 2 y Spring WebFlux",
              institucion:"Udemy",
              fechaInicio:"2020-12-18",
              fechaFin:"2021-01-01",
              certificacionUrl:"https://www.udemy.com/certificate/UC-e70f78d5-6756-4af2-8473-d80d15b668ba/",
              duracion:0,
              thumbnails:'/assets/img/certs/thumbnails/kafka-java-spring-aws_tn.jpg'
              
            },
            {
              titulo:"Apache Kafka con Java, Spring framework y AWS",
              institucion:"Udemy",
              fechaInicio:"2020-10-18",
              fechaFin:"2020-10-24",
              certificacionUrl:"https://www.udemy.com/certificate/UC-a78a1a84-0acc-47c9-8ae7-a458c1e67a95/",
              duracion:0,
              thumbnails:'/assets/img/certs/thumbnails/kafka-java-spring-aws_tn.jpg'
              
            },
            {
              titulo:"Angular (Basic) ",
              institucion:"HackerRank",
              fechaInicio:"2020-06-01",
              fechaFin:"2020-06-01",
              certificacionUrl:"https://www.hackerrank.com/certificates/bddba66b1683",
              duracion:0,
              thumbnails:'/assets/img/certs/thumbnails/hackerrank-angular(basic)_tn.jpg'
              
            },
            {
              titulo:"React (Basic) ",
              institucion:"HackerRank",
              fechaInicio:"2020-06-01",
              fechaFin:"2020-06-01",
              certificacionUrl:"https://www.hackerrank.com/certificates/86772c3ab8a4",
              duracion:0,
              thumbnails:'/assets/img/certs/thumbnails/hackerrank-react(basic)_tn.jpg'
              
            },
            {
              titulo:"JavaScript Algorithms and Data Structures",
              institucion:"FreeCodeCamp.org",
              fechaInicio:"2020-05-01",
              fechaFin:"2020-05-01",
              certificacionUrl:"https://www.freecodecamp.org/certification/jesuseduaardo/javascript-algorithms-and-data-structures",
              duracion:300,
              thumbnails:'/assets/img/certs/thumbnails/fcc-javascript_algorithms_tn.jpg'
            },
            {
              titulo:"Responsive Web Desing",
              institucion:"FreeCodeCamp.org",
              fechaInicio:"2018-01-01",
              fechaFin:"2018-08-01",
              certificacionUrl:"https://www.freecodecamp.org/certification/jesuseduaardo/responsive-web-design",
              duracion:300,
              thumbnails:'/assets/img/certs/thumbnails/fcc-resposive_web_design_tn.jpg'
            },
            {
              titulo:"ReactJS",
              institucion:"Educacion IT",
              fechaInicio:"2018-07-25",
              fechaFin:"2018-08-25",
              certificacionUrl:"https://alumni.education/user/diploma/codigo_diplo/191544/id_diploma/32403NI2R999E98J4314U5351VX4J4NF/",
              duracion:15,
              thumbnails:'/assets/img/certs/thumbnails/educacionit-reactjs_tn.jpg'
            }*/
          ];
        }

        _createClass(CertificationsService, [{
          key: "getCertifications",
          value: function getCertifications() {
            return this.certifications;
          }
        }]);

        return CertificationsService;
      }();

      CertificationsService.ɵfac = function CertificationsService_Factory(t) {
        return new (t || CertificationsService)();
      };

      CertificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CertificationsService,
        factory: CertificationsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var _c0 = function _c0() {
        return ["home"];
      };

      var _c1 = function _c1() {
        return ["about"];
      };

      var _c2 = function _c2() {
        return ["experience"];
      };

      var _c3 = function _c3() {
        return ["portfolio"];
      };

      var _c4 = function _c4() {
        return ["contact"];
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(router) {
          _classCallCheck(this, NavbarComponent);

          this.router = router;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigate",
          value: function navigate(url) {
            this.router.navigate(["/".concat(url)]);
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 39,
        vars: 10,
        consts: [[1, "container"], [1, "row"], [1, "nav-bar"], ["routerLinkActive", "active", 1, "nav-button", 3, "routerLink"], ["mat-icon-button", "", "id", "home-icon", "aria-label", "Inicio"], [1, "d-none", "d-md-block"], ["mat-icon-button", "", "id", "about-icon", "aria-label", "Example icon button with a home icon"], ["mat-icon-button", "", "id", "experience-icon", "aria-label", "Example icon button with a home icon"], ["mat-icon-button", "", "id", "contact-icon", "aria-label", "Example icon button with a home icon"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sobre mi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "grade");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Experiencia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Portafolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "local_post_office");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: [".nav-bar[_ngcontent-%COMP%]{\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n.nav-button[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    cursor: pointer;\n}\n.nav-button[_ngcontent-%COMP%]:focus{\n    outline: none;\n}\nnav[_ngcontent-%COMP%]{\n    position: fixed;\n    width: 100%;\n    background-color:rgba(255, 255, 255, 0.85);\n    box-shadow: 0px 2px 7px 2px #dadada;\n    left: 0;\n    bottom: -2.5em;\n    transition: bottom 1s;\n    color: #000000;\n}\nnav[_ngcontent-%COMP%]:hover{\n    bottom: 0em;\n}\n.active[_ngcontent-%COMP%]{\n    color: #c86c00;\n}\na[_ngcontent-%COMP%]:hover {\n    color: #c86c00;\n    text-decoration: underline;\n}\n@media (max-width:600px){\n    nav[_ngcontent-%COMP%]{\n        bottom: 0em;\n    }\n    nav[_ngcontent-%COMP%]:hover{\n        bottom: 0em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsbUNBQW1DO0lBQ25DLE9BQU87SUFDUCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm5hdi1idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdi1idXR0b246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbm5hdntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggN3B4IDJweCAjZGFkYWRhO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtMi41ZW07XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDFzO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5uYXY6aG92ZXJ7XG4gICAgYm90dG9tOiAwZW07XG59XG5cbi5hY3RpdmV7XG4gICAgY29sb3I6ICNjODZjMDA7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiAjYzg2YzAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCl7XG4gICAgbmF2e1xuICAgICAgICBib3R0b206IDBlbTtcbiAgICB9XG4gICAgbmF2OmhvdmVye1xuICAgICAgICBib3R0b206IDBlbTtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kBmi":
    /*!*************************************************************!*\
      !*** ./src/app/components/portfolio/portfolio.component.ts ***!
      \*************************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function kBmi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/portfolio.service */
      "/655");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function PortfolioComponent_mat_card_9_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", lang_r4.name, " ", lang_r4.version, "");
        }
      }

      function PortfolioComponent_mat_card_9_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var frame_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", frame_r5.name, " ", frame_r5.version, "");
        }
      }

      function PortfolioComponent_mat_card_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tecnologias aplicadas:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PortfolioComponent_mat_card_9_span_16_Template, 2, 2, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PortfolioComponent_mat_card_9_span_17_Template, 2, 2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Visitar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var proyect_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyect_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", proyect_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", proyect_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyect_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proyect_r1.lenguajes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proyect_r1.frameworks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", proyect_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent(_portafolioService) {
          _classCallCheck(this, PortfolioComponent);

          this._portafolioService = _portafolioService;
          this.portfolio = [];
        }

        _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.portfolio = this._portafolioService.getPortfolio();
          }
        }]);

        return PortfolioComponent;
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]));
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 10,
        vars: 1,
        consts: [[1, "portfolio"], [1, "container"], [1, "row"], [1, "col-12", "text-center"], ["class", "card mx-auto my-2", "style", "background-color: rgb(194, 194, 194);", 4, "ngFor", "ngForOf"], [1, "card", "mx-auto", "my-2", 2, "background-color", "rgb(194, 194, 194)"], [1, "header-text"], ["mat-card-image", "", 3, "src", "alt"], [1, "header-content"], ["class", "badge badge-primary mx-1", "style", "background-color: rgba(204, 192, 27, 0.938);", 4, "ngFor", "ngForOf"], ["class", "badge badge-success mx-1", "style", "background-color: rgb(224, 126, 44);", 4, "ngFor", "ngForOf"], [1, "actions"], ["target", "_blank", 1, "boton_visitar", 3, "href"], [1, "badge", "badge-primary", "mx-1", 2, "background-color", "rgba(204, 192, 27, 0.938)"], [1, "badge", "badge-success", "mx-1", 2, "background-color", "rgb(224, 126, 44)"]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portafolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Una muestra de proyectos que he realizado en mi tiempo libre con nuevas tecnolog\xEDas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PortfolioComponent_mat_card_9_Template, 22, 7, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolio);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"]],
        styles: [".portfolio[_ngcontent-%COMP%]{\n    padding: 20px 0 70px;\n}\n.portfolio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    text-align: center;\n    font-weight: bolder;\n    margin-bottom: 25px;\n}\n.card[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n.header-image[_ngcontent-%COMP%] {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n}\n.actions[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-around;\n}\n.boton_visitar[_ngcontent-%COMP%] {\n    color: #000000\n}\n.boton_visitar[_ngcontent-%COMP%]:hover {\n    color: #c86c00\n}\n.header-text[_ngcontent-%COMP%]{\n    width: 100%;\n    display: block;\n    text-align: center;\n}\n.header-content[_ngcontent-%COMP%]{\n    text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEI7QUFFRjtJQUNJLG1GQUFtRjtJQUNuRixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW97XG4gICAgcGFkZGluZzogMjBweCAwIDcwcHg7XG59XG4ucG9ydGZvbGlvIGgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgfVxuICBcbi5oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hY3Rpb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5ib3Rvbl92aXNpdGFyIHtcbiAgICBjb2xvcjogIzAwMDAwMFxufVxuXG4uYm90b25fdmlzaXRhcjpob3ZlciB7XG4gICAgY29sb3I6ICNjODZjMDBcbn1cblxuLmhlYWRlci10ZXh0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1jb250ZW50e1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-portfolio',
            templateUrl: './portfolio.component.html',
            styleUrls: ['./portfolio.component.css']
          }]
        }], function () {
          return [{
            type: _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qvUz":
    /*!********************************!*\
      !*** ./src/route-animation.ts ***!
      \********************************/

    /*! exports provided: fader, slider, transformer, stepper */

    /***/
    function qvUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fader", function () {
        return fader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "slider", function () {
        return slider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transformer", function () {
        return transformer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stepper", function () {
        return stepper;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic"); // Basic


      var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale(1) translateY(0)'
      }))])])]); // Positioned

      var slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', slideTo('left')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', slideTo('right')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', slideTo('left')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', slideTo('right'))]);
      var transformer = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', translateTo({
        x: -100,
        y: -100,
        rotate: -720
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', translateTo({
        x: 100,
        y: -100,
        rotate: 90
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', translateTo({
        x: -100,
        y: -100,
        rotate: 360
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', translateTo({
        x: 100,
        y: -100,
        rotate: -360
      }))]);

      function slideTo(direction) {
        var _Object;

        var optional = {
          optional: true
        };
        return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_Object = {
          position: 'absolute',
          top: 0
        }, _defineProperty(_Object, direction, 0), _defineProperty(_Object, "width", '100%'), _Object))], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(_defineProperty({}, direction, '-100%'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(_defineProperty({}, direction, '100%')))], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(_defineProperty({}, direction, '0%')))])])];
      }

      function translateTo(_ref) {
        var _ref$x = _ref.x,
            x = _ref$x === void 0 ? 100 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === void 0 ? 0 : _ref$y,
            _ref$rotate = _ref.rotate,
            rotate = _ref$rotate === void 0 ? 0 : _ref$rotate;
        var optional = {
          optional: true
        };
        return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: "translate(".concat(x, "%, ").concat(y, "%) rotate(").concat(rotate, "deg)")
        })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: "translate(".concat(x, "%, ").concat(y, "%) rotate(").concat(rotate, "deg)")
        }))], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: "translate(0, 0) rotate(0)"
        }))])])];
      } // Keyframes


      var stepper = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        left: 0,
        width: '100%'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0) translateX(100%)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0.5) translateX(25%)',
        offset: 0.3
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1) translateX(0%)',
        offset: 1
      })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0.5) translateX(-25%) rotate(0)',
        offset: 0.35
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'translateX(-50%) rotate(-180deg) scale(6)',
        offset: 1
      })]))])])])]);
      /***/
    },

    /***/
    "wJxl":
    /*!*****************************************!*\
      !*** ./src/app/pipes/birth-day.pipe.ts ***!
      \*****************************************/

    /*! exports provided: BirthDayPipe */

    /***/
    function wJxl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BirthDayPipe", function () {
        return BirthDayPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BirthDayPipe = /*#__PURE__*/function () {
        function BirthDayPipe() {
          _classCallCheck(this, BirthDayPipe);
        }

        _createClass(BirthDayPipe, [{
          key: "transform",
          value: function transform(value) {
            if (!value) {
              return value;
            }

            var today = new Date();
            var birthDate = new Date(value);
            console.log(value);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
              age--;
            }

            return age;
          }
        }]);

        return BirthDayPipe;
      }();

      BirthDayPipe.ɵfac = function BirthDayPipe_Factory(t) {
        return new (t || BirthDayPipe)();
      };

      BirthDayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "birthDay",
        type: BirthDayPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirthDayPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'birthDay'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map