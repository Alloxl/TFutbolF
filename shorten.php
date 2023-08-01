<?php
// Veritabanı bağlantısı
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bitly";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Formdan gelen URL'yi al
if (isset($_POST['submit'])) {
  $url = $_POST['url'];

  // URL'nin geçerli olup olmadığını kontrol et
  if (filter_var($url, FILTER_VALIDATE_URL)) {

    // URL'nin veritabanında olup olmadığını kontrol et
    $sql = "SELECT * FROM links WHERE original_url = '$url'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      // URL zaten veritabanında varsa, yeni bir URL oluşturma
      $row = $result->fetch_assoc();
      $short_url = $row['short_url'];
      echo "Your shortened URL is: <a href='$short_url'>$short_url</a>";
    } else {
      // URL veritabanında yoksa, yeni bir URL oluştur
      // Rastgele bir karakter dizisi üret
      $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      $random_string = '';
      for ($i = 0; $i < 6; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $random_string .= $characters[$index];
      }

      // Yeni URL'yi oluştur
      $short_url = "http://localhost/" . $random_string;

      // Yeni URL'yi veritabanına kaydet
      $sql = "INSERT INTO links (original_url, short_url) VALUES ('$url', '$short_url')";
      if ($conn->query($sql) === TRUE) {
        echo "Your shortened URL is: <a href='$short_url'>$short_url</a>";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    }
  } else {
    echo "Invalid URL";
  }
}
?>
