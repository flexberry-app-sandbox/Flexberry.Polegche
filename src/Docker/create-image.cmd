docker build --no-cache -f SQL\Dockerfile.PostgreSql -t polegche/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t polegche/app ../..
