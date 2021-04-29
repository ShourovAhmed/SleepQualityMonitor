<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
  <body>
    <?php
    // Create connection
    $conn = new mysqli("localhost", "root", "Project123", "sleepqm"); // server, user, password, db
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id, Timestamp, BPM FROM monitordata";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      // output data of each row
      echo 
      "<table style='width:auto;text-align: center'>
      <tr>
        <th>Id</th>
        <th>Time</th>
        <th>Beats Per Min.</th>
      </tr>";

      while($row = $result->fetch_assoc()) { 
        echo 
        '<tr>
          <td>'.$row["id"].'</td>
          <td>'.$row["Timestamp"].'</td>
          <td>'.$row["BPM"].'</td>
        </tr>';
      }
      echo"</table>";
    } else {
      echo "no results found";
    }
    $conn->close();
    ?>
  </body>
</html>


