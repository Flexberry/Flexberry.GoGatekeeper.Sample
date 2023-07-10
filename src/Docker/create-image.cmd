docker build --no-cache -f SQL\Dockerfile.PostgreSql -t flexberrygogatekeepersample/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t flexberrygogatekeepersample/app ../..

docker build --no-cache -f KeyCloak\Dockerfile.Keycloak  -t flexberrygogatekeepersample/keycloak .

docker build --no-cache -f Gatekeeper\Dockerfile.Gatekeeper  -t flexberrygogatekeepersample/gatekeeper .
