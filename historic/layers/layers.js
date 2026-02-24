var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Roads_1 = new ol.format.GeoJSON();
var features_Roads_1 = format_Roads_1.readFeatures(json_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1.addFeatures(features_Roads_1);
var lyr_Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_1, 
                style: style_Roads_1,
                popuplayertitle: 'Roads',
                interactive: false,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_1_0.png" /> Interstate<br />\
    <img src="styles/legend/Roads_1_1.png" /> US Highway<br />\
    <img src="styles/legend/Roads_1_2.png" /> Business Loop<br />' });
var format_SaintJosephBoundary_2 = new ol.format.GeoJSON();
var features_SaintJosephBoundary_2 = format_SaintJosephBoundary_2.readFeatures(json_SaintJosephBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaintJosephBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaintJosephBoundary_2.addFeatures(features_SaintJosephBoundary_2);
var lyr_SaintJosephBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaintJosephBoundary_2, 
                style: style_SaintJosephBoundary_2,
                popuplayertitle: 'Saint Joseph Boundary',
                interactive: false,
                title: '<img src="styles/legend/SaintJosephBoundary_2.png" /> Saint Joseph Boundary'
            });
var format_StJosephHistoricDistricts_3 = new ol.format.GeoJSON();
var features_StJosephHistoricDistricts_3 = format_StJosephHistoricDistricts_3.readFeatures(json_StJosephHistoricDistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StJosephHistoricDistricts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StJosephHistoricDistricts_3.addFeatures(features_StJosephHistoricDistricts_3);
var lyr_StJosephHistoricDistricts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StJosephHistoricDistricts_3, 
                style: style_StJosephHistoricDistricts_3,
                popuplayertitle: 'St Joseph Historic Districts',
                interactive: true,
    title: 'St Joseph Historic Districts<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_0.png" /> Cathedral Hill Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_1.png" /> Central/North Commercial Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_2.png" /> Dewey Avenue-West Rosine Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_3.png" /> Hall Street Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_4.png" /> Harris Addition Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_5.png" /> Kemper Addition Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_6.png" /> Krug Park Place Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_7.png" /> Market Square Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_8.png" /> Missouri Valley Trust Company Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_9.png" /> Mount Mora Cemetery<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_10.png" /> Museum Hill Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_11.png" /> Museum Hill Historic District (Boundary Increase)<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_12.png" /> Nelson-Pettis Farmsteads Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_13.png" /> Patee Town Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_14.png" /> Robidoux Hill Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_15.png" /> South Fourth Street Commercial Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_16.png" /> St. Joseph Park and Parkway System<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_17.png" /> St. Joseph\'s Commerce and Banking Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_18.png" /> Walnut Park Farm Historic District<br />\
    <img src="styles/legend/StJosephHistoricDistricts_3_19.png" /> Wholesale Row Historic District<br />' });
var format_MissouriRiver_4 = new ol.format.GeoJSON();
var features_MissouriRiver_4 = format_MissouriRiver_4.readFeatures(json_MissouriRiver_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MissouriRiver_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MissouriRiver_4.addFeatures(features_MissouriRiver_4);
var lyr_MissouriRiver_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MissouriRiver_4, 
                style: style_MissouriRiver_4,
                popuplayertitle: 'Missouri River',
                interactive: false,
                title: '<img src="styles/legend/MissouriRiver_4.png" /> Missouri River'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_Roads_1.setVisible(true);lyr_SaintJosephBoundary_2.setVisible(true);lyr_StJosephHistoricDistricts_3.setVisible(true);lyr_MissouriRiver_4.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_Roads_1,lyr_SaintJosephBoundary_2,lyr_StJosephHistoricDistricts_3,lyr_MissouriRiver_4];
lyr_Roads_1.set('fieldAliases', {'LINEARID': 'LINEARID', 'FULLNAME': 'FULLNAME', 'RTTYP': 'RTTYP', 'MTFCC': 'MTFCC', });
lyr_SaintJosephBoundary_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'folders': 'folders', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'ALAND10': 'ALAND10', 'AMIND00': 'AMIND00', 'AMIND10': 'AMIND10', 'AMIND90': 'AMIND90', 'ASIAN00': 'ASIAN00', 'ASIAN10': 'ASIAN10', 'ASIAN90': 'ASIAN90', 'AWATER10': 'AWATER10', 'BLACK00': 'BLACK00', 'BLACK10': 'BLACK10', 'BLACK90': 'BLACK90', 'CLASSFP10': 'CLASSFP10', 'FUNCSTAT10': 'FUNCSTAT10', 'GEOID10': 'GEOID10', 'HAWNPI00': 'HAWNPI00', 'HAWNPI10': 'HAWNPI10', 'HISP00': 'HISP00', 'HISP10': 'HISP10', 'HISP90': 'HISP90', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'LSAD10': 'LSAD10', 'MTFCC10': 'MTFCC10', 'MULTRA00': 'MULTRA00', 'MULTRA10': 'MULTRA10', 'NAMELSAD10': 'NAMELSAD10', 'OBJECTID': 'OBJECTID', 'OTHER00': 'OTHER00', 'OTHER10': 'OTHER10', 'OTHER90': 'OTHER90', 'PCICBSA10': 'PCICBSA10', 'PCINECTA10': 'PCINECTA10', 'PLACE': 'PLACE', 'PLACENS10': 'PLACENS10', 'POP00': 'POP00', 'POP10': 'POP10', 'POP90': 'POP90', 'SHAPE_Area': 'SHAPE_Area', 'SHAPE_Leng': 'SHAPE_Leng', 'STATEFP10': 'STATEFP10', 'WHITE00': 'WHITE00', 'WHITE10': 'WHITE10', 'WHITE90': 'WHITE90', });
lyr_StJosephHistoricDistricts_3.set('fieldAliases', {'fid': 'fid', 'HST_NAME': 'Historic name', 'OTHR_NAME': 'Alternate name', 'MPS_MRA': 'Multiple Property Submission or Resource Area', 'COMMENT_': 'Additional information', 'PERIOD_SIG': 'Period of significance', 'ARCHITECT': 'Name of architect', 'PADDRESS': 'Physical address', 'PLOCALNAME': 'Name of locality', 'DATE_LIST': 'Date certified by National Parks Service', 'narrative': 'narrative', });
lyr_MissouriRiver_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PRIVBND_': 'PRIVBND_', 'PRIVBND_ID': 'PRIVBND_ID', 'SHAPE.STArea()': 'SHAPE.STArea()', 'SHAPE.STLength()': 'SHAPE.STLength()', });
lyr_Roads_1.set('fieldImages', {'LINEARID': 'TextEdit', 'FULLNAME': 'TextEdit', 'RTTYP': 'TextEdit', 'MTFCC': 'TextEdit', });
lyr_SaintJosephBoundary_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'folders': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'ALAND10': 'TextEdit', 'AMIND00': 'TextEdit', 'AMIND10': 'TextEdit', 'AMIND90': 'TextEdit', 'ASIAN00': 'TextEdit', 'ASIAN10': 'TextEdit', 'ASIAN90': 'TextEdit', 'AWATER10': 'TextEdit', 'BLACK00': 'TextEdit', 'BLACK10': 'TextEdit', 'BLACK90': 'TextEdit', 'CLASSFP10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'GEOID10': 'TextEdit', 'HAWNPI00': 'TextEdit', 'HAWNPI10': 'TextEdit', 'HISP00': 'TextEdit', 'HISP10': 'TextEdit', 'HISP90': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'LSAD10': 'TextEdit', 'MTFCC10': 'TextEdit', 'MULTRA00': 'TextEdit', 'MULTRA10': 'TextEdit', 'NAMELSAD10': 'TextEdit', 'OBJECTID': 'TextEdit', 'OTHER00': 'TextEdit', 'OTHER10': 'TextEdit', 'OTHER90': 'TextEdit', 'PCICBSA10': 'TextEdit', 'PCINECTA10': 'TextEdit', 'PLACE': 'TextEdit', 'PLACENS10': 'TextEdit', 'POP00': 'TextEdit', 'POP10': 'TextEdit', 'POP90': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'STATEFP10': 'TextEdit', 'WHITE00': 'TextEdit', 'WHITE10': 'TextEdit', 'WHITE90': 'TextEdit', });
lyr_StJosephHistoricDistricts_3.set('fieldImages', {'fid': 'TextEdit', 'HST_NAME': 'TextEdit', 'OTHR_NAME': 'TextEdit', 'MPS_MRA': 'TextEdit', 'COMMENT_': 'TextEdit', 'PERIOD_SIG': 'TextEdit', 'ARCHITECT': 'TextEdit', 'PADDRESS': 'TextEdit', 'PLOCALNAME': 'TextEdit', 'DATE_LIST': 'DateTime', 'narrative': '', });
lyr_MissouriRiver_4.set('fieldImages', {'OBJECTID': '', 'PRIVBND_': '', 'PRIVBND_ID': '', 'SHAPE.STArea()': '', 'SHAPE.STLength()': '', });
lyr_Roads_1.set('fieldLabels', {'LINEARID': 'no label', 'FULLNAME': 'no label', 'RTTYP': 'no label', 'MTFCC': 'no label', });
lyr_SaintJosephBoundary_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'folders': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'ALAND10': 'no label', 'AMIND00': 'no label', 'AMIND10': 'no label', 'AMIND90': 'no label', 'ASIAN00': 'no label', 'ASIAN10': 'no label', 'ASIAN90': 'no label', 'AWATER10': 'no label', 'BLACK00': 'no label', 'BLACK10': 'no label', 'BLACK90': 'no label', 'CLASSFP10': 'no label', 'FUNCSTAT10': 'no label', 'GEOID10': 'no label', 'HAWNPI00': 'no label', 'HAWNPI10': 'no label', 'HISP00': 'no label', 'HISP10': 'no label', 'HISP90': 'no label', 'INTPTLAT10': 'no label', 'INTPTLON10': 'no label', 'LSAD10': 'no label', 'MTFCC10': 'no label', 'MULTRA00': 'no label', 'MULTRA10': 'no label', 'NAMELSAD10': 'no label', 'OBJECTID': 'no label', 'OTHER00': 'no label', 'OTHER10': 'no label', 'OTHER90': 'no label', 'PCICBSA10': 'no label', 'PCINECTA10': 'no label', 'PLACE': 'no label', 'PLACENS10': 'no label', 'POP00': 'no label', 'POP10': 'no label', 'POP90': 'no label', 'SHAPE_Area': 'no label', 'SHAPE_Leng': 'no label', 'STATEFP10': 'no label', 'WHITE00': 'no label', 'WHITE10': 'no label', 'WHITE90': 'no label', });
lyr_StJosephHistoricDistricts_3.set('fieldLabels', {'fid': 'hidden field', 'HST_NAME': 'no label', 'OTHR_NAME': 'hidden field', 'MPS_MRA': 'hidden field', 'COMMENT_': 'no label', 'PERIOD_SIG': 'hidden field', 'ARCHITECT': 'hidden field', 'PADDRESS': 'no label', 'PLOCALNAME': 'hidden field', 'DATE_LIST': 'no label', 'narrative': 'no label', });
lyr_MissouriRiver_4.set('fieldLabels', {'OBJECTID': 'no label', 'PRIVBND_': 'no label', 'PRIVBND_ID': 'no label', 'SHAPE.STArea()': 'no label', 'SHAPE.STLength()': 'no label', });
lyr_MissouriRiver_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});