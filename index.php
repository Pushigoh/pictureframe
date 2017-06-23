<!DOCTYPE html>
<html>
	<?php
	include 'config.php';
		if(!empty($_GET['display']))
			$display = filter_var($_GET['display'], FILTER_SANITIZE_STRING);
		else
			$display = "0";
		if(!empty($_GET['time']))
			$time = filter_var($_GET['time'], FILTER_SANITIZE_STRING);
		else
			$time = "20s";
		header("Location: $website:$port/?display=$display&time=$time");
	?>
</html>
