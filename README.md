# Авторизация с помощью Gatekeeper
Gatekeeper – это простой прокси-сервер аутентификации и авторизации.

Для организации взаимодействия Gatekeeper и Keycloak, необходимо:
1. Настроить Keycloak
2. Настроить Gatekeeper

## Настройка Keycloak
Для настройки Keycloak, нужно выполнить следующий порядок действий:
1. Создать область (realm) или настроить существующую. В текущем примере: `master`.
2. Добавить клиентское приложение (client) или использовать ранее зарегистрированное. В текущем примере: `ember-app`.
3. Перейти в недавно добавленное меню "Client Scopes":
	- Добавить "client scope". В текущем примере: `ember-app-audience-service`.
	- В настройках `ember-app-audience-service` перейти на вкладку "Mappers", где создать "mapper" со следующими параметрами:
		+ Mapper type: Audience.
		+ Name: `ember-app-audience`.
		+ Included Client Audience: `ember-app`.
		+ Add to access token: `On`.
4. Настроить клиент `ember-app` в меню "Clients":
	- Во вкладке "Client Scopes" в настройках `ember-app` добавить "client scope": `ember-app-audience-service` с параметром `Default`.

В данном примере все проделанные настройки сохранены и подгружаются из конфигурационных файлов при создании сервиса Keycloak.

## Настройка Gatekeeper
Все настройки Gatekeeper выполнены в конфигурационном файле, содержимое которого представлено ниже.

```
client-id: ember-app

discovery-url: http://keycloak:8080/realms/master

openid-provider-retry-count: 10

enable-default-deny: true

listen: :80

upstream-url: http://app:80

resources:
- uri: /localhost*
  white-listed: true
```

Рассмотрим подробнее заданные параметры:
- `client-id`– идентификатор клиента, зарегистрированного в Keycloak.
- `discovery-url` – URL-адрес для получения конфигурации OpenID.
- `openid-provider-retry-count` – количество попыток получения конфигурации. Увеличен до 10, чтобы дождаться старта Keycloak.
- `enable-default-deny` – включает запрет по умолчанию для всех запросов, запросы с допустимым токеном разрешены. Нужно будет явно указывать, что разрешено.
- `listen` – задаёт интерфейс для прослушивания, например, {адрес}:{порт}. Обязательный параметр, не задан по умолчанию.
- `upstream-url` – URL-адрес проксируемого узла.
- `resources` – список ресурсов, к которым задаются правила доступа.

## Запуск в Docker
Для корректной работы примера, необходимо выполнить следющий ряд действий:
1. Прописать в файле hosts:
	- 127.0.0.1 keycloak
2. Запустить `src\Docker\create-image.cmd`
3. Запустить `src\Docker\start.cmd`


## Источники
1. [Gatekeeper User Guide](https://github.com/gogatekeeper/gatekeeper/blob/master/docs/content/userguide/_index.md).
2. [Gatekeeper Configuration Reference](https://github.com/gogatekeeper/gatekeeper/blob/master/docs/content/configuration/_index.md).