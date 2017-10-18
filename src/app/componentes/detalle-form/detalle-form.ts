import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {SelectService} from "../../services/select.service";
import {EndPointService} from "../../services/endpoint.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'detalle-form',
  templateUrl: 'detalle-form.html'
})

export class DetalleFormComponent implements OnInit {
  detalleForm:FormGroup;
  detalles:Array<any> = [];
  @Output() saved:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() parte:string ='';
  constructor(public fb:FormBuilder,public ep:EndPointService,public select:SelectService) {
    this.detalleForm = this.fb.group({
      parte:['',Validators.compose([Validators.required])],
      observacion:['',Validators.compose([Validators.required])],


    });
  }

  ngOnInit() {
  }
  addDetalle(){
   this.saved.emit(this.detalleForm.value);
   this.detalleForm.reset();
   this.detalleForm.setValue({parte:'',observacion:''});
  }
  setParte(parte){
    this.detalleForm.controls['parte'].setValue(parte);
  }
}
