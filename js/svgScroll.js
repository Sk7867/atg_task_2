$(document).ready(function () {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: { duration: '100%' },
  });

  var scroll1 = new ScrollMagic.Scene({
    triggerElement: '#section_2',
  })
    .setClassToggle('.Dots', 'shift_1')
    .addIndicators({
      name: 'shift1',
      colorStart: '#000',
    })
    .addTo(controller);

  var scroll2 = new ScrollMagic.Scene({
    triggerElement: '#section_3',
  })
    .setClassToggle('.Dots', 'shift_2')
    .addIndicators({
      name: 'shift2',
      colorStart: '#000',
    })
    .addTo(controller);

  var scroll3 = new ScrollMagic.Scene({
    triggerElement: '#section_4',
  })
    .setClassToggle('.Dots', 'shift_3')
    .addIndicators({
      name: 'shift3',
      colorStart: '#000',
    })
    .addTo(controller);

  var scroll4 = new ScrollMagic.Scene({
    triggerElement: '#section_5',
  })
    .setClassToggle('.Dots', 'shift_4')
    .addIndicators({
      name: 'shift4',
      colorStart: '#000',
    })
    .addTo(controller);

  var scroll5 = new ScrollMagic.Scene({
    triggerElement: '#section_6',
  })
    .setClassToggle('.Dots', 'shift_5')
    .addIndicators({
      name: 'shift5',
      colorStart: '#000',
    })
    .addTo(controller);

  var scroll6 = new ScrollMagic.Scene({
    triggerElement: '#section_7',
  })
    .setClassToggle('.Dots', 'shift_6')
    .addIndicators({
      name: 'shift6',
      colorStart: '#000',
    })
    .addTo(controller);
});
