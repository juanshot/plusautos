webpackJsonp([7],{"3Qem":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),t=u("BkNc"),o=u("bm2B"),r=function(){function l(l,n){var u,e;this.router=l,this.form=n.group({name:["",o.Validators.compose([o.Validators.required,o.Validators.minLength(3)])],email:["",o.Validators.compose([o.Validators.required,i])],password:["",o.Validators.required],confirmPassword:["",o.Validators.required]},{validator:(u="password",e="confirmPassword",function(l){var n=l.controls[u],t=l.controls[e];if(n.value!==t.value)return t.setErrors({mismatchedPasswords:!0})})}),this.name=this.form.controls.name,this.email=this.form.controls.email,this.password=this.form.controls.password,this.confirmPassword=this.form.controls.confirmPassword}return l.prototype.onSubmit=function(l){this.form.valid&&(console.log(l),this.router.navigate(["/login"]))},l.ctorParameters=function(){return[{type:t.k},{type:o.FormBuilder}]},l}();function i(l){if(l.value&&!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(l.value))return{invalidEmail:!0}}var a=function(){return function(){}}(),d=u("qbdv"),s=[['\n\n\n\n\n\n\nbody:after{content:\'{"main-color":"#2E0502","default-color":"#fff","dark-color":"#000","primary-color":"#024a88","success-color":"#2d922d","warning-color":"#f79a17","danger-color":"#bf1725","info-color":"#248dad","sidebar-bg-color":"#640D05","gray":"#555","gray-light":"#ccc"}\';display:none}.register-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;position:absolute}.register-container .card{padding:15px}.register-container .card .btn-link{padding:0}.register-container .card .btn-link:hover{color:#2e0502}.register-container .card .terms{font-size:13px}']],c=e["\u0275crt"]({encapsulation:2,styles:s,data:{}});function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Full Name is required"]))],null,null)}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Minimum of 3 characters"]))],null,null)}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,7,"span",[["class","help-block"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                            "])),(l()(),e["\u0275and"](8388608,null,null,1,null,g)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["\n                            "])),(l()(),e["\u0275and"](8388608,null,null,1,null,f)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["\n                        "]))],function(l,n){var u=n.component;l(n,3,0,u.form.get("name").hasError("required")),l(n,6,0,u.form.get("name").hasError("minlength"))},null)}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Email is required"]))],null,null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Invalid email address"]))],null,null)}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,7,"span",[["class","help-block"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                            "])),(l()(),e["\u0275and"](8388608,null,null,1,null,p)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["\n                            "])),(l()(),e["\u0275and"](8388608,null,null,1,null,v)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["\n                        "]))],function(l,n){var u=n.component;l(n,3,0,u.form.get("email").hasError("required")),l(n,6,0,u.form.get("email").hasError("invalidEmail"))},null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Password is required"]))],null,null)}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Password isn't long enough, minimum of 6 characters"]))],null,null)}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,7,"span",[["class","help-block"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                            "])),(l()(),e["\u0275and"](8388608,null,null,1,null,_)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["\n                            "])),(l()(),e["\u0275and"](8388608,null,null,1,null,C)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["\n                        "]))],function(l,n){var u=n.component;l(n,3,0,u.form.get("password").hasError("required")),l(n,6,0,u.form.get("password").hasError("minlength"))},null)}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Confirm Password is required"]))],null,null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Passwords do not match"]))],null,null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,7,"span",[["class","help-block"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                            "])),(l()(),e["\u0275and"](8388608,null,null,1,null,I)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["\n                            "])),(l()(),e["\u0275and"](8388608,null,null,1,null,R)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["\n                        "]))],function(l,n){var u=n.component;l(n,3,0,u.form.get("confirmPassword").hasError("required")),l(n,6,0,u.form.get("confirmPassword").hasError("mismatchedPasswords"))},null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,92,"div",[["class","register-container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n    "])),(l()(),e["\u0275eld"](0,null,null,89,"div",[["class","col-xl-4 col-md-6 col-10 offset-xl-4 offset-md-3 offset-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n        "])),(l()(),e["\u0275eld"](0,null,null,86,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n            "])),(l()(),e["\u0275eld"](0,null,null,83,"div",[["class","card-block text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                "])),(l()(),e["\u0275eld"](0,null,null,1,"h2",[["class","card-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Sign up to Azimuth"])),(l()(),e["\u0275ted"](null,["\n                "])),(l()(),e["\u0275eld"](0,null,null,2,"a",[["class","btn btn-link transition bottom-15"],["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==e["\u0275nov"](l,12).onClick(u.button,u.ctrlKey,u.metaKey)&&t);return t},null,null)),e["\u0275did"](335872,null,0,t.m,[t.k,t.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](null,["Already have an account? Sign in!"])),(l()(),e["\u0275ted"](null,["\n                 \n                "])),(l()(),e["\u0275eld"](0,null,null,73,"form",[["class","text-left"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;"submit"===n&&(t=!1!==e["\u0275nov"](l,17).onSubmit(u)&&t);"reset"===n&&(t=!1!==e["\u0275nov"](l,17).onReset()&&t);"ngSubmit"===n&&(t=!1!==o.onSubmit(o.form.value)&&t);return t},null,null)),e["\u0275did"](8192,null,0,o["\u0275bf"],[],null,null),e["\u0275did"](270336,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](1024,null,o.ControlContainer,null,[o.FormGroupDirective]),e["\u0275did"](8192,null,0,o.NgControlStatusGroup,[o.ControlContainer],null,null),(l()(),e["\u0275ted"](null,["\n                    "])),(l()(),e["\u0275eld"](0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                        "])),(l()(),e["\u0275eld"](0,null,null,5,"input",[["class","form-control checking-field"],["placeholder","Full Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;"input"===n&&(t=!1!==e["\u0275nov"](l,24)._handleInput(u.target.value)&&t);"blur"===n&&(t=!1!==e["\u0275nov"](l,24).onTouched()&&t);"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,24)._compositionStart()&&t);"compositionend"===n&&(t=!1!==e["\u0275nov"](l,24)._compositionEnd(u.target.value)&&t);return t},null,null)),e["\u0275did"](8192,null,0,o.DefaultValueAccessor,[e.Renderer,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](512,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](270336,null,0,o.FormControlDirective,[[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{form:[0,"form"]},null),e["\u0275prd"](1024,null,o.NgControl,null,[o.FormControlDirective]),e["\u0275did"](8192,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),e["\u0275ted"](null,[" \n                        "])),(l()(),e["\u0275and"](8388608,null,null,1,null,m)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["       \n                    "])),(l()(),e["\u0275ted"](null,["\n                    "])),(l()(),e["\u0275eld"](0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                        "])),(l()(),e["\u0275eld"](0,null,null,5,"input",[["class","form-control checking-field"],["placeholder","Email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;"input"===n&&(t=!1!==e["\u0275nov"](l,37)._handleInput(u.target.value)&&t);"blur"===n&&(t=!1!==e["\u0275nov"](l,37).onTouched()&&t);"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,37)._compositionStart()&&t);"compositionend"===n&&(t=!1!==e["\u0275nov"](l,37)._compositionEnd(u.target.value)&&t);return t},null,null)),e["\u0275did"](8192,null,0,o.DefaultValueAccessor,[e.Renderer,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](512,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](270336,null,0,o.FormControlDirective,[[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{form:[0,"form"]},null),e["\u0275prd"](1024,null,o.NgControl,null,[o.FormControlDirective]),e["\u0275did"](8192,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),e["\u0275ted"](null,[" \n                        "])),(l()(),e["\u0275and"](8388608,null,null,1,null,h)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,[" \n                    "])),(l()(),e["\u0275ted"](null,["\n                    "])),(l()(),e["\u0275eld"](0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                        "])),(l()(),e["\u0275eld"](0,null,null,7,"input",[["class","form-control checking-field"],["minlength","6"],["placeholder","Password"],["type","password"]],[[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;"input"===n&&(t=!1!==e["\u0275nov"](l,50)._handleInput(u.target.value)&&t);"blur"===n&&(t=!1!==e["\u0275nov"](l,50).onTouched()&&t);"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,50)._compositionStart()&&t);"compositionend"===n&&(t=!1!==e["\u0275nov"](l,50)._compositionEnd(u.target.value)&&t);return t},null,null)),e["\u0275did"](8192,null,0,o.DefaultValueAccessor,[e.Renderer,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275did"](270336,null,0,o.MinLengthValidator,[],{minlength:[0,"minlength"]},null),e["\u0275prd"](512,null,o.NG_VALIDATORS,function(l){return[l]},[o.MinLengthValidator]),e["\u0275prd"](512,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](270336,null,0,o.FormControlDirective,[[2,o.NG_VALIDATORS],[8,null],[2,o.NG_VALUE_ACCESSOR]],{form:[0,"form"]},null),e["\u0275prd"](1024,null,o.NgControl,null,[o.FormControlDirective]),e["\u0275did"](8192,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),e["\u0275ted"](null,["\n                         "])),(l()(),e["\u0275and"](8388608,null,null,1,null,b)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,["                     \n                    "])),(l()(),e["\u0275ted"](null,["\n                    "])),(l()(),e["\u0275eld"](0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                        "])),(l()(),e["\u0275eld"](0,null,null,5,"input",[["class","form-control checking-field"],["placeholder","Confirm Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;"input"===n&&(t=!1!==e["\u0275nov"](l,65)._handleInput(u.target.value)&&t);"blur"===n&&(t=!1!==e["\u0275nov"](l,65).onTouched()&&t);"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,65)._compositionStart()&&t);"compositionend"===n&&(t=!1!==e["\u0275nov"](l,65)._compositionEnd(u.target.value)&&t);return t},null,null)),e["\u0275did"](8192,null,0,o.DefaultValueAccessor,[e.Renderer,e.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](512,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.DefaultValueAccessor]),e["\u0275did"](270336,null,0,o.FormControlDirective,[[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{form:[0,"form"]},null),e["\u0275prd"](1024,null,o.NgControl,null,[o.FormControlDirective]),e["\u0275did"](8192,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),e["\u0275ted"](null,["\n                        "])),(l()(),e["\u0275and"](8388608,null,null,1,null,w)),e["\u0275did"](8192,null,0,d.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](null,[" \n                    "])),(l()(),e["\u0275ted"](null,["\n                    "])),(l()(),e["\u0275eld"](0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                        "])),(l()(),e["\u0275eld"](0,null,null,3,"p",[["class","terms"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["By creating an account, you agree our "])),(l()(),e["\u0275eld"](0,null,null,1,"a",[["class","btn btn-link transition terms"],["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["Terms & Privacy Policy"])),(l()(),e["\u0275ted"](null,["                  \n                    "])),(l()(),e["\u0275ted"](null,["             \n                    "])),(l()(),e["\u0275eld"](0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](null,["\n                        "])),(l()(),e["\u0275eld"](0,null,null,1,"button",[["class","btn btn-main btn-block"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](null,["Sign up"])),(l()(),e["\u0275ted"](null,["\n                    "])),(l()(),e["\u0275ted"](null,["\n                "])),(l()(),e["\u0275ted"](null,["  \n               \n            "])),(l()(),e["\u0275ted"](null,["\n        "])),(l()(),e["\u0275ted"](null,["\n    "])),(l()(),e["\u0275ted"](null,["\n"])),(l()(),e["\u0275ted"](null,["\n"]))],function(l,n){var u=n.component;l(n,12,0,"/login"),l(n,17,0,u.form),l(n,26,0,u.name),l(n,31,0,u.form.get("name").touched),l(n,39,0,u.email),l(n,44,0,u.form.get("email").touched);l(n,51,0,"6"),l(n,54,0,u.password),l(n,59,0,u.form.get("password").touched),l(n,67,0,u.confirmPassword),l(n,72,0,u.form.get("confirmPassword").touched)},function(l,n){var u=n.component;l(n,11,0,e["\u0275nov"](n,12).target,e["\u0275nov"](n,12).href),l(n,15,0,e["\u0275nov"](n,19).ngClassUntouched,e["\u0275nov"](n,19).ngClassTouched,e["\u0275nov"](n,19).ngClassPristine,e["\u0275nov"](n,19).ngClassDirty,e["\u0275nov"](n,19).ngClassValid,e["\u0275nov"](n,19).ngClassInvalid,e["\u0275nov"](n,19).ngClassPending),l(n,23,0,e["\u0275nov"](n,28).ngClassUntouched,e["\u0275nov"](n,28).ngClassTouched,e["\u0275nov"](n,28).ngClassPristine,e["\u0275nov"](n,28).ngClassDirty,e["\u0275nov"](n,28).ngClassValid,e["\u0275nov"](n,28).ngClassInvalid,e["\u0275nov"](n,28).ngClassPending),l(n,36,0,e["\u0275nov"](n,41).ngClassUntouched,e["\u0275nov"](n,41).ngClassTouched,e["\u0275nov"](n,41).ngClassPristine,e["\u0275nov"](n,41).ngClassDirty,e["\u0275nov"](n,41).ngClassValid,e["\u0275nov"](n,41).ngClassInvalid,e["\u0275nov"](n,41).ngClassPending),l(n,49,0,e["\u0275nov"](n,51).minlength?e["\u0275nov"](n,51).minlength:null,e["\u0275nov"](n,56).ngClassUntouched,e["\u0275nov"](n,56).ngClassTouched,e["\u0275nov"](n,56).ngClassPristine,e["\u0275nov"](n,56).ngClassDirty,e["\u0275nov"](n,56).ngClassValid,e["\u0275nov"](n,56).ngClassInvalid,e["\u0275nov"](n,56).ngClassPending),l(n,64,0,e["\u0275nov"](n,69).ngClassUntouched,e["\u0275nov"](n,69).ngClassTouched,e["\u0275nov"](n,69).ngClassPristine,e["\u0275nov"](n,69).ngClassDirty,e["\u0275nov"](n,69).ngClassValid,e["\u0275nov"](n,69).ngClassInvalid,e["\u0275nov"](n,69).ngClassPending),l(n,85,0,!u.form.valid)})}var N=e["\u0275ccf"]("az-register",r,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,null,null,1,"az-register",[],null,null,null,y,c)),e["\u0275did"](24576,null,0,r,[t.k,o.FormBuilder],null,null)],null,null)},{},{},[]);u.d(n,"RegisterModuleNgFactory",function(){return F});var E,S=this&&this.__extends||(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u])},function(l,n){function u(){this.constructor=l}E(l,n),l.prototype=null===n?Object.create(n):(u.prototype=n.prototype,new u)}),V=function(l){function n(n){return l.call(this,n,[N],[])||this}return S(n,l),Object.defineProperty(n.prototype,"_NgLocalization_6",{get:function(){return null==this.__NgLocalization_6&&(this.__NgLocalization_6=new d.NgLocaleLocalization(this.parent.get(e.LOCALE_ID))),this.__NgLocalization_6},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_\u0275i_7",{get:function(){return null==this.__\u0275i_7&&(this.__\u0275i_7=new o["\u0275i"]),this.__\u0275i_7},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_8",{get:function(){return null==this.__FormBuilder_8&&(this.__FormBuilder_8=new o.FormBuilder),this.__FormBuilder_8},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new d.CommonModule,this._\u0275ba_1=new o["\u0275ba"],this._FormsModule_2=new o.FormsModule,this._ReactiveFormsModule_3=new o.ReactiveFormsModule,this._RouterModule_4=new t.n(this.parent.get(t.t,null),this.parent.get(t.k,null)),this._RegisterModule_5=new a,this._ROUTES_9=[[{path:"",component:r,pathMatch:"full"}]],this._RegisterModule_5},n.prototype.getInternal=function(l,n){return l===d.CommonModule?this._CommonModule_0:l===o["\u0275ba"]?this._\u0275ba_1:l===o.FormsModule?this._FormsModule_2:l===o.ReactiveFormsModule?this._ReactiveFormsModule_3:l===t.n?this._RouterModule_4:l===a?this._RegisterModule_5:l===d.NgLocalization?this._NgLocalization_6:l===o["\u0275i"]?this._\u0275i_7:l===o.FormBuilder?this._FormBuilder_8:l===t.i?this._ROUTES_9:n},n.prototype.destroyInternal=function(){},n}(e["\u0275NgModuleInjector"]),F=new e.NgModuleFactory(V,a)}});