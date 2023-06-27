docker build --no-cache -f SQL\Dockerfile.PostgreSql -t flexberrygogatekeepersample/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t flexberrygogatekeepersample/app ../..
