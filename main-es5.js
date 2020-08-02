(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Euu":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/social-buttons/social-buttons.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Euu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button class=\"social\" *ngIf=\"isIosVisible\" expand=\"full\" color=\"dark\" (click)=\"onClick('apple')\">\r\n  <ion-icon name=\"logo-apple\"></ion-icon>\r\n  {{prefix}} with Apple\r\n</ion-button>\r\n<ion-button class=\"social\" expand=\"full\" color=\"danger\" (click)=\"onClick('google')\">\r\n  <ion-icon name=\"logo-google\"></ion-icon>\r\n  {{prefix}} with Google+\r\n</ion-button>";
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
      /*! F:\Workspace\_OFFICIAL_\BricSand\code\bricsand\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "5HwS":
    /*!**************************************************!*\
      !*** ./src/app/pages/forgot/forgot.component.ts ***!
      \**************************************************/

    /*! exports provided: ForgotComponent */

    /***/
    function HwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotComponent", function () {
        return ForgotComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      "kmKP");

      var ForgotComponent = /*#__PURE__*/function () {
        function ForgotComponent(formBuilder, router, user) {
          _classCallCheck(this, ForgotComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.user = user;
          this.userInputs = [{
            type: 'email',
            name: 'email',
            label: 'Email'
          }];
          this.isFormValid = true;
        }

        _createClass(ForgotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.forgotPasswordForm = this.formBuilder.group({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isFormValid = this.forgotPasswordForm.valid;

                      if (!this.isFormValid) {
                        _context.next = 8;
                        break;
                      }

                      _context.next = 4;
                      return this.validateEmail(this.forgotPasswordForm.value);

                    case 4:
                      this.isFormValid = _context.sent;

                      if (this.isFormValid) {
                        this.router.navigateByUrl('/reset-password');
                      } else {
                        this.errorText = 'Email not registered';
                      }

                      _context.next = 9;
                      break;

                    case 8:
                      this.errorText = 'Please enter valid email';

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // for demo purpose

        }, {
          key: "validateEmail",
          value: function validateEmail(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var user;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.user.getUser();

                    case 2:
                      user = _context2.sent;
                      return _context2.abrupt("return", user && form.email === user.email);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ForgotComponent;
      }();

      ForgotComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }];
      };

      ForgotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot.component.html */
        "DTN5"))["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])], ForgotComponent);
      /***/
    },

    /***/
    "9ZQG":
    /*!*****************************************************!*\
      !*** ./src/app/shared/pipes/valid-location.pipe.ts ***!
      \*****************************************************/

    /*! exports provided: ValidLocationPipe */

    /***/
    function ZQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidLocationPipe", function () {
        return ValidLocationPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ValidLocationPipe = /*#__PURE__*/function () {
        function ValidLocationPipe() {
          _classCallCheck(this, ValidLocationPipe);
        }

        _createClass(ValidLocationPipe, [{
          key: "transform",
          value: function transform(arr, input) {
            input = input.toLowerCase();

            if (arr) {
              var filteredArr = arr.filter(function (el) {
                return el.area.toLowerCase().includes(input) || el.pincode.toString().includes(input);
              });

              if (filteredArr.length) {
                return filteredArr;
              } else {
                return [{
                  errorMessage: 'Please choose another location'
                }];
              }
            } else {
              return null;
            }
          }
        }]);

        return ValidLocationPipe;
      }();

      ValidLocationPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'validLocation'
      })], ValidLocationPipe);
      /***/
    },

    /***/
    "A2A9":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/submit-button/submit-button.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A2A9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-text class=\"error\" color=\"danger\">\r\n  <strong>{{ errorText }}</strong>\r\n</ion-text>\r\n<ion-button expand=\"full\" type=\"submit\">{{ buttonText }}</ion-button>\r\n";
      /***/
    },

    /***/
    "AtC+":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/signin-wrapper/signin-wrapper.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AtC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\r\n  <div class=\"vertical-center\">\r\n    <div class=\"signin-wrapper\">\r\n      <strong>\r\n        <div class=\"heading\">{{ heading }}</div>\r\n      </strong>\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
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
    "CtIg":
    /*!********************************************************!*\
      !*** ./src/app/pages/location/location.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function CtIg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-text[color=primary] {\n  display: flex;\n  align-items: center;\n}\n\nion-list {\n  display: none;\n  position: absolute;\n  top: 36px;\n  max-height: 160px;\n  width: 100%;\n  padding: 0;\n  border: 1px solid #eee;\n  overflow-y: auto;\n  z-index: 1;\n}\n\nion-list::-webkit-scrollbar {\n  display: none;\n}\n\nion-list.is-visible {\n  display: block;\n}\n\nion-input.has-focus + ion-list {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFBRTtFQUNFLGFBQUE7QUFFSjs7QUFBRTtFQUNFLGNBQUE7QUFFSjs7QUFFRTtFQUNFLGNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRbY29sb3I9J3ByaW1hcnknXSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNnB4O1xyXG4gIG1heC1oZWlnaHQ6IDE2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgJi5pcy12aXNpYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5pb24taW5wdXQge1xyXG4gICYuaGFzLWZvY3VzICsgaW9uLWxpc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "DTN5":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function DTN5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-signin-wrapper heading=\"Forgot password\">\r\n  <ion-text class=\"centered\">Don’t worry! We’ll send you the password reset link.</ion-text>\r\n  <form appSubmitForm [formGroup]=\"forgotPasswordForm\" (formSubmitted)=\"submitForm()\" [class.has-error]=\"!isFormValid\">\r\n    <ion-input *ngFor=\"let input of userInputs\" [type]=\"input.type\" [formControlName]=\"input.name\">\r\n      <label>{{ input.label }}</label>\r\n    </ion-input>\r\n    <app-submit-button buttonText=\"Send reset link\" [errorText]=\"errorText\"></app-submit-button>\r\n  </form>\r\n</app-signin-wrapper>\r\n";
      /***/
    },

    /***/
    "FUJY":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/signin-wrapper/signin-wrapper.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SigninWrapperComponent */

    /***/
    function FUJY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninWrapperComponent", function () {
        return SigninWrapperComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SigninWrapperComponent = function SigninWrapperComponent() {
        _classCallCheck(this, SigninWrapperComponent);
      };

      SigninWrapperComponent.propDecorators = {
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      SigninWrapperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin-wrapper',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signin-wrapper.component.html */
        "AtC+"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signin-wrapper.component.scss */
        "xDly"))["default"]]
      })], SigninWrapperComponent);
      /***/
    },

    /***/
    "I8Dn":
    /*!******************************************************!*\
      !*** ./src/app/shared/classes/password-validator.ts ***!
      \******************************************************/

    /*! exports provided: PasswordValidator */

    /***/
    function I8Dn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
        return PasswordValidator;
      });

      var PasswordValidator = /*#__PURE__*/function () {
        function PasswordValidator() {
          _classCallCheck(this, PasswordValidator);
        }

        _createClass(PasswordValidator, null, [{
          key: "doesMatch",
          value: function doesMatch(control) {
            var password = control.get('password').value;
            var confirmPassword = control.get('confirmPassword').value;

            if (confirmPassword === '' || password !== confirmPassword) {
              control.get('confirmPassword').setErrors({
                MatchPassword: true
              });
            } else {
              control.get('confirmPassword').setErrors(null);
              return null;
            }
          }
        }]);

        return PasswordValidator;
      }();
      /***/

    },

    /***/
    "L9S8":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function L9S8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-signin-wrapper heading=\"Welcome, {{ userName }}\" (click)=\"detectClicks($event)\">\r\n  <ion-text>Your onboarding has been done, we need your location to get you the products you need!</ion-text>\r\n  <br /><br />\r\n  <ion-text color=\"primary\">\r\n    <ion-icon name=\"location\"></ion-icon>&nbsp;\r\n    <strong>Please enter your delivery location/pincode</strong>\r\n  </ion-text>\r\n  <form appSubmitForm [formGroup]=\"locationForm\" (formSubmitted)=\"submitForm()\" [class.has-error]=\"!isFormValid\">\r\n    <ion-input *ngFor=\"let input of userInputs\" [type]=\"input.type\" [formControlName]=\"input.name\">\r\n      <label>{{ input.label }}</label>\r\n    </ion-input>\r\n    <ion-list [class.is-visible]=\"areSuggestionsVisible\" lines=\"full\">\r\n      <ion-item\r\n        *ngFor=\"let location of locations | async | validLocation: locationForm.controls.location.value\"\r\n        (click)=\"pickLocation(location)\"\r\n      >\r\n        <ng-container *ngIf=\"location.errorMessage; else suggestedLocations\">\r\n          <ion-label>{{ location.errorMessage }}</ion-label>\r\n        </ng-container>\r\n        <ng-template #suggestedLocations>\r\n          <ion-label>{{ location.area }}</ion-label>\r\n          <ion-text>{{ location.pincode }}</ion-text>\r\n        </ng-template>\r\n      </ion-item>\r\n    </ion-list>\r\n    <app-submit-button buttonText=\"Set location\" [errorText]=\"errorText\"></app-submit-button>\r\n  </form>\r\n</app-signin-wrapper>\r\n";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "VzVu"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "ynWL"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
      /***/
    },

    /***/
    "TO76":
    /*!************************************************!*\
      !*** ./src/app/pages/reset/reset.component.ts ***!
      \************************************************/

    /*! exports provided: ResetComponent */

    /***/
    function TO76(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetComponent", function () {
        return ResetComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_classes_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/classes/password-validator */
      "I8Dn");
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      "kmKP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ResetComponent = /*#__PURE__*/function () {
        function ResetComponent(formBuilder, user, router) {
          _classCallCheck(this, ResetComponent);

          this.formBuilder = formBuilder;
          this.user = user;
          this.router = router;
          this.userInputs = [{
            type: 'password',
            name: 'password',
            label: 'Password'
          }, {
            type: 'password',
            name: 'confirmPassword',
            label: 'Confirm Password'
          }];
          this.isFormValid = true;
        }

        _createClass(ResetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resetPasswordForm = this.formBuilder.group({
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            }, {
              validators: src_app_shared_classes_password_validator__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].doesMatch
            });
            this.getEmail();
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.user.getUser();

                    case 2:
                      this.userEmail = _context3.sent.email;

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.isFormValid = this.resetPasswordForm.valid;

                      if (!this.isFormValid) {
                        _context4.next = 8;
                        break;
                      }

                      _context4.next = 4;
                      return this.checkNewPassword(this.resetPasswordForm.value);

                    case 4:
                      this.isFormValid = _context4.sent;

                      if (this.isFormValid) {
                        this.router.navigateByUrl('/signin');
                      } else {
                        this.errorText = 'Passwords could not be reset';
                      }

                      _context4.next = 9;
                      break;

                    case 8:
                      if (Object.values(this.resetPasswordForm.controls).filter(function (x) {
                        return x.errors;
                      }).length === 1 && this.resetPasswordForm.controls.confirmPassword.errors) {
                        this.errorText = 'Passwords do not match!';
                      } else {
                        this.errorText = 'Please enter new password';
                      }

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // for demo purpose

        }, {
          key: "checkNewPassword",
          value: function checkNewPassword(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", form.password.length >= 8);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }]);

        return ResetComponent;
      }();

      ResetComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ResetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./reset.component.html */
        "wHXg"))["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ResetComponent);
      /***/
    },

    /***/
    "Tdnt":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/http.service.ts ***!
      \*************************************************/

    /*! exports provided: HttpService */

    /***/
    function Tdnt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      "kmKP");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http, user, router, storage) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.user = user;
          this.router = router;
          this.storage = storage;
          this.baseURL = 'http://3.7.228.209:3000/';
          this.apiURL = 'http://3.7.228.209:3000/';
          this.dummyURL = 'assets/data/';
          this.token = '';
        }

        _createClass(HttpService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this2 = this;

            if (this.token === '') {
              this.storage.get('token').then(function (val) {
                if (val) {
                  console.log('Token from local storage', val);
                  _this2.token = val;
                }
              });
            }

            var apiReq = req.clone({
              url: req.url.endsWith('.json') ? this.dummyURL + req.url : this.apiURL + req.url
            });

            if (!req.url.includes('signin') && this.token) {
              apiReq = apiReq.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(this.token)
                }
              });
            }

            return next.handle(apiReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                if (event.body) {
                  if (event.body.rstatus === 0) {
                    if (event.body.message.includes('Your token has been expired')) {
                      _this2.token = '';

                      _this2.storage.remove('token');

                      setTimeout(function () {
                        _this2.router.navigateByUrl('signin');
                      }, 3000);
                    }

                    throw Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new Error(event.body.message));
                  }

                  var modifiedResponse = event.body.data;
                  var modEvent = event.clone({
                    body: modifiedResponse
                  });
                  return modEvent;
                }

                return event;
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                try {
                  console.log(err);

                  if (err.status === 401) {
                    _this2.token = '';

                    _this2.storage.remove('token');

                    _this2.router.navigateByUrl('signin'); // alert(err.statusText);

                  } else if (err.status === 500) {}
                } catch (e) {
                  console.log(e);
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
            }));
          }
        }, {
          key: "get",
          value: function get(path) {
            return this.http.get("".concat(this.dummyURL).concat(path));
          }
        }]);

        return HttpService;
      }();

      HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }];
      };

      HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])], HttpService);
      /***/
    },

    /***/
    "UE1v":
    /*!**************************************************!*\
      !*** ./src/app/pages/signin/signin.component.ts ***!
      \**************************************************/

    /*! exports provided: SigninComponent */

    /***/
    function UE1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      "kmKP");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(formBuilder, router, user, http, storage, authService) {
          _classCallCheck(this, SigninComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.user = user;
          this.http = http;
          this.storage = storage;
          this.authService = authService;
          this.userInputs = [{
            type: 'text',
            name: 'username',
            label: 'Email or Phone Number'
          }, {
            type: 'password',
            name: 'password',
            label: 'Password'
          }];
          this.isFormValid = true;
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signinForm = this.formBuilder.group({
              username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      // console.log('hello')
                      this.isFormValid = this.signinForm.valid;

                      if (this.isFormValid) {
                        // console.log('hey im valid');
                        // this.isFormValid = await this.signin(this.signinForm.value);
                        this.http.post('auth/sign_in', {
                          login: this.signinForm.value.username,
                          password: this.signinForm.value.password
                        }).subscribe(function (results) {
                          _this3.storage.set('token', results.token);

                          _this3.router.navigateByUrl('/');
                        }); // if (this.isFormValid) {
                        //   this.router.navigateByUrl('/');
                        // } else {
                        //   this.errorText = 'Invalid credentials';
                        // }
                      } else {
                        this.errorText = 'Please enter valid credentials';
                      }

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // for demo purpose
          // async signin(form: any): Promise<boolean> {
          //   const user = await this.user.getUser();
          //   if (user) {
          //     if (form.username === user.email || form.username === user.phoneNumber.toString()) {
          //       if (form.password === user.password) {
          //         console.log('Form value ', form.username, form.password);
          //         return true;
          //       }
          //     }
          //   }
          //   return false;
          // }
          // to be implemented

        }, {
          key: "socialSignin",
          value: function socialSignin(platform) {
            this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID);
            this.authService.authState.subscribe(function (user) {
              console.log('User ', user);
            });
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"]
        }];
      };

      SigninComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signin.component.html */
        "a/Uq"))["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"]])], SigninComponent);
      /***/
    },

    /***/
    "VoHv":
    /*!********************************************!*\
      !*** ./src/app/pages/otp/otp.component.ts ***!
      \********************************************/

    /*! exports provided: OtpComponent */

    /***/
    function VoHv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpComponent", function () {
        return OtpComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      "kmKP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var OtpComponent = /*#__PURE__*/function () {
        function OtpComponent(formBuilder, user, router) {
          _classCallCheck(this, OtpComponent);

          this.formBuilder = formBuilder;
          this.user = user;
          this.router = router;
          this.userInputs = [{
            type: 'number',
            name: 'otp',
            label: 'OTP'
          }];
          this.isFormValid = true;
        }

        _createClass(OtpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.otpVerificationForm = this.formBuilder.group({
              otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(\d{6})$/)])
            });
            this.getNumber();
          } // for demo purpose

        }, {
          key: "getNumber",
          value: function getNumber() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.user.getUser();

                    case 2:
                      this.userNumber = _context7.sent.phoneNumber;

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.isFormValid = this.otpVerificationForm.valid;

                      if (!this.isFormValid) {
                        _context8.next = 8;
                        break;
                      }

                      _context8.next = 4;
                      return this.checkOTP(this.otpVerificationForm.value);

                    case 4:
                      this.isFormValid = _context8.sent;

                      if (this.isFormValid) {
                        this.router.navigateByUrl('/set-location');
                      } else {
                        this.errorText = 'OTP is not valid';
                      }

                      _context8.next = 9;
                      break;

                    case 8:
                      this.errorText = 'Please enter the OTP received';

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          } // for demo purpose

        }, {
          key: "checkOTP",
          value: function checkOTP(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", this.userNumber.toString().endsWith(form.otp));

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return OtpComponent;
      }();

      OtpComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      OtpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./otp.component.html */
        "kdXk"))["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], OtpComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "XDh2":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/social-buttons/social-buttons.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SocialButtonsComponent */

    /***/
    function XDh2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialButtonsComponent", function () {
        return SocialButtonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SocialButtonsComponent = /*#__PURE__*/function () {
        function SocialButtonsComponent(platform) {
          _classCallCheck(this, SocialButtonsComponent);

          this.platform = platform;
          this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(SocialButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var platforms = this.platform.platforms();
            this.isIosVisible = platforms.includes('ios');
          }
        }, {
          key: "onClick",
          value: function onClick(platform) {
            this.clicked.emit(platform);
          }
        }]);

        return SocialButtonsComponent;
      }();

      SocialButtonsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      SocialButtonsComponent.propDecorators = {
        prefix: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      SocialButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social-buttons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./social-buttons.component.html */
        "+Euu"))["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], SocialButtonsComponent);
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/signin/signin.component */
      "UE1v");
      /* harmony import */


      var _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/forgot/forgot.component */
      "5HwS");
      /* harmony import */


      var _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/reset/reset.component */
      "TO76");
      /* harmony import */


      var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/signup/signup.component */
      "o97b");
      /* harmony import */


      var _pages_otp_otp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/otp/otp.component */
      "VoHv");
      /* harmony import */


      var _pages_location_location_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/location/location.component */
      "qmf3");
      /* harmony import */


      var _shared_components_signin_wrapper_signin_wrapper_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/components/signin-wrapper/signin-wrapper.component */
      "FUJY");
      /* harmony import */


      var _shared_components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/components/submit-button/submit-button.component */
      "sb0X");
      /* harmony import */


      var _shared_components_social_buttons_social_buttons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./shared/components/social-buttons/social-buttons.component */
      "XDh2");
      /* harmony import */


      var _shared_directives_submit_form_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./shared/directives/submit-form.directive */
      "dKAu");
      /* harmony import */


      var _shared_pipes_valid_location_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./shared/pipes/valid-location.pipe */
      "9ZQG");
      /* harmony import */


      var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./shared/services/http.service */
      "Tdnt");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__["ForgotComponent"], _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_13__["ResetComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"], _pages_otp_otp_component__WEBPACK_IMPORTED_MODULE_15__["OtpComponent"], _pages_location_location_component__WEBPACK_IMPORTED_MODULE_16__["LocationComponent"], _shared_components_signin_wrapper_signin_wrapper_component__WEBPACK_IMPORTED_MODULE_17__["SigninWrapperComponent"], _shared_components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_18__["SubmitButtonComponent"], _shared_components_social_buttons_social_buttons_component__WEBPACK_IMPORTED_MODULE_19__["SocialButtonsComponent"], _shared_directives_submit_form_directive__WEBPACK_IMPORTED_MODULE_20__["SubmitFormDirective"], _shared_pipes_valid_location_pipe__WEBPACK_IMPORTED_MODULE_21__["ValidLocationPipe"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_23__["IonicStorageModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_24__["SocialLoginModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        providers: [{
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [{
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_24__["GoogleLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_24__["GoogleLoginProvider"]('605933383346-v9b4vlgdsd8nscjt7edc5uchompfd6ru.apps.googleusercontent.com')
            }]
          }
        }, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _shared_services_http_service__WEBPACK_IMPORTED_MODULE_22__["HttpService"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "a/Uq":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function aUq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-signin-wrapper heading=\"Contractor sign in\">\r\n  <form appSubmitForm [formGroup]=\"signinForm\" (formSubmitted)=\"submitForm()\" [class.has-error]=\"!isFormValid\">\r\n    <ion-input *ngFor=\"let input of userInputs\" [type]=\"input.type\" [formControlName]=\"input.name\">\r\n      <label>{{ input.label }}</label>\r\n    </ion-input>\r\n    <app-submit-button buttonText=\"Sign in\" [errorText]=\"errorText\"></app-submit-button>\r\n  </form>\r\n  <ion-text routerLink=\"/forgot-password\">Forgot your password?</ion-text>\r\n  <div class=\"separator\">or</div>\r\n  <app-social-buttons prefix=\"Sign in\" (clicked)=\"socialSignin($event)\"></app-social-buttons>\r\n  <ion-text>Don't have an account?</ion-text>\r\n  <ion-button fill=\"outline\" routerLink=\"/create-new-account\">Sign up</ion-button>\r\n</app-signin-wrapper>\r\n";
      /***/
    },

    /***/
    "aTJU":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function aTJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-signin-wrapper heading=\"Contractor sign up\">\r\n  <form appSubmitForm [formGroup]=\"signupForm\" (formSubmitted)=\"submitForm()\" [class.has-error]=\"!isFormValid\">\r\n    <ion-input *ngFor=\"let input of userInputs\" [type]=\"input.type\" [formControlName]=\"input.name\">\r\n      <label>{{ input.label }}</label>\r\n    </ion-input>\r\n    <app-submit-button buttonText=\"Sign up\" [errorText]=\"errorText\"></app-submit-button>\r\n  </form>\r\n  <div class=\"separator\">or</div>\r\n  <app-social-buttons prefix=\"Sign up\" (clicked)=\"socialSignup($event)\"></app-social-buttons>\r\n  <ion-text>Already have an account?</ion-text>\r\n  <ion-button fill=\"outline\" routerLink=\"/signin\">Sign in</ion-button>\r\n</app-signin-wrapper>\r\n";
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/signin/signin.component */
      "UE1v");
      /* harmony import */


      var _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/forgot/forgot.component */
      "5HwS");
      /* harmony import */


      var _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/reset/reset.component */
      "TO76");
      /* harmony import */


      var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/signup/signup.component */
      "o97b");
      /* harmony import */


      var _pages_otp_otp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/otp/otp.component */
      "VoHv");
      /* harmony import */


      var _pages_location_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/location/location.component */
      "qmf3");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | contractor-contractor-module */
          "contractor-contractor-module").then(__webpack_require__.bind(null,
          /*! ./contractor/contractor.module */
          "qCnj")).then(function (m) {
            return m.ContractorModule;
          });
        }
      }, {
        path: 'signin',
        component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
      }, {
        path: 'forgot-password',
        component: _pages_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_4__["ForgotComponent"]
      }, {
        path: 'reset-password',
        component: _pages_reset_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResetComponent"]
      }, {
        path: 'create-new-account',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
      }, {
        path: 'verify-otp',
        component: _pages_otp_otp_component__WEBPACK_IMPORTED_MODULE_7__["OtpComponent"]
      }, {
        path: 'set-location',
        component: _pages_location_location_component__WEBPACK_IMPORTED_MODULE_8__["LocationComponent"]
      }, {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "dKAu":
    /*!************************************************************!*\
      !*** ./src/app/shared/directives/submit-form.directive.ts ***!
      \************************************************************/

    /*! exports provided: SubmitFormDirective */

    /***/
    function dKAu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubmitFormDirective", function () {
        return SubmitFormDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SubmitFormDirective = /*#__PURE__*/function () {
        function SubmitFormDirective() {
          _classCallCheck(this, SubmitFormDirective);

          this.formSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(SubmitFormDirective, [{
          key: "ngSubmit",
          value: function ngSubmit() {
            this.formSubmitted.emit();
          }
        }, {
          key: "keypress",
          value: function keypress(e) {
            if (e.code.endsWith('Enter')) {
              this.formSubmitted.emit();
            }
          }
        }]);

        return SubmitFormDirective;
      }();

      SubmitFormDirective.propDecorators = {
        formSubmitted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        ngSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['ngSubmit']
        }],
        keypress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['keypress', ['$event']]
        }]
      };
      SubmitFormDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSubmitForm]'
      })], SubmitFormDirective);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet-ios.entry.js": ["bnjm", "common", "stencil-ion-action-sheet-ios-entry-js"],
        "./ion-action-sheet-md.entry.js": ["utt2", "common", "stencil-ion-action-sheet-md-entry-js"],
        "./ion-alert-ios.entry.js": ["yaSn", "common", "stencil-ion-alert-ios-entry-js"],
        "./ion-alert-md.entry.js": ["2/RY", "common", "stencil-ion-alert-md-entry-js"],
        "./ion-app_8-ios.entry.js": ["iInF", "common", "stencil-ion-app_8-ios-entry-js"],
        "./ion-app_8-md.entry.js": ["K9Nc", "common", "stencil-ion-app_8-md-entry-js"],
        "./ion-avatar_3-ios.entry.js": ["hH1s", "common", "stencil-ion-avatar_3-ios-entry-js"],
        "./ion-avatar_3-md.entry.js": ["Jw9y", "common", "stencil-ion-avatar_3-md-entry-js"],
        "./ion-back-button-ios.entry.js": ["ouVF", "common", "stencil-ion-back-button-ios-entry-js"],
        "./ion-back-button-md.entry.js": ["/joy", "common", "stencil-ion-back-button-md-entry-js"],
        "./ion-backdrop-ios.entry.js": ["uJLv", "stencil-ion-backdrop-ios-entry-js"],
        "./ion-backdrop-md.entry.js": ["fSmE", "stencil-ion-backdrop-md-entry-js"],
        "./ion-button_2-ios.entry.js": ["s1jK", "common", "stencil-ion-button_2-ios-entry-js"],
        "./ion-button_2-md.entry.js": ["Wou7", "common", "stencil-ion-button_2-md-entry-js"],
        "./ion-card_5-ios.entry.js": ["qshq", "common", "stencil-ion-card_5-ios-entry-js"],
        "./ion-card_5-md.entry.js": ["Q1uX", "common", "stencil-ion-card_5-md-entry-js"],
        "./ion-checkbox-ios.entry.js": ["059i", "common", "stencil-ion-checkbox-ios-entry-js"],
        "./ion-checkbox-md.entry.js": ["eLfv", "common", "stencil-ion-checkbox-md-entry-js"],
        "./ion-chip-ios.entry.js": ["+FzG", "common", "stencil-ion-chip-ios-entry-js"],
        "./ion-chip-md.entry.js": ["yRpg", "common", "stencil-ion-chip-md-entry-js"],
        "./ion-col_3.entry.js": ["/CAe", "stencil-ion-col_3-entry-js"],
        "./ion-datetime_3-ios.entry.js": ["Z1Jy", "common", "stencil-ion-datetime_3-ios-entry-js"],
        "./ion-datetime_3-md.entry.js": ["X0Dk", "common", "stencil-ion-datetime_3-md-entry-js"],
        "./ion-fab_3-ios.entry.js": ["wvyA", "common", "stencil-ion-fab_3-ios-entry-js"],
        "./ion-fab_3-md.entry.js": ["NkKY", "common", "stencil-ion-fab_3-md-entry-js"],
        "./ion-img.entry.js": ["wHD8", "stencil-ion-img-entry-js"],
        "./ion-infinite-scroll_2-ios.entry.js": ["nf6t", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
        "./ion-infinite-scroll_2-md.entry.js": ["lg/V", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
        "./ion-input-ios.entry.js": ["sdJS", "common", "stencil-ion-input-ios-entry-js"],
        "./ion-input-md.entry.js": ["uQUw", "common", "stencil-ion-input-md-entry-js"],
        "./ion-item-option_3-ios.entry.js": ["Pa1g", "common", "stencil-ion-item-option_3-ios-entry-js"],
        "./ion-item-option_3-md.entry.js": ["KTnd", "common", "stencil-ion-item-option_3-md-entry-js"],
        "./ion-item_8-ios.entry.js": ["Z51p", "common", "stencil-ion-item_8-ios-entry-js"],
        "./ion-item_8-md.entry.js": ["8bam", "common", "stencil-ion-item_8-md-entry-js"],
        "./ion-loading-ios.entry.js": ["J3Yu", "common", "stencil-ion-loading-ios-entry-js"],
        "./ion-loading-md.entry.js": ["N3W9", "common", "stencil-ion-loading-md-entry-js"],
        "./ion-menu_3-ios.entry.js": ["IlGI", "common", "stencil-ion-menu_3-ios-entry-js"],
        "./ion-menu_3-md.entry.js": ["WHty", "common", "stencil-ion-menu_3-md-entry-js"],
        "./ion-modal-ios.entry.js": ["mgaC", "common", "stencil-ion-modal-ios-entry-js"],
        "./ion-modal-md.entry.js": ["EpFf", "common", "stencil-ion-modal-md-entry-js"],
        "./ion-nav_2.entry.js": ["vnES", "common", "stencil-ion-nav_2-entry-js"],
        "./ion-popover-ios.entry.js": ["Gdks", "common", "stencil-ion-popover-ios-entry-js"],
        "./ion-popover-md.entry.js": ["VgKV", "common", "stencil-ion-popover-md-entry-js"],
        "./ion-progress-bar-ios.entry.js": ["0PGG", "common", "stencil-ion-progress-bar-ios-entry-js"],
        "./ion-progress-bar-md.entry.js": ["h/Bu", "common", "stencil-ion-progress-bar-md-entry-js"],
        "./ion-radio_2-ios.entry.js": ["5bK7", "common", "stencil-ion-radio_2-ios-entry-js"],
        "./ion-radio_2-md.entry.js": ["pOmE", "common", "stencil-ion-radio_2-md-entry-js"],
        "./ion-range-ios.entry.js": ["5g9+", "common", "stencil-ion-range-ios-entry-js"],
        "./ion-range-md.entry.js": ["fD4w", "common", "stencil-ion-range-md-entry-js"],
        "./ion-refresher_2-ios.entry.js": ["CXux", "common", "stencil-ion-refresher_2-ios-entry-js"],
        "./ion-refresher_2-md.entry.js": ["RODS", "common", "stencil-ion-refresher_2-md-entry-js"],
        "./ion-reorder_2-ios.entry.js": ["IdzL", "common", "stencil-ion-reorder_2-ios-entry-js"],
        "./ion-reorder_2-md.entry.js": ["Ftzj", "common", "stencil-ion-reorder_2-md-entry-js"],
        "./ion-ripple-effect.entry.js": ["STjf", "stencil-ion-ripple-effect-entry-js"],
        "./ion-route_4.entry.js": ["k5eQ", "common", "stencil-ion-route_4-entry-js"],
        "./ion-searchbar-ios.entry.js": ["l0q3", "common", "stencil-ion-searchbar-ios-entry-js"],
        "./ion-searchbar-md.entry.js": ["mLlG", "common", "stencil-ion-searchbar-md-entry-js"],
        "./ion-segment_2-ios.entry.js": ["Iymp", "common", "stencil-ion-segment_2-ios-entry-js"],
        "./ion-segment_2-md.entry.js": ["3msy", "common", "stencil-ion-segment_2-md-entry-js"],
        "./ion-select_3-ios.entry.js": ["rYLK", "common", "stencil-ion-select_3-ios-entry-js"],
        "./ion-select_3-md.entry.js": ["WOXB", "common", "stencil-ion-select_3-md-entry-js"],
        "./ion-slide_2-ios.entry.js": ["F/Xn", "stencil-ion-slide_2-ios-entry-js"],
        "./ion-slide_2-md.entry.js": ["k8us", "stencil-ion-slide_2-md-entry-js"],
        "./ion-spinner.entry.js": ["nI0H", "common", "stencil-ion-spinner-entry-js"],
        "./ion-split-pane-ios.entry.js": ["edcM", "stencil-ion-split-pane-ios-entry-js"],
        "./ion-split-pane-md.entry.js": ["RyPD", "stencil-ion-split-pane-md-entry-js"],
        "./ion-tab-bar_2-ios.entry.js": ["DP4G", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
        "./ion-tab-bar_2-md.entry.js": ["gaXT", "common", "stencil-ion-tab-bar_2-md-entry-js"],
        "./ion-tab_2.entry.js": ["TpdJ", "common", "stencil-ion-tab_2-entry-js"],
        "./ion-text.entry.js": ["ISmu", "common", "stencil-ion-text-entry-js"],
        "./ion-textarea-ios.entry.js": ["xNZy", "common", "stencil-ion-textarea-ios-entry-js"],
        "./ion-textarea-md.entry.js": ["p1XJ", "common", "stencil-ion-textarea-md-entry-js"],
        "./ion-toast-ios.entry.js": ["XGfm", "common", "stencil-ion-toast-ios-entry-js"],
        "./ion-toast-md.entry.js": ["Y/uG", "common", "stencil-ion-toast-md-entry-js"],
        "./ion-toggle-ios.entry.js": ["WbT0", "common", "stencil-ion-toggle-ios-entry-js"],
        "./ion-toggle-md.entry.js": ["upP9", "common", "stencil-ion-toggle-md-entry-js"],
        "./ion-virtual-scroll.entry.js": ["8Mb5", "stencil-ion-virtual-scroll-entry-js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kdXk":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function kdXk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-signin-wrapper heading=\"Just a moment\">\r\n  <ion-text>\r\n    We need some important information from you so that you will get flawless experience throghout the app. We have sent you the OTP on the\r\n    mobile number:\r\n    <strong>{{ userNumber }}.&nbsp;</strong><br />\r\n    <ion-text color=\"primary\">Change number?</ion-text>\r\n  </ion-text>\r\n  <form appSubmitForm [formGroup]=\"otpVerificationForm\" (formSubmitted)=\"submitForm()\" [class.has-error]=\"!isFormValid\">\r\n    <ion-input *ngFor=\"let input of userInputs\" [type]=\"input.type\" [formControlName]=\"input.name\">\r\n      <label>{{ input.label }}</label>\r\n    </ion-input>\r\n    <app-submit-button buttonText=\"Verify OTP\" [errorText]=\"errorText\"></app-submit-button>\r\n  </form>\r\n</app-signin-wrapper>\r\n";
      /***/
    },

    /***/
    "kmKP":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/user.service.ts ***!
      \*************************************************/

    /*! exports provided: UserService */

    /***/
    function kmKP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

      var UserService = /*#__PURE__*/function () {
        function UserService() {
          _classCallCheck(this, UserService);

          this.closePopover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        } // this function must be called on app load


        _createClass(UserService, [{
          key: "fetchLocalStorage",
          value: function fetchLocalStorage() {
            var _this4 = this;

            this.getObject('user').then(function (user) {
              _this4.user = user ? user : null;
            });
            this.getObject('token').then(function (token) {
              _this4.token = token ? token.token : null;
            });
          }
        }, {
          key: "getUser",
          value: function getUser() {
            if (this.user) {
              return this.user;
            }
          }
        }, {
          key: "getToken",
          value: function getToken() {
            if (this.token) {
              return this.token;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            delete this.user;
            return true;
          } // async call to Storage APIs

        }, {
          key: "setUser",
          value: function setUser(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.user = user;
                      _context10.next = 3;
                      return this.setObject('user', user).then(function (response) {
                        return response;
                      });

                    case 3:
                      return _context10.abrupt("return", true);

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.token = token;
                      _context11.next = 3;
                      return this.setObject('user', token).then(function (response) {
                        return response;
                      });

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "getObject",
          value: function getObject(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var userStore;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return Storage.get({
                        key: key
                      });

                    case 2:
                      userStore = _context12.sent;
                      return _context12.abrupt("return", JSON.parse(userStore.value));

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));
          }
        }, {
          key: "setObject",
          value: function setObject(key, value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return Storage.set({
                        key: key,
                        value: JSON.stringify(value)
                      }).then(function (res) {
                        return true;
                      })["catch"](function (res) {
                        return false;
                      });

                    case 2:
                      return _context13.abrupt("return", _context13.sent);

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }, {
          key: "clear",
          value: function clear() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return Storage.clear();

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));
          }
        }]);

        return UserService;
      }();

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    },

    /***/
    "o97b":
    /*!**************************************************!*\
      !*** ./src/app/pages/signup/signup.component.ts ***!
      \**************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function o97b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_classes_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/classes/password-validator */
      "I8Dn");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      "kmKP");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(formBuilder, router, user, http, authService) {
          _classCallCheck(this, SignupComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.user = user;
          this.http = http;
          this.authService = authService;
          this.userInputs = [{
            type: 'text',
            name: 'first_name',
            label: 'First Name'
          }, {
            type: 'text',
            name: 'last_name',
            label: 'Last Name'
          }, {
            type: 'number',
            name: 'mobile',
            label: 'Phone number'
          }, {
            type: 'password',
            name: 'password',
            label: 'Password'
          }, {
            type: 'password',
            name: 'confirmPassword',
            label: 'Confirm password'
          }, {
            type: 'email',
            name: 'email',
            label: 'Email'
          }];
          this.isFormValid = true;
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signupForm = this.formBuilder.group({
              first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(\d{10})$/)]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            }, {
              validators: src_app_shared_classes_password_validator__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].doesMatch
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      this.isFormValid = this.signupForm.valid;

                      if (!this.isFormValid) {
                        _context15.next = 6;
                        break;
                      }

                      console.log({
                        first_name: this.signupForm.value.first_name,
                        last_name: this.signupForm.value.last_name,
                        mobile: this.signupForm.value.mobile,
                        email: this.signupForm.value.email,
                        user_type: 'buyer',
                        password: this.signupForm.value.password,
                        password_confirmation: this.signupForm.value.confirmPassword,
                        is_contractor: 'true'
                      });
                      this.http.post('auth', {
                        first_name: this.signupForm.value.first_name,
                        last_name: this.signupForm.value.last_name,
                        mobile: this.signupForm.value.mobile,
                        email: this.signupForm.value.email,
                        user_type: 'buyer',
                        password: this.signupForm.value.password,
                        password_confirmation: this.signupForm.value.confirmPassword,
                        is_contractor: 'true'
                      }).subscribe(function (results) {
                        console.log(results);

                        _this5.router.navigateByUrl('/signin');
                      }); // this.isFormValid = await this.signup(this.signupForm.value);
                      // if (this.isFormValid) {
                      //   this.router.navigateByUrl('/verify-otp');
                      // } else {
                      //   this.errorText = 'User could not be added';
                      // }

                      _context15.next = 7;
                      break;

                    case 6:
                      return _context15.abrupt("return", false);

                    case 7:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          } // for demo purpose

        }, {
          key: "signup",
          value: function signup(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      delete form.confirmPassword;
                      _context16.next = 3;
                      return this.user.setUser(form);

                    case 3:
                      return _context16.abrupt("return", _context16.sent);

                    case 4:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          } // to be implemented

        }, {
          key: "socialSignup",
          value: function socialSignup(platform) {
            this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID);
            this.authService.authState.subscribe(function (user) {
              console.log('User ', user);
            });
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"]
        }];
      };

      SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signup.component.html */
        "aTJU"))["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialAuthService"]])], SignupComponent);
      /***/
    },

    /***/
    "qmf3":
    /*!******************************************************!*\
      !*** ./src/app/pages/location/location.component.ts ***!
      \******************************************************/

    /*! exports provided: LocationComponent */

    /***/
    function qmf3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationComponent", function () {
        return LocationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/http.service */
      "Tdnt");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      "kmKP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LocationComponent = /*#__PURE__*/function () {
        function LocationComponent(http, formBuilder, user, router) {
          _classCallCheck(this, LocationComponent);

          this.http = http;
          this.formBuilder = formBuilder;
          this.user = user;
          this.router = router;
          this.userInputs = [{
            type: 'text',
            name: 'location',
            label: 'Location/Pincode'
          }];
          this.isFormValid = true;
          this.areSuggestionsVisible = false;
        }

        _createClass(LocationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.locations = this.http.get('locations.json');
            this.locationForm = this.formBuilder.group({
              location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
            });
            this.getUserName();
          } // for demo purpose

        }, {
          key: "getUserName",
          value: function getUserName() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.user.getUser();

                    case 2:
                      this.userName = _context17.sent.name;

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "pickLocation",
          value: function pickLocation(selection) {
            this.errorText = '';
            this.areSuggestionsVisible = false;
            this.locationForm.setValue({
              location: selection.area
            });
          }
        }, {
          key: "detectClicks",
          value: function detectClicks(event) {
            this.areSuggestionsVisible = event.target.nodeName === 'INPUT';
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      this.isFormValid = this.locationForm.valid;

                      if (!this.isFormValid) {
                        _context18.next = 8;
                        break;
                      }

                      _context18.next = 4;
                      return this.checkLocation(this.locationForm.value);

                    case 4:
                      this.isFormValid = _context18.sent;

                      if (!this.isFormValid) {
                        _context18.next = 8;
                        break;
                      }

                      this.router.navigateByUrl('/');
                      return _context18.abrupt("return", null);

                    case 8:
                      this.errorText = 'Please select a location from the dropdown';

                    case 9:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          } // for demo purpose

        }, {
          key: "checkLocation",
          value: function checkLocation(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var locations, isValid;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.locations.toPromise();

                    case 2:
                      locations = _context19.sent;
                      isValid = locations.filter(function (location) {
                        return location.area === form.location;
                      }).length === 1;
                      this.locationForm.controls.location.setErrors(!isValid ? {
                        isInvalid: true
                      } : null);
                      return _context19.abrupt("return", isValid);

                    case 6:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }]);

        return LocationComponent;
      }();

      LocationComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      LocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./location.component.html */
        "L9S8"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./location.component.scss */
        "CtIg"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], LocationComponent);
      /***/
    },

    /***/
    "sb0X":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/submit-button/submit-button.component.ts ***!
      \****************************************************************************/

    /*! exports provided: SubmitButtonComponent */

    /***/
    function sb0X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubmitButtonComponent", function () {
        return SubmitButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SubmitButtonComponent = function SubmitButtonComponent() {
        _classCallCheck(this, SubmitButtonComponent);
      };

      SubmitButtonComponent.propDecorators = {
        errorText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        buttonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      SubmitButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-submit-button',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./submit-button.component.html */
        "A2A9"))["default"]
      })], SubmitButtonComponent);
      /***/
    },

    /***/
    "wHXg":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function wHXg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-signin-wrapper heading=\"Forgot password\">\r\n  <ion-text class=\"centered\">\r\n    Resetting password for <br />\r\n    <ion-text color=\"primary\">\r\n      <strong>{{ userEmail }}</strong>\r\n    </ion-text>\r\n  </ion-text>\r\n  <form appSubmitForm [formGroup]=\"resetPasswordForm\" (formSubmitted)=\"submitForm()\" [class.has-error]=\"!isFormValid\">\r\n    <ion-input *ngFor=\"let input of userInputs\" [type]=\"input.type\" [formControlName]=\"input.name\">\r\n      <label>{{ input.label }}</label>\r\n    </ion-input>\r\n    <app-submit-button buttonText=\"Reset password\" [errorText]=\"errorText\"></app-submit-button>\r\n  </form>\r\n</app-signin-wrapper>\r\n";
      /***/
    },

    /***/
    "xDly":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/components/signin-wrapper/signin-wrapper.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function xDly(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  height: 100%;\n}\n\nion-content .vertical-center {\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n}\n\nion-content .vertical-center .signin-wrapper {\n  width: 100%;\n  max-width: 480px;\n  padding: 24px;\n}\n\n@media screen and (min-width: 480px) {\n  .signin-wrapper {\n    margin: 40px auto;\n    border-radius: 4px;\n    box-shadow: 0px 0px 8px 4px #eee;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lnbmluLXdyYXBwZXIvc2lnbmluLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUNJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNOOztBQUlBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0NBQUE7RUFERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lnbmluLXdyYXBwZXIvc2lnbmluLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLnZlcnRpY2FsLWNlbnRlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuc2lnbmluLXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgICAgcGFkZGluZzogMjRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnNpZ25pbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggNHB4ICNlZWU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
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