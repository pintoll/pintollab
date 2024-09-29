import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DEAFULT_PATH = "/mnt/c/Users/Asus/OneDrive/문서/obsidian/blog/Blog/";
const POSTS_PATH = path.join(DEAFULT_PATH, "posts");
const IMAGES_PATH = path.join(DEAFULT_PATH, "images");

const JSON_PATH = path.join(process.cwd(), "src/entity/post/model/");

type Tags = {
  [key: string]: number[];
};

function makePostJson() {
  const files: string[] = fs
    .readdirSync(POSTS_PATH, "utf-8")
    .filter((file) => path.extname(file) === ".md");

  console.log(files);

  const posts = files.map((fileName) => {
    const file = fs.readFileSync(path.join(POSTS_PATH, fileName), "utf-8");
    return matter(file);
  });

  // Replace image with "Image"
  posts.forEach((post) => {
    post.content = post.content.replace(/!\[\[(.*?)\]\]/g, (_, content) => {
      console.log(content);
      return "Image"; // #TODO
    });
  });

  const tags = posts.reduce<Tags>((acc, post) => {
    post.data.tags.forEach((tag: string) => {
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(post.data.id);
    });
    return acc;
  }, {});

  fs.writeFileSync(path.join(JSON_PATH, "posts.json"), JSON.stringify(posts));
  fs.writeFileSync(path.join(JSON_PATH, "tags.json"), JSON.stringify(tags));
}

makePostJson();
