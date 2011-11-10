var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":115,"id":8083,"methods":[{"el":59,"sc":5,"sl":51},{"el":73,"sc":5,"sl":61},{"el":86,"sc":5,"sl":75},{"el":93,"sc":5,"sl":88},{"el":107,"sc":5,"sl":95}],"name":"PartialMockingTest","sl":32},{"el":49,"id":8083,"methods":[{"el":42,"sc":9,"sl":40},{"el":46,"sc":9,"sl":44}],"name":"PartialMockingTest.A","sl":34}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1359":{"methods":[{"sl":88}],"name":"testPartialMock_InvalidParams","pass":true,"statements":[{"sl":90},{"sl":91}]},"test_1621":{"methods":[{"sl":51}],"name":"testPartialMock_PublicConstructor","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":58}]},"test_2057":{"methods":[{"sl":75}],"name":"testPartialMock_ConstructorNotFound","pass":true,"statements":[{"sl":77},{"sl":78}]},"test_2299":{"methods":[{"sl":95}],"name":"testPartialMock_ExceptionInConstructor","pass":true,"statements":[{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":105}]},"test_2766":{"methods":[{"sl":40},{"sl":61}],"name":"testPartialMock_ProtectedConstructor","pass":true,"statements":[{"sl":41},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":69},{"sl":70},{"sl":71},{"sl":72}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [2766], [2766], [], [], [], [], [], [], [], [], [], [1621], [], [], [1621], [1621], [1621], [], [1621], [], [], [2766], [], [2766], [2766], [2766], [2766], [], [], [2766], [2766], [2766], [2766], [], [], [2057], [], [2057], [2057], [], [], [], [], [], [], [], [], [], [1359], [], [1359], [1359], [], [], [], [2299], [], [2299], [2299], [2299], [2299], [], [2299], [], [], [2299], [], [], [], [], [], [], [], [], [], []]
