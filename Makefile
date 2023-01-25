start-redis:
# CLI: redis-cli -p 6397
# 6397
	redis-7.0.8/src/redis-server redis.conf

debug:
	npm run build
	node server.js

start-server:
	./node_modules/supervisor/lib/cli-wrapper.js --no-restart-on-err -i public server.js


start-daemons:
	# START: nohup make start-daemons > server.log 2> server_error.log &

	# DATABASE
	# CHECK: ps aux | grep redis-server | grep cmarnold
	# SHUTDOWN: redis-7.0.8/src/redis-cli -p 6397 shutdown
	redis-7.0.8/src/redis-server redis.conf --daemonize yes

	# SERVER
	# CHECK: ps aux | grep node | grep cmarnold
	# KILL: kill -9 PID
	./node_modules/supervisor/lib/cli-wrapper.js --no-restart-on-err -i public server.js &


install:
	npm install
	wget https://download.redis.io/releases/redis-7.0.8.tar.gz
	tar xvzf redis-7.0.8.tar.gz
	rm redis-7.0.8.tar.gz
	(cd redis-7.0.8; make)
