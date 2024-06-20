document.addEventListener('DOMContentLoaded', function() {
    var textInput = document.getElementById('textInput');
    var countButton = document.getElementById('countButton');
    var result = document.getElementById('result');

    countButton.addEventListener('click', function() {
        var textValue = textInput.value.trim();

        if (textValue.length === 0) {
            result.innerHTML = 'No words to count.';
        } else {
            var wordArray = textValue.split(/\s+/);
            var wordCount = wordArray.length;
            result.innerHTML = '<span>' + wordCount + '</span> words';
        }
    });
});
