<?php
/**
 * Obtains a file info array for a document file (as distinct from user file).
 * @param object $oucontent OU content object
 * @param string $path Path within area (e.g. '/')
 * @param string $name Filename
 * @return object File info object
 */
function oucontent_get_documentfile_info($oucontent, $path, $name) {
 $fileinfo = new stdClass;
 $fileinfo->filearea = 'oucontent';
 $fileinfo->itemid = $oucontent->id;
 if ($oucontent->course) {
 $cm = oucontent_get_cm($oucontent);
 $context = get_context_instance(CONTEXT_MODULE, $cm->id);
 } else {
 $context = get_context_instance(CONTEXT_SYSTEM);
 }
 $fileinfo->contextid = $context->id;
 $fileinfo->filepath = $path;
 $fileinfo->filename = $name;
 return $fileinfo;
}

/**
 * Gets a file from its file info object.
 * @param object $fileinfo File info object
 * @return stored_file Actual file
 * @throws moodle_exception If file does not exist
 */
function oucontent_get_file($fileinfo) {
 $fs = get_file_storage();
 $file = $fs->get_file($fileinfo->contextid, $fileinfo->filearea,
 $fileinfo->itemid, $fileinfo->filepath, $fileinfo->filename);
 if (!$file) {
 throw new moodle_exception('fileerror', 'oucontent', '', '',
 "{$fileinfo->contextid}, {$fileinfo->filearea}, {$fileinfo->itemid},{$fileinfo->filepath}{$fileinfo->filename}" );
 }
 return $file;
}

/**
 * Checks if a file exists from its file info object.
 * @param object $fileinfo File info object
 * @return bool True if file exists
 */
function oucontent_file_exists($fileinfo) {
 $fs = get_file_storage();
 return $fs->file_exists($fileinfo->contextid, $fileinfo->filearea,
 $fileinfo->itemid, $fileinfo->filepath, $fileinfo->filename);
}

/**
 * Saves a file in the appropriate area.
 * @param object $oucontent OU content object
 * @param string $path Path within area (e.g. '/')
 * @param string $name Filename
 * @param string $content Content to save into file
 */
function oucontent_documentfile_save($oucontent, $path, $name, $content) {
 $fs = get_file_storage();
 $fs->create_file_from_string(oucontent_get_documentfile_info(
 $oucontent, $path, $name), $content);
}