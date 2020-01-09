/**
 * Equation of a line.
 */
const lineEq = (y2, y1, x2, x1, currentVal) => {
    // y = mx + b 
    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
    return m * currentVal + b;
};

const gridItems = Array.from(document.querySelectorAll('.grid__item'));
// whatever we do, start at [distanceThreshold.max]px from the element and end at [distanceThreshold.min]px from the element.
const distanceThreshold = {min: 0, max: 250};
const blurInterval = {from: 6, to: 0};

gridItems.forEach((item) => {
    const img = item.querySelector('.grid__item-img');

    new Nearby(img, {
        onProgress: (distance) => {
             if( img.classList.contains('grid__item-img--blur') ) {
                const b = lineEq(blurInterval.from, blurInterval.to, distanceThreshold.max, distanceThreshold.min, distance);
                /*TweenMax.to(img, 0.5, {
                    ease: Expo.easeOut,
                    filter: `blur(${Math.min(b,blurInterval.from)}px)`
                });*/
                img.style.filter = `blur(${Math.min(b,blurInterval.from)}px)`;
            }
        }
    });
});

// Preload all the images in the page..
// imagesLoaded(document.querySelectorAll('.grid__item'), {background: true}, () => document.body.classList.remove('loading'));