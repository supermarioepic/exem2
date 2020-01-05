'use strict';

function initMap() {
	let map, coords, styles, marker, info, content;

	coords = {
		lat: 50.451736,
		lng: 30.526677
	};


	content = '<h1 class="info-title"> I\'m here</h1>';

	styles = [
		{
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#1d4c4d"
				}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#8ac3b9"
				}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#1a3346"
				}
			]
		},
		{
			"featureType": "administrative.country",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#4b6878"
				}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#64779e"
				}
			]
		},
		{
			"featureType": "administrative.province",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#4b6878"
				}
			]
		},
		{
			"featureType": "landscape.man_made",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#334e87"
				}
			]
		},
		{
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#023e58"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#283d6a"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#6f9ba5"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#1d2c4d"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#023e58"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#3C7680"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#304a7d"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#98a5be"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#1d2c4d"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#2c6675"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#255763"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#b0d5ce"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#023e58"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#98a5be"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#1d2c4d"
				}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#283d6a"
				}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#3a4762"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#0e1626"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#4e6d70"
				}
			]
		}
	]

	map = new google.maps.Map(document.getElementById('map'), {
		center: coords,
		zoom: 15,
		styles: styles,
		disableDefaultUI: true,
		zoomControl: true,
		streetViewControle: true
	});

	marker = new google.maps.Marker({
		position: coords,
		map: map,
		icon: 'images/111.png',
		draggable: true
	});

	info = new google.maps.InfoWindow({
		content: content
	});

	marker.addListener('click', function () {
		info.open(map, marker);
	});

}


(function ($) {
	$(document).ready(function() {
        // Code
        
        let sections = {
            header: $("#header").offset().top,
            what: $("#what").offset().top,
            latest: $("#latest").offset().top,
            gallery: $("#gallery").offset().top,
            map: $("#map").offset().top
        }

        $(window).scroll(function () {
            let scrTop = $(document).scrollTop() + ($(window).height() / 3),
                position;
            
            if (scrTop < sections.what) {
                position = "header";
            } else if (scrTop >= sections.what && scrTop < sections.latest) {
                position = "what"
            } else if (scrTop >= sections.latest && scrTop < sections.gallery) {
                position = "latest"
            } else if (scrTop >= sections.gallery && scrTop < sections.map) {
                position = "gallery"
            } else if (scrTop >= sections.map) {
                position = "map"
            }

            $(".fixed-nav").find(".active").removeClass("active");
            $(".fixed-nav").find(`[data-menu="${position}"]`).addClass("active");

			// console.log($(document).scrollTop());
        });
	});

	$('.slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3
	});

	$('.photo').fancybox({
		buttons: [
			// "zoom",
			//"share",
			// "slideShow",
			"fullScreen",
			"download",
			"thumbs",
			"close"
		],

		animationEffect: "zoom-in-out",
		animationDuration: 1000,
		transitionEffect: "circular",
		transitionDuration: 800,
		loop: true

	});
})(jQuery);




