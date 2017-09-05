import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Categoria } from '../../../providers/categorias/categoria';
import { CategoriaService } from '../../../providers/categorias/categoria.service';
import { ToastService } from '../../../providers/shared/toast.service';
import { EditCategoriaPage } from '../edit/edit.categoria';

@Component({
    selector: 'list-categoria',
    templateUrl: 'list.categoria.html'
})
export class ListCategoriaPage {
    items: Categoria[];

    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public categoriaService: CategoriaService,
        public toastService: ToastService
    ) {}

    addNew(){
        this.navCtrl.push(EditCategoriaPage);
    }

    editItem(item: Categoria){
        this.navCtrl.push(EditCategoriaPage, { item: item });
    }

    handlerRemoverItem(item: Categoria){
        this.categoriaService.canRemove(item.id).then((result) => {
            if(result){
                this.categoriaService.remove(item.id).then((result) => {
                    if(result){
                        this.items.splice(this.items.indexOf(item), 1);
                        this.toastService.show('Categoria excluida com sucesso!');
                    }
                }).catch(e => {
                    this.toastService.show('Ocorreu algum erro ao excluir categoria.');
                })
            } else{
                this.toastService.show('Não foi possivel excluir categoria pois ela já esta em uso.');
            }
        }).catch(e => {
            this.toastService.show('Ocorreu algum erro ao verificar se pode excluir categoria.');
        })
    }

    removeItem(item: Categoria){
        this.alertCtrl.create({
            title: 'Excluir: ' + item.name,
            message: 'Confirma a exclusão dessa categoria?',
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Excluir categoria "' + item.name + '"',
                    handler: () => {
                        
                    }
                }
            ]
        })
    }
    
    loadItems() {
        this.categoriaService.getAll().then((result: Categoria[]) => {
            this.items = result;
        }).catch(e => {
            this.toastService.show('Ocorreu algum erro ao listar as Categrias.');
        })
    }

    ionViewDidEnter() {
        this.loadItems();
    }
}