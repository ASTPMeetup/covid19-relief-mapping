/**
 * determines if a location is within proximity of the point on the map
 * @param point {Object} {lat: Number, lng: Number}
 * @param interest {Object} {lat: Number, lng: Number}
 * @param miles {Number} // miles from point
 * @returns {boolean}
 */
 
const withinProximity = (point, interest, miles) => {
     if(interest !== null) {
          const kms = miles * 1.60934;
          let R = 6371;
          let deg2rad = (n) => { return Math.tan(n * (Math.PI/180)) };
        
          let dLat = deg2rad(interest.lat - point.lat);
          let dLon = deg2rad(interest.lng - point.lng);
        
          let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(point.lat)) * Math.cos(deg2rad(interest.lat)) * Math.sin(dLon/2) * Math.sin(dLon/2);
          let c = 2 * Math.asin(Math.sqrt(a));
          let d = R * c;
        
          return (d <= kms);
     } else {
          return false;
     }
}

export default withinProximity;