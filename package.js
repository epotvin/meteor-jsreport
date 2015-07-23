Package.describe({
    summary: "Exposes the jsrender engine from Meteor applications",
    version: "0.0.1",
    name: "epotvin:jsrender",
    git: "https://github.com/epotvin/meteor-jsrender.git",
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.addFiles(['jsreport.js']);
});

Npm.depends({
    "toner": "0.1.3",
    "toner-jsrender": "0.1.0",
    "toner-phantom": "0.1.1"
});