# samiralavi.github.io
Personal website of Seyed Amir Alavi created by MkDocs and Material for MkDocs.

# Running the web server locally
To run the webserver locally, execute the following docker command:
```sh
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```