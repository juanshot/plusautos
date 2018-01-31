import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from '../../../app.state';
@Component({
  selector: 'az-navbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[UserService]
})

export class NavbarComponent {
    public isMenuCollapsed:boolean = false;
    public user:any = {};

    constructor(private _state:AppState,public userService:UserService,public router:Router) {
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
        this.user = this.userService.getUser();
        console.log('navbar user',this.user);
        
    }

    public toggleMenu() {
        this.isMenuCollapsed = !this.isMenuCollapsed; 
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);        
    }
    cerrarSesion(){
        localStorage.clear();
        this.router.navigate(['/login']);
    }    
}
