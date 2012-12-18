<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
	"http://www.w3.org/TR/html4/loose.dtd">
<html>

<!-- start header -->
<head>
	<title>Pathway Atlas</title>
	
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<link type='text/css' href='css/atlas.css' rel='stylesheet' media='screen' />
	<link type="text/css" href="css/dojo/dijit/soria/soria.css" rel="stylesheet" />
	
	    <script src="http://ajax.googleapis.com/ajax/libs/dojo/1.6/dojo/dojo.xd.js" djConfig="parseOnLoad: true"></script>

	<script type="text/javascript">
		dojo.require("dijit.layout.ContentPane");
		dojo.require("dijit.layout.BorderContainer");
		dojo.require("dijit.layout.AccordionContainer");
	</script>
		<link rel="shortcut icon" href="images/pin-logo.png" />
	<!-- CSS -->
	<link rel="stylesheet" href="css/index_1.css" type="text/css" />
	<link type='text/css' href='css/basic/basic.css' rel='stylesheet' media='screen' />

	<!-- IE6 "fix" for the close png image -->
	<!--[if lt IE 7]>
	<link type='text/css' href='css/basic/basic_ie.css' rel='stylesheet' media='screen' />
	<![endif]-->
	
	<!-- Java scripts -->
	<script type="text/javascript" src="scripts/jquery-1.4.4.min.js"></script>
	<script type="text/javascript" src="scripts/jquery-ui-1.8.8.custom.min.js"></script>
	<script type="text/javascript" src="scripts/floating.js"></script> <!-- floating menu -->
	<script type="text/javascript" src="scripts/autocomplete.js"></script> <!-- floating menu -->
	<script type="text/javascript" src="scripts/popup-effect.js"></script> <!-- floating menu -->
	<script type='text/javascript' src='scripts/basic/jquery.simplemodal.js'></script>
	<script type='text/javascript' src='scripts/basic/basic.js'></script>	
	<script type="text/javascript">
		function changeMap(fileName)
		{
			var map = document.getElementById("mapShow");
			map.removeAttribute("src");
			map.setAttribute("src", "maps/"+fileName);
		}
		
//		function highlight(this)
//		{
//			alert this;
//		}
	</script>
</head>

<body class="soria">

		<div id ="seperator">
			
	</div>
	<div id="header">
		<div id="logo">
			<img src="images/logo-228x600.png" alt="" title="Human Metabolic Atlas" />
		</div>
	</div>
	
	<!-- Floating menu bar -->
	<div id="floatWrapper"><div id="float" class="blackGrad">
		<div id="menu">
			<div id="menu1">
				<ul>
					<li id="menu1-home"><a href="index.php" title="Human Metabolic Atlas-Home">Home</a></li>
					<li id="menu1-atlas"><a href="atlas.php" title="Human Metabolic Atlas">Atlas</a></li>
					<li id="menu1-download"><a href="downloads.php" title="Human Metabolic Atlas-Downloads">Downloads</a></li>
					<!--<li id="menu1-service"><a href="services.php" title="Human Metabolic Atlas-Services">Services</a></li>-->
					<li id="menu1-contact"><a href="contact.php" title="Human Metabolic Atlas">Contact</a></li>
				</ul>   
			</div><!-- menu 1 --> 
			
		  	<!--<div id="search">
				<input type="text" id="search_txt" /><input type="submit" value="" id="search_submit" /> 
				<a href='#' class='basic'>Advance search</a>
			</div>-->
		</div>
	</div> </div> <!-- end Floating menu bar -->
	<script type="text/javascript" >$("#menu1-atlas").addClass("current")</script>
	
	<div id="content_atlas">
		<div dojoType="dijit.layout.BorderContainer" design="sidebar" gutters="true" liveSplitters="true" id="borderContainer" >
			
			    <div dojoType="dijit.layout.AccordionContainer" style="width: 250px; font-size: 1em;" region="leading">
					<div dojoType="dijit.layout.ContentPane" title="Tissues" style="font-size: 0.8em; padding: auto 0px;" selected="true">
						<table>
							<tr><td class='highlight' onClick="changeMap('iAdrenalCortical1680.kocsv.svg');">Adrenal gland cortical</td></tr>
<tr><td onClick="changeMap('iAppendixLymphoid1505.kocsv.svg');">Appendix glandular</td></tr>
<tr><td onClick="changeMap('iAppendixGlandular1706.kocsv.svg');">Appendix lymphoid tissue</td></tr>
<tr><td onClick="changeMap('iBoneMarrowPoietic1552.kocsv.svg');">Bone marrow poietic</td></tr>
<tr><td onClick="changeMap('iBreastGlandular1532.kocsv.svg');">Breast glandular</td></tr>
<tr><td onClick="changeMap('iBreastCancer1746.kocsv.svg');">Breast Cancer </td></tr>
<tr><td onClick="changeMap('iBronchusEpithelial1754.kocsv.svg');">Bronchus respiratory epithelial</td></tr>
<tr><td onClick="changeMap('iCerebellumMolecular1480.kocsv.svg');">Cerebellum cells in granular layer</td></tr>
<tr><td onClick="changeMap('iCerebellumGranular1300.kocsv.svg');">Cerebellum cells in molecular layer</td></tr>
<tr><td onClick="changeMap('iCerebellumPurkinje1565.kocsv.svg');">Cerebellum purkinje</td></tr>
<tr><td onClick="changeMap('iCerebralNeuronal1548.kocsv.svg');">Cerebral cortex glial</td></tr>
<tr><td onClick="changeMap('iCerebralGlial1452.kocsv.svg');">Cerebral cortex neuronal</td></tr>
<tr><td onClick="changeMap('iCervicalCancer1611.kocsv.svg');">Cervical Cancer </td></tr>
<tr><td onClick="changeMap('iCervixGlandular1518.kocsv.svg');">Cervix uterine-glandular</td></tr>
<tr><td onClick="changeMap('iCervixSquamous1557.kocsv.svg');">Cervix uterine cortex squamous epithelial</td></tr>
<tr><td onClick="changeMap('iColonGlandular1733.kocsv.svg');">Colon glandular</td></tr>
<tr><td onClick="changeMap('iColorectalCancer1750.kocsv.svg');">Colorectal Cancer </td></tr>
<tr><td onClick="changeMap('iCopus1Endometrial1159.kocsv.svg');">Copus, uterine I glandular</td></tr>
<tr><td onClick="changeMap('iCopus1Glandular1698.kocsv.svg');">Copus, uterine II glandular</td></tr>
<tr><td onClick="changeMap('iCopus2Endometrial1283.kocsv.svg');">Corpus uterine I cell in endometrial stroma</td></tr>
<tr><td onClick="changeMap('iCopus2Glandular1715.kocsv.svg');">Corpus uterine II cell in endometrial stroma</td></tr>
<tr><td onClick="changeMap('iDuodenumGlandular1777.kocsv.svg');">Duodenum glandular</td></tr>
<tr><td onClick="changeMap('iEndometrialCancer1713.kocsv.svg');">Endometrial Cancer </td></tr>
<tr><td onClick="changeMap('iEpididymisGlandular1685.kocsv.svg');">Epididymis glandular</td></tr>
<tr><td onClick="changeMap('iEsophagusSquamous1463.kocsv.svg');">Esophagus squamous epithelial</td></tr>
<tr><td onClick="changeMap('iFallopianGlandular1716.kocsv.svg');">Fallopian tube glandular</td></tr>
<tr><td onClick="changeMap('iGallGlandular1860.kocsv.svg');">Gall bladder glandular</td></tr>
<tr><td onClick="changeMap('iHeadNeckCancer1628.kocsv.svg');">HeadNeck Cancer </td></tr>
<tr><td onClick="changeMap('iHeartMyocytes1487.kocsv.svg');">Heart muscle myocytes</td></tr>
<tr><td onClick="changeMap('iHippocampusNeuronal1650.kocsv.svg');">Hippocampus glial</td></tr>
<tr><td onClick="changeMap('iHippocampusGlial1441.kocsv.svg');">Hippocampus neuronal</td></tr>
<tr><td onClick="changeMap('iKidneyTubules1841.kocsv.svg');">Kidney cell in glomeruli</td></tr>
<tr><td onClick="changeMap('iKidneyGlomeruli1276.kocsv.svg');">Kidney cell in tubule</td></tr>
<tr><td onClick="changeMap('iLateralVentricleNeuronal1655.kocsv.svg');">Lateral ventricle glial</td></tr>
<tr><td onClick="changeMap('iLateralVentricleGlial1473.kocsv.svg');">Lateral ventricle neuronal</td></tr>
<tr><td onClick="changeMap('iLiverBileDuct1373.kocsv.svg');">Liver bile duct cell</td></tr>
<tr><td onClick="changeMap('iLiverHepatocytes1705.kocsv.svg');">Liver hepatocytes</td></tr>
<tr><td onClick="changeMap('iLiverCancer1788.kocsv.svg');">Liver Cancer </td></tr>
<tr><td onClick="changeMap('iLungMacrophages1782.kocsv.svg');">Lung alveolar cells</td></tr>
<tr><td onClick="changeMap('iLungAlveolar1435.kocsv.svg');">Lung macrophages</td></tr>
<tr><td onClick="changeMap('iLungCancer1490.kocsv.svg');">Lung Cancer </td></tr>
<tr><td onClick="changeMap('iLymphOutsideCenter1444.kocsv.svg');">Lymph node lymphoid cells outside reactio</td></tr>
<tr><td onClick="changeMap('iLymphCenter1512.kocsv.svg');">Lymph node reaction center</td></tr>
<tr><td onClick="changeMap('iNasopharynxEpithelial1793.kocsv.svg');">Nasopharynx respiratory epithelial</td></tr>
<tr><td onClick="changeMap('iOralSquamous1421.kocsv.svg');">Oral mucosa squamous epithelial</td></tr>
<tr><td onClick="changeMap('iOvarianCancer1620.kocsv.svg');">Ovarian Cancer </td></tr>
<tr><td onClick="changeMap('iOvaryFollicle1467.kocsv.svg');">Ovary follicle cell</td></tr>
<tr><td onClick="changeMap('iOvaryStromal1285.kocsv.svg');">Ovary ovarian stroma</td></tr>
<tr><td onClick="changeMap('iPancreasGlandular1683.kocsv.svg');">Pancreas exocrine glandular</td></tr>
<tr><td onClick="changeMap('iPancreasIslet1650.kocsv.svg');">Pancreas islet</td></tr>
<tr><td onClick="changeMap('iPancreaticCancer1613.kocsv.svg');">Pancreatic Cancer </td></tr>
<tr><td onClick="changeMap('iParathyroidGlandular1708.kocsv.svg');">Parathyroid gland glandular</td></tr>
<tr><td onClick="changeMap('iPlacentaDecidual1665.kocsv.svg');">Placenta decidual</td></tr>
<tr><td onClick="changeMap('iPlacentaTrophoblastic1716.kocsv.svg');">Placenta trophoblastic</td></tr>
<tr><td onClick="changeMap('iProstateGlandular1556.kocsv.svg');">Prostate glandular</td></tr>
<tr><td onClick="changeMap('iProstateCancer1560.kocsv.svg');">Prostate Cancer </td></tr>
<tr><td onClick="changeMap('iRectumGlandular1789.kocsv.svg');">Rectum glandular</td></tr>
<tr><td onClick="changeMap('iRenalCancer1448.kocsv.svg');">Renal Cancer </td></tr>
<tr><td onClick="changeMap('iSalivaryGland1502.kocsv.svg');">Salivary gland glandular</td></tr>
<tr><td onClick="changeMap('iSeminalVesicle1748.kocsv.svg');">Seminal vesicle glandular</td></tr>
<tr><td onClick="changeMap('iSkeletalMyocytes1537.kocsv.svg');">Skelatal muscle myocytes</td></tr>
<tr><td onClick="changeMap('iSkinEpidermal1432.kocsv.svg');">Skin adnexal</td></tr>
<tr><td onClick="changeMap('iSkinAdnexal1754.kocsv.svg');">Skin epidermal</td></tr>
<tr><td onClick="changeMap('iSkinCancer1386.kocsv.svg');">Skin Cancer </td></tr>
<tr><td onClick="changeMap('iSmallIntestineGlandular1666.kocsv.svg');">Small intestine glandular</td></tr>
<tr><td onClick="changeMap('iSmoothMuscle1489.kocsv.svg');">Smooth muscle myocytes</td></tr>
<tr><td onClick="changeMap('iSoftTissue1Mesenchymal1698.kocsv.svg');">Soft tissue I Mesenchymal cells</td></tr>
<tr><td onClick="changeMap('iSoftTissue2Mesenchymal1722.kocsv.svg');">Soft tissue II Mesenchymal cells</td></tr>
<tr><td onClick="changeMap('iSpleenRedPulp1553.kocsv.svg');">Spleen cell in red pulp</td></tr>
<tr><td onClick="changeMap('iSpleenWhitePulp1357.kocsv.svg');">Spleen cell in white pulp</td></tr>
<tr><td onClick="changeMap('iStomachCancer1511.kocsv.svg');">Stomach Cancer </td></tr>
<tr><td onClick="changeMap('iStomach1Glandular1608.kocsv.svg');">Stomach I glandular</td></tr>
<tr><td onClick="changeMap('iStomach2Glandular1815.kocsv.svg');">Stomach II glandular</td></tr>
<tr><td onClick="changeMap('iTestisSeminiferus1572.kocsv.svg');">Testis Leydig</td></tr>
<tr><td onClick="changeMap('iTestisLeydig1766.kocsv.svg');">Testis cell in seminiferous duct</td></tr>
<tr><td onClick="changeMap('iTestisCancer1483.kocsv.svg');">Testis Cancer </td></tr>
<tr><td onClick="changeMap('iThyroidCancer1710.kocsv.svg');">Thyroid Cancer </td></tr>
<tr><td onClick="changeMap('iThyroidGlandular1760.kocsv.svg');">Thyroid gland glandular</td></tr>
<tr><td onClick="changeMap('iTonsilOutsideCenter1496.kocsv.svg');">Tonsil lymphoid cells outside reactio</td></tr>
<tr><td onClick="changeMap('iTonsilCenter1520.kocsv.svg');">Tonsil reaction center</td></tr>
<tr><td onClick="changeMap('iTonsilSquamous1725.kocsv.svg');">Tonsil squamous epithelial</td></tr>
<tr><td onClick="changeMap('iUrinaryBladder1786.kocsv.svg');">Urinary bladder urothelial</td></tr>
<tr><td onClick="changeMap('iUrothelialCancer1532.kocsv.svg');">Urothelial Cancer </td></tr>
<tr><td onClick="changeMap('iVaginaSquamous1270.kocsv.svg');">Vagina squamous epithelial</td></tr>
<tr><td onClick="changeMap('iVulvaSquamous1523.kocsv.svg');">Vulva anal skin squamous epithelial</td></tr>
						</table>
					</div>
					<div dojoType="dijit.layout.ContentPane" title="Analysis">
						
					</div>
					<div dojoType="dijit.layout.ContentPane" title="About">
						
					</div>
				</div>

			<div dojoType="dijit.layout.ContentPane" id="map" class="map" splitter="true" region="center">
					

				<iframe id="mapShow" src="maps/iAdrenalCortical1680.kocsv.svg" width="900" height="600" frameborder="0" scrolling="no"></iframe>
		    <div dojoType="dijit.layout.ContentPane" region="bottom" style="font-size: 0.7em;">
				This pathway viewer is demo version. Copyright (C) 2010-2011 Systems and Synthetic Biology, Chalmers. All Rights Reserved.
			</div>

		</div> <!-- end of borderContainer -->
	</div> <!-- end of content -->

       
</body>

    
    
</html>
