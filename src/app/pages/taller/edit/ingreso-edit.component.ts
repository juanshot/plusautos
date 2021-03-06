import { GlobalService } from './../../../services/global.service';
import { DetalleFormComponent } from './../../../componentes/detalle-form/detalle-form';
import { EndPointService } from './../../../services/endpoint.service';
import { SelectService } from './../../../services/select.service';
import { AutoFormComponent } from './../../../componentes/auto-form/auto-form.component';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'az-inputs',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './ingreso-edit.component.html',
  styleUrls:['./ingreso-edit.scss'],
  providers:[GlobalService]
})
export class IngresoEditComponent implements OnInit {

         ingresoTallerForm:FormGroup;
         serviciosForm:FormGroup;
         productosForm:FormGroup;
         autoPicked:boolean = false;
         autos:Array<any> = [];
         productos:Array<any> = [];
         empleados:Array<any> = [];
         servicios:Array<any> = [];
         serviciosLabel:string = 'Elija Servicio';
         productosLabel:string = 'Elija Producto';
         autosLabel:string = 'Elija Auto';
         empleadosLabel:string = 'Quien Recibe...';
         listadoServicios:Array<any> = [];
         listadoProductos:Array<any> = [];
         listadoDetalles:Array<any> = [];
         totalProducto =0;
         totalServicio =0;
         noStock:boolean = false;
         part:string ='';
         currentDate:any;
         sub = null
         taller:any = {}
         @ViewChild(DetalleFormComponent) detalle:DetalleFormComponent;
        constructor(public formBuilder:FormBuilder,public select:SelectService,public ep:EndPointService,public global:GlobalService,public router:Router, public route: ActivatedRoute){

            this.ingresoTallerForm = this.formBuilder.group({
                empleado_id:['',Validators.compose([Validators.required])],
                auto_id:['',Validators.compose([Validators.required])],
                fecha_ingreso:[''],
                fecha_salida:[''],
                status_taller_id:[''],
                observaciones:['',Validators.compose([Validators.required])]
            });

            this.serviciosForm = this.formBuilder.group({
                servicio_id:['',Validators.compose([Validators.required])],
                horas:['',Validators.compose([Validators.required])],
                precio: ['']

            });

            this.productosForm = this.formBuilder.group({
                producto_id:['',Validators.compose([Validators.required])],
                cantidad:['',Validators.compose([Validators.required])]
            });
     }

       ngOnInit(){
           this.ingresoTallerForm.valueChanges.subscribe((res) => {
               console.log(res)
           })
            this.sub = this.route
                .params
                .subscribe(params => {
                    console.log('params',params.id)
                    this.select.loadDetail('taller', params.id)
                    .then((res) => {
                        console.log('resultado del id', res)
                        this.taller = res.taller;
                        this.ingresoTallerForm.setValue({
                            empleado_id: '',
                            auto_id: '',
                            fecha_ingreso: this.taller.fecha_ingreso || '',
                            fecha_salida: this.taller.fecha_salida || '',
                            status_taller_id: this.taller.status_taller_id || '',
                            observaciones: this.taller.observaciones || '',

                        })
                        this.ingresoTallerForm.controls['auto_id'].setValue(10)
                    })
            });
          this.select.loadAutos().then((res)=>{
              this.autos = res;
          });
          this.select.loadServicios().then((res)=>{
              this.servicios = res;
              console.log(this.servicios);
          });
          this.select.loadProductos().then((res)=>{
              this.productos = res;
          });
          this.select.loadEmpleados().then((res)=>{
            this.empleados = res;
        })
          this.currentDate = this.global.currentDateFormat();
          console.log(this.currentDate);
          


       }
       ngOnDestroy () {
           this.sub.unsubscribe()
       }

         updateSelect(val){
             this.select.loadAutos().then((res)=>{
                 this.autos = res;
             })

         }
         updateSelectProducto(val){
            this.select.loadProductos().then((res)=>{
                this.productos = res;
            })

        }
        updateSelectServicio(val){
            this.select.loadServicios().then((res)=>{
                this.servicios = res;
            })

        }

           addService(){
               console.log(this.serviciosForm.value);
               let result = this.servicios.find((val)=>{
                      return val.value == this.serviciosForm.value.servicio_id;
               });
               let saveVal={
                   nombre: result.label
               };
               Object.assign(saveVal,this.serviciosForm.value);
               this.listadoServicios.push(saveVal);
               this.totalServicio += this.serviciosForm.value.horas;
               this.serviciosForm.reset();

           }
           addProducto(){
              let result = this.productos.find((val)=>{
                     return val.value == this.productosForm.value.producto_id;
              });
              let saveVal={
                  nombre: result.label,
                  cantidad:0
              };
              Object.assign(saveVal,this.productosForm.value);
              this.listadoProductos.push(saveVal);

              this.ep.getProducto(this.productosForm.value.producto_id).then(res=>{
                  console.log(res);
                  console.log(saveVal);
                  this.totalProducto += (res.producto.precio_compra * saveVal.cantidad ) ;

              });
              this.productosForm.reset();

          }
          addDetalle(val){
              this.listadoDetalles.push(val);
             

          }
          eliminarItem(i){
              
              this.listadoDetalles.splice(i);
          }
          eliminarProducto(producto,i){

            this.ep.getProducto(producto.producto_id).then(res=>{
                console.log(res);
                console.log(producto.cantidad);
                this.totalProducto -= (res.producto.precio_compra * producto.cantidad ) ;
                this.listadoProductos.splice(i);

            });
            
            

        }
          eliminarServicio(servicio,i){
             this.totalServicio -= servicio.horas;
                this.listadoServicios.splice(i);
            }
        
        saveTaller(){
            this.listadoProductos.map((res)=>{
                delete res.nombre;
            });
            this.listadoServicios.map((res)=>{
                delete res.nombre;
            });
            this.ingresoTallerForm.controls['status_taller_id'].setValue(1);
            let request = {servicios: this.listadoServicios,productos:this.listadoProductos,detalles:this.listadoDetalles,costo_total:this.totalProducto,tiempo_total:this.totalServicio};

            Object.assign(request,this.ingresoTallerForm.value);
            console.log(request);
            this.ep.saveIngresoTaller(request)
            .then(
                (res)=>{
                    console.log('respuesta',res);
                    if(res.msg =="OK"){
                        this.router.navigate(['/pages/taller/listado']);
                    }else{
                        this.noStock = true;
                    } 
            })
            .catch((err)=>{

            })
            
            
        }
        setPart(part){
            console.log(part);
            this.detalle.setParte(part);
            
        }
        getDetail (detail) {
            this.select.loadDetail('servicio',detail.value)
              .then((res) => {
                  this.serviciosForm.controls['precio'].setValue(res.servicio.precio || 0)
              })
        }

        
          


}



/*import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

Component({
    selector:'ingreso-taller',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './nuevo.component.html'

})
export class NuevoIngresoTaller{

    ingresoTallerForm:FormGroup;

    constructor(public formBuilder:FormBuilder){

            this.ingresoTallerForm = this.formBuilder.group({
                empleado_id:['',Validators.compose([Validators.required])],
                status_taller_id:['',Validators.compose([Validators.required])],
                fecha_ingreso:['',Validators.compose([Validators.required])],
                observaciones:['',Validators.compose([Validators.required])],
                detalles:['',Validators.compose([Validators.required])]
            })

    }
}*/
