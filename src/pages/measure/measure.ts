import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeviceMotion } from 'ionic-native';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the Measure page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-measure',
    templateUrl: 'measure.html'
})
export class MeasurePage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad MeasurePage');
    }

    public recording: boolean = false;

    public xaxis: any = 0;
    public yaxis: any = 0;
    public zaxis: any = 0;

    public logx: any;

    public logData: any;

    runMeasurement() {

        this.recording = true;

        this.logx = DeviceMotion.watchAcceleration({ frequency: 1 }).subscribe(acc => {

            this.xaxis = acc.x;
            this.yaxis = acc.y;
            this.zaxis = acc.z;

        });
        this.countdownClock();
    }

    public timeRemaining = 9.99;

    countdownClock() {

        if (this.timeRemaining <= 0.000) {
            this.recording = false;
            this.timeRemaining = 9.99;
            this.logx.unsubscribe();
            this.xaxis = 0;
            this.yaxis = 0;
            this.zaxis = 0;

            this.presentLoading();
        } else {
            this.timeRemaining = this.timeRemaining - 0.01;
            setTimeout(() => { this.countdownClock(); }, 10);

        }

    }

    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Calculating...",
            duration: 3000
        });
        loader.present();
    }

}
