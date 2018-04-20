import { Component, OnInit, Input } from '@angular/core';
import { EndPointService } from '../../services/endpoint.service';

@Component({
    selector: 'view-items',
    templateUrl: 'view-items.html'
})

export class ViewItems implements OnInit {
    @Input() model:any;
    @Input() id:any;
    items: Array<any>
    constructor(public ep:EndPointService) { 
    }

    ngOnInit() {
     }
     ngOnChanges(changes) {
        console.log('se hace algo al cambiar', changes.id.currentValue)
        console.log('este es el modelo', this.model)
        if(this.model === 'compras') {
            this.ep.getComprasItems(changes.id.currentValue).then((res)=>{
                console.log('esto recibo', res)
                this.items = res
            })
        } else {
            this.ep.getGastoItems(changes.id.currentValue).then((res)=>{
                console.log('esto Recibo ', res);
                this.items = res;
            })  
        }
    }
}