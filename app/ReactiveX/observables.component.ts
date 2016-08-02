import {Component} from "angular2/core";
import {ControlGroup, FormBuilder} from "angular2/common";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'observables',
    templateUrl: 'app/ReactiveX/observables.template.html'
})
export class ObservablesComponent {

    formModel:ControlGroup;

    constructor(fb:FormBuilder) {
        this.formModel = fb.group({
            search: []
        });

        var searchControl = this.formModel.find('search');
        searchControl.valueChanges
            .debounceTime(400)
            .map(str => (str.replace(' ', '-')))
            .subscribe(x => console.log(x));


        /** travel search */
        var startDates = [];
        var startDate = new Date();

        for (var day = -2; day < 2; day++) {
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day
            );
            startDates.push(date);
        }

        Observable
            .fromArray(startDates)
            .map(date => {
                console.log("Getting deals for date: " + date);
                return [1, 2, 3];
            })
            .subscribe(x => console.log(x));

        /** interval */
        // Observable
        //     .interval(1000)
        //     .subscribe(x => console.log(x))

        // Observable
        //     .interval(1000)
        //     .flatMap(x => {
        //         console.log("Calling server to get latest news..");
        //         return Observable.of([1, 2, 3]);
        //     })
        //     .subscribe(news => console.log(news));

        /** delay */
        var userStream = Observable.of({
            userId: 1, userName: 'chanu'
        }).delay(2000);

        /** join */
        var tweetsStream = Observable.of([1, 2, 3]).delay(1500);

        Observable
            .forkJoin(userStream, tweetsStream)
            .map(joined => Object({user: joined[0], tweets: joined[1]}))
            .subscribe(result => console.log(result));

        /** error handling */
        var observable = Observable.throw(new Error("Something failed!"));
        observable
            .subscribe(
                x => console.log(x),
                error => console.log(error));

        /** retry */
        var counter = 0;
        var ajaxCall = Observable
            .of('url')
            .flatMap(() => {
                if (++counter < 2)
                    return Observable.throw(new Error("Request failed!"));
                return Observable.of([1, 2, 3]);
            })
            .retry(3)
            .subscribe(
                x => console.log("Response from retry: " + x),
                error => console.log(error)
            );

        /** catching and continuing */
        var remoteDataStream = Observable.throw(new Error("Something is wrong!"));
        remoteDataStream.catch(err => {
                var localDataStream = Observable.of([1, 2, 3]);
                return localDataStream;
            })
            .subscribe(x => console.log("Catching and continuing: " + x));

        /** Completed */
        Observable
            .throw(new Error("error"))
            .subscribe(
                x => console.log(x),
                error => console.log(error),
                () => console.log("Completed"));

        Observable
            .fromArray([1, 2, 3])
            .subscribe(
                x => console.log(x),
                error => console.log(error),
                () => console.log("Completed"));


    }
}