import { TestService } from './test.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: 'test.component.html'
})
export class TestComponent
 {
    testService: TestService;
    testData1: string='-';
    testData2: string='-';


    constructor(ts: TestService){
        this.testService=ts;
    }

    retrieveRestData(){
    this.testService.getRestData().subscribe(
        data => {this.testData1 = JSON.stringify(data); console.log(data);},
        error => alert(error),
        () => console.log("Done!")
    );
}

}