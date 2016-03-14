import RouteTopic from 'discourse/routes/topic';
import {withPluginApi} from 'discourse/lib/plugin-api';

function playMedia(api) {
  let user = api.getCurrentUser();
  if (user) {
    if (user.get('trust_level') < Discourse.SiteSettings.autoplay_required_trust_level) {
      return;
    }

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
}

export default {
  name: 'autoplay-media',
  initialize() {
    withPluginApi('0.1', api => {
      if (Discourse.SiteSettings.autoplay_enabled) {
        RouteTopic.on('setupTopicController', playMedia.bind(null, api));
      }
    });
  }
}
