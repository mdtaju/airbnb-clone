import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({searchResults}) => {
    const [selectedLocation, setSelectedLocation] = useState({})
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }))
    const center = getCenter(coordinates)
    console.log(center)
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })
    return (
        <ReactMapGL
            {...viewport}
            mapStyle='mapbox://styles/mdtaju/ckulf2lef7yzn18k63suyr9jf'
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {
                searchResults.map((result, id) => (
                    <div key={id}>
                        <Marker 
                            longitude={result.long}
                            latitude={result.lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <p 
                                onClick={() => setSelectedLocation(result)}
                                className='cursor-pointer text-2xl animate-bounce'
                                aria-label='push-pin'
                                role='img'
                            >📌</p>
                        </Marker>
                        {selectedLocation.long === result.long ? (
                            <Popup
                                className='z-40'
                                closeOnClick={true}
                                onClose={() => setSelectedLocation({})}
                                latitude={result.lat}
                                longitude={result.long}
                            >{result.title}</Popup>
                        ) : (false)}
                    </div>
                ))
            }
        </ReactMapGL>
    );
};

export default Map;