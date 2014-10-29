<?php

// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Web service local plugin template external functions and service definitions.
 *
 * @package    localwsavatar
 * @copyright  2014 J
 * @license    http:
 */

// We defined the web service functions to install.
$functions = array(
        'local_wsavatar_update_user_avatar' => array(
                'classname'   => 'local_wsavatar_external',
                'methodname'  => 'updata_user_avatar',
                'classpath'   => 'local/wsavatar/externallib.php',
                'description' => 'Updates the profile photo from SITS',
                'type'        => 'write',
        ),
		'local_wsavatar_update_all_avatars' => array(
                'classname'   => 'local_wsavatar_external',
                'methodname'  => 'updata_all_avatars',
                'classpath'   => 'local/wsavatar/externallib.php',
                'description' => 'Updates the profile photo of all students (photo from SITS)',
                'type'        => 'write',
        )
);

// We define the services to install as pre-build services. A pre-build service is not editable by administrator.
$services = array(
        'My service' => array(
                'functions' => array ('local_wsavatar_update_user_avatar','local_wsavatar_update_all_avatars'),
                'restrictedusers' => 0,
                'enabled'=>1,
        )
);