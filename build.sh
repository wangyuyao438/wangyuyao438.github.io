npm install -g hexo-cli
mkdir hexo
cd hexo
hexo cl
hexo init
npm install
rm -rf source/_posts
mkdir -p source/_posts
git clone https://github.com/solstice23/hexo-theme-argon/ theme/argon
npm un hexo-renderer-marked --save
npm i hexo-renderer-markdown-it --save
npm i hexo-image-link --save
cd ../
cp -r `ls | grep -v hexo | grep -v config.yml | xargs` hexo/source/_posts
cp config.yml hexo
cd hexo && hexo g --config config.yml