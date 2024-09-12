import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(
  "/mnt/c/Users/Asus/OneDrive/문서/obsidian/dashboard/",
  "2. Area/Blog",
);
const JSON_PATH = path.join(process.cwd(), "src/entity/blog/model/");

type Tags = {
  [key: string]: number[];
};

function makePostJson() {
  const files: string[] = fs
    .readdirSync(POSTS_PATH, "utf-8")
    .filter((file) => path.extname(file) === ".md");

  const posts = files.map((fileName) => {
    const file = fs.readFileSync(path.join(POSTS_PATH, fileName), "utf-8");
    return matter(file);
  });

  posts.forEach(({ content }) => {
    content.replace(/!\[\[(.*?)\]\]/g, (_, content) => {
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
