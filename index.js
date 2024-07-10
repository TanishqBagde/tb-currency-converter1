import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_JHQm0dP6Ykm8XLVOBiZDTisOIpNu3oJ0xiPrOH79');

export async function convertCurrency(fromcurrency, tocurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromcurrency,
        currencies: tocurrency
    });
    const multiplier = res.data[tocurrency];
    console.log(multiplier);
    return multiplier*units;
}

