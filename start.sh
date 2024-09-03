#!/bin/bash

if [ -n "$BACKGROUND_TEST_FOLDER" ]; then
    echo "background"

    ws
    ./bin/puppeteer http://host.docker.internal:8000/$BACKGROUND_TEST_FOLDER/ --browser-arg no-sandbox --browser-arg headless=new --browser-arg disable-features=IsolateOrigins,site-per-process --browser-arg  disable-web-security --browser-arg user-data-dir=/var/tmp/chrome --report-format HTML --report-file /siesta/reports
else
    ws
fi

