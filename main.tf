provider "aws" {
  region = "ap-south-1" # Change to your preferred AWS region
}

# S3 bucket for static website
resource "aws_s3_bucket" "frontend" {
  bucket        = "my-nextjs-bucket-2025" # <-- change to a unique bucket name
  force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

# Make bucket content publicly readable
resource "aws_s3_bucket_policy" "frontend" {
  bucket = aws_s3_bucket.frontend.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = [
          "s3:GetObject"
        ],
        Resource  = "${aws_s3_bucket.frontend.arn}/*"
      }
    ]
  })
}