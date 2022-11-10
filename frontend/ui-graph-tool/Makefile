start-server:
	./node_modules/supervisor/lib/cli-wrapper.js --no-restart-on-err -i public server.js

start-server-daemon:
	# CHECK: ps aux | grep node | grep arkareem
	# KILL: kill -9 PID
	./node_modules/supervisor/lib/cli-wrapper.js --no-restart-on-err -i public server.js &


start-redis:
# CLI: redis-cli -p 6397
# 6397
	redis-6.2.7/src/redis-server redis.conf

start-redis-daemon:
	# CHECK: ps aux | grep redis-server | grep arkareem
	# SHUTDOWN: redis-6.2.7/src/redis-cli -p 6397 shutdown
	redis-6.2.7/src/redis-server redis.conf --daemonize yes


install:
	npm install
	wget https://download.redis.io/releases/redis-6.2.7.tar.gz
	tar xvzf redis-6.2.7.tar.gz
	(cd redis-6.2.7; make)
