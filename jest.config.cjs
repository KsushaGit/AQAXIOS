module.exports = {
    testEnvironment: 'node',
    verbose: true,
    reporters: [
        'default',
        ['jest-html-reporter', {
            pageTitle: 'My API test',
            outputPath: 'reports/test-report.html'
}
]]
}
