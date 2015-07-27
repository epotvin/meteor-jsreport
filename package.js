Package.describe({
    summary: "Exposes the jsrender engine from Meteor applications",
    version: "0.0.1",
    name: "epotvin:jsreport",
    git: "https://github.com/epotvin/meteor-jsreport.git",
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use('webapp', 'server');

    api.addFiles(['jsreport.js'], 'server');
});

Npm.depends({
    "toner": "0.1.3",
    "toner-jsrender": "0.1.0",
    "toner-phantom": "0.1.1",
    "express": "4.13.1"
});