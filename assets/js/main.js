var Main = (function() {
  'use strict';

  var method = {};
  var el = {};
  var url = {
    github:  "https://api.github.com/users/ilhamsabir"
  };

  // init all method
  method.init = function (){
    method.requestGithub();
    method.selector();
  };

  method.selector = function () {
    el.profilePicture      = $('.profile-pic');
    el.profileName         = $('.profile-info .title');
    el.profileLocation     = $('.profile-info .subtitle');
    el.repoCount           = $('#repo-count');
    el.followerCount       = $('#follower-count');
    el.followingCount      = $('#following-count');
    el.bioInfo             = $('#bio-info');
  };

  // request github data
  method.requestGithub = function() {
    $.ajax({
      url: url.github,
      type: "GET",
      success: method.succesRequestGit
    });
  };

  // on success request
  method.succesRequestGit = function(response) {

    method.profileInfoDOM(response);

    method.githubInfoDOM(response);

  };

  method.profileInfoDOM = function (response) {
    var imgPic = '<img src="'+response.avatar_url+'" alt="ilham pic" class="img-responsive img-circle">';
    el.profilePicture.html(imgPic);
    el.profileName.html(response.name);
    el.profileLocation.html('<i class="fa fa-map-marker" aria-hidden="true"></i>'+' '+response.location);
    el.bioInfo.html(response.bio);
  };

  method.githubInfoDOM = function (response) {

    el.repoCount.html(response.public_repos);
    el.followerCount.html(response.followers);
    el.followingCount.html(response.following);
  };

  return method;
})();

// set document ready
jQuery(document).ready(function($) {
  Main.init();
});
