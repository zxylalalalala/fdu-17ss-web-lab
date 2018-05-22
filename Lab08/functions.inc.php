<?php

function generateLink($url,$label,$class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
   include("travel-data.inc.php");
   $img = "<div class='col-md-4'>".generateLink("post.php?id=${"postId".$number}","<img src='images/${"thumb".$number}'>","class")."</div>";
   $h2= "<h2>".${"title".$number}."</h2>";
   $details = "Posted by ".generateLink("post.php?id=${"userId".$number}",${"userName".$number},"");
   $span = "<span class='pull-right'>".${"date".$number}."</span>";
   $ratings = "<p class='ratings'>".constructRating(${"reviewsRating".$number})."&nbsp;".${"reviewsNum".$number}." reviews";
   $excerpt = "<p class='excerpt'>".${"excerpt".$number}."</p>";
   $button = "<p>".generateLink("post.php?id=${"postId".$number}","Read more","btn btn-primary btn-sm")."</p>";
   $row = "<div class='row'>".$img."<div class='col-md-8'>".$h2."<div class='details'>".$details.$span.$ratings."</div>".$excerpt.$button."</div>"."</div>";
    echo $row."<hr>";
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/

function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>