'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const START_INPUT = document.getElementById('start');
    const END_INPUT = document.getElementById('end');
    const OUTPUT = document.getElementById('output');
    const PRICE_INFO = document.getElementById('priceInfo');
    const LOADER = document.getElementById('loader');

    let autocompleteStart, autocompleteEnd;

    function initAutocomplete() {
        const options = {
            types: ['address'],
            componentRestrictions: { country: 'nl' }
        };

        autocompleteStart = new google.maps.places.Autocomplete(START_INPUT, options);
        autocompleteEnd = new google.maps.places.Autocomplete(END_INPUT, options);
    }

    window.calculateRoute = function() {
        const start = autocompleteStart.getPlace();
        const end = autocompleteEnd.getPlace();

        if (!start || !start.geometry || !end || !end.geometry) {
            alert("Vul alstublieft beide locaties volledig in.");
            return;
        }

        LOADER.style.display = 'block';
        OUTPUT.innerHTML = '';
        PRICE_INFO.innerHTML = '';

        const directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: start.geometry.location,
            destination: end.geometry.location,
            travelMode: 'DRIVING'
        }, (response, status) => {
            LOADER.style.display = 'none';
            if (status === 'OK') {
                const distanceInKm = response.routes[0].legs[0].distance.value / 1000;
                const durationInHours = Math.ceil(response.routes[0].legs[0].duration.value / 3600);
                const basePrice = (durationInHours * 34 * 2) * 1.75 + (distanceInKm * 2 * 0.4);
                const totalPrice = Math.max(basePrice, 84.7);
                const lowerBound = Math.floor(totalPrice - 10);
                const upperBound = Math.ceil(totalPrice + 10);

                OUTPUT.innerHTML = `De prijs voor deze rit varieert tussen €${lowerBound.toFixed(2)} en €${upperBound.toFixed(2)} inclusief 21% BTW.`;
                PRICE_INFO.innerHTML = 'Deze prijs is gebaseerd op een BOB-chauffeur die u samen met zijn collega BOB in uw eigen auto van de opgegeven ophaallocatie naar de bestemming rijdt.<br>Heeft u liever een heen en terug rit met één chauffeur? Vaak kunnen wij dit voor hetzelfde tarief aanbieden omdat er dan maar 1 chauffeur nodig is. Neemt u voor onze actuele beschikbaarheid alstublieft contact met ons op.';
                goToStep(2);
            } else {
                OUTPUT.innerHTML = 'Kan de prijs niet berekenen. Probeer het later opnieuw.';
            }
        });
    }

    window.showBookingForm = function() {
        goToStep(3);
    }

    window.goToStep = function(step) {
        document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
        document.getElementById(`step${step}`).style.display = 'block';
    }

    // Initialize Google Maps Autocomplete
    if (window.google && google.maps) {
        initAutocomplete();
    } else {
        console.error('Google Maps API not loaded');
    }
});