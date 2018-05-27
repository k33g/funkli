# Funkli

> WIP :construction:

**Funkli** is a CLI for the Funk project (https://github.com/k33g/funk), a scalable function provider (think to kind of small FaaS).

## How to install

- Just download the appropriate release: https://github.com/k33g/funkli/releases

## Create a Funk function

```shell
# JavaScript
./funkli --action create \
--token panda \
--description "this is the description" # optional argument
--url http://localhost:8080 \
--kind js \
--name message \
--file ./samples/message.js
```

```shell
# Kotlin
./funkli --action create \
--token panda \
--url http://localhost:8080 \
--kind kt \
--name pong \
--file ./samples/pong.kt
```

## Update a Funk function

```shell
# Kotlin
./funkli --action update \
--token panda \
--url http://localhost:8080 \
--kind kt \
--name pong \
--file ./samples/pong.kt
```

## Remove a Funk function

> WIP :construction:

## Run a Funk function


### Without parameters

```shell
funkli --action run \
--token panda \
--url http://localhost:8080 \
--kind js \
--name ping
```

### With parameters

```shell
./funkli-macos --action run \
--token panda \
--url http://localhost:8080 \
--kind js \
--name message \
--parameters '{"message":"hello world!"}'
```

## How to build Funkli

- you need **pkg**: `npm i -g pkg`
- then, type: `pkg funkli.js`, **pkg** will produce:
  - `funkli-linux`
  - `funkli-macos`
  - `funkli-win.exe`
- rename the appropriate fitle to `funkli` or `funkli.exe`
