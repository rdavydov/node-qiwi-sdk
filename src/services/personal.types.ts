/* eslint-disable camelcase */
/* eslint-disable unicorn/prevent-abbreviations */
export enum PersonIdentificationLevel {
  /** Пользователь не вошёл в кошелёк */
  ANONYMOUS = "ANONYMOUS",
  /** "Минимальный" */
  SIMPLE = "SIMPLE",
  /**
   * "Основной" (данные для идентификации успешно прошли проверку)
   */
  VERIFIED = "VERIFIED",
  /**
   * "Профессиональный", если кошелек уже ранее получал полную
   * идентификацию по данным ФИО, номеру паспорта и дате рождения.
   */
  FULL = "FULL"
}

export enum TransactionType {
  /** Все операции */
  ALL = "ALL",
  /** Только пополнения */
  IN = "IN",
  /** Только платежи */
  OUT = "OUT",
  /** Платежи по картам QIWI (QVC, QVP) */
  QIWI_CARD = "QIWI_CARD"
}

/** Статус платежа */
export enum TransactionStatus {
  /** Платеж проводится */
  WAITING = "WAITING",
  /** Успешный платеж */
  SUCCESS = "SUCCESS",
  /** Ошибка платежа */
  ERROR = "ERROR"
}

export enum Currency {
  /** Рубли */
  RUB = 643,
  /** Доллары */
  USD = 840,
  /** Евро */
  EUR = 978,
  /** Тенге */
  KZT = 398
}

export type MoneyAmount = {
  /** Сумма */
  amount: number;

  /** Валюты */
  currency: Currency;
};

export enum ChequeFormat {
  JPEG = "JPEG",
  PDF = "PDF"
}

export enum Recipients {
  /** Альфа Банк */
  AlfaBank = 464,
  /** Тинькофф Банк */
  TinkoffBank = 466,
  /** ОТП Банк */
  OTPBank = 804,
  /** РосСельхозБанк */
  RosSelkhozBank = 810,
  /** Банк "Русский Стандарт" */
  RusskiyStandardBank = 815,
  /** ВТБ */
  VTBank = 816,
  /** ПромСвязьБанк */
  PromSvyazBank = 821,
  /** Сбербанк */
  SberBank = 870,
  /** Ренессанс Кредит */
  RenessansCreditBank = 881,
  /** Московский Кредитный Банк */
  MKBank = 1134,
  /** Перевод на карту VISA по России */
  VisaRusCard = 1963,
  /** Перевод на карту VISA по СНГ */
  VisaSngCard = 1960,
  /** Перевод на карту MasterCard по России */
  MasterCardRus = 21_013,
  /** Перевод на карту MasterCard по СНГ */
  MasterCardSng = 21_012,
  /** Перевод на карту МИР */
  MirCard = 31_652,
  /** Перевод в `OnLime` */
  OnLime = 674,
  /** Перевод в фонд "Подари Жизнь" */
  PodariZhiznFound = 1239,
  /** Перевод на QIWI-Кошелёк по номеру телефона */
  QIWI = 99,
  /** Перевод на QIWI-Кошелёк по никнейму */
  QIWINickname = 99_999,

  /**
   * Перевод на QIWI-Кошелёк по никнейму
   * @deprecated Переименовано в `QIWINickname`
   * @see {@link QIWINickname}
   */
  // eslint-disable-next-line camelcase
  QIWI_Nickname = 99_999,

  /** Перевод по банковским реквизитам */
  BankRequisites = 1717,

  /** Перевод на QIWI-Кошелёк по номеру виртуальной карты */
  QIWIVirtualCard = 22_351,

  /**
   * Перевод на QIWI-Кошелёк по номеру виртуальной карты
   * @deprecated Переименовано в `QIWIVirtualCard`
   * @see {@link QIWIVirtualCard}
   */
  // eslint-disable-next-line camelcase
  QIWI_VirtualCard = 22_351,

  /**
   * Перевод в Яндекс.Деньги
   *
   * @deprecated Сейчас называется `YooMoney`
   * @see {@link YooMoney}
   */
  YandexMoney = 26_476,

  /** Перевод в YooMoney (бывшие Яндекс.Деньги) */
  YooMoney = 26_476
}

export type PersonProfile = {
  /**
   * Текущие настройки авторизации. Объект может отсутствовать, в
   * зависимости от признака `authInfoEnabled` в запросе.
   */
  authInfo: {
    /** Номер кошелька */
    personId: number;
    /**
     * Дата/время регистрации QIWI Кошелька
     * (через сайт/мобильное приложение, либо другим способом)
     */
    registrationDate: string;
    /**
     * E-mail, привязанный к кошельку. Если отсутствует, то `null`
     */
    boundEmail: string | null;
    /** IP-адрес последней пользовательской сессии */
    ip: string;
    /** Дата/время последней сессии в QIWI Кошельке */
    lastLoginDate: string;
    /** Данные о PIN-коде мобильного приложения QIWI Кошелька */
    mobilePinInfo: {
      /**
       * Логический признак использования PIN-кода
       * (фактически означает, что мобильное приложение
       * используется)
       */
      mobilePinUsed: boolean;

      /**
       * Дата/время последнего изменения PIN-кода мобильного
       * приложения QIWI Кошелька
       */
      lastMobilePinChange: string;

      /**
       * Дата/время следующего (планового) изменения PIN-кода
       * мобильного приложения QIWI Кошелька
       */
      nextMobilePinChange: string;
    };

    /** Данные об использовании пароля к сайту qiwi.com */
    passInfo: {
      /**
       * Логический признак использования пароля
       * (фактически означает использование сайта qiwi.com)
       */
      passwordUsed: boolean;

      /** Дата/время последнего изменения пароля сайта qiwi.com */
      lastPassChange: string;

      /**
       * Дата/время следующего (планового) изменения пароля
       * сайта qiwi.com
       * */
      nextPassChange: string;
    };

    /**
     * Данные об использовании PIN-кода к приложению
     * QIWI Кошелька на QIWI терминалах самообслуживания
     */
    pinInfo: {
      /**
       * Логический признак использования PIN-кода для терминала
       * (фактически означает факт использования приложения
       * QIWI Кошелька на терминале)
       */
      pinUsed: boolean;
    };
  };

  /**
   * Информация о кошельке. Объект может отсутствовать, в
   * зависимости от признака `contractInfoEnabled` в запросе.
   */
  contractInfo: {
    /** Логический признак блокировки кошелька */
    blocked: boolean;

    /** Номер кошелька */
    contractId: number;

    /**
     * Дата/время создания QIWI Кошелька (через сайт/мобильное
     * приложение, либо при первом пополнении, либо другим
     * способом)
     */
    creationDate: string;

    /** Служебная информация */
    features: object[];

    /**
     * Данные об
     * {@link https://qiwi.com/settings/identification#ru|идентификации}
     * пользователя.
     */
    identificationInfo: {
      bankAlias: "QIWI" | string;
      /**
       * Текущий уровень идентификации кошелька.
       * Возможные значения:
       *
       * `ANONYMOUS` - без идентификации;
       *
       * `SIMPLE`, `VERIFIED` - упрощенная идентификация;
       *
       * `FULL` - полная идентификация.
       */
      identificationLevel: PersonIdentificationLevel;
    }[];
  };

  /**
   * Прочие пользовательские данные. Объект может отсутствовать,
   * в зависимости от признака `userInfoEnabled` в запросе.
   */
  userInfo: {
    /**
     * Код валюты баланса кошелька по умолчанию (number-3 ISO-4217)
     */
    defaultPayCurrency: Currency;

    /** Служебная информация */
    defaultPaySource: number;

    /** E-mail пользователя */
    email: string;

    /** Номер первой транзакции после регистрации */
    firstTxnId: string;

    /** Служебная информация */
    language: string;

    /** Название мобильного оператора номера пользователя */
    operator: string;

    /** Служебная информация */
    phoneHash: string;

    /** Служебная информация */
    promoEnabled: string;
  };
};

export type IdentificationBase = {
  /** Дата рождения пользователя (в формате "ГГГГ-ММ-ДД") */
  birthDate: string;

  /** Имя пользователя */
  firstName: string;

  /** Отчество пользователя */
  middleName: string;

  /** Фамилия пользователя */
  lastName: string;

  /** Серия и номер паспорта пользователя (только цифры) */
  passport: string;

  /** ИНН пользователя */
  inn: string;

  /** Номер СНИЛС пользователя */
  snils: string;

  /** Номер полиса ОМС пользователя */
  oms: string;
};

export type IdentificationResponse = IdentificationBase & {
  /** Номер кошелька пользователя */
  id: number;

  /**
   * Текущий статус кошелька:
   *
   * `SIMPLE` - "Минимальный".
   *
   * `VERIFIED` - "Основной" (данные для идентификации успешно
   * прошли проверку).
   *
   * `FULL` – "Профессиональный", если кошелек уже ранее получал
   * полную идентификацию по данным ФИО, номеру паспорта и дате
   * рождения.
   */
  type:
    | PersonIdentificationLevel.SIMPLE
    | PersonIdentificationLevel.VERIFIED
    | PersonIdentificationLevel.FULL;
};

export type Restrictions = {
  /** Код блокировки */
  restrictionCode: string;

  /** Описание блокировки */
  restrictionDescription: string;
}[];

export type GetPaymentHistoryParamsBase = {
  /**
   * Число платежей в ответе, для разбивки отчета на страницы.
   * Целое число от 1 до 50. Запрос возвращает указанное число
   * платежей в обратном хронологическом порядке, начиная от
   * текущей даты или даты в параметре `startDate`
   */
  rows: number;

  /**
   * Тип операций в отчете, для отбора. Допустимые значения:
   *
   * `ALL` - все операции,
   *
   * `IN` - только пополнения,
   *
   * `OUT` - только платежи,
   *
   * `QIWI_CARD` - только платежи по картам QIWI (QVC, QVP).
   *
   * По умолчанию `ALL`
   */
  operation?: TransactionType;

  /**
   * Список источников платежа, для фильтра. Каждый источник
   * нумеруется, начиная с нуля (`sources[0]`, `sources[1]` и т.д.).
   *
   * Допустимые значения:
   *
   * `QW_RUB` - рублевый счет кошелька,
   *
   * `QW_USD` - счет кошелька в долларах,
   *
   * `QW_EUR` - счет кошелька в евро,
   *
   * `CARD` - привязанные и непривязанные к кошельку банковские
   * карты,
   *
   * `MK` - счет мобильного оператора. Если не указан, учитываются
   * все источники
   */
  sources?: ("QW_RUB" | "QW_USD" | "QW_EUR" | "CARD" | "MK")[];
};

export type GetPaymentHistoryParamsStartEnd = {
  /**
   * Начальная дата поиска платежей. **Используется только вместе
   * с `endDate`. Максимальный допустимый интервал между
   * `startDate` и `endDate` - 90 календарных дней.** По умолчанию,
   * равна суточному сдвигу от текущей даты по московскому времени.
   *
   * Дату можно указать в любой временной зоне `TZD`
   * (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна
   * совпадать с временной зоной в параметре `endDate`. Обозначение
   * временной зоны `TZD`: +`чч:мм` или -`чч:мм`
   * (временной сдвиг от GMT).
   */
  startDate: string;

  /**
   * Начальная дата поиска платежей. **Используется только вместе
   * с `startDate`. Максимальный допустимый интервал между
   * `startDate` и `endDate` - 90 календарных дней.** По умолчанию,
   * равна суточному сдвигу от текущей даты по московскому времени.
   *
   * Дату можно указать в любой временной зоне `TZD`
   * (формат `ГГГГ-ММ-ДД'T'чч:мм:ссTZD`), однако она должна
   * совпадать с временной зоной в параметре `startDate`.
   * Обозначение временной зоны `TZD`: +`чч:мм` или -`чч:мм`
   * (временной сдвиг от GMT).
   */
  endDate: string;
};

export type GetPaymentHistoryParams =
  | GetPaymentHistoryParamsBase
  | (GetPaymentHistoryParamsBase & GetPaymentHistoryParamsStartEnd)
  | (GetPaymentHistoryParamsBase & {
      /**
       * Дата транзакции для начала отчета (должна быть равна
       * параметру `nextTxnDate` в предыдущем списке). Используется
       * для продолжения списка, разбитого на страницы.
       * **Используется только вместе с `nextTxnId`**
       */
      nextTxnDate: string;

      /**
       * Номер транзакции для начала отчета (должен быть равен
       * параметру `nextTxnId` в предыдущем списке). Используется
       * для продолжения списка, разбитого на страницы.
       * **Используется только вместе с `nextTxnDate`**
       */
      nextTxnId: number;
    });

export type GetPaymentHistoryTotalParams = Omit<
  GetPaymentHistoryParamsBase,
  "rows"
> &
  GetPaymentHistoryParamsStartEnd;

export type GetPaymentHistoryTotalResponse = {
  /**
   * Данные о входящих платежах (пополнениях), отдельно по каждой
   * валюте
   */
  incomingTotal: MoneyAmount[];

  /** Данные об исходящих платежах, отдельно по каждой валюте */
  outgoingTotal: MoneyAmount[];
};

export type Transaction = {
  /** ID транзакции в сервисе QIWI Кошелек */
  txnId: number;

  /** Номер кошелька */
  personId: number;

  /**
   * Для запросов истории платежей - Дата/время платежа, во
   * временной зоне запроса (см. параметр `startDate`). Формат
   * даты `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`
   *
   * Для запросов данных о транзакции - Дата/время платежа, время
   * московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`)
   */
  date: string;

  /** {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#errorCode|Код ошибки платежа} */
  errorCode: number;

  /** Описание ошибки */
  error: string | null;

  /**
   * Тип платежа. Возможные значения:
   *
   * `IN` - пополнение,
   *
   * `OUT` - платеж,
   *
   * `QIWI_CARD` - платеж с карт QIWI (QVC, QVP).
   */
  type: TransactionType.IN | TransactionType.OUT | TransactionType.QIWI_CARD;

  /**
   * Статус платежа. Возможные значения:
   *
   * `WAITING` - платеж проводится
   *
   * `SUCCESS` - успешный платеж
   *
   * `ERROR` - ошибка платежа.
   */
  status: TransactionStatus;

  /** Текстовое описание статуса платежа */
  statusText: string;

  /** Клиентский ID транзакции */
  trmTxnId: string;

  /**
   * Для платежей - номер счета получателя. Для пополнений - номер
   * отправителя, терминала или название агента пополнения кошелька
   */
  account: string;

  /** Данные о сумме платежа или пополнения. */
  sum: MoneyAmount;

  /**	Данные о комиссии платежа */
  commission: MoneyAmount;

  /** Данные о фактической сумме платежа или пополнения. */
  total: MoneyAmount;

  /** Данные о провайдере. */
  provider: {
    /** ID провайдера в QIWI Wallet */
    id: number;

    /** краткое наименование провайдера */
    shortName: string;

    /** развернутое наименование провайдера */
    longName: string;

    /** ссылка на логотип провайдера */
    logoUrl: string | null;

    /** описание провайдера (HTML) */
    descriptions: string | null;

    /** список ключевых слов */
    keys: string | null;

    /** сайт провайдера */
    siteUrl: string | null;
  };

  /** Служебная информация */
  source: object;

  /** Комментарий к платежу */
  comment: string;

  /** Курс конвертации (если применяется в транзакции) */
  currencyRate: number;

  /** Служебная информация */
  extras: object;

  /**
   * Поидее содержимое этого поля должно быть напрямую в
   * Transaction. Но QIWI возвращает именно так
   */
  features: {
    /** Специальное поле */
    chequeReady: boolean;

    /** Специальное поле */
    bankDocumentAvailable: boolean;

    /** Специальное поле */
    repeatPaymentEnabled: boolean;

    /** Специальное поле */
    favoritePaymentEnabled: boolean;

    /** Специальное поле */
    regularPaymentEnabled: boolean;
  };
};

export type GetTransactionsHistoryResponse = {
  /**
   * Список объектов {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#txnid|Transaction}.
   * Число транзакций в списке меньше или равно параметру rows из
   * запроса
   */
  data: Transaction[];

  /** ID следующей транзакции в полном списке */
  nextTxnId: Transaction["txnId"] | null;

  /**
   * Дата/время следующей транзакции в полном списке, время
   * московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`)
   */
  nextTxnDate: Transaction["date"] | null;
};

export enum LimitType {
  /** Максимальный допустимый остаток на счёте */
  REFILL = "REFILL",

  /** Оборот в месяц */
  TURNOVER = "TURNOVER",

  /** Переводы на другие кошельки в месяц */
  PAYMENTS_P2P = "PAYMENTS_P2P",

  /** Платежи в адрес иностранных компаний в месяц */
  PAYMENTS_PROVIDER_INTERNATIONALS = "PAYMENTS_PROVIDER_INTERNATIONALS",

  /** Переводы на банковские счета и карты, кошельки других систем */
  PAYMENTS_PROVIDER_PAYOUT = "PAYMENTS_PROVIDER_PAYOUT",

  /** Снятие наличных в месяц */
  WITHDRAW_CASH = "WITHDRAW_CASH"
}

export type Limit<
  Cur extends keyof typeof Currency = "RUB",
  Type extends LimitType = LimitType
> = {
  /** Валюта операций */
  currency: Cur;

  /**
   * Остаток лимита, который можно потратить в данный период
   * (период задается в параметре `interval`)
   */
  rest: number;

  /** Значение лимита */
  max: number;

  /** Сумма, потраченная по данным операциям */
  spent: number;

  /** Сведения о периоде действия лимита */
  interval: {
    /** Начало периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` */
    dateFrom: string;

    /** Конец периода, формат даты `ГГГГ-ММ-ДДТЧЧ:ММ:ССtmz` */
    dateTill: string;
  };

  /** Тип операций, на которые действует данный лимит */
  type: Type;
};

export type LimitsResponse<RequestedLimits extends LimitType = LimitType> = {
  /** Описание лимитов */
  limits: {
    /** Массив лимитов на операции */
    RU: Limit<"RUB", RequestedLimits>[];
    KZ: Limit<"KZT", RequestedLimits>[];
  };
};

export type Account = {
  /** Псевдоним пользовательского баланса */
  alias: string;

  /** Псевдоним банковского баланса */
  fsAlias: string;

  /** Псевдоним банка */
  bankAlias: string;

  /** Название соответствующего счета кошелька */
  title: string;

  /** Сведения о счете */
  type: {
    /** Описание счета */
    id: string;

    /** Описание счета */
    title: string;
  };

  /**
   * Логический признак реального баланса в системе QIWI Кошелек
   * (не привязанная карта, не счет мобильного телефона и т.д.)
   */
  hasBalance: boolean;

  balance: MoneyAmount | null;

  /** Код валюты баланса (number-3 ISO-4217) */
  currency: Currency;

  defaultAccount?: boolean;
};

export type GetAccountsResponse = {
  /** Массив балансов */
  accounts: Account[];
};

export type AccountOffer = {
  /** Псевдоним счета */
  alias: string;

  /** ID валюты счета */
  currency: Currency;
};

export type GetAccountOffersResponse = AccountOffer[];

export type PaymentCommissionRequest = {
  /**
   * Пользовательский идентификатор (номер телефона с международным
   * префиксом, номер карты/счета получателя, и т.д., в зависимости
   * от провайдера)
   */
  account: string;

  /** Объект, определяющий обработку платежа процессингом QIWI Wallet */
  paymentMethod: {
    /** Метод платежа, только `Account` */
    type: "Account";

    /** Идентификатор счета, только `643`. */
    accountId: "643";
  };

  /** Объект с платежными реквизитами */
  purchaseTotals: {
    /** Объект, содержащий данные о сумме платежа */
    total: {
      /**
       * Сумма (можно указать рубли и копейки, разделитель .).
       * Положительное число, округленное до 2 знаков после
       * десятичной точки. При большем числе знаков значение будет
       * округлено до копеек в меньшую сторону.
       */
      amount: number;

      /** Валюта (только 643, рубли) */
      currency: "643";
    };
  };
};

export type PaymentResponse = {
  /** Копия параметра `id` из платежного запроса */
  id: string;

  /** Идентификатор провайдера, на которого был отправлен платеж */
  terms: string;

  /**
   * Копия объекта `fields` из платежного запроса. **Номер
   * карты (если был выполнен перевод на карту) возвращается в
   * маскированном виде**
   */
  fields: Record<string, string>;

  /** Копия объекта `sum` из платежного запроса */
  sum: MoneyAmount;

  transaction: {
    id: string;
    state: {
      code: "Accepted";
    };
  };

  /** Константа, `account_643` */
  source: "account_643";

  /**
   * Копия параметра `comment` из платежного запроса (возвращается,
   * если присутствует в запросе)
   */
  comment?: string;
};

export type FormUrlOptions = {
  /** Сумма платежа в рублях */
  amount?: number;

  /** Комментарий. **Параметр используется только для `ID=99`** */
  comment?: string;

  /**
   * Формат совпадает с форматом параметра `fields.account` при
   * оплате соответствующих провайдеров: для провайдера `99` -
   * номер кошелька получателя; для провайдеров сотовой связи -
   * номер мобильного телефона для пополнения (без префикса 8);
   * для провайдеров перевода на карту - номер банковской карты
   * получателя (без пробелов), для других провайдеров -
   * идентификатор пользователя. Для провайдера `99999` указывается
   * никнейм или номер кошелька получателя (задайте
   * соответствующее значение параметра `extra['accountType']`).
   */
  account?: string;

  /**
   * Признак неактивного поля формы. Пользователь не сможет менять
   * значение данного поля. Каждый параметр задает соответствующее
   * поле формы и нумеруется начиная с нуля (blocked[0], blocked[1]
   *  и т.д.). Если не указан, пользователь сможет изменить все
   * поля формы.
   *
   * Допустимые значения:
   *
   * `sum` - поле "сумма платежа",
   *
   * `account` - поле "номер счета/телефона/карты",
   *
   * `comment` - поле "комментарий".
   *
   * Пример (неактивное поле суммы платежа): `blocked[0]=sum`
   */
  blocked?: ("account" | "comment" | "sum")[];

  /**
   * **Параметр используется только для ID=99999**. Значение
   * определяет перевод на QIWI кошелек по никнейму или по номеру
   * кошелька. Если вы не хотите, чтобы пользователь видел номер
   * вашего кошелька на форме, используйте перевод по никнейму.
   *
   * `phone` - для перевода по номеру
   *
   * `nickname` - для перевода по никнейму.
   */
  accountType?: string;

  custom?: Record<string, unknown>;
};

export type CodeResponse = {
  code: string;
};

export type TokenResponse = {
  /** Токен с расширенным сроком действия */
  access_token: string;

  /** Тип токена */
  token_type: "Bearer";

  /** Кол-во секунд в формате строки: `"316224000"` */
  expires_in: string;

  /** Не используется */
  refresh_token: string;
};

export type PrettyTokenResponse<C> = {
  token: string;
  expiry: number;
  client: C;
};

/** Статус карты */
export enum CardStatus {
  /** Активна */
  ACTIVE = "ACTIVE",

  /** Отправлена в банк */
  SENDED_TO_BANK = "SENDED_TO_BANK",

  /** Отправлена владельцу */
  SENDED_TO_USER = "SENDED_TO_USER",

  /** Заблокированная */
  BLOCKED = "BLOCKED",

  /** Хз */
  UNKNOWN = "UNKNOWN"
}

type ImageObject = {
  /** URL изображения */
  url: string;

  /** Ширина изображения */
  width: number;

  /** Высота изображения */
  height: number;

  /**
   * Размер изображения относительно минимального в наборе.
   * Пример: `2x`
   */
  ratio: string;
};

type KVObject = { name: string; value: string };

export type CardResponse = {
  /** Общая информация о карте */
  qvx: {
    /** ID карты */
    id: number;

    /**
     * Маскированный номер карты (отображаются только последние 4
     * цифры). Пример: `****9078`
     */
    maskedPan: string;

    /** Текущий статус карты */
    status: CardStatus;

    /** Срок действия карты в формате: `2022-01-31T00:00:00+03:00` */
    cardExpire: string;

    /** Вид карты */
    cardType: "VIRTUAL" | "PLASTIC";

    /** [Название карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#qvc-rename) в интерфейсе сайта [qiwi.com](https://qiwi.com/) */
    cardAlias: string;

    cardLimit: null | {
      value: number;
      currencyCode: Currency;
    };

    /** Дата активации карты в формате: `2022-01-31T00:00:00+03:00` */
    activated: string;

    /** Дата высылки СМС с реквизитами в формате: `2022-01-31T00:00:00+03:00` */
    smsResended: string;

    /** Дата блокировки в формате: `2022-01-31T00:00:00+03:00` */
    blockedDate: string;

    /** Признак возможности разблокировать карту */
    unblockAvailable: boolean;

    /** ID транзакции заказа карты */
    txnId: string;

    /** Месяц окончания действия карты. Например: `01` */
    cardExpireMonth: string;

    /** Год окончания действия карты. Например: `2022` */
    cardExpireYear: string;
  };

  /** Данные баланса карты */
  balance: MoneyAmount | null;

  /** Тарифы и банковские реквизиты карты */
  info: {
    /** [Тип карты](https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#card-types) */
    alias: "qvc-cpa" | "qvc-cpa-debit" | "qvp-gold";

    /** Название карты */
    name: string;

    /**
     * Тариф карты:
     *
     * `amount` - Стоимость обслуживания
     * `currency` - Код валюты баланса (по ISO)
     */
    price: MoneyAmount;

    /** Период обслуживания (по тарифу). Пример: `за год` */
    period: string;

    details: {
      /** Краткое описание тарифа карты. Пример: `99 ₽, действует 1 год` */
      info: string;

      /** Описание карты */
      description: string;

      /** Изображения карты для лендинга с "примерными" данными */
      images: ImageObject[];

      /** Иконки карты */
      imagesMin: ImageObject[];

      /** Изображения карты без данных */
      imagesDet: ImageObject[];

      /** Список условий обслуживания карты */
      tariffs: KVObject[];

      /** Ссылка на описание тарифа */
      tariffLink: string;

      /** Ссылка на договор оферты на выпуск карты */
      offerLink: string;

      /** Список возможностей карты на русском */
      features: string[];

      /** Список пар "ключ-значение" с данными банковских реквизитов для пополнения карты */
      requisites: KVObject[];
    };

    [key: string]: any;
  };
};

export enum CardActionStatus {
  OK = "OK",
  FAIL = "FAIL",
  CONFIRMATION_REQUIRED = "CONFIRMATION_REQUIRED",
  CONFIRMATION_LIMIT_EXCEED = "CONFIRMATION_LIMIT_EXCEED"
}

export type CardUnblockResponse = {
  status: CardActionStatus;
  nextConfirmationRequest: null;
  confirmationId: null;
  operationId: null;
};

export type CardRequisitesResponse = {
  status: CardActionStatus;

  /** CVV карты */
  cvv: string;

  /** Полный номер карты */
  pan: string;

  /** Код ошибки */
  errorCode: string;

  [key: string]: any;
};

export type CardRenameResponse = {
  status: CardActionStatus.OK | CardActionStatus.FAIL;

  /** Текстовое описание ошибки */
  error: string;

  /** Код ошибки */
  errorCode: string;
};

export type FreePayFields = {
  /**
   * Наименование банка получателя. Например: `ПАО "Сбербанк"`
   */
  name: string;

  /**
   * БИК банка получателя
   */
  to_bik: string;

  /**
   * БИК банка получателя. Почти всегда равен `to_bik`
   */
  extra_to_bik: string;

  /**
   * Город местонахождения получателя
   */
  city: string;

  info: "Коммерческие организации";
  is_commercial: "1";

  /**
   * Наименование организации. Например: `ООО "Технический Центр ДЕЛЬТА"`
   */
  to_name: string;

  /**
   * ИНН организации
   */
  to_inn: string;

  /**
   * КПП организации
   */
  to_kpp: string;

  /**
   * Признак уплаты НДС. Если вы оплачиваете квитанцию и в ней не
   * указан НДС, то строка `НДС не облагается`. В ином случае,
   * строка `В т.ч. НДС`.
   */
  nds: "НДС не облагается" | "В т.ч. НДС";

  /**
   * Назначение платежа
   */
  goal: string;

  /**
   * Признак срочного платежа (`0` - нет, `1` - да). Срочный
   * платеж выполняется от 10 минут. Возможен по будням с 9:00
   * до 20:30 по московскому времени.
   *
   * **Стоимость услуги — 25 рублей.**
   */
  urgent: "0" | "1";

  /**
   * Имя плательщика
   */
  from_name: string;

  /**
   * Отчество плательщика
   */
  from_name_p: string;

  /**
   * Фамилия плательщика
   */
  from_name_f: string;

  requestProtocol: "qw1";
  toServiceId: "1717";

  /**
   * Номер счета получателя
   */
  account: string;
};

/**
 * @see [Документация по платежам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
 */
export type Pay2Params = {
  /**
   * Ака ID в доках, номер провайдера(платёжной системы) у QIWI
   *
   * @see {@link Recipients}
   * @default 99
   */
  provider?: number | Recipients;

  /**
   * Номер счёта в указанной платёжной системе (у `provider`'а)
   * Если он не задан, но следует указывать номер телефона(киви)
   * получателя.
   *
   * Записывается в `fields.account`, можно поставить `""`, если
   * переопределяете в `fields`
   */
  account: string;

  /**
   * Сумма платежа в указанной валюте. Если валюта не указана, то
   * в рублях. Советую округлять до 2ух знаков после ,
   */
  amount: number;

  /**
   * Валюта платежа
   */
  currency?: Currency;

  /**
   * Дополнительные параметры платежа. Обычно необходимо для
   * [платежа по свободным реквизитам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#freepay)
   */
  fields?: Partial<FreePayFields> & Record<string, string>;

  /**
   * Комментарий к платежу
   */
  comment?: string;
};

export type WebHookInfo = {
  /** UUID действующего обработчика вебхуков */
  hookId: string;
  /** Набор параметров обработчика (только URL) */
  hookParameters: { url: string };
  /** Тип вебхука (только WEB) */
  hookType: "WEB";
  /** Тип транзакций, по которым отсылаются уведомления (IN - входящие, OUT - исходящие, BOTH - все) */
  txnType: TransactionType;
};

/**
 * @see [Документация по вебхукам](https://developer.qiwi.com/ru/qiwi-wallet-personal/#hook_format)
 */
export type WebhookTransaction = {
  /** Хэш цифровой подписи уведомления */
  hash: string;

  /** Уникальный id хука */
  hookId: string;

  /** Уникальный id уведомления */
  messageId: string;

  /** Данные платежа */
  payment: {
    account: string;
    comment: string;

    /** Данные о комиссии для платежа или пополнения */
    commission: MoneyAmount | null;

    /**
     * Для запросов истории платежей - Дата/время платежа, во
     * временной зоне запроса (см. параметр `startDate`). Формат
     * даты `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`
     *
     * Для запросов данных о транзакции - Дата/время платежа, время
     * московское (в формате `ГГГГ-ММ-ДД'T'чч:мм:сс+03:00`)
     */
    date: string;

    /** {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#errorCode|Код ошибки платежа} */
    errorCode: number;

    /** Номер кошелька */
    personId: number;

    /** ID провайдера QIWI Wallet */
    provider: number | Recipients;

    /** Список полей объекта payment (через ,), которые хешируются алгоритмом HmacSHA256 для проверки уведомления (см. параметр `hash`) */
    signFields: string;

    /** Статус платежа */
    status: TransactionStatus;

    /** Данные о сумме платежа или пополнения */
    sum: MoneyAmount | null;

    /** Данные об итоговой сумме платежа или пополнения */
    total: MoneyAmount | null;

    /**
     * ID транзакции в процессинге QIWI Wallet
     */
    txnId: number;

    /**
     * Тип платежа. Возможные значения:
     *
     * `IN` - пополнение,
     *
     * `OUT` - платеж.
     */
    type: TransactionType.IN | TransactionType.OUT;
  };

  /** Признак тестового сообщения */
  test: boolean;

  /** Версия API */
  version: string;
};

type StringOrNumber = string | number;

export interface IPersonalAPI {
  /**
   * Запрос возвращает информацию о вашем профиле - наборе
   * пользовательских данных и настроек вашего QIWI кошелька.
   */
  getPersonProfile(): Promise<PersonProfile>;

  /**
   * Данный запрос позволяет отправить данные для идентификации
   * вашего QIWI кошелька.
   *
   * @param {types.IdentificationBase} data
   * @param {StringOrNumber} wallet
   */
  setIdentification(
    data: IdentificationBase,
    wallet?: StringOrNumber
  ): Promise<IdentificationResponse>;

  /**
   * Данный запрос позволяет выгрузить маскированные данные и
   * статус идентификации своего QIWI кошелька.
   *
   * @param {StringOrNumber} wallet
   */
  getIdentification(wallet?: string): Promise<IdentificationResponse>;

  /**
   * Запрос возвращает текущие уровни лимитов по операциям в вашем
   * QIWI кошельке. Лимиты действуют как ограничения на сумму
   * определенных операций.
   *
   * @template {LimitType[]} Limits
   * @param {Limits} limits
   * @param {StringOrNumber} wallet
   */
  getLimits<Limits extends LimitType[] = LimitType[]>(
    limits: Limits,
    wallet?: StringOrNumber
  ): Promise<LimitsResponse<Limits[number]>>;

  /**
   * Запрос проверяет, есть ли ограничение на исходящие платежи с
   * QIWI Кошелька.
   *
   * @param {StringOrNumber} wallet
   */
  getRestrictions(wallet?: StringOrNumber): Promise<Restrictions>;

  /**
   * Запрос выгружает список платежей и пополнений вашего кошелька.
   * Можно использовать фильтр по количеству, ID и дате
   * (интервалу дат) транзакций.
   *
   * @param {GetPaymentHistoryParams} parameters Тело запроса
   * @param {StringOrNumber} wallet Номер кошелька
   */

  getPaymentHistory(
    parameters: GetPaymentHistoryParams,
    wallet?: StringOrNumber
  ): Promise<GetTransactionsHistoryResponse>;
  /**
   * Данный запрос используется для получения сводной статистики
   * по суммам платежей за заданный период.
   *
   * @param {GetPaymentHistoryTotalParams} parameters
   * @param {StringOrNumber} wallet
   */

  getPaymentHistoryTotal(
    parameters: GetPaymentHistoryTotalParams,
    wallet?: StringOrNumber
  ): Promise<GetPaymentHistoryTotalResponse>;
  /**
   * Запрос используется для получения информации по определенной
   * транзакции из вашей истории платежей.
   *
   * @param {number} transactionId Номер транзакции
   * @param {TransactionType} type Тип транзакции
   */

  getTransaction(transactionId: number, type: TransactionType): Promise<Transaction>;

  /**
   *
   * @param {StringOrNumber} transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param {TransactionType} type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param {ChequeFormat} format тип файла, в который сохраняется квитанция. Допустимые значения: `JPEG`, `PDF`
   */
  getTransactionCheque(
    transactionId: StringOrNumber,
    type: TransactionType,
    format?: ChequeFormat
  ): Promise<Buffer>;

  /**
   *
   * @param {number} transactionId  номер транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].txnId в ответе)
   * @param {TransactionType} type тип транзакции из {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/#history_data|истории платежей} (параметр data[].type в ответе)
   * @param {string} email Адрес для отправки электронной квитанции
   */
  sendTransactionCheque(
    transactionId: number,
    type: TransactionType,
    email: string
  ): Promise<"">;

  /**
   * Успешный ответ содержит JSON-массив счетов вашего QIWI
   * Кошелька для фондирования платежей и текущие балансы счетов
   *
   * @param {StringOrNumber} wallet Номер кошелька
   */
  getAccounts(wallet: StringOrNumber): Promise<GetAccountsResponse["accounts"]>;

  /**
   * Успешный JSON-ответ содержит данные о счетах, которые можно
   * создать
   *
   * @param {StringOrNumber} wallet Номер кошелька
   */
  getAccountOffers(wallet: StringOrNumber): Promise<GetAccountOffersResponse>;

  /**
   * Создаёт новый счёт по параметру `alias`
   * Успешный ответ возвращает пустую строку
   * @param {string} alias Псевдоним нового счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @param {StringOrNumber} wallet Номер кошелька
   */
  createAccount(alias: string, wallet?: StringOrNumber): Promise<"">;

  /**
   * Устанавливает счёт по умолчанию
   * Успешный ответ возвращает пустую строку
   * @param {string} alias Псевдоним счета (см. {@link https://developer.qiwi.com/ru/qiwi-wallet-personal/?http#funding_offer|запрос доступных счетов})
   * @param {StringOrNumber} wallet Номер кошелька
   */

  setDefaultAccount(alias: string, wallet?: StringOrNumber): Promise<"">;

  /**
   *
   * Получает сумму комиссии по заданным реквизитам
   *
   * @param {number} provider ID Провайдера у QIWI
   * @param {string} account ID получателя у провайдера
   * @param {number} amount Сумма
   * @return {Promise<number>}
   */

  getCommission(provider: number, account: string, amount: number): Promise<number>;

  /**
   * Данный метод создаёт ссылку на предзаполненную форму
   *
   * @param {number} provider ID провайдера
   * @param {FormUrlOptions} options
   * @return {string}
   */

  createFormUrl(provider: number | Recipients, options: FormUrlOptions): string;

  /**
   * Более читаемая версия метода {@link pay}
   *
   * [Документация QIWI по методу оплаты](https://developer.qiwi.com/ru/qiwi-wallet-personal/#payments)
   *
   * @param {Pay2Params} params Параметры платежа
   * @return {Promise<PaymentResponse>}
   */

  pay2(options: Pay2Params): Promise<PaymentResponse>;

  /**
   * Создаёт пару ключей для взаимодействия с P2P BILLS API
   *
   * @param {string} name Название связки ключей
   * @param {string=} server URL сервера для отправки уведомлений
   *
   * @return {string[]} Массив, где - [0=Публичный ключ, 1=Секретный ключ]
   *
   * @example
   *
   * const [PublicKey, SecretKey] = await createP2PKeyPair('my-key-pair');
   */

  createP2PKeyPair(
    name: string,
    server?: string
  ): Promise<[PublicKey: string, SecretKey: string]>;

  /**
   * Создаёт токен с увеличенным сроком действия (10 лет)
   *
   * @see {@link https://developer.qiwi.com/ru/qiwi-wallet-personal-advanced/?http#intro|Документация}
   */
  createOauthToken(): Promise<PrettyTokenResponse<IPersonalAPI>>;

  /**
   * Возвращает список карт
   *
   * @return {Promise<CardResponse>}
   */
  getCards(): Promise<CardResponse[]>;

  /**
   * Блокирует карту
   *
   * @param {StringOrNumber} cardId
   * @param {StringOrNumber} wallet

   * @return {Promise<*>}
   */
  blockCard(cardId: StringOrNumber, wallet?: StringOrNumber): Promise<any>;

  /**
   * Разблокирует карту
   *
   * @param {StringOrNumber} cardId
   * @param {StringOrNumber} wallet
   * @return {Promise<CardUnblockResponse>}
   */
  unblockCard(
    cardId: StringOrNumber,
    wallet?: StringOrNumber
  ): Promise<CardUnblockResponse>;

  /**
   * Получает реквизиты карты
   *
   * @param {StringOrNumber} cardId
   * @return {Promise<CardRequisitesResponse>}
   */
  getCardRequisites(cardId: StringOrNumber): Promise<CardRequisitesResponse>;

  renameCard(cardId: StringOrNumber, alias: string): Promise<CardRenameResponse>;
}
