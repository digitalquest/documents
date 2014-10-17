<?php
//you should make one of these scripts for every different project webhook you want - changing only the $wd variable
ini_set("log_errors", 1);
ini_set("error_log", "hook.log");   //use this to log errors that are found in the script (change the filename and path to a log file of your choosing), the command will make the file automatically
error_reporting(E_ALL);
ignore_user_abort(true);            //don't want users screwing up the processing of the script by stopping it mid-process
 
$wd = "/data/www/html";      //this is the only thing that needs to change from project to project
 
//I'm sure there are other ways of handling the system call, this is just the method I've chosen
//setup the function to make the system call where $cwd is the "Current Working Directory"
function syscall ($cmd, $cwd) {
    $descriptorspec = array( 1 => array('pipe', 'w') ); // stdout is a pipe that the child will write to
    $resource = proc_open($cmd, $descriptorspec, $pipes, $cwd);
    if (is_resource($resource)) {
           $output = stream_get_contents($pipes[1]);
           fclose($pipes[1]);
           proc_close($resource);
           return $output;
    }
}
//name of the git repository
$repo = integration;
//name of the working branch
$our_branch = MOODLE_26_SRABLE; 

try{
  //I fumbled around for awhile to finally find this part: GitLab uses the $HTPP_RAW_POST_DATA server variable to house its JSON data meaning your typical $_REQUEST, $_POST, and $_GET will be EMPTY!
  if( $HTTP_RAW_POST_DATA ){
    if( $oData = json_decode( $HTTP_RAW_POST_DATA ) ){ //transform the string into an object so we can get to the 'ref' element
      //now we want to split the ref string on "/", pop off the last element of the array (which will be the branch name), and do one quick validation to make sure a branch name actually exists
      //the actual 'ref' string will look like this: 'refs/heads/master' (or whatever branch was just pushed to instead of master)
		$result = syscall("git pull $repo $our_branch", "$wd");
		return 1; //this isn't necessary but I put it here for good measure, just to say we are done and everything got executed properly
       
    } else {
      throw new Exception("An error was encountered while attempting to json_decode the HTTP_RAW_POST_DATA str");
    }
  } else {
    throw new Exception("HTTP_RAW_POST_DATA is not set or 'ref' is not a valid array element");
  }
} catch (Exception $e) {
    error_log( sprintf( "%s >> %s", date('Y-m-d H:i:s'), $e ) );
}
?>