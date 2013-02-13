/** 
 *  SVGMetMap library 1.0
 * ======================
 * 
 * 
 *
 *
 * Given an unique existing G element with id "viewport" 
 * including the the library into any SVG adds the following capabilities:
 *
 *  - Mouse panning, zooming (using the wheel)
 * 
 *
 * Known issues:
 *
 *
 * Releases:
 *
 * 1.0 Natapol Pornputtapong
 *  add interactive functions for metabolic map viewer
 *  Node onclick event to show data of node
 *  Data mapping menu to map scoring data on node
 *
 * 0.1 Natapol Pornputtapong
 *  Transfer code from SVGPan library version 1.2.2
 *  Fix viewport problem
 *  Fix mousewheel event listener for IE 9
 *  Fix SVG document access in Firefox/Chrome
 *  Add zoom limit option
 *
 *
 * This code is licensed under the following Creative commons license:
 *
 * Copyright 2011 Natapol Pornputtapong <natapol@chalmers.se>. All rights reserved.
 * 
 * CC BY-NC-ND (Attribution-NonCommercial-NoDerivs) 
 * <http://creativecommons.org/licenses/by-nc-nd/3.0/legalcode>
 *
 * Additionally, some part of setupHandlers, setCTM2 and whole part of setAttributes, setCTM,
 *  handleMouseWheel, handleMouseUp, handleMouseDown, handleMouseMove, getEventPoint bear
 *  the following BSD license:
 *
 * Copyright 2009-2010 Andrea Leofreddi <a.leofreddi@itcharm.com>. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 * 
 *    1. Redistributions of source code must retain the above copyright notice, this list of
 *       conditions and the following disclaimer.
 * 
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
 *       of conditions and the following disclaimer in the documentation and/or other materials
 *       provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY Andrea Leofreddi ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL Andrea Leofreddi OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * The views and conclusions contained in the software and documentation are those of the
 * authors and should not be interpreted as representing official policies, either expressed
 * or implied, of Andrea Leofreddi.
 */

"use strict";

/**
 * CONFIGURATION
 */

//Function enable setting
var enablePan = 1; ///< 1 or 0: enable or disable panning (default enabled)
var enableZoom = 1; ///< 1 or 0: enable or disable zooming (default enabled)

//Zoom sensitivity setting
var zoomScale = 0.4; ///< Zoom sensitivity (defualt: 0.4)
var minimumZoom = 0.5; ///< Minimum zoom ratio (defualt: 0.5)
var maximumZoom = 3; ///< Maximum zoom ratio (defualt: 3)

//Size of viewbox
var width = 900; ///< Width of viewbox (defualt: 900)
var height = 600; ///< Height of viewbox (defualt: 600)

// Textbox
var textBoxHeight = 100; ///< Height for textbox (defualt: 100)
var textMargin = 20; ///< top and left margin for text in text box (defualt: 20)

// Menu
var menuPos = 30; ///< Position in y-axis of menu box from origin

//Menu setting
/// <====
/// END OF CONFIGURATION 


/// INITIATION
// Element variable
var svgRoot = document.rootElement; //return SVGSVGElement
var state = 'none';
var viewRoot = null;
var docRoot = null;
var text1 = null; 
var text2 = null;
var text3 = null; 
var text4 = null; 
var textMin = null;
var textMax = null;
var link1 = null;
var isOverlay = false;
// Textbox

var previousClick = null; //Store privious clicked object

// Store CTM during Zoom and Pan
var stateTarget;
var stateOrigin;
var stateTf;

// Constants
var svgns = "http://www.w3.org/2000/svg"; ///< SVG namespace URI

setupHandlers();

// Set SVG size and viewbox configuration
svgRoot.setAttribute('viewBox', "0 0 " + width + " " + height);
svgRoot.setAttribute('width', width);
svgRoot.setAttribute('height', height);


/**
 * onload event handler to get access to SVG document
 * and setup for size and style of control elements eg; menu and textbox style
 * control elements are automatically add by mapdrawer script
 */

function svgInit(evt) {
  docRoot = evt.target.ownerDocument;
	viewRoot = evt.target.ownerDocument.getElementById("viewport");
	text1 = evt.target.ownerDocument.getElementById("text1");
	text2 = evt.target.ownerDocument.getElementById("text2");
	text3 = evt.target.ownerDocument.getElementById("text3");
	text4 = evt.target.ownerDocument.getElementById("text4");
	textMin = evt.target.ownerDocument.getElementById("textMin");
	textMax = evt.target.ownerDocument.getElementById("textMax");
	link1 = evt.target.ownerDocument.getElementById("link1");

	viewRoot.setAttribute('transform', "scale(" + minimumZoom + ")"); // scale map to minimumZoom ratio
	
}

/**
 * Register handlers
 */
function setupHandlers(){
	setAttributes(svgRoot, {
		"onmouseup" : "handleMouseUp(evt)",
		"onmousedown" : "handleMouseDown(evt)",
		"onmousemove" : "handleMouseMove(evt)"
	});
	// Add mouse wheel scrolling event and onload event
	if(navigator.userAgent.toLowerCase().indexOf('webkit') >= 0) {
		window.addEventListener('mousewheel', handleMouseWheel, false); // Chrome/Safari
	}else if (navigator.userAgent.toLowerCase().indexOf('gecko') >= 0) {
		window.addEventListener('DOMMouseScroll', handleMouseWheel, false); // Gekko/Mozzila
	}else {
		window.addEventListener('mousewheel', handleMouseWheel, false); // IE9
	}
}

/**
 * Instance an SVGPoint object with given event coordinates.
 */


function getEventPoint(evt) {
	var p = svgRoot.createSVGPoint();

	p.x = evt.clientX;
	p.y = evt.clientY;

	return p;
}

/**
 * Sets the current transform matrix of an element.
 */
function setCTM(element, matrix) {
	var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";

	element.setAttribute("transform", s);
}

/**
 * Sets the current transform matrix of an element. Edit by Natapol
 */
function setCTM2(element, matrix) {
	var newMat = element.getCTM().multiply(matrix);

	if (newMat.a < minimumZoom)
		newMat = element.getCTM();
	else if (newMat.a > maximumZoom)
		newMat = element.getCTM();
	var s = "matrix(" + newMat.a + "," + newMat.b + "," + newMat.c + "," + newMat.d + "," + newMat.e + "," + newMat.f + ")";

	element.setAttribute("transform", s);
}

/**
 * Sets attributes of an element.
 */
function setAttributes(element, attributes){
	for (var i in attributes)
		element.setAttributeNS(null, i, attributes[i]);
}

/**
 * Handle mouse wheel event.
 */
function handleMouseWheel(evt) {
	if(!enableZoom)
		return;

	if(evt.preventDefault)
		evt.preventDefault();

	evt.returnValue = false;

	var delta;

	if(evt.wheelDelta)
		delta = evt.wheelDelta / 360; // Chrome/Safari/IE9
	else
		delta = evt.detail / -9; // Mozilla

	//delta = 0.333333333333 forward + backward -
	
	var z = Math.pow(1 + zoomScale, delta);
	
	var p = getEventPoint(evt);

	p = p.matrixTransform(viewRoot.getCTM().inverse());

	// Compute new scale matrix in current mouse position

	var k = svgRoot.createSVGMatrix().translate(p.x, p.y).scale(z).translate(-p.x, -p.y);

	setCTM2(viewRoot, k);
	if(typeof(stateTf) == "undefined")
		stateTf = viewRoot.getCTM().inverse();

	stateTf = stateTf.multiply(k.inverse());
}

/**
 * Handle mouse move event.
 */
function handleMouseMove(evt) {

	if(evt.preventDefault)
		evt.preventDefault();

	evt.returnValue = false;

	if(state == 'pan' && enablePan) {
		// Pan mode
		var p = getEventPoint(evt).matrixTransform(stateTf);
		setCTM(viewRoot, stateTf.inverse().translate(p.x - stateOrigin.x, p.y - stateOrigin.y));
	}
}

/**
 * Handle click event.
 */
function handleMouseDown(evt) {
	if(evt.preventDefault)
		evt.preventDefault();

	evt.returnValue = false;
	
	state = 'pan';

	stateTf = viewRoot.getCTM().inverse();

	stateOrigin = getEventPoint(evt).matrixTransform(stateTf);

}

/**
 * Handle mouse button release event.
 */
function handleMouseUp(evt) {
	if(evt.preventDefault)
		evt.preventDefault();

	evt.returnValue = false;

	if(state == 'pan') {
		// Quit pan mode
		state = '';
	}
}

/**
 * set the seleted object to show selection graphic
 */
function setColor(color, factor) {
	var adder = factor * 0x111111;
	return "#" + (parseInt(color.substr(1,6),16) + adder).toString(16);
}

/**
 * set the seleted object to show selection graphic
 */
function setSelection(node) {
	for (var k = 0; k < node.getElementsByTagName('path').length; k++) {
		node.getElementsByTagName('path').item(k).setAttribute('style', 'stroke: ' + setColor(node.getElementsByTagName('path').item(k).getAttribute('stroke'), -2) + '; stroke-width: 5; z-index: 1; ');
	}

	for (var k = 0; k < node.getElementsByTagName('ellipse').length; k++) {
		node.getElementsByTagName('ellipse').item(k).setAttribute('style', 'stroke: ' + setColor(node.getElementsByTagName('ellipse').item(k).getAttribute('stroke'), -2) 
				+ '; fill: ' + setColor(node.getElementsByTagName('ellipse').item(k).getAttribute('fill'), -2) + '; z-index: 1; ');
	}
}

/**
 * clear the selected object to show normal graphic
 */
function clearSelection(node) {
	for (var k = 0; k < node.getElementsByTagName('path').length; k++) {
		node.getElementsByTagName('path').item(k).removeAttribute('style');
	}

	for (var k = 0; k < node.getElementsByTagName('ellipse').length; k++) {
		node.getElementsByTagName('ellipse').item(k).removeAttribute('style');
	}
}

/**
 * Handle node onclick event and show details of node
 */
function nodeOnclick(evt) {
	var entryAttr = evt.currentTarget.getElementsByTagName("entry").item(0);
	
	if (isOverlay) {

		if (previousClick == evt.currentTarget) {
			text1.textContent = "";
			text2.textContent = "";
			text3.textContent = "";
			text4.setAttribute("visibility", "hidden");
			previousClick = null;
		}else{
			previousClick = evt.currentTarget;
			if (entryAttr.getAttribute("name") != null) {
				text1.textContent = "Name: " + entryAttr.getAttribute("name");
				if (entryAttr.getAttribute("type") == "compound") {
					text2.textContent = "Formula: " + entryAttr.getAttribute("formula");
					text3.textContent = "MW: " + entryAttr.getAttribute("mw");
				} else {
					text2.textContent = "Definition: " + entryAttr.getAttribute("definition");
					text3.textContent = "";
				}
			} else {
				text1.textContent = "KEGG: " + entryAttr.getAttribute("keggid");
			}
			text4.setAttribute("visibility", "visible");
			link1.setAttribute('xlink:href', entryAttr.getAttribute("link"));
		}	
	} else {
		if (previousClick)
			clearSelection(previousClick);

		if (previousClick == evt.currentTarget) {
			text1.textContent = "";
			text2.textContent = "";
			text3.textContent = "";
			text4.setAttribute("visibility", "hidden");
			previousClick = null;
		}else{
			
			setSelection(evt.currentTarget);
			previousClick = evt.currentTarget;
			
			if (entryAttr.getAttribute("name") != null) {
				text1.textContent = "Name: " + entryAttr.getAttribute("name");
				if (entryAttr.getAttribute("type") == "compound") {
					text2.textContent = "Formula: " + entryAttr.getAttribute("formula");
					text3.textContent = "MW: " + entryAttr.getAttribute("mw");
				} else {
					text3.textContent = ""
					text2.textContent = "Definition: " + entryAttr.getAttribute("definition");
				}
			} else {
				text1.textContent = "Kegg: " + entryAttr.getAttribute("keggid");
			}
			text4.setAttribute("visibility", "visible");
			link1.setAttribute('xlink:href', entryAttr.getAttribute("link"));
		}
	}
}

/**
 * overlay data by reading score from entry tag
 */
function overlay(data,evt) {
	var dataRange = data.split('_')[0]; // get data variable name
	var minRange = data.split('_')[1]; //
	var maxRange = data.split('_')[2]; //
	var maxR = 100;
	var minR = 0;

	var nodeList = viewRoot.getElementsByTagName('g');
	var textMax = evt.currentTarget.ownerDocument.getElementById('textMax');
	var textMin = evt.currentTarget.ownerDocument.getElementById('textMin');

	textMax.textContent = maxRange;
	textMin.textContent = minRange;
	
	for (var i = 0; i < nodeList.length; i++) {
		var datScore = null;
		for (var j = 0; j < nodeList[i].childNodes.length; j++) {
			if (nodeList[i].childNodes[j].nodeName == 'entry') {
				datScore = nodeList[i].childNodes[j].getAttribute(dataRange + '_dat');
			}
		}

		if (datScore != null) {

			var color = "rgb(" + (255 - Math.round(datScore / (maxR - minR) * 255)) + "," + (0 + Math.round(datScore / (maxR - minR) * 255)) + ",0)";

			for (var j = 0; j < nodeList[i].childNodes.length; j++) {
				if (nodeList[i].childNodes[j].nodeName == 'path' ) {
					//nodeList[i].childNodes[j].setAttribute('style', 'stroke: ' + color + '; ');
					nodeList[i].childNodes[j].setAttribute('style', 'stroke: ' + color + '; stroke-width: 6; ');
				} else if (nodeList[i].childNodes[j].nodeName == 'ellipse') {
					nodeList[i].childNodes[j].setAttribute('style', 'fill: ' + color + '; stroke: ' + color + '; ');
				}
			}
		} else {
			var color = "rgb(210,210,210)";

			for (var j = 0; j < nodeList[i].childNodes.length; j++) {
				
				if (nodeList[i].childNodes[j].nodeName == 'path') {
					if (!nodeList[i].childNodes[j].hasAttribute('style')) {
						nodeList[i].childNodes[j].setAttribute('style', 'stroke: ' + color + '; ');
					}
				} else if (nodeList[i].childNodes[j].nodeName == 'ellipse') {
					if (!nodeList[i].childNodes[j].hasAttribute('style')) {
						nodeList[i].childNodes[j].setAttribute('style', 'fill: ' + color + '; stroke: ' + color + '; ');
					}
				}
			}

		}
	}	
}

/**
 * overlay data by reading score from entry tag
 */
function clearOverlay() {

	for (var k = 0; k < viewRoot.getElementsByTagName('path').length; k++) {
		viewRoot.getElementsByTagName('path').item(k).removeAttribute('style');
	}

	for (var k = 0; k < viewRoot.getElementsByTagName('ellipse').length; k++) {
		viewRoot.getElementsByTagName('ellipse').item(k).removeAttribute('style');
	}
}


/**
 * Handle menu event to show the data on map
 */
function cboxClick(evt) {
	var dataType = evt.target.getAttribute('class'); // get data variable name

	if (evt.target.getAttribute('fill') == 'red') {
		evt.target.setAttribute('fill', 'white');
		isOverlay = false;
		clearOverlay();
	} else {
		// clear text color and set clicked option to red
		clearOverlay()
		var listLength = evt.currentTarget.getElementsByTagName("text").length - 1;

		for (var i = 0; i <= listLength; i++) {
			evt.currentTarget.getElementsByTagName("text").item(i).setAttribute('fill', 'white');
		}
		evt.target.setAttribute('fill', 'red');
		overlay(dataType, evt); // overlay data on map
		isOverlay = true;
	}
}

/**
 * Handle expansion property of menu box
 */
function expandClick(evt) {
	if (evt.currentTarget.getAttribute('id') == 'plus') {
		evt.currentTarget.setAttribute('visibility', 'hidden');
		evt.currentTarget.ownerDocument.getElementById("minus").setAttribute('visibility', 'visible');
		evt.currentTarget.ownerDocument.getElementById("menubox").setAttribute('visibility', 'visible');
	} else if (evt.currentTarget.getAttribute('id') == 'minus') {
		evt.currentTarget.setAttribute('visibility', 'hidden');
		evt.currentTarget.ownerDocument.getElementById("plus").setAttribute('visibility', 'visible');
		evt.currentTarget.ownerDocument.getElementById("menubox").setAttribute('visibility', 'hidden');
	}
}
