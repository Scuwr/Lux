start-server:
	./node_modules/supervisor/lib/cli-wrapper.js --no-restart-on-err -i public server.js


start-redis:
# 6397
	redis-6.2.7/src/redis-server redis.conf


install:
	npm install
	wget https://download.redis.io/releases/redis-6.2.7.tar.gz
	tar xvzf redis-6.2.7.tar.gz
	(cd redis-6.2.7; make)
