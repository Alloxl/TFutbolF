<?php
$string =  '<html>'.
'<head>'.
'    <style>'.
'        * {'.
'            margin: 0;'.
'            padding: 0;'.
'            box-sizing: border-box;'.
'        }'.
''.
'        .container {'.
'            width: 100%;'.
'            height: 100vh;'.
'            display: flex;'.
'            flex-direction: column;'.
'            align-items: center;'.
'            justify-content: center;'.
'            background-color: #f0f0f0;'.
'        }'.
''.
'        .logo {'.
'            width: 300px;'.
'            height: 100px;'.
'            background-image: url("https://bitly.com/static/images/bitly-logo-text.png");'.
'            background-size: cover;'.
'        }'.
''.
'        .title {'.
'            font-size: 36px;'.
'            font-weight: bold;'.
'            color: #333333;'.
'            margin-top: 20px;'.
'        }'.
''.
'        .subtitle {'.
'            font-size: 18px;'.
'            color: #666666;'.
'            margin-top: 10px;'.
'        }'.
''.
'        .form {'.
'            width: 500px;'.
'            height: 200px;'.
'            border-radius: 10px;'.
'            background-color: white;'.
'            box-shadow: 0 0 10px rgba(0,0,0,0.1);'.
'            margin-top: 20px;'.
'            display: flex;'.
'            flex-direction: column;'.
'            align-items: center;'.
'        }'.
''.
'        .input {'.
'            width: 400px;'.
'            height: 50px;'.
'            border-radius: 25px;'.
'            border: none;'.
'            outline: none;'.
'            padding-left: 20px;'.
'        }'.
''.
'        .button {'.
'            width: 200px;'.
'            height: 50px;'.
'            border-radius: 25px;'.
'            background-color: #ff9900;'.
'            border: none;'.
'            outline: none;'.
'            color:white; '.
'        }'.
'    </style>'.
'</head>'.
'<body>'.
'    <div class="container">'.
'        <div class="logo"></div>'.
'        <div class="title">Bitly</div>'.
'        <div class="subtitle">Shorten, create and share trusted, powerful links</div>'.
'        <form class="form" action="shorten.php" method="post">'.
'          <input class="input" type="text" name="url" id="url" placeholder="Enter a link to shorten it">'.
'          <input class="button" type="submit" value="Shorten" name="submit">'.
'        </form>'.
'    </div>'.
'</body>'.
'</html>';

 echo $string; 
?>