<?php

	include('slack_keys.php');

	// Only process POST reqeusts.
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		
		// Get the form fields and remove whitespace.
		$name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
		$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
		
		// Check that data was sent correctly
		if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
			// Set a 400 (bad request) response code and exit.
			http_response_code(400);
			echo "Oops! There was a problem with your submission. Please complete the form and try again.";
			exit;
		}
		
		$fields = array(
	                'email' => urlencode($email),
	                'channels' => urlencode($slackAutoJoinChannels),
	                'first_name' => urlencode($name),
	                'token' => $slackAuthToken,
	                'set_active' => urlencode('true'),
	                '_attempts' => '1'
	            );

		 // url-ify the data for the POST
		$fields_string='';
                foreach($fields as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
                rtrim($fields_string, '&');

                // open connection
                $ch = curl_init();

                // set the url, number of POST vars, POST data
                curl_setopt($ch,CURLOPT_URL, $slackInviteUrl);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch,CURLOPT_POST, count($fields));
                curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);

                // exec
                $replyRaw = curl_exec($ch);
                error_log(var_export($replyRaw, true));
                $reply=json_decode($replyRaw,true);
                if($reply['ok']==false) {
                	http_response_code(500);
                	echo date('c').' - '."\"".$name."\" <".$email."> - ".'Error: '.$reply['error']."\n";
                }
                else {
                	error_log('test1');
                	http_response_code(200);
                	error_log('test2');
			echo date('c').' - '."\"".$name."\" <".$email."> - ".'Invited successfully'."\n";
                }

                // close connection
                curl_close($ch);

                error_log('test3');

	} else {
		// Not a POST request, set a 403 (forbidden) response code.
		http_response_code(403);
		echo "There was a problem with your submission, please try again.";
	}


?>