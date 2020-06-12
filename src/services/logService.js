import * as Sentry from "@sentry/browser";

function init() {
    Sentry.init({dsn: "https://0debe882dbe44ae5a00ada8680a22079@o406002.ingest.sentry.io/5272561"});
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
}