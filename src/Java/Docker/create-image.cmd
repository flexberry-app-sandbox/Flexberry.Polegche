docker build --no-cache -f SQL\Dockerfile.PostgreSql -t polegche-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t polegche-java/app ../../..
