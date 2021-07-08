<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">        
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css">
    
    <link rel="stylesheet" type="text/css" href="engine1/style.css" />
    <script type="text/javascript" src="engine1/jquery.js"></script>
    <title>Novatex Company</title>
</head>

<style type="text/css">
@keyframes mymove {
  from {left: -1000px;}
  to {left: 1500px;}
}

    #myCarousel{
        
 
  margin:  20px auto;
  position: relative;
  border: 10px solid brown;
  box-shadow: 0px 0px 5px 2px #ccc;

    }
    


.slider-img{
width: 100%;
height: 100%;
}
.item{
width:100% !important;
height:77%;
}


</style>


<body>
   <div class="container">
     <h1>Novatex Company</h1>
       <nav>
           <ul>
               <li class="li"> Home <i class="fa fa-angle-down"></i>
                 <ul class="sub-nav"> 
                    <li>link 1</li>
                    <li class="hover-me" >link 2
                    <div class="sub-menu-2">
                        <ul><li>link 3</li>
                            <li>link 4</li>
                            <li>link 5</li>
                        </ul>
                    
                    </div>
                </li>
                    <li class="hover-me">link 3
                        <div class="sub-menu-2">
                            <ul><li>link 3</li>
                                <li>link 4</li>
                                <li>link 5</li>
                            </ul>
                        
                        </div>
                    </li>
                    <li class="hover-me">link 4
                        <div class="sub-menu-2">
                            <ul><li>link 3</li>
                                <li>link 4</li>
                                <li>link 5</li>
                            </ul>
                        
                        </div>
                    </li>
                    <li>link 5</li>
            </ul>
               </a>
             <div class="sub-value-1"></div>
             </li>
               <li class="li"><a href="#">Application</a>
                   <ul class="sub-nav"> 
                       <li>link 1</li>
                       <li>link 2</li>
                       <li>link 3</li>
                       <li>link 4</li>
                       <li>link 5</li>
                   </ul>
               </li>
               <li class="li"><a href="#"> Department
                <ul class="sub-nav"> 
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                </ul>
               </a></li>
               <li class="li"><a href="#">Activities
                <ul class="sub-nav"> 
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                </ul>
               </a></li>
               <li class="li"><a href="#">Services
                <ul class="sub-nav"> 
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                </ul>
               </a></li>
               <li class="li"><a href="#">Products
                <ul class="sub-nav">  
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                </ul>
               </a></li>
               <li class="li"><a href="#">ISO
                <ul class="sub-nav"> 
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                </ul>
               </a></li>
               <li class="li"><a href="#">Library
                <ul class="sub-nav"> 
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                </ul>
               </a></li>
               <li class="li"><a href="#">Utilities 
                <ul class="sub-nav"> 
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                </ul>
               </a></li>
               <li class="li"><a href="#">Contact US
                <ul class="sub-nav"> 
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                </ul>
               </a></li>
           </ul>
       </nav>   
    </div>
    <br>
    <br>
    <br>
    <br>
  
    
    <!-- Start WOWSlider.com BODY section -->
<div id="myCarousel" class="carousel slide" data-ride="carousel" style="width:80%; height:80%; border:10px solid brown;">
 <div class="carousel-inner">
    
                     <?php 
			$i = 0;
                        $images = glob('images\*');
                        foreach($images as $image):
                    ?>
                    <?php if($i == 0):?>
<?php $i++;?>
<div class="item active">
                            <img src="<?=$image?>" class="slider-img"/>

                 </div>
<?php else:?>
<div class="item">
                            <img src="<?=$image?>" class="slider-img"/>

                 </div>
<?php endif;?>
                    <?php endforeach;?>

 
  </div>

 <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
            



       
        <div class="ws_bullets"><div>
            <a href="#" title="pic - Copy - Copy"><span><img src="data1/tooltips/pic__copy__copy.jpg" alt="pic - Copy - Copy"/>1</span></a>
            <a href="#" title="pic4"><span><img src="data1/tooltips/pic4.jpg" alt="pic4"/>2</span></a>
            <a href="#" title="pic6"><span><img src="data1/tooltips/pic6.jpg" alt="pic6"/>3</span></a>
        </div></div><div class="ws_script" style="position:absolute;left:-99%"><a href="http://wowslider.com">wowslider.com</a> by WOWSlider.com v8.7</div>
    <div class="ws_shadow"></div>
</div>	
    <script type="text/javascript" src="engine1/wowslider.js"></script>
    <script type="text/javascript" src="engine1/script.js"></script>
    <!-- End WOWSlider.com BODY section -->
    <div class="containent">
        <h2>About Us</h2>
        <p>Novatex Limited was incorporated in 1991 & it started manufacturing Polyester Chips – Textile Grade by the year 1997. The year 2002 witnessed a major expansion in the company when it diversified itself as manufacturer of Pet Resin – Bottle Grade Chips. In 2007, two new plants were installed i.e. for production of Polyester Chips Amorphous Grade and another facility to produce Pet Resin – Bottle Grade Chips. Same year the company also started producing Pet Preforms of various grammage from self-produced Pet Resin. In 2012, another milestone was achieved, when Novatex Limited commenced production of BOPET films under the brand name of Krystofilms, which is the biggest plant of Pet films in Pakistan.</p>
    </div>
<div class="container">
    <div class="gallery">
        <img src="images1/pic14.jpg" style="height: 280px;">
        <div class="desc">Plant</div>
    </div>
    <div class="gallery">
        <img src="images1/pic15.jpg" style="background-size: cover; height: 280px;">
        <div class="desc">Novatex</div>
    </div>
    <div class="gallery">
        <img src="images1/pic16.jpg" style="height: 280px;">
        <div class="desc">Gatronova</div>
    </div>
    <div class="gallery">
        <img src="images1/pic17.jpg" style="height: 280px;">
        <div class="desc">chemicals</div>
    </div>    
    <div class="gallery">
        <img src="images1/pic18.jpg" style="height: 280px;">
        <div class="desc">Service Plants </div>
    </div>
    <div class="gallery">
        <img src="images1/pic19.jpg" style="height: 280px;">
        <div class="desc">Dana Of Bottles</div>
    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>
</html>