# name: autoplay
# about: Auto-play media for Discourse topic.
# version: 0.2
# authors: Duong Tam Chau <dtc@iuservice.com>
#          Rafael dos Santos Silva <xfalcox@gmail.com>

enabled_site_setting :autoplay_enabled

DiscoursePluginRegistry.serialized_current_user_fields << "autoplay_first_media"

after_initialize do

  User.register_custom_field_type('autoplay_first_media', :boolean)

  if SiteSetting.autoplay_enabled then
    # I guess this should be the default @ discourse. PR maybe?
    add_to_serializer(:user, :custom_fields, false) {
      if object.custom_fields == nil then
        {}
      else
        object.custom_fields
      end
    }
  end
end
