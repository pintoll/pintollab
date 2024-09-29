"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var gray_matter_1 = __importDefault(require("gray-matter"));
var image_1 = require("../../../shared/image");
var DEAFULT_PATH = "/mnt/c/Users/Asus/OneDrive/문서/obsidian/blog/Blog/";
var POSTS_PATH = path_1.default.join(DEAFULT_PATH, "posts");
var IMAGES_PATH = path_1.default.join(DEAFULT_PATH, "images");
var JSON_PATH = path_1.default.join(process.cwd(), "src/entity/post/model/");
var bucketName = process.env.S3_BUCKET_NAME;
function makePostJson() {
    return __awaiter(this, void 0, void 0, function () {
        var files, posts, imageKeys, savedKeys, newKeys, tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = fs_1.default
                        .readdirSync(POSTS_PATH, "utf-8")
                        .filter(function (file) { return path_1.default.extname(file) === ".md"; });
                    console.log(files);
                    posts = files.map(function (fileName) {
                        var file = fs_1.default.readFileSync(path_1.default.join(POSTS_PATH, fileName), "utf-8");
                        return (0, gray_matter_1.default)(file);
                    });
                    imageKeys = [];
                    posts.forEach(function (post) {
                        post.content = post.content.replace(/!\[\[(.*?)\]\]/g, function (_, content) {
                            imageKeys.push(content);
                            return "![".concat(content, "](").concat((0, image_1.getS3ImageUrl)("blog/".concat(content)), ")");
                        });
                    });
                    posts.forEach(function (post) {
                        if (!imageKeys.includes(post.data.thumbnail)) {
                            imageKeys.push(post.data.thumbnail);
                        }
                    });
                    return [4 /*yield*/, (0, image_1.getS3FolderContents)(bucketName, "blog")];
                case 1:
                    savedKeys = _a.sent();
                    console.log(savedKeys, imageKeys);
                    newKeys = imageKeys.filter(function (key) { return !savedKeys.includes(key); });
                    console.log(newKeys);
                    return [4 /*yield*/, (0, image_1.uploadImages)({ bucketName: bucketName, folderPath: IMAGES_PATH, keys: newKeys })];
                case 2:
                    _a.sent();
                    tags = posts.reduce(function (acc, post) {
                        post.data.tags.forEach(function (tag) {
                            if (!acc[tag])
                                acc[tag] = [];
                            acc[tag].push(post.data.id);
                        });
                        return acc;
                    }, {});
                    fs_1.default.writeFileSync(path_1.default.join(JSON_PATH, "posts.json"), JSON.stringify(posts));
                    fs_1.default.writeFileSync(path_1.default.join(JSON_PATH, "tags.json"), JSON.stringify(tags));
                    return [2 /*return*/];
            }
        });
    });
}
makePostJson();
