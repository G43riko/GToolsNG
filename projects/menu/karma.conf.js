// Karma configuration file, see create for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const pupeeteer = require("puppeteer");
process.env.CHROME_BIN = pupeeteer.executablePath();

module.exports = function (config) {
    config.set({
        frameworks: ["jasmine", "@angular-devkit/build-angular"],
        plugins: [
            require("karma-jasmine"),
            require("karma-chrome-launcher"),
            require("karma-jasmine-html-reporter"),
            require("karma-coverage-istanbul-reporter"),
            require("@angular-devkit/build-angular/plugins/karma"),
        ],
        client: {
            clearContext: false, // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require("path").join(__dirname, "../../coverage/menu"),
            reports: ["html", "lcovonly"],
            fixWebpackSourcePaths: true,
        },
        customLaunchers: {
            ChromiumHeadless: {
                base: "ChromeHeadless",
                flags: [
                    "--headless",
                    "--disable-gpu",
                    "--no-sandbox",
                    "remote-debugging-port=9200"
                ]
            }
        },
        reporters: ["progress", "kjhtml"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["ChromiumHeadless"],
        singleRun: true,
        restartOnFileChange: true,
    });
};
