<?php

require 'vendor/autoload.php';

$app = new \Slim\Slim(
  array(
    'templates.path' => 'views',
    'view' => new \Slim\Views\Twig(),
  )
);

$app->get( '/article', function() use ( $app )
{
  $title = "The Points Guy | Article";
  $body_class = "article default-article right-rail footer-reveal fade";
  $app->render( 'article.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/beginners', function() use ( $app )
{
  $title = "The Points Guy | Beginner's Guide";
  $body_class = "beginners footer-reveal fade";
  $app->render( 'beginners.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/guide-default', function() use ( $app )
{
  $title = "The Points Guy | Guide - Default";
  $body_class = "guide-default footer-reveal fade";
  $app->render( 'guide-default.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/video-article', function() use ( $app )
{
  $title = "The Points Guy | Video Article";
  $body_class = "article video-article right-rail footer-reveal fade";
  $app->render( 'video-article.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/article-no-hero', function() use ( $app )
{
  $title = "The Points Guy | Video Article";
  $body_class = "article video-article right-rail footer-reveal fade";
  $app->render( 'video-article.twig', array(
    'title' => $title,
    'body_class' => $body_class,
    'isNoHero' => true
  ));
});

$app->get( '/review-article', function() use ( $app )
{
  $title = "The Points Guy | Review Article";
  $body_class = "article review-article footer-reveal fade";
  $app->render( 'review-article.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/table-of-contents', function() use ( $app )
{
  $title = "The Points Guy | Table of Contents";
  $body_class = "article review-article footer-reveal fade";
  $app->render( 'review-article.twig', array(
    'title' => $title,
    'body_class' => $body_class,
    'isTOC' => true
  ));
});

$app->get( '/deal-article', function() use ( $app )
{
  $title = "The Points Guy | Deal Article";
  $body_class = "article deal-article right-rail footer-reveal fade";
  $app->render( 'deal-article.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/', function() use ( $app )
{
  $sections = array(
    array(
      array( 'label' => 'home', 'url' => 'home' ),
    ),
    array(
      array( 'label' => 'article', 'url' => 'article' ),
      array( 'label' => 'video article', 'url' => 'video-article' ),
      array( 'label' => 'review article', 'url' => 'review-article' ),
      array( 'label' => 'deal article', 'url' => 'deal-article' ),
      array( 'label' => 'table of contents', 'url' => 'table-of-contents' ),
    ),
    array(
      array( 'label' => 'hub', 'url' => 'hub' ),
      array( 'label' => 'hub card', 'url' => 'hub-card' ),
      array( 'label' => 'hub tag', 'url' => 'hub-tag' ),
      array( 'label' => 'hub all cards', 'url' => 'hub-all-cards' ),
    ),
    array(
      array( 'label' => 'about', 'url' => 'about' ),
      array( 'label' => 'beginners', 'url' => 'beginners' ),
      array( 'label' => 'guide default', 'url' => 'guide-default' ),
      array( 'label' => 'user', 'url' => 'user' ),
      array( 'label' => 'elements', 'url' => 'elements' ),
    ),
    array(
      array( 'label' => 'guides', 'url' => 'images/flats/tpg-guides-v02.png' ),
      array( 'label' => 'newsletter', 'url' => 'images/flats/tpg-newsletter-v01.jpg' ),
      array( 'label' => 'reviews', 'url' => 'images/flats/tpg-reviews-v02.png' ),
      array( 'label' => 'video', 'url' => 'images/flats/tpg-video-v02.png' ),
    ),
  );

  $title = "The Points Guy | Home";
  $body_class = "index fade";
  $app->render( 'index.twig', array(
    'title' => $title,
    'body_class' => $body_class,
    'sections' => $sections,
  ));
});

$app->get( '/home', function() use ( $app )
{
  include 'data/cards.php';

  $title = "The Points Guy | Home";
  $body_class = "home footer-reveal fade";
  $app->render( 'home.twig', array(
    'title' => $title,
    'body_class' => $body_class,
    'cards' => $cards,
  ));
});

$app->get( '/hub', function() use ( $app )
{
  $title = "The Points Guy | Hub - Card";
  $body_class = "hub footer-reveal fade";
  $app->render( 'hub.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/hub-card', function() use ( $app )
{
  $title = "The Points Guy | Hub - Card";
  $body_class = "hub footer-reveal fade";
  $app->render( 'hub.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/hub-tag', function() use ( $app )
{
  $title = "The Points Guy | Hub - Tag";
  $body_class = "hub tag-page footer-reveal fade";
  $app->render( 'hub-tag.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/hub-all-cards', function() use ( $app )
{
  $title = "The Points Guy | Hub - All Cards";
  $body_class = "hub hub-all-cards footer-reveal fade";
  $app->render( 'hub-all-cards.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/about', function() use ( $app )
{
  $title = "The Points Guy | About Brian Kelly";
  $body_class = "about footer-reveal fade";
  $app->render( 'about.twig', array(
    'title' => $title,
    'body_class' => $body_class,
    'isAbout' => true
  ));
});

$app->get( '/user', function() use ( $app )
{
  $title = "The Points Guy | User Profile";
  $body_class = "user footer-reveal fade";
  $app->render( 'user.twig', array(
    'title' => $title,
    'body_class' => $body_class,
    'isUser' => true
  ));
});

$app->get( '/elements', function() use ( $app )
{
  $title = "The Points Guy | Elements";
  $body_class = "elements footer-reveal fade";
  $app->render( 'elements.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->get( '/404', function() use ( $app )
{
  $title = "The Points Guy | 404";
  $body_class = "four-oh-four footer-reveal fade";
  $app->render( '404.twig', array(
    'title' => $title,
    'body_class' => $body_class
  ));
});

$app->run();
