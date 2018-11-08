import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MeasurePage } from '../measure/measure';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    skipTut()
    {
    	this.navCtrl.push(MeasurePage);
    }

    slides = [{
        title: "Welcome to this App!",
        description: "This app can be used to measure qualities of wood. Slide right to continue tutorial or click <b>skip</b> to measure data.",
        image: "",
    }, {
        title: "What does this do?",
        description: "<b>This App</b> Takes the length and width of lumber and can calucluate the ______ and _____ using a vibration test.",
        image: "",
    }, {
        title: "Set up.",
        description: "To begin, set up your wood on a flat surface, enter the length & width, and place the phone on the wood.  Hit record on the app and hit the wood hard.  After ten seconds, you will have your measurement!",
        image: "",
    }];


}
