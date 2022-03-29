# Node.js API Project Architecture (with Docker, Tests, and CI/CD)

By Nicklas Envall

[Article Source](https://medium.com/@nicklasenvall/node-js-api-project-architecture-with-docker-tests-and-ci-cd-ff60ca8df2b6)

## Docker

[Learning Source](https://programmingsoup.com/docker-basics)

Docker is designed to allow developers the ability to create, manage, and deploy _containers_. Docker is built on a client/server architecture where developers send commands via API on the client to a Linux server that hosts _Daemons_.

A _container_ is an isolated instance from an _image_. Containers are based on images that define all of the project dependencies and configurations.

An _image_ is a template for creating _containers_. Images determine dependencies and configurations for containers. Furthermore, images define and act as unionized file systems that control read/write access to each layer.

A _volume_ is files and folders that are accessible by multiple containers and creates _persistent data_.

The _Docker Compose Tool_ is used for managing "multi-container applications". With this tool, developers can easily run containers, automate testing, and setup continuous integration (CI) environments.
