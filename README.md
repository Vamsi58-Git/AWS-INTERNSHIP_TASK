# Amazon S3 Static Website Hosting

## Task Details
Host a static website on Amazon S3 using HTML, CSS, and JavaScript files.

## Website Link
[Visit My Website](http://vamsi-bucket-wb.s3-website.eu-north-1.amazonaws.com)

## AWS Services Used
- Amazon S3
- S3 Static Website Hosting

## Files Used
- `index.html` – Main webpage
- `style.css` – Website styling
- `script.js` – Website functionality

## Steps Performed
1. Created an S3 bucket named `vamsi-bucket-wb` in the `eu-north-1` region.
2. Uploaded the HTML, CSS, and JavaScript files to the bucket.
3. Enabled static website hosting and configured `index.html` as the index document.
4. Added a bucket policy to allow public read access to website objects.
5. Accessed the hosted website using the S3 website endpoint.

## Bucket Policy
The following policy allows public users to read objects stored in the bucket.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::vamsi-bucket-wb/*"
    }
  ]
}
```

## Result
Successfully hosted a static website using Amazon S3 and accessed it through the S3 website endpoint.

**Note:** Public access is enabled for the website objects. Use this configuration only when public access is intended.
