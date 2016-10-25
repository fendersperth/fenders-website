<?php include 'parts/head.php'; ?>
<body class="home">
	
	<div class="page-container">
		<div class="outer-container">

			<?php include 'parts/header.php'; ?>

            <div class="hero">

                <h2>We're a group of Front-Enders<br>and Web People with <span>.class</span></h2>

                <h3>Join the fun with our upcoming events</h3>
            </div>

            <?php include 'parts/events.php'; ?>

            <form class="join clearfix" action="" method="post">

                <legend>Join the convo with <span>312</span> other Fenders on Slack!</legend>

                <label>
                    <span class="hidden">Your Name</span>
                    <input type="text" name="name" placeholder="Your Name" class="required" aria-required="true">
                </label>

                <label>
                    <span class="hidden">Email Address</span>
                    <input type="email" name="email" placeholder="Email address" class="required email" aria-required="true">
                </label>

                <button class="btn" type="submit">Get me in!</button>

            </form>

				
		</div><!-- .outerContainer -->
	</div><!-- .pageContainer -->

    <?php include 'parts/footer.php'; ?>
	
	<?php include 'parts/footer-scripts.php'; ?>

</body>
</html>