var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":145,"id":4718,"methods":[{"el":36,"sc":5,"sl":33},{"el":50,"sc":5,"sl":38},{"el":55,"sc":5,"sl":52},{"el":62,"sc":5,"sl":57},{"el":67,"sc":5,"sl":64},{"el":74,"sc":5,"sl":69},{"el":90,"sc":5,"sl":76},{"el":95,"sc":5,"sl":92},{"el":102,"sc":5,"sl":97},{"el":124,"sc":5,"sl":104},{"el":143,"sc":5,"sl":126}],"name":"UsageThrowableTest","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1012":{"methods":[{"sl":92},{"sl":104}],"name":"throwCheckedException","pass":true,"statements":[{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_1034":{"methods":[{"sl":64},{"sl":76}],"name":"throwError","pass":true,"statements":[{"sl":66},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_1092":{"methods":[{"sl":126}],"name":"throwAfterReturnValue","pass":true,"statements":[{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":135},{"sl":136},{"sl":139},{"sl":142}]},"test_1170":{"methods":[{"sl":92},{"sl":104}],"name":"throwCheckedException","pass":true,"statements":[{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_121":{"methods":[{"sl":57},{"sl":76}],"name":"throwSubclassOfRuntimeException","pass":true,"statements":[{"sl":59},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_1304":{"methods":[{"sl":97},{"sl":104}],"name":"throwSubclassOfCheckedException","pass":true,"statements":[{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_134":{"methods":[{"sl":97},{"sl":104}],"name":"throwSubclassOfCheckedException","pass":true,"statements":[{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_1464":{"methods":[{"sl":64},{"sl":76}],"name":"throwError","pass":true,"statements":[{"sl":66},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_1465":{"methods":[{"sl":38}],"name":"noUpperLimit","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49}]},"test_1516":{"methods":[{"sl":92},{"sl":104}],"name":"throwCheckedException","pass":true,"statements":[{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_1626":{"methods":[{"sl":126}],"name":"throwAfterReturnValue","pass":true,"statements":[{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":135},{"sl":136},{"sl":139},{"sl":142}]},"test_1628":{"methods":[{"sl":97},{"sl":104}],"name":"throwSubclassOfCheckedException","pass":true,"statements":[{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_1795":{"methods":[{"sl":92},{"sl":104}],"name":"throwCheckedException","pass":true,"statements":[{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_1801":{"methods":[{"sl":57},{"sl":76}],"name":"throwSubclassOfRuntimeException","pass":true,"statements":[{"sl":59},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_182":{"methods":[{"sl":57},{"sl":76}],"name":"throwSubclassOfRuntimeException","pass":true,"statements":[{"sl":59},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_183":{"methods":[{"sl":38}],"name":"noUpperLimit","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49}]},"test_1840":{"methods":[{"sl":57},{"sl":76}],"name":"throwSubclassOfRuntimeException","pass":true,"statements":[{"sl":59},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_1876":{"methods":[{"sl":69},{"sl":76}],"name":"throwSubclassOfError","pass":true,"statements":[{"sl":71},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_1961":{"methods":[{"sl":38}],"name":"noUpperLimit","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49}]},"test_2041":{"methods":[{"sl":126}],"name":"throwAfterReturnValue","pass":true,"statements":[{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":135},{"sl":136},{"sl":139},{"sl":142}]},"test_2070":{"methods":[{"sl":97},{"sl":104}],"name":"throwSubclassOfCheckedException","pass":true,"statements":[{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_2097":{"methods":[{"sl":64},{"sl":76}],"name":"throwError","pass":true,"statements":[{"sl":66},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_2632":{"methods":[{"sl":64},{"sl":76}],"name":"throwError","pass":true,"statements":[{"sl":66},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_2649":{"methods":[{"sl":69},{"sl":76}],"name":"throwSubclassOfError","pass":true,"statements":[{"sl":71},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_266":{"methods":[{"sl":97},{"sl":104}],"name":"throwSubclassOfCheckedException","pass":true,"statements":[{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_2691":{"methods":[{"sl":69},{"sl":76}],"name":"throwSubclassOfError","pass":true,"statements":[{"sl":71},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_2711":{"methods":[{"sl":64},{"sl":76}],"name":"throwError","pass":true,"statements":[{"sl":66},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_321":{"methods":[{"sl":57},{"sl":76}],"name":"throwSubclassOfRuntimeException","pass":true,"statements":[{"sl":59},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_436":{"methods":[{"sl":126}],"name":"throwAfterReturnValue","pass":true,"statements":[{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":135},{"sl":136},{"sl":139},{"sl":142}]},"test_476":{"methods":[{"sl":69},{"sl":76}],"name":"throwSubclassOfError","pass":true,"statements":[{"sl":71},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_512":{"methods":[{"sl":52},{"sl":76}],"name":"throwRuntimeException","pass":true,"statements":[{"sl":54},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_52":{"methods":[{"sl":69},{"sl":76}],"name":"throwSubclassOfError","pass":true,"statements":[{"sl":71},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_521":{"methods":[{"sl":52},{"sl":76}],"name":"throwRuntimeException","pass":true,"statements":[{"sl":54},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_6":{"methods":[{"sl":38}],"name":"noUpperLimit","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49}]},"test_703":{"methods":[{"sl":126}],"name":"throwAfterReturnValue","pass":true,"statements":[{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":135},{"sl":136},{"sl":139},{"sl":142}]},"test_746":{"methods":[{"sl":52},{"sl":76}],"name":"throwRuntimeException","pass":true,"statements":[{"sl":54},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_766":{"methods":[{"sl":92},{"sl":104}],"name":"throwCheckedException","pass":true,"statements":[{"sl":94},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":122}]},"test_776":{"methods":[{"sl":52},{"sl":76}],"name":"throwRuntimeException","pass":true,"statements":[{"sl":54},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]},"test_807":{"methods":[{"sl":38}],"name":"noUpperLimit","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49}]},"test_855":{"methods":[{"sl":52},{"sl":76}],"name":"throwRuntimeException","pass":true,"statements":[{"sl":54},{"sl":77},{"sl":78},{"sl":80},{"sl":82},{"sl":83},{"sl":86},{"sl":89}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [183, 807, 1465, 6, 1961], [], [183, 807, 1465, 6, 1961], [183, 807, 1465, 6, 1961], [183, 807, 1465, 6, 1961], [183, 807, 1465, 6, 1961], [183, 807, 1465, 6, 1961], [183, 807, 1465, 6, 1961], [183, 807, 1465, 6, 1961], [183, 807, 1465, 6, 1961], [183, 807, 1465, 6, 1961], [183, 807, 1465, 6, 1961], [], [], [512, 855, 746, 776, 521], [], [512, 855, 746, 776, 521], [], [], [182, 321, 1840, 1801, 121], [], [182, 321, 1840, 1801, 121], [], [], [], [], [1464, 2711, 1034, 2097, 2632], [], [1464, 2711, 1034, 2097, 2632], [], [], [476, 2691, 2649, 1876, 52], [], [476, 2691, 2649, 1876, 52], [], [], [], [], [476, 1464, 512, 2691, 855, 2649, 1876, 182, 746, 2711, 321, 1034, 776, 52, 521, 1840, 1801, 121, 2097, 2632], [476, 1464, 512, 2691, 855, 2649, 1876, 182, 746, 2711, 321, 1034, 776, 52, 521, 1840, 1801, 121, 2097, 2632], [476, 1464, 512, 2691, 855, 2649, 1876, 182, 746, 2711, 321, 1034, 776, 52, 521, 1840, 1801, 121, 2097, 2632], [], [476, 1464, 512, 2691, 855, 2649, 1876, 182, 746, 2711, 321, 1034, 776, 52, 521, 1840, 1801, 121, 2097, 2632], [], [476, 1464, 512, 2691, 855, 2649, 1876, 182, 746, 2711, 321, 1034, 776, 52, 521, 1840, 1801, 121, 2097, 2632], [476, 1464, 512, 2691, 855, 2649, 1876, 182, 746, 2711, 321, 1034, 776, 52, 521, 1840, 1801, 121, 2097, 2632], [], [], [476, 1464, 512, 2691, 855, 2649, 1876, 182, 746, 2711, 321, 1034, 776, 52, 521, 1840, 1801, 121, 2097, 2632], [], [], [476, 1464, 512, 2691, 855, 2649, 1876, 182, 746, 2711, 321, 1034, 776, 52, 521, 1840, 1801, 121, 2097, 2632], [], [], [1795, 1012, 1170, 1516, 766], [], [1795, 1012, 1170, 1516, 766], [], [], [266, 1628, 1304, 134, 2070], [], [266, 1628, 1304, 134, 2070], [], [], [], [], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [], [], [], [], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [], [], [266, 1628, 1304, 1795, 134, 1012, 1170, 1516, 766, 2070], [], [], [], [2041, 703, 1092, 1626, 436], [], [2041, 703, 1092, 1626, 436], [2041, 703, 1092, 1626, 436], [], [2041, 703, 1092, 1626, 436], [], [2041, 703, 1092, 1626, 436], [], [2041, 703, 1092, 1626, 436], [2041, 703, 1092, 1626, 436], [], [], [2041, 703, 1092, 1626, 436], [], [], [2041, 703, 1092, 1626, 436], [], [], []]
