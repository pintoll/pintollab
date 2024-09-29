import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { getS3FolderContents, getS3ImageUrl, uploadImages } from "../../../shared/image";

const DEAFULT_PATH = "/mnt/c/Users/Asus/OneDrive/문서/obsidian/blog/Blog/";
const POSTS_PATH = path.join(DEAFULT_PATH, "posts");
const IMAGES_PATH = path.join(DEAFULT_PATH, "images");

const JSON_PATH = path.join(process.cwd(), "src/entity/post/model/");

const bucketName = process.env.S3_BUCKET_NAME as string;

type Tags = {
  [key: string]: number[];
};

async function makePostJson() {
  const files: string[] = fs
    .readdirSync(POSTS_PATH, "utf-8")
    .filter((file) => path.extname(file) === ".md");

  console.log(files);

  // get posts from markdown files
  const posts = files.map((fileName) => {
    const file = fs.readFileSync(path.join(POSTS_PATH, fileName), "utf-8");
    return matter(file);
  });

  // image upload logic
  const imageKeys: string[] = [];

  posts.forEach((post) => {
    post.content = post.content.replace(/!\[\[(.*?)\]\]/g, (_, content) => {
      imageKeys.push(content);
      return `![${content}](${getS3ImageUrl(`blog/${content}`)})`;
    });
  });

  posts.forEach((post) => {
    if(!imageKeys.includes(post.data.thumbnail)) {
      imageKeys.push(post.data.thumbnail);
    }
  });

  const savedKeys = await getS3FolderContents(bucketName, "blog");
  const newKeys = imageKeys.filter((key) => !savedKeys.includes(key));
  await uploadImages({ bucketName, folderPath: IMAGES_PATH, keys: newKeys });

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
