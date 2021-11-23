export AWS_PROFILE=bandup
serverless deploy --trackLibs true --stage prod --accountId 110064165845 --apiName warmup-us-east-1 --apiDomain bandup.io --clientName bandup --resourceName bandup --region us-east-1 --roleName BandUp-Lambda -v
serverless deploy --trackLibs true --stage prod --accountId 110064165845 --apiName warmup-us-east-2 --apiDomain bandup.io --clientName bandup --resourceName bandup --region us-east-2 --roleName BandUp-Lambda -v
serverless deploy --trackLibs true --stage prod --accountId 110064165845 --apiName warmup-us-west-1 --apiDomain bandup.io --clientName bandup --resourceName bandup --region us-west-1 --roleName BandUp-Lambda -v
serverless deploy --trackLibs true --stage prod --accountId 110064165845 --apiName warmup-us-west-2 --apiDomain bandup.io --clientName bandup --resourceName bandup --region us-west-2 --roleName BandUp-Lambda -v
serverless deploy --trackLibs true --stage prod --accountId 110064165845 --apiName warmup-ca-central-1 --apiDomain bandup.io --clientName bandup --resourceName bandup --region ca-central-1 --roleName BandUp-Lambda -v
