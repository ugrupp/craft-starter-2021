<?php

return [
    '*' => [
        'enabled' => false,
        'siteSettings' => [],

        'checkInvalidLogins' => false,
        'invalidLoginWindowDuration' => '3600',
        'maxInvalidLogins' => 10,
        'allowIps' => '',
        'denyIps' => '',
    ],
    'staging' => [
        'enabled' => true,
        'password' => 'startschuss',
    ],
];
