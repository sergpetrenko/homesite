var s, app = {
  settings: {
    jpm: {}
  },

  init: function() {
    s = this.settings, this.initalizers(), this.bindUiActions()
  },


  bindUiActions: function() {

    var a = this;
    $(".select-posts,.select-categories").on("click", function() {
      a.homePostsCatSwitch()
    }), $(".social-icon").on("click", function() {
      a.socialIconClick($(this))
    })
  },


  initalizers: function() {
    this.jpm(), FastClick.attach(document.body), $("body").css({"background-color": "#333337"})
  },

  homePostsCatSwitch: function() {
    $(".home-page-posts").toggleClass("hide"), $(".home-page-categories").toggleClass("hide"), $(".select-posts").toggleClass("active"), $(".select-categories").toggleClass("active"), $(".home-footer").toggleClass("hide")
  },

  socialIconClick: function(a) {
    var b = a.data("platform"), c = a.data("message"), d = a.data("url");
    return "mail" == b ? !0 : (this.popItUp(b, c, d), !1)
  },

  popItUp: function(a, b, c) {
    var d, e;
    return "twitter" == a ? d = "http://twitter.com/home?status=" + encodeURI(b) + "+" + c : "facebook" == a && (d = "http://www.facebook.com/share.php?u" + c + "&amp;title=" + encodeURI(b)), e = window.open(d, "name", "height=500,width=600"), window.focus && e.focus(), !1
  },

  jpm: function() {
    s.jpm = $.jPanelMenu({
      menu: "#menu-target", trigger: ".menu-trigger", animated: !1, beforeOpen: function() {
        matchMedia("only screen and (min-width: 992px)").matches && $(".sidebar").css("left", "250px")
      }, beforeClose: function() {
        $(".sidebar").css("left", "0"), $(".writer-icon, .side-writer-icon").removeClass("fadeOutUp")
      }
    }), s.jpm.on()
  }
};


$(document).ready(function() {
  app.init();
});