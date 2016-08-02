System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.votesCount = 0;
                    this.myVote = 0;
                    this.change = new core_1.EventEmitter();
                }
                VoteComponent.prototype.onChange = function (status) {
                    if (status == '+1' && (this.myVote != 1)) {
                        ++this.votesCount;
                        ++this.myVote;
                        this.change.emit({ newValue: this.myVote });
                    }
                    else if (status == '-1' && (this.myVote != -1)) {
                        --this.votesCount;
                        --this.myVote;
                        this.change.emit({ newValue: this.myVote });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteComponent.prototype, "votesCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "change", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        templateUrl: 'app/components/vote/vote.template.html',
                        styles: ["\n                div.voter {\n                    width: 20px;\n                    padding: 20px;\n                    text-align: center;\n                }\n                \n                .glyphicon-chevron-up, .glyphicon-chevron-down {\n                    font-size: 22px;\n                    cursor: pointer;\n                }\n                 \n                .count {\n                    font-size: 16px;\n                    font-weight: bold;\n                }\n                \n                .highlight {\n                    color: dodgerblue;\n                }\n            "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
// Acc: 1907359496 
//# sourceMappingURL=vote.component.js.map