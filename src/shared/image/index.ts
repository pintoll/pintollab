import { S3Client, PutObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { readdir, readFile } from "fs/promises";
import path from "path";

const bucketName = process.env.S3_BUCKET_NAME;
const region = process.env.AWS_REGION;

export function getS3ImageUrl(key: string): string {
  return `https://${bucketName}.s3.${region}.amazonaws.com/${key}`;
}

const s3Client = new S3Client({ region: region, credentials: {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
} });

export async function getS3FolderContents(bucketName: string, folderPath: string): Promise<string[]> {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: folderPath,
    });
  
    try {
      const data = await s3Client.send(command);
      
      // Filter out the folder itself and extract just the keys
      const keys = data.Contents
        ?.filter(item => item.Key !== folderPath) // Remove the folder itself
        .map(item => item.Key?.replace(`${folderPath}/`, '').trim()) // Remove the folder prefix
        .filter((key): key is string => key !== undefined && key !== ''); // Type guard and remove empty strings
      
      return keys || [];
    } catch (error) {
      console.error("Error fetching S3 folder contents:", error);
      throw error;
    }
  }

export const uploadImages = async ({ bucketName, folderPath, keys }: { bucketName: string, folderPath: string, keys: string[] }) => {
  try {    
    const uploadPromises = keys.map(async (key) => {
        const filePath = path.join(folderPath, key);
        const fileContent = await readFile(filePath);
        
        await s3Client.send(
          new PutObjectCommand({
            Bucket: bucketName,
            Body: fileContent,
            Key: `blog/${key}`,
          })
        );
      });

      await Promise.all(uploadPromises);
    
    console.log("All files uploaded successfully.");
  } catch (error) {
    console.error("Error uploading files:", error);
    throw error;
  }
}