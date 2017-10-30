import { GlobalService } from '../../services/global.service';
import { SelectService } from '../../services/select.service';
import { ValidationService } from '../../services/validation.service';
import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { FacturaService } from './facturas.service';


@Component({
  selector: 'facturaes-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss'],
  providers: [ FacturaService,SelectService ,GlobalService ]
})
export class FacturasComponent implements OnInit {
    public data: any;
    public searchText:string;
    facturaForm:FormGroup;
    itemfacturaForm:FormGroup;
    clientes:any = [];
    talleres:any = [];
    servicios:any = [];
    items:any = [];
    create:boolean=true;
    cliente:string = "Seleccione cliente";
    autoLabel:string = "Seleccione Auto";
    servicioLabel:string = "Seleccione Servicio....";

    constructor(private _FacturaService:FacturaService,public fb:FormBuilder,public selectService:SelectService,public global:GlobalService){
        this.facturaForm = this.fb.group({
            ingreso_taller_id:['',Validators.compose([Validators.required])],
            fecha:['',Validators.compose([Validators.required])],
            sub_total:['',Validators.compose([Validators.required])],
            iva:['',Validators.compose([Validators.required])],
            total:['',Validators.compose([Validators.required])],
            cliente_id:['',Validators.compose([Validators.required])],
            items:['']

        });
        this.itemfacturaForm = this.fb.group({
            servicio_id:['',Validators.compose([Validators.required])],
            servicio_nombre:[''],
            precio:['',Validators.compose([Validators.required])]
        });
        _FacturaService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        });  
        
    }
    ngOnInit(){
     this.selectService.loadIngresosTaller().then((res)=>{
         this.talleres = res;
     });
     this.selectService.loadClientes().then((res)=>{
        this.clientes = res;
    });
    this.selectService.loadServicios().then((res)=>{
        this.servicios = res;
    });

 
     
    }
    savefactura(){
            this.items.map((res)=>{
                delete res['servicio_nombre'];
            })
            this.facturaForm.controls['items'].setValue(this.items);

            console.log(this.facturaForm.value);
            
            this._FacturaService.savefactura(this.facturaForm.value).then((result)=>{
                this._FacturaService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.facturaForm.reset();
                    this.facturaForm.setValue({
                        ingreso_taller_id:'',
                        fecha:'',
                        sub_total:'',
                        iva:'',
                        total:'',
                        cliente_id:'',
                        items:[]

                    })
                    this.items = [];

                });    
            })
          
        
    }
    addItem(){
            this.items.push(this.itemfacturaForm.value);
            this.itemfacturaForm.reset();
            let arrayAux = this.items;
            let totalVal = 0;
            arrayAux.forEach(element => {
                totalVal = totalVal + (element.precio );
            });
            let iva = totalVal * this.global.iva / 100;
            let total = totalVal + iva;
            this.facturaForm.controls['sub_total'].setValue(totalVal);
            this.facturaForm.controls['iva'].setValue(iva);
            this.facturaForm.controls['total'].setValue(total);
    }
    eliminarItem(index){
        console.log(index);
        this.items.splice(index);
        let arrayAux = this.items;
        let totalVal = 0;
        arrayAux.forEach(element => {
            totalVal = totalVal + (element.precio );
        });
        let iva = totalVal * this.global.iva / 100;
        let total = totalVal + iva;
        this.facturaForm.controls['sub_total'].setValue(totalVal);
        this.facturaForm.controls['iva'].setValue(iva);
        this.facturaForm.controls['total'].setValue(total);
        
    }
    onSelectedServicio(servicio){
            console.log(servicio);
            this.itemfacturaForm.controls['servicio_nombre'].setValue(servicio.label);
            this._FacturaService.getPrecio(servicio.value).then(res=>{
                this.itemfacturaForm.controls['precio'].setValue(res);
            })
            
    }

    
}

