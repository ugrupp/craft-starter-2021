<?php

return [
    'enabled' => true,

    'baseUri' => [
        "'self'",
    ],
    'defaultSrc' => [
      "'self'",
    ],
    'scriptSrc' => [
        "'self'",
        "'unsafe-eval'",
        "'unsafe-inline'",
        // vite plugin: nomodule polyfill & module preload shim
        "'sha256-ZgZHeqr0GxaizxG50zKlirvlgYb5UL0cFHC0cAUYkk8='",
        "'sha256-TqcsPbpQsjJcjt+mICoP/UKTrUiCsyZht6D13RKXGGQ='",
        "craft-starter-2021.nitro:2170",
    ],
    'styleSrc' => [
        "'self'",
        "'unsafe-inline'",
    ],
    'imgSrc' => [
        "'self'",
        "data:",
        "https://tailwindui.com"
    ],
    'connectSrc' => [
      "'self'",
      "ws://craft-starter-2021.nitro:2170",
    ],
    'fontSrc' => [
      "'self'",
      "data:",
    ],
    'objectSrc' => [
      "'none'"
    ],
    'mediaSrc' => [
      "'self'"
    ],
    'frameSrc' => [
      "'none'"
    ],
    'sandbox' => [],
    'reportUri' => [],
    'childSrc' => [
      "'none'"
    ],
    'formAction' => [
      "'self'"
    ],
    'frameAncestors' => [
      "'self'",
    ],
    'pluginTypes' => [],
    'reportTo' => [],
    'workerSrc' => [
      "'none'"
    ],
    'manifestSrc' => [
      "'self'"
    ],
    'navigateTo' => [],
];
