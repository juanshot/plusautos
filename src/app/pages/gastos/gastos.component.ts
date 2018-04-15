import { GlobalService } from './../../services/global.service';
import { SelectProveedorComponent } from './../../componentes/select-proveedor/select-proveedor.component';
import { SelectService } from './../../services/select.service';
import { ValidationService } from './../../services/validation.service';
import { EndPointService } from './../../services/endpoint.service';


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { GastosService } from './gastos.service';
@Component({
  selector: 'gasto-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss'],
  providers: [ GastosService, SelectService ,GlobalService]
})
export class GastosComponent {
    public data: any;
    public searchText:string;
    gastos:any = [];
    editMode:boolean = false;
    gastoForm:FormGroup;
    itemGastoForm:FormGroup;
    proveedorId:any ;
    proveedores:any;
    holderNombre:string = '';
    holderRuc:string = '';
    holderDireccion:string = '';
    tipoPagos:any = [];
    labelTipoPagos:string ='Seleccione Metodo Pago';
    labelProducto:string ='Seleccione producto';
    productos:any = [];
    gastoItems:any =[];
    cuentasContado:any = [];
    metodoPagoId:number= 1 ;
    cuentaId:number;
    nFactura:number;
    saved:boolean = false;
    fecha_factura:any;
    autorizacion_sri:any;
    constructor(private _dynamicTablesService:GastosService,public fb:FormBuilder,public ep:EndPointService,public selectService:SelectService,public global:GlobalService){
        this.gastoForm = this.fb.group({
            metodo_pago_id:[''],
            proveedor_id:[''],
            num_factura:[''],
            cuenta_id:[''],
            total:[0],
            iva:[0],
            sub_total:[0],
            autorizacion_sri:[''],
            fecha_factura:[''],
            gasto_items:['']
        });
        this.itemGastoForm = this.fb.group({
            nombre:[''],
            cantidad:['',Validators.compose([Validators.required])],
            precio:['',Validators.compose([Validators.required])],
            iva:[''],
            totalItem: [0,Validators.compose([Validators.required])]

        })
        _dynamicTablesService.getAll().then(res=>{
            console.log("en component",res);
            this.data = res
        }); 
        this.selectService.loadProveedores().then((res)=>{
            this.proveedores = res;
            console.log('proveedores',this.proveedores);
            
        }) 
       
            this._dynamicTablesService.getCuentasContado().then((res)=>{
                this.cuentasContado = res;
            })
        this.gastoForm.valueChanges.subscribe((res)=>{
            console.log(res);
            
        })
        
    }
    saveProveedor(){
            let request = this.gastoForm.value;
            console.log('este es el request', request)
            delete request.tipoId; 
            this._dynamicTablesService.savegasto(request).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.gastoForm.patchValue({nombre:'',cedula:'',direccion:'',celular:'',telefono:'',correo:'',ruc:'',tipoId:''});
                });    
        })      
    }
    updateProveedor(){
        let request = this.gastoForm.value;
        delete request.tipoId; 
        this._dynamicTablesService.updategasto(request,this.proveedorId).then((result)=>{
            this._dynamicTablesService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this.gastoForm.patchValue({nombre:'',cedula:'',direccion:'',celular:'',telefono:'',correo:'',ruc:'',tipoId:''});

            });    
    })      
}
    editProveedor(proveedor){
        this.editMode = true;
        let tipoIdVal ='';
        this.proveedorId = proveedor.id;
        proveedor.cedula != null?tipoIdVal = 'cedula': tipoIdVal = 'ruc';
        this.gastoForm.patchValue({nombre:proveedor.nombre,cedula:proveedor.cedula,direccion:proveedor.direccion,celular:proveedor.cedula,telefono:proveedor.telefono,correo:'g@g.com',ruc:proveedor.ruc,tipoId:tipoIdVal});
    }
    newProveedor(){
        this.editMode = false;
        this.gastoForm.patchValue({nombre:'',cedula:'',direccion:'',celular:'',telefono:'',correo:'',ruc:'',tipoId:''});
    }
    setProveedor(proveedor){
        this.holderDireccion = proveedor.direccion;
        this.holderNombre = proveedor.nombre;
        this.holderRuc = proveedor.ruc || proveedor.cedula;
        this.gastoForm.controls['proveedor_id'].setValue(proveedor.id);
            
    }
    setProducto(producto){
        console.log(producto);
        this.itemGastoForm.controls['producto_id'].setValue(producto.id);
        this.itemGastoForm.controls['producto_nombre'].setValue(producto.nombre);
        
    }
    setItem(){
        
        this.gastoItems.push(this.itemGastoForm.value);
        console.log(this.gastoItems);
        this.gastoForm.controls['total'].setValue(this.gastoForm.value.total + this.itemGastoForm.value.precio );
        this.gastoForm.controls['iva'].setValue(this.gastoForm.value.iva + this.itemGastoForm.value.iva );
        this.itemGastoForm.patchValue({
            nombre:'',
            iva:'',
            precio:'',
            cantidad:''
        });
        let arrayAux = this.gastoItems;
        let totalVal = 0;
        let total = totalVal;
        
        
    }

    eliminarItem(index){
        console.log(index);
        this.gastoForm.controls['total'].setValue(this.gastoForm.value.total - this.gastoItems[index].precio );
        this.gastoForm.controls['iva'].setValue(this.gastoForm.value.iva - this.gastoItems[index].iva );       
        this.gastoItems.splice(index);   
    }
    getCuentasContado(){
        this.gastoForm.controls['metodo_pago_id'].setValue(this.metodoPagoId);
       
       
      
    }
    guardarGasto(){
        this.gastoForm.controls['num_factura'].setValue(this.nFactura);
        console.log('result demap',this.gastoItems);
        
        this.gastoForm.controls['gasto_items'].setValue(this.gastoItems);
        console.log('este es el req', this.gastoForm.value)
        this.gastoForm.controls['total'].setValue(this.totalFactura);
        this.gastoForm.controls['iva'].setValue(this.iva);
       
        
        this._dynamicTablesService.savegasto(this.gastoForm.value).then((res)=>{
            console.log(res);
            this.saved = true;
            this.cuentaId =0;
            this.metodoPagoId = 1;
            this.gastoForm.controls['metodo_pago_id'].setValue(1);
            this.gastoForm.controls['cuenta_id'].setValue(0);
            this.gastoForm.controls['iva'].setValue(0);
            this.gastoForm.controls['total'].setValue(0);
            this.gastoItems=[];
            this.fecha_factura = '';
            this.autorizacion_sri='';
            this.nFactura= 0;
            this.holderDireccion ='';
            this.holderNombre='';
            this.holderRuc='';
            
        });

        
       
        
    }
    calcPrecioTotItem(){
        let total = (this.itemGastoForm.value.precio * this.itemGastoForm.value.cantidad).toFixed(3)
        this.itemGastoForm.controls['totalItem'].setValue(total);
    }
    selectCuenta(cuenta){
        console.log(this.cuentaId);
        this.gastoForm.controls['cuenta_id'].setValue(this.cuentaId);
    }
    setFecha(){
        this.gastoForm.controls['fecha_factura'].setValue(this.fecha_factura);
    }
    setAutorizacion(){
        this.gastoForm.controls['autorizacion_sri'].setValue(this.autorizacion_sri);
    }
    setNumFactura(){
        this.gastoForm.controls['num_factura'].setValue(this.nFactura);
    }
    calcIva(){
        let iva = (((this.itemGastoForm.value.precio * 12) / 100) * this.itemGastoForm.value.cantidad).toFixed(2)
        this.itemGastoForm.controls['iva'].setValue(iva);
    }
    get iva () {
        let result = this.gastoItems.map((item) => {
            return  parseFloat(item.totalItem).toFixed(2)
        })
        .reduce((a,b) =>{
            return a + b
        }, 0)

        return (result * 12) / 100
    }
    get subTotal () {
        let result = this.gastoItems.map((item) => {
            return  parseFloat(item.totalItem)
        })
        .reduce((a,b) =>{
            return a + b
        }, 0)

        return result.toFixed(2)
    }
    get totalFactura () {
        return  this.iva + parseFloat(this.subTotal)
    }
    
}

