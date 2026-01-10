export type CountyCodeTypes = {
    flagWide: string;
    code: string;
    dial_code: string;
    name: string;
    flag: string;
};
export type UserDetailsType = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    promoCode: string;
};

export type DahsboardDataType = {
    data: number,
    daysRemaining: number,
    hasTopUp: boolean,
    isEsimInstalled: boolean,
    productId: number,
    total: number
    usage: {
        currentAmount: number,
        initialAmount: number
    }
    validUntil: string
    validity: number
}

export type SessionDataType = {
    jwtToken: string,
    productId: number,
    countryId: string,
    countryName: string,
    countryFlag: string,
    regionName: string,
    price: number,
    discountPercent: number,
    planName: string,
    lpaString: string
};