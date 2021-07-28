$(document).ready(function () {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: { duration: '100%' },
  });

  var scroll1 = new ScrollMagic.Scene({
    triggerElement: '#section_2',
    triggerHook: 0.8,
  })
    .setClassToggle('.Dots', 'shift_1')
    // .addIndicators({
    //   name: 'shift1',
    //   colorStart: '#000',
    // })
    .addTo(controller);

  var scroll2 = new ScrollMagic.Scene({
    triggerElement: '#section_3',
    triggerHook: 0.8,
    // duration: 1,
  })
    .setClassToggle('.Dots', 'shift_2')
    // .addIndicators({
    //   name: 'shift2',
    //   colorStart: '#000',
    // })
    .addTo(controller);

  var scroll3 = new ScrollMagic.Scene({
    triggerElement: '#section_4',
    triggerHook: 0.8,
    // duration: 1,
  })
    .setClassToggle('.Dots', 'shift_3')
    // .addIndicators({
    //   name: 'shift3',
    //   colorStart: '#000',
    // })
    .addTo(controller);

  var scroll4 = new ScrollMagic.Scene({
    triggerElement: '#section_5',
    triggerHook: 0.8,
    // duration: 1,
  })
    .setClassToggle('.Dots', 'shift_4')
    // .addIndicators({
    //   name: 'shift4',
    //   colorStart: '#000',
    // })
    .addTo(controller);

  var scroll5 = new ScrollMagic.Scene({
    triggerElement: '#section_6',
    triggerHook: 0.8,
    // duration: 1,
  })
    .setClassToggle('.Dots', 'shift_5')
    // .addIndicators({
    //   name: 'shift5',
    //   colorStart: '#000',
    // })
    .addTo(controller);

  var scroll6 = new ScrollMagic.Scene({
    triggerElement: '#section_7',
    triggerHook: 0.8,
    // duration: 1,
  })
    .setClassToggle('.Dots', 'shift_6')
    // .addIndicators({
    //   name: 'shift6',
    //   colorStart: '#000',
    // })
    .addTo(controller);
});
