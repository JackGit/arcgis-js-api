// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/stdGeographies/StdGeographiesUtil",["esri/dijit/geoenrichment/ReportPlayer/countryConfig"],function(g){var d={US_STATES_IDS:{"01":"AL","02":"AK","03":"AS","04":"AZ","05":"AR","06":"CA","08":"CO","09":"CT",10:"DE",11:"DC",12:"FL",13:"GA",14:"GU",15:"HI",16:"ID",17:"IL",18:"IN",19:"IA",20:"KS",21:"KY",22:"LA",23:"ME",24:"MD",25:"MA",26:"MI",27:"MN",28:"MS",29:"MO",30:"MT",31:"NE",32:"NV",33:"NH",34:"NJ",35:"NM",36:"NY",37:"NC",
38:"ND",39:"OH",40:"OK",41:"OR",42:"PA",43:"PR",44:"RI",45:"SC",46:"SD",47:"TN",48:"TX",49:"UT",50:"VT",51:"VA",53:"WA",54:"WV",55:"WI",56:"WY"},CA_PROVINCE_IDS:{10:"NL",59:"BC",60:"YT",61:"NT",62:"NU",11:"PE",12:"NS",13:"NB",24:"QC",35:"ON",46:"MB",47:"SK",48:"AB"},BUILDER_DATA:{US_census:{"US.CD":"%name%, %state%","US.CSD":"%name%, %state%","US.Counties":"%name%, %state%","US.Places":"%city%, %state%","US.ZIP5":"%id% (%name%)"},CA_census:{"CAN.FSA":"%id% (%name%)","CAN.CD":"%name%, %province%"}},
getAreaName:function(a){var b=g.getCountryID(),e=g.getHierarchyID();if(!b||!e)return a.StdGeographyName;var b=b+"_"+e,c=d.BUILDER_DATA[b];c||(e=g.getGeographiesModel(),c=d.BUILDER_DATA[b]={},e.getLevels(!0).forEach(function(a){c[a.id.toUpperCase()]="%id% (%name%)"}));return d.buildDescription(a.StdGeographyID,a.StdGeographyName,a.StdGeographyLevel,c)},buildDescription:function(a,b,e,c){c=c&&c[e.toUpperCase()];b=b||a;return"%id% (%name%)"===c&&0<=b.indexOf(a)?b:c?c.replace(/%(\w+)%/g,function(c,f){return d._buildDescriptionPart(c,
f,a,b,e)}):b},_buildDescriptionPart:function(a,b,e,c,h){try{h.substr(0,h.indexOf(".")).toLowerCase();var f=d["_build_"+b];return f&&f(e,c)}catch(k){}return a},_build_id:function(a,b){return a},_build_name:function(a,b){return b},_build_city:function(a,b){return b.replace(/(\s|^)(\w)/g,function(a,b,d){return b+d.toUpperCase()})},_build_state:function(a,b){return(a=a&&2<=a.length?d.US_STATES_IDS[a.substr(0,2)]:null)?a:"??"},_build_province:function(a,b){return(a=a&&2<=a.length?d.CA_PROVINCE_IDS[a.substr(0,
2)]:null)?a:"??"}};return d});