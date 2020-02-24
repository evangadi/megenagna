<?php
$subjectMail = "Veggie Online Form Submit";
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$phoneno = $_REQUEST['phoneno'];
$message = $_REQUEST['mess'];


// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Change Your Recive Mail Id
$email_to_send_to = 'sagarsneh@gmail.com';

$txt =
	 'Online Form Message Bellow'. 
	 'Name:'.$name.'<br/>'.
	 'Email:'.$email.'<br/>'.
	 'Subject:'.$subject.'<br/>'.
	 'Phone No:'.$phoneno.'<br/>'.
	 'Message:'.$message.'<br/>';


$status = mail($email_to_send_to,$subjectMail,$txt,$headers);
echo $status?"<p>Message has been sent</p>":"<p>Message could not be sent.</p>";
