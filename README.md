# Odell

HTML templtate, landing page, HTML to WordPress, mobile first

HTML version hosted: <a href="http://pl.vn.ua/odell/">pl.vn.ua/odell</a>

WordPress version hosted: <a href="http://odell.pl.vn.ua/">odell.pl.vn.ua</a>

WordPress template is archive: <strong>wp-odell.zip</strong>

## WP Odell installation theme guide to WordPress

### Steps:

<ul>
  <li>Install plugins (<strong>Plugins</strong> > <strong>Add New</strong>, search name plugins. Then install and activate.):
        <ul>
            <li><a href="https://wordpress.org/plugins/advanced-custom-fields/">Advanced Custom Fields</a></li>
            <li><a href="https://wordpress.org/plugins/contact-form-7/">Contact Form 7</a></li>
        </ul>
  </li>
  <li>Download the demo data in site: <strong>Import</strong> > <strong>WordPress</strong> > select the <strong>demo_data.xml</strong> file. The demo data is located in the theme directory called demo_data.xml</li>
  <li>Enjoy!</li>
</ul>

## HTML theme data

### Address and pryvacy:

```
<p>101 W Renner Rd, Suite 440, Richardson, TX 75082</p>
<p class="widget__privacy">
<a href="#">Privacy Policy</a> / <a href="#">Terms of Use</a>
</p>
```

### Footer Widget 1:

```
<ul>
    <li><a href="#">Employers</a></li>
    <li><a href="#">Job Seekers</a></li>
    <li><a href="#">Job Alerts</a></li>
</ul>
```

### Footer Widget 2:

```
<h3>Services</h3>
<ul>
    <li><a href="#">Contingency Search</a></li>
    <li><a href="#">Interim Leadership \ Contract</a></li>
    <li><a href="#">Locum Tenens</a></li>
    <li><a href="#">Retained Search</a></li>
</ul>
```

### Footer Widget 3:

```
<h3>Our Specialties</h3>
<ul>
<li><a href="#">Landing Pages (18)</a></li>
</ul>
```

### Footer Widget 4:

```
<ul>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Testimonials</a></li>
    <li><a href="#">Contact Us</a></li>
</ul>
```

### Footer Widget 5:

```
<ul>
    <li><a href="#">Resource Library</a></li>
    <li><a href="#">Blog</a></li>
</ul>
```

### Socials Widget:

```
<h4>Follow us</h4>
<div class="social">
    <div class="social__item social__item--fb">
        <a href="#"><img src="/wp-content/themes/wp-odell/assets/img/icon/social_fb.svg" alt="" /> </a>
    </div>
    <div class="social__item social__item--in">
        <a href="#"><img src="/wp-content/themes/wp-odell/assets/img/icon/social_in.svg" alt="" /> </a>
    </div>
    <div class="social__item social__item--twi">
        <a href="#"><img src="/wp-content/themes/wp-odell/assets/img/icon/social_twi.svg" alt="" /> </a>
    </div>
    <div class="social__item social__item--gmail">
        <a href="#"><img src="/wp-content/themes/wp-odell/assets/img/icon/social_gmail.svg" alt="" /> </a>
    </div>
    <div class="social__item social__item--youtu">
        <a href="#"><img src="/wp-content/themes/wp-odell/assets/img/icon/social_youtu.svg" alt="" /> </a>
    </div>
</div>
```

### Contact Form 7:

```
<div class="post__input-group">
[text* first-name placeholder "First Name *"]
[text* last-name placeholder "Last Name *"]
[email* email-address placeholder "Email Address *"]
[tel* phone-number placeholder "Phone Number"]
</div>
<p>Upload your Resume *</p>
<div class="post__file"><label>Сhoose File[file* file-cv limit:8388608 filetypes:.docx|.pdf|.txt|.rtf]</label>
<div class="post__file-title">Accepted formats: doc, .docx, .pdf, .txt, .rtf, maximum size 8MB</div></div>
<div class="post__btn"><div class="btn btn__primary"><button type="submit">Submit</button></div><div class="post__btn-title">Fields with * are required</div></div>
```

### Two pictures:

```
<div class="post__img">
<div class="post__img--first">
<img src="/wp-content/themes/wp-odell/assets/img/post_img1.jpg" alt="" />
</div>
<div class="post__img--second">
<img src="/wp-content/themes/wp-odell/assets/img/post_img2.jpg" alt="" />
</div>
</div>
```
