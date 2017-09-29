import { UserService } from './../../services/user.service';
import { ToasterService } from 'angular2-toaster';
import { EndPointService } from './../../services/endpoint.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Http, Headers, URLSearchParams} from '@angular/http';


@Component({
  selector: 'az-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[EndPointService,UserService],

})
export class LoginComponent {  
    public router: Router;
    public form:FormGroup;
    public email:AbstractControl;
    public invalid:boolean = false;
    public password:AbstractControl;
    private toasterService: ToasterService;

        myStyle: object = {};
        myParams: object = {};
        width: number = 100;
        height: number = 100;

    constructor(router:Router, fb:FormBuilder,public ep:EndPointService,public user:UserService) {
        this.router = router;
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, emailValidator])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
        ngOnInit() {
            this.myStyle = {
                'position': 'fixed',
                'background-color':'#420303',
                'width': '100%',
                'height': '100%',
                'z-index': -1,
                'top': 0,
                'left': 0,
                'right': 0,
                'bottom': 0,
            };
     
        this.myParams = {
                  "particles": {
                    "number": {
                      "value": 80,
                      "density": {
                        "enable": true,
                        "value_area": 8000
                      }
                    },
                    "color": {
                      "value": "#ffffff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.5,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 10,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 80,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": true,
                      "distance": 300,
                      "color": "#ffffff",
                      "opacity": 0.4,
                      "width": 2
                    },
                    "move": {
                      "enable": true,
                      "speed": 12,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": false,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 800,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 800,
                        "size": 80,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 400,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                }
    }

    public onSubmit(values:Object):void {
        if (this.form.valid) {
            console.log(values);
            this.ep.loginRequest(values).then((response=>{
                  if(response.status ==401){
                    this.invalid = true;

                  }else{
                    console.log(response);
                    this.user.setToken(response.token);
                    this.ep.getUserData().then((result=>{
                      console.log(result);
                      this.user.setUser(result.user);
                     this.router.navigate(['pages/dashboard']);
                      
                    }))
                    
                   
                  }
                  
            }));
            
            //this.router.navigate(['pages/dashboard']);
        }
    }

}

export function emailValidator(control: FormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}


