var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":167,"id":6534,"methods":[{"el":71,"sc":5,"sl":67},{"el":77,"sc":5,"sl":73},{"el":86,"sc":5,"sl":79},{"el":92,"sc":5,"sl":88},{"el":98,"sc":5,"sl":94},{"el":104,"sc":5,"sl":100},{"el":110,"sc":5,"sl":106},{"el":116,"sc":5,"sl":112},{"el":122,"sc":5,"sl":118},{"el":127,"sc":5,"sl":124},{"el":132,"sc":5,"sl":129},{"el":137,"sc":5,"sl":134},{"el":142,"sc":5,"sl":139},{"el":149,"sc":5,"sl":144},{"el":156,"sc":5,"sl":151},{"el":166,"sc":5,"sl":158}],"name":"ReflectionUtilsTest","sl":29},{"el":34,"id":6534,"methods":[{"el":33,"sc":9,"sl":32}],"name":"ReflectionUtilsTest.B","sl":31},{"el":65,"id":6535,"methods":[{"el":40,"sc":9,"sl":38},{"el":43,"sc":9,"sl":42},{"el":46,"sc":9,"sl":45},{"el":49,"sc":9,"sl":48},{"el":52,"sc":9,"sl":51},{"el":55,"sc":9,"sl":54},{"el":58,"sc":9,"sl":57},{"el":61,"sc":9,"sl":60},{"el":64,"sc":9,"sl":63}],"name":"ReflectionUtilsTest.A","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1028":{"methods":[{"sl":144}],"name":"testGetConstructor_AllPrimitives","pass":true,"statements":[{"sl":146},{"sl":148}]},"test_1046":{"methods":[{"sl":144}],"name":"testGetConstructor_AllPrimitives","pass":true,"statements":[{"sl":146},{"sl":148}]},"test_1061":{"methods":[{"sl":139}],"name":"testGetConstructor_WrongParams","pass":true,"statements":[{"sl":141}]},"test_1062":{"methods":[{"sl":134}],"name":"testGetConstructor_notFound","pass":true,"statements":[{"sl":136}]},"test_1069":{"methods":[{"sl":106}],"name":"testGetConstructor_public","pass":true,"statements":[{"sl":108},{"sl":109}]},"test_110":{"methods":[{"sl":100}],"name":"testFindMethodClassOfQStringClassOfQArray","pass":true,"statements":[{"sl":102},{"sl":103}]},"test_1167":{"methods":[{"sl":79}],"name":"testFindMethod_Ambiguous","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":84}]},"test_1180":{"methods":[{"sl":134}],"name":"testGetConstructor_notFound","pass":true,"statements":[{"sl":136}]},"test_125":{"methods":[{"sl":67}],"name":"testFindMethod","pass":true,"statements":[{"sl":69},{"sl":70}]},"test_1272":{"methods":[{"sl":158}],"name":"testGetDeclareMethod_NotFound","pass":true,"statements":[{"sl":160},{"sl":161},{"sl":164}]},"test_1311":{"methods":[{"sl":94}],"name":"testFindMethod_Superclass","pass":true,"statements":[{"sl":96},{"sl":97}]},"test_1343":{"methods":[{"sl":67}],"name":"testFindMethod","pass":true,"statements":[{"sl":69},{"sl":70}]},"test_1381":{"methods":[{"sl":158}],"name":"testGetDeclareMethod_NotFound","pass":true,"statements":[{"sl":160},{"sl":161},{"sl":164}]},"test_1395":{"methods":[{"sl":118}],"name":"testGetConstructor_default","pass":true,"statements":[{"sl":120},{"sl":121}]},"test_1410":{"methods":[{"sl":124}],"name":"testGetConstructor_private","pass":true,"statements":[{"sl":126}]},"test_1418":{"methods":[{"sl":94}],"name":"testFindMethod_Superclass","pass":true,"statements":[{"sl":96},{"sl":97}]},"test_1426":{"methods":[{"sl":106}],"name":"testGetConstructor_public","pass":true,"statements":[{"sl":108},{"sl":109}]},"test_1497":{"methods":[{"sl":144}],"name":"testGetConstructor_AllPrimitives","pass":true,"statements":[{"sl":146},{"sl":148}]},"test_1594":{"methods":[{"sl":94}],"name":"testFindMethod_Superclass","pass":true,"statements":[{"sl":96},{"sl":97}]},"test_1617":{"methods":[{"sl":134}],"name":"testGetConstructor_notFound","pass":true,"statements":[{"sl":136}]},"test_1618":{"methods":[{"sl":134}],"name":"testGetConstructor_notFound","pass":true,"statements":[{"sl":136}]},"test_1623":{"methods":[{"sl":151}],"name":"testGetDeclareMethod_Found","pass":true,"statements":[{"sl":153},{"sl":154},{"sl":155}]},"test_1704":{"methods":[{"sl":88}],"name":"testFindMethod_WrongParams","pass":true,"statements":[{"sl":90},{"sl":91}]},"test_1715":{"methods":[{"sl":94}],"name":"testFindMethod_Superclass","pass":true,"statements":[{"sl":96},{"sl":97}]},"test_1720":{"methods":[{"sl":73}],"name":"testFindMethod_NotFound","pass":true,"statements":[{"sl":75},{"sl":76}]},"test_1729":{"methods":[{"sl":118}],"name":"testGetConstructor_default","pass":true,"statements":[{"sl":120},{"sl":121}]},"test_1863":{"methods":[{"sl":100}],"name":"testFindMethodClassOfQStringClassOfQArray","pass":true,"statements":[{"sl":102},{"sl":103}]},"test_1867":{"methods":[{"sl":67}],"name":"testFindMethod","pass":true,"statements":[{"sl":69},{"sl":70}]},"test_1874":{"methods":[{"sl":79}],"name":"testFindMethod_Ambiguous","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":84}]},"test_1909":{"methods":[{"sl":112}],"name":"testGetConstructor_protected","pass":true,"statements":[{"sl":114},{"sl":115}]},"test_1922":{"methods":[{"sl":118}],"name":"testGetConstructor_default","pass":true,"statements":[{"sl":120},{"sl":121}]},"test_1933":{"methods":[{"sl":67}],"name":"testFindMethod","pass":true,"statements":[{"sl":69},{"sl":70}]},"test_1970":{"methods":[{"sl":124}],"name":"testGetConstructor_private","pass":true,"statements":[{"sl":126}]},"test_2017":{"methods":[{"sl":79}],"name":"testFindMethod_Ambiguous","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":84}]},"test_2037":{"methods":[{"sl":100}],"name":"testFindMethodClassOfQStringClassOfQArray","pass":true,"statements":[{"sl":102},{"sl":103}]},"test_2068":{"methods":[{"sl":106}],"name":"testGetConstructor_public","pass":true,"statements":[{"sl":108},{"sl":109}]},"test_2082":{"methods":[{"sl":158}],"name":"testGetDeclareMethod_NotFound","pass":true,"statements":[{"sl":160},{"sl":161},{"sl":164}]},"test_2188":{"methods":[{"sl":124}],"name":"testGetConstructor_private","pass":true,"statements":[{"sl":126}]},"test_2208":{"methods":[{"sl":106}],"name":"testGetConstructor_public","pass":true,"statements":[{"sl":108},{"sl":109}]},"test_2218":{"methods":[{"sl":88}],"name":"testFindMethod_WrongParams","pass":true,"statements":[{"sl":90},{"sl":91}]},"test_225":{"methods":[{"sl":124}],"name":"testGetConstructor_private","pass":true,"statements":[{"sl":126}]},"test_2272":{"methods":[{"sl":67}],"name":"testFindMethod","pass":true,"statements":[{"sl":69},{"sl":70}]},"test_2360":{"methods":[{"sl":151}],"name":"testGetDeclareMethod_Found","pass":true,"statements":[{"sl":153},{"sl":154},{"sl":155}]},"test_2422":{"methods":[{"sl":88}],"name":"testFindMethod_WrongParams","pass":true,"statements":[{"sl":90},{"sl":91}]},"test_2436":{"methods":[{"sl":112}],"name":"testGetConstructor_protected","pass":true,"statements":[{"sl":114},{"sl":115}]},"test_2441":{"methods":[{"sl":73}],"name":"testFindMethod_NotFound","pass":true,"statements":[{"sl":75},{"sl":76}]},"test_2480":{"methods":[{"sl":129}],"name":"testGetConstructor_twoMatching","pass":true,"statements":[{"sl":131}]},"test_2493":{"methods":[{"sl":118}],"name":"testGetConstructor_default","pass":true,"statements":[{"sl":120},{"sl":121}]},"test_2514":{"methods":[{"sl":73}],"name":"testFindMethod_NotFound","pass":true,"statements":[{"sl":75},{"sl":76}]},"test_2599":{"methods":[{"sl":134}],"name":"testGetConstructor_notFound","pass":true,"statements":[{"sl":136}]},"test_267":{"methods":[{"sl":158}],"name":"testGetDeclareMethod_NotFound","pass":true,"statements":[{"sl":160},{"sl":161},{"sl":164}]},"test_2683":{"methods":[{"sl":112}],"name":"testGetConstructor_protected","pass":true,"statements":[{"sl":114},{"sl":115}]},"test_2753":{"methods":[{"sl":144}],"name":"testGetConstructor_AllPrimitives","pass":true,"statements":[{"sl":146},{"sl":148}]},"test_2783":{"methods":[{"sl":94}],"name":"testFindMethod_Superclass","pass":true,"statements":[{"sl":96},{"sl":97}]},"test_28":{"methods":[{"sl":124}],"name":"testGetConstructor_private","pass":true,"statements":[{"sl":126}]},"test_2836":{"methods":[{"sl":139}],"name":"testGetConstructor_WrongParams","pass":true,"statements":[{"sl":141}]},"test_2881":{"methods":[{"sl":139}],"name":"testGetConstructor_WrongParams","pass":true,"statements":[{"sl":141}]},"test_346":{"methods":[{"sl":158}],"name":"testGetDeclareMethod_NotFound","pass":true,"statements":[{"sl":160},{"sl":161},{"sl":164}]},"test_354":{"methods":[{"sl":129}],"name":"testGetConstructor_twoMatching","pass":true,"statements":[{"sl":131}]},"test_364":{"methods":[{"sl":151}],"name":"testGetDeclareMethod_Found","pass":true,"statements":[{"sl":153},{"sl":154},{"sl":155}]},"test_451":{"methods":[{"sl":73}],"name":"testFindMethod_NotFound","pass":true,"statements":[{"sl":75},{"sl":76}]},"test_474":{"methods":[{"sl":79}],"name":"testFindMethod_Ambiguous","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":84}]},"test_485":{"methods":[{"sl":100}],"name":"testFindMethodClassOfQStringClassOfQArray","pass":true,"statements":[{"sl":102},{"sl":103}]},"test_506":{"methods":[{"sl":88}],"name":"testFindMethod_WrongParams","pass":true,"statements":[{"sl":90},{"sl":91}]},"test_585":{"methods":[{"sl":100}],"name":"testFindMethodClassOfQStringClassOfQArray","pass":true,"statements":[{"sl":102},{"sl":103}]},"test_588":{"methods":[{"sl":139}],"name":"testGetConstructor_WrongParams","pass":true,"statements":[{"sl":141}]},"test_621":{"methods":[{"sl":144}],"name":"testGetConstructor_AllPrimitives","pass":true,"statements":[{"sl":146},{"sl":148}]},"test_623":{"methods":[{"sl":129}],"name":"testGetConstructor_twoMatching","pass":true,"statements":[{"sl":131}]},"test_664":{"methods":[{"sl":118}],"name":"testGetConstructor_default","pass":true,"statements":[{"sl":120},{"sl":121}]},"test_694":{"methods":[{"sl":106}],"name":"testGetConstructor_public","pass":true,"statements":[{"sl":108},{"sl":109}]},"test_801":{"methods":[{"sl":112}],"name":"testGetConstructor_protected","pass":true,"statements":[{"sl":114},{"sl":115}]},"test_809":{"methods":[{"sl":151}],"name":"testGetDeclareMethod_Found","pass":true,"statements":[{"sl":153},{"sl":154},{"sl":155}]},"test_825":{"methods":[{"sl":151}],"name":"testGetDeclareMethod_Found","pass":true,"statements":[{"sl":153},{"sl":154},{"sl":155}]},"test_843":{"methods":[{"sl":139}],"name":"testGetConstructor_WrongParams","pass":true,"statements":[{"sl":141}]},"test_884":{"methods":[{"sl":112}],"name":"testGetConstructor_protected","pass":true,"statements":[{"sl":114},{"sl":115}]},"test_90":{"methods":[{"sl":129}],"name":"testGetConstructor_twoMatching","pass":true,"statements":[{"sl":131}]},"test_919":{"methods":[{"sl":88}],"name":"testFindMethod_WrongParams","pass":true,"statements":[{"sl":90},{"sl":91}]},"test_962":{"methods":[{"sl":73}],"name":"testFindMethod_NotFound","pass":true,"statements":[{"sl":75},{"sl":76}]},"test_972":{"methods":[{"sl":79}],"name":"testFindMethod_Ambiguous","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":84}]},"test_976":{"methods":[{"sl":129}],"name":"testGetConstructor_twoMatching","pass":true,"statements":[{"sl":131}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1867, 125, 1933, 1343, 2272], [], [1867, 125, 1933, 1343, 2272], [1867, 125, 1933, 1343, 2272], [], [], [1720, 962, 451, 2514, 2441], [], [1720, 962, 451, 2514, 2441], [1720, 962, 451, 2514, 2441], [], [], [1167, 2017, 1874, 972, 474], [], [1167, 2017, 1874, 972, 474], [1167, 2017, 1874, 972, 474], [], [1167, 2017, 1874, 972, 474], [], [], [], [2218, 919, 1704, 2422, 506], [], [2218, 919, 1704, 2422, 506], [2218, 919, 1704, 2422, 506], [], [], [2783, 1715, 1311, 1594, 1418], [], [2783, 1715, 1311, 1594, 1418], [2783, 1715, 1311, 1594, 1418], [], [], [485, 585, 1863, 2037, 110], [], [485, 585, 1863, 2037, 110], [485, 585, 1863, 2037, 110], [], [], [2208, 1426, 2068, 694, 1069], [], [2208, 1426, 2068, 694, 1069], [2208, 1426, 2068, 694, 1069], [], [], [884, 2436, 2683, 801, 1909], [], [884, 2436, 2683, 801, 1909], [884, 2436, 2683, 801, 1909], [], [], [664, 1729, 1922, 2493, 1395], [], [664, 1729, 1922, 2493, 1395], [664, 1729, 1922, 2493, 1395], [], [], [2188, 28, 1410, 1970, 225], [], [2188, 28, 1410, 1970, 225], [], [], [623, 90, 976, 354, 2480], [], [623, 90, 976, 354, 2480], [], [], [1617, 1618, 1180, 1062, 2599], [], [1617, 1618, 1180, 1062, 2599], [], [], [2836, 2881, 588, 843, 1061], [], [2836, 2881, 588, 843, 1061], [], [], [1028, 1497, 1046, 621, 2753], [], [1028, 1497, 1046, 621, 2753], [], [1028, 1497, 1046, 621, 2753], [], [], [2360, 809, 364, 825, 1623], [], [2360, 809, 364, 825, 1623], [2360, 809, 364, 825, 1623], [2360, 809, 364, 825, 1623], [], [], [1381, 346, 2082, 267, 1272], [], [1381, 346, 2082, 267, 1272], [1381, 346, 2082, 267, 1272], [], [], [1381, 346, 2082, 267, 1272], [], [], []]
