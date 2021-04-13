<?php
/**
 * vitepack module for Craft CMS 3.x
 *
 * Connect Craft CMS to Vite
 *
 * @link      https://www.21sieben.de
 * @copyright Copyright (c) 2021 21sieben
 */

namespace modules\vitepackmodule;

use modules\vitepackmodule\twigextensions\VitepackModuleTwigExtension;

use Craft;
use craft\events\RegisterTemplateRootsEvent;
use craft\web\View;

use yii\base\Event;
use yii\base\Module;

/**
 * Class VitepackModule
 *
 * @author    21sieben
 * @package   VitepackModule
 * @since     1.0.0
 *
 */
class VitepackModule extends Module
{
    /**
     * @var Module Self-referential module property.
     */
    public static $instance;

    public function init()
    {
        self::$instance = $this;

        // Set alias for this module
        Craft::setAlias('@vitepack', __DIR__);

        // Set the controllerNamespace based on whether this is a console or web request
        if (Craft::$app->getRequest()->getIsConsoleRequest()) {
            $this->controllerNamespace = 'vitepack\\console\\controllers';
        } else {
            $this->controllerNamespace = 'vitepack\\controllers';
        }

        // Run parent init
        parent::init();

        Craft::$app->view->registerTwigExtension(new VitepackModuleTwigExtension());
    }
}
