import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { IndexClienteComponent } from './components/clientes/index-cliente/index-cliente.component';
import { CreateClienteComponent } from './components/clientes/create-cliente/create-cliente.component';
import { EditClienteComponent } from './components/clientes/edit-cliente/edit-cliente.component';
import { CreateProductoComponent } from './components/productos/create-producto/create-producto.component';
import { IndexProductoComponent } from './components/productos/index-producto/index-producto.component';
import { GaleriaProductoComponent } from './components/productos/galeria-producto/galeria-producto.component';

import { AdminGuard } from "./guards/admin.guard";
import { UpdateProductoComponent } from './components/productos/update-producto/update-producto.component';
import { InventarioProductoComponent } from './components/productos/inventario-producto/inventario-producto.component';
import { ConfigComponent } from './components/config/config.component';
import { VariedadProductoComponent } from './components/productos/variedad-producto/variedad-producto.component';

import { IndexContactoComponent } from './components/contacto/index-contacto/index-contacto.component';
import { IndexVentasComponent } from './components/ventas/index-ventas/index-ventas.component';
import { DetalleVentasComponent } from './components/ventas/detalle-ventas/detalle-ventas.component';
import { ReviewsProductoComponent } from './components/productos/reviews-producto/reviews-producto.component'; 

const appRoute : Routes = [
    
    //{path: 'inicio', component: InicioComponent, canActivate: [AdminGuard]},
    {path: 'panel', children: [
        {path: 'clientes', component: IndexClienteComponent, canActivate: [AdminGuard]} ,
        {path: 'clientes/registro', component: CreateClienteComponent, canActivate: [AdminGuard]},
        {path: 'clientes/:id', component: EditClienteComponent, canActivate: [AdminGuard]},   
    
        {path: 'productos', component: IndexProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/registro', component: CreateProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/:id', component: UpdateProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/inventario/:id', component: InventarioProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/variedades/:id', component: VariedadProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/galeria/:id', component: GaleriaProductoComponent, canActivate: [AdminGuard]},
        {path: 'productos/reviews/:id', component: ReviewsProductoComponent, canActivate: [AdminGuard]},

        {path: 'configuraciones', component: ConfigComponent, canActivate: [AdminGuard]},

        {path: 'ventas', component: IndexVentasComponent, canActivate: [AdminGuard]},
        {path: 'ventas/:id', component: DetalleVentasComponent, canActivate: [AdminGuard]}, 


        {path: 'contactos', component: IndexContactoComponent, canActivate: [AdminGuard]},
    ]},
    {path: '', component: LoginComponent}
];

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute); 