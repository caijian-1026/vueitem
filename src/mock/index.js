var Mock=require("mockjs");

Mock.mock("/home/homelist","get",require("./data/homelist.json"))
Mock.mock("/xiaozu/xiaozulist","get",require("./data/xiaozulist.json"))