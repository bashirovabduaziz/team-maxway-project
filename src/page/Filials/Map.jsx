import React, { useEffect, useRef, useContext } from 'react';
import branchesData from '../../../public/branches.json';
import { MapContext } from './MapContext';
import Placemark from '../../assets/placemarkk.png'

const MapComponent = () => {
  const mapRef = useRef(null);
  const { map, setMap } = useContext(MapContext);

  useEffect(() => {
    const initializeMap = () => {
      if (window.ymaps && !map) {
        window.ymaps.ready(() => {
          const newMap = new window.ymaps.Map(mapRef.current, {
            center: [41.299496, 69.240073],
            zoom: 12
          });

          branchesData.forEach(branch => {
            const placemark = new window.ymaps.Placemark(
              [branch.latitude, branch.longitude],
              {
                balloonContent: `
                <div class="placemark">
                  <h1  style="color: green;">${branch.open}</h1><br>
                  <strong>${branch.name}</strong><br>
                  ${branch.address}<br>
                  Ish vaqti: ${branch.hours}<br>
                  Telefon: ${branch.phone}
                  </div>
                `
              },
               {
      iconLayout: 'default#image',
      iconImageHref: Placemark, 
      iconImageSize: [40, 42], 
      iconImageOffset: [-15, -42] 
    }
            );

            newMap.geoObjects.add(placemark);
          });

          setMap(newMap);
        });
        
      }
    };

    if (!window.ymaps) {
      const scriptId = 'yandex-maps-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=db81466a-d9c7-44dd-9078-c65b363da1c8&lang=ru_RU';
        script.onload = () => initializeMap();
        document.body.appendChild(script);
      }
    } else {
      initializeMap();
    }

    return () => {
      if (map) {
        map.destroy();
        setMap(null);
      }
    };
  }, [map, setMap]);

  return <div ref={mapRef} style={{ width: '100%', height: '700px' }} />;
};

export default MapComponent;
