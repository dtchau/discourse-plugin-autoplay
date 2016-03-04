import RouteTopic from 'discourse/routes/topic';

function playMedia() {
  let observer = new MutationObserver(function () {
    let firstPost = $('#post_1');
    if (firstPost.length > 0) {
      observer.disconnect();

      let videos = firstPost.find('.ytp-large-play-button');
      if (videos.length > 0) {
        videos.first().trigger('click');
      } else {
        let audios = firstPost.find('audio');
        if (audios.length > 0) {
          audios[0].play();
        }
      }
    }
  });

  observer.observe(document, {subtree: true, childList: true, attributes: false});
}

export default {
  name: 'autoplay-media',
  initialize() {
    if (Discourse.SiteSettings.autoplay_enabled) {
      RouteTopic.on('setupTopicController', playMedia);
    }
  }
}
