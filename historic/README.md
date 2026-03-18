## Changes to make upon new export:

### qgis2web.js

In functions onPointerMove(evt) and onSingleClickFeatures(evt) :  

Replace every occurance of this:  
```
popupText += '<li><table>'
popupText += '<a>' + '<b>' + layer.get('popuplayertitle') + '</b>' + '</a>';  
popupText += createPopupField(currentFeature, currentFeatureKeys, layer);  
popupText += '</table></li>';    
```

with this:   
```
popupText += '<li id="narrative"><table>'  
popupText += createNarrativePopup(currentFeature, currentFeatureKeys, layer);  
popupText += '</table></li>';    
```

### index.html
Right before `<title>`, add:
```
<style>
    #map { height: calc(100vh - 175px); }  /* Adjust map size so header and footer fit in view window*/   
</style>
'''
Right after `<body>`, paste:  
```
<div id="header" style="background-color: #2c3e50; color: white; padding: 10px; text-align: center; font-family: Arial, sans-serif;">  
        <h1 style="margin: 5px 0;">The Historic Districts of Saint Joseph, Missouri</h1>  
		<p style="margin: 0; font-size: 14px;">© 2026 Walter Eis</p>
</div>
```

Right before `</body>`, paste:  
```
<script>  
  // Run enhancement when popup opens (delay to let OL render)  
  map.on('singleclick', function() {  
      addMoreToggle();  
  });  
</script>  
<div id="footer" style="background-color: #f8f9fa; padding: 10px; text-align: center; font-size: 12px; border-top: 1px solid #ddd; margin-top: 20px;">  
    <p>Data from public sources</p>  
    <p>Created with QGIS & OpenLayers | Questions? Contact joetownmaps@gmail.com</p>  
</div>    
```
 
 In the `<body>` section, paste as the second `<script>` include:  
 `
     <script src="/webmaps/narratives.js"></script>  
 `
 
 In the `<head>` section, add:  
 `
    <link rel="stylesheet" href="/webmaps/ol_custom.css">    
 `
 

