import { EndPointService } from './../../../services/endpoint.service';
import { SelectService } from './../../../services/select.service';
import { AutoFormComponent } from './../../../componentes/auto-form/auto-form.component';

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'az-inputs',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nuevo.component.html',
  styleUrls:['./nuevo.component.scss']
})
export class IngresoTallerComponent implements OnInit {

         ingresoTallerForm:FormGroup;
         serviciosForm:FormGroup;
         productosForm:FormGroup;
         autoPicked:boolean = false;
         autos:Array<any> = [];
         productos:Array<any> = [];
         servicios:Array<any> = [];
         serviciosLabel:string = 'Elija Servicio';
         productosLabel:string = 'Elija Producto';
         listadoServicios:Array<any> = [];
         listadoProductos:Array<any> = [];
         listadoDetalles:Array<any> = [];
         totalProducto =0;
         totalServicio =0;
        constructor(public formBuilder:FormBuilder,public select:SelectService,public ep:EndPointService){

            this.ingresoTallerForm = this.formBuilder.group({
                empleado_id:['',Validators.compose([Validators.required])],
                auto_id:['',Validators.compose([Validators.required])],
                fecha_ingreso:['',Validators.compose([Validators.required])],
                observaciones:['',Validators.compose([Validators.required])]
            });

            this.serviciosForm = this.formBuilder.group({
                servicio_id:['',Validators.compose([Validators.required])],
                horas:['',Validators.compose([Validators.required])],

            });

            this.productosForm = this.formBuilder.group({
                producto_id:['',Validators.compose([Validators.required])],
                cantidad:['',Validators.compose([Validators.required])],

            });



     }

       ngOnInit(){
          this.select.loadAutos().then((res)=>{
              this.autos = res;
          });
          this.select.loadServicios().then((res)=>{
              this.servicios = res;
              console.log(this.servicios);
          });
          this.select.loadProductos().then((res)=>{
              this.productos = res;
          })


       }

         updateSelect(val){
             this.select.loadAutos().then((res)=>{
                 this.autos = res;
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
          addDetalle(){
              console.log(this.serviciosForm.value);
              let result = this.servicios.find((val)=>{
                     return val.value == this.serviciosForm.value.servicio_id;
              });
              let saveVal={
                  nombre: result.label
              };
              Object.assign(saveVal,this.serviciosForm.value);
              this.listadoServicios.push(saveVal);

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
