import { Injectable } from '@angular/core';
import { DatabaseService } from '../shared/database.service';
import { Categoria } from './categoria';

@Injectable()
export class CategoriaService {

    constructor(public dbService: DatabaseService) {}

    public getAll(){
        return this.dbService.executeSQL('select * from category', {}).then((data) => {
            var categorias: Categoria[] = [];

            for (var i=0; i < data.rows.length; i++){
                var row = data.rows.item(i);

                var categoria = new Categoria();
                categoria.id = row.id;
                categoria.name = row.name;
                categorias.push(categoria);
            }

            return categorias;
        }).catch(e => console.log(e));
    }

    private insert(categoria: Categoria){
        return this.dbService.executeSQL('insert into category (name) values (?)', 
        [categoria.name]).then((data) => {
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        })
    }

    private update(categoria: Categoria){
        return this.dbService.executeSQL('update category set name = ? where id = ?', 
        [categoria.name, categoria.id]).then((data) => {
            return true;
        })
    }

    public save(categoria: Categoria){
        if(categoria.id){
            return this.update(categoria);
        } else{
            return this.insert(categoria);
        }
    }

    public canRemove(id: number){
        return this.dbService.executeSQL('select id from listitem where category_id = ?', 
        [id]).then((data) => {
            if(data.rows.length > 0){
                return false;
            } else {
                return true;
            }
        }).catch(e => {
            console.log(e);
            return false;
        })
    }

    public remove(id: number){
        return this.dbService.executeSQL('delete from category where id = ?', 
        [id]).then((data) => {
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        })
    }
}