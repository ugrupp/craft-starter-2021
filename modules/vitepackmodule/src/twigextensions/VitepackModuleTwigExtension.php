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
        $assetsManifest = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'] . $path), true) ?: [];
        $file = $assetsManifest[$entry];

        // Initalise output arrays
        $output["css"] = [];
        $output["js"] = [];
        $output["assets"] = [];

        // Build CSS array
        if (array_key_exists("css", $file)) {
            if (is_array($file["css"])) {
                $output["css"] = $file["css"];
            } else {
                array_push($output["css"], $file["css"]);
            }
        }

        // Build JS array
        if (array_key_exists("file", $file)) {
            if (is_array($file["file"])) {
                $output["js"] = $file["file"];
            } else {
                array_push($output["js"], $file["file"]);
            }
        }

        // Build assets array
        if (array_key_exists("assets", $file)) {
            if (is_array($file["assets"])) {
                $output["assets"] = $file["assets"];
            } else {
                array_push($output["assets"], $file["assets"]);
            }
        }

        return $output;
    }
}
