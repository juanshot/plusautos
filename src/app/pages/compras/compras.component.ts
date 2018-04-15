import { GlobalService } from './../../services/global.service';
import { SelectProveedorComponent } from './../../componentes/select-proveedor/select-proveedor.component';
import { SelectService } from './../../services/select.service';
import { CompraService } from './compras.service';
import { ValidationService } from './../../services/validation.service';
import { EndPointService } from './../../services/endpoint.service';


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { PipesModule } from '../../theme/pipes/pipes.module';
import { DirectivesModule } from '../../theme/directives/directives.module';
@Component({
  selector: 'compra-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
  providers: [ CompraService, SelectService ,GlobalService]
})
export class ComprasComponent {
    public data: any;
    public searchText:string;
    compras:any = [];
    editMode:boolean = false;
    compraForm:FormGroup;
    itemCompraForm:FormGroup;
    proveedorId:any ;
    proveedores:any;
    holderNombre:string = '';
    holderRuc:string = '';
    holderDireccion:string = '';
    tipoPagos:any = [];
    labelTipoPagos:string ='Seleccione Metodo Pago';
    labelProducto:string ='Seleccione producto';
    productos:any = [];
    compraItems:any =[];
    cuentasContado:any = [];
    metodoPagoId:number= 1 ;
    cuentaId:number;
    nFactura:number;
    saved:boolean = false;
    fecha_factura:any;
    autorizacion_sri:any;
    constructor(private _dynamicTablesService:CompraService,public fb:FormBuilder,public ep:EndPointService,public selectService:SelectService,public global:GlobalService){
        this.compraForm = this.fb.group({
            metodo_pago_id:['',Validators.compose([Validators.required])],
            proveedor_id:['',Validators.compose([Validators.required])],
            num_factura:['',Validators.compose([Validators.required])],
            cuenta_id:[''],
            total:[0],
            iva:[0],
            sub_total:[0],
            autorizacion_sri:['',Validators.compose([Validators.required])],
            fecha_factura:['',Validators.compose([Validators.required])],
            compra_items:['']

        });
        this.itemCompraForm = this.fb.group({
            producto_id:[''],
            descripcion: [''],
            cantidad:['',Validators.compose([Validators.required])],
            precio:['',Validators.compose([Validators.required])],
            iva:[''],
            producto_nombre:[''],
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
        this.compraForm.valueChanges.subscribe((res)=>{
            console.log(res);
            
        })
        
    }
    saveProveedor(){
            let request = this.compraForm.value;
            delete request.tipoId; 
            this._dynamicTablesService.savecompra(request).then((result)=>{
                this._dynamicTablesService.getAll().then(res=>{
                    console.log("en component",res);
                    this.data = res;
                    this.compraForm.patchValue({nombre:'',cedula:'',direccion:'',celular:'',telefono:'',correo:'',ruc:'',tipoId:''});
                });    
        })      
    }
    updateProveedor(){
        let request = this.compraForm.value;
        delete request.tipoId; 
        this._dynamicTablesService.updatecompra(request,this.proveedorId).then((result)=>{
            this._dynamicTablesService.getAll().then(res=>{
                console.log("en component",res);
                this.data = res;
                this.compraForm.patchValue({nombre:'',cedula:'',direccion:'',celular:'',telefono:'',correo:'',ruc:'',tipoId:''});

            });    
    })      
}
    editProveedor(proveedor){
        this.editMode = true;
        let tipoIdVal ='';
        this.proveedorId = proveedor.id;
        proveedor.cedula != null?tipoIdVal = 'cedula': tipoIdVal = 'ruc';
        this.compraForm.patchValue({nombre:proveedor.nombre,cedula:proveedor.cedula,direccion:proveedor.direccion,celular:proveedor.cedula,telefono:proveedor.telefono,correo:'g@g.com',ruc:proveedor.ruc,tipoId:tipoIdVal});
    }
    newProveedor(){
        this.editMode = false;
        this.compraForm.patchValue({nombre:'',cedula:'',direccion:'',celular:'',telefono:'',correo:'',ruc:'',tipoId:''});
    }
    setProveedor(proveedor){
            this.holderDireccion = proveedor.direccion;
            this.holderNombre = proveedor.nombre;
            this.holderRuc = proveedor.cedula;
            this.compraForm.controls['proveedor_id'].setValue(proveedor.id);

            console.log(proveedor);
            
    }
    setProducto(producto){
        console.log(producto);
        this.itemCompraForm.controls['producto_id'].setValue(producto.id);
        this.itemCompraForm.controls['producto_nombre'].setValue(producto.nombre);
        
    }
    setItem(){
        
        this.compraItems.push(this.itemCompraForm.value);
        console.log(this.compraItems);
        this.itemCompraForm.patchValue({
            producto_id:'',
            iva:'',
            precio:'',
            cantidad:'',
            producto_nombre:''

        });
        let arrayAux = this.compraItems;
        let totalVal = 0;
        let total = totalVal;
        
        
    }

    eliminarItem(index){
        console.log(index);
        this.compraForm.controls['total'].setValue(this.compraForm.value.total - this.compraItems[index].precio );
        this.compraForm.controls['iva'].setValue(this.compraForm.value.iva - this.compraItems[index].iva );       
        this.compraItems.splice(index);   
    }
    getCuentasContado(){
        this.compraForm.controls['metodo_pago_id'].setValue(this.metodoPagoId);
       
       
      
    }
    guardarCompra(){
        this.compraForm.controls['num_factura'].setValue(this.nFactura);
        this.compraItems.map((res)=>{
            return delete res['producto_nombre'];
        });
        console.log('result demap',this.compraItems);
        
        this.compraForm.controls['compra_items'].setValue(this.compraItems);
        console.log(this.compraForm.value);
        this.compraForm.controls['total'].setValue(this.totalFactura);
        this.compraForm.controls['iva'].setValue(this.iva);
       
        
        this._dynamicTablesService.savecompra(this.compraForm.value).then((res)=>{
            console.log(res);
            this.saved = true;
            this.cuentaId =0;
            this.metodoPagoId = 1;
            this.compraForm.controls['metodo_pago_id'].setValue(1);
            this.compraForm.controls['cuenta_id'].setValue(0);
            this.compraForm.controls['iva'].setValue(0);
            this.compraForm.controls['total'].setValue(0);
            this.compraItems=[];
            this.fecha_factura = '';
            this.autorizacion_sri='';
            this.nFactura= 0;
            this.holderDireccion ='';
            this.holderNombre='';
            this.holderRuc='';
            
        });

        
       
        
    }
    selectCuenta(cuenta){
        console.log(this.cuentaId);
        this.compraForm.controls['cuenta_id'].setValue(this.cuentaId);
    }
    setFecha(){
        this.compraForm.controls['fecha_factura'].setValue(this.fecha_factura);
    }
    setAutorizacion(){
        this.compraForm.controls['autorizacion_sri'].setValue(this.autorizacion_sri);
    }
    setNumFactura(){
        this.compraForm.controls['num_factura'].setValue(this.nFactura);
    }
    calcIva(){
        let iva = (((this.itemCompraForm.value.precio * 12) / 100) * this.itemCompraForm.value.cantidad).toFixed(2)
        this.itemCompraForm.controls['iva'].setValue(iva);
    }
    calcPrecioTotItem(){
        let total = (this.itemCompraForm.value.precio * this.itemCompraForm.value.cantidad).toFixed(3)
        this.itemCompraForm.controls['totalItem'].setValue(total);
    }
    get iva () {
        let result = this.compraItems.map((item) => {
            return  parseFloat(item.totalItem)
        })
        .reduce((a,b) =>{
            return a + b
        }, 0)

        return (result * 12) / 100
    }
    get subTotal () {
        let result = this.compraItems.map((item) => {
            return  item.totalItem
        })
        .reduce((a,b) =>{
            return a + b
        }, 0)

        return result
    }
    get totalFactura () {
        return  this.iva + this.subTotal
    }
    
}

