import Tags from "./tags";

function GTM() {
  const _this = this;
  _this.tags = null;
  _this.layer = null;

  _this.setLayer = layer => {
    _this.layer = window[layer];
    return _this;
  };

  _this.setTags = (configs = {}) => {
    _this.tags = Tags.init(configs);
    return _this;
  };

  _this.appendHeadTags = () => {
    document.head.insertBefore(
      _this.tags.script(),
      document.head.childNodes[0]
    );
    document.head.appendChild(_this.tags.layer());
    return _this;
  };

  return {
    initialize(id, layer = "dataLayer") {
      return _this
        .setTags({ id, layer })
        .appendHeadTags()
        .setLayer(layer);
    },

    ecommerce(ecommerce = {}) {
      if (_this.layer) {
        _this.layer.push({
          ecommerce
        });
      }
      return _this;
    },

    event(event, ecommerce = {}) {
      if (_this.layer) {
        _this.layer.push({
          event,
          ecommerce
        });
      }
      return _this;
    },

    layer() {
      return _this.layer;
    }
  };
}

export default new GTM();
