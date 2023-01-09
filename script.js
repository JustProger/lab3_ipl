window.onload = function() {
   var text = "";
   var c = 0;

   function countElements(node) {
      var elementsNum = 0;

      if (node.nodeType == 1) {
         elementsNum++;
         console.log(node.nodeName+', increment the counter +1');
         var a = '';
         for (j = 0; j < c; j++) {
            a = a + '&nbsp'.repeat(4);
         }
         text = text + a + node.nodeName + "<br>";
      } else {
         console.log(node.nodeName+', not an element')
      }

      var children = node.childNodes;

      for (var i=0; i < children.length; i++) {
         c = c + 1;
         elementsNum += countElements(children[i]);
         c = c - 1;
      }
      return elementsNum;
   }

   function resultInDiv() {
      result = document.getElementById('result');
      var allElementsNum = countElements(document);
      result.innerHTML = "Результат обхода:<br>" + text + 'Количество подсчитанных элементов: ' + allElementsNum + '.';
   }

   var btn = document.getElementById('start');
   btn.addEventListener('mousedown', resultInDiv);
};