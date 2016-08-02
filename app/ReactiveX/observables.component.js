System.register(["angular2/core", "angular2/common", 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map', "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Rx_1;
    var ObservablesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ObservablesComponent = (function () {
                function ObservablesComponent(fb) {
                    this.formModel = fb.group({
                        search: []
                    });
                    var searchControl = this.formModel.find('search');
                    searchControl.valueChanges
                        .debounceTime(400)
                        .map(function (str) { return (str.replace(' ', '-')); })
                        .subscribe(function (x) { return console.log(x); });
                    /** travel search */
                    var startDates = [];
                    var startDate = new Date();
                    for (var day = -2; day < 2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    Rx_1.Observable
                        .fromArray(startDates)
                        .map(function (date) {
                        console.log("Getting deals for date: " + date);
                        return [1, 2, 3];
                    })
                        .subscribe(function (x) { return console.log(x); });
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
                    var userStream = Rx_1.Observable.of({
                        userId: 1, userName: 'chanu'
                    }).delay(2000);
                    /** join */
                    var tweetsStream = Rx_1.Observable.of([1, 2, 3]).delay(1500);
                    Rx_1.Observable
                        .forkJoin(userStream, tweetsStream)
                        .map(function (joined) { return Object({ user: joined[0], tweets: joined[1] }); })
                        .subscribe(function (result) { return console.log(result); });
                    /** error handling */
                    var observable = Rx_1.Observable.throw(new Error("Something failed!"));
                    observable
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); });
                    /** retry */
                    var counter = 0;
                    var ajaxCall = Rx_1.Observable
                        .of('url')
                        .flatMap(function () {
                        if (++counter < 2)
                            return Rx_1.Observable.throw(new Error("Request failed!"));
                        return Rx_1.Observable.of([1, 2, 3]);
                    })
                        .retry(3)
                        .subscribe(function (x) { return console.log("Response from retry: " + x); }, function (error) { return console.log(error); });
                    /** catching and continuing */
                    var remoteDataStream = Rx_1.Observable.throw(new Error("Something is wrong!"));
                    remoteDataStream.catch(function (err) {
                        var localDataStream = Rx_1.Observable.of([1, 2, 3]);
                        return localDataStream;
                    })
                        .subscribe(function (x) { return console.log("Catching and continuing: " + x); });
                    /** Completed */
                    Rx_1.Observable
                        .throw(new Error("error"))
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); }, function () { return console.log("Completed"); });
                    Rx_1.Observable
                        .fromArray([1, 2, 3])
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); }, function () { return console.log("Completed"); });
                }
                ObservablesComponent = __decorate([
                    core_1.Component({
                        selector: 'observables',
                        templateUrl: 'app/ReactiveX/observables.template.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ObservablesComponent);
                return ObservablesComponent;
            }());
            exports_1("ObservablesComponent", ObservablesComponent);
        }
    }
});
//# sourceMappingURL=observables.component.js.map