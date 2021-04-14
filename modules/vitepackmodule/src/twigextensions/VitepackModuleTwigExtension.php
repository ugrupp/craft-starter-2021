<?php
/**
 * vitepack module for Craft CMS 3.x
 *
 * Connect Craft CMS to Vite
 *
 * @link      https://www.21sieben.de
 * @copyright Copyright (c) 2021 21sieben
 */

namespace modules\vitepackmodule\twigextensions;

use modules\vitepackmodule\VitepackModule;

use Craft;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * @author    21sieben
 * @package   VitepackModule
 * @since     1.0.0
 */
class VitepackModuleTwigExtension extends AbstractExtension
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function getName()
    {
        return 'VitepackModule';
    }

    /**
     * @inheritdoc
     */
    public function getFilters()
    {
        return [
            new TwigFilter('readManifest', [$this, 'readManifest']),
        ];
    }

    /**
     * @param null $path
     *
     * @return array
     */
    public function readManifest($path = null, $entry = "index.html")
    {
        // Get manifest and json_decode it
        return json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'] . $path), true) ?: [];
    }
}
