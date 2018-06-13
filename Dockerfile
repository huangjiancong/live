FROM harbor.beststudy.net/artifacts/dev-nodejs-test:0.2
MAINTAINER chenzhiyuan@zy.com
RUN rm -rf /app/
COPY source /app/
RUN chmod +x /app/run.sh
#RUN touch /app/aaa
#RUN tar -zxf /app/live.tar.gz /app/.
# RUN cd /app && npm install -g cnpm --registry https://registry.npm.taobao.org && cnpm install && npm run build
# RUN cd /app && npm set registry https://registry.npm.taobao.org && npm set disturl https://npm.taobao.org/dist 
# RUN ["/usr/local/bin/npm","cache clean"] 

RUN cd /app
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

RUN cd /app && cnpm install && npm run build
# RUN cd /app && npm install && npm run build
EXPOSE 8080
CMD /app/run.sh