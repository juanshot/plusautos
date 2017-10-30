import { CompraSearchPipe } from './search/compras-search.pipe';
import { PresupuestoSearchPipe } from './search/presupuesto-search.pipe';
import { AutoSearchPipe } from './search/auto-search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPicturePipe } from './appPicture/appPicture.pipe';
import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import { SearchPipe } from './search/search.pipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        AppPicturePipe, 
        ProfilePicturePipe,
        MailSearchPipe,
        SearchPipe,
        AutoSearchPipe,
        PresupuestoSearchPipe,
        CompraSearchPipe
    ],
    exports: [
        AppPicturePipe,
        ProfilePicturePipe,
        MailSearchPipe,
        SearchPipe,
        AutoSearchPipe,
        PresupuestoSearchPipe,
        CompraSearchPipe
    ]
})
export class PipesModule { }
