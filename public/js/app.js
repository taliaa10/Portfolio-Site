let tlFirstScroll = new TimelineMax();

tlFirstScroll
  .set('.featured__img-container1', {
    scale: 1.67,
    transformOrigin: 'center top'
  })
  .to('.featured__img-container1', 3, { scale: 1.34, y: '-40%' })
  .to('.featured__img-container1', 3, { scale: 1, y: '0%' });

let controller = new ScrollMagic.Controller();

let scene1 = new ScrollMagic.Scene({
  triggerElement: '.trigger1',
  duration: '70%'
})
  .setTween(tlFirstScroll)
  .addIndicators()
  .addTo(controller);

let tlSecondScroll = new TimelineMax();

tlSecondScroll
  .set('featured__img-container2', {
    scale: 1.67,
    transformOrigin: 'center top'
  })
  .to('.featured__img-container2', 3, { scale: 1.34, y: '-40%' })
  .to('.featured__img-container2', 3, { scale: 1, y: '0%' });

let scene2 = new ScrollMagic.Scene({
  triggerElement: '.trigger2',
  duration: '70%'
})
  .setTween(tlSecondScroll)
  .addIndicators()
  .addTo(controller);
