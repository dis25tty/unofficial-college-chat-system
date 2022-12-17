<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>upload ur</title>
<link rel="stylesheet" href="style.css"></head>
<body>
    <?php if(isset($_GET['error'])){?>
        <p><?=$_GET['error']?></p>
    <?php } ?>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="my_video">
        <input type="submit" name="Submit" value="Upload">
    </form>
</body>
</html>