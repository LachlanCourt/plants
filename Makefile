build:
	docker build -t plants:generic .
run:
	docker run -p 8080:8080 plants:generic yarn gatsby serve -p 8080 -H 0.0.0.0
clean:
	docker container rm -f $(shell docker container ls -aq)
push:
	docker tag ghcr.io/lachlancourt/plants:latest plants:generic && docker push ghcr.io/lachlancourt/plants:latest
pull:
	docker pull ghcr.io/lachlancourt/plants:latest && docker tag ghcr.io/lachlancourt/plants:latest plants:generic