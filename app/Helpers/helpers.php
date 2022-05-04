<?php

use Illuminate\Support\Facades\DB;

/**
 * @param int|null $creatorUserId
 * @param string $tableUser
 * @return string
 */
function get_created_by(?int $creatorUserId, string $tableUser = 'admins'): string
{
    if ($tableUser && $creatorUserId) {
        $creatorUser = DB::table($tableUser)->where('id', $creatorUserId)->first();
        if ($creatorUser) {
            $firstName = strtok(mb_convert_case($creatorUser->name, MB_CASE_TITLE, "UTF-8"), ' ');
            return "#{$creatorUser->id} - {$firstName}";
        }
    }
    return "";
}

/**
 * @param int|null $editorUserId
 * @param string $tableUser
 * @return string
 */
function get_updated_by(?int $editorUserId, string $tableUser = 'admins'): string
{
    if ($tableUser && $editorUserId) {
        $editorUser = DB::table($tableUser)->where('id', $editorUserId)->first();
        if ($editorUser) {
            $firstName = strtok(mb_convert_case($editorUser->name, MB_CASE_TITLE, "UTF-8"), ' ');
            return "#{$editorUser->id} - {$firstName}";
        }
    }
    return "";
}

/**
 * @param string|null $value
 * @return string
 */
function get_clear_fields(?string $value): string
{
    if (empty(trim($value))) {
        return '';
    }
    return preg_replace("/[^0-9]/", "", $value);
}

