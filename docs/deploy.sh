###
 # @Author: zhoulf
 # @FilePath: /roll-lib/docs/deploy.sh
 # @Date: 2021-11-30 14:41:49
 # @LastEditors: zhoulf
 # @LastEditTime: 2021-11-30 14:47:01
 # @Description: 
### 
#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
echo 'www.zhoulf.utility.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到  https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
#