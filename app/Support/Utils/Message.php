<?php

namespace App\Support\Utils;

class Message
{
    private static array $data;

    /**
     * @param string $message
     * @param string $icon
     * @return array
     */
    public static function success(string $message, string $icon = 'icon-check'): array

    {
        self::$data['message'] = $message;
        self::$data['icon'] = $icon;
        self::$data['type'] = 'success';
        return self::$data;
    }

    /**
     * @param string $message
     * @param string $icon
     * @return array
     */
    public static function error(string $message, string $icon = 'icon-exclamation-circle'): array
    {
        self::$data['message'] = $message;
        self::$data['icon'] = $icon;
        self::$data['type'] = 'error';
        return self::$data;
    }

    /**
     * @param string $message
     * @param string $icon
     * @return array
     */
    public static function info(string $message, string $icon = 'icon-exclamation-circle'): array
    {
        self::$data['message'] = $message;
        self::$data['icon'] = $icon;
        self::$data['type'] = 'info';
        return self::$data;
    }

    /**
     * @param string $message
     * @param string $icon
     * @return array
     */
    public static function alert(string $message, string $icon = 'icon-exclamation-triangle'): array
    {
        self::$data['message'] = $message;
        self::$data['icon'] = $icon;
        self::$data['type'] = 'warning';
        return self::$data;
    }
}
