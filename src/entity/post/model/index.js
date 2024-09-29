"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var gray_matter_1 = __importDefault(require("gray-matter"));
var DEAFULT_PATH = "/mnt/c/Users/Asus/OneDrive/문서/obsidian/blog/Blog/";
var POSTS_PATH = path_1.default.join(DEAFULT_PATH, "posts");
var IMAGES_PATH = path_1.default.join(DEAFULT_PATH, "images");
var JSON_PATH = path_1.default.join(process.cwd(), "src/entity/post/model/");
function makePostJson() {
    var files = fs_1.default
        .readdirSync(POSTS_PATH, "utf-8")
        .filter(function (file) { return path_1.default.extname(file) === ".md"; });
    console.log(files);
    var posts = files.map(function (fileName) {
        var file = fs_1.default.readFileSync(path_1.default.join(POSTS_PATH, fileName), "utf-8");
        return (0, gray_matter_1.default)(file);
    });
    // Replace image with "Image"
    posts.forEach(function (post) {
        post.content = post.content.replace(/!\[\[(.*?)\]\]/g, function (_, content) {
            console.log(content);
            return "Image"; // #TODO
        });
    });
    var tags = posts.reduce(function (acc, post) {
        post.data.tags.forEach(function (tag) {
            if (!acc[tag])
                acc[tag] = [];
            acc[tag].push(post.data.id);
        });
        return acc;
    }, {});
    fs_1.default.writeFileSync(path_1.default.join(JSON_PATH, "posts.json"), JSON.stringify(posts));
    fs_1.default.writeFileSync(path_1.default.join(JSON_PATH, "tags.json"), JSON.stringify(tags));
}
makePostJson();
