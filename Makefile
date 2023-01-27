build:
	docker build -t plants:generic .
run:
	docker run -p 10010:10000 plants:generic yarn gatsby serve -p 10000 -H 0.0.0.0
clean:
	docker container rm -f $(shell docker container ls -aq)