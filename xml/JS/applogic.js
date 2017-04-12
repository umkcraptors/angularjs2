function ShowXml() {

var inputxml = "<rss version='2.0'><channel><title>RSS Title</title></channel></rss>";


inputxml ="<writers>   <EnglishLanguage>      <fiction>         <pen>            <name>Jane Austin</name>            <name>Rex Stout</name>            <name>Dashiell Hammett</name>         </pen>      </fiction>   </EnglishLanguage></writers>";


	ReadxmlData(inputxml);
}


function ReadxmlData(inputVal)
{

	var parseXml;
	try
	{
	        var xmlDoc = new window.DOMParser().parseFromString(inputVal, "text/xml");
	         alert(xmlDoc);
		var result = myLoop(xmlDoc.documentElement);
		document.getElementById('me').innerHTML = result;
	 }
	 catch(e)
	 {
	 	alert('error' + e);
	 }   
}

function myLoop(x) {
  var i, y, xLen, txt;
  txt = "";
  x = x.childNodes;
  xLen = x.length;
  for (i = 0; i < xLen ;i++) {
    y = x[i];
    if (y.nodeType != 3) {
      if (y.childNodes[0] != undefined) {
        txt += myLoop(y);
      }
    } else {
    txt += y.nodeValue + "<br>";
    }
  }
  return txt;
}