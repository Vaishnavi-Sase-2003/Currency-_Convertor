const countryList = {
  AED: { code: "AE", name: "United Arab Emirates" },
  AFN: { code: "AF", name: "Afghanistan" },
  XCD: { code: "AG", name: "Antigua and Barbuda" },
  ALL: { code: "AL", name: "Albania" },
  AMD: { code: "AM", name: "Armenia" },
  ANG: { code: "AN", name: "Netherlands Antilles" },
  AOA: { code: "AO", name: "Angola" },
  AQD: { code: "AQ", name: "Antarctica" },
  ARS: { code: "AR", name: "Argentina" },
  AUD: { code: "AU", name: "Australia" },
  AZN: { code: "AZ", name: "Azerbaijan" },
  BAM: { code: "BA", name: "Bosnia and Herzegovina" },
  BBD: { code: "BB", name: "Barbados" },
  BDT: { code: "BD", name: "Bangladesh" },
  XOF: { code: "BE", name: "Benin" },
  BGN: { code: "BG", name: "Bulgaria" },
  BHD: { code: "BH", name: "Bahrain" },
  BIF: { code: "BI", name: "Burundi" },
  BMD: { code: "BM", name: "Bermuda" },
  BND: { code: "BN", name: "Brunei" },
  BOB: { code: "BO", name: "Bolivia" },
  BRL: { code: "BR", name: "Brazil" },
  BSD: { code: "BS", name: "Bahamas" },
  NOK: { code: "BV", name: "Bouvet Island" },
  BWP: { code: "BW", name: "Botswana" },
  BYR: { code: "BY", name: "Belarus" },
  BZD: { code: "BZ", name: "Belize" },
  CAD: { code: "CA", name: "Canada" },
  CDF: { code: "CD", name: "Democratic Republic of the Congo" },
  XAF: { code: "CF", name: "Central African Republic" },
  CHF: { code: "CH", name: "Switzerland" },
  CLP: { code: "CL", name: "Chile" },
  CNY: { code: "CN", name: "China" },
  COP: { code: "CO", name: "Colombia" },
  CRC: { code: "CR", name: "Costa Rica" },
  CUP: { code: "CU", name: "Cuba" },
  CVE: { code: "CV", name: "Cape Verde" },
  CYP: { code: "CY", name: "Cyprus" },
  CZK: { code: "CZ", name: "Czech Republic" },
  DJF: { code: "DJ", name: "Djibouti" },
  DKK: { code: "DK", name: "Denmark" },
  DOP: { code: "DO", name: "Dominican Republic" },
  DZD: { code: "DZ", name: "Algeria" },
  ECS: { code: "EC", name: "Ecuador" },
  EEK: { code: "EE", name: "Estonia" },
  EGP: { code: "EG", name: "Egypt" },
  ETB: { code: "ET", name: "Ethiopia" },
  EUR: { code: "FR", name: "France" },
  FJD: { code: "FJ", name: "Fiji" },
  FKP: { code: "FK", name: "Falkland Islands" },
  GBP: { code: "GB", name: "United Kingdom" },
  GEL: { code: "GE", name: "Georgia" },
  GGP: { code: "GG", name: "Guernsey" },
  GHS: { code: "GH", name: "Ghana" },
  GIP: { code: "GI", name: "Gibraltar" },
  GMD: { code: "GM", name: "Gambia" },
  GNF: { code: "GN", name: "Guinea" },
  GTQ: { code: "GT", name: "Guatemala" },
  GYD: { code: "GY", name: "Guyana" },
  HKD: { code: "HK", name: "Hong Kong" },
  HNL: { code: "HN", name: "Honduras" },
  HRK: { code: "HR", name: "Croatia" },
  HTG: { code: "HT", name: "Haiti" },
  HUF: { code: "HU", name: "Hungary" },
  IDR: { code: "ID", name: "Indonesia" },
  ILS: { code: "IL", name: "Israel" },
  INR: { code: "IN", name: "India" },
  IQD: { code: "IQ", name: "Iraq" },
  IRR: { code: "IR", name: "Iran" },
  ISK: { code: "IS", name: "Iceland" },
  JMD: { code: "JM", name: "Jamaica" },
  JOD: { code: "JO", name: "Jordan" },
  JPY: { code: "JP", name: "Japan" },
  KES: { code: "KE", name: "Kenya" },
  KGS: { code: "KG", name: "Kyrgyzstan" },
  KHR: { code: "KH", name: "Cambodia" },
  KMF: { code: "KM", name: "Comoros" },
  KPW: { code: "KP", name: "North Korea" },
  KRW: { code: "KR", name: "South Korea" },
  KWD: { code: "KW", name: "Kuwait" },
  KYD: { code: "KY", name: "Cayman Islands" },
  KZT: { code: "KZ", name: "Kazakhstan" },
  LAK: { code: "LA", name: "Laos" },
  LBP: { code: "LB", name: "Lebanon" },
  LKR: { code: "LK", name: "Sri Lanka" },
  LRD: { code: "LR", name: "Liberia" },
  LSL: { code: "LS", name: "Lesotho" },
  LTL: { code: "LT", name: "Lithuania" },
  LVL: { code: "LV", name: "Latvia" },
  LYD: { code: "LY", name: "Libya" },
  MAD: { code: "MA", name: "Morocco" },
  MDL: { code: "MD", name: "Moldova" },
  MGA: { code: "MG", name: "Madagascar" },
  MKD: { code: "MK", name: "North Macedonia" },
  MMK: { code: "MM", name: "Myanmar" },
  MNT: { code: "MN", name: "Mongolia" },
  MOP: { code: "MO", name: "Macau" },
  MRO: { code: "MR", name: "Mauritania" },
  MTL: { code: "MT", name: "Malta" },
  MUR: { code: "MU", name: "Mauritius" },
  MVR: { code: "MV", name: "Maldives" },
  MWK: { code: "MW", name: "Malawi" },
  MXN: { code: "MX", name: "Mexico" },
  MYR: { code: "MY", name: "Malaysia" },
  MZN: { code: "MZ", name: "Mozambique" },
  NAD: { code: "NA", name: "Namibia" },
  XPF: { code: "NC", name: "New Caledonia" },
  NGN: { code: "NG", name: "Nigeria" },
  NIO: { code: "NI", name: "Nicaragua" },
  NPR: { code: "NP", name: "Nepal" },
  NZD: { code: "NZ", name: "New Zealand" },
  OMR: { code: "OM", name: "Oman" },
  PAB: { code: "PA", name: "Panama" },
  PEN: { code: "PE", name: "Peru" },
  PGK: { code: "PG", name: "Papua New Guinea" },
  PHP: { code: "PH", name: "Philippines" },
  PKR: { code: "PK", name: "Pakistan" },
  PLN: { code: "PL", name: "Poland" },
  PYG: { code: "PY", name: "Paraguay" },
  QAR: { code: "QA", name: "Qatar" },
  RON: { code: "RO", name: "Romania" },
  RSD: { code: "RS", name: "Serbia" },
  RUB: { code: "RU", name: "Russia" },
  RWF: { code: "RW", name: "Rwanda" },
  SAR: { code: "SA", name: "Saudi Arabia" },
  SBD: { code: "SB", name: "Solomon Islands" },
  SCR: { code: "SC", name: "Seychelles" },
  SDG: { code: "SD", name: "Sudan" },
  SEK: { code: "SE", name: "Sweden" },
  SGD: { code: "SG", name: "Singapore" },
  SKK: { code: "SK", name: "Slovakia" },
  SLL: { code: "SL", name: "Sierra Leone" },
  SOS: { code: "SO", name: "Somalia" },
  SRD: { code: "SR", name: "Suriname" },
  STD: { code: "ST", name: "Sao Tome and Principe" },
  SVC: { code: "SV", name: "El Salvador" },
  SYP: { code: "SY", name: "Syria" },
  SZL: { code: "SZ", name: "Eswatini" },
  THB: { code: "TH", name: "Thailand" },
  TJS: { code: "TJ", name: "Tajikistan" },
  TMT: { code: "TM", name: "Turkmenistan" },
  TND: { code: "TN", name: "Tunisia" },
  TOP: { code: "TO", name: "Tonga" },
  TRY: { code: "TR", name: "Turkey" },
  TTD: { code: "TT", name: "Trinidad and Tobago" },
  TWD: { code: "TW", name: "Taiwan" },
  TZS: { code: "TZ", name: "Tanzania" },
  UAH: { code: "UA", name: "Ukraine" },
  UGX: { code: "UG", name: "Uganda" },
  USD: { code: "US", name: "United States" },
  UYU: { code: "UY", name: "Uruguay" },
  UZS: { code: "UZ", name: "Uzbekistan" },
  VEF: { code: "VE", name: "Venezuela" },
  VND: { code: "VN", name: "Vietnam" },
  VUV: { code: "VU", name: "Vanuatu" },
  YER: { code: "YE", name: "Yemen" },
  ZAR: { code: "ZA", name: "South Africa" },
  ZMK: { code: "ZM", name: "Zambia" },
  ZWD: { code: "ZW", name: "Zimbabwe" },
};
