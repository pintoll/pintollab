export function getS3ImageUrl(key: string): string {
    const bucketName = process.env.S3_BUCKET_NAME;
    const region = process.env.AWS_REGION;
  return `https://${bucketName}.s3.${region}.amazonaws.com/blog/${key}`;
}
