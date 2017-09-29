ob_start();

echo "All is OK! ;)";
$buffer = ob_get_contents();
ob_end_clean();
echo json_encode($buffer);
exit;
