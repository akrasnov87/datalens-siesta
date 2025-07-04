Description
===========

Siesta is a stress-free JavaScript unit testing and web UI testing tool. Siesta is ubiquitous - it can run in tests on browser pages and 
inside Node.js processes, on Linux, MacOs and Windows. Supported browsers are Chrome, Firefox, Safari, Edge, IE11. Headless browser modes are supported.

This is Lite version of Siesta. With it, you can run tests in Node.js, and, manually, in any supported browser, using web interface.
You can record and replay user actions (like mouse clicks and keyboard typing), using 
the <a href="https://www.bryntum.com/docs/siesta/#!/guide/event_recorder">user actions recorder</a>, except the native simulation.

Standard version includes native events simulation, browsers automation, code coverage, integrations with CI systems and cloud testing providers.  
You can download the trial from the Siesta web-page: <https://bryntum.com/products/siesta> 

Installation
============

Siesta Lite is published in Npm, so it can be installed with:

    > npm install siesta-lite --save-dev
    
Siesta Standard is distributed as plain archive file, you just unpack it in the preferred location (`node_modules/siesta` for example). 


Using Siesta to test Node.js code
============

Described in this guide: <a href="https://www.bryntum.com/docs/siesta/#!/guide/getting_started_nodejs">Getting started with Siesta in Node.js environment</a>


Using Siesta to test generic JavaScript browser code
==============

Described in this guide: <a href="https://www.bryntum.com/docs/siesta/#!/guide/getting_started_browser">Getting started with Siesta in browser environment</a>


Using Siesta to test a sample React application
==============

Described in this guide: <a href="https://www.bryntum.com/docs/siesta/#!/guide/react_testing_sample_application">Testing a sample React application</a>

See <a href="https://www.bryntum.com/examples/siesta/react-google-fonts-space/siesta.html">Live example</a> 


API docs
========

Online documentation can be found here: <https://www.bryntum.com/docs/siesta>

Docs are also included in this package - open the "docs/index.html" file in the browser.


Buy Siesta Standard
---------

Visit our store: <https://bryntum.com/store/siesta>


Support
---------

Ask question in our community forum: <https://www.bryntum.com/forum/viewforum.php?f=20>

Subscribers can post expedited questions in Premium Forum: <https://www.bryntum.com/forum/viewforum.php?f=21>

Please report any bugs through the web interface at <https://www.assembla.com/spaces/bryntum/support/tickets>


See also
---------

Siesta web-page: <https://bryntum.com/products/siesta>

Other Bryntum products: <https://bryntum.com/products>



Attribution
---------

This software contains icons from the following icon packs (licensed under Creative Common 2.5/3.0 Attribution licenses)

- <http://www.famfamfam.com/lab/icons/silk/>
- <http://led24.de/iconset/>
- <http://p.yusukekamiyamane.com/>
- <http://rrze-icon-set.berlios.de/index.html>
- <http://www.smashingmagazine.com/2009/05/20/flavour-extended-the-ultimate-icon-set-for-web-designers/>
- <http://www.doublejdesign.co.uk/products-page/icons/super-mono-icons/>
- <http://pixel-mixer.com/>

Thanks a lot to the authors of the respective icons packs.


COPYRIGHT AND LICENSE
---------

Copyright (c) 2009-2018, Bryntum & Nickolay Platonov

All rights reserved.

## Запуск

Предварительно нужно в корне каталога добавить исходный код [siesta test 5.6.1](https://ds920.mobwal.com/d/s/zxhtcsGDZeajueX5A65O2YnsmeCrs1pM/ZeJ7xkbnQf5eh0OsloSDCBVwLcRgDzmg-mrsA3xMEpAs). Можно скачать с официального сайта, все обновлённые файлы сохранены в этом проекте.

Запуск интерфейса тестирования производится только после установки http-сервера. Рекомендуемой программой является `npm install -g local-web-server` это простой http-сервер. Описание local-web-server [тут](https://www.npmjs.com/package/local-web-server).

После установки `local-web-server`, в корне проекта, выполняем команду `ws`.

### Cross page testing

При тестирование рекомендуется использовать браузер Chrome, который должен быть [скачан](https://www.google.com/chrome/) с официального сайта. И для всех тестов, которые запускаются в этом режиме требуется указать параметр `enablePageRedirect`

<pre>
var project = Siesta.Project.Browser

project.configure({
    enablePageRedirect : true,
    separateContext: true
})

project.plan(
    {
        pageUrl     : '//google.com',
        url         : 'x-domain.t.js'
    }
)

project.start()
</pre>

Браузер запускаем следующей командой `google-chrome --disable-web-security --user-data-dir=/var/tmp/chrome`, где `new_chrome_profile` - это папка, где будет хранится информация о профиле, например тут указываем `/var/tmp/chrome`

### Симулятор событий

Во время запуска теста может быть выведено следующее сообщение

<pre>
Could not connect to native events simulation server on 127.0.0.1:31888
Is it launched with siesta/bin/simulator ?
Falling back to synthetic events
</pre>

Чтобы исправить это нужно в корне проекта выполнить команду `./bin/simulator`.

## Тестирование

Запускаем `datalens`:

<pre>
./init.sh --hc --hc-local --up
</pre>

## Puppeteer

<pre>
./bin/puppeteer http://host.docker.internal:8000/datalens/ --browser-arg no-sandbox --browser-arg headless=new --browser-arg disable-web-security --browser-arg user-data-dir=/var/tmp/chrome

или

./bin/puppeteer http://host.docker.internal:8000/datalens/ --browser-arg no-sandbox --browser-arg headless=new --browser-arg disable-web-security --browser-arg user-data-dir=/var/tmp/chrome --report-format HTML --report-file /var/tmp/report
</pre>

## Docker

__Сборка проекта__: `docker build -t akrasnov87/siesta-lite:5.6.1 . -f Dockerfile.selfhost`

Проект собран на основе siesta-lite:5.6.1.

В оригинальную версию были внесены следующие изменения:
* в файл ./bin/siesta-launcher-all.js добавлены объект $jscomp.*
* в корне каталога добавлен файл `$jscomp.js`

__Примечание__: можно воспользоваться командой `yarn build`, номер версии будет получен из `package.json`.

__Запуск контейнера__: 
<pre>
docker run --rm -p 8000:8000 \
-v /home/a-krasnov/data/code/datalens/siesta-5.6.1-trial/custom-data:/siesta/custom-data \
-v /home/a-krasnov/data/code/datalens/siesta-5.6.1-trial/reports:/siesta/reports \
-e BACKGROUND_TEST_FOLDER=custom-data \
--name siesta-lite \
akrasnov87/siesta-lite:5.6.1
</pre>

В примере указано, что:
* требуется прокинуть локальный порт 8000 наружу;
* переопределяется локальный каталог `custom-data`

<pre>
docker run --rm -p 8000:8000 \
-v /home/a-krasnov/data/code/datalens/siesta-5.6.1-trial/custom-data:/siesta/custom-data \
-v /home/a-krasnov/data/code/datalens/siesta-5.6.1-trial/reports:/siesta/reports \
--name siesta-lite \
akrasnov87/siesta-lite:5.6.1
</pre>

## Запуск тестирования в фоне

1. Запускаем `datalens`

Предаврительно удаляем volume `datalens-volume-*`

<pre>
./init --hc --hc-local --up
</pre>

__Примечание__: тестирование должно быть запущено, если есть возможность авторизации на странице http://localhost:8080

В терминале должена появиться строке `Worker listening 59 on port 5001/demo/`

2. Ожидаем загрузки `datalens`

3. Запускаем тестирование:
<pre>
docker run --rm -p 8000:8000 \
-v /home/a-krasnov/data/code/datalens/siesta-5.6.1-trial/custom-data:/siesta/custom-data \
-v /home/a-krasnov/data/code/datalens/siesta-5.6.1-trial/reports:/siesta/reports \
-e BACKGROUND_TEST_FOLDER=custom-data \
--name siesta-lite \
akrasnov87/siesta-lite:5.6.1
</pre>

4. Результат смотрим на странице http://host.docker.internal:8000/reports/