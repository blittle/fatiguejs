const whenToMock = [
    'src/**/*.js',
];

const whatToMock = {
    window: {
        document: {body: {}},
    },
}

mockGlobals(whenToMock, whatToMock);
