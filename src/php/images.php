<?php 

header('Content-Type: application/json');

$images = glob("../assets/images/*.*");
$data = array();

for ($i=0; $i<count($images); $i++)
{
    $data[] = array(
        'id' => $i,
        'url' => $images[$i]
    );
}

echo json_encode($data);
?>