<?php

	include('slack_keys.php');

	// Only process POST reqeusts.
	if ($_SERVER["REQUEST_METHOD"] == "GET") {
		
		$meetupApiURL = 'https://api.meetup.com/Front-End-Web-Developers-Perth?&sign=true&key='.$meetupAuthToken;

		// do the curl to the meetup api

		// open connection
                $ch = curl_init();

                // set the url, number of POST vars, POST data
                curl_setopt($ch,CURLOPT_URL, $meetupApiURL);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	// curl_setopt($ch, CURLOPT_HEADER, 0);

                // exec
                $replyRaw = curl_exec($ch);
                $reply=json_decode($replyRaw,true);
                
                if(isset($reply['errors'])) {
                	http_response_code(500);
                	echo $replyRaw;
                }
                else {
                	http_response_code(200);
                                echo $replyRaw;
                }

                // close connection
                curl_close($ch);
		
        } else {
                // Not a POST request, set a 403 (forbidden) response code.
                http_response_code(403);
                echo "There was a problem with your submission, please try again.";
        }


?>