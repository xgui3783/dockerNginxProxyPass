# Nginx Docker CORS Proxy

## quickstart

```
git clone <repo>
cd <repo>/test
docker-compose up

```

Then:

```
curl http://localhost:12345/node-test_1/80/random/path/should_be/logged-in/terminal?_ifNot=debug
```

## Logic

1st path = container name, 2nd path = port number, rest gets rewritten

```
http://localhost:12345/${container_name}/${port_number}/${forwarded_path}
```

## nb 

redirect/absolute path acts weirdly

## ssl with letsencrypt

use `docker-compose-ssl.yml` instead, and set environment variable`HOST=example.com`