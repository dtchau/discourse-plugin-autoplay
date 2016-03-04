# **Autoplay Plugin for Discourse**

A plugin that auto-play media in the first post of a topic in Discourse.


## Specification

- Once a topic is loaded, the plugin will observe any changes made to the `document` object for the `#post_1` element.
- As soon as that element is found, the plugin will stop observing `document`.
- Within the `#post_1` node, the plugin will play the first media it finds using [the supported media list](#supported-media) (prioritizing in the order listed).

## Supported Media <a id="supported-media"></a>

- Youtube link.
- Audio tag.
- ... *Feel free to suggest your desired options*

## Contribution

- **Report Issues** - Please file any issues that you might consider.
- **Suggest Features** - Feel free to suggest your ideas.
-  **Submit PRs** - PRs for fixes and features are welcome. [Purely-refactoring PRs won't be accepted](https://meta.discourse.org/t/where-does-discourse-stand-on-minor-refactoring-prs/6677), however.
