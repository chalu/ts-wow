type WithCountryCode<P> = 
    P extends `${infer _n0}${infer n1}${infer n2}${infer n3}`
    ? `+234${n1}${n2}${n3}`
    : never;

type StdMTNTelcoPrefix = '0803' | '0806' | '0703' | '0706' | '0813' |
     '0816' | '0810' | '0814' | '0903' | '0906';

type IntlMTNTelcoPrefix = WithCountryCode<StdMTNTelcoPrefix>;

type AllMTNTelcoPrefixes = StdMTNTelcoPrefix | IntlMTNTelcoPrefix;

type MTNPhoneNumber = `${AllMTNTelcoPrefixes}${number}`;

type ToMTN = (subscribers: MTNPhoneNumber[]) => boolean

interface SDKSurface {
    nga: {
        sendSMS: ToMTN
    }
}