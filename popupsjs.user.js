// ==UserScript==
// @run-at       document-start
// @name         POPups Blocked
// @namespace    http://tampermonkey.net/
// @version      v1
// @description  Page my https://io.hsoub.com/u/h1om
// @author       harran El-marri
// @include      https://animelek.me/*
// @include      https://witanime.com/*
// @include      https://www.arabanime.net/*
// @include      https://*.animelek.tv/*
// @include      https://*.cloud-anime.com/*
// @include      https://animespire.buzz/*
// @include      https://www.animeiat.tv/*
// @include      https://yo-anime.com/*
// @include      https://www.ibranime.com/*
// @include      https://www.egyanime.com/*
// @include      https://www.anmespire.com/*
// @include      https://animerco.com/*
// @include      https://a.xsanime.com/*
// @include      https://an-master.net/*
// @icon         https://cdn-icons-png.flaticon.com/128/3162/3162620.png
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function(){
        $('html body').append('<a href="https://io.hsoub.com/u/h1om" style="z-index: 9999;position: fixed;top: 0;right: 0;'
                              + 'padding: 10px;background: rgba(0, 0, 0, .8);color: white;font-family: monospace;">'
                              + ' 🥳 harran el-marri</a>');
        $('div[style=z-index: 2147483647]').remove();
        $('center#h860').remove();
        $('script').remove();
        $('iframe[allowtransparency=true]').remove();
        $('iframe[src=about:blank]').remove();
        $('html > iframe').remove();
        $('body > iframe').remove();
    });
    setInterval(() => {
        $('div[style=z-index: 2147483647]').remove();
        $('center#h860').remove();
        $('script').remove();
        $('iframe[allowtransparency=true]').remove();
        $('iframe[src=about:blank]').remove();
        $('html > iframe').remove();
        $('body > iframe').remove();
    }, 100);
})();
