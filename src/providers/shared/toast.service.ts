import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {
    constructor(public toastCtrl: ToastController){}

    public show(mensagem: string){
        let toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }
}