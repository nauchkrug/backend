// Generated by CoffeeScript 1.10.0
(function() {
  var low, stringify;

  stringify = JSON.stringify;

  low = function(str) {
    return str.toLowerCase();
  };


  /**
   * @param {HTMLElement}
   * @return {JSON}
   */

  this.serialize = function(form) {
    var el, i, j, len, len1, obj, opt, ref, ref1;
    obj = {};
    if (form || low(form.nodeName) !== 'form') {
      ref = form.elements;
      for (i = 0, len = ref.length; i < len; i++) {
        el = ref[i];
        switch (low(el.nodeName)) {
          case 'textarea':
            obj[el.name] = el.value;
            break;
          case 'select':
            switch (el.type) {
              case 'select-one':
                obj[el.name] = el.value;
                break;
              case 'select-multiple':
                ref1 = el.options;
                for (j = 0, len1 = ref1.length; j < len1; j++) {
                  opt = ref1[j];
                  obj[el.name] = opt;
                }
            }
            break;
          case 'button':
            switch (el.type) {
              case 'reset':
              case 'submit':
              case 'button':
                obj[el.name] = el.value;
            }
            break;
          case 'input':
            switch (el.type) {
              case 'text':
              case 'hidden':
              case 'password':
              case 'button':
              case 'reset':
              case 'submit':
                obj[el.name] = el.value;
                break;
              case 'checkbox':
              case 'radio':
                obj[el.name] = el.value;
            }
        }
      }
    }
    return stringify(obj);
  };

}).call(this);
