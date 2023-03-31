set -e

TAG=$(date +%s)

docker build --tag 771691878004.dkr.ecr.us-east-1.amazonaws.com/demo-app:$TAG --platform=linux/amd64 .

docker push 771691878004.dkr.ecr.us-east-1.amazonaws.com/demo-app:$TAG

echo $TAG
