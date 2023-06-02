const toMTNSubscribers = (subscribers: MTNPhoneNumber[]): boolean => {
    // TODO call external telco API
    return subscribers.length >= 1;
};

const SDK: SDKSurface = {
    nga: {
        sendSMS: toMTNSubscribers
    }
};

// With the MTNPhoneNumber type, sendSMS function
// can only accept valid Nigerian MTN phone numbers,
// hence the red error marker on the 2nd phone number entry.
// See type definitions in types.ts
SDK.nga.sendSMS([
    '08138155473',
    '08058145472',
    '+2349038145472'
]);