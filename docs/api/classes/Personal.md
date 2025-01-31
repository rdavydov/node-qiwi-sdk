[qiwi-sdk](../README.md) / [Exports](../modules.md) / Personal

# Class: Personal

Имплементирует [персональное API QIWI](https://developer.qiwi.com/ru/qiwi-wallet-personal)

**`see`** [Описание](https://developer.qiwi.com/ru/qiwi-wallet-personal)

## Hierarchy

- `HttpAPI`

  ↳ **`Personal`**

## Implements

- [`IPersonalAPI`](../interfaces/IPersonalAPI.md)

## Table of contents

### Constructors

- [constructor](Personal.md#constructor)

### Properties

- [API\_HEADERS](Personal.md#api_headers)
- [API\_OK\_RESPONSE\_CODES](Personal.md#api_ok_response_codes)
- [API\_TIMEOUT](Personal.md#api_timeout)
- [API\_TOKEN](Personal.md#api_token)
- [API\_URL](Personal.md#api_url)
- [agent](Personal.md#agent)
- [hookId](Personal.md#hookid)
- [walletId](Personal.md#walletid)
- [webhookKey](Personal.md#webhookkey)
- [ChequeFormat](Personal.md#chequeformat)
- [Currency](Personal.md#currency)
- [IdentificationLevel](Personal.md#identificationlevel)
- [LimitType](Personal.md#limittype)
- [ReceiptFormat](Personal.md#receiptformat)
- [Recipients](Personal.md#recipients)
- [TransactionStatus](Personal.md#transactionstatus)
- [TransactionType](Personal.md#transactiontype)

### Methods

- [\_request](Personal.md#_request)
- [addWebHook](Personal.md#addwebhook)
- [blockCard](Personal.md#blockcard)
- [checkWebHookSign](Personal.md#checkwebhooksign)
- [createAccount](Personal.md#createaccount)
- [createFormUrl](Personal.md#createformurl)
- [createOauthToken](Personal.md#createoauthtoken)
- [createP2PKeyPair](Personal.md#createp2pkeypair)
- [delete](Personal.md#delete)
- [get](Personal.md#get)
- [getAccountOffers](Personal.md#getaccountoffers)
- [getAccounts](Personal.md#getaccounts)
- [getActiveWebHook](Personal.md#getactivewebhook)
- [getCardRequisites](Personal.md#getcardrequisites)
- [getCards](Personal.md#getcards)
- [getCommission](Personal.md#getcommission)
- [getIdentification](Personal.md#getidentification)
- [getLimits](Personal.md#getlimits)
- [getNewWebHookSecret](Personal.md#getnewwebhooksecret)
- [getPaymentHistory](Personal.md#getpaymenthistory)
- [getPaymentHistoryTotal](Personal.md#getpaymenthistorytotal)
- [getPersonProfile](Personal.md#getpersonprofile)
- [getRestrictions](Personal.md#getrestrictions)
- [getTransaction](Personal.md#gettransaction)
- [getTransactionCheque](Personal.md#gettransactioncheque)
- [getWebHookSecret](Personal.md#getwebhooksecret)
- [head](Personal.md#head)
- [patch](Personal.md#patch)
- [pay](Personal.md#pay)
- [pay2](Personal.md#pay2)
- [post](Personal.md#post)
- [put](Personal.md#put)
- [removeWebHook](Personal.md#removewebhook)
- [renameCard](Personal.md#renamecard)
- [sendTransactionCheque](Personal.md#sendtransactioncheque)
- [setDefaultAccount](Personal.md#setdefaultaccount)
- [setIdentification](Personal.md#setidentification)
- [testActiveWebHook](Personal.md#testactivewebhook)
- [unblockCard](Personal.md#unblockcard)

## Constructors

### constructor

• **new Personal**(`API_TOKEN`, `walletId?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `API_TOKEN` | `string` | `undefined` | Токен полученный на [Странице QIWI API](https://qiwi.com/api) |
| `walletId` | `StringOrNumber` | `""` | Номер кошелька |

#### Overrides

HttpAPI.constructor

#### Defined in

[src/services/personal.ts:84](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L84)

## Properties

### API\_HEADERS

• `Protected` `Readonly` **API\_HEADERS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Accept` | `string` |
| `Authorization` | `string` |
| `Content-Type` | `string` |
| `User-Agent` | `string` |

#### Overrides

HttpAPI.API\_HEADERS

#### Defined in

[src/services/personal.ts:69](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L69)

___

### API\_OK\_RESPONSE\_CODES

• `Protected` `Readonly` **API\_OK\_RESPONSE\_CODES**: `number`[]

#### Overrides

HttpAPI.API\_OK\_RESPONSE\_CODES

#### Defined in

[src/services/personal.ts:77](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L77)

___

### API\_TIMEOUT

• `Protected` `Readonly` **API\_TIMEOUT**: `number` = `10_000`

#### Inherited from

HttpAPI.API\_TIMEOUT

#### Defined in

[src/http.ts:47](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/http.ts#L47)

___

### API\_TOKEN

• `Readonly` **API\_TOKEN**: `string`

___

### API\_URL

• `Protected` `Readonly` **API\_URL**: ``"https://edge.qiwi.com"``

#### Overrides

HttpAPI.API\_URL

#### Defined in

[src/services/personal.ts:76](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L76)

___

### agent

• `Optional` **agent**: `Agent` \| (`parsedUrl`: `URL`) => `Agent`

#### Overrides

HttpAPI.agent

#### Defined in

[src/services/personal.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L64)

___

### hookId

• `Optional` **hookId**: `string`

#### Defined in

[src/services/personal.ts:67](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L67)

___

### walletId

• **walletId**: `StringOrNumber` = `""`

___

### webhookKey

• **webhookKey**: `Map`<`string`, `string`\>

#### Defined in

[src/services/personal.ts:66](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L66)

___

### ChequeFormat

▪ `Static` `Readonly` **ChequeFormat**: typeof [`ChequeFormat`](../enums/ChequeFormat.md)

#### Defined in

[src/services/personal.ts:62](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L62)

___

### Currency

▪ `Static` `Readonly` **Currency**: typeof [`Currency`](../enums/Currency.md)

#### Defined in

[src/services/personal.ts:55](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L55)

___

### IdentificationLevel

▪ `Static` `Readonly` **IdentificationLevel**: typeof [`PersonIdentificationLevel`](../enums/PersonIdentificationLevel.md)

#### Defined in

[src/services/personal.ts:56](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L56)

___

### LimitType

▪ `Static` `Readonly` **LimitType**: typeof [`LimitType`](../enums/LimitType.md)

#### Defined in

[src/services/personal.ts:59](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L59)

___

### ReceiptFormat

▪ `Static` `Readonly` **ReceiptFormat**: typeof [`ChequeFormat`](../enums/ChequeFormat.md)

#### Defined in

[src/services/personal.ts:57](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L57)

___

### Recipients

▪ `Static` `Readonly` **Recipients**: typeof [`Recipients`](../enums/Recipients.md)

#### Defined in

[src/services/personal.ts:58](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L58)

___

### TransactionStatus

▪ `Static` `Readonly` **TransactionStatus**: typeof [`TransactionStatus`](../enums/TransactionStatus.md)

#### Defined in

[src/services/personal.ts:61](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L61)

___

### TransactionType

▪ `Static` `Readonly` **TransactionType**: typeof [`TransactionType`](../enums/TransactionType.md)

#### Defined in

[src/services/personal.ts:60](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L60)

## Methods

### \_request

▸ `Protected` **_request**(`url`, `method`, `headers`, `body?`): `Promise`<`any`\>

Simplified http request function

**`throws`** {HttpError} If http error code is not matched valid

**`throws`** {DecodingError} If unable to decode response

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Relative to API url path |
| `method` | `string` | Http request method |
| `headers` | `Record`<`string`, `string`\> | Additional headers to API |
| `body?` | `string` | Request body |

#### Returns

`Promise`<`any`\>

Decoded response

#### Inherited from

HttpAPI.\_request

#### Defined in

[src/http.ts:64](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/http.ts#L64)

___

### addWebHook

▸ **addWebHook**(`parameter`, `txnType`): `Promise`<[`WebHookInfo`](../modules.md#webhookinfo)\>

Регистрирует обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameter` | `string` | Адрес сервера обработки вебхуков. **Внимание! Длина исходного (не URL-encoded) адреса сервиса обработчика не должна превышать 100 символов.** |
| `txnType` | ``0`` \| ``1`` \| ``2`` | Тип транзакций, по которым будут включены уведомления.. 0 - "входящие", 1 - "исходящие". 2 - "все" |

#### Returns

`Promise`<[`WebHookInfo`](../modules.md#webhookinfo)\>

#### Defined in

[src/services/personal.ts:602](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L602)

___

### blockCard

▸ **blockCard**(`cardId`, `wallet?`): `Promise`<`any`\>

Блокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<`any`\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[blockCard](../interfaces/IPersonalAPI.md#blockcard)

#### Defined in

[src/services/personal.ts:549](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L549)

___

### checkWebHookSign

▸ **checkWebHookSign**(`transaction`): `Promise`<`undefined` \| `boolean`\>

Проверяет подпись уведомления вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`WebhookTransaction`](../modules.md#webhooktransaction) | Объект уведомления транзакции вебхука |

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Defined in

[src/services/personal.ts:683](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L683)

___

### createAccount

▸ **createAccount**(`alias`, `wallet?`): `Promise`<``""``\>

Создаёт новый счёт по параметру `alias`
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним нового счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<``""``\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[createAccount](../interfaces/IPersonalAPI.md#createaccount)

#### Defined in

[src/services/personal.ts:296](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L296)

___

### createFormUrl

▸ **createFormUrl**(`provider`, `options`): `string`

Данный метод создаёт ссылку на предзаполненную форму

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID провайдера |
| `options` | [`FormUrlOptions`](../modules.md#formurloptions) |  |

#### Returns

`string`

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[createFormUrl](../interfaces/IPersonalAPI.md#createformurl)

#### Defined in

[src/services/personal.ts:365](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L365)

___

### createOauthToken

▸ **createOauthToken**(): `Promise`<[`PrettyTokenResponse`](../modules.md#prettytokenresponse)<[`Personal`](Personal.md)\>\>

Создаёт токен с увеличенным сроком действия (10 лет)

**`see`** [Документация](https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro)

#### Returns

`Promise`<[`PrettyTokenResponse`](../modules.md#prettytokenresponse)<[`Personal`](Personal.md)\>\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[createOauthToken](../interfaces/IPersonalAPI.md#createoauthtoken)

#### Defined in

[src/services/personal.ts:497](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L497)

___

### createP2PKeyPair

▸ **createP2PKeyPair**(`name`, `server?`): `Promise`<[PublicKey: string, SecretKey: string]\>

Создаёт пару ключей для взаимодействия с P2P BILLS API

**`example`**

const [PublicKey, SecretKey] = await createP2PKeyPair('my-key-pair');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Название связки ключей |
| `server?` | `string` | URL сервера для отправки уведомлений |

#### Returns

`Promise`<[PublicKey: string, SecretKey: string]\>

Массив, где - [0=Публичный ключ, 1=Секретный ключ]

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[createP2PKeyPair](../interfaces/IPersonalAPI.md#createp2pkeypair)

#### Defined in

[src/services/personal.ts:473](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L473)

___

### delete

▸ `Protected` **delete**<`T`\>(`url`, `headers?`, `body?`): `Promise`<`T`\>

Делает DELETE запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |
| `body?` | `string` | Тело запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.delete

#### Defined in

[src/http.ts:207](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/http.ts#L207)

___

### get

▸ `Protected` **get**<`T`\>(`url`, `headers?`): `Promise`<`T`\>

Делает GET запрос и парсит ответ

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.get

#### Defined in

[src/http.ts:122](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/http.ts#L122)

___

### getAccountOffers

▸ **getAccountOffers**(`wallet?`): `Promise`<[`GetAccountOffersResponse`](../modules.md#getaccountoffersresponse)\>

Успешный JSON-ответ содержит данные о счетах, которые можно
создать

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`GetAccountOffersResponse`](../modules.md#getaccountoffersresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getAccountOffers](../interfaces/IPersonalAPI.md#getaccountoffers)

#### Defined in

[src/services/personal.ts:283](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L283)

___

### getAccounts

▸ **getAccounts**(`wallet?`): `Promise`<[`Account`](../modules.md#account)[]\>

Успешный ответ содержит JSON-массив счетов вашего QIWI
Кошелька для фондирования платежей и текущие балансы счетов

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`Account`](../modules.md#account)[]\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getAccounts](../interfaces/IPersonalAPI.md#getaccounts)

#### Defined in

[src/services/personal.ts:266](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L266)

___

### getActiveWebHook

▸ **getActiveWebHook**(): `Promise`<[`WebHookInfo`](../modules.md#webhookinfo)\>

#### Returns

`Promise`<[`WebHookInfo`](../modules.md#webhookinfo)\>

#### Defined in

[src/services/personal.ts:660](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L660)

___

### getCardRequisites

▸ **getCardRequisites**(`cardId`): `Promise`<[`CardRequisitesResponse`](../modules.md#cardrequisitesresponse)\>

Получает реквизиты карты

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |

#### Returns

`Promise`<[`CardRequisitesResponse`](../modules.md#cardrequisitesresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getCardRequisites](../interfaces/IPersonalAPI.md#getcardrequisites)

#### Defined in

[src/services/personal.ts:573](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L573)

___

### getCards

▸ **getCards**(): `Promise`<[`CardResponse`](../modules.md#cardresponse)[]\>

Возвращает список карт

#### Returns

`Promise`<[`CardResponse`](../modules.md#cardresponse)[]\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getCards](../interfaces/IPersonalAPI.md#getcards)

#### Defined in

[src/services/personal.ts:537](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L537)

___

### getCommission

▸ **getCommission**(`provider`, `account`, `amount`): `Promise`<`number`\>

Получает сумму комиссии по заданным реквизитам

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `provider` | `number` | ID Провайдера у QIWI |
| `account` | `string` | ID получателя у провайдера |
| `amount` | `number` | Сумма |

#### Returns

`Promise`<`number`\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getCommission](../interfaces/IPersonalAPI.md#getcommission)

#### Defined in

[src/services/personal.ts:329](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L329)

___

### getIdentification

▸ **getIdentification**(`wallet?`): `Promise`<[`IdentificationResponse`](../modules.md#identificationresponse)\>

Данный запрос позволяет выгрузить маскированные данные и
статус идентификации своего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`IdentificationResponse`](../modules.md#identificationresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getIdentification](../interfaces/IPersonalAPI.md#getidentification)

#### Defined in

[src/services/personal.ts:132](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L132)

___

### getLimits

▸ **getLimits**<`Limits`\>(`limits`, `wallet?`): `Promise`<[`LimitsResponse`](../modules.md#limitsresponse)<`Limits`[`number`]\>\>

Запрос возвращает текущие уровни лимитов по операциям в вашем
QIWI кошельке. Лимиты действуют как ограничения на сумму
определенных операций.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Limits` | extends [`LimitType`](../enums/LimitType.md)[][`LimitType`](../enums/LimitType.md)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `limits` | `Limits` |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`LimitsResponse`](../modules.md#limitsresponse)<`Limits`[`number`]\>\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getLimits](../interfaces/IPersonalAPI.md#getlimits)

#### Defined in

[src/services/personal.ts:148](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L148)

___

### getNewWebHookSecret

▸ **getNewWebHookSecret**(`hookId?`): `Promise`<`string`\>

Измененяет секретный ключ вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/services/personal.ts:648](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L648)

___

### getPaymentHistory

▸ **getPaymentHistory**(`parameters`, `wallet?`): `Promise`<[`GetTransactionsHistoryResponse`](../modules.md#gettransactionshistoryresponse)\>

Запрос выгружает список платежей и пополнений вашего кошелька.
Можно использовать фильтр по количеству, ID и дате
(интервалу дат) транзакций.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GetPaymentHistoryParams`](../modules.md#getpaymenthistoryparams) | Тело запроса |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<[`GetTransactionsHistoryResponse`](../modules.md#gettransactionshistoryresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getPaymentHistory](../interfaces/IPersonalAPI.md#getpaymenthistory)

#### Defined in

[src/services/personal.ts:177](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L177)

___

### getPaymentHistoryTotal

▸ **getPaymentHistoryTotal**(`parameters`, `wallet?`): `Promise`<[`GetPaymentHistoryTotalResponse`](../modules.md#getpaymenthistorytotalresponse)\>

Данный запрос используется для получения сводной статистики
по суммам платежей за заданный период.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`GetPaymentHistoryTotalParams`](../modules.md#getpaymenthistorytotalparams) |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`GetPaymentHistoryTotalResponse`](../modules.md#getpaymenthistorytotalresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getPaymentHistoryTotal](../interfaces/IPersonalAPI.md#getpaymenthistorytotal)

#### Defined in

[src/services/personal.ts:193](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L193)

___

### getPersonProfile

▸ **getPersonProfile**(): `Promise`<[`PersonProfile`](../modules.md#personprofile)\>

Запрос возвращает информацию о вашем профиле - наборе
пользовательских данных и настроек вашего QIWI кошелька.

#### Returns

`Promise`<[`PersonProfile`](../modules.md#personprofile)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getPersonProfile](../interfaces/IPersonalAPI.md#getpersonprofile)

#### Defined in

[src/services/personal.ts:96](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L96)

___

### getRestrictions

▸ **getRestrictions**(`wallet?`): `Promise`<[`Restrictions`](../modules.md#restrictions)\>

Запрос проверяет, есть ли ограничение на исходящие платежи с
QIWI Кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`Restrictions`](../modules.md#restrictions)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getRestrictions](../interfaces/IPersonalAPI.md#getrestrictions)

#### Defined in

[src/services/personal.ts:164](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L164)

___

### getTransaction

▸ **getTransaction**(`transactionId`, `type`): `Promise`<[`Transaction`](../modules.md#transaction)\>

Запрос используется для получения информации по определенной
транзакции из вашей истории платежей.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | Номер транзакции |
| `type` | [`TransactionType`](../enums/TransactionType.md) | Тип транзакции |

#### Returns

`Promise`<[`Transaction`](../modules.md#transaction)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getTransaction](../interfaces/IPersonalAPI.md#gettransaction)

#### Defined in

[src/services/personal.ts:209](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L209)

___

### getTransactionCheque

▸ **getTransactionCheque**(`transactionId`, `type`, `format?`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `StringOrNumber` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `format` | [`ChequeFormat`](../enums/ChequeFormat.md) | тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF` |

#### Returns

`Promise`<`Buffer`\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[getTransactionCheque](../interfaces/IPersonalAPI.md#gettransactioncheque)

#### Defined in

[src/services/personal.ts:225](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L225)

___

### getWebHookSecret

▸ **getWebHookSecret**(`hookId?`): `Promise`<`string`\>

Получает секретный ключ вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/services/personal.ts:635](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L635)

___

### head

▸ `Protected` **head**<`T`\>(`url`, `headers?`): `Promise`<`T`\>

Делает HEAD запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.head

#### Defined in

[src/http.ts:136](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/http.ts#L136)

___

### patch

▸ `Protected` **patch**<`T`\>(`url`, `headers?`, `body?`): `Promise`<`T`\>

Делает PATCH запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |
| `body?` | `string` | Тело запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.patch

#### Defined in

[src/http.ts:189](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/http.ts#L189)

___

### pay

▸ **pay**(`provider`, `account`, `amount`, `currency?`, `fields?`, `comment?`): `Promise`<[`PaymentResponse`](../modules.md#paymentresponse)\>

**От автора:**

Типизирование это метода - очень больно и бессмысленно. Его
описание в документации занимает 6 страниц

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

**`deprecated`** Используйте [pay2](Personal.md#pay2), так-как он более читаемый

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `provider` | `undefined` \| `number` | `undefined` | Ака ID, в доках, номер провайдера у QIWI |
| `account` | `string` | `undefined` | Номер кошелька или карты или типа того |
| `amount` | `number` | `undefined` | Сумма платежа |
| `currency` | `undefined` \| [`Currency`](../enums/Currency.md) | `undefined` | Валюта платежа, по умолчанию = рубли |
| `fields` | `undefined` \| `Partial`<[`FreePayFields`](../modules.md#freepayfields)\> & `Record`<`string`, `string`\> | `{}` | Доп. поля, их невозможно типизировать, просто читайте доки |
| `comment` | `undefined` \| `string` | `""` | Комментарий к платежу, необязательный |

#### Returns

`Promise`<[`PaymentResponse`](../modules.md#paymentresponse)\>

#### Defined in

[src/services/personal.ts:410](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L410)

___

### pay2

▸ **pay2**(`params`): `Promise`<[`PaymentResponse`](../modules.md#paymentresponse)\>

Более читаемая версия метода [pay](Personal.md#pay)

[Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`Pay2Params`](../modules.md#pay2params) | Параметры платежа |

#### Returns

`Promise`<[`PaymentResponse`](../modules.md#paymentresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[pay2](../interfaces/IPersonalAPI.md#pay2)

#### Defined in

[src/services/personal.ts:449](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L449)

___

### post

▸ `Protected` **post**<`T`\>(`url`, `headers?`, `body?`): `Promise`<`T`\>

Делает POST запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |
| `body?` | `string` | Тело запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.post

#### Defined in

[src/http.ts:153](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/http.ts#L153)

___

### put

▸ `Protected` **put**<`T`\>(`url`, `headers?`, `body?`): `Promise`<`T`\>

Делает PUT запрос и парсит ответ

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL запроса |
| `headers` | `Record`<`string`, `string`\> | Заголовки запроса |
| `body?` | `string` | Тело запроса |

#### Returns

`Promise`<`T`\>

#### Inherited from

HttpAPI.put

#### Defined in

[src/http.ts:171](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/http.ts#L171)

___

### removeWebHook

▸ **removeWebHook**(`hookId?`): `Promise`<`any`\>

Удаляет обработчик вебхука

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookId` | `string` | UUID вебхука |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/personal.ts:622](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L622)

___

### renameCard

▸ **renameCard**(`cardId`, `alias`): `Promise`<[`CardRenameResponse`](../modules.md#cardrenameresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `alias` | `string` |

#### Returns

`Promise`<[`CardRenameResponse`](../modules.md#cardrenameresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[renameCard](../interfaces/IPersonalAPI.md#renamecard)

#### Defined in

[src/services/personal.ts:589](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L589)

___

### sendTransactionCheque

▸ **sendTransactionCheque**(`transactionId`, `type`, `email`): `Promise`<``""``\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `number` | номер транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].txnId в ответе) |
| `type` | [`TransactionType`](../enums/TransactionType.md) | тип транзакции из [истории платежей](https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data) (параметр data[].type в ответе) |
| `email` | `string` | Адрес для отправки электронной квитанции |

#### Returns

`Promise`<``""``\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[sendTransactionCheque](../interfaces/IPersonalAPI.md#sendtransactioncheque)

#### Defined in

[src/services/personal.ts:245](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L245)

___

### setDefaultAccount

▸ **setDefaultAccount**(`alias`, `wallet?`): `Promise`<``""``\>

Устанавливает счёт по умолчанию
Успешный ответ возвращает пустую строку

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alias` | `string` | Псевдоним счета (см. [запрос доступных счетов](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer)) |
| `wallet` | `StringOrNumber` | Номер кошелька |

#### Returns

`Promise`<``""``\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[setDefaultAccount](../interfaces/IPersonalAPI.md#setdefaultaccount)

#### Defined in

[src/services/personal.ts:311](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L311)

___

### setIdentification

▸ **setIdentification**(`data`, `wallet?`): `Promise`<[`IdentificationResponse`](../modules.md#identificationresponse)\>

Данный запрос позволяет отправить данные для идентификации
вашего QIWI кошелька.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IdentificationBase`](../modules.md#identificationbase) |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`IdentificationResponse`](../modules.md#identificationresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[setIdentification](../interfaces/IPersonalAPI.md#setidentification)

#### Defined in

[src/services/personal.ts:114](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L114)

___

### testActiveWebHook

▸ **testActiveWebHook**(): `Promise`<`any`\>

Отправляет тестовое уведомление

**`link`** https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_test

#### Returns

`Promise`<`any`\>

#### Defined in

[src/services/personal.ts:674](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L674)

___

### unblockCard

▸ **unblockCard**(`cardId`, `wallet?`): `Promise`<[`CardUnblockResponse`](../modules.md#cardunblockresponse)\>

Разблокирует карту

#### Parameters

| Name | Type |
| :------ | :------ |
| `cardId` | `StringOrNumber` |
| `wallet` | `StringOrNumber` |

#### Returns

`Promise`<[`CardUnblockResponse`](../modules.md#cardunblockresponse)\>

#### Implementation of

[IPersonalAPI](../interfaces/IPersonalAPI.md).[unblockCard](../interfaces/IPersonalAPI.md#unblockcard)

#### Defined in

[src/services/personal.ts:560](https://github.com/AlexXanderGrib/node-qiwi-sdk/blob/e7b0b44/src/services/personal.ts#L560)
