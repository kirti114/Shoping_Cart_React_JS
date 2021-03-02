import deepExtend from "deep-extend";
let isProductionEnv = (process.env.ENVIROMENT === "production") ? true : false, url = {};

if (isProductionEnv) {
    url = {
        accountsUrl: "https://accounts-staging-v2.lcx.com",
        terminalUrl: "https://terminal-staging-v2.lcx.com",
        exchangeUrl: "https://exchange-staging.lcx.com",
        defiUrl: "http://defi-staging.lcx.com/",
        reCaptchaKey: "6LevFeYUAAAAAPqE1ZplywT42HiPocVFo9K3f4vA",
    }
} else {
    url = {
        accountsUrl: "http://localhost:4000",
        terminalUrl: "http://localhost:3000",
        exchangeUrl: "http://localhost:3300",
        defiUrl: "http://localhost:3000",
        reCaptchaKey: "6LevFeYUAAAAAPqE1ZplywT42HiPocVFo9K3f4vA",
    };
}

let config = {
    reCaptchaKey: url.reCaptchaKey,
    debug: !isProductionEnv,
};

deepExtend(config, url);
export default config;
