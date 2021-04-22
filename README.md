# Django & React application
(Based on: [https://github.com/18F/docker-compose-django-react](https://github.com/18F/docker-compose-django-react))

This is a app prototype, for my personal use only. It consist of Django REST API (CRUD functionality) and React frontend (work in progress).

## Running

1. `docker-compose build`
1. `docker-compose up`
1. There should now be two servers running:
  - [http://127.0.0.1:5000](http://127.0.0.1:5000) is the Django app
  - [http://127.0.0.1:3000](http://127.0.0.1:3000) is the React app

## Using `docker-compose run` to issue one-off commands

If you want to run a one-off command, like installing dependencies, you can use the `docker-compose run <service_name> <cmd>`.

For example, to install a Javascript dependency and save that information to `package.json` we could run:
`docker-compose run --rm frontend npm install --save axios`

If you want to be on a shell for one of the Docker services, you can do something like:
`docker-compose run --rm frontend bash`