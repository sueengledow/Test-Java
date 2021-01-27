<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>document.getElementsByTagName("li")[2].innerHTML = "Sue";
  <meta charset="utf-8">
  <title>Drum Kit</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
</head>

<body>

  <h1 id="title">Drum 🥁 Kit</h1>
  <div class="set">
    <button class="w drum">w</button>
    <audio id="playAudio" autoplay>
    	<source src="tom-1.mp3" type="audio/mpeg">
    Your audio player does not support the audio element
    </audio>
    <button class="a drum">a</button>
    <button class="s drum">s</button>
    <button class="d drum">d</button>
    <button class="j drum">j</button>
    <button class="k drum">k</button>
    <button class="l drum">l</button>
  </div>

  <script src="index.js"></script>
  <footer>
    Made with ❤️ in London.
  </footer>
</body>

</html>

