FROM harbor.beststudy.net/artifacts/dev-nodejs-test:0.1
MAINTAINER chenzhiyuan@zy.com
RUN rm -rf /app/
COPY source /app/
RUN chmod +x /app/run.sh
#RUN touch /app/aaa
#RUN tar -zxf /app/live.tar.gz /app/.
RUN cd /app && npm install -g cnpm --registry=https%3A%2F%2Fregistry.npm.taobao.org && cnpm install && npm run build
# RUN cd /app && npm install && npm run build
EXPOSE 8080
CMD /app/run.sh