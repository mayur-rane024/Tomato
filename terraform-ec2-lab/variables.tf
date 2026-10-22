variable "aws_region" {
  description = "AWS region where resources are created"
  type        = string
  default     = "ap-south-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "instance_name" {
  description = "Name of the EC2 instance"
  type        = string
  default     = "Mayuresh-EC2"
}

variable "environment" {
  description = "Environment tag"
  type        = string
  default     = "devops-practical"
}

variable "root_volume_size" {
  description = "Size of root EBS volume in GiB"
  type        = number
  default     = 10
}
