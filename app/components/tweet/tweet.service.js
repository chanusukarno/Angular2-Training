System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            "name": "Chanakya V",
                            "profilePic": "http://lorempixel.com/100/100/people/6",
                            "handle": "@getchanu",
                            "status": "Some sample text 1",
                            "votes": 10,
                            "myVote": true
                        },
                        {
                            "name": "Bobby",
                            "profilePic": "http://lorempixel.com/100/100/people/3",
                            "handle": "@bobby",
                            "status": "Some sample text 2",
                            "votes": 18,
                        },
                        {
                            "name": "Raghu",
                            "profilePic": "http://lorempixel.com/100/100/people/5",
                            "handle": "@raghu",
                            "status": "Some sample text 3",
                            "votes": 3,
                        },
                        {
                            "name": "Venkatesh",
                            "profilePic": "http://lorempixel.com/100/100/people/4",
                            "handle": "@vpn",
                            "status": "Some sample text 4",
                            "votes": 9,
                            "myVote": true
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map