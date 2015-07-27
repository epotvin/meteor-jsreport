var toner = Npm.require("toner")();
toner.engine("jsrender", Npm.require("toner-jsrender"));
toner.recipe("phantom", Npm.require("toner-phantom")());

var express = Npm.require('express');
var app = express();
WebApp.connectHandlers.use(Meteor.bindEnvironment(app));

app.get('/report', function (req, res) {
    toner.render({
        template: {
            engine: "jsrender",
            recipe: "phantom",
            content: "<h1>{{:foo}}</h1>"
        },
        data: { foo: "hello world"}
    }, function(err, out) {
        out.stream.pipe(res);
    });
});
